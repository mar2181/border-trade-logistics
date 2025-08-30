import { Phone, Mail, Calendar, Search, FileText, Building, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function InvestmentProcess() {
  const processSteps = [
    {
      number: "01",
      title: "Initial Land Inquiry",
      description: "Contact RE/MAX agent to review available parcels and pricing",
      icon: Calendar
    },
    {
      number: "02", 
      title: "Site Visit & Inspection",
      description: "Tour properties, verify utilities, and review development potential",
      icon: Search
    },
    {
      number: "03",
      title: "Purchase Structuring", 
      description: "Negotiate terms, financing options, and closing timeline",
      icon: FileText
    },
    {
      number: "04",
      title: "Land Acquisition",
      description: "Close transaction and take ownership of shovel-ready land",
      icon: Building
    }
  ];

  return (
    <section className="py-16 px-6 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4">Secure Your Land Today</h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Don't miss this opportunity in a 1.3% vacancy market. Contact RE/MAX agent today to purchase these limited shovel-ready parcels and secure your stake in $7.05B trade growth.
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-primary mb-8 text-center">Land Purchase Process</h3>
          
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
              <h4 className="text-xl font-semibold text-primary mb-4">Your Land Investment Specialist</h4>
              <p className="text-muted-foreground mb-6">
                Expert in McAllen industrial land sales with deep knowledge of cross-border trade market dynamics 
                and proven track record helping investors secure premium properties.
              </p>
              
              <div className="flex flex-col items-center space-y-4">
                <div className="flex items-center space-x-2 text-gold">
                  <Phone className="h-5 w-5" />
                  <span className="text-xl font-semibold">(956) 522-1481</span>
                </div>
                
                <Button className="bg-gradient-to-r from-gold to-gold-dark text-background font-semibold hover:shadow-lg hover:shadow-gold/25 transition-all duration-300">
                  <Mail className="h-4 w-4 mr-2" />
                  Contact for Exclusive Access
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-gold/10 to-emerald-500/10 rounded-xl p-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <CheckCircle className="h-8 w-8 text-emerald-500 mr-3" />
              <h3 className="text-2xl font-semibold text-primary">Limited Availability - Act Now</h3>
            </div>
            
            <p className="text-muted-foreground mb-8 max-w-3xl mx-auto">
              <span className="font-semibold text-red-500">URGENT:</span> Only 49 acres available in 1.3% vacancy market. 
              Secure premium shovel-ready land at $250K-$300K/acre before prices rise with market tightening.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
              <div>
                <div className="text-xl font-bold text-gold mb-1">McAllen, TX</div>
                <div className="text-sm text-muted-foreground">Military Highway</div>
              </div>
              <div>
                <div className="text-xl font-bold text-emerald-500 mb-1">49 Acres</div>
                <div className="text-sm text-muted-foreground">Total Available</div>
              </div>
              <div>
                <div className="text-xl font-bold text-blue-500 mb-1">$13.5M</div>
                <div className="text-sm text-muted-foreground">Portfolio Value</div>
              </div>
              <div>
                <div className="text-xl font-bold text-amber-500 mb-1">10-15%</div>
                <div className="text-sm text-muted-foreground">Annual Appreciation</div>
              </div>
              <div>
                <div className="text-xl font-bold text-purple-500 mb-1">Immediate</div>
                <div className="text-sm text-muted-foreground">Ready to Build</div>
              </div>
            </div>
            
            <div className="mt-8 p-4 bg-red-50 dark:bg-red-500/10 rounded-lg border border-red-200 dark:border-red-500/20">
              <p className="text-red-700 dark:text-red-400 font-semibold">
                Contact RE/MAX agent at (956) 522-1481 TODAY - These parcels won't last in this tight market!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}