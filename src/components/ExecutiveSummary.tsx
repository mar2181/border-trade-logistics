import { Building, MapPin, Clock } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { PORTFOLIO_CONSTANTS, formatCurrency } from "@/lib/constants";
import sitePlanImage from "@/assets/mcc-industrial-park.png";
import mccWarehouseFacility from "@/assets/mcc-warehouse-facility.png";
export default function ExecutiveSummary() {
  const {
    t
  } = useLanguage();
  return <section id="overview" className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4">{t('executiveSummary.title')}</h2>
          <div className="bg-gradient-to-r from-gold/20 via-accent-emerald/20 to-gold/20 rounded-2xl p-6 mb-8">
            <p className="text-xl text-foreground max-w-4xl mx-auto text-center font-medium">
              {t('executiveSummary.subtitle')}
            </p>
            <p className="text-lg text-muted-foreground max-w-5xl mx-auto text-center mt-4">
              {t('executiveSummary.description')}
            </p>
          </div>
        </div>

        {/* Wide Site Plan Image - 3D Spinning Card */}
        <div className="my-12">
          <div className="land-card">
            <div className="stage" role="button" tabIndex={0} aria-label="3D site plan view">
              <div className="slab-wrap">
                <div className="slab">
                  <div className="face front">
                    <img 
                      src={sitePlanImage} 
                      alt="MCC Industrial Park - Modern warehouse development with professional facilities" 
                      className="w-full h-full object-cover" 
                    />
                    <div className="absolute bottom-4 right-4 bg-primary/90 text-primary-foreground px-3 py-1 rounded-lg text-sm font-medium">
                      {t('executiveSummary.hoverToSpin') || 'Hover to spin'}
                    </div>
                  </div>
                  
                  <div className="face back">
                    <img 
                      src={mccWarehouseFacility} 
                      alt="MCC Industrial Park warehouse facility with professional amenities" 
                      className="w-full h-full object-cover" 
                    />
                    <div className="absolute bottom-4 left-4 bg-primary/90 text-primary-foreground px-3 py-1 rounded-lg text-sm font-medium">
                      MCC Warehouse Facility
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-primary mb-4">{t('executiveSummary.opportunity')}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {t('executiveSummary.opportunityDesc')}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6">
                <div className="flex items-center mb-3">
                  <Building className="h-5 w-5 text-gold mr-2" />
                  <span className="text-sm text-muted-foreground">{t('executiveSummary.portfolioValue')}</span>
                </div>
                <div className="text-3xl font-bold text-gold">$12,127,850</div>
              </div>
              <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6">
                <div className="flex items-center mb-3">
                  <Clock className="h-5 w-5 text-gold mr-2" />
                  <span className="text-sm text-muted-foreground">{t('executiveSummary.pricePerAcre')}</span>
                </div>
                <div className="text-3xl font-bold text-gold">$274,572</div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="grid md:grid-cols-2 gap-6 items-start">
              <div className="relative overflow-hidden rounded-xl border border-border">
                {/* Removed image from here - this was the wrong location */}
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-primary mb-4">{t('executiveSummary.valleyAdvantage')}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  • <strong className="text-gold">{t('executiveSummary.premiumLocation')}</strong><br />
                  • <strong className="text-accent-emerald">{t('executiveSummary.metroPopulation')}</strong><br />
                  • <strong className="text-accent-sapphire">{t('executiveSummary.refrigeratedBoom')}</strong><br />
                  • <strong className="text-gold">{t('executiveSummary.fedTiming')}</strong><br />
                  • <strong className="text-accent-emerald">{t('executiveSummary.marketResilience')}</strong>
                </p>
                
                <div className="flex items-center text-muted-foreground mb-4">
                  <MapPin className="h-5 w-5 text-gold mr-2" />
                  <span>{t('hero.location')}</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-primary mb-4">{t('executiveSummary.valleyOpportunity')}</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {t('executiveSummary.whyInvestors')}
              </p>

              <div className="relative overflow-hidden rounded-xl border border-border">
                <img src="/lovable-uploads/3e9cf4b0-cd02-4374-a49b-8642655e444f.png" alt="Modern office space in warehouse development" className="w-full h-64 object-cover" />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-primary mb-8 text-center">{t('marketAnalysis.keyHighlights')}</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 text-center">
              <div className="text-2xl font-bold text-gold mb-2">3.9%</div>
              <div className="text-sm text-muted-foreground">{t('marketAnalysis.vacancy')}</div>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 text-center">
              <div className="text-2xl font-bold text-gold mb-2">$6.0B+</div>
              <div className="text-sm text-muted-foreground">{t('marketAnalysis.tradeVolume')}</div>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 text-center">
              <div className="text-2xl font-bold text-gold mb-2">2.5%</div>
              <div className="text-sm text-muted-foreground">{t('marketAnalysis.rentalGrowth')}</div>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 text-center">
                <div className="text-2xl font-bold text-gold mb-2">703,420 SF</div>
              <div className="text-sm text-muted-foreground">{t('marketAnalysis.buildableArea')}</div>
            </div>
          </div>
        </div>
      </div>
    </section>;
}