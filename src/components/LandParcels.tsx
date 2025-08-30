import { MapPin, Building, Calculator, TrendingUp, Zap } from "lucide-react";

export default function LandParcels() {
  const lots = [
    {
      id: "01",
      type: "Premium",
      landInvestment: "$1.1M",
      totalAcres: "3.62",
      buildableSF: "55,000",
      perAcre: "$300K",
      frontage: "Military Highway"
    },
    {
      id: "02",
      type: "Premium",
      landInvestment: "$1.1M",
      totalAcres: "3.81",
      buildableSF: "58,000",
      perAcre: "$300K",
      frontage: "Military Highway"
    },
    {
      id: "03",
      type: "Premium",
      landInvestment: "$2.1M",
      totalAcres: "7.02",
      buildableSF: "107,000",
      perAcre: "$300K",
      frontage: "Military Highway"
    },
    {
      id: "04",
      type: "Premium",
      landInvestment: "$2.1M",
      totalAcres: "7.15",
      buildableSF: "109,000",
      perAcre: "$300K",
      frontage: "Military Highway"
    },
    {
      id: "05",
      type: "Premium",
      landInvestment: "$2.5M",
      totalAcres: "8.2",
      buildableSF: "125,000",
      perAcre: "$300K",
      frontage: "Military Highway"
    },
    {
      id: "06",
      type: "Standard",
      landInvestment: "$0.9M",
      totalAcres: "3.51",
      buildableSF: "53,500",
      perAcre: "$250K",
      frontage: "Interior Access"
    },
    {
      id: "07",
      type: "Standard",
      landInvestment: "$0.9M",
      totalAcres: "3.5",
      buildableSF: "53,300",
      perAcre: "$250K",
      frontage: "Interior Access"
    },
    {
      id: "08",
      type: "Standard",
      landInvestment: "$0.9M",
      totalAcres: "3.46",
      buildableSF: "52,700",
      perAcre: "$250K",
      frontage: "Interior Access"
    },
    {
      id: "09",
      type: "Standard",
      landInvestment: "$0.9M",
      totalAcres: "3.63",
      buildableSF: "55,300",
      perAcre: "$250K",
      frontage: "Interior Access"
    },
    {
      id: "10",
      type: "Standard",
      landInvestment: "$1.1M",
      totalAcres: "4.21",
      buildableSF: "64,100",
      perAcre: "$250K",
      frontage: "Interior Access"
    }
  ];

  const portfolioTotals = {
    totalAcres: "49.01",
    totalInvestment: "$13.5M",
    avgPricePerAcre: "$275K",
    totalBuildableSF: "343,350"
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
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl overflow-hidden">
              <img 
                src="/lovable-uploads/2049e680-9c5a-4406-880c-f8ac5c578cb6.png" 
                alt="Detailed site plan showing 10 industrial land lots with measurements and specifications"
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-primary mb-2">Site Plan</h3>
                <p className="text-sm text-muted-foreground">Professional lot layout with detailed measurements and specifications</p>
              </div>
            </div>
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

                <div className="grid md:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-muted/30 rounded-lg">
                    <MapPin className="h-6 w-6 text-gold mx-auto mb-2" />
                    <div className="text-lg font-bold text-foreground">{lot.totalAcres}</div>
                    <div className="text-xs text-muted-foreground">Total Acres</div>
                  </div>
                  <div className="text-center p-4 bg-muted/30 rounded-lg">
                    <Building className="h-6 w-6 text-emerald-500 mx-auto mb-2" />
                    <div className="text-lg font-bold text-foreground">{lot.buildableSF}</div>
                    <div className="text-xs text-muted-foreground">Buildable Sq Ft</div>
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