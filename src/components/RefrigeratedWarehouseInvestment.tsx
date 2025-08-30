import { Snowflake, DollarSign, TrendingUp, MapPin } from "lucide-react";

export default function RefrigeratedWarehouseInvestment() {
  const lots = [
    {
      id: "01",
      type: "Premium",
      size: "3.62 acres",
      buildableSF: "55,000",
      totalInvestment: "$12.6M",
      annualRental: "$1.1M",
      roi: "6.5%"
    },
    {
      id: "02", 
      type: "Premium",
      size: "3.81 acres",
      buildableSF: "58,000",
      totalInvestment: "$13.3M",
      annualRental: "$1.2M",
      roi: "6.5%"
    },
    {
      id: "03",
      type: "Premium", 
      size: "7.02 acres",
      buildableSF: "107,000",
      totalInvestment: "$24.6M",
      annualRental: "$2.1M",
      roi: "6.5%"
    },
    {
      id: "04",
      type: "Premium",
      size: "7.15 acres", 
      buildableSF: "109,000",
      totalInvestment: "$25.0M",
      annualRental: "$2.2M",
      roi: "6.5%"
    },
    {
      id: "05",
      type: "Premium",
      size: "8.2 acres",
      buildableSF: "125,000", 
      totalInvestment: "$28.7M",
      annualRental: "$2.5M",
      roi: "6.5%"
    },
    {
      id: "06",
      type: "Standard",
      size: "3.51 acres",
      buildableSF: "53,500",
      totalInvestment: "$12.1M", 
      annualRental: "$1.1M",
      roi: "6.6%"
    }
  ];

  return (
    <section className="py-16 px-6 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary-foreground mb-4">Refrigerated Warehouse Investment</h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Premium cold storage facilities serving the cross-border produce trade. Higher investment, stable returns, and essential infrastructure for food supply chains.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 text-center hover:shadow-lg hover:shadow-blue-400/10 transition-all duration-300">
            <Snowflake className="h-8 w-8 text-blue-400 mx-auto mb-3" />
            <div className="text-3xl font-bold text-blue-400 mb-2">$210</div>
            <div className="text-sm text-muted-foreground">Construction Cost per Sq Ft</div>
          </div>
          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 text-center hover:shadow-lg hover:shadow-emerald-500/10 transition-all duration-300">
            <DollarSign className="h-8 w-8 text-emerald-500 mx-auto mb-3" />
            <div className="text-3xl font-bold text-emerald-500 mb-2">$20</div>
            <div className="text-sm text-muted-foreground">Annual Rent per Sq Ft</div>
          </div>
          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 text-center hover:shadow-lg hover:shadow-gold/10 transition-all duration-300">
            <TrendingUp className="h-8 w-8 text-gold mx-auto mb-3" />
            <div className="text-3xl font-bold text-gold mb-2">8.8%</div>
            <div className="text-sm text-muted-foreground">Average Portfolio ROI</div>
          </div>
          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 text-center hover:shadow-lg hover:shadow-amber-500/10 transition-all duration-300">
            <MapPin className="h-8 w-8 text-amber-500 mx-auto mb-3" />
            <div className="text-3xl font-bold text-amber-500 mb-2">$167M</div>
            <div className="text-sm text-muted-foreground">Total Portfolio Investment</div>
          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-primary-foreground mb-8">Individual Investment Opportunities</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {lots.map((lot) => (
              <div key={lot.id} className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 hover:shadow-lg hover:shadow-blue-400/10 transition-all duration-300 hover:-translate-y-1">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="text-lg font-semibold text-primary-foreground">Lot {lot.id} - {lot.type} Frontage</h4>
                    <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                      lot.type === 'Premium' ? 'bg-blue-400/20 text-blue-400' : 'bg-emerald-500/20 text-emerald-400'
                    }`}>
                      {lot.type}
                    </span>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Size:</span>
                    <span className="text-primary-foreground font-medium">{lot.size}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Buildable SF:</span>
                    <span className="text-primary-foreground font-medium">{lot.buildableSF}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Total Investment:</span>
                    <span className="text-blue-400 font-semibold">{lot.totalInvestment}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Annual Rental:</span>
                    <span className="text-emerald-500 font-semibold">{lot.annualRental}</span>
                  </div>
                  <div className="flex justify-between pt-2 border-t border-border">
                    <span className="text-muted-foreground">Projected ROI:</span>
                    <span className="text-gold font-bold text-lg">{lot.roi}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-8">
            <h3 className="text-2xl font-semibold text-primary-foreground mb-6">Cold Storage Market Advantages</h3>
            
            <div className="mb-6">
              <h4 className="text-lg font-medium text-blue-400 mb-4">Market Fundamentals</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  60% of Texas produce imports through Pharr-Reynosa
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  Essential infrastructure for food supply chain
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  Limited competition in modern cold storage
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  Premium rents vs. standard warehouse space
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-medium text-blue-400 mb-4">Fed Rate Benefits</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  Lower financing costs for capital-intensive development
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  Improved cash flows from reduced debt service
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  Better returns on energy-efficient systems
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  Expansion opportunities with cheaper capital
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-8">
            <h3 className="text-2xl font-semibold text-primary-foreground mb-6 text-center">Complete Refrigerated Warehouse Portfolio</h3>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">49.11</div>
                <div className="text-sm text-muted-foreground">Total Acres</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-500 mb-2">732K</div>
                <div className="text-sm text-muted-foreground">Buildable Sq Ft</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gold mb-2">$167M</div>
                <div className="text-sm text-muted-foreground">Total Investment</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-500 mb-2">$14.7M</div>
                <div className="text-sm text-muted-foreground">Annual Rental Income</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}