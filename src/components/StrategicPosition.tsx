import { MapPin, Truck, Building2, ArrowRight } from "lucide-react";

export default function StrategicPosition() {
  const proximityFeatures = [
    {
      name: "McAllen Foreign Trade Zone",
      distance: "Adjacent",
      description: "Duty-free processing and warehousing",
      icon: Building2,
      color: "text-gold"
    },
    {
      name: "McAllen Produce Terminal",
      distance: "2.5 miles",
      description: "Major regional produce distribution hub",
      icon: Truck,
      color: "text-emerald-500"
    },
    {
      name: "Majestic International Trading Port",
      distance: "4.2 miles", 
      description: "Cross-border logistics facility",
      icon: MapPin,
      color: "text-blue-500"
    }
  ];

  return (
    <section className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4">Strategic Industrial Ecosystem</h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Located in the heart of McAllen's industrial corridor with direct access to key trade and logistics infrastructure
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-semibold text-primary mb-6">Prime Industrial Positioning</h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              The site's strategic location adjacent to the McAllen South Industrial Park development positions it at the center 
              of the region's most dynamic industrial growth area, with established infrastructure and proven demand from 
              major logistics operators.
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
                src="/lovable-uploads/91317bb0-2352-47ce-86ac-450496928ed0.png"
                alt="Aerial render of proposed industrial development on Military Highway showing modern warehouse facilities and truck access"
                className="w-full h-64 object-cover"
              />
            </div>
            
            <div className="bg-gradient-to-r from-gold/10 to-emerald-500/10 rounded-xl p-6">
              <h4 className="text-xl font-semibold text-primary mb-4">Competitive Advantages</h4>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-gold rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Military Highway frontage with high visibility and truck accessibility</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Established industrial corridor with proven tenant demand</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Proximity to three international bridges for diversified trade access</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Infrastructure-ready sites eliminate development delays and costs</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}