import { Building, MapPin, Clock } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { PORTFOLIO_CONSTANTS, formatCurrency } from "@/lib/constants";

export default function ExecutiveSummary() {
  const { t } = useLanguage();
  
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
                <div className="text-3xl font-bold text-gold">{formatCurrency(PORTFOLIO_CONSTANTS.TOTAL_LAND_INVESTMENT)}</div>
              </div>
              <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6">
                <div className="flex items-center mb-3">
                  <Clock className="h-5 w-5 text-gold mr-2" />
                  <span className="text-sm text-muted-foreground">{t('executiveSummary.pricePerAcre')}</span>
                </div>
                <div className="text-3xl font-bold text-gold">{formatCurrency(PORTFOLIO_CONSTANTS.AVERAGE_PRICE_PER_ACRE)}</div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="grid md:grid-cols-2 gap-6 items-start">
              <div className="relative overflow-hidden rounded-xl border border-border">
                <img src="/lovable-uploads/0d9c191d-f650-4d6e-adaf-28eacd50ff33.png" alt="Warehouse development floor plan layout" className="w-full h-48 object-cover" />
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
              <div className="text-2xl font-bold text-gold mb-2">{PORTFOLIO_CONSTANTS.VACANCY_RATE}%</div>
              <div className="text-sm text-muted-foreground">{t('marketAnalysis.vacancy')}</div>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 text-center">
              <div className="text-2xl font-bold text-gold mb-2">{formatCurrency(PORTFOLIO_CONSTANTS.ANNUAL_TRADE_VOLUME)}+</div>
              <div className="text-sm text-muted-foreground">{t('marketAnalysis.tradeVolume')}</div>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 text-center">
              <div className="text-2xl font-bold text-gold mb-2">2.5%</div>
              <div className="text-sm text-muted-foreground">{t('marketAnalysis.rentalGrowth')}</div>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 text-center">
                <div className="text-2xl font-bold text-gold mb-2">{PORTFOLIO_CONSTANTS.TOTAL_BUILDABLE_SF.toLocaleString()} SF</div>
              <div className="text-sm text-muted-foreground">{t('marketAnalysis.buildableArea')}</div>
            </div>
          </div>
        </div>
      </div>
    </section>;
}