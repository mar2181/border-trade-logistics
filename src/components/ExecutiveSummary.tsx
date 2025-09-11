import { Building, MapPin, Clock } from "lucide-react";
export default function ExecutiveSummary() {
  return <section id="overview" className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4">Executive Summary</h2>
          <div className="bg-gradient-to-r from-gold/20 via-accent-emerald/20 to-gold/20 rounded-2xl p-6 mb-8">
            <p className="text-xl text-foreground max-w-4xl mx-auto text-center font-medium">
              <span className="text-gold font-bold">The Valley's Hidden Gem:</span> A premier $12.24M land portfolio in America's most coveted industrial district
            </p>
            <p className="text-lg text-muted-foreground max-w-5xl mx-auto text-center mt-4">
              44.17 acres of premium shovel-ready parcels on 10th Street in McAllen's dynamic industrial growth market. 
              <span className="text-accent-emerald font-semibold"> Following Fed rate adjustments</span> - position yourself strategically in this 
              <span className="text-gold font-semibold"> compelling market position</span> where savvy investors stay and grow.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-primary mb-4">McAllen's Strategic Investment Opportunity</h3>
              <p className="text-muted-foreground leading-relaxed">
                <strong className="text-accent-emerald">Only 8 properties available</strong> in McAllen's premier industrial district. Strategic 10th Street corridor parcels with utilities ready, 
                zoned industrial, 585,530 SF buildable. The Valley's projected 20-year boom, combined with Fed rate cuts, creates unmatched appreciation potential.
                <strong className="text-gold">This market demonstrates exceptional resilience</strong> amid changing national conditions due to its unique demand drivers and constrained supply.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6">
                <div className="flex items-center mb-3">
                  <Building className="h-5 w-5 text-gold mr-2" />
                  <span className="text-sm text-muted-foreground">Land Portfolio Value</span>
                </div>
                <div className="text-3xl font-bold text-gold">$12.24M</div>
              </div>
              <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6">
                <div className="flex items-center mb-3">
                  <Clock className="h-5 w-5 text-gold mr-2" />
                  <span className="text-sm text-muted-foreground">Price Per Acre</span>
                </div>
                <div className="text-3xl font-bold text-gold">$250K-$300K</div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="grid md:grid-cols-2 gap-6 items-start">
              <div className="relative overflow-hidden rounded-xl border border-border">
                <img src="/lovable-uploads/0d9c191d-f650-4d6e-adaf-28eacd50ff33.png" alt="Warehouse development floor plan layout" className="w-full h-48 object-cover" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-primary mb-4">The Valley Advantage - America's Hidden Gem</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  • <strong className="text-gold">Premium Industrial Location:</strong> Strategic corner location on 10th Street with new road development<br />
                  • <strong className="text-accent-emerald">900K+ Metro Population:</strong> McAllen rivals El Paso size with strong growth trajectory<br />
                  • <strong className="text-accent-sapphire">Refrigerated Industry Boom:</strong> Heart of produce alley with surging demand<br />
                  • <strong className="text-gold">Fed Rate Cut Timing:</strong> Perfect storm for development financing and appreciation<br />
                  • <strong className="text-accent-emerald">Market Resilience:</strong> Valley growth fundamentals provide stability amid changing national conditions
                </p>
                
                <div className="flex items-center text-muted-foreground mb-4">
                  <MapPin className="h-5 w-5 text-gold mr-2" />
                  <span>10th Street • McAllen Industrial District • Heart of America's Produce Distribution Hub</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-primary mb-4">Valley Investment Opportunity - Perfect Timing</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong className="text-gold">Why Investors Choose The Valley:</strong> Those who have done business in McAllen stay and grow - it's America's best-kept secret. 
                Recent comparables show $281K/acre for ready sites, making our $250K-$300K pricing extremely attractive. 
                <strong className="text-accent-emerald">Act Now</strong> to benefit from Fed rate cuts whether you build or hold. 
                This represents a <strong className="text-gold">compelling investment opportunity</strong> with multiple favorable scenarios in a fundamentally strong market.
              </p>

              <div className="relative overflow-hidden rounded-xl border border-border">
                <img src="/lovable-uploads/3e9cf4b0-cd02-4374-a49b-8642655e444f.png" alt="Modern office space in warehouse development" className="w-full h-64 object-cover" />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-primary mb-8 text-center">Key Land Investment Highlights</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 text-center">
              <div className="text-2xl font-bold text-gold mb-2">3%</div>
              <div className="text-sm text-muted-foreground">Market vacancy (3Q24) supports stable occupancy in established market</div>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 text-center">
              <div className="text-2xl font-bold text-gold mb-2">$6B+</div>
              <div className="text-sm text-muted-foreground">Annual trade volume supports land demand with 44% growth projected</div>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 text-center">
              <div className="text-2xl font-bold text-gold mb-2">2.5%</div>
              <div className="text-sm text-muted-foreground">Rental rate growth signals strong land appreciation potential</div>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 text-center">
                <div className="text-2xl font-bold text-gold mb-2">585,530 SF</div>
              <div className="text-sm text-muted-foreground">Total buildable area across 44.17 premium acres - only 8 properties left</div>
            </div>
          </div>
        </div>
      </div>
    </section>;
}