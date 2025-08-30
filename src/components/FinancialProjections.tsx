import { BarChart3, DollarSign, Percent, TrendingUp } from "lucide-react";

export default function FinancialProjections() {
  const portfolioSummary = {
    dry: {
      totalInvestment: "$101.5M",
      annualRental: "$13.2M",
      netOperatingIncome: "$9.9M",
      capRate: "9.8%"
    },
    refrigerated: {
      totalInvestment: "$167.4M",
      annualRental: "$14.7M",
      netOperatingIncome: "$11.0M",
      capRate: "6.6%"
    }
  };

  const keyAssumptions = {
    market: [
      { label: "Vacancy Rate", value: "1.3%" },
      { label: "Rent Growth", value: "4% annually" },
      { label: "Operating Expenses", value: "35%" }
    ],
    construction: [
      { label: "Dry Warehouse", value: "$280/sq ft" },
      { label: "Refrigerated", value: "$350/sq ft" },
      { label: "Development Timeline", value: "11 months" }
    ],
    rental: [
      { label: "Dry Storage", value: "$12.50/sq ft" },
      { label: "Refrigerated", value: "$19.50/sq ft" },
      { label: "Unit Size", value: "5K-10K sq ft" }
    ]
  };

  return (
    <section className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary-foreground mb-4">Financial Projections</h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8">
            Comprehensive investment analysis showing projected returns for both dry and refrigerated warehouse development scenarios
          </p>
          
          <div className="relative overflow-hidden rounded-xl border border-border max-w-2xl mx-auto">
            <img 
              src="/lovable-uploads/3f8d60fa-ce14-48f0-b0e1-baac1a96b428.png" 
              alt="Modern laboratory facility for produce quality testing" 
              className="w-full h-48 object-cover"
            />
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-primary-foreground mb-8 text-center">Portfolio Investment Summary</h3>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-8">
              <div className="flex items-center mb-6">
                <BarChart3 className="h-8 w-8 text-gold mr-3" />
                <h4 className="text-xl font-semibold text-primary-foreground">Dry Warehouse Portfolio</h4>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Total Investment:</span>
                  <span className="text-2xl font-bold text-gold">{portfolioSummary.dry.totalInvestment}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Annual Rental:</span>
                  <span className="text-xl font-semibold text-emerald-500">{portfolioSummary.dry.annualRental}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Net Operating Income:</span>
                  <span className="text-xl font-semibold text-blue-500">{portfolioSummary.dry.netOperatingIncome}</span>
                </div>
                <div className="flex justify-between items-center pt-4 border-t border-border">
                  <span className="text-muted-foreground">Cap Rate:</span>
                  <span className="text-2xl font-bold text-amber-500">{portfolioSummary.dry.capRate}</span>
                </div>
              </div>
            </div>

            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-8">
              <div className="flex items-center mb-6">
                <DollarSign className="h-8 w-8 text-blue-400 mr-3" />
                <h4 className="text-xl font-semibold text-primary-foreground">Refrigerated Warehouse Portfolio</h4>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Total Investment:</span>
                  <span className="text-2xl font-bold text-blue-400">{portfolioSummary.refrigerated.totalInvestment}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Annual Rental:</span>
                  <span className="text-xl font-semibold text-emerald-500">{portfolioSummary.refrigerated.annualRental}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Net Operating Income:</span>
                  <span className="text-xl font-semibold text-blue-500">{portfolioSummary.refrigerated.netOperatingIncome}</span>
                </div>
                <div className="flex justify-between items-center pt-4 border-t border-border">
                  <span className="text-muted-foreground">Cap Rate:</span>
                  <span className="text-2xl font-bold text-amber-500">{portfolioSummary.refrigerated.capRate}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-primary-foreground mb-8 text-center">Key Investment Assumptions</h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6">
              <h4 className="text-lg font-semibold text-gold mb-4">Market Assumptions</h4>
              <div className="space-y-3">
                {keyAssumptions.market.map((item, index) => (
                  <div key={index} className="flex justify-between">
                    <span className="text-muted-foreground">{item.label}:</span>
                    <span className="text-primary-foreground font-medium">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6">
              <h4 className="text-lg font-semibold text-emerald-500 mb-4">Construction Costs</h4>
              <div className="space-y-3">
                {keyAssumptions.construction.map((item, index) => (
                  <div key={index} className="flex justify-between">
                    <span className="text-muted-foreground">{item.label}:</span>
                    <span className="text-primary-foreground font-medium">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6">
              <h4 className="text-lg font-semibold text-blue-500 mb-4">Rental Rates</h4>
              <div className="space-y-3">
                {keyAssumptions.rental.map((item, index) => (
                  <div key={index} className="flex justify-between">
                    <span className="text-muted-foreground">{item.label}:</span>
                    <span className="text-primary-foreground font-medium">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-gold/10 to-blue-500/10 rounded-xl p-8">
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-primary-foreground mb-4">Risk-Adjusted Return Profile</h3>
            <p className="text-muted-foreground mb-8 max-w-3xl mx-auto">
              Conservative projections and proven mitigation strategies create a compelling risk-adjusted return profile for sophisticated investors
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <Percent className="h-8 w-8 text-gold mx-auto mb-3" />
                <div className="text-3xl font-bold text-gold mb-2">7-9%</div>
                <div className="text-sm text-muted-foreground">Projected Cap Rates</div>
              </div>
              <div className="text-center">
                <TrendingUp className="h-8 w-8 text-emerald-500 mx-auto mb-3" />
                <div className="text-3xl font-bold text-emerald-500 mb-2">12-15%</div>
                <div className="text-sm text-muted-foreground">IRR Target Range</div>
              </div>
              <div className="text-center">
                <BarChart3 className="h-8 w-8 text-blue-500 mx-auto mb-3" />
                <div className="text-3xl font-bold text-blue-500 mb-2">1.25x</div>
                <div className="text-sm text-muted-foreground">Debt Service Coverage</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}