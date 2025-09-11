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
    
    // Market Analysis & Insights
    "market_insights": "Perspectivas y Análisis del Mercado",
    "industry_expert_insights": "Perspectivas de Expertos de la Industria",
    "stay_informed": "Mantente informado con el análisis de mercado más reciente y perspectivas de inversión de líderes de la industria:",
    
    // Executive Summary
    "executive_summary": "Resumen Ejecutivo",
    "valley_hidden_gem": "La Joya Oculta del Valle: Un portafolio de terrenos de $12.24M en el distrito industrial más codiciado de América",
    "mcallen_acreage": "44.17 acres de parcelas premium listas para construir en la calle 10 de McAllen, en el dinámico mercado de crecimiento industrial. Aprovecha los ajustes de tasas del Fed para posicionarte estratégicamente en este atractivo mercado donde los inversionistas inteligentes permanecen y crecen.",
    "strategic_investment": "Oportunidad de Inversión Estratégica en McAllen",
    "only_8_properties": "Solo 8 propiedades disponibles en el principal distrito industrial de McAllen. Parcelas en el corredor de la calle 10 con servicios listos, zonificación industrial, 585,530 SF construibles. El auge proyectado de 20 años del Valle, combinado con recortes de tasas del Fed, crea un potencial de apreciación inigualable. Este mercado muestra una resiliencia excepcional frente a condiciones nacionales cambiantes debido a sus únicos impulsores de demanda y oferta limitada.",
    "land_portfolio_value": "Valor del Portafolio de Terrenos",
    "price_per_acre": "Precio por Acre",
    "valley_advantage": "La Ventaja del Valle - La Joya Oculta de América",
    "premium_industrial_location": "Ubicación Industrial Premium: Esquina estratégica en la calle 10 con nuevo desarrollo vial.",
    "metro_population": "Población Metropolitana de 900K+: McAllen rivaliza con El Paso en tamaño con una fuerte trayectoria de crecimiento.",
    "refrigerated_boom": "Auge de la Industria Refrigerada: Corazón del corredor de productos agrícolas con demanda creciente.",
    "fed_rate_timing": "Momento de Recortes de Tasas del Fed: Tormenta perfecta para financiamiento de desarrollo y apreciación.",
    "market_resilience": "Resiliencia del Mercado: Fundamentos de crecimiento del Valle ofrecen estabilidad frente a condiciones nacionales cambiantes.",
    "valley_investment": "Oportunidad de Inversión en el Valle - Momento Perfecto",
    "why_investors_choose": "Por qué los inversionistas eligen el Valle: Quienes han hecho negocios en McAllen se quedan y crecen; es el secreto mejor guardado de América. Comparables recientes muestran $281K/acre para sitios listos, haciendo que nuestro precio de $250K-$300K sea extremadamente atractivo. Actúa ahora para beneficiarte de los recortes de tasas del Fed, ya sea que construyas o mantengas. Esta es una oportunidad de inversión convincente con múltiples escenarios favorables en un mercado fundamentalmente sólido.",
    "land_investment_highlights": "Aspectos Destacados de la Inversión en Terrenos",
    "vacancy_rate": "3% Tasa de Desocupación (3T24): Apoya la ocupación estable en un mercado consolidado.",
    "trade_volume": "$6B+ Volumen de Comercio Anual: Soporta la demanda de terrenos con un crecimiento proyectado del 44%.",
    "rent_growth": "2.5% Crecimiento de Rentas: Señala un fuerte potencial de apreciación de terrenos.",
    "buildable_sf": "585,530 SF: Área total construible en 44.17 acres premium - solo 8 propiedades restantes.",
    
    // Strategic Position
    "strategic_position": "Posición Transfronteriza Estratégica de McAllen",
    "proven_demand": "Ubicado en el principal distrito industrial de McAllen con demanda probada de productos agrícolas/logística. El Valle demuestra estabilidad de mercado respaldada por el comercio transfronterizo a través del Puente Pharr-Reynosa. Modelado bajo escenarios base y de estrés para confianza de prestamistas y claridad de inversión.",
    "dynamic_transformation": "Transformación Dinámica del Mercado del Valle",
    "mcallen_dynamics": "Dinámicas del Mercado MSA de McAllen: Informes recientes de terceros muestran una desocupación industrial en McAllen del 3.9% (3T24) con un crecimiento de rentas LTM ~1.9%–2.5%. Rentas promedio en 2T-2025 de $8.43/SF con >1.3M SF en construcción (CBRE 2T-2025). El Valle demuestra un crecimiento consistente respaldado por el comercio transfronterizo con patrones de demanda logística probados.",
    "vacancy_trend": "Tendencia de Tasa de Desocupación y Crecimiento de Rentas",
    "trade_distribution": "Distribución de Volumen de Comercio",
    "produce_trade": "Más de $6B en comercio anual de productos agrícolas a través del Puente Pharr-Reynosa (~$47-$50B total) crea una demanda constante para instalaciones especializadas de almacenamiento en frío y distribución.",
    "avocados": "Aguacates: $1,970M",
    "berries": "Bayas: $1,100M", 
    "peppers": "Pimientos: $890M",
    "onions": "Cebollas: $650M",
    "others": "Otros: $2,440M",
    "supply_shortage": "1.5-2.5M SF: Escasez de oferta - Demanda actual de inquilinos vs. inventario limitado disponible.",
    "import_growth": "+10% Crecimiento de Importaciones: Crecimiento anual del comercio transfronterizo (Investigación de Texas A&M).",
    "rent_trajectory": "3% Trayectoria de Rentas: Crecimiento anual de rentas respaldado por fundamentos del mercado.",
    "remaining_properties": "42 Acres: Solo 8 propiedades restantes - Oportunidades industriales premium de McAllen.",
    
    // Demographics
    "demographics": "Demografía del Área y Perfil del Mercado",
    "strategic_positioning": "Posicionamiento estratégico en un mercado en crecimiento con fundamentos económicos sólidos y una base poblacional en expansión.",
    "one_mile_radius": "Radio de 1 Milla",
    "population": "Población",
    "avg_household_income": "Ingreso Promedio por Hogar",
    "median_age": "Edad Promedio",
    "avg_home_value": "Valor Promedio de Casa",
    "three_mile_radius": "Radio de 3 Millas",
    "five_mile_radius": "Radio de 5 Millas",
    "current_market_demographics": "Demografía Actual del Mercado",
    "five_mile_profile": "El perfil demográfico de 5 millas demuestra una fuerza laboral joven y en crecimiento con ingresos familiares en aumento, creando una fuerte demanda de servicios de distribución y logística en el mercado en auge del Valle.",
    "median_age_demo": "33.6 Edad Promedio: Población en edad laboral",
    "household_income_demo": "$72K Ingreso por Hogar: Base de consumidores sólida",
    "home_value_demo": "$177K Valor de Casa: Comunidad establecida",
    
    // Strategic Industrial Ecosystem
    "strategic_industrial": "Ecosistema Industrial Estratégico",
    "positioned_heart": "Ubicado en el corazón del corredor industrial de McAllen con acceso directo a infraestructura clave de comercio y logística.",
    "premium_industrial_positioning": "Posicionamiento Industrial Premium",
    "strategic_site_location": "La ubicación estratégica del sitio junto al desarrollo del Parque Industrial del Sur de McAllen lo posiciona en el centro del área de crecimiento industrial más dinámica de la región, con infraestructura establecida y demanda probada de operadores logísticos importantes.",
    "mcallen_foreign_trade": "Zona de Comercio Exterior de McAllen: Procesamiento y almacenamiento libre de impuestos (Adyacente).",
    "mcallen_produce_terminal": "Terminal de Productos de McAllen: Centro de distribución de productos agrícolas regional (2.5 millas).",
    "majestic_international": "Puerto de Comercio Internacional Majestic: Instalación logística transfronteriza (4.2 millas).",
    "competitive_advantages": "Ventajas Competitivas",
    "military_highway_frontage": "Frente a Military Highway con alta visibilidad y accesibilidad para camiones",
    "established_industrial_corridor": "Corredor industrial establecido con demanda probada de inquilinos",
    "proximity_bridges": "Proximidad a tres puentes internacionales para acceso diversificado al comercio",
    "ready_sites": "Sitios listos con infraestructura que eliminan retrasos y costos de desarrollo",
    
    // Investment Analysis
    "strategic_investment_analysis": "Análisis de Inversión Estratégica - La Ventaja del Valle",
    "exceptional_value": "Por qué representa un valor excepcional: El principal distrito industrial de McAllen ofrece retornos ajustados al riesgo atractivos con una fuerte protección contra pérdidas. Los fundamentos del mercado del Valle crean un impulso de crecimiento sostenible que trasciende los ciclos inmobiliarios típicos.",
    "market_risks": "Riesgos del Mercado",
    "key_risk_factors": "Factores de Riesgo Clave",
    "fed_environment_costs": "Entorno de tasas del Fed y costos de financiamiento",
    "valley_cycle": "Consideraciones del ciclo del mercado del Valle",
    "mcallen_demand": "Fluctuaciones de la demanda industrial en McAllen",
    "mitigation_strategies": "Estrategias de Mitigación",
    "post_fed_adjustments": "Tras los ajustes de tasas del Fed, el mercado del Valle demuestra estabilidad, la demanda industrial está respaldada por fundamentos de comercio transfronterizo.",
    "regulatory_risks": "Riesgos Regulatorios",
    "zoning_changes": "Cambios de zonificación en el distrito industrial de McAllen",
    "development_regulations": "Nuevas regulaciones de desarrollo en McAllen",
    "property_tax": "Ajustes de impuestos a la propiedad en un mercado en crecimiento",
    "established_zoning": "Zonificación industrial establecida en un distrito premium, entorno favorable para negocios en el Valle, evaluaciones aseguradas.",
    "financial_risks": "Riesgos Financieros",
    "interest_rate_changes": "Cambios en el entorno de tasas de interés",
    "carrying_costs_appreciation": "Costos de mantenimiento durante la apreciación en el Valle",
    "exit_liquidity": "Liquidez de salida en un mercado en crecimiento",
    "strategic_timing": "Consideración estratégica del momento, costos de mantenimiento modelados frente al potencial de apreciación, múltiples estrategias de salida disponibles.",
    "valley_investment_advantages": "Ventajas de Inversión en el Valle",
    "mcallen_industrial_district": "Distrito Industrial de McAllen: La ubicación industrial más codiciada del Valle",
    "tenth_street_positioning": "Posicionamiento en la calle 10 con nuevo desarrollo vial que mejora el acceso",
    "only_8_remaining": "Solo 8 propiedades restantes en este distrito premium",
    "900k_population": "Población de 900K+ en el Valle que respalda fundamentos de mercado sostenidos",
    "produce_corridor_heart": "Corazón del corredor de distribución de productos agrícolas de América con demanda creciente",
    "fed_perfect_timing": "Los recortes de tasas del Fed crean un momento perfecto para inversión o financiamiento de desarrollo",
    "strategic_protection": "Protección Estratégica de la Inversión",
    "strategic_land_investment": "Inversión en terrenos estratégicos en un mercado de crecimiento probado con exposición mínima a la construcción",
    "multiple_exit_strategies": "Múltiples estrategias de salida: mantener para apreciación, revender con prima o desarrollar",
    "mcallen_resilience": "El mercado de McAllen demuestra resiliencia frente a condiciones nacionales cambiantes",
    "twenty_year_projection": "Proyección de crecimiento de 20 años del Valle proporciona seguridad de inversión sostenida",
    "proven_track_record": "Historial probado: los inversionistas inteligentes que eligen el Valle logran un éxito duradero",
    "optimal_timing": "Momento óptimo con recortes de tasas del Fed que mejoran todos los escenarios estratégicos",
    "strategic_investment_timing": "Momento Estratégico de Inversión",
    "smart_investors_timing": "Solo 8 propiedades restantes en el principal distrito industrial de McAllen. Los inversionistas inteligentes que actúen en los próximos meses se beneficiarán de los recortes de tasas del Fed y se posicionarán por delante de la curva en el Valle, la joya oculta de América donde quienes invierten se quedan y crecen.",
    
    // Investment Process
    "premium_investment_process": "Proceso de Inversión en Propiedades Premium",
    "initial_consultation": "Consulta Inicial de Propiedades: Contacta a un especialista para revisar las 8 propiedades disponibles en el distrito industrial de McAllen.",
    "site_visit": "Visita e Inspección del Sitio: Recorre las propiedades de McAllen, verifica los servicios, evalúa el potencial de desarrollo.",
    "investment_structuring": "Estructuración de la Inversión: Estructura términos para beneficiarte de los recortes de tasas del Fed y el crecimiento del Valle.",
    "property_acquisition": "Adquisición de la Propiedad: Asegura tu posición en el distrito industrial más codiciado de América.",
    
    // RE/MAX Team
    "remax_commercial_team": "Equipo Comercial RE/MAX",
    "mcallen_specialist": "Tu Especialista en Inversiones en McAllen",
    "twenty_years_experience": "Más de 20 años de experiencia en bienes raíces internacionales, especializándose en el mercado industrial del Valle. Experto en propiedades industriales de McAllen con un conocimiento profundo del potencial de crecimiento sostenido del Valle y un historial probado ayudando a inversionistas a asegurar oportunidades de millones de dólares antes de que desaparezcan.",
    "contact_phone": "(956) 522-1481",
    "contact_opportunity": "Contacta para una Oportunidad de Millones de Dólares",
    "last_8_properties": "Últimas 8 Propiedades - Actúa Antes de que los Recortes del Fed Suban los Precios",
    "perfect_timing": "Momento Perfecto: Solo 8 propiedades restantes en el principal distrito industrial de McAllen. Tras los ajustes de tasas del Fed, posiciona tu inversión estratégicamente a precios de mercado actuales antes de que el crecimiento continuo del Valle eleve los precios. ¡Esta es tu oportunidad de adelantarte en la joya oculta de América!",
    "mcallen_district_stats": "Distrito Industrial de McAllen",
    "premium_8_unique": "Premium: 8 Propiedades Únicas Restantes",
    "portfolio_value": "$11.89M: Valor del Portafolio",
    "metro_900k": "900K+: Población Metropolitana",
    "fed_cuts_strategic": "Recortes del Fed: Momento Estratégico",
    "contact_today": "Contacta a tu especialista al (956) 522-1481 HOY - ¡Estas 8 propiedades premium no durarán en el dinámico mercado de crecimiento del Valle!",
    
    // Market Data Verification
    "market_data_verification": "Verificación de Datos de Mercado",
    "third_party_metrics": "Métricas de terceros para análisis listo para prestamistas.",
    "verified_market_sources": "Fuentes de Mercado Verificadas",
    "vacancy_rent_data": "Datos de Desocupación y Rentas: CBRE 2T-2025 Informe del Mercado Industrial de McAllen",
    "market_average_rent": "Renta promedio de mercado: $8.43/SF",
    "under_construction": "En construcción: >1.3M SF",
    "net_absorption": "Absorción neta: 33,545 SF (2T-2025)",
    "historical_vacancy": "Desocupación Histórica: Informe del Sur de Texas de Matthews 3T-2024",
    "mcallen_industrial_vacancy": "Desocupación industrial en McAllen: 3.9%",
    "ltm_rent_growth": "Crecimiento de rentas LTM: ~1.9%–2.5%",
    "logistics_average": "Promedio logístico: $9.00/SF, Flex promedio: $10.14/SF",
    "cross_border_trade": "Comercio Transfronterizo: Puente Pharr-Reynosa / Informes Oficiales",
    "total_annual_trade": "Comercio anual total: ~$47-$50B",
    "produce_trade_volume": "Comercio de productos agrícolas: Más de $6B",
    "texas_fresh_produce": "Maneja el 60% de los productos frescos de Texas",
    "construction_costs": "Costos de Construcción: Tendencias de Costos de Construcción CBRE 2024",
    "dry_warehouse_cost": "Almacén seco: ~$120/SF",
    "cold_storage_premium": "Se requiere prima para almacenamiento en frío",
    "texas_costs_below": "Costos de Texas ligeramente por debajo del promedio de EE. UU.",
    "rate_environment": "Entorno de Tasas: Análisis CRE de NAIOP/Altus/Kearny",
    "fed_cuts_started": "Recortes del Fed comenzaron en septiembre de 2024 (-50 bps)",
    "cre_financing_effects": "Efectos de financiamiento CRE desiguales",
    "treasury_5_year": "Tesoro a 5 años aumentó tras recortes iniciales",
    "critical_corrections": "Correcciones Críticas Realizadas",
    "vacancy_rate_correction": "Tasa de Desocupación",
    "previous_13_percent": "Anterior: 1.3% 'mínimo histórico'",
    "corrected_39_percent": "Corregido: 3.9% (3T24 verificado)",
    "conservative_underwriting": "Impacto: Suscripción más conservadora",
    "rent_growth_correction": "Crecimiento de Rentas",
    "previous_375_claim": "Anterior: Afirmación de aumento del 375%",
    "corrected_ltm_growth": "Corregido: Crecimiento LTM 1.9%–2.5%",
    "realistic_projections": "Impacto: Proyecciones realistas",
    "produce_trade_correction": "Comercio de Productos Agrícolas",
    "previous_705b_claim": "Anterior: Afirmación específica de $7.05B",
    "corrected_6b_plus": "Corregido: Más de $6B con atribución de fuente",
    "verifiable_market_driver": "Impacto: Impulsor de mercado verificable",
    "rate_environment_correction": "Entorno de Tasas",
    "previous_imminent_cuts": "Anterior: Lenguaje de 'cortes inminentes'",
    "corrected_september_cuts": "Corregido: Cortes comenzaron en septiembre de 2024, impacto mixto en CRE",
    "precise_timing_context": "Impacto: Contexto de tiempo preciso",
    "lender_ready_standards": "Estándares Listos para Prestamistas Cumplidos",
    "market_data_verified": "Datos de Mercado: Desocupación, rentas y absorción verificadas por terceros.",
    "source_attribution": "Atribución de Fuentes: CBRE, Matthews, autoridades oficiales del puente.",
    "conservative_assumptions": "Suposiciones Conservadoras: Escenarios probados bajo estrés con choques de tasas.",
    "still_required_package": "Aún Requerido para Paquete Completo de Prestamistas",
    "site_legal": "Sitio y Legal",
    "alta_survey": "Encuesta ALTA con metes y bounds",
    "zoning_verification": "Cartas de verificación de zonificación",
    "phase_1_esas": "Fase I ESAs y geotecnia",
    "utilities_capacity": "Confirmaciones de capacidad de servicios",
    "financial_market": "Financiero y de Mercado",
    "land_sales_comps": "Comps de ventas de terrenos cerradas (corredor)",
    "schematic_budgets": "Presupuestos esquemáticos de GC",
    "industrial_lease_comps": "Comps de arrendamientos industriales con rentas",
    "debt_term_sheets": "Hojas de términos de deuda y pruebas de estrés DSCR",
    
    // Investment Opportunities
    "investment_opportunities": "Oportunidades de Inversión",
    "choose_strategies": "Elige entre dos estrategias de inversión en almacenes, cada una optimizada para diferentes segmentos de mercado y perfiles de riesgo.",
    "dry_warehouse": "Almacén Seco",
    "refrigerated_warehouse": "Almacén Refrigerado",
    "dry_warehouse_roi": "13.0% ROI Promedio",
    "refrigerated_roi": "8.8% ROI Promedio",
    "total_investment": "Inversión Total",
    "average_roi": "ROI Promedio",
    "total_sf": "SF Total",
    "available_land": "Terreno Disponible",
    "dry_warehouse_investment": "Inversión en Almacén Seco",
    "high_roi_opportunity": "Oportunidad de alto ROI con menores costos de entrada y fuertes retornos de efectivo sobre efectivo. Los recortes de tasas del Fed hacen que el financiamiento sea más atractivo para el desarrollo de almacenes tradicionales.",
    "construction_cost_sf": "Costo de Construcción por SF",
    "annual_rent_sf": "Renta Anual por SF",
    "portfolio_average_roi": "ROI Promedio del Portafolio",
    "total_portfolio_investment": "Inversión Total del Portafolio",
    "individual_investment_opportunities": "Oportunidades de Inversión Individual",
    "lot_01_premium": "Lote 01 - Frente Premium",
    "lot_02_premium": "Lote 02 - Frente Premium",
    "lot_03_premium": "Lote 03 - Frente Premium",
    "lot_04_premium": "Lote 04 - Frente Premium",
    "lot_05_premium": "Lote 05 - Frente Premium",
    "lot_06_standard": "Lote 06 - Frente Estándar",
    "size": "Tamaño",
    "buildable_sf_lot": "SF Construible",
    "total_investment_lot": "Inversión Total",
    "annual_rent": "Renta Anual",
    "projected_roi": "ROI Proyectado",
    "fed_cuts_impact": "Impacto de los Recortes de Tasas del Fed en la Inversión en Almacén Seco",
    "financing_advantages": "Ventajas de Financiamiento",
    "lower_construction_rates": "Tasas de préstamo de construcción más bajas reducen los costos de mantenimiento",
    "better_dscr_ratios": "Mejores ratios de cobertura de servicio de deuda",
    "improved_cash_returns": "Retornos de efectivo sobre efectivo mejorados mediante apalancamiento",
    "refinancing_opportunities": "Oportunidades de refinanciamiento para desarrollos existentes",
    "market_movement_benefits": "Beneficios del Movimiento del Mercado",
    "increased_business_activity": "Mayor actividad empresarial por menores costos de endeudamiento",
    "more_importers_expanding": "Más importadores expandiendo operaciones",
    "increased_warehouse_demand": "Mayor demanda de espacio de almacén flexible",
    "optimal_timing_development": "Momento óptimo para nuevos proyectos de desarrollo",
    "complete_dry_portfolio": "Portafolio Completo de Almacén Seco",
    "total_acres_portfolio": "Acres Totales",
    "buildable_sf_portfolio": "SF Construible",
    "total_portfolio_investment_amount": "Inversión Total",
    "annual_rental_income": "Ingreso Anual por Rentas",
    "property_specifications": "Especificaciones de la Propiedad",
    "8_lots_available": "8 Lotes Industriales Premium Disponibles - Análisis Profesional de Suscripción",
    "located_premier_district": "Ubicado en el principal distrito industrial de McAllen con demanda logística probada. Datos corregidos muestran 44.17 acres totales, 585,530 SF construibles - significativamente más grande que lo indicado en los materiales de marketing.",
    "professional_lot_analysis": "Análisis Profesional de Lotes Individuales",
    "lot_01_professional": "Lote 01 - Análisis Profesional",
    "10th_military_mcallen": "Calle 10 y Military Hwy, Distrito Industrial de McAllen",
    "acres": "Acres",
    "sf": "SF",
    "coverage": "Cobertura",
    "land_investment": "Inversión en Terreno",
    "site_coverage": "Cobertura del Sitio",
    "normal_range": "(Dentro del rango normal)",
    "per_acre": "por Acre",
    "per_buildable_sf": "por SF Construible",
    "plan_rent_sf": "Renta Plan/SF: $17.47 (Implícita del plan)",
    "plan_vs_market_analysis": "Análisis de Renta Plan vs. Mercado",
    "plan_projection": "Proyección del Plan",
    "annual_noi": "NOI Anual",
    "dry_warehouse_12": "Almacén Seco ($12/SF)",
    "dry_warehouse_12_50": "Almacén Seco ($12.50/SF)",
    "refrigerated_18": "Almacén Refrigerado ($18/SF)",
    "upside": "upside",
    "strategic_advantages": "Ventajas Estratégicas",
    "direct_highway_access": "Acceso directo a la autopista desde Military Hwy",
    "strategic_industrial_location": "Ubicación industrial estratégica que mejora la visibilidad",
    "premium_corner_position": "Posición de esquina premium con doble frente",
    "risk_evaluation": "Evaluación de Riesgos",
    "verify_retention_pond": "Verificar requisitos de estanque de retención y capacidad de servicios",
    "investment_recommendation": "Recomendación de Inversión",
    "positioning_strategy": "Estrategia de Posicionamiento: Ideal para una mezcla de inquilinos más pequeños con configuraciones de almacén flexibles.",
    
    // Navigation
    "nav_home": "Inicio",
    "nav_calculator": "Calculadora"
  }
};

export default LanguageProvider;