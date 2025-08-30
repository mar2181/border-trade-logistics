import { Building, MapPin, Clock } from "lucide-react";

export default function ExecutiveSummary() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4">Executive Summary</h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            A premier $13.5M land portfolio opportunity in North America's top fresh produce corridor. 49 acres of shovel-ready parcels with utilities in place, offering unmatched appreciation and flexibility for sophisticated investors.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-primary mb-4">Prime Land Investment</h3>
              <p className="text-muted-foreground leading-relaxed">
                Strategic industrial land parcels along Military Highway (FM 1016) with utilities in place, zoned for industrial use, offering 343,350 SF buildable area. Target: 10-15% annual appreciation amid 375% rental growth and supply shortage.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6">
                <div className="flex items-center mb-3">
                  <Building className="h-5 w-5 text-gold mr-2" />
                  <span className="text-sm text-muted-foreground">Land Portfolio Value</span>
                </div>
                <div className="text-3xl font-bold text-gold">$13.5M</div>
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
            <div>
              <h3 className="text-2xl font-semibold text-primary mb-4">Land Advantages & Market Position</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                • Strategic location with direct highway access and bridge proximity<br/>
                • Market drivers: $7.05B trade volume with +44% projected growth<br/>
                • Pricing edge: $250K-$300K/acre matches ready-to-build comparables<br/>
                • Flexibility: Hold for appreciation, resell, or develop custom facilities
              </p>
              
              <div className="flex items-center text-muted-foreground mb-4">
                <MapPin className="h-5 w-5 text-gold mr-2" />
                <span>Military Highway (FM 1016) • Minutes from Pharr-Reynosa International Bridge</span>
              </div>

              <div className="relative overflow-hidden rounded-xl border border-border mb-6">
                <img 
                  src="/lovable-uploads/18eaafa7-6467-4037-8e2d-6d8017b50422.png" 
                  alt="Modern warehouse exterior with professional office space" 
                  className="w-full h-64 object-cover"
                />
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-primary mb-4">Land Comparables & Pricing Validation</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Recent McAllen/Hidalgo comparables: Shovel-ready industrial lots average $281K/acre (Crexi data). Raw parcels without utilities average $105-170K/acre. Our pricing at $250K-$300K/acre is competitive for fully ready sites with immediate build potential.
              </p>

              <div className="relative overflow-hidden rounded-xl border border-border">
                <img 
                  src="/lovable-uploads/3e9cf4b0-cd02-4374-a49b-8642655e444f.png" 
                  alt="Modern office space in warehouse development" 
                  className="w-full h-64 object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-primary mb-8 text-center">Key Land Investment Highlights</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 text-center">
              <div className="text-2xl font-bold text-gold mb-2">1.3%</div>
              <div className="text-sm text-muted-foreground">Historic vacancy drives land value appreciation in tight market</div>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 text-center">
              <div className="text-2xl font-bold text-gold mb-2">$7.05B</div>
              <div className="text-sm text-muted-foreground">Annual trade volume supports land demand with 44% growth projected</div>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 text-center">
              <div className="text-2xl font-bold text-gold mb-2">375%</div>
              <div className="text-sm text-muted-foreground">Rental rate growth signals strong land appreciation potential</div>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 text-center">
              <div className="text-2xl font-bold text-gold mb-2">343,350 SF</div>
              <div className="text-sm text-muted-foreground">Total buildable area across 49 premium acres available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}