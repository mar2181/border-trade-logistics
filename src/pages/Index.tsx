import { Building, MapPin, TrendingUp, DollarSign, Phone, Download, BarChart3, Calendar, Users, TrendingDown, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import warehouseAerial from "@/assets/warehouse-aerial.jpg";
import warehouseExterior from "@/assets/warehouse-exterior.jpg";
import warehouseInterior from "@/assets/warehouse-interior.jpg";
import heroSunsetHighway from "@/assets/hero-sunset-highway.jpg";
import ExecutiveSummary from "@/components/ExecutiveSummary";
import MarketAnalysis from "@/components/MarketAnalysis";
import LandParcels from "@/components/LandParcels";
import FinancialProjections from "@/components/FinancialProjections";
import LocationAdvantages from "@/components/LocationAdvantages";
import Demographics from "@/components/Demographics";
import StrategicPosition from "@/components/StrategicPosition";
import RiskAnalysis from "@/components/RiskAnalysis";
import { MarketDataSources } from "@/components/MarketDataSources";
import InvestmentProcess from "@/components/InvestmentProcess";
import FloatingBottomNav from "@/components/FloatingBottomNav";
import VideoCarousel from "@/components/VideoCarousel";
import InvestmentTabs from "@/components/InvestmentTabs";
import PropertySpecifications from "@/components/PropertySpecifications";
import IndividualLots from "@/components/IndividualLots";
import ProfessionalAnalysis from "@/components/ProfessionalAnalysis";

const Index = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [isMobileChatOpen, setIsMobileChatOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll for header background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Move chatbot to mobile container when mobile chat opens
  useEffect(() => {
    const chatWidget = document.querySelector('elevenlabs-convai') as HTMLElement;
    const mobileContainer = document.getElementById('mobile-chat-container');
    const hiddenContainer = document.getElementById('elevenlabs-chat-container');
    
    if (chatWidget && mobileContainer && hiddenContainer) {
      if (isMobileChatOpen) {
        // Move to mobile container and show
        if (!mobileContainer.contains(chatWidget)) {
          mobileContainer.appendChild(chatWidget);
        }
        chatWidget.style.display = 'block';
        chatWidget.style.width = '100%';
        chatWidget.style.height = '100%';
        chatWidget.style.position = 'relative';
      } else {
        // Move back to hidden container
        if (!hiddenContainer.contains(chatWidget)) {
          hiddenContainer.appendChild(chatWidget);
        }
      }
    }
  }, [isMobileChatOpen]);

  const handleMobileNavigation = (action: string) => {
    if (action === 'dry') {
      document.getElementById('investment-comparison')?.scrollIntoView({
        behavior: 'smooth'
      });
      setTimeout(() => {
        const dryTab = document.querySelector('[value="dry-warehouse"]') as HTMLElement;
        if (dryTab) dryTab.click();
      }, 500);
    } else if (action === 'refrigerated') {
      document.getElementById('investment-comparison')?.scrollIntoView({
        behavior: 'smooth'
      });
      setTimeout(() => {
        const refTab = document.querySelector('[value="refrigerated-warehouse"]') as HTMLElement;
        if (refTab) refTab.click();
      }, 500);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation - Floating on Mobile, Fixed on Desktop */}
      <nav className={`fixed top-4 left-4 right-4 md:top-0 md:left-0 md:right-0 z-50 transition-all duration-300
                      ${isScrolled 
                        ? 'md:bg-black/95 md:backdrop-blur-md md:border-b md:border-white/10' 
                        : 'md:bg-transparent'
                      }
                      sm:bg-background/95 sm:backdrop-blur-md sm:border sm:border-border/50 sm:rounded-2xl sm:shadow-lg`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            {/* Mobile Header - Simplified */}
            <div className="md:hidden flex items-center justify-between w-full">
              <div className="flex items-center space-x-2">
                <Building className="w-6 h-6 text-red-600" />
                <div className="text-sm font-bold">
                  <span className="text-red-600">RE/MAX</span>
                  <div className="text-xs text-muted-foreground -mt-1">COMMERCIAL</div>
                </div>
              </div>
              
              <div className="text-sm font-medium text-foreground">
                Juan Elizondo
              </div>
            </div>

            {/* Desktop Header - Original */}
            <div className="hidden md:flex items-center justify-between w-full">
              <div className="flex items-center space-x-3 sm:space-x-4">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <img src="/lovable-uploads/86c0cf99-26fd-48bd-9d8a-d0c791fcbf83.png" alt="RE/MAX Commercial" className="h-6 sm:h-8" />
                  <Building className="w-5 h-5 sm:w-6 sm:h-6 text-gold" />
                </div>
              </div>
              
              <div className="hidden md:flex items-center space-x-6">
                <a href="#overview" className="text-muted-foreground hover:text-gold transition-colors">Overview</a>
                <a href="#analysis" className="text-muted-foreground hover:text-gold transition-colors">Market Analysis</a>
                <a href="#land-parcels" className="text-muted-foreground hover:text-gold transition-colors">Land Parcels</a>
                <a href="#virtual-tour" className="text-muted-foreground hover:text-gold transition-colors">Virtual Tour</a>
                <a href="#financials" className="text-muted-foreground hover:text-gold transition-colors">Financials</a>
                <a href="#properties" className="text-muted-foreground hover:text-gold transition-colors">Properties</a>
                <a href="/calculator" className="text-muted-foreground hover:text-gold transition-colors">Calculator</a>
              </div>

              <div className="flex items-center space-x-3 sm:space-x-4">
                <div className="hidden sm:flex items-center space-x-2 text-sm text-muted-foreground">
                  <Phone className="w-4 h-4" />
                  <span>(956) 522-1481</span>
                </div>
                
                <button
                  onClick={() => {
                    const agent = document.querySelector('elevenlabs-convai');
                    if (agent) {
                      (agent as any).click?.();
                    }
                  }}
                  className="flex items-center justify-center w-8 h-8 bg-accent text-accent-foreground rounded-full hover:bg-accent/80 transition-colors"
                  aria-label="Start chat"
                >
                  <MessageCircle className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Mobile: Image + Card Below, Desktop: Original Layout */}
      <section className="relative">
        {/* Desktop Layout (Original) */}
        <div className="hidden md:block min-h-screen">
          <div className="absolute inset-0 z-0">
            <img src={heroSunsetHighway} alt="Sunset highway background" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-20 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-screen">
            {/* Left Content */}
            <div className="space-y-6 sm:space-y-8 text-white order-2 lg:order-1">
              <div className="inline-flex items-center px-3 sm:px-4 py-2 bg-gold/20 text-gold rounded-full text-xs sm:text-sm font-medium border border-gold/30 backdrop-blur-sm">
                <TrendingDown className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                Historic Investment Opportunity
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Prime Shovel-Ready
                <span className="block text-gold">Industrial Land</span>
              </h1>
              
              <div className="flex items-center space-x-2 text-white/90">
                <MapPin className="h-4 w-4 sm:h-5 sm:w-5" />
                <span className="text-sm sm:text-base">McAllen Industrial District</span>
              </div>
              
              <p className="text-base sm:text-lg lg:text-xl text-white/80 leading-relaxed max-w-xl">
                Only 8 premium properties left in McAllen's premier industrial district. The Valley is America's hidden gem.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Button size="lg" className="bg-gold hover:bg-gold/90 text-black font-semibold">
                  View Analysis
                </Button>
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                  <Download className="mr-2 h-4 w-4" />
                  Download Summary
                </Button>
              </div>
            </div>

            {/* Right Content - Data Cards */}
            <div className="space-y-4 sm:space-y-6 order-1 lg:order-2">
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl sm:rounded-2xl p-3 sm:p-6 text-white">
                  <div className="text-2xl sm:text-4xl font-bold text-gold">3%</div>
                  <div className="text-xs sm:text-sm text-white/70">Market Vacancy</div>
                </div>
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl sm:rounded-2xl p-3 sm:p-6 text-white">
                  <div className="text-xl sm:text-3xl font-bold text-emerald-400">$12.24M</div>
                  <div className="text-xs sm:text-sm text-white/70">Total Portfolio</div>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-white">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-xl sm:text-2xl font-bold">167.2 Acres</div>
                    <div className="text-xs sm:text-sm text-white/70">Prime Industrial Land</div>
                  </div>
                  <div className="flex space-x-1 sm:space-x-2">
                    <div className="w-2 h-6 sm:w-3 sm:h-8 bg-gold rounded"></div>
                    <div className="w-2 h-4 sm:w-3 sm:h-6 bg-gold/60 rounded"></div>
                    <div className="w-2 h-5 sm:w-3 sm:h-7 bg-gold/80 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="block md:hidden">
          <div className="relative">
            <img src={heroSunsetHighway} alt="Sunset highway background" className="w-full h-[50vh] object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <div className="inline-flex items-center px-3 py-1 bg-gold/20 text-gold rounded-full text-xs font-medium border border-gold/30 backdrop-blur-sm mb-2">
                <TrendingDown className="h-3 w-3 mr-1" />
                Historic Investment Opportunity
              </div>
              <h1 className="text-2xl font-bold leading-tight mb-2">
                Prime Shovel-Ready
                <span className="block text-gold">Industrial Land</span>
              </h1>
              <div className="flex items-center space-x-2 text-white/90 text-sm">
                <MapPin className="h-4 w-4" />
                <span>McAllen Industrial District</span>
              </div>
            </div>
          </div>
          
          <div className="p-4 bg-background">
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Only 8 premium properties left in McAllen's premier industrial district. The Valley is America's hidden gem.
            </p>

            <div className="grid grid-cols-2 gap-3 mb-6">
              <div className="bg-card border border-border rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-gold">3%</div>
                <div className="text-xs text-muted-foreground">Market Vacancy</div>
              </div>
              <div className="bg-card border border-border rounded-xl p-4 text-center">
                <div className="text-xl font-bold text-emerald-400">$12.24M</div>
                <div className="text-xs text-muted-foreground">Total Portfolio</div>
              </div>
            </div>
            
            <div className="bg-card border border-border rounded-xl p-4 mb-6">
              <div className="flex justify-between items-center">
                <div>
                  <div className="text-xl font-bold">167.2 Acres</div>
                  <div className="text-xs text-muted-foreground">Prime Industrial Land</div>
                </div>
                <div className="flex space-x-1">
                  <div className="w-2 h-6 bg-gold rounded"></div>
                  <div className="w-2 h-4 bg-gold/60 rounded"></div>
                  <div className="w-2 h-5 bg-gold/80 rounded"></div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <Button size="lg" className="w-full bg-gold hover:bg-gold/90 text-black font-semibold">
                View Analysis
              </Button>
              <Button size="lg" variant="outline" className="w-full">
                <Download className="mr-2 h-4 w-4" />
                Download Summary
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Virtual Tour Section */}
      <section id="virtual-tour" className="py-12 sm:py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">Virtual Property Tour</h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience our premium industrial properties through immersive virtual tours
            </p>
          </div>
          
          <VideoCarousel />
        </div>
      </section>

      <ExecutiveSummary />
      <MarketAnalysis />
      <LandParcels />
      <FinancialProjections />
      <LocationAdvantages />
      <Demographics />
      <StrategicPosition />
      <RiskAnalysis />
      <InvestmentProcess />
      <MarketDataSources />
      <InvestmentTabs />
      <PropertySpecifications />
      <IndividualLots />
      <VideoCarousel />
      <ProfessionalAnalysis />

      {/* Floating Bottom Navigation - Mobile Only */}
      <FloatingBottomNav 
        onMenuClick={() => setIsMobileNavOpen(true)} 
        onChatClick={() => setIsMobileChatOpen(!isMobileChatOpen)}
        isChatOpen={isMobileChatOpen}
      />
      
      {/* Mobile Chat Container */}
      {isMobileChatOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div 
            className="absolute inset-0 bg-black/50" 
            onClick={() => setIsMobileChatOpen(false)}
          />
          <div className="absolute bottom-20 left-4 right-4 bg-background border border-border rounded-t-2xl shadow-2xl animate-slide-in-right">
            <div className="flex items-center justify-between p-4 border-b border-border">
              <h3 className="font-semibold text-foreground">Chat with Juan</h3>
              <button
                onClick={() => setIsMobileChatOpen(false)}
                className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-accent transition-colors"
              >
                ×
              </button>
            </div>
            <div 
              className="h-96 p-4" 
              id="mobile-chat-container"
            >
              {/* Chat widget will appear here when mobile chat is open */}
            </div>
          </div>
        </div>
      )}

      {/* Single ElevenLabs chatbot instance - positioned based on mobile state */}
      <div 
        id="elevenlabs-chat-container"
        className={
          isMobileChatOpen 
            ? "block" 
            : "md:block hidden"
        }
        style={
          isMobileChatOpen 
            ? {} 
            : { position: 'absolute', left: '-9999px' }
        }
        dangerouslySetInnerHTML={{
          __html: '<elevenlabs-convai agent-id="agent_8801k4w0v35xepfbwgksee62qets"></elevenlabs-convai>'
        }} 
      />
    </div>
  );
};

export default Index;