// Portfolio Constants - Single source of truth
export const PORTFOLIO_CONSTANTS = {
  // Core Portfolio Metrics
  TOTAL_ACRES: 44.17,
  TOTAL_BUILDABLE_SF: 703420,
  TOTAL_LAND_INVESTMENT: 12127850, // $12,127,850 (≈$12.13M)
  AVERAGE_PRICE_PER_ACRE: 274572, // $274,572 (≈$275K weighted average)
  PRICE_RANGE_MIN: 265000, // $265K
  PRICE_RANGE_MAX: 300000, // $300K
  
  // Development Costs (Updated per dataset)
  DRY_CONSTRUCTION_COST_PER_SF: 150,
  REFRIGERATED_CONSTRUCTION_COST_PER_SF: 250, // Updated to $250/SF per dataset
  
  // Investment Totals (Construction + Land - Based on 703,420 SF)
  DRY_TOTAL_INVESTMENT: 117640850, // $117,640,850 (≈$117.64M)
  REFRIGERATED_TOTAL_INVESTMENT: 187982850, // $187,982,850 (≈$188.0M)
  
  // ROI Projections (Recalculated with dataset totals)
  DRY_ROI_MIN: 7.3,
  DRY_ROI_MAX: 7.6,
  DRY_ROI_AVERAGE: 7.5, // 8,792,750 ÷ 117,640,850
  REFRIGERATED_ROI_MIN: 6.6,
  REFRIGERATED_ROI_MAX: 6.8,
  REFRIGERATED_ROI_AVERAGE: 6.7, // 12,661,560 ÷ 187,982,850
  
  // Rental Rates
  DRY_RENT_PER_SF: 12.5,
  REFRIGERATED_RENT_PER_SF: 18.0,
  
  // Market Data (Updated with verified sources)
  VACANCY_RATE: 3.9, // Per CBRE Q3 2024 data - consistent sitewide
  VACANCY_RATE_DISPLAY: 3.9, // Standardized to match analysis
  ANNUAL_TRADE_VOLUME: 6000000000, // $6B produce trade
  TOTAL_TRADE_VOLUME: 48500000000, // $48.5B total trade
  METRO_POPULATION: 900000,
  ANNUAL_GROWTH_MIN: 8,
  ANNUAL_GROWTH_MAX: 12,
  LAND_APPRECIATION_MIN: 10,
  LAND_APPRECIATION_MAX: 15,
  RENT_GROWTH_MIN: 1.9,
  RENT_GROWTH_MAX: 2.5,
  
  // Calculated Portfolio Metrics
  PORTFOLIO_4_YEAR_VALUE: 19148915, // $12,127,850 × (1.12)^4
  ANNUAL_HOLDING_COSTS: 303196, // 2.5% of $12,127,850
  
  // Lot Data (exact dataset values)
  LOTS: [
    {
      id: "lot1",
      name: "Lot 1",
      acres: 4.92,
      buildableSF: 68440,
      landInvestment: 1476000,
      pricePerAcre: 300000,
      position: "Premium Corner Position"
    },
    {
      id: "lot2", 
      name: "Lot 2",
      acres: 4.95,
      buildableSF: 79580,
      landInvestment: 1311750,
      pricePerAcre: 265000,
      position: "Multi-Tenant Configuration"
    },
    {
      id: "lot3",
      name: "Lot 3", 
      acres: 5.66,
      buildableSF: 98400,
      landInvestment: 1499900,
      pricePerAcre: 265000,
      position: "Central Distribution Hub"
    },
    {
      id: "lot4",
      name: "Lot 4",
      acres: 6.01,
      buildableSF: 98400,
      landInvestment: 1592650,
      pricePerAcre: 265000,
      position: "Logistics Corridor Access"
    },
    {
      id: "lot5",
      name: "Lot 5",
      acres: 6.05,
      buildableSF: 98400,
      landInvestment: 1603250,
      pricePerAcre: 265000,
      position: "Strategic Highway Frontage"
    },
    {
      id: "lot6",
      name: "Lot 6",
      acres: 5.68,
      buildableSF: 98400,
      landInvestment: 1505200,
      pricePerAcre: 265000,
      position: "Industrial Park Gateway"
    },
    {
      id: "lot7",
      name: "Lot 7",
      acres: 7.16,
      buildableSF: 108460,
      landInvestment: 2148000,
      pricePerAcre: 300000,
      position: "Prime Development Site"
    },
    {
      id: "lot8",
      name: "Lot 8",
      acres: 3.74,
      buildableSF: 53340,
      landInvestment: 991100,
      pricePerAcre: 265000,
      position: "Expansion Ready Location"
    }
  ],
  
  // Standardized Terminology
  LOCATION_NAME: "McAllen Industrial District",
  MARKET_NAME: "Rio Grande Valley",
  HIGHWAY_NAME: "Military Highway (FM 1016)",
  TRADE_DESCRIPTION: "Cross-Border Logistics Hub",
  
  // Contact Information
  CONTACT: {
    AGENT: "Juan Elizondo",
    COMPANY: "RE/MAX Commercial",
    PHONE: "(956) 522-1481",
    TITLE: "Investment Specialist"
  }
} as const;

