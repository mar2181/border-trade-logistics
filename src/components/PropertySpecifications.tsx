import { MapPin, Building, Calculator, TrendingUp } from "lucide-react";

export default function PropertySpecifications() {
  const lots = [
    {
      id: "01",
      type: "Premium",
      landInvestment: "$1.1M",
      totalAcres: "3.62",
      buildableSF: "55,000",
      perAcre: "$300K",
      estUnits: "7",
      dryWarehouse: {
        constructionCost: "$6.6M",
        totalInvestment: "$7.7M",
        annualRental: "$1.0M",
        roi: "9.7%"
      },
      refrigerated: {
        constructionCost: "$11.6M",
        totalInvestment: "$12.6M",
        annualRental: "$1.1M",
        roi: "6.5%"
      }
    },
    {
      id: "02",
      type: "Premium",
      landInvestment: "$1.1M",
      totalAcres: "3.81",
      buildableSF: "58,000",
      perAcre: "$300K",
      estUnits: "7",
      dryWarehouse: {
        constructionCost: "$7.0M",
        totalInvestment: "$8.1M",
        annualRental: "$1.0M",
        roi: "9.7%"
      },
      refrigerated: {
        constructionCost: "$12.2M",
        totalInvestment: "$13.3M",
        annualRental: "$1.2M",
        roi: "6.5%"
      }
    },
    {
      id: "03",
      type: "Premium",
      landInvestment: "$2.1M",
      totalAcres: "7.02",
      buildableSF: "107,000",
      perAcre: "$300K",
      estUnits: "13",
      dryWarehouse: {
        constructionCost: "$12.8M",
        totalInvestment: "$14.9M",
        annualRental: "$1.9M",
        roi: "9.7%"
      },
      refrigerated: {
        constructionCost: "$22.5M",
        totalInvestment: "$24.6M",
        annualRental: "$2.1M",
        roi: "6.5%"
      }
    },
    {
      id: "04",
      type: "Premium",
      landInvestment: "$2.1M",
      totalAcres: "7.15",
      buildableSF: "109,000",
      perAcre: "$300K",
      estUnits: "14",
      dryWarehouse: {
        constructionCost: "$13.1M",
        totalInvestment: "$15.2M",
        annualRental: "$2.0M",
        roi: "9.7%"
      },
      refrigerated: {
        constructionCost: "$22.9M",
        totalInvestment: "$25.0M",
        annualRental: "$2.2M",
        roi: "6.5%"
      }
    },
    {
      id: "05",
      type: "Premium",
      landInvestment: "$2.5M",
      totalAcres: "8.2",
      buildableSF: "125,000",
      perAcre: "$300K",
      estUnits: "16",
      dryWarehouse: {
        constructionCost: "$15.0M",
        totalInvestment: "$17.5M",
        annualRental: "$2.3M",
        roi: "9.7%"
      },
      refrigerated: {
        constructionCost: "$26.3M",
        totalInvestment: "$28.7M",
        annualRental: "$2.5M",
        roi: "6.5%"
      }
    },
    {
      id: "06",
      type: "Standard",
      landInvestment: "$0.9M",
      totalAcres: "3.51",
      buildableSF: "53,500",
      perAcre: "$250K",
      estUnits: "7",
      dryWarehouse: {
        constructionCost: "$6.4M",
        totalInvestment: "$7.3M",
        annualRental: "$1.0M",
        roi: "9.9%"
      },
      refrigerated: {
        constructionCost: "$11.2M",
        totalInvestment: "$12.1M",
        annualRental: "$1.1M",
        roi: "6.6%"
      }
    },
    {
      id: "07",
      type: "Standard",
      landInvestment: "$0.9M",
      totalAcres: "3.5",
      buildableSF: "53,300",
      perAcre: "$250K",
      estUnits: "7",
      dryWarehouse: {
        constructionCost: "$6.4M",
        totalInvestment: "$7.3M",
        annualRental: "$1.0M",
        roi: "9.9%"
      },
      refrigerated: {
        constructionCost: "$11.2M",
        totalInvestment: "$12.1M",
        annualRental: "$1.1M",
        roi: "6.6%"
      }
    },
    {
      id: "08",
      type: "Standard",
      landInvestment: "$0.9M",
      totalAcres: "3.46",
      buildableSF: "52,700",
      perAcre: "$250K",
      estUnits: "7",
      dryWarehouse: {
        constructionCost: "$6.3M",
        totalInvestment: "$7.2M",
        annualRental: "$0.9M",
        roi: "9.9%"
      },
      refrigerated: {
        constructionCost: "$11.1M",
        totalInvestment: "$11.9M",
        annualRental: "$1.1M",
        roi: "6.6%"
      }
    },
    {
      id: "09",
      type: "Standard",
      landInvestment: "$0.9M",
      totalAcres: "3.63",
      buildableSF: "55,300",
      perAcre: "$250K",
      estUnits: "7",
      dryWarehouse: {
        constructionCost: "$6.6M",
        totalInvestment: "$7.5M",
        annualRental: "$1.0M",
        roi: "9.9%"
      },
      refrigerated: {
        constructionCost: "$11.6M",
        totalInvestment: "$12.5M",
        annualRental: "$1.1M",
        roi: "6.6%"
      }
    },
    {
      id: "10",
      type: "Standard",
      landInvestment: "$1.1M",
      totalAcres: "4.21",
      buildableSF: "64,100",
      perAcre: "$250K",
      estUnits: "8",
      dryWarehouse: {
        constructionCost: "$7.7M",
        totalInvestment: "$8.7M",
        annualRental: "$1.2M",
        roi: "9.9%"
      },
      refrigerated: {
        constructionCost: "$13.5M",
        totalInvestment: "$14.5M",
        annualRental: "$1.3M",
        roi: "6.6%"
      }
    }
  ];

  return (
    <section className="py-16 px-6 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary-foreground mb-4">Property Specifications</h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8">
            Ten premium development lots strategically located along Military Highway (FM 1016) with varying sizes and configurations to match diverse investor preferences and budgets
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="relative overflow-hidden rounded-xl border border-border">
              <img 
                src="/lovable-uploads/18eaafa7-6467-4037-8e2d-6d8017b50422.png" 
                alt="Aerial view of development lots and parcels along Military Highway" 
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="text-gold text-sm font-medium">Aerial View - Military Highway Development</div>
              </div>
            </div>
            
            <div className="relative overflow-hidden rounded-xl border border-border">
              <img 
                src="/lovable-uploads/318dfb75-0eb2-4d25-a153-b8b6829a954b.png" 
                alt="Detailed site plan blueprint showing warehouse layouts and configurations" 
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="text-gold text-sm font-medium">Detailed Site Plan Blueprint</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-8">
          {lots.map((lot) => (
            <div key={lot.id} className="bg-card/50 backdrop-blur-sm border border-border rounded-xl overflow-hidden">
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-primary-foreground mb-2">
                      Lot {lot.id} - {lot.type} {lot.type === 'Premium' ? 'Frontage' : 'Location'}
                    </h3>
                    <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                      lot.type === 'Premium' ? 'bg-gold/20 text-gold' : 'bg-blue-500/20 text-blue-400'
                    }`}>
                      {lot.type === 'Premium' ? 'Frontage Premium' : 'Standard Location'}
                    </span>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-gold">{lot.landInvestment}</div>
                    <div className="text-sm text-muted-foreground">Land Investment</div>
                  </div>
                </div>

                <div className="grid md:grid-cols-4 gap-6 mb-8">
                  <div className="text-center">
                    <MapPin className="h-8 w-8 text-gold mx-auto mb-2" />
                    <div className="text-xl font-bold text-primary-foreground">{lot.totalAcres}</div>
                    <div className="text-sm text-muted-foreground">Total Acres</div>
                  </div>
                  <div className="text-center">
                    <Building className="h-8 w-8 text-emerald-500 mx-auto mb-2" />
                    <div className="text-xl font-bold text-primary-foreground">{lot.buildableSF}</div>
                    <div className="text-sm text-muted-foreground">Buildable Sq Ft</div>
                  </div>
                  <div className="text-center">
                    <Calculator className="h-8 w-8 text-blue-500 mx-auto mb-2" />
                    <div className="text-xl font-bold text-primary-foreground">{lot.perAcre}</div>
                    <div className="text-sm text-muted-foreground">Per Acre</div>
                  </div>
                  <div className="text-center">
                    <TrendingUp className="h-8 w-8 text-amber-500 mx-auto mb-2" />
                    <div className="text-xl font-bold text-primary-foreground">{lot.estUnits}</div>
                    <div className="text-sm text-muted-foreground">Est. Units (8K SF)</div>
                  </div>
                </div>

                <div className="bg-muted/30 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-primary-foreground mb-4">Development Potential</h4>
                  
                  <div className="grid lg:grid-cols-2 gap-6">
                    <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6">
                      <h5 className="font-semibold text-primary-foreground mb-4">Dry Warehouse ($120/sq ft)</h5>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Construction Cost:</span>
                          <span className="text-gold font-semibold">{lot.dryWarehouse.constructionCost}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Total Investment:</span>
                          <span className="text-blue-500 font-semibold">{lot.dryWarehouse.totalInvestment}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Annual Rental ($12.50/sq ft):</span>
                          <span className="text-emerald-500 font-semibold">{lot.dryWarehouse.annualRental}</span>
                        </div>
                        <div className="flex justify-between pt-2 border-t border-border">
                          <span className="text-muted-foreground">Annual ROI:</span>
                          <span className="text-gold font-bold text-lg">{lot.dryWarehouse.roi}</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6">
                      <h5 className="font-semibold text-primary-foreground mb-4">Refrigerated Warehouse ($200-220/sq ft)</h5>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Construction Cost:</span>
                          <span className="text-blue-400 font-semibold">{lot.refrigerated.constructionCost}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Total Investment:</span>
                          <span className="text-blue-500 font-semibold">{lot.refrigerated.totalInvestment}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Annual Rental ($19.50/sq ft):</span>
                          <span className="text-emerald-500 font-semibold">{lot.refrigerated.annualRental}</span>
                        </div>
                        <div className="flex justify-between pt-2 border-t border-border">
                          <span className="text-muted-foreground">Annual ROI:</span>
                          <span className="text-gold font-bold text-lg">{lot.refrigerated.roi}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-card/50 backdrop-blur-sm border border-border rounded-xl p-8">
          <h3 className="text-2xl font-semibold text-primary-foreground mb-6 text-center">Portfolio Development Options</h3>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="text-center">
              <h4 className="text-xl font-semibold text-gold mb-4">Dry Warehouse Development</h4>
              <div className="space-y-2 mb-4">
                <div className="text-2xl font-bold text-gold">$13.5M</div>
                <div className="text-sm text-muted-foreground">Land Cost</div>
              </div>
              <div className="space-y-2 mb-4">
                <div className="text-2xl font-bold text-emerald-500">$87.9M</div>
                <div className="text-sm text-muted-foreground">Construction</div>
              </div>
              <div className="space-y-2 mb-4">
                <div className="text-3xl font-bold text-blue-500">$101.4M</div>
                <div className="text-sm text-muted-foreground">Total Investment</div>
              </div>
              <div className="space-y-2 mb-4">
                <div className="text-2xl font-bold text-amber-500">$13.2M</div>
                <div className="text-sm text-muted-foreground">Annual Rental</div>
              </div>
              <div className="text-lg font-bold text-gold">Dry ROI: 13.0% Annual Return</div>
            </div>

            <div className="text-center">
              <h4 className="text-xl font-semibold text-blue-400 mb-4">Refrigerated Warehouse Development</h4>
              <div className="space-y-2 mb-4">
                <div className="text-2xl font-bold text-blue-400">$13.5M</div>
                <div className="text-sm text-muted-foreground">Land Cost</div>
              </div>
              <div className="space-y-2 mb-4">
                <div className="text-2xl font-bold text-emerald-500">$154M</div>
                <div className="text-sm text-muted-foreground">Construction</div>
              </div>
              <div className="space-y-2 mb-4">
                <div className="text-3xl font-bold text-blue-500">$167.5M</div>
                <div className="text-sm text-muted-foreground">Total Investment</div>
              </div>
              <div className="space-y-2 mb-4">
                <div className="text-2xl font-bold text-amber-500">$14.7M</div>
                <div className="text-sm text-muted-foreground">Annual Rental</div>
              </div>
              <div className="text-lg font-bold text-blue-400">Refrigerated ROI: 8.8% Annual Return</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}