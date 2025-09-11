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
    // Header
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
    
    // Chat
    "chat_with_juan": "Chat with Juan",
    
    // Navigation
    "home": "Home",
    "analysis": "Analysis",
    "chat": "Chat",
    "menu": "Menu",
    
    // Common
    "acres": "Acres",
    "close": "Close"
  },
  es: {
    // Header
    "juan_elizondo": "Juan Elizondo",
    "overview": "Resumen",
    "market_analysis": "Análisis de Mercado",
    "land_parcels": "Parcelas de Terreno",
    "virtual_tour": "Tour Virtual",
    "financials": "Financieras",
    "properties": "Propiedades",
    "calculator": "Calculadora",
    
    // Hero Section
    "historic_investment": "Oportunidad de Inversión Histórica",
    "prime_shovel_ready": "Terreno Industrial Premium",
    "industrial_land": "Listo para Construir",
    "mcallen_district": "Distrito Industrial de McAllen",
    "premium_properties": "Solo quedan 8 propiedades premium en el distrito industrial premier de McAllen. El Valle es la joya escondida de América.",
    "market_vacancy": "Vacancia de Mercado",
    "total_portfolio": "Portafolio Total",
    "prime_land": "Terreno Industrial Premium",
    "view_analysis": "Ver Análisis",
    "download_summary": "Descargar Resumen",
    
    // Virtual Tour
    "virtual_property_tour": "Tour Virtual de Propiedades",
    "experience_properties": "Experimenta nuestras propiedades industriales premium a través de tours virtuales inmersivos",
    
    // Chat
    "chat_with_juan": "Conversa con Juan",
    
    // Navigation
    "home": "Inicio",
    "analysis": "Análisis", 
    "chat": "Chat",
    "menu": "Menú",
    
    // Common
    "acres": "Acres",
    "close": "Cerrar"
  }
};