import { Users, DollarSign, Home, Calendar, MapPin, TrendingUp } from "lucide-react";

export default function Demographics() {
  const radiusData = [
    {
      radius: "1 Mile",
      population: "28,450",
      avgHouseholdIncome: "$65,890",
      avgAge: "31.2",
      avgHouseValue: "$165,000"
    },
    {
      radius: "3 Mile", 
      population: "89,230",
      avgHouseholdIncome: "$68,500",
      avgAge: "32.8",
      avgHouseValue: "$171,200"
    },
    {
      radius: "5 Mile",
      population: "138,979",
      avgHouseholdIncome: "$72,204", 
      avgAge: "33.6",
      avgHouseValue: "$177,465"
    }
  ];

  return (
    <section className="py-16 px-6 bg-muted/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4">Area Demographics & Market Profile</h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Strategic positioning in a growing market with strong economic fundamentals and expanding population base
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {radiusData.map((data, index) => (
            <div key={index} className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-8">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gold/20 rounded-full mb-4">
                  <MapPin className="h-8 w-8 text-gold" />
                </div>
                <h3 className="text-2xl font-semibold text-primary mb-2">{data.radius} Radius</h3>
                <p className="text-sm text-muted-foreground">Market Demographics</p>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-muted/30 rounded-lg">
                  <div className="flex items-center">
                    <Users className="h-5 w-5 text-blue-500 mr-3" />
                    <span className="text-sm text-muted-foreground">Population</span>
                  </div>
                  <span className="text-lg font-bold text-blue-500">{data.population}</span>
                </div>

                <div className="flex justify-between items-center p-4 bg-muted/30 rounded-lg">
                  <div className="flex items-center">
                    <DollarSign className="h-5 w-5 text-emerald-500 mr-3" />
                    <span className="text-sm text-muted-foreground">Avg Household Income</span>
                  </div>
                  <span className="text-lg font-bold text-emerald-500">{data.avgHouseholdIncome}</span>
                </div>

                <div className="flex justify-between items-center p-4 bg-muted/30 rounded-lg">
                  <div className="flex items-center">
                    <Calendar className="h-5 w-5 text-amber-500 mr-3" />
                    <span className="text-sm text-muted-foreground">Average Age</span>
                  </div>
                  <span className="text-lg font-bold text-amber-500">{data.avgAge} yrs</span>
                </div>

                <div className="flex justify-between items-center p-4 bg-muted/30 rounded-lg">
                  <div className="flex items-center">
                    <Home className="h-5 w-5 text-purple-500 mr-3" />
                    <span className="text-sm text-muted-foreground">Avg House Value</span>
                  </div>
                  <span className="text-lg font-bold text-purple-500">{data.avgHouseValue}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-gold/10 to-emerald-500/10 rounded-xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold text-primary mb-4">Market Insights from 2020 ACS - US Census</h3>
            <p className="text-muted-foreground max-w-4xl mx-auto">
              The 5-mile demographic profile demonstrates a young, growing workforce with increasing household incomes, 
              creating strong demand for distribution and logistics services.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-card/30 rounded-lg">
              <TrendingUp className="h-8 w-8 text-gold mx-auto mb-3" />
              <div className="text-2xl font-bold text-gold mb-2">33.6</div>
              <div className="text-sm text-muted-foreground">Average Age - Prime Working Population</div>
            </div>
            <div className="text-center p-6 bg-card/30 rounded-lg">
              <DollarSign className="h-8 w-8 text-emerald-500 mx-auto mb-3" />
              <div className="text-2xl font-bold text-emerald-500 mb-2">$72K</div>
              <div className="text-sm text-muted-foreground">Household Income - Strong Consumer Base</div>
            </div>
            <div className="text-center p-6 bg-card/30 rounded-lg">
              <Home className="h-8 w-8 text-blue-500 mx-auto mb-3" />
              <div className="text-2xl font-bold text-blue-500 mb-2">$177K</div>
              <div className="text-sm text-muted-foreground">Home Value - Established Community</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}