// Utility functions
export const formatCurrency = (amount: number): string => {
  if (amount >= 1_000_000_000) {
    return `$${(amount / 1_000_000_000).toFixed(1)}B`;
  }
  if (amount >= 1_000_000) {
    const millions = amount / 1_000_000;
    const decimals = millions < 20 ? 2 : 1; // show two decimals for smaller million values like 12.13M
    return `$${millions.toFixed(decimals)}M`;
  }
  if (amount >= 1_000) {
    return `$${(amount / 1_000).toFixed(0)}K`;
  }
  return `$${amount.toLocaleString()}`;
};

// Enhanced formatting functions for exact display requirements
export const formatExactCurrency = (amount: number): string => {
  return `$${amount.toLocaleString()}`;
};

export const formatCurrencyWithMNotation = (amount: number): string => {
  const exact = formatExactCurrency(amount);
  if (amount >= 1_000_000) {
    const millions = (amount / 1_000_000).toFixed(2);
    return `${exact} (≈$${millions}M)`;
  }
  return exact;
};

export const formatSF = (sf: number): string => {
  return sf.toLocaleString();
};

export const formatPercentage = (value: number): string => {
  return `${value}%`;
};

export const formatROIRange = (min: number, max: number): string => {
  return `${min}-${max}%`;
};

// Portfolio Validation Function
export const validatePortfolioTotals = () => {
  const calculatedTotalAcres = PORTFOLIO_CONSTANTS.LOTS.reduce((sum, lot) => sum + lot.acres, 0);
  const calculatedTotalSF = PORTFOLIO_CONSTANTS.LOTS.reduce((sum, lot) => sum + lot.buildableSF, 0);
  const calculatedTotalInvestment = PORTFOLIO_CONSTANTS.LOTS.reduce((sum, lot) => sum + lot.landInvestment, 0);
  
  return {
    isValid: Math.abs(calculatedTotalAcres - PORTFOLIO_CONSTANTS.TOTAL_ACRES) < 0.01 && 
             calculatedTotalSF === PORTFOLIO_CONSTANTS.TOTAL_BUILDABLE_SF && 
             Math.abs(calculatedTotalInvestment - PORTFOLIO_CONSTANTS.TOTAL_LAND_INVESTMENT) < 1000,
    calculated: { 
      calculatedTotalAcres: Number(calculatedTotalAcres.toFixed(2)), 
      calculatedTotalSF, 
      calculatedTotalInvestment 
    },
    constants: {
      TOTAL_ACRES: PORTFOLIO_CONSTANTS.TOTAL_ACRES,
      TOTAL_BUILDABLE_SF: PORTFOLIO_CONSTANTS.TOTAL_BUILDABLE_SF,
      TOTAL_LAND_INVESTMENT: PORTFOLIO_CONSTANTS.TOTAL_LAND_INVESTMENT
    }
  };
};
