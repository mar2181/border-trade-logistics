import { BarChart3, DollarSign, Percent, TrendingUp } from "lucide-react";
export default function FinancialProjections() {
  const landPortfolioSummary = {
    totalLandInvestment: "$12.24M",
    totalAcres: "44.17 acres",
    avgPricePerAcre: "$277K",
    annualHoldingCosts: "$367K",
    projectedAppreciation: "8-12%",
    threYearValue: "$17.5M"
  };
  const landAssumptions = {
    market: [{
      label: "Vacancy Rate",
      value: "3%"
    }, {
      label: "Land Appreciation",
      value: "10-15% annually"
    }, {
      label: "Holding Costs",
      value: "2-3% annually"
    }],
    pricing: [{
      label: "Premium Lots",
      value: "$300K/acre"
    }, {
      label: "Standard Lots",
      value: "$265K/acre"
    }, {
      label: "Market Comparables",
      value: "$281K/acre avg"
    }],
    development: [{
      label: "Optional Dry Warehouse",
      value: "$120/sq ft"
    }, {
      label: "Optional Refrigerated",
      value: "$200-220/sq ft"
    }, {
      label: "Land Ready for Build",
      value: "Immediate"
    }]
  };
  return <section className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4">MCC Industrial Park - Financial Projections & Strategy</h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8">
            Comprehensive analysis of land appreciation potential, development strategies, and exit scenarios for the 44.17-acre portfolio
          </p>
          
          <div className="relative overflow-hidden rounded-xl border border-border max-w-2xl mx-auto">
            <img src="/lovable-uploads/3f8d60fa-ce14-48f0-b0e1-baac1a96b428.png" alt="Modern laboratory facility for produce quality testing" className="w-full h-48 object-cover" />
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-primary mb-8 text-center">Land Portfolio Investment Summary</h3>
          
          <div className="grid lg:grid-cols-1 gap-8 max-w-4xl mx-auto">
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-8">
              <div className="flex items-center mb-6 justify-center">
                <BarChart3 className="h-8 w-8 text-gold mr-3" />
                <h4 className="text-xl font-semibold text-primary">MCC Industrial Park - 44.17 Acres</h4>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Total Land Investment:</span>
                    <span className="text-2xl font-bold text-gold">{landPortfolioSummary.totalLandInvestment}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Total Acres:</span>
                    <span className="text-xl font-semibold text-emerald-500">{landPortfolioSummary.totalAcres}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Average Price/Acre:</span>
                    <span className="text-xl font-semibold text-blue-500">{landPortfolioSummary.avgPricePerAcre}</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Annual Holding Costs:</span>
                    <span className="text-xl font-semibold text-red-400">{landPortfolioSummary.annualHoldingCosts}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Projected Appreciation:</span>
                    <span className="text-xl font-semibold text-emerald-500">{landPortfolioSummary.projectedAppreciation}</span>
                  </div>
                  <div className="flex justify-between items-center pt-4 border-t border-border">
                    <span className="text-muted-foreground">4-Year Value (12% avg):</span>
                    <span className="text-2xl font-bold text-amber-500">{landPortfolioSummary.threYearValue}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-primary mb-8 text-center">Key Land Investment Assumptions</h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6">
              <h4 className="text-lg font-semibold text-gold mb-4">Market Fundamentals</h4>
              <div className="space-y-3">
                {landAssumptions.market.map((item, index) => <div key={index} className="flex justify-between">
                    <span className="text-muted-foreground">{item.label}:</span>
                    <span className="text-foreground font-medium">{item.value}</span>
                  </div>)}
              </div>
            </div>

            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6">
              <h4 className="text-lg font-semibold text-emerald-500 mb-4">Land Pricing</h4>
              <div className="space-y-3">
                {landAssumptions.pricing.map((item, index) => <div key={index} className="flex justify-between">
                    <span className="text-muted-foreground">{item.label}:</span>
                    <span className="text-foreground font-medium">{item.value}</span>
                  </div>)}
              </div>
            </div>

            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6">
              <h4 className="text-lg font-semibold text-blue-500 mb-4">Development Potential</h4>
              <div className="space-y-3">
                {landAssumptions.development.map((item, index) => <div key={index} className="flex justify-between">
                    <span className="text-muted-foreground">{item.label}:</span>
                    <span className="text-foreground font-medium">{item.value}</span>
                  </div>)}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-gold/10 to-blue-500/10 rounded-xl p-8">
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-primary mb-4">Land Investment Return Profile</h3>
            <p className="text-muted-foreground mb-8 max-w-3xl mx-auto">Conservative land appreciation projections based on market fundamentals: 3% vacancy (3Q24), $6B+ trade volume, and current rate environment</p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <Percent className="h-8 w-8 text-gold mx-auto mb-3" />
                <div className="text-3xl font-bold text-gold mb-2">10-15%</div>
                <div className="text-sm text-muted-foreground">Annual Land Appreciation</div>
              </div>
              <div className="text-center">
                <TrendingUp className="h-8 w-8 text-emerald-500 mx-auto mb-3" />
                <div className="text-3xl font-bold text-emerald-500 mb-2">20-30%</div>
                <div className="text-sm text-muted-foreground">Exit Premium (2-3 years)</div>
              </div>
              <div className="text-center">
                <BarChart3 className="h-8 w-8 text-blue-500 mx-auto mb-3" />
                <div className="text-3xl font-bold text-blue-500 mb-2">2-3%</div>
                <div className="text-sm text-muted-foreground">Annual Holding Costs</div>
              </div>
            </div>
            
            <div className="mt-8 p-6 bg-emerald-50 dark:bg-emerald-500/10 rounded-lg">
              <h4 className="text-lg font-semibold text-emerald-700 dark:text-emerald-400 mb-2">Buyer Development Options (Optional)</h4>
              <p className="text-sm text-emerald-600 dark:text-emerald-300">
                If developing: Dry warehouse could yield 9.7-13% ROI post-build; refrigerated 6.5-8.8%. 
                Costs: $120/SF dry, $200-220/SF refrigerated – but land purchase first unlocks your vision.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>;
}