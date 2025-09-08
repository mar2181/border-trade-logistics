import { Calculator, AlertTriangle, TrendingUp, FileText, DollarSign, Building, MapPin, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface LotData {
  id: string;
  acres: number;
  buildableSF: number;
  landInvestment: number;
  planAnnual: number;
  advantages: string[];
  riskNotes: string;
  positioning: string;
}

interface UnderwritingProps {
  lot: LotData;
}

export const ProfessionalUnderwriting = ({ lot }: UnderwritingProps) => {
  // Professional underwriting calculations
  const coverage = ((lot.buildableSF / (lot.acres * 43560)) * 100);
  const dryRent12 = lot.buildableSF * 12;
  const dryRent12_5 = lot.buildableSF * 12.5;
  const coldRent18 = lot.buildableSF * 18;
  const impliedPlanRent = lot.planAnnual / lot.buildableSF;
  
  const coverageFlag = coverage < 20 || coverage > 65;
  const planVariance = lot.planAnnual - dryRent12;
  const planVariancePercent = ((planVariance / dryRent12) * 100);

  return (
    <div className="space-y-6">
      {/* Lot Header */}
      <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-6 border border-primary/20">
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <h3 className="text-2xl font-bold text-primary">Lot {lot.id} - Professional Analysis</h3>
            <p className="text-muted-foreground">10th St & Military Hwy, Dodge Arena District</p>
            <div className="flex gap-2">
              <Badge variant="secondary">{lot.acres.toFixed(2)} Acres</Badge>
              <Badge variant="secondary">{lot.buildableSF.toLocaleString()} SF</Badge>
              <Badge variant={coverageFlag ? "destructive" : "default"}>
                {coverage.toFixed(1)}% Coverage {coverageFlag && "⚠️"}
              </Badge>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-primary">${(lot.landInvestment / 1000000).toFixed(1)}M</div>
            <div className="text-sm text-muted-foreground">Land Investment</div>
          </div>
        </div>
      </div>

      {/* Lender-Ready Metrics */}
      <div className="grid md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Site Coverage</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">{coverage.toFixed(1)}%</div>
            <div className="text-xs text-muted-foreground">
              {coverage < 20 ? "Below efficient range" : 
               coverage > 65 ? "Above typical range" : 
               "Within normal range"}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Land $/Acre</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">${((lot.landInvestment / lot.acres) / 1000).toFixed(0)}K</div>
            <div className="text-xs text-muted-foreground">Per acre basis</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Land $/SF</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">${(lot.landInvestment / lot.buildableSF).toFixed(2)}</div>
            <div className="text-xs text-muted-foreground">Per buildable SF</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Plan Rent/SF</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">${impliedPlanRent.toFixed(2)}</div>
            <div className="text-xs text-muted-foreground">Implied from plan</div>
          </CardContent>
        </Card>
      </div>

      {/* Plan vs Corrected Analysis */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calculator className="h-5 w-5" />
            Plan vs. Market-Rate Analysis
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-2">Scenario</th>
                  <th className="text-right p-2">Rent/SF</th>
                  <th className="text-right p-2">Annual NOI</th>
                  <th className="text-right p-2">vs Plan</th>
                </tr>
              </thead>
              <tbody className="space-y-1">
                <tr className="bg-muted/20">
                  <td className="p-2 font-medium">Plan Projection</td>
                  <td className="p-2 text-right">${impliedPlanRent.toFixed(2)}</td>
                  <td className="p-2 text-right font-bold">${lot.planAnnual.toLocaleString()}</td>
                  <td className="p-2 text-right">-</td>
                </tr>
                <tr>
                  <td className="p-2">Dry Warehouse ($12/SF)</td>
                  <td className="p-2 text-right">$12.00</td>
                  <td className="p-2 text-right">${dryRent12.toLocaleString()}</td>
                  <td className={`p-2 text-right font-medium ${planVariancePercent > 0 ? 'text-destructive' : 'text-primary'}`}>
                    {planVariancePercent > 0 ? '+' : ''}{planVariancePercent.toFixed(1)}%
                  </td>
                </tr>
                <tr>
                  <td className="p-2">Dry Warehouse ($12.50/SF)</td>
                  <td className="p-2 text-right">$12.50</td>
                  <td className="p-2 text-right">${dryRent12_5.toLocaleString()}</td>
                  <td className={`p-2 text-right font-medium ${((lot.planAnnual - dryRent12_5) / dryRent12_5 * 100) > 0 ? 'text-destructive' : 'text-primary'}`}>
                    {((lot.planAnnual - dryRent12_5) / dryRent12_5 * 100) > 0 ? '+' : ''}{((lot.planAnnual - dryRent12_5) / dryRent12_5 * 100).toFixed(1)}%
                  </td>
                </tr>
                <tr className="bg-accent/10">
                  <td className="p-2 font-medium">Cold Storage ($18/SF)</td>
                  <td className="p-2 text-right font-bold">$18.00</td>
                  <td className="p-2 text-right font-bold text-primary">${coldRent18.toLocaleString()}</td>
                  <td className="p-2 text-right font-bold text-primary">
                    {((coldRent18 - lot.planAnnual) / lot.planAnnual * 100).toFixed(1)}% upside
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Investment Positioning */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              Strategic Advantages
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            {lot.advantages.map((advantage, idx) => (
              <div key={idx} className="flex items-start gap-2">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-sm">{advantage}</span>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5" />
              Risk Assessment
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="text-sm">{lot.riskNotes}</div>
              {coverageFlag && (
                <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-3">
                  <div className="text-sm font-medium text-destructive">Coverage Flag</div>
                  <div className="text-xs text-muted-foreground">
                    {coverage < 20 ? "Below 20% - verify site constraints" : "Above 65% - confirm zoning compliance"}
                  </div>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Investor Positioning */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5" />
            Investment Recommendation
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-primary/10 rounded-lg p-4">
            <div className="font-medium text-primary mb-2">Positioning Strategy:</div>
            <div className="text-sm">{lot.positioning}</div>
          </div>
        </CardContent>
      </Card>

      {/* Action Items */}
      <div className="flex gap-3">
        <Button className="flex-1">
          <FileText className="h-4 w-4 mr-2" />
          Export Tear Sheet
        </Button>
        <Button variant="outline" className="flex-1">
          <Calculator className="h-4 w-4 mr-2" />
          Run Scenarios
        </Button>
      </div>
    </div>
  );
};