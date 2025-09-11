import { FileText, Shield, TrendingUp, Building } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/contexts/LanguageContext";

export const MarketDataSources = () => {
  const { t } = useLanguage();
  const dataSources = [
    {
      category: "Vacancy & Rent Data",
      source: "CBRE Q2-2025 McAllen Industrial Market",
      metrics: [
        "Market-wide asking rent: $8.43/SF",
        "Pipeline: >1.3M SF under construction",
        "Net absorption: 33,545 SF (Q2-2025)"
      ],
      status: "verified"
    },
    {
      category: "Historical Vacancy",
      source: "Matthews Q3-2024 South Texas Report",
      metrics: [
        "McAllen industrial vacancy: 3.9%",
        "LTM rent growth: ~1.9%–2.5%",
        "Logistics avg: $9.00/SF, Flex avg: $10.14/SF"
      ],
      status: "verified"
    },
    {
      category: "Cross-Border Trade",
      source: "Pharr-Reynosa Bridge / Official Reports",
      metrics: [
        "Total annual trade: ~$47-$50B",
        "Produce trade: Over $6B",
        "Handle 60% of Texas fresh produce"
      ],
      status: "verified"
    },
    {
      category: "Construction Costs",
      source: "CBRE Construction Cost Trends 2024",
      metrics: [
        "Dry warehouse: ~$120/SF range",
        "Cold storage premium required",
        "Texas costs slightly below U.S. average"
      ],
      status: "directional"
    },
    {
      category: "Rate Environment",
      source: "NAIOP/Altus/Kearny CRE Analysis",
      metrics: [
        "Fed cuts began Sept 2024 (-50 bps)",
        "CRE financing effects uneven",
        "5-yr Treasury rose post-initial cuts"
      ],
      status: "verified"
    }
  ];

  const corrections = [
    {
      metric: "Vacancy Rate",
      previous: "1.3% 'historic low'",
      corrected: "3.9% (3Q24 verified)",
      impact: "More conservative underwriting"
    },
    {
      metric: "Rent Growth",
      previous: "375% surge claim",
      corrected: "1.9%–2.5% LTM growth",
      impact: "Realistic projections"
    },
    {
      metric: "Produce Trade",
      previous: "$7.05B specific claim",
      corrected: "Over $6B with source attribution",
      impact: "Verifiable market driver"
    },
    {
      metric: "Rate Environment",
      previous: "'Imminent cuts' language",
      corrected: "Cuts began Sept 2024, mixed CRE impact",
      impact: "Accurate timing context"
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-6 border border-primary/20">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold text-primary">{t('marketDataSources.title')}</h2>
          <p className="text-muted-foreground">{t('marketDataSources.subtitle')}</p>
        </div>
      </div>

      {/* Data Sources */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              Verified Market Sources
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {dataSources.map((source, idx) => (
              <div key={idx} className="border border-border rounded-lg p-4">
                <div className="flex items-start justify-between mb-2">
                  <div className="font-medium text-primary">{source.category}</div>
                  <Badge variant={source.status === "verified" ? "default" : "secondary"}>
                    {source.status}
                  </Badge>
                </div>
                <div className="text-xs text-muted-foreground mb-2">{source.source}</div>
                <div className="space-y-1">
                  {source.metrics.map((metric, metricIdx) => (
                    <div key={metricIdx} className="text-sm flex items-start gap-2">
                      <div className="w-1 h-1 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span>{metric}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5" />
              Critical Corrections Made
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {corrections.map((correction, idx) => (
              <div key={idx} className="border border-border rounded-lg p-4">
                <div className="font-medium text-primary mb-2">{correction.metric}</div>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2">
                    <span className="text-destructive font-medium">Previous:</span>
                    <span className="text-muted-foreground">{correction.previous}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-primary font-medium">Corrected:</span>
                    <span>{correction.corrected}</span>
                  </div>
                  <div className="bg-primary/10 rounded p-2">
                    <span className="text-xs font-medium">Impact: </span>
                    <span className="text-xs">{correction.impact}</span>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Lender Requirements */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Building className="h-5 w-5" />
            Lender-Ready Standards Met
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-muted/20 rounded-lg p-4 text-center">
              <TrendingUp className="h-6 w-6 text-primary mx-auto mb-2" />
              <div className="font-medium text-primary">Market Data</div>
              <div className="text-sm text-muted-foreground">Third-party verified vacancy, rents, and absorption</div>
            </div>
            <div className="bg-muted/20 rounded-lg p-4 text-center">
              <Shield className="h-6 w-6 text-primary mx-auto mb-2" />
              <div className="font-medium text-primary">Source Attribution</div>
              <div className="text-sm text-muted-foreground">CBRE, Matthews, official bridge authorities</div>
            </div>
            <div className="bg-muted/20 rounded-lg p-4 text-center">
              <FileText className="h-6 w-6 text-primary mx-auto mb-2" />
              <div className="font-medium text-primary">Conservative Assumptions</div>
              <div className="text-sm text-muted-foreground">Stress-tested scenarios with rate shocks</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Data Room Checklist */}
      <Card>
        <CardHeader>
          <CardTitle>Still Required for Full Lender Package</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <div className="font-medium mb-2">Site & Legal</div>
              <div className="space-y-1 text-sm text-muted-foreground">
                <div>• ALTA survey with metes & bounds</div>
                <div>• Zoning verification letters</div>
                <div>• Phase I ESAs & geotech</div>
                <div>• Utility capacity confirmations</div>
              </div>
            </div>
            <div>
              <div className="font-medium mb-2">Financial & Market</div>
              <div className="space-y-1 text-sm text-muted-foreground">
                <div>• Closed land sale comps (corridor)</div>
                <div>• GC schematic budgets</div>
                <div>• Industrial lease comps with rents</div>
                <div>• Debt term sheets & DSCR stress tests</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};