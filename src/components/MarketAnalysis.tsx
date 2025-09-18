import { TrendingUp, DollarSign, Package, ArrowUp } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function MarketAnalysis() {
  const { t } = useLanguage();
  
  const tradeVolume = [{
    product: t('marketAnalysis.avocados'),
    value: "$1,970M",
    color: "bg-emerald-500"
  }, {
    product: t('marketAnalysis.berries'),
    value: "$1,100M",
    color: "bg-blue-500"
  }, {
    product: t('marketAnalysis.peppers'),
    value: "$890M",
    color: "bg-amber-500"
  }, {
    product: t('marketAnalysis.onions'),
    value: "$650M",
    color: "bg-red-500"
  }, {
    product: t('marketAnalysis.others'),
    value: "$2,440M",
    color: "bg-purple-500"
  }];
  
  return <section id="analysis" className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4">{t('marketAnalysis.title')}</h2>
          <div className="bg-gradient-to-r from-accent-emerald/20 via-gold/20 to-accent-emerald/20 rounded-2xl p-6 mb-8">
            <p className="text-xl text-foreground max-w-4xl mx-auto text-center font-medium">
              <span className="text-gold font-bold">{t('marketAnalysis.strategicPosition')}</span>
            </p>
            <p className="text-lg text-muted-foreground max-w-5xl mx-auto text-center mt-4">
              {t('marketAnalysis.strategicDesc')}
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-semibold text-primary mb-6">{t('marketAnalysis.dynamicTransformation')}</h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              {t('marketAnalysis.dynamicDesc')}
            </p>
            
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6">
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm text-muted-foreground">{t('marketAnalysis.vacancyTrend')}</span>
                <span className="text-sm text-muted-foreground">{t('marketAnalysis.rentalRateGrowth')}</span>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm">2023</span>
                  <div className="flex-1 mx-4 bg-muted-foreground/20 rounded-full h-2">
                    <div className="bg-emerald-500 h-2 rounded-full" style={{
                    width: '20%'
                  }}></div>
                  </div>
                  <span className="text-sm text-gold font-semibold">4.5%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">2025</span>
                  <div className="flex-1 mx-4 bg-muted-foreground/20 rounded-full h-2">
                    <div className="bg-gold h-2 rounded-full" style={{
                    width: '13%'
                  }}></div>
                  </div>
                  <span className="text-sm text-gold font-semibold">3%</span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="relative overflow-hidden rounded-xl border border-border">
              <img src="/lovable-uploads/42ae0efd-1421-4306-ac6f-4e016f62e8fd.png" alt="Strategic location aerial view showing McAllen industrial area with site positioning relative to airports, bridges, and industrial parks" className="w-full h-64 object-cover" />
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold text-primary mb-6">{t('marketAnalysis.tradeVolumeDistribution')}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {t('marketAnalysis.tradeVolumeDesc')}
              </p>
              
              <div className="space-y-3">
                {tradeVolume.map((item, index) => <div key={index} className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-3">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <div className={`w-3 h-3 rounded-full ${item.color} mr-3`}></div>
                        <span className="text-foreground font-medium text-sm">{item.product}</span>
                      </div>
                      <span className="text-gold font-semibold text-sm">{item.value}</span>
                    </div>
                  </div>)}
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 text-center hover:shadow-lg hover:shadow-gold/10 transition-all duration-300">
            <Package className="h-8 w-8 text-gold mx-auto mb-3" />
            <div className="text-2xl font-bold text-gold mb-2">1.5-2.5M SF</div>
            <div className="text-sm text-muted-foreground">{t('marketAnalysis.supplyShortage')}</div>
          </div>
          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 text-center hover:shadow-lg hover:shadow-emerald-500/10 transition-all duration-300">
            <TrendingUp className="h-8 w-8 text-emerald-500 mx-auto mb-3" />
            <div className="text-2xl font-bold text-emerald-500 mb-2">+10%</div>
            <div className="text-sm text-muted-foreground">{t('marketAnalysis.importGrowth')}</div>
          </div>
          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 text-center hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300">
            <DollarSign className="h-8 w-8 text-blue-500 mx-auto mb-3" />
            <div className="text-2xl font-bold text-blue-500 mb-2">3%</div>
            <div className="text-sm text-muted-foreground">{t('marketAnalysis.rentTrajectory')}</div>
          </div>
          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 text-center hover:shadow-lg hover:shadow-amber-500/10 transition-all duration-300">
            <ArrowUp className="h-8 w-8 text-amber-500 mx-auto mb-3" />
            <div className="text-2xl font-bold text-amber-500 mb-2">44.17 Acres</div>
            <div className="text-sm text-muted-foreground">{t('marketAnalysis.onlyProperties')}</div>
          </div>
        </div>
      </div>
    </section>;
}