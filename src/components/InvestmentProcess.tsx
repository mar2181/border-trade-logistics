import { Phone, Mail, Calendar, Search, FileText, Building, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function InvestmentProcess() {
  const processSteps = [
    {
      number: "01",
      title: "Initial Consultation",
      description: "Review investment overview and property specifications",
      icon: Calendar
    },
    {
      number: "02", 
      title: "Site Visit & Due Diligence",
      description: "On-site property tour and detailed market analysis",
      icon: Search
    },
    {
      number: "03",
      title: "Investment Structuring", 
      description: "Customize investment terms and financing options",
      icon: FileText
    },
    {
      number: "04",
      title: "Development Execution",
      description: "Project management and construction oversight",
      icon: Building
    }
  ];

  return (
    <section className="py-16 px-6 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary-foreground mb-4">Next Steps</h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Ready to capitalize on this exceptional McAllen warehouse investment opportunity? Connect with our experienced development team to begin your investment journey.
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-primary-foreground mb-8 text-center">Investment Process</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <div key={index} className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 text-center hover:shadow-lg hover:shadow-gold/10 transition-all duration-300">
                <div className="flex items-center justify-center mb-4">
                  <div className="bg-gold text-background rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg mr-3">
                    {step.number}
                  </div>
                  <step.icon className="h-8 w-8 text-gold" />
                </div>
                
                <h4 className="text-lg font-semibold text-primary-foreground mb-3">{step.title}</h4>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-primary-foreground mb-8 text-center">Development Team</h3>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-8">
              <h4 className="text-xl font-semibold text-primary-foreground mb-4">Property Development</h4>
              <p className="text-muted-foreground mb-6">
                Experienced warehouse construction specialists with proven track record in cold storage and 
                industrial development throughout South Texas.
              </p>
              
              <div className="flex items-center justify-center space-x-2 text-gold">
                <Phone className="h-5 w-5" />
                <span className="text-xl font-semibold">(956) 522-1481</span>
              </div>
            </div>
            
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-8">
              <h4 className="text-xl font-semibold text-primary-foreground mb-4">Investment Advisory</h4>
              <p className="text-muted-foreground mb-6">
                Comprehensive investment structuring and market analysis services tailored for 
                international investors and high-net-worth individuals.
              </p>
              
              <div className="flex justify-center">
                <Button className="bg-gradient-to-r from-gold to-gold-dark text-background font-semibold hover:shadow-lg hover:shadow-gold/25 transition-all duration-300">
                  <Mail className="h-4 w-4 mr-2" />
                  Email Inquiry
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-gold/10 to-blue-500/10 rounded-xl p-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <CheckCircle className="h-8 w-8 text-emerald-500 mr-3" />
              <h3 className="text-2xl font-semibold text-primary-foreground">Investment Summary</h3>
            </div>
            
            <p className="text-muted-foreground mb-8 max-w-3xl mx-auto">
              Strategic warehouse development opportunity in North America's premier cross-border trade corridor 
              targeting 7-9% cap rates with stable, long-term income.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
              <div>
                <div className="text-xl font-bold text-gold mb-1">McAllen, TX</div>
                <div className="text-sm text-muted-foreground">Military Highway</div>
              </div>
              <div>
                <div className="text-xl font-bold text-emerald-500 mb-1">343,350 SF</div>
                <div className="text-sm text-muted-foreground">Buildable Area</div>
              </div>
              <div>
                <div className="text-xl font-bold text-blue-500 mb-1">11 Months</div>
                <div className="text-sm text-muted-foreground">Development Timeline</div>
              </div>
              <div>
                <div className="text-xl font-bold text-amber-500 mb-1">$15-20M</div>
                <div className="text-sm text-muted-foreground">Investment Range</div>
              </div>
              <div>
                <div className="text-xl font-bold text-purple-500 mb-1">7-9%</div>
                <div className="text-sm text-muted-foreground">Target Cap Rates</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}