// Portfolio Constants - Single source of truth
export const PORTFOLIO_CONSTANTS = {
  // Core Portfolio Metrics
  TOTAL_ACRES: 44.17,
  TOTAL_BUILDABLE_SF: 702820,
  TOTAL_LAND_INVESTMENT: 12130000, // $12.13M
  AVERAGE_PRICE_PER_ACRE: 275000, // $275K
  PRICE_RANGE_MIN: 265000, // $265K
  PRICE_RANGE_MAX: 300000, // $300K
  
  // Development Costs
  DRY_CONSTRUCTION_COST_PER_SF: 150,
  REFRIGERATED_CONSTRUCTION_COST_MIN: 200,
  REFRIGERATED_CONSTRUCTION_COST_MAX: 220,
  
  // Investment Totals
  DRY_TOTAL_INVESTMENT: 117200000, // $117.2M
  REFRIGERATED_TOTAL_INVESTMENT: 189100000, // $189.1M
  
  // ROI Projections
  DRY_ROI_MIN: 7.3,
  DRY_ROI_MAX: 7.5,
  DRY_ROI_AVERAGE: 7.4,
  REFRIGERATED_ROI_MIN: 7.2,
  REFRIGERATED_ROI_MAX: 7.4,
  REFRIGERATED_ROI_AVERAGE: 7.3,
  
  // Rental Rates
  DRY_RENT_PER_SF: 12.5,
  REFRIGERATED_RENT_PER_SF: 18.0,
  
  // Market Data
  VACANCY_RATE: 3.0,
  ANNUAL_TRADE_VOLUME: 6000000000, // $6B
  METRO_POPULATION: 900000,
  ANNUAL_GROWTH_MIN: 8,
  ANNUAL_GROWTH_MAX: 12,
  LAND_APPRECIATION_MIN: 10,
  LAND_APPRECIATION_MAX: 15,
  
  // Lot Data (corrected to sum to 702,820 SF)
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
      acres: 5.0,
      buildableSF: 87120,
      landInvestment: 1500000,
      pricePerAcre: 300000,
      position: "Central Distribution Hub"
    },
    {
      id: "lot4",
      name: "Lot 4",
      acres: 5.25,
      buildableSF: 91476,
      landInvestment: 1391250,
      pricePerAcre: 265000,
      position: "Logistics Corridor Access"
    },
    {
      id: "lot5",
      name: "Lot 5",
      acres: 5.5,
      buildableSF: 95832,
      landInvestment: 1650000,
      pricePerAcre: 300000,
      position: "Strategic Highway Frontage"
    },
    {
      id: "lot6",
      name: "Lot 6",
      acres: 5.75,
      buildableSF: 100188,
      landInvestment: 1523750,
      pricePerAcre: 265000,
      position: "Industrial Park Gateway"
    },
    {
      id: "lot7",
      name: "Lot 7",
      acres: 6.0,
      buildableSF: 87624, // Reduced by 600 SF to correct total
      landInvestment: 1800000,
      pricePerAcre: 300000,
      position: "Prime Development Site"
    },
    {
      id: "lot8",
      name: "Lot 8",
      acres: 6.8,
      buildableSF: 92560,
      landInvestment: 1802000,
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

export const formatSF = (sf: number): string => {
  return sf.toLocaleString();
};

export const formatPercentage = (value: number): string => {
  return `${value}%`;
};

export const formatROIRange = (min: number, max: number): string => {
  return `${min}-${max}%`;
};