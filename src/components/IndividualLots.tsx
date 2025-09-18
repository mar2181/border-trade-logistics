import { MapPin, Building, Calculator, TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

export default function IndividualLots() {
  const { t } = useLanguage();
  
  const lots = [
    {
      id: 1,
      name: t('individualLots.lot1Title'),
      acres: 4.92,
      warehouseSF: 68440,
      investment: 1476000,
      pricePerAcre: 300000,
      position: t('individualLots.lot1Desc'),
      dryWarehouse: {
        constructionCost: 10266000, // 68440 * 150
        totalInvestment: 11742000,  // 1476000 + 10266000
        annualNOI: 855500,          // 68440 * 12.50
        roi: 7.3                    // (855500 / 11742000) * 100
      },
      refrigerated: {
        constructionCost: 17110000, // 68440 * 250
        totalInvestment: 18586000,  // 1476000 + 17110000
        annualNOI: 1334580,         // 68440 * 19.50
        roi: 7.2                    // (1334580 / 18586000) * 100
      }
    },
    {
      id: 2,
      name: t('individualLots.lot2Title'),
      acres: 4.95,
      warehouseSF: 79580,
      investment: 1311750,
      pricePerAcre: 265000,
      position: t('individualLots.lot2Desc'),
      dryWarehouse: {
        constructionCost: 11937000, // 79580 * 150
        totalInvestment: 13248750,  // 1311750 + 11937000
        annualNOI: 994750,          // 79580 * 12.50
        roi: 7.5                    // (994750 / 13248750) * 100
      },
      refrigerated: {
        constructionCost: 19895000, // 79580 * 250
        totalInvestment: 21206750,  // 1311750 + 19895000
        annualNOI: 1551810,         // 79580 * 19.50
        roi: 7.3                    // (1551810 / 21206750) * 100
      }
    },
    {
      id: 3,
      name: t('individualLots.lot3Title'),
      acres: 5.66,
      warehouseSF: 98400,
      investment: 1499900,
      pricePerAcre: 265000,
      position: t('individualLots.lot3Desc'),
      dryWarehouse: {
        constructionCost: 14760000, // 98400 * 150
        totalInvestment: 16259900,  // 1499900 + 14760000
        annualNOI: 1230000,         // 98400 * 12.50
        roi: 7.6                    // (1230000 / 16259900) * 100
      },
      refrigerated: {
        constructionCost: 24600000, // 98400 * 250
        totalInvestment: 26099900,  // 1499900 + 24600000
        annualNOI: 1918800,         // 98400 * 19.50
        roi: 7.4                    // (1918800 / 26099900) * 100
      }
    },
    {
      id: 4,
      name: t('individualLots.lot4Title'),
      acres: 6.01,
      warehouseSF: 98400,
      investment: 1592650,
      pricePerAcre: 265000,
      position: t('individualLots.lot4Desc'),
      dryWarehouse: {
        constructionCost: 14760000, // 98400 * 150
        totalInvestment: 16352650,  // 1592650 + 14760000
        annualNOI: 1230000,         // 98400 * 12.50
        roi: 7.5                    // (1230000 / 16352650) * 100
      },
      refrigerated: {
        constructionCost: 24600000, // 98400 * 250
        totalInvestment: 26192650,  // 1592650 + 24600000
        annualNOI: 1918800,         // 98400 * 19.50
        roi: 7.3                    // (1918800 / 26192650) * 100
      }
    },
    {
      id: 5,
      name: t('individualLots.lot5Title'),
      acres: 6.05,
      warehouseSF: 98400,
      investment: 1603250,
      pricePerAcre: 265000,
      position: t('individualLots.lot5Desc'),
      dryWarehouse: {
        constructionCost: 14760000, // 98400 * 150
        totalInvestment: 16363250,  // 1603250 + 14760000
        annualNOI: 1230000,         // 98400 * 12.50
        roi: 7.5                    // (1230000 / 16363250) * 100
      },
      refrigerated: {
        constructionCost: 24600000, // 98400 * 250
        totalInvestment: 26203250,  // 1603250 + 24600000
        annualNOI: 1918800,         // 98400 * 19.50
        roi: 7.3                    // (1918800 / 26203250) * 100
      }
    },
    {
      id: 6,
      name: t('individualLots.lot6Title'),
      acres: 5.68,
      warehouseSF: 98400,
      investment: 1505200,
      pricePerAcre: 265000,
      position: t('individualLots.lot6Desc'),
      dryWarehouse: {
        constructionCost: 14760000, // 98400 * 150
        totalInvestment: 16265200,  // 1505200 + 14760000
        annualNOI: 1230000,         // 98400 * 12.50
        roi: 7.6                    // (1230000 / 16265200) * 100
      },
      refrigerated: {
        constructionCost: 24600000, // 98400 * 250
        totalInvestment: 26105200,  // 1505200 + 24600000
        annualNOI: 1918800,         // 98400 * 19.50
        roi: 7.4                    // (1918800 / 26105200) * 100
      }
    },
    {
      id: 7,
      name: t('individualLots.lot7Title'),
      acres: 7.16,
      warehouseSF: 108460,
      investment: 2148000,
      pricePerAcre: 300000,
      position: t('individualLots.lot7Desc'),
      dryWarehouse: {
        constructionCost: 16269000, // 108460 * 150
        totalInvestment: 18417000,  // 2148000 + 16269000
        annualNOI: 1355750,         // 108460 * 12.50
        roi: 7.4                    // (1355750 / 18417000) * 100
      },
      refrigerated: {
        constructionCost: 27115000, // 108460 * 250
        totalInvestment: 29263000,  // 2148000 + 27115000
        annualNOI: 2114970,         // 108460 * 19.50
        roi: 7.2                    // (2114970 / 29263000) * 100
      }
    },
    {
      id: 8,
      name: t('individualLots.lot8Title'), 
      acres: 3.74,
      warehouseSF: 53340,
      investment: 991100,
      pricePerAcre: 265000,
      position: t('individualLots.lot8Desc'),
      dryWarehouse: {
        constructionCost: 8001000,  // 53340 * 150
        totalInvestment: 8992100,   // 991100 + 8001000
        annualNOI: 666750,          // 53340 * 12.50
        roi: 7.4                    // (666750 / 8992100) * 100
      },
      refrigerated: {
        constructionCost: 13335000, // 53340 * 250
        totalInvestment: 14326100,  // 991100 + 13335000
        annualNOI: 1040130,         // 53340 * 19.50
        roi: 7.3                    // (1040130 / 14326100) * 100
      }
    }
  ];

  const portfolioSummary = {
    totalAcres: 43.17,
    totalWarehouseSF: 702820,
    totalLandInvestment: 12127850,
    avgPricePerAcre: 281011
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
                <div className="text-2xl font-bold text-gold">${(12127850 / 1000000).toFixed(2)}M</div>
                <div className="text-xs text-muted-foreground">Portfolio Investment</div>
              </div>
              <div className="p-6 bg-background/50 rounded-lg border border-border">
                <h4 className="text-lg font-semibold text-blue-500 mb-2">Dry Development</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  7.3-7.5% stabilized ROI through value creation and cash flow
                </p>
                <div className="text-2xl font-bold text-blue-500">$118.8M</div>
                <div className="text-xs text-muted-foreground">Total Development</div>
              </div>
              <div className="p-6 bg-background/50 rounded-lg border border-border">
                <h4 className="text-lg font-semibold text-cyan-500 mb-2">Refrigerated Development</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  7.2-7.3% ROI with specialized cold storage premium
                </p>
                <div className="text-2xl font-bold text-cyan-500">$189.1M</div>
                <div className="text-xs text-muted-foreground">Total Development</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}