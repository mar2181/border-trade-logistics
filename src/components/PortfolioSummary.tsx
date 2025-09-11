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
          <p className="text-muted-foreground">Professional underwriting analysis - McAllen Industrial District, TX</p>
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

    </div>
  );
};