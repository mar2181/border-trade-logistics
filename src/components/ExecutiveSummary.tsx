import { Building, MapPin, Clock } from "lucide-react";

export default function ExecutiveSummary() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary-foreground mb-4">Executive Summary</h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            A compelling $15-20M warehouse development opportunity in North America's premier fresh produce trade corridor, targeting sophisticated investors seeking stable, high-yield industrial real estate returns.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-primary-foreground mb-4">Investment Opportunity</h3>
              <p className="text-muted-foreground leading-relaxed">
                Strategic warehouse development sites along Military Highway (FM 1016) offer unprecedented access to Mexico's $7.05B annual produce trade through the Pharr-Reynosa International Bridge corridor.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6">
                <div className="flex items-center mb-3">
                  <Building className="h-5 w-5 text-gold mr-2" />
                  <span className="text-sm text-muted-foreground">Investment Range</span>
                </div>
                <div className="text-3xl font-bold text-gold">$15-20M</div>
              </div>
              <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6">
                <div className="flex items-center mb-3">
                  <Clock className="h-5 w-5 text-gold mr-2" />
                  <span className="text-sm text-muted-foreground">Timeline</span>
                </div>
                <div className="text-3xl font-bold text-gold">11-12 Months</div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-primary-foreground mb-4">Strategic Location</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Located in the heart of the Rio Grande Valley's industrial corridor, these properties provide direct access to North America's largest fresh produce import gateway while serving the growing e-commerce and regional distribution demands.
              </p>
              
              <div className="flex items-center text-muted-foreground mb-4">
                <MapPin className="h-5 w-5 text-gold mr-2" />
                <span>Military Highway (FM 1016) • Minutes from Pharr-Reynosa International Bridge</span>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-primary-foreground mb-4">Target Market</h3>
              <p className="text-muted-foreground leading-relaxed">
                Sophisticated Mexican and international investors seeking stable, income-producing assets with strong fundamentals and growth potential in a proven cross-border trade environment.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-primary-foreground mb-8 text-center">Key Investment Highlights</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 text-center">
              <div className="text-2xl font-bold text-gold mb-2">1.3%</div>
              <div className="text-sm text-muted-foreground">Historic low vacancy rate creates landlord-favorable conditions</div>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 text-center">
              <div className="text-2xl font-bold text-gold mb-2">60%</div>
              <div className="text-sm text-muted-foreground">Of Texas fresh produce imports through Pharr-Reynosa Bridge drives demand</div>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 text-center">
              <div className="text-2xl font-bold text-gold mb-2">$18.2</div>
              <div className="text-sm text-muted-foreground">Per sq ft annual rental rates with 4% projected growth</div>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 text-center">
              <div className="text-2xl font-bold text-gold mb-2">343,350 SF</div>
              <div className="text-sm text-muted-foreground">Total buildable area across premium development sites</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}