import { MapPin, Truck, Building2, Users, Zap, CheckCircle, TrendingUp, DollarSign } from "lucide-react";

export default function LocationAdvantages() {
  const economicData = [
    { label: "Regional Retail Trade", value: "$17.5B", icon: DollarSign },
    { label: "Population Growth (2012-2022)", value: "+80K", icon: Users },
    { label: "E-commerce Grocery Growth", value: "21.5%", icon: TrendingUp },
    { label: "Daily Produce Trucks", value: "200+", icon: Truck }
  ];

  return (
    <section className="py-16 px-6 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4">Strategic Location & Connectivity</h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8">
            Prime positioning adjacent to McAllen South Industrial Park with direct access to major international bridges and trade corridors
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
              <h3 className="text-xl font-semibold text-primary mb-4">Key Distances</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">IH-2 Interstate</span>
                  <span className="font-semibold text-gold">3.1 miles (6 min)</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">365 Toll Road</span>
                  <span className="font-semibold text-emerald-500">1 mile</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Anzalduas Bridge</span>
                  <span className="font-semibold text-blue-500">3.3 miles</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">McAllen-Hidalgo Bridge</span>
                  <span className="font-semibold text-amber-500">6.1 miles</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Pharr-Reynosa Bridge</span>
                  <span className="font-semibold text-purple-500">7.5 miles</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-8 text-center hover:shadow-lg hover:shadow-gold/10 transition-all duration-300">
            <MapPin className="h-12 w-12 text-gold mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-primary mb-3">Strategic Border Location</h3>
            <p className="text-muted-foreground mb-4">
              Adjacent to McAllen South Industrial Park with access to three major international bridges
            </p>
            <div className="text-2xl font-bold text-gold">60%</div>
            <div className="text-sm text-muted-foreground">of Texas fresh produce imports</div>
          </div>

          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-8 text-center hover:shadow-lg hover:shadow-emerald-500/10 transition-all duration-300">
            <Truck className="h-12 w-12 text-emerald-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-primary mb-3">Transportation Infrastructure</h3>
            <p className="text-muted-foreground mb-4">
              Military Highway (FM 1016) provides seamless connectivity to major distribution networks
            </p>
            <div className="text-2xl font-bold text-emerald-500">223K</div>
            <div className="text-sm text-muted-foreground">truckloads annually</div>
          </div>

          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-8 text-center hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300">
            <Building2 className="h-12 w-12 text-blue-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-primary mb-3">Cross-Border Trade Hub</h3>
            <p className="text-muted-foreground mb-4">
              Gateway to $7.05B annual produce trade with projected 44% growth by 2025
            </p>
            <div className="text-2xl font-bold text-blue-500">$8B+</div>
            <div className="text-sm text-muted-foreground">2024 imports</div>
          </div>

          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-8 text-center hover:shadow-lg hover:shadow-amber-500/10 transition-all duration-300">
            <Zap className="h-12 w-12 text-amber-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-primary mb-3">Utility Infrastructure</h3>
            <p className="text-muted-foreground mb-4">
              Established industrial utilities with capacity for large-scale warehouse development
            </p>
            <div className="text-2xl font-bold text-amber-500">Shovel-ready</div>
            <div className="text-sm text-muted-foreground">sites</div>
          </div>

          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-8 text-center hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300">
            <Users className="h-12 w-12 text-purple-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-primary mb-3">Labor Market Access</h3>
            <p className="text-muted-foreground mb-4">
              Access to 145,000+ manufacturing employees in the Rio Grande Valley region
            </p>
            <div className="text-2xl font-bold text-purple-500">145K+</div>
            <div className="text-sm text-muted-foreground">workers</div>
          </div>

          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-8 text-center hover:shadow-lg hover:shadow-rose-500/10 transition-all duration-300">
            <CheckCircle className="h-12 w-12 text-rose-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-primary mb-3">Development Ecosystem</h3>
            <p className="text-muted-foreground mb-4">
              Established network of cold storage specialists and food processing facilities
            </p>
            <div className="text-2xl font-bold text-rose-500">Proven</div>
            <div className="text-sm text-muted-foreground">market</div>
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-primary mb-8 text-center">Economic Impact & Growth Drivers</h3>
          
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
            <h3 className="text-2xl font-semibold text-primary mb-4">Military Highway (FM 1016) Corridor</h3>
            <p className="text-muted-foreground max-w-4xl mx-auto">
              Strategically located along the primary industrial transportation artery connecting McAllen to the Pharr-Reynosa International Bridge, providing seamless access to Mexico's growing produce export economy and North American distribution networks.
            </p>
          </div>
          
          <div className="flex items-center justify-center">
            <div className="inline-flex items-center px-6 py-3 bg-gold/20 text-gold rounded-full text-sm font-medium border border-gold/30">
              <MapPin className="h-4 w-4 mr-2" />
              Minutes from Pharr-Reynosa International Bridge
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}