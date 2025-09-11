import { Shield, AlertTriangle, TrendingUp, CheckCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function RiskAnalysis() {
  const { t } = useLanguage();
  const risks = [
    {
      category: "Market Risks",
      icon: TrendingUp,
      color: "text-red-500",
      bgColor: "bg-red-500/20",
      factors: [
        "Fed rate environment and financing costs",
        "Valley market cycle considerations", 
        "McAllen industrial demand fluctuations"
      ],
      mitigation: "Following Fed rate adjustments, Valley market demonstrates stability, industrial demand supported by cross-border trade fundamentals"
    },
    {
      category: "Regulatory Risks", 
      icon: AlertTriangle,
      color: "text-amber-500",
      bgColor: "bg-amber-500/20",
      factors: [
        "Zoning changes in McAllen industrial district",
        "New McAllen development regulations",
        "Property tax adjustments in growth market"
      ],
      mitigation: "Established industrial zoning in premier district, Valley business-friendly environment, locked-in assessments"
    },
    {
      category: "Financial Risks",
      icon: Shield,
      color: "text-blue-500", 
      bgColor: "bg-blue-500/20",
      factors: [
        "Interest rate environment changes",
        "Holding costs during Valley appreciation",
        "Exit liquidity in growing market"
      ],
      mitigation: "Strategic timing consideration, modeled holding costs vs. appreciation potential, multiple exit strategies available"
    }
  ];

  const competitiveAdvantages = [
    "McAllen Industrial District - The Valley's most coveted industrial location",
    "10th Street positioning with new road development enhancing access", 
    "Only 8 properties remaining in this premium district",
    "Valley's 900K+ population supports sustained market fundamentals",
    "Heart of America's produce distribution alley with surging demand",
    "Fed rate cuts create perfect timing for investment or development financing"
  ];

  const investmentProtection = [
    "Strategic land investment in proven growth market with minimal construction exposure",
    "Multiple exit strategies: hold for appreciation, resell at premium, or develop",
    "McAllen market demonstrates resilience amid changing national conditions",
    "Valley's 20-year growth projection provides sustained investment security",
    "Proven track record: savvy investors who choose The Valley achieve lasting success",
    "Optimal timing with Fed rate cuts enhancing all strategic scenarios"
  ];

  return (
    <section className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4">{t('riskAnalysis.title')}</h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            <span className="text-gold font-bold">{t('riskAnalysis.whyValue')}</span> {t('riskAnalysis.description')}
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
              <h3 className="text-xl font-semibold text-primary">Valley Investment Advantages</h3>
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
              <h3 className="text-xl font-semibold text-primary">Strategic Investment Protection</h3>
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