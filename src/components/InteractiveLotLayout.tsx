import React from "react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { PORTFOLIO_CONSTANTS, formatCurrency, formatSF } from "@/lib/constants";
import { Building, MapPin, DollarSign, Target } from "lucide-react";
import lotLayoutPlan from "@/assets/lot-layout-updated.png";

interface LotArea {
  id: string;
  x: number;
  y: number;
  width: number;
  height: number;
}

// Coordinates for each lot based on the image layout (percentage-based for responsiveness)
const LOT_AREAS: LotArea[] = [
  { id: "lot1", x: 15, y: 20, width: 20, height: 25 }, // Top-left corner
  { id: "lot2", x: 40, y: 15, width: 22, height: 30 }, // Top-center
  { id: "lot3", x: 67, y: 10, width: 25, height: 35 }, // Top-right
  { id: "lot4", x: 10, y: 50, width: 25, height: 30 }, // Mid-left
  { id: "lot5", x: 40, y: 50, width: 25, height: 35 }, // Mid-center
  { id: "lot6", x: 70, y: 50, width: 22, height: 30 }, // Mid-right
  { id: "lot7", x: 15, y: 85, width: 30, height: 12 }, // Bottom-left (largest lot)
  { id: "lot8", x: 70, y: 88, width: 18, height: 10 }, // Bottom-right (smallest lot)
];

const calculateLotROI = (lot: any) => {
  const dryInvestment = lot.landInvestment + (lot.buildableSF * PORTFOLIO_CONSTANTS.DRY_CONSTRUCTION_COST_PER_SF);
  const refrigeratedInvestment = lot.landInvestment + (lot.buildableSF * PORTFOLIO_CONSTANTS.REFRIGERATED_CONSTRUCTION_COST_PER_SF);
  
  const dryROI = ((lot.buildableSF * PORTFOLIO_CONSTANTS.DRY_RENT_PER_SF) / dryInvestment) * 100;
  const refrigeratedROI = ((lot.buildableSF * PORTFOLIO_CONSTANTS.REFRIGERATED_RENT_PER_SF) / refrigeratedInvestment) * 100;

  return {
    dry: dryROI.toFixed(2),
    refrigerated: refrigeratedROI.toFixed(2)
  };
};

export default function InteractiveLotLayout() {
  return (
    <div className="relative w-full h-80 rounded-xl overflow-hidden border border-border">
      {/* Base image */}
      <img
        src={lotLayoutPlan}
        alt="Interactive lot layout plan - hover over lots for details"
        className="w-full h-full object-contain"
      />
      
      {/* SVG overlay for hover areas */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        {LOT_AREAS.map((area) => {
          const lot = PORTFOLIO_CONSTANTS.LOTS.find(l => l.id === area.id);
          if (!lot) return null;

          const roi = calculateLotROI(lot);

          return (
            <HoverCard key={area.id} openDelay={200} closeDelay={100}>
              <HoverCardTrigger asChild>
                <rect
                  x={area.x}
                  y={area.y}
                  width={area.width}
                  height={area.height}
                  fill="rgba(59, 130, 246, 0.1)"
                  stroke="rgba(59, 130, 246, 0.3)"
                  strokeWidth="0.5"
                  className="cursor-pointer transition-all duration-200 hover:fill-primary/20 hover:stroke-primary/60 hover:stroke-1"
                />
              </HoverCardTrigger>
              
              <HoverCardContent className="w-80 p-4 bg-background/95 backdrop-blur-sm border-border">
                <div className="space-y-3">
                  {/* Lot Header */}
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold text-lg text-primary">{lot.name}</h4>
                    <div className="flex items-center text-muted-foreground">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span className="text-xs">{lot.acres} acres</span>
                    </div>
                  </div>

                  {/* Position Description */}
                  <p className="text-sm text-muted-foreground italic">
                    {lot.position}
                  </p>

                  {/* Key Metrics Grid */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-card/50 rounded-lg p-3 border border-border/50">
                      <div className="flex items-center mb-1">
                        <DollarSign className="h-3 w-3 text-gold mr-1" />
                        <span className="text-xs text-muted-foreground">Investment</span>
                      </div>
                      <p className="font-semibold text-sm text-foreground">
                        {formatCurrency(lot.landInvestment)}
                      </p>
                    </div>

                    <div className="bg-card/50 rounded-lg p-3 border border-border/50">
                      <div className="flex items-center mb-1">
                        <Building className="h-3 w-3 text-accent-sapphire mr-1" />
                        <span className="text-xs text-muted-foreground">Buildable SF</span>
                      </div>
                      <p className="font-semibold text-sm text-foreground">
                        {formatSF(lot.buildableSF)}
                      </p>
                    </div>

                    <div className="bg-card/50 rounded-lg p-3 border border-border/50">
                      <div className="flex items-center mb-1">
                        <Target className="h-3 w-3 text-accent-emerald mr-1" />
                        <span className="text-xs text-muted-foreground">Dry ROI</span>
                      </div>
                      <p className="font-semibold text-sm text-accent-emerald">
                        {roi.dry}%
                      </p>
                    </div>

                    <div className="bg-card/50 rounded-lg p-3 border border-border/50">
                      <div className="flex items-center mb-1">
                        <Target className="h-3 w-3 text-gold mr-1" />
                        <span className="text-xs text-muted-foreground">Refrig. ROI</span>
                      </div>
                      <p className="font-semibold text-sm text-gold">
                        {roi.refrigerated}%
                      </p>
                    </div>
                  </div>

                  {/* Price per acre */}
                  <div className="pt-2 border-t border-border/30">
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-muted-foreground">Price per acre:</span>
                      <span className="font-medium text-sm text-primary">
                        {formatCurrency(lot.pricePerAcre)}
                      </span>
                    </div>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
          );
        })}
      </svg>
    </div>
  );
}