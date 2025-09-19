import { MapPin, Building, Calculator, TrendingUp, Zap, Eye, Maximize2, Users, Truck, Sun } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useLanguage } from "@/contexts/LanguageContext";
import { PORTFOLIO_CONSTANTS, formatCurrency } from "@/lib/constants";

export default function LandParcels() {
  const { t } = useLanguage();
  
  const industrialPark = {
    name: PORTFOLIO_CONSTANTS.LOCATION_NAME,
    location: t('landParcels.location'),
    totalInvestment: formatCurrency(PORTFOLIO_CONSTANTS.TOTAL_LAND_INVESTMENT),
    totalAcres: PORTFOLIO_CONSTANTS.TOTAL_ACRES.toFixed(2),
    buildingCount: "8",
    totalLeasableSF: PORTFOLIO_CONSTANTS.TOTAL_BUILDABLE_SF.toLocaleString(),
    occupancyRate: t('landParcels.developmentReady2'),
    avgRent: t('landParcels.shovelReady'),
    annualNOI: t('landParcels.landInvestment'),
    capRate: "10-15% Appreciation",
    yearBuilt: t('landParcels.immediateDev'),
    features: [
      t('landParcels.shovelReadyLots'), 
      t('landParcels.industrialZoning'),
      t('landParcels.utilities'),
      t('landParcels.borderLocation'),
      t('landParcels.highwayAccess')
    ],
    advantages: [
      "7 miles from Pharr-Reynosa International Bridge",
      "60% of Texas fresh produce imports",
      "$47-50 billion annual bridge trade volume",
      "Sub-4% industrial vacancy rate",
      "Federal rate environment supporting development"
    ]
  };

  const keyMetrics = {
    totalValue: formatCurrency(PORTFOLIO_CONSTANTS.TOTAL_LAND_INVESTMENT),
    cashFlow: `${PORTFOLIO_CONSTANTS.TOTAL_BUILDABLE_SF.toLocaleString()} SF`,
    capRate: `${formatCurrency(PORTFOLIO_CONSTANTS.AVERAGE_PRICE_PER_ACRE)} Avg`,
    occupancy: `${PORTFOLIO_CONSTANTS.TOTAL_ACRES.toFixed(2)} Acres`
  };

  return (
    <section id="land-parcels" className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4">{t('landParcels.title')}</h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8">
            {t('landParcels.description')}
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
                      <span className="text-sm font-medium">{t('landParcels.clickEnlarge')}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-semibold text-primary mb-2">{t('landParcels.militaryHighway')}</h3>
                    <p className="text-muted-foreground">{t('landParcels.militaryDesc')}</p>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-6xl max-h-[90vh] overflow-auto">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold text-primary">{t('landParcels.militaryHighway')} - Aerial Overview</DialogTitle>
                </DialogHeader>
                <div className="mt-4">
                  <img 
                    src="/lovable-uploads/6a074678-b761-405d-9c8b-3995ae50e852.png"
                    alt="Complete aerial view of the raw land parcels showing agricultural fields ready for industrial development"
                    className="w-full h-auto rounded-lg border border-border"
                  />
                  <div className="mt-4 p-4 bg-muted/30 rounded-lg">
                    <p className="text-sm text-muted-foreground">
                      <strong>Land Development Features:</strong> This 43.17-acre raw land parcel offers prime development potential with agricultural fields ready for conversion to industrial use.
                      The property provides excellent access to Military Highway for optimal logistics operations and is positioned for build-to-suit development opportunities.
                    </p>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
          
          <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium border border-blue-500/30 backdrop-blur-sm mb-8">
            <TrendingUp className="h-4 w-4 mr-2" />
            {t('landParcels.developmentReady')}
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 text-center">
              <div className="text-2xl font-bold text-gold mb-2">{keyMetrics.totalValue}</div>
              <div className="text-sm text-muted-foreground">{t('landParcels.portfolioInvestment')}</div>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 text-center">
              <div className="text-2xl font-bold text-emerald-500 mb-2">{keyMetrics.cashFlow}</div>
              <div className="text-sm text-muted-foreground">{t('landParcels.totalBuildable')}</div>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 text-center">
              <div className="text-2xl font-bold text-blue-500 mb-2">{keyMetrics.capRate}</div>
              <div className="text-sm text-muted-foreground">{t('landParcels.avgPrice')}</div>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 text-center">
              <div className="text-2xl font-bold text-amber-500 mb-2">{keyMetrics.occupancy}</div>
              <div className="text-sm text-muted-foreground">{t('landParcels.totalAcres')}</div>
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
                    {t('landParcels.stabilizedIncome')}
                  </span>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-gold">{industrialPark.totalInvestment}</div>
                  <div className="text-sm text-muted-foreground">{t('landParcels.totalInvestment')}</div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                <div className="text-center p-4 bg-muted/30 rounded-lg">
                  <MapPin className="h-6 w-6 text-gold mx-auto mb-2" />
                  <div className="text-lg font-bold text-foreground">{industrialPark.totalAcres} acres</div>
                  <div className="text-xs text-muted-foreground">{t('landParcels.totalSiteSize')}</div>
                </div>
                <div className="text-center p-4 bg-muted/30 rounded-lg">
                  <Building className="h-6 w-6 text-emerald-500 mx-auto mb-2" />
                  <div className="text-lg font-bold text-foreground">{industrialPark.buildingCount} {t('landParcels.lotsBuildings')}</div>
                  <div className="text-xs text-muted-foreground">{industrialPark.totalLeasableSF} SF {t('landParcels.totalSF')}</div>
                </div>
                <div className="text-center p-4 bg-muted/30 rounded-lg">
                  <Calculator className="h-6 w-6 text-blue-500 mx-auto mb-2" />
                  <div className="text-lg font-bold text-foreground">{industrialPark.avgRent}</div>
                  <div className="text-xs text-muted-foreground">{t('landParcels.avgRent')}</div>
                </div>
                <div className="text-center p-4 bg-muted/30 rounded-lg">
                  <TrendingUp className="h-6 w-6 text-amber-500 mx-auto mb-2" />
                  <div className="text-lg font-bold text-foreground">{industrialPark.capRate} {t('landParcels.appreciation')}</div>
                  <div className="text-xs text-muted-foreground">Annual Appreciation Projection</div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="p-4 bg-blue-50 dark:bg-blue-500/10 rounded-lg">
                  <h4 className="font-semibold text-blue-700 dark:text-blue-400 mb-2">{t('landParcels.propertyFeatures')}</h4>
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
                  <h4 className="font-semibold text-accent-emerald mb-2">{t('landParcels.investmentHighlights')}</h4>
                  <div className="space-y-1 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">{t('landParcels.yearBuilt')}</span>
                      <span className="font-medium">{industrialPark.yearBuilt}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">{t('landParcels.occupancy')}</span>
                      <span className="font-medium text-emerald-600">{industrialPark.occupancyRate}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">{t('landParcels.annualNOI')}</span>
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
            <h3 className="text-2xl font-semibold text-primary mb-4">{t('landParcels.investmentSummary')}</h3>
            <p className="text-muted-foreground mb-6">
              {t('landParcels.summaryDesc')}
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold text-gold mb-4">{t('landParcels.keyAdvantages')}</h4>
                <ul className="text-left space-y-2 text-muted-foreground">
                  <li>• {t('landParcels.immediateCashFlow')}</li>
                  <li>• {t('landParcels.creditTenants')}</li>
                  <li>• {t('landParcels.primeLocation')}</li>
                  <li>• {t('landParcels.onSiteManagement')}</li>
                  <li>• {t('landParcels.transportAccess')}</li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-emerald-500 mb-4">{t('landParcels.financialPerformance')}</h4>
                <ul className="text-left space-y-2 text-muted-foreground">
                  <li>• {t('landParcels.stabilizedCap')}</li>
                  <li>• {t('landParcels.annualNOI2')}</li>
                  <li>• {t('landParcels.occupancyRate')}</li>
                  <li>• {t('landParcels.rentEscalations')}</li>
                  <li>• {t('landParcels.valueAdd')}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}