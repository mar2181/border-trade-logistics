import { MapPin, Building, Calculator, TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

export default function IndividualLots() {
  const { t } = useLanguage();
  
  const lots = [
    {
      id: 1,
      name: t('individualLots.lot1Title'),
      acres: 5.04,
      warehouseSF: 57240,
      investment: 1512000,
      pricePerAcre: 300000,
      position: t('individualLots.lot1Desc'),
      dryWarehouse: {
        constructionCost: 6870000,
        totalInvestment: 8382000,
        annualNOI: 715000,
        roi: 8.5
      },
      refrigerated: {
        constructionCost: 12020000,
        totalInvestment: 13532000,
        annualNOI: 1116000,
        roi: 8.2
      }
    },
    {
      id: 2,
      name: t('individualLots.lot2Title'),
      acres: 5.06,
      warehouseSF: 66780,
      investment: 1340900,
      pricePerAcre: 265000,
      position: t('individualLots.lot2Desc'),
      dryWarehouse: {
        constructionCost: 8013600,
        totalInvestment: 9354500,
        annualNOI: 834750,
        roi: 8.9
      },
      refrigerated: {
        constructionCost: 14023800,
        totalInvestment: 15364700,
        annualNOI: 1302210,
        roi: 8.5
      }
    },
    {
      id: 3,
      name: t('individualLots.lot3Title'),
      acres: 5.73,
      warehouseSF: 80000,
      investment: 1518450,
      pricePerAcre: 265000,
      position: t('individualLots.lot3Desc'),
      dryWarehouse: {
        constructionCost: 9600000,
        totalInvestment: 11118450,
        annualNOI: 1000000,
        roi: 9.0
      },
      refrigerated: {
        constructionCost: 16800000,
        totalInvestment: 18318450,
        annualNOI: 1560000,
        roi: 8.5
      }
    },
    {
      id: 4,
      name: t('individualLots.lot4Title'),
      acres: 6.12,
      warehouseSF: 80000,
      investment: 1619150,
      pricePerAcre: 265000,
      position: t('individualLots.lot4Desc'),
      dryWarehouse: {
        constructionCost: 9600000,
        totalInvestment: 11219150,
        annualNOI: 1000000,
        roi: 8.9
      },
      refrigerated: {
        constructionCost: 16800000,
        totalInvestment: 18419150,
        annualNOI: 1560000,
        roi: 8.5
      }
    },
    {
      id: 5,
      name: t('individualLots.lot5Title'),
      acres: 6.12,
      warehouseSF: 80000,
      investment: 1621800,
      pricePerAcre: 265000,
      position: t('individualLots.lot5Desc'),
      dryWarehouse: {
        constructionCost: 9600000,
        totalInvestment: 11221800,
        annualNOI: 1000000,
        roi: 8.9
      },
      refrigerated: {
        constructionCost: 16800000,
        totalInvestment: 18421800,
        annualNOI: 1560000,
        roi: 8.5
      }
    },
    {
      id: 6,
      name: t('individualLots.lot6Title'),
      acres: 5.79,
      warehouseSF: 80000,
      investment: 1534350,
      pricePerAcre: 265000,
      position: t('individualLots.lot6Desc'),
      dryWarehouse: {
        constructionCost: 9600000,
        totalInvestment: 11134350,
        annualNOI: 1000000,
        roi: 9.0
      },
      refrigerated: {
        constructionCost: 16800000,
        totalInvestment: 18334350,
        annualNOI: 1560000,
        roi: 8.5
      }
    },
    {
      id: 7,
      name: t('individualLots.lot7Title'),
      acres: 3.13,
      warehouseSF: 103350,
      investment: 939000,
      pricePerAcre: 300000,
      position: t('individualLots.lot7Desc'),
      dryWarehouse: {
        constructionCost: 12402000,
        totalInvestment: 13341000,
        annualNOI: 1291875,
        roi: 9.7
      },
      refrigerated: {
        constructionCost: 21703500,
        totalInvestment: 22642500,
        annualNOI: 2015325,
        roi: 8.9
      }
    },
    {
      id: 8,
      name: t('individualLots.lot8Title'), 
      acres: 7.18,
      warehouseSF: 38160,
      investment: 2154000,
      pricePerAcre: 300000,
      position: t('individualLots.lot8Desc'),
      dryWarehouse: {
        constructionCost: 4579200,
        totalInvestment: 6733200,
        annualNOI: 477000,
        roi: 7.1
      },
      refrigerated: {
        constructionCost: 8013600,
        totalInvestment: 10167600,
        annualNOI: 744120,
        roi: 7.3
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
          <h2 className="text-4xl font-bold text-primary mb-4">{t('individualLots.title')}</h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8">
            {t('individualLots.subtitle')}
          </p>
          
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 text-center">
              <div className="text-2xl font-bold text-gold mb-2">{portfolioSummary.totalAcres}</div>
              <div className="text-sm text-muted-foreground">{t('individualLots.totalAcres')}</div>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 text-center">
              <div className="text-2xl font-bold text-emerald-500 mb-2">{portfolioSummary.totalWarehouseSF.toLocaleString()} SF</div>
              <div className="text-sm text-muted-foreground">{t('individualLots.totalBuildable')}</div>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 text-center">
              <div className="text-2xl font-bold text-blue-500 mb-2">${(portfolioSummary.totalLandInvestment / 1000000).toFixed(2)}M</div>
              <div className="text-sm text-muted-foreground">{t('individualLots.portfolioInvestment')}</div>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 text-center">
              <div className="text-2xl font-bold text-amber-500 mb-2">${(portfolioSummary.avgPricePerAcre / 1000).toFixed(0)}K</div>
              <div className="text-sm text-muted-foreground">{t('individualLots.avgPrice')}</div>
            </div>
          </div>
        </div>

        <div className="grid gap-8">
          {lots.map((lot) => (
            <Card key={lot.id} className="bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm border border-border/60 hover:border-gold/30 hover:shadow-xl hover:shadow-gold/10 transition-all duration-300 group">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl text-primary mb-2 group-hover:text-gold transition-colors duration-300">{lot.name}</CardTitle>
                    <p className="text-muted-foreground">{lot.position}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-gold group-hover:text-gold/90 transition-colors duration-300">${(lot.investment / 1000000).toFixed(2)}M</div>
                    <div className="text-sm text-muted-foreground">{t('individualLots.landInvestment')}</div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                  <div className="text-center p-4 bg-gradient-to-br from-gold/10 to-gold/5 rounded-lg border border-gold/20 hover:from-gold/20 hover:to-gold/10 transition-all duration-300">
                    <MapPin className="h-6 w-6 text-gold mx-auto mb-2" />
                    <div className="text-lg font-bold text-foreground">{lot.acres} acres</div>
                    <div className="text-xs text-gold/80 font-medium">${(lot.pricePerAcre / 1000).toFixed(0)}K/acre</div>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-br from-emerald-500/10 to-emerald-500/5 rounded-lg border border-emerald-500/20 hover:from-emerald-500/20 hover:to-emerald-500/10 transition-all duration-300">
                    <Building className="h-6 w-6 text-emerald-500 mx-auto mb-2" />
                    <div className="text-lg font-bold text-foreground">{lot.warehouseSF.toLocaleString()}</div>
                    <div className="text-xs text-emerald-600 font-medium">{t('individualLots.buildableSF')}</div>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-br from-blue-500/10 to-blue-500/5 rounded-lg border border-blue-500/20 hover:from-blue-500/20 hover:to-blue-500/10 transition-all duration-300">
                    <Calculator className="h-6 w-6 text-blue-500 mx-auto mb-2" />
                    <div className="text-lg font-bold text-foreground">{lot.dryWarehouse.roi}%</div>
                    <div className="text-xs text-blue-600 font-medium">{t('individualLots.dryWarehouseROI')}</div>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-br from-cyan-500/10 to-cyan-500/5 rounded-lg border border-cyan-500/20 hover:from-cyan-500/20 hover:to-cyan-500/10 transition-all duration-300">
                    <TrendingUp className="h-6 w-6 text-cyan-500 mx-auto mb-2" />
                    <div className="text-lg font-bold text-foreground">{lot.refrigerated.roi}%</div>
                    <div className="text-xs text-cyan-600 font-medium">{t('individualLots.refrigeratedROI')}</div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-gradient-to-br from-blue-500/20 to-blue-500/5 rounded-lg border border-blue-500/30 hover:from-blue-500/30 hover:to-blue-500/10 transition-all duration-300">
                    <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-3 text-base">{t('individualLots.dryWarehouseDev')}</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">{t('individualLots.constructionCost')}</span>
                        <span className="font-bold text-orange-500 text-base">${(lot.dryWarehouse.constructionCost / 1000000).toFixed(2)}M</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">{t('individualLots.totalInvestment')}</span>
                        <span className="font-bold text-amber-500 text-base">${(lot.dryWarehouse.totalInvestment / 1000000).toFixed(2)}M</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">{t('individualLots.annualNOI')}</span>
                        <span className="font-bold text-emerald-500 text-base">${(lot.dryWarehouse.annualNOI / 1000).toFixed(0)}K</span>
                      </div>
                      <div className="flex justify-between items-center pt-2 border-t border-blue-500/20">
                        <span className="text-foreground font-medium">{t('individualLots.projectedROI')}</span>
                        <span className="font-bold text-blue-500 text-lg">{lot.dryWarehouse.roi}%</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 bg-gradient-to-br from-cyan-500/20 to-cyan-500/5 rounded-lg border border-cyan-500/30 hover:from-cyan-500/30 hover:to-cyan-500/10 transition-all duration-300">
                    <h4 className="font-semibold text-cyan-600 dark:text-cyan-400 mb-3 text-base">{t('individualLots.refrigeratedDev')}</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">{t('individualLots.constructionCost')}</span>
                        <span className="font-bold text-orange-500 text-base">${(lot.refrigerated.constructionCost / 1000000).toFixed(2)}M</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">{t('individualLots.totalInvestment')}</span>
                        <span className="font-bold text-amber-500 text-base">${(lot.refrigerated.totalInvestment / 1000000).toFixed(2)}M</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">{t('individualLots.annualNOI')}</span>
                        <span className="font-bold text-emerald-500 text-base">${(lot.refrigerated.annualNOI / 1000).toFixed(0)}K</span>
                      </div>
                      <div className="flex justify-between items-center pt-2 border-t border-cyan-500/20">
                        <span className="text-foreground font-medium">{t('individualLots.projectedROI')}</span>
                        <span className="font-bold text-cyan-500 text-lg">{lot.refrigerated.roi}%</span>
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