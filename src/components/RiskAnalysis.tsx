import { Shield, AlertTriangle, TrendingUp, CheckCircle } from "lucide-react";

export default function RiskAnalysis() {
  const risks = [
    {
      category: "Market Risks",
      icon: TrendingUp,
      color: "text-red-500",
      bgColor: "bg-red-500/20",
      factors: [
        "Economic downturns affecting land values",
        "Border trade policy changes", 
        "Competition from other development sites"
      ],
      mitigation: "Diversified exit strategies, strategic location value, strong market fundamentals"
    },
    {
      category: "Regulatory Risks", 
      icon: AlertTriangle,
      color: "text-amber-500",
      bgColor: "bg-amber-500/20",
      factors: [
        "Zoning changes or restrictions",
        "New environmental regulations",
        "Property tax increases"
      ],
      mitigation: "Current industrial zoning, environmental clearance, locked-in tax assessments"
    },
    {
      category: "Financial Risks",
      icon: Shield,
      color: "text-blue-500", 
      bgColor: "bg-blue-500/20",
      factors: [
        "Interest rate fluctuations",
        "Holding costs during appreciation period",
        "Market liquidity for exit"
      ],
      mitigation: "Fed rate cuts environment, low holding costs, multiple exit strategies"
    }
  ];

  const competitiveAdvantages = [
    "Shovel-ready status with all utilities connected",
    "Strategic location along major transportation corridor", 
    "Industrial zoning already in place - no approval delays",
    "Limited supply in tight 1.3% vacancy market"
  ];

  const investmentProtection = [
    "No construction risks - land investment only",
    "Multiple exit strategies: hold, resell, or develop",
    "Location value independent of specific development",
    "Low holding costs relative to appreciation potential"
  ];

  return (
    <section className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4">Land Investment Risk Analysis & Mitigation</h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Comprehensive assessment of land investment risks and proven strategies to protect investor capital while maximizing appreciation potential
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {risks.map((risk, index) => (
            <div key={index} className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-8">
              <div className="flex items-center mb-6">
                <div className={`p-3 rounded-full ${risk.bgColor} mr-4`}>
                  <risk.icon className={`h-6 w-6 ${risk.color}`} />
                </div>
                <h3 className="text-xl font-semibold text-primary">{risk.category}</h3>
              </div>

              <div className="mb-6">
                <h4 className="text-sm font-medium text-muted-foreground mb-3 uppercase tracking-wide">Key Risk Factors</h4>
                <ul className="space-y-2">
                  {risk.factors.map((factor, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground flex items-start">
                      <span className={`${risk.color} mr-2 mt-1`}>•</span>
                      {factor}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-medium text-emerald-500 mb-3 uppercase tracking-wide">Mitigation Strategies</h4>
                <p className="text-sm text-muted-foreground">{risk.mitigation}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-8">
            <div className="flex items-center mb-6">
              <TrendingUp className="h-8 w-8 text-gold mr-3" />
              <h3 className="text-xl font-semibold text-primary">Land Position Strengths</h3>
            </div>
            
            <ul className="space-y-3">
              {competitiveAdvantages.map((advantage, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-emerald-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{advantage}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-8">
            <div className="flex items-center mb-6">
              <Shield className="h-8 w-8 text-blue-500 mr-3" />
              <h3 className="text-xl font-semibold text-primary">Land Investment Protection</h3>
            </div>
            
            <ul className="space-y-3">
              {investmentProtection.map((protection, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-emerald-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{protection}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}