import { MapPin, Building, Calculator, TrendingUp, Star, Clock, Phone, CalendarDays, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ProfessionalUnderwriting } from "./ProfessionalUnderwriting";
import { PortfolioSummary } from "./PortfolioSummary";
import { useLanguage } from "@/contexts/LanguageContext";

export default function PropertySpecifications() {
  const { t } = useLanguage();

  // Add individual property advantages for McAllen location
  const getPropertyAdvantages = (lotId: string) => {
    const advantages = {
      "01": ["Direct Highway Access", "Premium Industrial Location", "Strategic Corner Position"],
      "02": ["New Road Development", "High Traffic Visibility", "Frontage Premium"],
      "03": ["Largest Available Lot", "Maximum Development Potential", "Strategic Center Position"],
      "04": ["Future Expansion Ready", "Utilities Optimized", "Distribution Hub Potential"],
      "05": ["Premium Development Site", "Multiple Access Points", "Flexible Configuration"],
      "06": ["Value Investment Position", "Quick Development Ready", "Strong ROI Potential"],
      "07": ["Standard Location Advantage", "Proven Market Demand", "Immediate Build-Ready"],
      "08": ["Entry Level Investment", "High Appreciation Potential", "Flexible Use Options"]
    };
    return advantages[lotId] || [];
  };

  // Professional underwriting calculations
  const calculateMetrics = (acres: number, buildableSF: number) => {
    const coverage = buildableSF / (acres * 43560) * 100;
    const dryRent12 = buildableSF * 12;
    const dryRent12_5 = buildableSF * 12.5;
    const coldRent18 = buildableSF * 18;
    return {
      coverage: coverage.toFixed(1),
      dryRent12,
      dryRent12_5,
      coldRent18,
      coverageFlag: coverage < 20 || coverage > 65 ? 'FLAGGED' : 'NORMAL'
    };
  };

  // CORRECTED LOT DATA based on user's document - Professional underwriting ready
  const lots = [
    {
      id: "01",
      type: "Premium",
      location: t('underwriting.location'),
      acres: 4.92,
      buildableSF: 68440,
      landInvestment: 1476000,
      planAnnual: 855500, // 68440 * 12.5
      advantages: ["Direct highway access from Military Hwy", "Strategic industrial location enhances visibility", "Premium corner position with dual frontage"],
      riskNotes: "Verify detention pond requirements and utility capacity",
      positioning: "Ideal for smaller tenant mix with flexible warehouse configurations"
    },
    {
      id: "02",
      type: "Premium",
      location: t('underwriting.location'),
      acres: 4.95,
      buildableSF: 79580,
      landInvestment: 1485000,
      planAnnual: 994750, // 79580 * 12.5
      advantages: ["New road development access improvements", "High traffic visibility on major corridor", "Enhanced frontage premium location"],
      riskNotes: "Monitor road construction timeline impact",
      positioning: "Strong dry warehouse potential with visibility benefits"
    },
    {
      id: "03",
      type: "Premium",
      location: t('underwriting.location'),
      acres: 5.66,
      buildableSF: 98400,
      landInvestment: 1698000,
      planAnnual: 1230000, // 98400 * 12.5
      advantages: ["Largest available development lot in district", "Maximum development potential for anchor tenant", "Strategic center position with multiple access points"],
      riskNotes: "Ensure adequate truck circulation for large-scale operations",
      positioning: "Best suited for cold storage anchor tenant or large dry warehouse"
    },
    {
      id: "04",
      type: "Premium",
      location: t('underwriting.location'),
      acres: 6.01,
      buildableSF: 98400,
      landInvestment: 1803000,
      planAnnual: 1230000, // 98400 * 12.5
      advantages: ["Future expansion ready with adjacent parcels", "Utilities optimized for large-scale development", "Distribution hub potential with regional access"],
      riskNotes: "Confirm expansion rights and utility upgrade costs",
      positioning: "Distribution hub potential - ideal for multi-tenant facility"
    },
    {
      id: "05",
      type: "Premium",
      location: t('underwriting.location'),
      acres: 6.05,
      buildableSF: 98400,
      landInvestment: 1815000,
      planAnnual: 1230000, // 98400 * 12.5
      advantages: ["Premium development site with optimal configuration", "Multiple access points for efficient operations", "Flexible configuration for various tenant types"],
      riskNotes: "Verify parking requirements for multi-tenant configuration",
      positioning: "Premium multi-tenant opportunity with flexible layouts"
    },
    {
      id: "06",
      type: "Premium",
      location: t('underwriting.location'),
      acres: 5.68,
      buildableSF: 98400,
      landInvestment: 1704000,
      planAnnual: 1230000, // 98400 * 12.5
      advantages: ["Value investment position below district average", "Quick development ready with minimal site work", "Strong ROI potential with current market rents"],
      riskNotes: "Investigate below-market pricing factors",
      positioning: "Value play - high ROI potential with immediate development"
    },
    {
      id: "07",
      type: "Premium",
      location: t('underwriting.location'),
      acres: 7.16,
      buildableSF: 108460,
      landInvestment: 2148000,
      planAnnual: 1355750, // 108460 * 12.5
      advantages: ["Highest density development potential in portfolio", "Multiple development phases possible", "Strategic land hold with appreciation potential"],
      riskNotes: "Lower initial building density - focus on land appreciation",
      positioning: "Premium land hold with future development upside"
    },
    {
      id: "08",
      type: "Premium",
      location: t('underwriting.location'),
      acres: 3.74,
      buildableSF: 53340,
      landInvestment: 1122000,
      planAnnual: 666750, // 53340 * 12.5
      advantages: ["Entry-level investment opportunity", "Exceptional development density", "Compact site maximizes building efficiency"],
      riskNotes: "Smaller scale requires careful tenant positioning",
      positioning: "Entry-level investment with strong appreciation potential"
    }
  ];

  // Portfolio calculations
  const portfolioTotals = lots.reduce((acc, lot) => ({
    acres: acc.acres + lot.acres,
    buildableSF: acc.buildableSF + lot.buildableSF,
    landInvestment: acc.landInvestment + lot.landInvestment,
    planAnnual: acc.planAnnual + lot.planAnnual
  }), { acres: 0, buildableSF: 0, landInvestment: 0, planAnnual: 0 });

  const portfolioMetrics = {
    totalDryRent12: portfolioTotals.buildableSF * 12,
    totalDryRent12_5: portfolioTotals.buildableSF * 12.5,
    totalColdRent18: portfolioTotals.buildableSF * 18
  };

  return (
    <section id="properties" className="py-16 px-6 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4">{t('properties.title')}</h2>
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-6 mb-8">
            <p className="text-xl text-foreground max-w-4xl mx-auto text-center font-medium">
              <span className="text-primary font-bold">{t('properties.premiumLots')}</span> - {t('properties.professionalAnalysis')}
            </p>
            <p className="text-lg text-muted-foreground max-w-5xl mx-auto text-center mt-4">
              {t('properties.locationDescription')} 
              <span className="text-primary font-semibold">{t('properties.correctedData')}</span> shows 43.17 acres total, 702,820 SF buildable - 
              <span className="text-accent font-semibold">{t('properties.significantlyLarger')}</span>.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="relative overflow-hidden rounded-xl border border-border">
              <img src="/lovable-uploads/18eaafa7-6467-4037-8e2d-6d8017b50422.png" alt="Aerial view of development lots and parcels along Military Highway" className="w-full h-64 object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                
              </div>
            </div>
            
            <div className="relative overflow-hidden rounded-xl border border-border">
              <img src="/lovable-uploads/318dfb75-0eb2-4d25-a153-b8b6829a954b.png" alt="Detailed site plan blueprint showing warehouse layouts and configurations" className="w-full h-64 object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                
              </div>
            </div>
          </div>
        </div>

        {/* Professional Lot Analysis Carousel */}
        <Carousel className="w-full mb-12">
          <CarouselContent>
            {lots.map(lot => (
              <CarouselItem key={lot.id}>
                <ProfessionalUnderwriting lot={lot} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        {/* Portfolio Summary */}
        <PortfolioSummary 
          portfolioData={{
            totalAcres: portfolioTotals.acres,
            totalBuildableSF: portfolioTotals.buildableSF,
            totalLandInvestment: portfolioTotals.landInvestment,
            totalPlanAnnual: portfolioTotals.planAnnual,
            totalDryRent12: portfolioMetrics.totalDryRent12,
            totalDryRent12_5: portfolioMetrics.totalDryRent12_5,
            totalColdRent18: portfolioMetrics.totalColdRent18,
            averageCoverage: lots.reduce((acc, lot) => acc + lot.buildableSF / (lot.acres * 43560) * 100, 0) / lots.length,
            flaggedLots: lots.filter(lot => {
              const coverage = lot.buildableSF / (lot.acres * 43560) * 100;
              return coverage < 20 || coverage > 65;
            }).length
          }} 
        />
      </div>
    </section>
  );
}