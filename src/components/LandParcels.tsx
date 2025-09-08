import { MapPin, Building, Calculator, TrendingUp, Zap, Eye, Maximize2, Users, Truck, Sun } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

export default function LandParcels() {
  const industrialPark = {
    name: "Military Highway Industrial Park",
    location: "Military Highway, Norfolk, VA",
    totalInvestment: "$45.8M",
    totalAcres: "47.5",
    buildingCount: "8",
    totalLeasableSF: "485,000",
    occupancyRate: "95%",
    avgRent: "$8.50/SF NNN",
    annualNOI: "$3.89M",
    capRate: "8.5%",
    yearBuilt: "2019-2021",
    features: [
      "Solar panels on all buildings",
      "Fully leased to credit tenants", 
      "Class A warehouse facilities",
      "Excellent truck access",
      "On-site management",
      "Modern loading facilities"
    ],
    tenants: [
      { name: "Amazon Logistics", sf: "125,000", lease: "10 years" },
      { name: "FedEx Ground", sf: "95,000", lease: "8 years" },
      { name: "Home Depot Supply", sf: "85,000", lease: "12 years" },
      { name: "Sysco Foods", sf: "75,000", lease: "7 years" },
      { name: "UPS Logistics", sf: "65,000", lease: "9 years" },
      { name: "Costco Wholesale", sf: "40,000", lease: "5 years" }
    ]
  };

  const keyMetrics = {
    totalValue: "$45.8M",
    cashFlow: "$3.89M Annual",
    capRate: "8.5%",
    occupancy: "Development Ready"
  };

  return (
    <section id="land-parcels" className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4">Prime Land Development Opportunity</h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8">
            Raw land parcels available for development on Military Highway with prime agricultural fields ready for industrial conversion.
          </p>
          
          <div className="grid md:grid-cols-1 gap-8 mb-8">
            <Dialog>
              <DialogTrigger asChild>
                <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl overflow-hidden cursor-pointer hover:shadow-lg hover:shadow-gold/10 transition-all duration-300 relative group">
                  <img 
                    src="/lovable-uploads/6a074678-b761-405d-9c8b-3995ae50e852.png" 
                    alt="Aerial view of the actual land parcels available for development on Military Highway"
                    className="w-full h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-white text-center">
                      <Maximize2 className="h-8 w-8 mx-auto mb-2" />
                      <span className="text-sm font-medium">Click to Enlarge</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-semibold text-primary mb-2">Military Highway Land Development</h3>
                    <p className="text-muted-foreground">Prime raw land parcels ready for industrial development with excellent highway access and build-to-suit potential</p>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-6xl max-h-[90vh] overflow-auto">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold text-primary">Military Highway Land Development - Aerial Overview</DialogTitle>
                </DialogHeader>
                <div className="mt-4">
                  <img 
                    src="/lovable-uploads/6a074678-b761-405d-9c8b-3995ae50e852.png"
                    alt="Complete aerial view of the raw land parcels showing agricultural fields ready for industrial development"
                    className="w-full h-auto rounded-lg border border-border"
                  />
                  <div className="mt-4 p-4 bg-muted/30 rounded-lg">
                    <p className="text-sm text-muted-foreground">
                      <strong>Land Development Features:</strong> This 47.5-acre raw land parcel offers prime development potential with agricultural fields ready for conversion to industrial use. 
                      The property provides excellent access to Military Highway for optimal logistics operations and is positioned for build-to-suit development opportunities.
                    </p>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
          
          <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium border border-blue-500/30 backdrop-blur-sm mb-8">
            <TrendingUp className="h-4 w-4 mr-2" />
            Development Ready - Build-to-Suit Available
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 text-center">
              <div className="text-2xl font-bold text-gold mb-2">{keyMetrics.totalValue}</div>
              <div className="text-sm text-muted-foreground">Total Investment</div>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 text-center">
              <div className="text-2xl font-bold text-emerald-500 mb-2">{keyMetrics.cashFlow}</div>
              <div className="text-sm text-muted-foreground">Net Operating Income</div>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 text-center">
              <div className="text-2xl font-bold text-blue-500 mb-2">{keyMetrics.capRate}</div>
              <div className="text-sm text-muted-foreground">Cap Rate</div>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 text-center">
              <div className="text-2xl font-bold text-amber-500 mb-2">{keyMetrics.occupancy}</div>
              <div className="text-sm text-muted-foreground">Occupancy Rate</div>
            </div>
          </div>
        </div>

        <div className="grid gap-8">
          {/* Property Overview */}
          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl overflow-hidden">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-2">{industrialPark.name}</h3>
                  <p className="text-muted-foreground mb-4">{industrialPark.location}</p>
                  <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-emerald-500/20 text-emerald-400">
                    Stabilized Income Property
                  </span>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-gold">{industrialPark.totalInvestment}</div>
                  <div className="text-sm text-muted-foreground">Total Investment</div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                <div className="text-center p-4 bg-muted/30 rounded-lg">
                  <MapPin className="h-6 w-6 text-gold mx-auto mb-2" />
                  <div className="text-lg font-bold text-foreground">{industrialPark.totalAcres} acres</div>
                  <div className="text-xs text-muted-foreground">Total Site Size</div>
                </div>
                <div className="text-center p-4 bg-muted/30 rounded-lg">
                  <Building className="h-6 w-6 text-emerald-500 mx-auto mb-2" />
                  <div className="text-lg font-bold text-foreground">{industrialPark.buildingCount} Buildings</div>
                  <div className="text-xs text-muted-foreground">{industrialPark.totalLeasableSF} SF Total</div>
                </div>
                <div className="text-center p-4 bg-muted/30 rounded-lg">
                  <Calculator className="h-6 w-6 text-blue-500 mx-auto mb-2" />
                  <div className="text-lg font-bold text-foreground">{industrialPark.avgRent}</div>
                  <div className="text-xs text-muted-foreground">Average Rent NNN</div>
                </div>
                <div className="text-center p-4 bg-muted/30 rounded-lg">
                  <TrendingUp className="h-6 w-6 text-amber-500 mx-auto mb-2" />
                  <div className="text-lg font-bold text-foreground">{industrialPark.capRate}</div>
                  <div className="text-xs text-muted-foreground">Cap Rate</div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="p-4 bg-blue-50 dark:bg-blue-500/10 rounded-lg">
                  <h4 className="font-semibold text-blue-700 dark:text-blue-400 mb-2">Property Features</h4>
                  <div className="space-y-2 text-sm">
                    {industrialPark.features.map((feature, index) => (
                      <div key={index} className="flex items-center">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="p-4 bg-emerald-50 dark:bg-emerald-500/10 rounded-lg">
                  <h4 className="font-semibold text-emerald-700 dark:text-emerald-400 mb-2">Investment Highlights</h4>
                  <div className="space-y-1 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Year Built:</span>
                      <span className="font-medium">{industrialPark.yearBuilt}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Occupancy:</span>
                      <span className="font-medium text-emerald-600">{industrialPark.occupancyRate}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Annual NOI:</span>
                      <span className="font-medium">{industrialPark.annualNOI}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className="mt-12 bg-gradient-to-r from-gold/10 to-emerald-500/10 rounded-xl p-8">
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-primary mb-4">Investment Summary</h3>
            <p className="text-muted-foreground mb-6">
              Stabilized industrial park with excellent tenant mix, modern facilities, and sustainable energy features generating strong cash flow.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold text-gold mb-4">Key Advantages</h4>
                <ul className="text-left space-y-2 text-muted-foreground">
                  <li>• Immediate cash flow from day one</li>
                  <li>• Credit tenants with long-term leases</li>
                  <li>• Solar installations reduce operating costs</li>
                  <li>• Prime Military Highway location</li>
                  <li>• Professional on-site management</li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-emerald-500 mb-4">Financial Performance</h4>
                <ul className="text-left space-y-2 text-muted-foreground">
                  <li>• 8.5% stabilized cap rate</li>
                  <li>• $3.89M annual net operating income</li>
                  <li>• 95% occupancy with quality tenants</li>
                  <li>• Built-in rent escalations</li>
                  <li>• Value-add potential through expansions</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}