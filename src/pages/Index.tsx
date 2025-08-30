import { Building, MapPin, TrendingUp, DollarSign, Phone, Download, BarChart3, Calendar, Users, TrendingDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import warehouseAerial from "@/assets/warehouse-aerial.jpg";
import warehouseExterior from "@/assets/warehouse-exterior.jpg";
import warehouseInterior from "@/assets/warehouse-interior.jpg";
import heroSunsetHighway from "@/assets/hero-sunset-highway.jpg";
import ExecutiveSummary from "@/components/ExecutiveSummary";
import MarketAnalysis from "@/components/MarketAnalysis";
import DryWarehouseInvestment from "@/components/DryWarehouseInvestment";
import RefrigeratedWarehouseInvestment from "@/components/RefrigeratedWarehouseInvestment";
import PropertySpecifications from "@/components/PropertySpecifications";
import FinancialProjections from "@/components/FinancialProjections";
import LocationAdvantages from "@/components/LocationAdvantages";
import RiskAnalysis from "@/components/RiskAnalysis";
import InvestmentProcess from "@/components/InvestmentProcess";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/90 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-3">
                <img 
                  src="/lovable-uploads/86c0cf99-26fd-48bd-9d8a-d0c791fcbf83.png" 
                  alt="RE/MAX Commercial" 
                  className="h-8"
                />
                <Building className="w-6 h-6 text-gold" />
                <span className="text-xl font-bold text-primary-foreground">McAllen Warehouse</span>
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#overview" className="text-muted-foreground hover:text-gold transition-colors">Overview</a>
              <a href="#analysis" className="text-muted-foreground hover:text-gold transition-colors">Market Analysis</a>
              <a href="#financials" className="text-muted-foreground hover:text-gold transition-colors">Financials</a>
              <a href="#properties" className="text-muted-foreground hover:text-gold transition-colors">Properties</a>
              <a href="#contact" className="text-muted-foreground hover:text-gold transition-colors">Contact</a>
            </div>

            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center space-x-2 text-sm text-muted-foreground">
                <Phone className="w-4 h-4" />
                <span>(956) 522-1481</span>
              </div>
              <Button className="bg-gradient-to-r from-gold to-gold-dark text-background font-semibold hover:shadow-lg hover:shadow-gold/25 transition-all duration-300">
                <Download className="w-4 h-4 mr-2" />
                Executive Summary
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroSunsetHighway} 
            alt="Sunset highway background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center min-h-screen">
          {/* Left Content */}
          <div className="space-y-8 text-white">
            <div className="inline-flex items-center px-4 py-2 bg-gold/20 text-gold rounded-full text-sm font-medium border border-gold/30 backdrop-blur-sm">
              <TrendingDown className="h-4 w-4 mr-2" />
              Fed Rate Cuts Drive Investment Opportunity • Historic Market Conditions
            </div>
            
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                McAllen Warehouse
                <span className="block text-gold">Investment Opportunity</span>
              </h1>
              <p className="text-xl text-gray-200 max-w-2xl leading-relaxed">
                Two distinct investment strategies in North America's premier cross-border trade corridor. 
                Fed rate cuts creating unprecedented financing opportunities with 1.3% vacancy rates.
              </p>
            </div>

            <div className="flex items-center space-x-6 text-gray-200">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-gold mr-2" />
                <span>Military Highway (FM 1016) • Minutes from Pharr-Reynosa International Bridge</span>
              </div>
            </div>

            <div className="grid grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-gold">1.3%</div>
                <div className="text-xs text-gray-300">Historic Low Vacancy</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-emerald-400">60%</div>
                <div className="text-xs text-gray-300">TX Produce Imports</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">Fed Cuts</div>
                <div className="text-xs text-gray-300">Lower Financing Costs</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-amber-400">49 Acres</div>
                <div className="text-xs text-gray-300">Total Available</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-to-r from-gold to-gold-dark text-black font-semibold hover:shadow-lg hover:shadow-gold/25 transition-all duration-300">
                <BarChart3 className="h-5 w-5 mr-2" />
                View Detailed Analysis
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm transition-all duration-300">
                <Download className="h-5 w-5 mr-2" />
                Download Executive Summary
              </Button>
            </div>
          </div>

          {/* Right Card Overlay */}
          <div className="relative lg:justify-self-end">
            <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-white/20 overflow-hidden max-w-md">
              {/* Card Header with Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src="/lovable-uploads/8b288e5c-4ba2-4340-8eb9-f8e6d81d2ffb.png" 
                  alt="Modern warehouse facility" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white text-xl font-bold">Investment Overview</h3>
                  <p className="text-gray-200 text-sm">Premium Industrial Development</p>
                </div>
              </div>
              
              {/* Card Content */}
              <div className="p-6 space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-gold">13.0%</div>
                    <div className="text-xs text-gray-600">Dry Warehouse ROI</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">8.8%</div>
                    <div className="text-xs text-gray-600">Refrigerated ROI</div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Total Investment:</span>
                    <span className="font-bold text-gray-900">$101M - $167M</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Available Land:</span>
                    <span className="font-bold text-gray-900">49 Acres</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Market Vacancy:</span>
                    <span className="font-bold text-emerald-600">1.3%</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <img 
                        src="/lovable-uploads/6f3fa122-bcae-43f0-bdac-141ce2b74e76.png" 
                        alt="Investment Agent" 
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <div>
                        <div className="text-sm font-semibold text-gray-900">Your Investment Specialist</div>
                        <div className="text-xs text-gray-600">RE/MAX Commercial</div>
                      </div>
                    </div>
                    <img 
                      src="/lovable-uploads/a8412600-74ab-454d-ab80-6da0e46ef31b.png" 
                      alt="RE/MAX" 
                      className="w-8 h-8"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ExecutiveSummary />
      <MarketAnalysis />
      <DryWarehouseInvestment />
      <RefrigeratedWarehouseInvestment />
      <PropertySpecifications />
      <FinancialProjections />
      <LocationAdvantages />
      <RiskAnalysis />
      <InvestmentProcess />
    </div>
  );
};

export default Index;