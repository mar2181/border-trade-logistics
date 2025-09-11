import { MapPin, Truck, Building2, Users, Zap, CheckCircle, TrendingUp, DollarSign } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function LocationAdvantages() {
  const { t } = useLanguage();
  
  const economicData = [
    { label: t('strategic.regionalRetail'), value: "$17.5B", icon: DollarSign },
    { label: t('strategic.populationGrowth'), value: "+80K", icon: Users },
    { label: t('strategic.ecommerceGrowth'), value: "21.5%", icon: TrendingUp },
    { label: t('strategic.dailyTrucks'), value: "200+", icon: Truck }
  ];

  return (
    <section className="py-16 px-6 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4">{t('strategic.locationConnectivity')}</h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8">
            {t('strategic.locationDesc')}
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="relative overflow-hidden rounded-xl border border-border">
              <img 
                src="/lovable-uploads/89320e06-66fc-4e58-8169-f1553c111e32.png" 
                alt="Modern warehouse facility showing strategic industrial development" 
                className="w-full h-56 object-cover"
              />
            </div>
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6">
              <h3 className="text-xl font-semibold text-primary mb-4">{t('strategic.keyDistances')}</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">{t('strategic.ih2Interstate')}</span>
                  <span className="font-semibold text-gold">3 miles</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">{t('strategic.tollRoad')}</span>
                  <span className="font-semibold text-emerald-500">1 mile</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">{t('strategic.anzalduasBridge')}</span>
                  <span className="font-semibold text-blue-500">3 miles</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">{t('strategic.mcallenBridge')}</span>
                  <span className="font-semibold text-amber-500">6 miles</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">{t('strategic.pharrBridge')}</span>
                  <span className="font-semibold text-purple-500">7 miles</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-8 text-center hover:shadow-lg hover:shadow-gold/10 transition-all duration-300">
            <MapPin className="h-12 w-12 text-gold mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-primary mb-3">{t('strategic.borderLocation')}</h3>
            <p className="text-muted-foreground mb-4">
              {t('strategic.borderDesc')}
            </p>
            <div className="text-2xl font-bold text-gold">60%</div>
            <div className="text-sm text-muted-foreground">{t('strategic.texasProduce')}</div>
          </div>

          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-8 text-center hover:shadow-lg hover:shadow-emerald-500/10 transition-all duration-300">
            <Truck className="h-12 w-12 text-emerald-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-primary mb-3">{t('strategic.transportInfra')}</h3>
            <p className="text-muted-foreground mb-4">
              {t('strategic.militaryHighwayDesc')}
            </p>
            <div className="text-2xl font-bold text-emerald-500">223K</div>
            <div className="text-sm text-muted-foreground">{t('strategic.truckloadsAnnually')}</div>
          </div>

          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-8 text-center hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300">
            <Building2 className="h-12 w-12 text-blue-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-primary mb-3">{t('strategic.crossBorderHub')}</h3>
            <p className="text-muted-foreground mb-4">
              {t('strategic.gatewayDesc')}
            </p>
            <div className="text-2xl font-bold text-blue-500">$8B+</div>
            <div className="text-sm text-muted-foreground">{t('strategic.importsValue')}</div>
          </div>

          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-8 text-center hover:shadow-lg hover:shadow-amber-500/10 transition-all duration-300">
            <Zap className="h-12 w-12 text-amber-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-primary mb-3">{t('strategic.utilityInfra')}</h3>
            <p className="text-muted-foreground mb-4">
              {t('strategic.utilityDesc')}
            </p>
            <div className="text-2xl font-bold text-amber-500">{t('strategic.shovelReady')}</div>
            <div className="text-sm text-muted-foreground">sites</div>
          </div>

          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-8 text-center hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300">
            <Users className="h-12 w-12 text-purple-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-primary mb-3">{t('strategic.laborMarket')}</h3>
            <p className="text-muted-foreground mb-4">
              {t('strategic.laborDesc')}
            </p>
            <div className="text-2xl font-bold text-purple-500">145K+</div>
            <div className="text-sm text-muted-foreground">{t('strategic.workers')}</div>
          </div>

          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-8 text-center hover:shadow-lg hover:shadow-rose-500/10 transition-all duration-300">
            <CheckCircle className="h-12 w-12 text-rose-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-primary mb-3">{t('strategic.devEcosystem')}</h3>
            <p className="text-muted-foreground mb-4">
              {t('strategic.ecosystemDesc')}
            </p>
            <div className="text-2xl font-bold text-rose-500">{t('strategic.provenMarket')}</div>
            <div className="text-sm text-muted-foreground">market</div>
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-primary mb-8 text-center">{t('strategic.economicImpact')}</h3>
          
          <div className="grid md:grid-cols-4 gap-6">
            {economicData.map((item, index) => (
              <div key={index} className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 text-center hover:shadow-lg hover:shadow-gold/10 transition-all duration-300">
                <item.icon className="h-8 w-8 text-gold mx-auto mb-3" />
                <div className="text-2xl font-bold text-gold mb-2">{item.value}</div>
                <div className="text-sm text-muted-foreground">{item.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-gold/10 to-emerald-500/10 rounded-xl p-8">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-semibold text-primary mb-4">{t('strategic.militaryCorridor')}</h3>
            <p className="text-muted-foreground max-w-4xl mx-auto">
              {t('strategic.corridorDesc')}
            </p>
          </div>
          
          <div className="flex items-center justify-center">
            <div className="inline-flex items-center px-6 py-3 bg-gold/20 text-gold rounded-full text-sm font-medium border border-gold/30">
              <MapPin className="h-4 w-4 mr-2" />
              {t('strategic.minutesFromBridge')}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}