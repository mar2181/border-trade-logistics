import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Thermometer, Warehouse, TrendingUp, DollarSign } from "lucide-react";
import DryWarehouseInvestment from "./DryWarehouseInvestment";
import RefrigeratedWarehouseInvestment from "./RefrigeratedWarehouseInvestment";
import { PORTFOLIO_CONSTANTS, formatCurrency } from "@/lib/constants";

const InvestmentTabs = () => {
  return (
    <section id="investment-comparison" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gold mb-6">
            Investment Opportunities
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose between two distinct warehouse investment strategies, each optimized for different market segments and risk profiles.
          </p>
        </div>

        {/* Investment Tabs */}
        <Tabs defaultValue="dry-warehouse" className="w-full">
          <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-2 mb-12 h-20 bg-card/80 backdrop-blur-sm border border-border rounded-xl p-2 gap-2">
            <TabsTrigger 
              value="dry-warehouse" 
              className="flex items-center space-x-3 text-base font-semibold text-white/90 data-[state=active]:bg-blue-500 data-[state=active]:text-white hover:text-blue-400 hover:bg-white/5 transition-all duration-300 rounded-lg py-4 px-6"
            >
              <Warehouse className="w-5 h-5" />
              <div className="text-left">
                <div>Dry Warehouse</div>
                <div className="text-xs opacity-90">{PORTFOLIO_CONSTANTS.DRY_ROI_AVERAGE}% Average ROI</div>
              </div>
            </TabsTrigger>
            <TabsTrigger 
              value="refrigerated-warehouse" 
              className="flex items-center space-x-3 text-base font-semibold text-white/90 data-[state=active]:bg-cyan-500 data-[state=active]:text-white hover:text-cyan-400 hover:bg-white/5 transition-all duration-300 rounded-lg py-4 px-6"
            >
              <Thermometer className="w-5 h-5" />
              <div className="text-left">
                <div>Refrigerated Warehouse</div>
                <div className="text-xs opacity-90">{PORTFOLIO_CONSTANTS.REFRIGERATED_ROI_MIN}-{PORTFOLIO_CONSTANTS.REFRIGERATED_ROI_MAX}% Average ROI</div>
              </div>
            </TabsTrigger>
          </TabsList>

          {/* Tab Contents */}
          <TabsContent value="dry-warehouse" className="mt-0">
            <div className="space-y-8">
              {/* Quick Stats for Dry Warehouse */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                <div className="text-center p-6 bg-card rounded-lg border border-border">
                  <DollarSign className="w-8 h-8 text-gold mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gold">{formatCurrency(PORTFOLIO_CONSTANTS.DRY_TOTAL_INVESTMENT)}</div>
                  <div className="text-sm text-muted-foreground">Total Investment</div>
                </div>
                <div className="text-center p-6 bg-card rounded-lg border border-border">
                  <TrendingUp className="w-8 h-8 text-emerald-500 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-emerald-500">{PORTFOLIO_CONSTANTS.DRY_ROI_AVERAGE}%</div>
                  <div className="text-sm text-muted-foreground">Average ROI</div>
                </div>
                <div className="text-center p-6 bg-card rounded-lg border border-border">
                  <Warehouse className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-blue-500">{(PORTFOLIO_CONSTANTS.TOTAL_BUILDABLE_SF / 1000).toFixed(0)}K</div>
                  <div className="text-sm text-muted-foreground">Total SF</div>
                </div>
                <div className="text-center p-6 bg-card rounded-lg border border-border">
                  <div className="w-8 h-8 bg-amber-500 rounded-full mx-auto mb-2 flex items-center justify-center text-background font-bold">44</div>
                  <div className="text-2xl font-bold text-amber-500">{PORTFOLIO_CONSTANTS.TOTAL_ACRES} Acres</div>
                  <div className="text-sm text-muted-foreground">Available Land</div>
                </div>
              </div>
              <DryWarehouseInvestment />
            </div>
          </TabsContent>

          <TabsContent value="refrigerated-warehouse" className="mt-0">
            <div className="space-y-8">
              {/* Quick Stats for Refrigerated Warehouse */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                <div className="text-center p-6 bg-card rounded-lg border border-border">
                  <DollarSign className="w-8 h-8 text-gold mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gold">{formatCurrency(PORTFOLIO_CONSTANTS.REFRIGERATED_TOTAL_INVESTMENT)}</div>
                  <div className="text-sm text-muted-foreground">Total Investment</div>
                </div>
                <div className="text-center p-6 bg-card rounded-lg border border-border">
                  <TrendingUp className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-blue-500">{PORTFOLIO_CONSTANTS.REFRIGERATED_ROI_AVERAGE}%</div>
                  <div className="text-sm text-muted-foreground">Average ROI</div>
                </div>
                <div className="text-center p-6 bg-card rounded-lg border border-border">
                  <Thermometer className="w-8 h-8 text-cyan-500 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-cyan-500">{(PORTFOLIO_CONSTANTS.TOTAL_BUILDABLE_SF / 1000).toFixed(0)}K</div>
                  <div className="text-sm text-muted-foreground">Total SF</div>
                </div>
                <div className="text-center p-6 bg-card rounded-lg border border-border">
                  <div className="w-8 h-8 bg-purple-500 rounded-full mx-auto mb-2 flex items-center justify-center text-background font-bold">44</div>
                  <div className="text-2xl font-bold text-purple-500">{PORTFOLIO_CONSTANTS.TOTAL_ACRES} Acres</div>
                  <div className="text-sm text-muted-foreground">Available Land</div>
                </div>
              </div>
              <RefrigeratedWarehouseInvestment />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default InvestmentTabs;