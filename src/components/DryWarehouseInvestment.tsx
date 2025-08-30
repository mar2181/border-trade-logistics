import { Building2, DollarSign, TrendingUp, MapPin } from "lucide-react";

export default function DryWarehouseInvestment() {
  const lots = [
    {
      id: "01",
      type: "Premium",
      size: "3.62 acres",
      buildableSF: "55,000",
      totalInvestment: "$7.7M",
      annualRental: "$1.0M",
      roi: "9.7%"
    },
    {
      id: "02", 
      type: "Premium",
      size: "3.81 acres",
      buildableSF: "58,000",
      totalInvestment: "$8.1M",
      annualRental: "$1.0M",
      roi: "9.7%"
    },
    {
      id: "03",
      type: "Premium", 
      size: "7.02 acres",
      buildableSF: "107,000",
      totalInvestment: "$14.9M",
      annualRental: "$1.9M",
      roi: "9.7%"
    },
    {
      id: "04",
      type: "Premium",
      size: "7.15 acres", 
      buildableSF: "109,000",
      totalInvestment: "$15.2M",
      annualRental: "$2.0M",
      roi: "9.7%"
    },
    {
      id: "05",
      type: "Premium",
      size: "8.2 acres",
      buildableSF: "125,000", 
      totalInvestment: "$17.5M",
      annualRental: "$2.3M",
      roi: "9.7%"
    },
    {
      id: "06",
      type: "Standard",
      size: "3.51 acres",
      buildableSF: "53,500",
      totalInvestment: "$7.3M", 
      annualRental: "$1.0M",
      roi: "9.9%"
    }
  ];

  return (
    <section className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary-foreground mb-4">Dry Warehouse Investment</h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            High-ROI opportunity with lower entry costs and strong cash-on-cash returns. Fed rate cuts make financing more attractive for traditional warehouse development.
          </p>
        </div>

        <div className="relative overflow-hidden rounded-xl border border-border mb-8">
          <img 
            src="/lovable-uploads/7b830446-6938-41b0-9b69-92d8fc6a54ee.png" 
            alt="Modern dry warehouse interior with polished concrete floors" 
            className="w-full h-64 object-cover"
          />
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 text-center hover:shadow-lg hover:shadow-gold/10 transition-all duration-300">
            <Building2 className="h-8 w-8 text-gold mx-auto mb-3" />
            <div className="text-3xl font-bold text-gold mb-2">$120</div>
            <div className="text-sm text-muted-foreground">Construction Cost per Sq Ft</div>
          </div>
          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 text-center hover:shadow-lg hover:shadow-emerald-500/10 transition-all duration-300">
            <DollarSign className="h-8 w-8 text-emerald-500 mx-auto mb-3" />
            <div className="text-3xl font-bold text-emerald-500 mb-2">$12.50</div>
            <div className="text-sm text-muted-foreground">Annual Rent per Sq Ft</div>
          </div>
          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 text-center hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300">
            <TrendingUp className="h-8 w-8 text-blue-500 mx-auto mb-3" />
            <div className="text-3xl font-bold text-blue-500 mb-2">13.0%</div>
            <div className="text-sm text-muted-foreground">Average Portfolio ROI</div>
          </div>
          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 text-center hover:shadow-lg hover:shadow-amber-500/10 transition-all duration-300">
            <MapPin className="h-8 w-8 text-amber-500 mx-auto mb-3" />
            <div className="text-3xl font-bold text-amber-500 mb-2">$101M</div>
            <div className="text-sm text-muted-foreground">Total Portfolio Investment</div>
          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-primary-foreground mb-8">Individual Investment Opportunities</h3>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="relative overflow-hidden rounded-xl border border-border">
              <img 
                src="/lovable-uploads/318dfb75-0eb2-4d25-a153-b8b6829a954b.png" 
                alt="Warehouse interior showing loading docks and high-ceiling design" 
                className="w-full h-48 object-cover"
              />
            </div>
            
            <div className="relative overflow-hidden rounded-xl border border-border">
              <img 
                src="/lovable-uploads/4978e488-3fbd-486b-98e7-7512cc55957f.png" 
                alt="Modern warehouse exterior with professional landscaping" 
                className="w-full h-48 object-cover"
              />
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {lots.map((lot) => (
              <div key={lot.id} className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 hover:shadow-lg hover:shadow-gold/10 transition-all duration-300 hover:-translate-y-1">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="text-lg font-semibold text-primary-foreground">Lot {lot.id} - {lot.type} Frontage</h4>
                    <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                      lot.type === 'Premium' ? 'bg-gold/20 text-gold' : 'bg-blue-500/20 text-blue-400'
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
                    <span className="text-gold font-semibold">{lot.totalInvestment}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Annual Rental:</span>
                    <span className="text-emerald-500 font-semibold">{lot.annualRental}</span>
                  </div>
                  <div className="flex justify-between pt-2 border-t border-border">
                    <span className="text-muted-foreground">Projected ROI:</span>
                    <span className="text-blue-500 font-bold text-lg">{lot.roi}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-8">
            <h3 className="text-2xl font-semibold text-primary-foreground mb-6">Fed Rate Cuts Impact on Dry Warehouse Investment</h3>
            
            <div className="mb-6">
              <h4 className="text-lg font-medium text-gold mb-4">Financing Advantages</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-gold mr-2">•</span>
                  Lower construction loan rates reduce carrying costs
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2">•</span>
                  Improved debt service coverage ratios
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2">•</span>
                  Enhanced cash-on-cash returns through leverage
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2">•</span>
                  Refinancing opportunities for existing developments
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-medium text-gold mb-4">Market Movement Benefits</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-gold mr-2">•</span>
                  Increased business activity from lower borrowing costs
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2">•</span>
                  More importers expanding operations
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2">•</span>
                  Higher demand for flexible warehouse space
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2">•</span>
                  Optimal timing for new development projects
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-8">
            <h3 className="text-2xl font-semibold text-primary-foreground mb-6 text-center">Complete Dry Warehouse Portfolio</h3>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-gold mb-2">49.11</div>
                <div className="text-sm text-muted-foreground">Total Acres</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-500 mb-2">732K</div>
                <div className="text-sm text-muted-foreground">Buildable Sq Ft</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-500 mb-2">$101M</div>
                <div className="text-sm text-muted-foreground">Total Investment</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-500 mb-2">$13.2M</div>
                <div className="text-sm text-muted-foreground">Annual Rental Income</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}