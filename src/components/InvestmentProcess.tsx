import { Phone, Mail, Calendar, Search, FileText, Building, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

export default function InvestmentProcess() {
  const { t } = useLanguage();
  const processSteps = [
    {
      number: "01",
      title: "Initial Property Inquiry",
      description: "Contact specialist to review 8 available McAllen industrial district properties",
      icon: Calendar
    },
    {
      number: "02", 
      title: "Site Visit & Inspection",
      description: "Tour McAllen properties, verify utilities, assess development potential",
      icon: Search
    },
    {
      number: "03",
      title: "Investment Structuring", 
      description: "Structure terms to benefit from Fed rate cuts and Valley growth",
      icon: FileText
    },
    {
      number: "04",
      title: "Property Acquisition",
      description: "Secure your position in America's most coveted industrial district",
      icon: Building
    }
  ];

  return (
    <section className="py-16 px-6 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4">{t('investmentProcess.title')}</h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            <span className="text-gold font-bold">{t('investmentProcess.limitedProperties')}</span> {t('investmentProcess.district')}
            {t('investmentProcess.investors')}
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-primary mb-8 text-center">{t('investmentProcess.processTitle')}</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <div key={index} className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 text-center hover:shadow-lg hover:shadow-gold/10 transition-all duration-300">
                <div className="flex items-center justify-center mb-4">
                  <div className="bg-gold text-background rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg mr-3">
                    {step.number}
                  </div>
                  <step.icon className="h-8 w-8 text-gold" />
                </div>
                
                <h4 className="text-lg font-semibold text-primary mb-3">{step.title}</h4>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-primary mb-8 text-center">RE/MAX Commercial Team</h3>
          
          <div className="grid lg:grid-cols-1 gap-8 max-w-2xl mx-auto">
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-8 text-center">
              <h4 className="text-xl font-semibold text-primary mb-4">{t('investmentProcess.specialistTitle')}</h4>
              <p className="text-muted-foreground mb-6">
                {t('investmentProcess.specialistDescription')}
              </p>
              
              <div className="flex flex-col items-center space-y-4">
                <div className="flex items-center space-x-2 text-gold">
                  <Phone className="h-5 w-5" />
                  <span className="text-xl font-semibold">(956) 522-1481</span>
                </div>
                
                <Button className="bg-gradient-to-r from-gold to-gold-dark text-background font-semibold hover:shadow-lg hover:shadow-gold/25 transition-all duration-300">
                  <Mail className="h-4 w-4 mr-2" />
                  {t('investmentProcess.contactButton')}
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-gold/10 to-emerald-500/10 rounded-xl p-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <CheckCircle className="h-8 w-8 text-emerald-500 mr-3" />
              <h3 className="text-2xl font-semibold text-primary">Last 8 Properties - Act Before Fed Cuts Drive Prices Higher</h3>
            </div>
            
            <p className="text-muted-foreground mb-8 max-w-3xl mx-auto">
              <span className="font-semibold text-accent-emerald">PERFECT TIMING:</span> Only 8 properties left in McAllen's premier industrial district. 
              Following Fed rate adjustments - position your investment strategically at current market pricing before the Valley's continued growth 
              drives prices higher. This is your chance to get ahead of the curve in America's hidden gem.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
              <div>
                <div className="text-xl font-bold text-gold mb-1">McAllen Industrial</div>
                <div className="text-sm text-muted-foreground">District Premium</div>
              </div>
              <div>
                <div className="text-xl font-bold text-accent-emerald mb-1">8 Properties</div>
                <div className="text-sm text-muted-foreground">Only Remaining</div>
              </div>
              <div>
                <div className="text-xl font-bold text-accent-sapphire mb-1">$11.89M</div>
                <div className="text-sm text-muted-foreground">Portfolio Value</div>
              </div>
              <div>
                <div className="text-xl font-bold text-accent-amber mb-1">900K+</div>
                <div className="text-sm text-muted-foreground">Metro Population</div>
              </div>
              <div>
                <div className="text-xl font-bold text-purple-500 mb-1">Fed Cuts</div>
                <div className="text-sm text-muted-foreground">Strategic Timing</div>
              </div>
            </div>
            
            <div className="mt-8 p-4 bg-accent-emerald/10 rounded-lg border border-accent-emerald/30">
              <p className="text-accent-emerald font-semibold">
                Contact your specialist at (956) 522-1481 TODAY - These 8 premium properties won't last in The Valley's dynamic growth market!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}