import { MapPin, Building, Calculator, TrendingUp, Zap, Eye, Maximize2 } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

export default function LandParcels() {
  const lots = [
    {
      id: "01",
      type: "Premium", 
      landInvestment: "$1,260,000",
      totalAcres: "5.04",
      buildableSF: "57,240",
      maxWarehouseSF: "57,240",
      perAcre: "$250K",
      frontage: "Military Highway",
      dimensions: "440' x 498'",
      utilities: "Water, Sewer, Electric Ready"
    },
    {
      id: "02",
      type: "Premium",
      landInvestment: "$1,265,000", 
      totalAcres: "5.06",
      buildableSF: "66,780",
      maxWarehouseSF: "66,780",
      perAcre: "$250K",
      frontage: "Military Highway",
      dimensions: "445' x 495'",
      utilities: "Water, Sewer, Electric Ready"
    },
    {
      id: "03",
      type: "Premium",
      landInvestment: "$1,432,500",
      totalAcres: "5.73",
      buildableSF: "80,000",
      maxWarehouseSF: "80,000", 
      perAcre: "$250K",
      frontage: "Military Highway",
      dimensions: "500' x 500'",
      utilities: "Water, Sewer, Electric Ready"
    },
    {
      id: "04",
      type: "Premium",
      landInvestment: "$1,619,150",
      totalAcres: "6.12",
      buildableSF: "80,000",
      maxWarehouseSF: "80,000",
      perAcre: "$265K",
      frontage: "Military Highway", 
      dimensions: "520' x 513'",
      utilities: "Water, Sewer, Electric Ready"
    },
    {
      id: "05",
      type: "Premium",
      landInvestment: "$1,530,000",
      totalAcres: "6.12",
      buildableSF: "80,000",
      maxWarehouseSF: "80,000",
      perAcre: "$250K",
      frontage: "Military Highway",
      dimensions: "520' x 513'",
      utilities: "Water, Sewer, Electric Ready"
    },
    {
      id: "06",
      type: "Premium",
      landInvestment: "$1,447,500",
      totalAcres: "5.79",
      buildableSF: "80,000",
      maxWarehouseSF: "80,000",
      perAcre: "$250K",
      frontage: "Military Highway",
      dimensions: "490' x 515'", 
      utilities: "Water, Sewer, Electric Ready"
    },
    {
      id: "07",
      type: "Premium",
      landInvestment: "$2,154,000",
      totalAcres: "7.18",
      buildableSF: "103,350",
      maxWarehouseSF: "103,350",
      perAcre: "$300K",
      frontage: "Military Highway",
      dimensions: "600' x 525'",
      utilities: "Water, Sewer, Electric Ready"
    },
    {
      id: "08", 
      type: "Standard",
      landInvestment: "$782,500",
      totalAcres: "3.13",
      buildableSF: "38,160",
      maxWarehouseSF: "38,160",
      perAcre: "$250K",
      frontage: "Interior Access",
      dimensions: "350' x 390'",
      utilities: "Water, Sewer, Electric Ready"
    }
  ];

  const portfolioTotals = {
    totalAcres: "53.61",
    totalInvestment: "$11.89M",
    avgPricePerAcre: "$265K", 
    totalBuildableSF: "605,530"
  };

  return (
    <section id="land-parcels" className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4">Prime Land Parcels for Sale</h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8">
            Individual shovel-ready lots with utilities connected, zoned industrial. Purchase single lots or entire portfolio for maximum flexibility and scale.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl overflow-hidden">
              <img 
                src="/lovable-uploads/2e5ea358-1541-4271-8f74-88fe7d53e902.png" 
                alt="Aerial view of shovel-ready industrial land parcels with infrastructure in place"
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-primary mb-2">Aerial View</h3>
                <p className="text-sm text-muted-foreground">Shovel-ready parcels with all infrastructure and utilities in place</p>
              </div>
            </div>
            <Dialog>
              <DialogTrigger asChild>
                <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl overflow-hidden cursor-pointer hover:shadow-lg hover:shadow-gold/10 transition-all duration-300 relative group">
                  <img 
                    src="/lovable-uploads/2049e680-9c5a-4406-880c-f8ac5c578cb6.png" 
                    alt="Detailed site plan showing 8 industrial land lots with measurements and specifications"
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-white text-center">
                      <Maximize2 className="h-8 w-8 mx-auto mb-2" />
                      <span className="text-sm font-medium">Click to Enlarge</span>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-primary mb-2">Interactive Site Plan</h3>
                    <p className="text-sm text-muted-foreground">Professional lot layout with detailed measurements - Click to view full size</p>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-6xl max-h-[90vh] overflow-auto">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold text-primary">MCC Industrial Park - Master Site Plan</DialogTitle>
                </DialogHeader>
                <div className="mt-4">
                  <img 
                    src="/lovable-uploads/2049e680-9c5a-4406-880c-f8ac5c578cb6.png"
                    alt="Full detailed site plan showing all 8 lots with precise measurements, utilities, and access roads"
                    className="w-full h-auto rounded-lg border border-border"
                  />
                  <div className="mt-4 p-4 bg-muted/30 rounded-lg">
                    <p className="text-sm text-muted-foreground">
                      <strong>Site Plan Features:</strong> All lots are shovel-ready with utilities connected. 
                      Military Highway frontage lots (1-7) offer premium positioning, while Lot 8 provides interior access. 
                      Each lot shows precise dimensions and buildable envelopes for maximum warehouse development potential.
                    </p>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
          
          <div className="inline-flex items-center px-4 py-2 bg-gold/20 text-gold rounded-full text-sm font-medium border border-gold/30 backdrop-blur-sm mb-8">
            <Zap className="h-4 w-4 mr-2" />
            Shovel-Ready with Water, Power & Sewer Connected
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 text-center">
              <div className="text-2xl font-bold text-gold mb-2">{portfolioTotals.totalAcres}</div>
              <div className="text-sm text-muted-foreground">Total Acres Available</div>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 text-center">
              <div className="text-2xl font-bold text-emerald-500 mb-2">{portfolioTotals.totalInvestment}</div>
              <div className="text-sm text-muted-foreground">Total Portfolio Value</div>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 text-center">
              <div className="text-2xl font-bold text-blue-500 mb-2">{portfolioTotals.avgPricePerAcre}</div>
              <div className="text-sm text-muted-foreground">Average Price/Acre</div>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 text-center">
              <div className="text-2xl font-bold text-amber-500 mb-2">{portfolioTotals.totalBuildableSF}</div>
              <div className="text-sm text-muted-foreground">Total Buildable SF</div>
            </div>
          </div>
        </div>

        <div className="grid gap-6">
          {lots.map((lot) => (
            <div key={lot.id} className="bg-card/50 backdrop-blur-sm border border-border rounded-xl overflow-hidden">
              <div className="p-6">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">
                      Lot {lot.id} - {lot.frontage}
                    </h3>
                    <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                      lot.type === 'Premium' ? 'bg-gold/20 text-gold' : 'bg-blue-500/20 text-blue-400'
                    }`}>
                      {lot.type === 'Premium' ? 'Highway Frontage Premium' : 'Interior Access Standard'}
                    </span>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-gold">{lot.landInvestment}</div>
                    <div className="text-sm text-muted-foreground">Land Price</div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                  <div className="text-center p-4 bg-muted/30 rounded-lg">
                    <MapPin className="h-6 w-6 text-gold mx-auto mb-2" />
                    <div className="text-lg font-bold text-foreground">{lot.totalAcres} acres</div>
                    <div className="text-xs text-muted-foreground">Total Lot Size</div>
                  </div>
                  <div className="text-center p-4 bg-muted/30 rounded-lg">
                    <Building className="h-6 w-6 text-emerald-500 mx-auto mb-2" />
                    <div className="text-lg font-bold text-foreground">{lot.maxWarehouseSF.toLocaleString()}</div>
                    <div className="text-xs text-muted-foreground">Max Warehouse SF</div>
                  </div>
                  <div className="text-center p-4 bg-muted/30 rounded-lg">
                    <Calculator className="h-6 w-6 text-blue-500 mx-auto mb-2" />
                    <div className="text-lg font-bold text-foreground">{lot.perAcre}</div>
                    <div className="text-xs text-muted-foreground">Per Acre</div>
                  </div>
                  <div className="text-center p-4 bg-muted/30 rounded-lg">
                    <TrendingUp className="h-6 w-6 text-amber-500 mx-auto mb-2" />
                    <div className="text-lg font-bold text-foreground">10-15%</div>
                    <div className="text-xs text-muted-foreground">Est. Annual Appreciation</div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div className="p-4 bg-blue-50 dark:bg-blue-500/10 rounded-lg">
                    <h4 className="font-semibold text-blue-700 dark:text-blue-400 mb-2">Lot Specifications</h4>
                    <div className="space-y-1 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Dimensions:</span>
                        <span className="font-medium">{lot.dimensions}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Utilities:</span>
                        <span className="font-medium text-emerald-600">{lot.utilities}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Zoning:</span>
                        <span className="font-medium">Industrial</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 bg-amber-50 dark:bg-amber-500/10 rounded-lg">
                    <h4 className="font-semibold text-amber-700 dark:text-amber-400 mb-2">Development Potential</h4>
                    <div className="space-y-1 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Max Coverage:</span>
                        <span className="font-medium">65%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Height Limit:</span>
                        <span className="font-medium">40 feet</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Parking Required:</span>
                        <span className="font-medium">1 per 1,000 SF</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-4 p-4 bg-emerald-50 dark:bg-emerald-500/10 rounded-lg">
                  <p className="text-sm text-emerald-700 dark:text-emerald-400">
                    <strong>Potential uses:</strong> Custom warehouse, distribution center, manufacturing facility, e-commerce hub. 
                    All utilities connected - no infrastructure delays, immediate build potential.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-gold/10 to-emerald-500/10 rounded-xl p-8">
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-primary mb-4">Portfolio Summary</h3>
            <p className="text-muted-foreground mb-6">
              Total portfolio: 49 acres, $13.5M land cost – purchase individual lots or complete portfolio for scale advantages.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold text-gold mb-4">Land Investment Benefits</h4>
                <ul className="text-left space-y-2 text-muted-foreground">
                  <li>• Annual holding costs ~2-3% (taxes/maintenance)</li>
                  <li>• Projected appreciation 10-15% based on market trends</li>
                  <li>• Exit strategies: Resell at 20-30% premium in 2-3 years</li>
                  <li>• No construction risks upfront</li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-emerald-500 mb-4">Market Position Strengths</h4>
                <ul className="text-left space-y-2 text-muted-foreground">
                  <li>• Strategic location with highway access</li>
                  <li>• All utilities connected and ready</li>
                  <li>• Zoned industrial - no approval delays</li>
                  <li>• Limited 49 acres in tight 1.3% vacancy market</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}