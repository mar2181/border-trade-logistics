import { MapPin, Building, Calculator, TrendingUp, Star, Clock, Phone, CalendarDays, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

export default function PropertySpecifications() {
  // Add individual property advantages for McAllen location
  const getPropertyAdvantages = (lotId: string) => {
    const advantages = {
      "01": ["Direct Highway Access", "Dodge Arena Proximity", "Premium Corner Position"],
      "02": ["New Road Development", "High Traffic Visibility", "Frontage Premium"],
      "03": ["Largest Available Lot", "Maximum Development Potential", "Strategic Center Position"],
      "04": ["Future Expansion Ready", "Utilities Optimized", "Distribution Hub Potential"],
      "05": ["Premium Development Site", "Multiple Access Points", "Flexible Configuration"],
      "06": ["Value Investment Position", "Quick Development Ready", "Strong ROI Potential"],
      "07": ["Standard Location Advantage", "Proven Market Demand", "Immediate Build-Ready"],
      "08": ["Entry Level Investment", "High Appreciation Potential", "Flexible Use Options"]
    };
    return advantages[lotId] || [];
  };

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
    }
  ];

  return (
    <section className="py-16 px-6 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4">Property Specifications</h2>
          <div className="bg-gradient-to-r from-gold/20 via-accent-sapphire/20 to-gold/20 rounded-2xl p-6 mb-8">
            <p className="text-xl text-foreground max-w-4xl mx-auto text-center font-medium">
              <span className="text-gold font-bold">Only 8 Premium Properties Available</span> in McAllen's Most Coveted Industrial District
            </p>
            <p className="text-lg text-muted-foreground max-w-5xl mx-auto text-center mt-4">
              Located on 10th Street, minutes from Dodge Arena in the heart of America's produce distribution hub. 
              <span className="text-accent-emerald font-semibold"> Fed rate cuts are imminent</span> - position yourself ahead of the curve in this 
              <span className="text-gold font-semibold"> superior investment opportunity</span> with multiple upsides and strong fundamentals.
            </p>
          </div>
          
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

        {/* Premium Property Showcase Carousel */}
        <Carousel className="w-full mb-12">
          <CarouselContent>
            {lots.map((lot) => (
              <CarouselItem key={lot.id}>
                <div className="bg-gradient-to-br from-card/80 via-card/60 to-muted/40 backdrop-blur-lg border-2 border-gold/30 rounded-2xl overflow-hidden shadow-2xl hover:shadow-gold/20 transition-all duration-500">
                  {/* Premium Header */}
                  <div className="bg-gradient-to-r from-gold/20 via-accent-sapphire/10 to-gold/20 p-6">
                    <div className="flex justify-between items-start">
                      <div className="space-y-3">
                        <div className="flex items-center space-x-3">
                          <Star className="h-6 w-6 text-gold" />
                          <h3 className="text-3xl font-bold text-primary">
                            Premium Investment Lot {lot.id}
                          </h3>
                        </div>
                        <div className="flex items-center space-x-4">
                          <span className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-bold ${
                            lot.type === 'Premium' ? 'bg-gold/30 text-gold border border-gold/50' : 'bg-accent-sapphire/30 text-accent-sapphire border border-accent-sapphire/50'
                          }`}>
                            {lot.type === 'Premium' ? '🏆 PREMIUM FRONTAGE' : '💎 VALUE POSITION'}
                          </span>
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-accent-emerald/20 text-accent-emerald border border-accent-emerald/30">
                            DODGE ARENA DISTRICT
                          </span>
                        </div>
                        <p className="text-muted-foreground">
                          Positioned in McAllen's most coveted industrial corridor, minutes from Dodge Arena with new road development enhancing accessibility and value appreciation.
                        </p>
                      </div>
                      <div className="text-right space-y-2">
                        <div className="text-4xl font-bold text-gold">{lot.landInvestment}</div>
                        <div className="text-sm text-muted-foreground">Million-Dollar Investment</div>
                        <div className="text-xs text-accent-emerald font-medium">Ready for Fed Rate Cuts</div>
                      </div>
                    </div>
                  </div>

                  <div className="p-8">
                    {/* Investment Spotlight */}
                    <div className="bg-gradient-to-r from-gold/10 to-accent-sapphire/10 rounded-xl p-6 mb-8">
                      <h4 className="text-xl font-bold text-primary mb-4 flex items-center">
                        <Shield className="h-5 w-5 text-gold mr-2" />
                        Strategic Investment Opportunity
                      </h4>
                      <div className="grid md:grid-cols-3 gap-4">
                        {getPropertyAdvantages(lot.id).map((advantage, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-gold rounded-full"></div>
                            <span className="text-sm font-medium text-foreground">{advantage}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Key Investment Metrics */}
                    <div className="grid md:grid-cols-4 gap-6 mb-8">
                      <div className="bg-card/60 rounded-xl p-4 text-center border border-gold/20">
                        <MapPin className="h-8 w-8 text-gold mx-auto mb-2" />
                        <div className="text-2xl font-bold text-gold">{lot.totalAcres}</div>
                        <div className="text-sm text-muted-foreground">Premium Acres</div>
                        <div className="text-xs text-accent-emerald">Valley Growth Market</div>
                      </div>
                      <div className="bg-card/60 rounded-xl p-4 text-center border border-accent-emerald/20">
                        <Building className="h-8 w-8 text-accent-emerald mx-auto mb-2" />
                        <div className="text-2xl font-bold text-accent-emerald">{lot.buildableSF}</div>
                        <div className="text-sm text-muted-foreground">Buildable Sq Ft</div>
                        <div className="text-xs text-gold">Immediate Build-Ready</div>
                      </div>
                      <div className="bg-card/60 rounded-xl p-4 text-center border border-accent-sapphire/20">
                        <Calculator className="h-8 w-8 text-accent-sapphire mx-auto mb-2" />
                        <div className="text-2xl font-bold text-accent-sapphire">{lot.perAcre}</div>
                        <div className="text-sm text-muted-foreground">Per Acre Value</div>
                        <div className="text-xs text-gold">Below Market Rate</div>
                      </div>
                      <div className="bg-card/60 rounded-xl p-4 text-center border border-accent-amber/20">
                        <TrendingUp className="h-8 w-8 text-accent-amber mx-auto mb-2" />
                        <div className="text-2xl font-bold text-accent-amber">{lot.estUnits}</div>
                        <div className="text-sm text-muted-foreground">Warehouse Units</div>
                        <div className="text-xs text-accent-emerald">High Demand Market</div>
                      </div>
                    </div>

                    {/* Development Potential with Valley Advantage */}
                    <div className="bg-gradient-to-br from-muted/40 to-card/60 rounded-xl p-8 border border-border">
                      <div className="flex items-center justify-between mb-6">
                        <h4 className="text-2xl font-bold text-primary">Development Potential in America's Hidden Gem</h4>
                        <div className="text-right">
                          <div className="text-sm text-accent-emerald font-medium">McAllen Metro: 900K+ Population</div>
                          <div className="text-xs text-muted-foreground">20-Year Growth Projection</div>
                        </div>
                      </div>
                      
                      <div className="bg-accent-emerald/10 rounded-lg p-4 mb-6">
                        <p className="text-sm text-foreground">
                          <strong className="text-accent-emerald">Refrigerated Warehouse Industry in High Demand:</strong> The Valley's strategic position in the produce industry alley, 
                          combined with upcoming Fed rate cuts, creates an unprecedented opportunity for savvy investors. Build your warehouse in the heart of North America's 
                          fresh produce corridor where demand continues to surge.
                        </p>
                      </div>
                  
                      <div className="grid lg:grid-cols-2 gap-6">
                        <div className="bg-gradient-to-br from-card/80 to-muted/40 backdrop-blur-sm border-2 border-gold/30 rounded-xl p-6 hover:shadow-lg hover:shadow-gold/20 transition-all duration-300">
                          <h5 className="font-bold text-primary mb-4 text-lg flex items-center">
                            <Building className="h-5 w-5 text-gold mr-2" />
                            Dry Warehouse Development ($120/sq ft)
                          </h5>
                          <div className="text-xs text-accent-emerald mb-4 font-medium">Perfect for Lower Interest Rate Environment</div>
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

                        <div className="bg-gradient-to-br from-card/80 to-accent-sapphire/10 backdrop-blur-sm border-2 border-accent-sapphire/30 rounded-xl p-6 hover:shadow-lg hover:shadow-accent-sapphire/20 transition-all duration-300">
                          <h5 className="font-bold text-primary mb-4 text-lg flex items-center">
                            <Star className="h-5 w-5 text-accent-sapphire mr-2" />
                            Refrigerated Warehouse ($200-220/sq ft)
                          </h5>
                          <div className="text-xs text-gold mb-4 font-medium">Heart of Produce Industry Alley - High Demand</div>
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

                    {/* Investment Action Section */}
                    <div className="mt-8 bg-gradient-to-r from-gold/10 via-accent-emerald/10 to-gold/10 rounded-xl p-6">
                      <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
                        <div>
                          <h5 className="text-lg font-bold text-primary mb-2">Ready to Act on This Million-Dollar Opportunity?</h5>
                          <p className="text-sm text-muted-foreground">Fed rate cuts are imminent - perfect timing for investment or development financing</p>
                        </div>
                        <div className="flex space-x-3">
                          <Button className="bg-gold hover:bg-gold-dark text-primary-foreground">
                            <Phone className="h-4 w-4 mr-2" />
                            Schedule Site Visit
                          </Button>
                          <Button variant="outline" className="border-accent-emerald text-accent-emerald hover:bg-accent-emerald/10">
                            <CalendarDays className="h-4 w-4 mr-2" />
                            Request Information
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4" />
          <CarouselNext className="right-4" />
        </Carousel>

        {/* Portfolio Summary - McAllen Advantage */}
        <div className="mt-16 bg-gradient-to-br from-card/80 via-muted/40 to-card/60 backdrop-blur-lg border-2 border-gold/30 rounded-2xl p-10 shadow-2xl">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-primary mb-4">Complete 8-Property Portfolio: The Valley's Hidden Gem</h3>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              These 8 premium properties represent the last available opportunities in McAllen's most coveted industrial district. 
              With the Valley projected to grow significantly over the next 20 years and beyond, early investors position themselves 
              for extraordinary returns in America's fastest-growing produce distribution hub.
            </p>
            <div className="inline-flex items-center mt-4 px-6 py-3 bg-accent-emerald/20 text-accent-emerald rounded-full font-semibold border border-accent-emerald/30">
              <Clock className="h-5 w-5 mr-2" />
              Only 8 Properties Available - Act Before Fed Rate Cuts Drive Prices Higher
            </div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-gold/10 to-gold/5 rounded-xl p-8 border border-gold/30">
              <h4 className="text-2xl font-bold text-gold mb-6 text-center flex items-center justify-center">
                <Building className="h-6 w-6 mr-2" />
                Dry Warehouse Portfolio Development
              </h4>
              <div className="space-y-4">
                <div className="flex justify-between items-center bg-card/40 rounded-lg p-4">
                  <span className="text-muted-foreground">8 Properties Land Cost:</span>
                  <span className="text-2xl font-bold text-gold">$11.89M</span>
                </div>
                <div className="flex justify-between items-center bg-card/40 rounded-lg p-4">
                  <span className="text-muted-foreground">Construction Investment:</span>
                  <span className="text-2xl font-bold text-accent-emerald">$79.3M</span>
                </div>
                <div className="flex justify-between items-center bg-gradient-to-r from-accent-sapphire/20 to-accent-sapphire/10 rounded-lg p-4 border border-accent-sapphire/30">
                  <span className="text-accent-sapphire font-semibold">Total Portfolio Investment:</span>
                  <span className="text-3xl font-bold text-accent-sapphire">$91.2M</span>
                </div>
                <div className="flex justify-between items-center bg-card/40 rounded-lg p-4">
                  <span className="text-muted-foreground">Annual Rental Income:</span>
                  <span className="text-2xl font-bold text-accent-amber">$11.9M</span>
                </div>
                <div className="text-center mt-6 p-4 bg-gold/20 rounded-lg border border-gold/40">
                  <div className="text-2xl font-bold text-gold">13.0% Annual ROI</div>
                  <div className="text-sm text-muted-foreground">Enhanced by Lower Interest Rates</div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-accent-sapphire/10 to-accent-sapphire/5 rounded-xl p-8 border border-accent-sapphire/30">
              <h4 className="text-2xl font-bold text-accent-sapphire mb-6 text-center flex items-center justify-center">
                <Star className="h-6 w-6 mr-2" />
                Refrigerated Warehouse Portfolio
              </h4>
              <div className="text-center mb-6">
                <div className="inline-flex items-center px-4 py-2 bg-accent-emerald/20 text-accent-emerald rounded-full text-sm font-bold border border-accent-emerald/30">
                  🌟 PRODUCE INDUSTRY ALLEY - HIGH DEMAND
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center bg-card/40 rounded-lg p-4">
                  <span className="text-muted-foreground">8 Properties Land Cost:</span>
                  <span className="text-2xl font-bold text-accent-sapphire">$11.89M</span>
                </div>
                <div className="flex justify-between items-center bg-card/40 rounded-lg p-4">
                  <span className="text-muted-foreground">Cold Storage Construction:</span>
                  <span className="text-2xl font-bold text-accent-emerald">$139.0M</span>
                </div>
                <div className="flex justify-between items-center bg-gradient-to-r from-gold/20 to-gold/10 rounded-lg p-4 border border-gold/30">
                  <span className="text-gold font-semibold">Total Portfolio Investment:</span>
                  <span className="text-3xl font-bold text-gold">$150.9M</span>
                </div>
                <div className="flex justify-between items-center bg-card/40 rounded-lg p-4">
                  <span className="text-muted-foreground">Annual Rental Income:</span>
                  <span className="text-2xl font-bold text-accent-amber">$13.2M</span>
                </div>
                <div className="text-center mt-6 p-4 bg-accent-sapphire/20 rounded-lg border border-accent-sapphire/40">
                  <div className="text-2xl font-bold text-accent-sapphire">8.7% Annual ROI</div>
                  <div className="text-sm text-muted-foreground">Premium Cold Storage Market</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Valley Investment Summary */}
          <div className="mt-12 bg-gradient-to-r from-accent-emerald/10 via-gold/10 to-accent-emerald/10 rounded-xl p-8 border border-accent-emerald/30">
            <h4 className="text-2xl font-bold text-primary text-center mb-6">The Valley Investment Advantage</h4>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-gold mb-2">900K+</div>
                <div className="text-sm text-muted-foreground">McAllen Metro Population</div>
                <div className="text-xs text-accent-emerald">Demonstrates Market Resilience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent-emerald mb-2">20+ Years</div>
                <div className="text-sm text-muted-foreground">Projected Growth Timeline</div>
                <div className="text-xs text-gold">Those Who Invest Here Stay & Grow</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent-sapphire mb-2">37.3 Acres</div>
                <div className="text-sm text-muted-foreground">Total Available Land</div>
                <div className="text-xs text-accent-emerald">Last 8 Properties in District</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}