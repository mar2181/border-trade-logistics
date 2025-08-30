import { Building, MapPin, TrendingUp, DollarSign, Phone, Download, BarChart3, Calendar, Users, TrendingDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import warehouseAerial from "@/assets/warehouse-aerial.jpg";
import warehouseExterior from "@/assets/warehouse-exterior.jpg";
import warehouseInterior from "@/assets/warehouse-interior.jpg";
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
            <div className="flex items-center space-x-2">
              <Building className="w-8 h-8 text-gold" />
              <span className="text-xl font-bold text-primary-foreground">McAllen Warehouse</span>
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
      <section className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center px-4 py-2 bg-gold/20 text-gold rounded-full text-sm font-medium border border-gold/30">
              <TrendingDown className="h-4 w-4 mr-2" />
              Fed Rate Cuts Drive Investment Opportunity • Historic Market Conditions
            </div>
            
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold text-primary-foreground leading-tight">
                McAllen Warehouse
                <span className="block text-gold">Investment Opportunity</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
                Two distinct investment strategies in North America's premier cross-border trade corridor. 
                Fed rate cuts creating unprecedented financing opportunities with 1.3% vacancy rates.
              </p>
            </div>

            <div className="flex items-center space-x-6 text-muted-foreground">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-gold mr-2" />
                <span>Military Highway (FM 1016) • Minutes from Pharr-Reynosa International Bridge</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6">
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-primary-foreground mb-2">Dry Warehouse Development</h3>
                  <p className="text-sm text-muted-foreground mb-4">Lower entry cost • Higher ROI potential</p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Construction:</span>
                      <span className="text-gold font-semibold">$120/sq ft</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Annual rent:</span>
                      <span className="text-emerald-500 font-semibold">$18/sq ft</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">ROI:</span>
                      <span className="text-blue-500 font-bold">13.0%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Portfolio:</span>
                      <span className="text-amber-500 font-semibold">$101M</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6">
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-primary-foreground mb-2">Refrigerated Warehouse Development</h3>
                  <p className="text-sm text-muted-foreground mb-4">Premium cold storage • Stable returns</p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Construction:</span>
                      <span className="text-blue-400 font-semibold">$210/sq ft</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Annual rent:</span>
                      <span className="text-emerald-500 font-semibold">$20/sq ft</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">ROI:</span>
                      <span className="text-gold font-bold">8.8%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Portfolio:</span>
                      <span className="text-amber-500 font-semibold">$167M</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-gold">1.3%</div>
                <div className="text-xs text-muted-foreground">Historic Low Vacancy</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-emerald-500">60%</div>
                <div className="text-xs text-muted-foreground">TX Produce Imports</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-500">Fed Cuts</div>
                <div className="text-xs text-muted-foreground">Lower Financing Costs</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-amber-500">49 Acres</div>
                <div className="text-xs text-muted-foreground">Total Available</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-to-r from-gold to-gold-dark text-background font-semibold hover:shadow-lg hover:shadow-gold/25 transition-all duration-300">
                <BarChart3 className="h-5 w-5 mr-2" />
                View Detailed Analysis
              </Button>
              <Button size="lg" variant="outline" className="border-gold text-gold hover:bg-gold hover:text-background transition-all duration-300">
                <Download className="h-5 w-5 mr-2" />
                Download Executive Summary
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl border border-border shadow-2xl">
              <img 
                src={warehouseAerial} 
                alt="McAllen Warehouse Development Site" 
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex justify-between items-end">
                  <div>
                    <div className="text-gold text-sm font-medium">Fed rate environment creating optimal investment timing</div>
                  </div>
                  <div className="bg-gold text-background px-3 py-1 rounded-full text-sm font-bold">
                    Available Now
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