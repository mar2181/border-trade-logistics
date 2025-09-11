import { FileText, Download, Calculator, TrendingUp, AlertTriangle, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function ProfessionalAnalysis() {
  const investmentScenarios = [
    {
      strategy: "Land Hold Strategy",
      description: "Lower initial capital requirement with no construction risk",
      investment: "$12.2M",
      annualReturn: "8-12%",
      advantages: [
        "No construction risk or tenant lease-up risk",
        "Flexibility to develop or sell at optimal market timing",
        "Lower initial capital requirement",
        "Based on historical performance of prime industrial land"
      ],
      risks: [
        "No immediate income generation",
        "Subject to market appreciation fluctuations",
        "Annual holding costs reduce net returns"
      ]
    },
    {
      strategy: "Dry Warehouse Development",
      description: "Value creation through development with immediate income generation",
      investment: "$82.5M",
      annualReturn: "8.9%",
      advantages: [
        "Immediate income generation upon lease-up",
        "Higher returns through value creation",
        "Long-term cash flow from quality industrial assets",
        "Value-add through operational improvements"
      ],
      risks: [
        "Construction cost inflation risk",
        "Tenant lease-up timeline uncertainty",
        "Market rent volatility during development"
      ]
    },
    {
      strategy: "Refrigerated Development",
      description: "Specialized cold storage facilities targeting produce market",
      investment: "$135.0M",
      annualReturn: "7.8%",
      advantages: [
        "Premium rents from specialized cold storage",
        "Strong tenant demand from produce industry",
        "Higher barriers to entry",
        "Long-term tenant relationships"
      ],
      risks: [
        "Higher construction complexity and costs",
        "Specialized equipment maintenance requirements",
        "Limited tenant pool for cold storage"
      ]
    }
  ];

  const riskAssessment = [
    {
      category: "Market Risks",
      level: "Medium",
      factors: [
        "Sub-4% industrial vacancy supporting rent growth",
        "1.3M+ SF under construction indicates strong market confidence",
        "Cross-border trade policy changes could affect demand"
      ]
    },
    {
      category: "Execution Risks",
      level: "Low-Medium",
      factors: [
        "All lots zoned and shovel-ready for immediate development",
        "Utilities available to site boundaries",
        "Proven development team with regional experience"
      ]
    },
    {
      category: "Financial Risks",
      level: "Medium",
      factors: [
        "Federal Reserve policy supporting development financing",
        "Construction cost inflation potential",
        "Interest rate environment impact on development financing"
      ]
    }
  ];

  const dueDiligenceCompleted = [
    "Topographical surveys and site engineering",
    "Utility capacity confirmations",
    "Zoning and permitting verification",
    "Environmental Phase I assessments",
    "Market analysis and absorption studies",
    "Traffic impact and transportation access studies"
  ];

  return (
    <section className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4">Professional Investment Analysis</h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8">
            Comprehensive analysis of investment strategies, risk assessment, and due diligence documentation
          </p>
        </div>

        <Tabs defaultValue="scenarios" className="w-full">
          <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-3 mb-12 h-16 bg-muted/50 backdrop-blur-sm">
            <TabsTrigger value="scenarios" className="text-sm font-medium">
              Investment Scenarios
            </TabsTrigger>
            <TabsTrigger value="risk" className="text-sm font-medium">
              Risk Assessment
            </TabsTrigger>
            <TabsTrigger value="diligence" className="text-sm font-medium">
              Due Diligence
            </TabsTrigger>
          </TabsList>

          <TabsContent value="scenarios">
            <div className="grid gap-8">
              {investmentScenarios.map((scenario, index) => (
                <Card key={index} className="bg-card/50 backdrop-blur-sm border border-border">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-xl text-primary mb-2">{scenario.strategy}</CardTitle>
                        <p className="text-muted-foreground">{scenario.description}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-gold">{scenario.investment}</div>
                        <div className="text-sm text-muted-foreground">Total Investment</div>
                        <div className="text-lg font-bold text-emerald-500 mt-2">{scenario.annualReturn}</div>
                        <div className="text-xs text-muted-foreground">Expected ROI</div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="p-4 bg-emerald-50 dark:bg-emerald-500/10 rounded-lg">
                        <h4 className="font-semibold text-emerald-700 dark:text-emerald-400 mb-3 flex items-center">
                          <CheckCircle className="h-4 w-4 mr-2" />
                          Strategic Advantages
                        </h4>
                        <ul className="space-y-2 text-sm">
                          {scenario.advantages.map((advantage, idx) => (
                            <li key={idx} className="flex items-start">
                              <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                              <span className="text-muted-foreground">{advantage}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="p-4 bg-amber-50 dark:bg-amber-500/10 rounded-lg">
                        <h4 className="font-semibold text-amber-700 dark:text-amber-400 mb-3 flex items-center">
                          <AlertTriangle className="h-4 w-4 mr-2" />
                          Risk Considerations
                        </h4>
                        <ul className="space-y-2 text-sm">
                          {scenario.risks.map((risk, idx) => (
                            <li key={idx} className="flex items-start">
                              <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                              <span className="text-muted-foreground">{risk}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="risk">
            <div className="grid gap-6">
              {riskAssessment.map((risk, index) => (
                <Card key={index} className="bg-card/50 backdrop-blur-sm border border-border">
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <CardTitle className="text-lg text-primary">{risk.category}</CardTitle>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        risk.level === 'Low-Medium' ? 'bg-emerald-500/20 text-emerald-400' :
                        risk.level === 'Medium' ? 'bg-amber-500/20 text-amber-400' :
                        'bg-red-500/20 text-red-400'
                      }`}>
                        {risk.level} Risk
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {risk.factors.map((factor, idx) => (
                        <li key={idx} className="flex items-start">
                          <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                          <span className="text-muted-foreground">{factor}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="diligence">
            <div className="grid gap-8">
              <Card className="bg-card/50 backdrop-blur-sm border border-border">
                <CardHeader>
                  <CardTitle className="text-xl text-primary flex items-center">
                    <CheckCircle className="h-6 w-6 text-emerald-500 mr-3" />
                    Completed Due Diligence
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    {dueDiligenceCompleted.map((item, index) => (
                      <div key={index} className="flex items-center p-3 bg-emerald-50 dark:bg-emerald-500/10 rounded-lg">
                        <CheckCircle className="h-4 w-4 text-emerald-500 mr-3 flex-shrink-0" />
                        <span className="text-sm font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur-sm border border-border">
                <CardHeader>
                  <CardTitle className="text-xl text-primary flex items-center">
                    <FileText className="h-6 w-6 text-blue-500 mr-3" />
                    Professional Documentation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {/* Lead Analyst Profile */}
                  <div className="mb-8 p-6 bg-gradient-to-r from-primary/5 to-blue-500/5 rounded-xl border border-primary/20">
                    <div className="flex items-center gap-6">
                      <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-primary/20">
                        <img 
                          src="/lovable-uploads/312f9559-a576-44b4-993b-8df7990e61ec.png" 
                          alt="Juan - Lead Investment Analyst" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-primary mb-2">Juan Hernandez</h3>
                        <p className="text-lg text-gold mb-1">Lead Investment Analyst</p>
                        <p className="text-sm text-muted-foreground">15+ years experience in industrial real estate development and cross-border commerce</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <Button variant="outline" className="h-auto p-4 justify-start">
                      <Download className="h-4 w-4 mr-3" />
                      <div className="text-left">
                        <div className="font-medium">Executive Summary PDF</div>
                        <div className="text-xs text-muted-foreground">Complete investment overview</div>
                      </div>
                    </Button>
                    <Button variant="outline" className="h-auto p-4 justify-start">
                      <Calculator className="h-4 w-4 mr-3" />
                      <div className="text-left">
                        <div className="font-medium">Financial Model Excel</div>
                        <div className="text-xs text-muted-foreground">Detailed ROI calculations</div>
                      </div>
                    </Button>
                    <Button variant="outline" className="h-auto p-4 justify-start">
                      <TrendingUp className="h-4 w-4 mr-3" />
                      <div className="text-left">
                        <div className="font-medium">Market Analysis Report</div>
                        <div className="text-xs text-muted-foreground">Third-party market data</div>
                      </div>
                    </Button>
                    <Button variant="outline" className="h-auto p-4 justify-start">
                      <FileText className="h-4 w-4 mr-3" />
                      <div className="text-left">
                        <div className="font-medium">Individual Lot Tear Sheets</div>
                        <div className="text-xs text-muted-foreground">Detailed lot specifications</div>
                      </div>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <div className="bg-gradient-to-r from-gold/10 to-blue-500/10 rounded-xl p-8">
                <div className="text-center">
                  <h3 className="text-2xl font-semibold text-primary mb-4">Qualified Investor Criteria</h3>
                  <div className="grid md:grid-cols-2 gap-6 text-left max-w-4xl mx-auto">
                    <div className="space-y-3">
                      <h4 className="font-semibold text-gold">Required Documentation:</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Demonstrated industrial development experience</li>
                        <li>• Proof of funds or financing pre-approval</li>
                        <li>• Letter of Intent with specific lot selection</li>
                        <li>• Professional references from past transactions</li>
                      </ul>
                    </div>
                    <div className="space-y-3">
                      <h4 className="font-semibold text-emerald-500">Available Options:</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Individual lot purchase ($939K - $2.15M)</li>
                        <li>• Multi-lot acquisition for larger projects</li>
                        <li>• Complete portfolio acquisition ($12.24M)</li>
                        <li>• Joint venture development opportunities</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}