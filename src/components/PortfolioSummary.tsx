import { Building, Calculator, TrendingUp, AlertTriangle, FileText, Download } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface PortfolioSummaryProps {
  portfolioData: {
    totalAcres: number;
    totalBuildableSF: number;
    totalLandInvestment: number;
    totalPlanAnnual: number;
    totalDryRent12: number;
    totalDryRent12_5: number;
    totalColdRent18: number;
    averageCoverage: number;
    flaggedLots: number;
  };
}

export const PortfolioSummary = ({ portfolioData }: PortfolioSummaryProps) => {
  return (
    <div className="space-y-6">
      {/* Portfolio Header */}
      <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-6 border border-primary/20">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold text-primary">8-Lot Portfolio Summary</h2>
          <p className="text-muted-foreground">Professional underwriting analysis - Dodge Arena District, McAllen TX</p>
          <div className="flex justify-center gap-4 mt-4">
            <Badge variant="secondary" className="text-lg px-4 py-2">
              {portfolioData.totalAcres.toFixed(2)} Total Acres
            </Badge>
            <Badge variant="secondary" className="text-lg px-4 py-2">
              {portfolioData.totalBuildableSF.toLocaleString()} Total SF
            </Badge>
            <Badge variant={portfolioData.flaggedLots > 0 ? "destructive" : "default"} className="text-lg px-4 py-2">
              {portfolioData.flaggedLots} Coverage Flags
            </Badge>
          </div>
        </div>
      </div>

      {/* Data Verification */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5" />
            Data Reconciliation vs. Marketing Materials
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-muted/20 rounded-lg p-4">
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <div className="font-medium mb-2">Stated in Marketing:</div>
                <div className="space-y-1">
                  <div>• 37.3 acres total</div>
                  <div>• 331,900 SF buildable</div>
                </div>
              </div>
              <div>
                <div className="font-medium mb-2">Verified from Site Plan:</div>
                <div className="space-y-1">
                  <div className="text-primary font-medium">• {portfolioData.totalAcres.toFixed(2)} acres total</div>
                  <div className="text-primary font-medium">• {portfolioData.totalBuildableSF.toLocaleString()} SF buildable</div>
                </div>
              </div>
            </div>
            <div className="mt-4 p-3 bg-primary/10 border border-primary/20 rounded-lg">
              <div className="font-medium text-primary">Critical Correction Required:</div>
              <div className="text-sm">Portfolio contains significantly more developable area than marketed. 
              Lots 7 & 8 acreage were transposed in original materials.</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Portfolio NOI Analysis */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calculator className="h-5 w-5" />
            Portfolio NOI Potential (Annual)
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-3">Development Scenario</th>
                  <th className="text-right p-3">Rent/SF</th>
                  <th className="text-right p-3">Total Annual NOI</th>
                  <th className="text-right p-3">vs Plan Projection</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-muted/20">
                  <td className="p-3 font-medium">Plan Projection (Mixed)</td>
                  <td className="p-3 text-right">Varies</td>
                  <td className="p-3 text-right font-bold">${portfolioData.totalPlanAnnual.toLocaleString()}</td>
                  <td className="p-3 text-right">-</td>
                </tr>
                <tr>
                  <td className="p-3">All Dry Warehouse ($12/SF)</td>
                  <td className="p-3 text-right">$12.00</td>
                  <td className="p-3 text-right font-bold text-primary">${portfolioData.totalDryRent12.toLocaleString()}</td>
                  <td className="p-3 text-right font-medium text-primary">
                    +{((portfolioData.totalDryRent12 - portfolioData.totalPlanAnnual) / portfolioData.totalPlanAnnual * 100).toFixed(1)}%
                  </td>
                </tr>
                <tr>
                  <td className="p-3">All Dry Warehouse ($12.50/SF)</td>
                  <td className="p-3 text-right">$12.50</td>
                  <td className="p-3 text-right font-bold text-primary">${portfolioData.totalDryRent12_5.toLocaleString()}</td>
                  <td className="p-3 text-right font-medium text-primary">
                    +{((portfolioData.totalDryRent12_5 - portfolioData.totalPlanAnnual) / portfolioData.totalPlanAnnual * 100).toFixed(1)}%
                  </td>
                </tr>
                <tr className="bg-accent/10">
                  <td className="p-3 font-bold">All Cold Storage ($18/SF)</td>
                  <td className="p-3 text-right font-bold">$18.00</td>
                  <td className="p-3 text-right font-bold text-primary text-lg">${portfolioData.totalColdRent18.toLocaleString()}</td>
                  <td className="p-3 text-right font-bold text-primary">
                    +{((portfolioData.totalColdRent18 - portfolioData.totalPlanAnnual) / portfolioData.totalPlanAnnual * 100).toFixed(1)}%
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Export Options */}
      <div className="grid md:grid-cols-3 gap-4">
        <Button className="flex items-center gap-2">
          <FileText className="h-4 w-4" />
          Portfolio PDF
        </Button>
        <Button variant="outline" className="flex items-center gap-2">
          <Download className="h-4 w-4" />
          CSV Export
        </Button>
        <Button variant="outline" className="flex items-center gap-2">
          <Calculator className="h-4 w-4" />
          Excel Model
        </Button>
      </div>
    </div>
  );
};