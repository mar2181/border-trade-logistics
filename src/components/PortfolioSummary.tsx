import { Building, Calculator, TrendingUp, AlertTriangle, FileText, Download } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PORTFOLIO_CONSTANTS, formatCurrencyWithMNotation, formatExactCurrency } from "@/lib/constants";

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
          <p className="text-muted-foreground">Professional underwriting analysis - {PORTFOLIO_CONSTANTS.LOCATION_NAME}, TX</p>
          <div className="flex justify-center gap-4 mt-4">
            <Badge variant="secondary" className="text-lg px-4 py-2">
              {portfolioData.totalAcres.toFixed(2)} Total Acres
            </Badge>
            <Badge variant="secondary" className="text-lg px-4 py-2">
              {PORTFOLIO_CONSTANTS.TOTAL_BUILDABLE_SF.toLocaleString()} Total SF
            </Badge>
            <Badge variant={portfolioData.flaggedLots > 0 ? "destructive" : "default"} className="text-lg px-4 py-2">
              {portfolioData.flaggedLots} Coverage Flags
            </Badge>
          </div>
          
          {/* Key Portfolio Metrics */}
          <div className="grid md:grid-cols-3 gap-6 mt-6">
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-4">
              <div className="text-sm text-muted-foreground mb-1">Total Land Investment</div>
              <div className="text-xl font-bold text-gold">{formatCurrencyWithMNotation(PORTFOLIO_CONSTANTS.TOTAL_LAND_INVESTMENT)}</div>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-4">
              <div className="text-sm text-muted-foreground mb-1">Dry Development Total</div>
              <div className="text-xl font-bold text-blue-500">{formatCurrencyWithMNotation(PORTFOLIO_CONSTANTS.DRY_TOTAL_INVESTMENT)}</div>
              <div className="text-sm text-emerald-500">{PORTFOLIO_CONSTANTS.DRY_ROI_AVERAGE}% Average ROI</div>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-4">
              <div className="text-sm text-muted-foreground mb-1">Refrigerated Development</div>
              <div className="text-xl font-bold text-cyan-500">{formatCurrencyWithMNotation(PORTFOLIO_CONSTANTS.REFRIGERATED_TOTAL_INVESTMENT)}</div>
              <div className="text-sm text-cyan-400">{PORTFOLIO_CONSTANTS.REFRIGERATED_ROI_AVERAGE}% Average ROI</div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};