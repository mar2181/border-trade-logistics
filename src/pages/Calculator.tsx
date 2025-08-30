import React, { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Download, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import warehouseExterior from "@/assets/warehouse-exterior.jpg";

// McAllen Warehouse ROI & Rent Growth Calculator
// Adapted to match the investment report design system

export default function Calculator() {
  // Core inputs
  const [type, setType] = useState("Dry");
  const [squareFeet, setSquareFeet] = useState(55000); // default: Lot 01 example
  const [baseRent, setBaseRent] = useState(19.5); // $/SF/Yr starting at stabilization
  const [growth, setGrowth] = useState(4); // % per year
  const [vacancy, setVacancy] = useState(1.3); // % of GPR
  const [opexPct, setOpexPct] = useState(35); // % of EGI

  // Costs
  const [landCost, setLandCost] = useState(1100000); // $ Land cost (editable)
  const [costPerSF, setCostPerSF] = useState(120); // $/SF hard cost (editable)
  const [softCostPct, setSoftCostPct] = useState(5); // % of hard cost for soft costs/contingency (editable)

  // Financing (optional)
  const [useDebt, setUseDebt] = useState(true);
  const [ltv, setLtv] = useState(65); // % of total project cost
  const [rate, setRate] = useState(6.25); // % interest rate
  const [amortYears, setAmortYears] = useState(25);
  const [equity, setEquity] = useState(0); // Computed when useDebt, but user may override

  // Exit / sale (advanced; optional IRR)
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [showFinancing, setShowFinancing] = useState(false);
  const [exitCap, setExitCap] = useState(8); // % applied to Year 10 NOI for residual
  const [sellInYear, setSellInYear] = useState(10);

  // Preset helper: switch defaults when type changes (only if user hasn't customized heavily)
  function handleTypeChange(newType: string) {
    setType(newType);
    if (newType === "Dry") {
      // Typical dry defaults from brief (editable by user)
      setBaseRent(12.5);
      setCostPerSF(120);
    } else {
      // Refrigerated defaults (editable)
      setBaseRent(19.5);
      setCostPerSF(210);
    }
  }

  const hardCost = useMemo(() => squareFeet * costPerSF, [squareFeet, costPerSF]);
  const softCost = useMemo(() => (hardCost * softCostPct) / 100, [hardCost, softCostPct]);
  const totalProjectCost = useMemo(() => landCost + hardCost + softCost, [landCost, hardCost, softCost]);

  // Loan math
  const loanAmount = useMemo(() => (useDebt ? (totalProjectCost * ltv) / 100 : 0), [useDebt, totalProjectCost, ltv]);
  const equityRequired = useMemo(() => (useDebt ? totalProjectCost - loanAmount : totalProjectCost), [useDebt, totalProjectCost, loanAmount]);

  // Mortgage constant for annual debt service
  function annualDebtService(loan: number, ratePct: number, amortYrs: number) {
    if (!useDebt || loan <= 0) return 0;
    const r = ratePct / 100;
    const n = amortYrs;
    if (r === 0) return loan / n; // no-interest edge case
    const annuity = (loan * r) / (1 - Math.pow(1 + r, -n));
    return annuity; // annual payment if rate is per year and n in years
  }

  const ads = useMemo(() => annualDebtService(loanAmount, rate, amortYears), [loanAmount, rate, amortYears]);

  // Projection rows, years 1..10
  const rows = useMemo(() => {
    const out = [];
    for (let y = 1; y <= 10; y++) {
      const gpr = squareFeet * baseRent * Math.pow(1 + growth / 100, y - 1); // Gross Potential Rent
      const vac = gpr * (vacancy / 100);
      const egi = gpr - vac; // Effective Gross Income
      const opex = egi * (opexPct / 100);
      const noi = egi - opex;
      const ds = ads; // Annual debt service (fixed-rate, level pay)
      const cashFlow = noi - ds; // Levered cash flow (pre-tax)
      out.push({
        year: y,
        baseRentPSF: +(baseRent * Math.pow(1 + growth / 100, y - 1)).toFixed(2),
        gpr: gpr,
        vacancyLoss: vac,
        egi: egi,
        opex: opex,
        noi: noi,
        ds: ds,
        cashFlow: cashFlow,
      });
    }
    return out;
  }, [squareFeet, baseRent, growth, vacancy, opexPct, ads]);

  // Exit value & IRR (simple)
  const exitValue = useMemo(() => {
    const final = rows.find(r => r.year === sellInYear);
    if (!final) return 0;
    return final.noi / (exitCap / 100);
  }, [rows, exitCap, sellInYear]);

  // Very simple IRR using Newton-Raphson on yearly cash flows (equity outlay at t=0, then levered CFs, with sale in exit year)
  function computeIRR() {
    if (!useDebt) return null; // keep simple
    const cfs = [];
    cfs.push(-equityRequired); // t0
    for (let y = 1; y <= 10; y++) {
      const r = rows[y - 1];
      let cf = r.cashFlow;
      if (y === sellInYear) cf += exitValue; // add residual on sale year
      cfs.push(cf);
    }
    // Guess and iterate
    let rate = 0.12; // 12% initial guess
    for (let i = 0; i < 50; i++) {
      let npv = 0;
      let dnpv = 0;
      for (let t = 0; t < cfs.length; t++) {
        npv += cfs[t] / Math.pow(1 + rate, t);
        if (t > 0) dnpv += (-t * cfs[t]) / Math.pow(1 + rate, t + 1);
      }
      const newRate = rate - npv / (dnpv || 1e-9);
      if (!isFinite(newRate)) break;
      if (Math.abs(newRate - rate) < 1e-6) {
        rate = newRate;
        break;
      }
      rate = newRate;
    }
    return rate;
  }

  const irr = useMemo(() => (showAdvanced && useDebt ? computeIRR() : null), [showAdvanced, useDebt, rows, exitValue, equityRequired]);

  // CSV Export
  function exportCSV() {
    const headers = [
      "Year",
      "Rent $/SF/Yr",
      "Gross Potential Rent",
      "Vacancy Loss",
      "Effective Gross Income",
      "Operating Expenses",
      "NOI",
      "Debt Service",
      "Levered Cash Flow",
      "Monthly Gross Rent",
      "Monthly NOI",
    ];
    const lines = [headers.join(",")];
    rows.forEach(r => {
      const monthlyGPR = r.gpr / 12;
      const monthlyNOI = r.noi / 12;
      lines.push([
        r.year,
        r.baseRentPSF.toFixed(2),
        r.gpr.toFixed(0),
        r.vacancyLoss.toFixed(0),
        r.egi.toFixed(0),
        r.opex.toFixed(0),
        r.noi.toFixed(0),
        r.ds.toFixed(0),
        r.cashFlow.toFixed(0),
        monthlyGPR.toFixed(0),
        monthlyNOI.toFixed(0),
      ].join(","));
    });
    const blob = new Blob([lines.join("\n")], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "mcallen-warehouse-calculator.csv";
    a.click();
    URL.revokeObjectURL(url);
  }

  // Utility UI helpers
  function Stat({ label, value, sub }: { label: string; value: string; sub?: string }) {
    return (
      <div className="investment-card p-4">
        <div className="text-muted-foreground text-sm">{label}</div>
        <div className="text-2xl font-semibold text-foreground">{value}</div>
        {sub && <div className="text-xs text-muted-foreground mt-1">{sub}</div>}
      </div>
    );
  }

  const y1 = rows[0];
  const y10 = rows[9];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Header */}
      <div className="sticky top-0 bg-background/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container-premium">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center space-x-4">
              <Link to="/" className="flex items-center space-x-2 text-muted-foreground hover:text-gold transition-colors">
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Investment Overview</span>
              </Link>
            </div>
            
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Phone className="w-4 h-4" />
              <span>(956) 522-1481</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container-premium py-8">
        <header className="mb-8">
          <h1 className="text-4xl font-bold tracking-tight text-foreground mb-2">McAllen Warehouse Investment Calculator</h1>
          <p className="text-lg text-muted-foreground">Model monthly rent, NOI, and leveraged returns over 10 years. Start with presets, then fine-tune to match your deal.</p>
        </header>

        {/* Inputs */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <section className="lg:col-span-2 investment-card p-6">
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <label className="text-sm font-medium text-foreground">Warehouse Type</label>
              <div className="inline-flex rounded-lg border border-border overflow-hidden">
                {(["Dry", "Refrigerated"] as const).map((t) => (
                  <button
                    key={t}
                    onClick={() => handleTypeChange(t)}
                    className={`px-4 py-2 text-sm transition-colors ${
                      type === t 
                        ? "bg-primary text-primary-foreground" 
                        : "bg-background text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
              <span className="text-xs text-muted-foreground">Presets are editable below.</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <Field label="Buildable Area (SF)">
                <NumberInput value={squareFeet} onChange={setSquareFeet} min={0} step={1000} />
              </Field>
              <Field label="Base Rent $/SF/Yr (Year 1)">
                <NumberInput value={baseRent} onChange={setBaseRent} min={0} step={0.25} />
              </Field>
              <Field label="Annual Rent Growth %">
                <NumberInput value={growth} onChange={setGrowth} min={0} step={0.5} />
              </Field>
              <Field label="Vacancy %">
                <NumberInput value={vacancy} onChange={setVacancy} min={0} step={0.1} />
              </Field>
              <Field label="Operating Expenses % of EGI">
                <NumberInput value={opexPct} onChange={setOpexPct} min={0} step={0.5} />
              </Field>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <Field label="Land Cost ($)">
                <NumberInput value={landCost} onChange={setLandCost} min={0} step={50000} />
              </Field>
              <Field label="Construction Cost $/SF">
                <NumberInput value={costPerSF} onChange={setCostPerSF} min={0} step={5} />
              </Field>
              <Field label="Soft/Contingency % of Hard Cost">
                <NumberInput value={softCostPct} onChange={setSoftCostPct} min={0} step={0.5} />
              </Field>
            </div>

            <div className="space-y-4">
              <button
                className="text-sm rounded-lg border border-border px-4 py-2 hover:bg-accent transition-colors"
                onClick={() => setShowFinancing(v => !v)}
              >{showFinancing ? "Hide" : "Show"} Financing</button>
              {showFinancing && (
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4 bg-muted/50 rounded-lg">
                  <Toggle label="Use Financing" value={useDebt} onChange={setUseDebt} />
                  <Field label="LTV %">
                    <NumberInput value={ltv} onChange={setLtv} min={0} max={95} step={1} />
                  </Field>
                  <Field label="Interest Rate %">
                    <NumberInput value={rate} onChange={setRate} min={0} step={0.05} />
                  </Field>
                  <Field label="Amortization (years)">
                    <NumberInput value={amortYears} onChange={setAmortYears} min={1} step={1} />
                  </Field>
                </div>
              )}

              <button
                className="text-sm rounded-lg border border-border px-4 py-2 hover:bg-accent transition-colors"
                onClick={() => setShowAdvanced(v => !v)}
              >{showAdvanced ? "Hide" : "Show"} Advanced (Exit & IRR)</button>
              {showAdvanced && (
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4 bg-muted/50 rounded-lg">
                  <Field label="Exit Cap Rate % (Year 10 by default)">
                    <NumberInput value={exitCap} onChange={setExitCap} min={3} step={0.1} />
                  </Field>
                  <Field label="Sell in Year">
                    <NumberInput value={sellInYear} onChange={setSellInYear} min={1} max={10} step={1} />
                  </Field>
                </div>
              )}
            </div>
          </section>

          {/* Summary */}
          <aside className="investment-card p-6 h-max">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-foreground">Deal Snapshot</h3>
              <Button onClick={exportCSV} variant="outline" size="sm">
                <Download className="w-4 h-4 mr-2" />
                CSV
              </Button>
            </div>

            <div className="grid grid-cols-1 gap-4 mb-6">
              <Stat label="Project Cost" value={formatUSD(totalProjectCost)} sub={`${formatUSD(landCost)} land + ${formatUSD(hardCost)} hard + ${softCostPct}% soft`} />
              <Stat label="Loan Amount" value={useDebt ? formatUSD(loanAmount) : "—"} sub={`${ltv}% LTV`} />
              <Stat label="Equity Needed" value={formatUSD(equityRequired)} sub={useDebt ? "Total Cost − Loan" : "No debt used"} />
              <Stat label="Annual DS" value={useDebt ? formatUSD(ads) : "—"} sub={`${rate}% / ${amortYears}y`} />
            </div>

            <div className="grid grid-cols-1 gap-4 mb-6">
              <Stat label="Year 1 Monthly Gross" value={y1 ? formatUSD(y1.gpr/12) : "—"} sub={`${fmt(baseRent)} $/SF/Yr × ${fmt(squareFeet)} SF`} />
              <Stat label="Year 1 Monthly NOI" value={y1 ? formatUSD(y1.noi/12) : "—"} sub={`${vacancy}% vac, ${opexPct}% OpEx`} />
              <Stat label="Year 10 Monthly Gross" value={y10 ? formatUSD(y10.gpr/12) : "—"} sub={`@ ${growth}% growth`} />
              <Stat label="Year 10 Monthly NOI" value={y10 ? formatUSD(y10.noi/12) : "—"} />
            </div>

            {showAdvanced && (
              <div className="grid grid-cols-1 gap-4 mb-6">
                <Stat label={`Exit Value (Year ${sellInYear})`} value={formatUSD(exitValue)} sub={`${exitCap}% cap on NOI`} />
                <Stat label="Levered IRR (est.)" value={irr != null && isFinite(irr) ? `${(irr*100).toFixed(1)}%` : "—"} sub="Equity outlay & sale included" />
              </div>
            )}

            <div className="text-xs text-muted-foreground">
              <p><strong>Notes:</strong> Vacancy applied to Gross Potential Rent. OpEx applied to EGI. Debt service held flat at fixed rate. All results are pre-tax estimates.</p>
            </div>
          </aside>
        </div>

        {/* Table */}
        <section className="mt-8 investment-card p-6 overflow-x-auto">
          <h3 className="text-lg font-semibold mb-4 text-foreground">10-Year Projection</h3>
          <table className="min-w-full text-sm">
            <thead>
              <tr className="text-left text-muted-foreground border-b border-border">
                <Th>Year</Th>
                <Th>Rent $/SF/Yr</Th>
                <Th>Gross Potential Rent</Th>
                <Th>Vacancy Loss</Th>
                <Th>Effective Gross Income</Th>
                <Th>Operating Expenses</Th>
                <Th>NOI</Th>
                <Th>Debt Service</Th>
                <Th>Levered Cash Flow</Th>
                <Th>Monthly Gross</Th>
                <Th>Monthly NOI</Th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.year} className="border-b border-border/50 last:border-0">
                  <Td>{r.year}</Td>
                  <Td>{fmt(r.baseRentPSF, 2)}</Td>
                  <Td>{formatUSD(r.gpr)}</Td>
                  <Td className="text-accent-ruby">{formatUSD(r.vacancyLoss)}</Td>
                  <Td>{formatUSD(r.egi)}</Td>
                  <Td className="text-accent-amber">{formatUSD(r.opex)}</Td>
                  <Td className="font-medium text-foreground">{formatUSD(r.noi)}</Td>
                  <Td>{useDebt ? formatUSD(r.ds) : "—"}</Td>
                  <Td className={r.cashFlow < 0 ? "text-accent-ruby" : "text-accent-emerald"}>{useDebt ? formatUSD(r.cashFlow) : "—"}</Td>
                  <Td>{formatUSD(r.gpr/12)}</Td>
                  <Td>{formatUSD(r.noi/12)}</Td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <footer className="mt-8 text-xs text-muted-foreground">
          <p>
            Built for the McAllen / Military Hwy (FM 1016) opportunity. Adjust defaults for Dry vs Refrigerated, or plug in your own assumptions
            (e.g., $19.50 starting rent, 4% growth, 1.3% vacancy, 35% OpEx). Use the CSV to share with investors.
          </p>
        </footer>
      </div>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="flex flex-col gap-1 text-sm">
      <span className="text-muted-foreground">{label}</span>
      {children}
    </label>
  );
}

function Toggle({ label, value, onChange }: { label: string; value: boolean; onChange: (value: boolean) => void }) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-sm text-muted-foreground">{label}</span>
      <button
        onClick={() => onChange(!value)}
        className={`relative inline-flex h-6 w-11 items-center rounded-full transition ${
          value ? "bg-primary" : "bg-muted"
        }`}
      >
        <span
          className={`inline-block h-4 w-4 transform rounded-full bg-background transition ${
            value ? "translate-x-6" : "translate-x-1"
          }`}
        />
      </button>
    </div>
  );
}

function NumberInput({ value, onChange, min, max, step }: { 
  value: number; 
  onChange: (value: number) => void; 
  min?: number; 
  max?: number; 
  step?: number; 
}) {
  return (
    <input
      type="number"
      value={value}
      min={min}
      max={max}
      step={step}
      onChange={(e) => onChange(parseFloat(e.target.value || "0"))}
      className="w-full rounded-lg border border-border bg-background px-3 py-2 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
    />
  );
}

function Th({ children }: { children: React.ReactNode }) {
  return <th className="py-3 pr-4 whitespace-nowrap font-medium">{children}</th>;
}

function Td({ children, className }: { children: React.ReactNode; className?: string }) {
  return <td className={`py-3 pr-4 whitespace-nowrap text-muted-foreground ${className || ""}`}>{children}</td>;
}

function fmt(n: number, digits = 0) {
  return Number(n).toLocaleString(undefined, { maximumFractionDigits: digits, minimumFractionDigits: digits });
}

function formatUSD(n: number) {
  return n.toLocaleString(undefined, { style: "currency", currency: "USD", maximumFractionDigits: 0 });
}