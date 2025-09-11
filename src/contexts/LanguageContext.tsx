import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

const translations = {
  en: {
    // Header & Navigation
    "juan_elizondo": "Juan Elizondo",
    "overview": "Overview",
    "market_analysis": "Market Analysis",
    "land_parcels": "Land Parcels", 
    "virtual_tour": "Virtual Tour",
    "financials": "Financials",
    "properties": "Properties",
    "calculator": "Calculator",
    
    // Hero Section
    "historic_investment": "Historic Investment Opportunity",
    "prime_shovel_ready": "Prime Shovel-Ready",
    "industrial_land": "Industrial Land",
    "mcallen_district": "McAllen Industrial District",
    "premium_properties": "Only 8 premium properties left in McAllen's premier industrial district. The Valley is America's hidden gem.",
    "market_vacancy": "Market Vacancy",
    "total_portfolio": "Total Portfolio",
    "prime_land": "Prime Industrial Land",
    "view_analysis": "View Analysis",
    "download_summary": "Download Summary",
    
    // Virtual Tour
    "virtual_property_tour": "Virtual Property Tour",
    "experience_properties": "Experience our premium industrial properties through immersive virtual tours",
    
    // Executive Summary
    "executive_summary": "Executive Summary",
    "valley_hidden_gem": "The Valley's Hidden Gem: A $12.24M land portfolio in America's most coveted industrial district",
    "mcallen_acreage": "44.17 acres of premium shovel-ready parcels on McAllen's 10th Street in the dynamic industrial growth market. Leverage Fed rate adjustments to strategically position in this compelling market where smart investors stay and grow.",
    "strategic_investment": "Strategic Investment Opportunity in McAllen",
    "only_8_properties": "Only 8 properties available in McAllen's premier industrial district. 10th Street corridor parcels with utilities ready, industrial zoning, 585,530 buildable SF. The Valley's projected 20-year boom, combined with Fed rate cuts, creates unmatched appreciation potential. This market shows exceptional resilience to changing national conditions due to unique demand drivers and limited supply.",
    "land_portfolio_value": "Land Portfolio Value",
    "price_per_acre": "Price Per Acre",
    "valley_advantage": "The Valley Advantage - America's Hidden Gem",
    
    // Navigation
    "nav_home": "Home",
    "nav_calculator": "Calculator"
  },
  es: {
    // Header & Navigation
    "juan_elizondo": "Juan Elizondo",
    "overview": "Resumen",
    "market_analysis": "Análisis de Mercado",
    "land_parcels": "Parcelas de Terreno", 
    "virtual_tour": "Tour Virtual",
    "financials": "Financiero",
    "properties": "Propiedades",
    "calculator": "Calculadora",
    
    // Hero Section
    "historic_investment": "Oportunidad de Inversión Histórica",
    "prime_shovel_ready": "Primera Calidad Listo para Construcción",
    "industrial_land": "Terreno Industrial",
    "mcallen_district": "Distrito Industrial de McAllen",
    "premium_properties": "Solo 8 propiedades premium quedan en el distrito industrial premier de McAllen. El Valle es la joya oculta de América.",
    "market_vacancy": "Vacancia del Mercado",
    "total_portfolio": "Portafolio Total",
    "prime_land": "Terreno Industrial Premium",
    "view_analysis": "Ver Análisis",
    "download_summary": "Descargar Resumen",
    
    // Virtual Tour
    "virtual_property_tour": "Tour Virtual de Propiedades",
    "experience_properties": "Experimenta nuestras propiedades industriales premium a través de recorridos virtuales inmersivos",
    
    // Executive Summary
    "executive_summary": "Resumen Ejecutivo",
    "valley_hidden_gem": "La Joya Oculta del Valle: Un portafolio de terrenos de $12.24M en el distrito industrial más codiciado de América",
    "mcallen_acreage": "44.17 acres de parcelas premium listas para construir en la calle 10 de McAllen, en el dinámico mercado de crecimiento industrial. Aprovecha los ajustes de tasas del Fed para posicionarte estratégicamente en este atractivo mercado donde los inversionistas inteligentes permanecen y crecen.",
    "strategic_investment": "Oportunidad de Inversión Estratégica en McAllen",
    "only_8_properties": "Solo 8 propiedades disponibles en el principal distrito industrial de McAllen. Parcelas en el corredor de la calle 10 con servicios listos, zonificación industrial, 585,530 SF construibles. El auge proyectado de 20 años del Valle, combinado con recortes de tasas del Fed, crea un potencial de apreciación inigualable. Este mercado muestra una resiliencia excepcional frente a condiciones nacionales cambiantes debido a sus únicos impulsores de demanda y oferta limitada.",
    "land_portfolio_value": "Valor del Portafolio de Terrenos",
    "price_per_acre": "Precio por Acre",
    "valley_advantage": "La Ventaja del Valle - La Joya Oculta de América",
    
    // Navigation
    "nav_home": "Inicio",
    "nav_calculator": "Calculadora"
  }
};

export default LanguageProvider;