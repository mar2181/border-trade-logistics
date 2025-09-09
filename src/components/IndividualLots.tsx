import { MapPin, Building, Calculator, TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function IndividualLots() {
  const lots = [
    {
      id: 1,
      name: "Lot 1 - Premium Corner Position",
      acres: 5.04,
      warehouseSF: 57240,
      investment: 1512000,
      pricePerAcre: 300000,
      position: "Corner lot with dual Military Highway and 10th Street frontage",
      dryWarehouse: {
        constructionCost: 6870000,
        totalInvestment: 8382000,
        annualNOI: 715000,
        roi: 8.5
      },
      refrigerated: {
        constructionCost: 12020000,
        totalInvestment: 13532000,
        annualNOI: 1030000,
        roi: 7.6
      }
    },
    {
      id: 2,
      name: "Lot 2 - Flexible Development Site",
      acres: 5.06,
      warehouseSF: 66780,
      investment: 1340900,
      pricePerAcre: 265000,
      position: "Excellent truck circulation potential, multi-tenant ready",
      dryWarehouse: {
        constructionCost: 8013600,
        totalInvestment: 9354500,
        annualNOI: 834750,
        roi: 8.9
      },
      refrigerated: {
        constructionCost: 14023800,
        totalInvestment: 15364700,
        annualNOI: 1201400,
        roi: 7.8
      }
    },
    {
      id: 3,
      name: "Lot 3 - High-Capacity Development",
      acres: 5.73,
      warehouseSF: 80000,
      investment: 1518450,
      pricePerAcre: 265000,
      position: "Larger development capacity, optimal for anchor tenant",
      dryWarehouse: {
        constructionCost: 9600000,
        totalInvestment: 11118450,
        annualNOI: 1000000,
        roi: 9.0
      },
      refrigerated: {
        constructionCost: 16800000,
        totalInvestment: 18318450,
        annualNOI: 1440000,
        roi: 7.9
      }
    },
    {
      id: 4,
      name: "Lot 4 - Distribution Hub Potential",
      acres: 6.12,
      warehouseSF: 80000,
      investment: 1619150,
      pricePerAcre: 265000,
      position: "Prime for cross-dock operations, regional distribution center",
      dryWarehouse: {
        constructionCost: 9600000,
        totalInvestment: 11219150,
        annualNOI: 1000000,
        roi: 8.9
      },
      refrigerated: {
        constructionCost: 16800000,
        totalInvestment: 18419150,
        annualNOI: 1440000,
        roi: 7.8
      }
    },
    {
      id: 5,
      name: "Lot 5 - Multi-Tenant Configuration",
      acres: 6.12,
      warehouseSF: 80000,
      investment: 1621800,
      pricePerAcre: 265000,
      position: "Flexible site layout, multi-tenant industrial park ready",
      dryWarehouse: {
        constructionCost: 9600000,
        totalInvestment: 11221800,
        annualNOI: 1000000,
        roi: 8.9
      },
      refrigerated: {
        constructionCost: 16800000,
        totalInvestment: 18421800,
        annualNOI: 1440000,
        roi: 7.8
      }
    },
    {
      id: 6,
      name: "Lot 6 - Value Investment Position",
      acres: 5.79,
      warehouseSF: 80000,
      investment: 1534350,
      pricePerAcre: 265000,
      position: "Strong development density, excellent ROI potential",
      dryWarehouse: {
        constructionCost: 9600000,
        totalInvestment: 11134350,
        annualNOI: 1000000,
        roi: 9.0
      },
      refrigerated: {
        constructionCost: 16800000,
        totalInvestment: 18334350,
        annualNOI: 1440000,
        roi: 7.9
      }
    },
    {
      id: 7,
      name: "Lot 7 - Premium Development Site",
      acres: 7.18,
      warehouseSF: 103350,
      investment: 2154000,
      pricePerAcre: 300000,
      position: "Large development capacity with premium positioning",
      dryWarehouse: {
        constructionCost: 12402000,
        totalInvestment: 14556000,
        annualNOI: 1291875,
        roi: 8.9
      },
      refrigerated: {
        constructionCost: 21703500,
        totalInvestment: 23857500,
        annualNOI: 1860300,
        roi: 7.8
      }
    },
    {
      id: 8,
      name: "Lot 8 - Compact Development Opportunity", 
      acres: 3.13,
      warehouseSF: 38160,
      investment: 939000,
      pricePerAcre: 300000,
      position: "Efficient development site with premium positioning",
      dryWarehouse: {
        constructionCost: 4579200,
        totalInvestment: 5518200,
        annualNOI: 477000,
        roi: 8.6
      },
      refrigerated: {
        constructionCost: 8013600,
        totalInvestment: 8952600,
        annualNOI: 686880,
        roi: 7.7
      }
    }
  ];

  const portfolioSummary = {
    totalAcres: 44.17,
    totalWarehouseSF: 585530,
    totalLandInvestment: 12242300,
    avgPricePerAcre: 277163
  };

  return (
    <section className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4">Individual Lot Analysis</h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8">
            8 strategically positioned lots at 10th Street & Military Highway intersection, McAllen, Texas
          </p>
          
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 text-center">
              <div className="text-2xl font-bold text-gold mb-2">{portfolioSummary.totalAcres}</div>
              <div className="text-sm text-muted-foreground">Total Acres</div>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 text-center">
              <div className="text-2xl font-bold text-emerald-500 mb-2">{portfolioSummary.totalWarehouseSF.toLocaleString()} SF</div>
              <div className="text-sm text-muted-foreground">Total Buildable</div>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 text-center">
              <div className="text-2xl font-bold text-blue-500 mb-2">${(portfolioSummary.totalLandInvestment / 1000000).toFixed(2)}M</div>
              <div className="text-sm text-muted-foreground">Portfolio Investment</div>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 text-center">
              <div className="text-2xl font-bold text-amber-500 mb-2">${(portfolioSummary.avgPricePerAcre / 1000).toFixed(0)}K</div>
              <div className="text-sm text-muted-foreground">Avg Price/Acre</div>
            </div>
          </div>
        </div>

        <div className="grid gap-8">
          {lots.map((lot) => (
            <Card key={lot.id} className="bg-card/50 backdrop-blur-sm border border-border">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl text-primary mb-2">{lot.name}</CardTitle>
                    <p className="text-muted-foreground">{lot.position}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-gold">${(lot.investment / 1000000).toFixed(2)}M</div>
                    <div className="text-sm text-muted-foreground">Land Investment</div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                  <div className="text-center p-4 bg-muted/30 rounded-lg">
                    <MapPin className="h-6 w-6 text-gold mx-auto mb-2" />
                    <div className="text-lg font-bold text-foreground">{lot.acres} acres</div>
                    <div className="text-xs text-muted-foreground">${(lot.pricePerAcre / 1000).toFixed(0)}K/acre</div>
                  </div>
                  <div className="text-center p-4 bg-muted/30 rounded-lg">
                    <Building className="h-6 w-6 text-emerald-500 mx-auto mb-2" />
                    <div className="text-lg font-bold text-foreground">{lot.warehouseSF.toLocaleString()}</div>
                    <div className="text-xs text-muted-foreground">Buildable SF</div>
                  </div>
                  <div className="text-center p-4 bg-muted/30 rounded-lg">
                    <Calculator className="h-6 w-6 text-blue-500 mx-auto mb-2" />
                    <div className="text-lg font-bold text-foreground">{lot.dryWarehouse.roi}%</div>
                    <div className="text-xs text-muted-foreground">Dry Warehouse ROI</div>
                  </div>
                  <div className="text-center p-4 bg-muted/30 rounded-lg">
                    <TrendingUp className="h-6 w-6 text-cyan-500 mx-auto mb-2" />
                    <div className="text-lg font-bold text-foreground">{lot.refrigerated.roi}%</div>
                    <div className="text-xs text-muted-foreground">Refrigerated ROI</div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-blue-50 dark:bg-blue-500/10 rounded-lg">
                    <h4 className="font-semibold text-blue-700 dark:text-blue-400 mb-2">Dry Warehouse Development</h4>
                    <div className="space-y-1 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Construction Cost:</span>
                        <span className="font-medium">${(lot.dryWarehouse.constructionCost / 1000000).toFixed(2)}M</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Total Investment:</span>
                        <span className="font-medium">${(lot.dryWarehouse.totalInvestment / 1000000).toFixed(2)}M</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Annual NOI:</span>
                        <span className="font-medium text-emerald-600">${(lot.dryWarehouse.annualNOI / 1000).toFixed(0)}K</span>
                      </div>
                      <div className="flex justify-between pt-2 border-t border-border">
                        <span className="text-muted-foreground">Projected ROI:</span>
                        <span className="font-bold text-blue-600">{lot.dryWarehouse.roi}%</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 bg-cyan-50 dark:bg-cyan-500/10 rounded-lg">
                    <h4 className="font-semibold text-cyan-700 dark:text-cyan-400 mb-2">Refrigerated Development</h4>
                    <div className="space-y-1 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Construction Cost:</span>
                        <span className="font-medium">${(lot.refrigerated.constructionCost / 1000000).toFixed(2)}M</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Total Investment:</span>
                        <span className="font-medium">${(lot.refrigerated.totalInvestment / 1000000).toFixed(2)}M</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Annual NOI:</span>
                        <span className="font-medium text-emerald-600">${(lot.refrigerated.annualNOI / 1000).toFixed(0)}K</span>
                      </div>
                      <div className="flex justify-between pt-2 border-t border-border">
                        <span className="text-muted-foreground">Projected ROI:</span>
                        <span className="font-bold text-cyan-600">{lot.refrigerated.roi}%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-gold/10 to-emerald-500/10 rounded-xl p-8">
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-primary mb-4">Portfolio Investment Strategies</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 bg-background/50 rounded-lg border border-border">
                <h4 className="text-lg font-semibold text-gold mb-2">Land Hold Strategy</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Lower initial capital requirement with 8-12% annual appreciation potential
                </p>
                <div className="text-2xl font-bold text-gold">${(12242300 / 1000000).toFixed(2)}M</div>
                <div className="text-xs text-muted-foreground">Portfolio Investment</div>
              </div>
              <div className="p-6 bg-background/50 rounded-lg border border-border">
                <h4 className="text-lg font-semibold text-blue-500 mb-2">Dry Development</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  8.5-9.0% stabilized ROI through value creation and cash flow
                </p>
                <div className="text-2xl font-bold text-blue-500">$82.5M</div>
                <div className="text-xs text-muted-foreground">Total Development</div>
              </div>
              <div className="p-6 bg-background/50 rounded-lg border border-border">
                <h4 className="text-lg font-semibold text-cyan-500 mb-2">Refrigerated Development</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  7.6-7.9% ROI with specialized cold storage premium
                </p>
                <div className="text-2xl font-bold text-cyan-500">$135.0M</div>
                <div className="text-xs text-muted-foreground">Total Development</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}