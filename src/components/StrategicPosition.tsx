import { MapPin, Truck, Building2, ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import lotLayoutAerial from "@/assets/lot-layout-aerial.jpg";

export default function StrategicPosition() {
  const { t } = useLanguage();
  
  const proximityFeatures = [
    {
      name: t('strategic.mcallenForeignTradeZone'),
      distance: "Adjacent",
      description: t('strategic.dutyFreeProcessing'),
      icon: Building2,
      color: "text-gold"
    },
    {
      name: t('strategic.mcallenProduceTerminal'),
      distance: "2.5 miles",
      description: t('strategic.produceDistributionHub'),
      icon: Truck,
      color: "text-emerald-500"
    },
    {
      name: t('strategic.majesticTradingPort'),
      distance: "4.2 miles", 
      description: t('strategic.crossBorderLogistics'),
      icon: MapPin,
      color: "text-blue-500"
    }
  ];

  return (
    <section className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4">{t('strategic.ecosystemTitle')}</h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            {t('strategic.ecosystemSubtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-semibold text-primary mb-6">{t('strategic.primePositioning')}</h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              {t('strategic.positioningDescription')}
            </p>
            
            <div className="space-y-4">
              {proximityFeatures.map((feature, index) => (
                <div key={index} className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <feature.icon className={`h-8 w-8 ${feature.color}`} />
                      <div>
                        <h4 className="font-semibold text-primary">{feature.name}</h4>
                        <p className="text-sm text-muted-foreground">{feature.description}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className={`font-semibold ${feature.color}`}>{feature.distance}</div>
                      <ArrowRight className="h-4 w-4 text-muted-foreground ml-auto mt-1" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="relative overflow-hidden rounded-xl border border-border">
              <img 
                src={lotLayoutAerial}
                alt="Aerial view of lot layout showing numbered lots 1-8 positioned along Military Road and 10th Street"
                className="w-full h-64 object-cover"
              />
            </div>
            
            <div className="bg-gradient-to-r from-gold/10 to-emerald-500/10 rounded-xl p-6">
              <h4 className="text-xl font-semibold text-primary mb-4">{t('strategic.competitiveAdvantages')}</h4>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-gold rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>{t('strategic.militaryHighwayFrontage')}</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>{t('strategic.establishedCorridor')}</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>{t('strategic.proximityBridges')}</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>{t('strategic.infrastructureReady')}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}