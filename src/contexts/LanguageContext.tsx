import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    'nav.overview': 'Overview',
    'nav.marketAnalysis': 'Market Analysis',
    'nav.landParcels': 'Land Parcels',
    'nav.virtualTour': 'Virtual Tour', 
    'nav.financials': 'Financials',
    'nav.properties': 'Properties',
    'nav.calculator': 'Calculator',
    
    // Hero Section
    'hero.badge': 'Fed Rate Cuts Drive Investment Opportunity • Historic Market Conditions',
    'hero.title': 'Prime Shovel-Ready Industrial Land Opportunities',
    'hero.description': 'Only 8 premium properties left in McAllen\'s premier industrial district on 10th Street. The Valley is America\'s hidden gem - those who invest here stay and grow. Following Fed rate adjustments, this presents strategic timing for positioned investors.',
    'hero.location': '10th Street • McAllen Industrial District • Heart of America\'s Produce Distribution Hub',
    'hero.marketVacancy': 'Market Vacancy (3Q24)',
    'hero.produceImports': 'TX Produce Imports',
    'hero.pricing': 'Per Acre Pricing',
    'hero.properties': 'Only Remaining',
    'hero.viewAnalysis': 'View Analysis',
    
    // Virtual Tour
    'virtualTour.title': 'MCC Industrial Park Virtual Tour',
    'virtualTour.subtitle': 'Virtual Property Tour',
    'virtualTour.description': 'Experience our premium industrial properties through immersive virtual tours.',
    
    // Market Insights
    'marketInsights.title': 'Market Insights & Analysis',
    'marketInsights.subtitle': 'Industry Expert Insights',
    'marketInsights.description': 'Stay informed with the latest market analysis and investment insights from industry leaders',
    
    // Executive Summary
    'executiveSummary.title': 'Executive Summary',
    'executiveSummary.subtitle': 'The Valley\'s Hidden Gem: A $12.24M land portfolio in America\'s most coveted industrial district',
    'executiveSummary.description': '44.17 acres of premium build-ready parcels on McAllen\'s 10th Street in the dynamic industrial growth market. Leverage Fed rate adjustments to strategically position in this compelling market where smart investors stay and grow.',
    'executiveSummary.opportunity': 'Strategic Investment Opportunity in McAllen',
    'executiveSummary.opportunityDesc': 'Only 8 properties available in McAllen\'s premier industrial district. Parcels on 10th Street corridor with ready utilities, industrial zoning, 585,530 SF buildable. The Valley\'s projected 20-year boom, combined with Fed rate cuts, creates unmatched appreciation potential. This market shows exceptional resilience to changing national conditions due to its unique demand drivers and limited supply.',
    'executiveSummary.portfolioValue': 'Land Portfolio Value',
    'executiveSummary.pricePerAcre': 'Price per Acre',
    'executiveSummary.valleyAdvantage': 'The Valley Advantage - America\'s Hidden Gem',
    'executiveSummary.premiumLocation': 'Premium Industrial Location: Strategic corner location on 10th Street with new road development',
    'executiveSummary.metroPopulation': '900K+ Metro Population: McAllen rivals El Paso size with strong growth trajectory',
    'executiveSummary.refrigeratedBoom': 'Refrigerated Industry Boom: Heart of produce alley with surging demand',
    'executiveSummary.fedTiming': 'Fed Rate Cut Timing: Perfect storm for development financing and appreciation',
    'executiveSummary.marketResilience': 'Market Resilience: Valley growth fundamentals provide stability amid changing national conditions',
    'executiveSummary.valleyOpportunity': 'Valley Investment Opportunity - Perfect Timing',
    'executiveSummary.whyInvestors': 'Why Investors Choose The Valley: Those who have done business in McAllen stay and grow - it\'s America\'s best-kept secret. Recent comparables show $281K/acre for ready sites, making our $250K-$300K pricing extremely attractive. Act Now to benefit from Fed rate cuts whether you build or hold. This represents a compelling investment opportunity with multiple favorable scenarios in a fundamentally strong market.',
    
    // Market Analysis
    'marketAnalysis.title': 'Market Analysis',
    'marketAnalysis.keyHighlights': 'Key Land Investment Highlights',
    'marketAnalysis.vacancy': 'Market vacancy (3Q24) supports stable occupancy in established market',
    'marketAnalysis.tradeVolume': 'Annual trade volume supports land demand with 44% growth projected',
    'marketAnalysis.rentalGrowth': 'Rental rate growth signals strong land appreciation potential',
    'marketAnalysis.buildableArea': 'Total buildable area across 44.17 premium acres - only 8 properties left',
    'marketAnalysis.strategicPosition': 'McAllen\'s Strategic Cross-Border Position',
    'marketAnalysis.strategicDesc': 'Located in McAllen\'s premier industrial district with proven produce/logistics demand. The Valley demonstrates market stability supported by cross-border trade through Pharr-Reynosa Bridge. Modeled under base and stress scenarios for lender confidence and investment clarity.',
    'marketAnalysis.dynamicTransformation': 'The Valley\'s Dynamic Market Transformation',
    'marketAnalysis.dynamicDesc': 'McAllen MSA Market Dynamics: Recent third-party reads show McAllen industrial vacancy around 3.9% (3Q24) with LTM rent growth ~1.9%–2.5%. Q2-2025 asking rents averaged $8.43/SF amid >1.3M SF under construction (CBRE Q2-2025). The Valley demonstrates consistent growth supported by cross-border trade with proven logistics demand patterns.',
    'marketAnalysis.vacancyTrend': 'Vacancy Rate Trend',
    'marketAnalysis.rentalRateGrowth': 'Rental Rate Growth',
    'marketAnalysis.tradeVolumeDistribution': 'Trade Volume Distribution',
    'marketAnalysis.tradeVolumeDesc': 'Over $6B annual produce trade through Pharr-Reynosa Bridge (~$47-$50B total trade) creates consistent demand for specialized cold storage and distribution facilities.',
    'marketAnalysis.avocados': 'Avocados',
    'marketAnalysis.berries': 'Berries',
    'marketAnalysis.peppers': 'Peppers',
    'marketAnalysis.onions': 'Onions',
    'marketAnalysis.others': 'Others',
    'marketAnalysis.supplyShortage': 'Supply Shortage - Current tenant demand vs limited available inventory',
    'marketAnalysis.importGrowth': 'Import Growth - Annual cross-border trade growth (Texas A&M Research)',
    'marketAnalysis.rentTrajectory': 'Rent Trajectory - Annual rental rate growth supported by market fundamentals',
    'marketAnalysis.onlyProperties': 'Only 8 Properties Left - McAllen\'s premier industrial opportunities',
    
    // News Items
    'news.fedRates': 'Fed Could Cut Rates to at Least 3%, Says Bank of America\'s Cabana',
    'news.fedRatesDesc': '36K views • 4 days ago - Expert analysis on Federal Reserve rate cuts and their impact on real estate investments.',
    'news.interestRates': 'How Will Interest Rate Cuts Impact? | Today | Telemundo',
    'news.interestRatesDesc': 'Analysis on how rate cuts will affect real estate investments and market opportunities.',
    'news.fedEnvironment': 'Analysis of Fed Rate Environment and Its Impact on Commercial Real Estate',
    'news.fedEnvironmentDesc': 'Expert insights on rate changes and real estate investment strategies.',
    'news.powellAnalysis': 'Everything Fed Chair Powell Did \'TOO LATE\' Revealed',
    'news.powellAnalysisDesc': '1 day ago - Critical analysis of Federal Reserve decisions affecting commercial real estate markets.'
  },
  es: {
    // Navigation
    'nav.overview': 'Resumen',
    'nav.marketAnalysis': 'Análisis de Mercado',
    'nav.landParcels': 'Parcelas de Terreno',
    'nav.virtualTour': 'Tour Virtual',
    'nav.financials': 'Financieros',
    'nav.properties': 'Propiedades',
    'nav.calculator': 'Calculadora',
    
    // Hero Section
    'hero.badge': 'Recortes de Tasas del Fed Impulsan Oportunidad de Inversión • Condiciones Históricas del Mercado',
    'hero.title': 'Oportunidades de Terreno Industrial Premium Listo para Construir',
    'hero.description': 'Solo quedan 8 propiedades premium en el distrito industrial principal de McAllen en la calle 10. El Valle es la joya oculta de América - quienes invierten aquí se quedan y crecen. Siguiendo los ajustes de tasas del Fed, esto presenta un momento estratégico para inversionistas posicionados.',
    'hero.location': 'Calle 10 • Distrito Industrial de McAllen • Corazón del Centro de Distribución de Productos de América',
    'hero.marketVacancy': 'Vacancia del Mercado (3T24)',
    'hero.produceImports': 'Importaciones de Productos TX',
    'hero.pricing': 'Precio por Acre',
    'hero.properties': 'Solo Restantes',
    'hero.viewAnalysis': 'Ver Análisis',
    
    // Virtual Tour
    'virtualTour.title': 'Tour Virtual del Parque Industrial MCC',
    'virtualTour.subtitle': 'Tour Virtual de Propiedades',
    'virtualTour.description': 'Experimenta nuestras propiedades industriales premium a través de recorridos virtuales inmersivos.',
    
    // Market Insights
    'marketInsights.title': 'Perspectivas y Análisis del Mercado',
    'marketInsights.subtitle': 'Perspectivas de Expertos de la Industria',
    'marketInsights.description': 'Mantente informado con el análisis de mercado más reciente y perspectivas de inversión de líderes de la industria',
    
    // Executive Summary  
    'executiveSummary.title': 'Resumen Ejecutivo',
    'executiveSummary.subtitle': 'La Joya Oculta del Valle: Un portafolio de terrenos de $12.24M en el distrito industrial más codiciado de América',
    'executiveSummary.description': '44.17 acres de parcelas premium listas para construir en la calle 10 de McAllen, en el dinámico mercado de crecimiento industrial. Aprovecha los ajustes de tasas del Fed para posicionarte estratégicamente en este atractivo mercado donde los inversionistas inteligentes permanecen y crecen.',
    'executiveSummary.opportunity': 'Oportunidad de Inversión Estratégica en McAllen',
    'executiveSummary.opportunityDesc': 'Solo 8 propiedades disponibles en el principal distrito industrial de McAllen. Parcelas en el corredor de la calle 10 con servicios listos, zonificación industrial, 585,530 SF construibles. El auge proyectado de 20 años del Valle, combinado con recortes de tasas del Fed, crea un potencial de apreciación inigualable. Este mercado muestra una resiliencia excepcional frente a condiciones nacionales cambiantes debido a sus únicos impulsores de demanda y oferta limitada.',
    'executiveSummary.portfolioValue': 'Valor del Portafolio de Terrenos',
    'executiveSummary.pricePerAcre': 'Precio por Acre',
    'executiveSummary.valleyAdvantage': 'La Ventaja del Valle - La Joya Oculta de América',
    'executiveSummary.premiumLocation': 'Ubicación Industrial Premium: Ubicación estratégica en esquina en la calle 10 con nuevo desarrollo vial',
    'executiveSummary.metroPopulation': 'Población Metropolitana de 900K+: McAllen rivaliza con el tamaño de El Paso con una sólida trayectoria de crecimiento',
    'executiveSummary.refrigeratedBoom': 'Auge de la Industria Refrigerada: Corazón del corredor de productos con demanda creciente',
    'executiveSummary.fedTiming': 'Momento de Recortes del Fed: Tormenta perfecta para financiamiento de desarrollo y apreciación',
    'executiveSummary.marketResilience': 'Resistencia del Mercado: Los fundamentos de crecimiento del Valle proporcionan estabilidad en medio de condiciones nacionales cambiantes',
    'executiveSummary.valleyOpportunity': 'Oportunidad de Inversión del Valle - Momento Perfecto',
    'executiveSummary.whyInvestors': 'Por Qué los Inversionistas Eligen el Valle: Aquellos que han hecho negocios en McAllen se quedan y crecen - es el secreto mejor guardado de América. Comparables recientes muestran $281K/acre para sitios listos, haciendo que nuestros precios de $250K-$300K sean extremadamente atractivos. Actúa Ahora para beneficiarte de los recortes de tasas del Fed ya sea que construyas o mantengas. Esto representa una oportunidad de inversión convincente con múltiples escenarios favorables en un mercado fundamentalmente sólido.',
    
    // Market Analysis
    'marketAnalysis.title': 'Análisis de Mercado',
    'marketAnalysis.keyHighlights': 'Aspectos Destacados de la Inversión en Terrenos',
    'marketAnalysis.vacancy': 'La vacancia del mercado (3T24) respalda la ocupación estable en el mercado establecido',
    'marketAnalysis.tradeVolume': 'El volumen de comercio anual respalda la demanda de terrenos con un crecimiento proyectado del 44%',
    'marketAnalysis.rentalGrowth': 'El crecimiento de las tarifas de alquiler señala un fuerte potencial de apreciación del terreno',
    'marketAnalysis.buildableArea': 'Área total construible en 44.17 acres premium - solo quedan 8 propiedades',
    'marketAnalysis.strategicPosition': 'Posición Estratégica Transfronteriza de McAllen',
    'marketAnalysis.strategicDesc': 'Ubicado en el distrito industrial premier de McAllen con demanda comprobada de productos/logística. El Valle demuestra estabilidad del mercado respaldada por el comercio transfronterizo a través del Puente Pharr-Reynosa. Modelado bajo escenarios base y de estrés para confianza del prestamista y claridad de inversión.',
    'marketAnalysis.dynamicTransformation': 'La Transformación Dinámica del Mercado del Valle',
    'marketAnalysis.dynamicDesc': 'Dinámicas del Mercado MSA de McAllen: Lecturas recientes de terceros muestran una vacancia industrial de McAllen alrededor del 3.9% (3T24) con crecimiento de alquileres LTM ~1.9%–2.5%. Los alquileres solicitados en Q2-2025 promediaron $8.43/SF en medio de >1.3M SF en construcción (CBRE Q2-2025). El Valle demuestra crecimiento consistente respaldado por comercio transfronterizo con patrones de demanda logística comprobados.',
    'marketAnalysis.vacancyTrend': 'Tendencia de Tasa de Vacancia',
    'marketAnalysis.rentalRateGrowth': 'Crecimiento de Tasa de Alquiler',
    'marketAnalysis.tradeVolumeDistribution': 'Distribución del Volumen de Comercio',
    'marketAnalysis.tradeVolumeDesc': 'Más de $6B de comercio anual de productos a través del Puente Pharr-Reynosa (~$47-$50B de comercio total) crea demanda consistente para instalaciones especializadas de almacenamiento en frío y distribución.',
    'marketAnalysis.avocados': 'Aguacates',
    'marketAnalysis.berries': 'Bayas',
    'marketAnalysis.peppers': 'Pimientos',
    'marketAnalysis.onions': 'Cebollas',
    'marketAnalysis.others': 'Otros',
    'marketAnalysis.supplyShortage': 'Escasez de Suministro - Demanda actual de inquilinos vs inventario disponible limitado',
    'marketAnalysis.importGrowth': 'Crecimiento de Importaciones - Crecimiento anual del comercio transfronterizo (Investigación de Texas A&M)',
    'marketAnalysis.rentTrajectory': 'Trayectoria de Alquiler - Crecimiento anual de tasas de alquiler respaldado por fundamentos del mercado',
    'marketAnalysis.onlyProperties': 'Solo Quedan 8 Propiedades - Oportunidades industriales premier de McAllen',
    
    // News Items
    'news.fedRates': 'El Fed podría reducir tasas a al menos 3%, dice Cabana de Bank of America',
    'news.fedRatesDesc': '36K vistas • Hace 4 días - Análisis experto sobre recortes de tasas del Federal Reserve y su impacto en inversiones inmobiliarias.',
    'news.interestRates': '¿Cómo impactará la baja de tasas de interés? | Hoy Día | Telemundo',
    'news.interestRatesDesc': 'Análisis sobre cómo los recortes de tasas afectarán las inversiones inmobiliarias y oportunidades de mercado.',
    'news.fedEnvironment': 'Análisis del Entorno de Tasas del Fed y su Impacto en Bienes Raíces Comerciales',
    'news.fedEnvironmentDesc': 'Perspectivas de expertos sobre cambios de tasas y estrategias de inversión inmobiliaria.',
    'news.powellAnalysis': 'Todo lo que el presidente del Fed, Powell, hizo \'DEMASIADO TARDE\' revelado',
    'news.powellAnalysisDesc': 'Hace 1 día - Análisis crítico de decisiones del Federal Reserve que afectan los mercados inmobiliarios comerciales.'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};