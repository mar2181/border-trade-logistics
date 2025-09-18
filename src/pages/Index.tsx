import { useState, useEffect } from "react";
import { Building, MapPin, TrendingUp, DollarSign, Phone, Download, BarChart3, Calendar, Users, TrendingDown, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
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
import InvestmentProcess from "@/components/InvestmentProcess";

import FloatingBottomNav from "@/components/FloatingBottomNav";
import MobileNavigation from "@/components/MobileNavigation";
import VideoCarousel from "@/components/VideoCarousel";
import InvestmentTabs from "@/components/InvestmentTabs";
import PropertySpecifications from "@/components/PropertySpecifications";
import IndividualLots from "@/components/IndividualLots";
import ProfessionalAnalysis from "@/components/ProfessionalAnalysis";
const Index = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [isMobileChatOpen, setIsMobileChatOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();

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
      {/* Navigation - Simplified Mobile, Full Desktop */}
<nav className={`fixed top-4 left-4 right-4 md:top-0 md:left-0 md:right-0 z-50 transition-all duration-300
                      ${isScrolled 
                        ? 'md:bg-black/95 md:backdrop-blur-md md:border-b md:border-white/10' 
                        : 'md:bg-transparent'
                      }
                      sm:bg-background/95 sm:backdrop-blur-md sm:border sm:border-border/50 sm:rounded-2xl sm:shadow-lg`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <img src="/lovable-uploads/86c0cf99-26fd-48bd-9d8a-d0c791fcbf83.png" alt="RE/MAX Commercial" className="h-6 sm:h-8" />
              <Building className="w-5 h-5 sm:w-6 sm:h-6 text-gold md:hidden" />
            </div>
            
            {/* Desktop Navigation Items */}
            <div className="hidden md:flex items-center space-x-6">
              <a href="#overview" className="text-muted-foreground hover:text-gold transition-colors">{t('nav.overview')}</a>
              <a href="#analysis" className="text-muted-foreground hover:text-gold transition-colors">{t('nav.marketAnalysis')}</a>
              <a href="#land-parcels" className="text-muted-foreground hover:text-gold transition-colors">{t('nav.landParcels')}</a>
              <a href="#virtual-tour" className="text-muted-foreground hover:text-gold transition-colors">{t('nav.virtualTour')}</a>
              <a href="#financials" className="text-muted-foreground hover:text-gold transition-colors">{t('nav.financials')}</a>
              <a href="#properties" className="text-muted-foreground hover:text-gold transition-colors">{t('nav.properties')}</a>
              <a href="/calculator" className="text-muted-foreground hover:text-gold transition-colors">{t('nav.calculator')}</a>
            </div>

            {/* Desktop Contact & Language Toggle */}
            <div className="hidden md:flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Phone className="w-4 h-4" />
                <span>(956) 522-1481</span>
              </div>
              
              {/* Language Toggle */}
              <div className="flex items-center bg-background/10 backdrop-blur-sm rounded-full border border-white/20 overflow-hidden">
                <button 
                  onClick={() => setLanguage('en')}
                  className={`px-3 py-1.5 text-xs font-medium transition-colors ${
                    language === 'en' 
                      ? 'text-white bg-gold/20' 
                      : 'text-white/70 hover:text-white hover:bg-white/10'
                  }`}
                >
                  EN
                </button>
                <button 
                  onClick={() => setLanguage('es')}
                  className={`px-3 py-1.5 text-xs font-medium transition-colors ${
                    language === 'es' 
                      ? 'text-white bg-gold/20' 
                      : 'text-white/70 hover:text-white hover:bg-white/10'
                  }`}
                >
                  ES
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
                <span>{t('hero.badge')}</span>
              </div>
              
              <div className="space-y-4 sm:space-y-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
                  {t('hero.title')}
                </h1>
                <p className="text-lg md:text-xl text-gray-200 max-w-2xl leading-relaxed">
                  {t('hero.description')}
                </p>
              </div>

              <div className="flex items-center space-x-6 text-gray-200 text-sm">
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-gold mr-2 flex-shrink-0" />
                  <span>{t('hero.location')}</span>
                </div>
              </div>

              <div className="grid grid-cols-4 gap-4">
                <div className="text-center bg-black/20 rounded-lg p-3 backdrop-blur-sm">
                  <div className="text-xl lg:text-2xl font-bold text-gold">3%</div>
                  <div className="text-xs text-gray-300">{t('hero.marketVacancy')}</div>
                </div>
                <div className="text-center bg-black/20 rounded-lg p-3 backdrop-blur-sm">
                  <div className="text-xl lg:text-2xl font-bold text-accent-emerald">60%</div>
                  <div className="text-xs text-gray-300">{t('hero.produceImports')}</div>
                </div>
                <div className="text-center bg-black/20 rounded-lg p-3 backdrop-blur-sm">
                  <div className="text-xl lg:text-2xl font-bold text-accent-sapphire">$265-300K</div>
                  <div className="text-xs text-gray-300">{t('hero.pricing')}</div>
                </div>
                <div className="text-center bg-black/20 rounded-lg p-3 backdrop-blur-sm">
                  <div className="text-xl lg:text-2xl font-bold text-accent-amber">8 Properties</div>
                  <div className="text-xs text-gray-300">{t('hero.properties')}</div>
                </div>
              </div>

              <div className="flex flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-gold to-gold-dark text-primary-foreground font-semibold hover:shadow-lg hover:shadow-gold/25 transition-all duration-300 min-h-[48px]">
                  <BarChart3 className="h-5 w-5 mr-2" />
                  <span>{t('hero.viewAnalysis')}</span>
                </Button>
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm transition-all duration-300 min-h-[48px]">
                  <Download className="h-5 w-5 mr-2" />
                  <span>{t('executiveSummary.title')}</span>
                </Button>
              </div>
            </div>

            {/* Right Card Overlay */}
            <div className="relative lg:justify-self-end order-1 lg:order-2">
              <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-white/20 overflow-hidden max-w-md mx-auto">
                {/* ... keep existing card content ... */}
                <div className="relative h-48 overflow-hidden">
                  <img src="/lovable-uploads/d6effb3b-46b7-41a2-bcf6-897a9536d8f7.png" alt="MCC Industrial Park at sunset" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white text-xl font-bold">Land Investment</h3>
                    <p className="text-gray-200 text-sm">Shovel-Ready Industrial Parcels</p>
                  </div>
                </div>
                
                <div className="p-6 space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-accent-emerald">3%</div>
                      <div className="text-xs text-gray-900">Annual Land Appreciation</div>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <div className="text-2xl font-bold text-accent-sapphire">$13.25M</div>
                      <div className="text-xs text-gray-900">Total Land Value</div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground text-sm">Land Portfolio:</span>
                      <span className="font-bold text-primary text-sm">$13.25M Total</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground text-sm">Total Acres:</span>
                      <span className="font-bold text-primary text-sm">43.17 Acres</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground text-sm">Buildable SF:</span>
                      <span className="font-bold text-accent-emerald text-sm">702,820 SF</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-200">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <img src="/lovable-uploads/6f3fa122-bcae-43f0-bdac-141ce2b74e76.png" alt="Investment Agent" className="w-10 h-10 rounded-full object-cover" />
                        <div>
                          <div className="text-sm font-semibold text-foreground">Investment Specialist</div>
                          <div className="text-xs text-muted-foreground">RE/MAX Commercial</div>
                        </div>
                      </div>
                      <img src="/lovable-uploads/a8412600-74ab-454d-ab80-6da0e46ef31b.png" alt="RE/MAX" className="w-8 h-8" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Layout - Image + Card Template Structure */}
        <div className="md:hidden">
          {/* Hero Image Section - 40% of viewport height */}
          <div className="relative h-[40vh] mt-24 px-4">
            <img 
              src="/lovable-uploads/d6effb3b-46b7-41a2-bcf6-897a9536d8f7.png" 
              alt="MCC Industrial Park at sunset" 
              className="w-full h-full object-cover rounded-2xl" 
            />
          </div>

          {/* Content Card Below Image */}
          <div className="px-6 py-8 bg-background">
            <div className="bg-card rounded-2xl shadow-lg border border-border p-6 space-y-6">
              {/* Status Badge */}
              <div className="inline-flex items-center px-4 py-2 bg-gold/10 text-gold rounded-full text-sm font-medium border border-gold/20">
                <TrendingDown className="h-4 w-4 mr-2" />
                <span>{t('hero.badge')}</span>
              </div>
              
              {/* Main Heading */}
              <div className="space-y-3">
                <h1 className="text-3xl font-bold text-foreground leading-tight">
                  {t('hero.title')}
                </h1>
                
                {/* Subtitle */}
                <p className="text-base text-muted-foreground leading-relaxed">
                  {t('hero.description')}
                </p>
              </div>
              
              {/* Key Metrics - 2x2 Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center bg-muted rounded-xl p-4">
                  <div className="text-2xl font-bold text-gold">8-12%</div>
                  <div className="text-xs text-muted-foreground">Annual ROI</div>
                </div>
                <div className="text-center bg-muted rounded-xl p-4">
                  <div className="text-2xl font-bold text-accent-emerald">43.17</div>
                  <div className="text-xs text-muted-foreground">Total Acres</div>
                </div>
                <div className="text-center bg-muted rounded-xl p-4">
                  <div className="text-2xl font-bold text-accent-sapphire">$13.25M</div>
                  <div className="text-xs text-muted-foreground">{t('executiveSummary.portfolioValue')}</div>
                </div>
                <div className="text-center bg-muted rounded-xl p-4">
                  <div className="text-2xl font-bold text-accent-amber">8 Only</div>
                  <div className="text-xs text-muted-foreground">{t('hero.properties')}</div>
                </div>
              </div>

              {/* Location Info */}
              <div className="flex items-center justify-center text-muted-foreground text-sm pt-2">
                <MapPin className="h-4 w-4 text-gold mr-2" />
                <span>{t('hero.location')}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Virtual Tour Video Section */}
      <section id="virtual-tour" className="py-16 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              {t('virtualTour.title')}
            </h2>
            <p className="text-lg text-muted-foreground">
              by Juan Elizondo Re Max/ Elite
            </p>
          </div>
          
          <div className="relative">
            <video 
              controls 
              className="w-full h-auto rounded-2xl shadow-2xl border border-border"
              poster="/lovable-uploads/d6effb3b-46b7-41a2-bcf6-897a9536d8f7.png"
            >
              <source 
                src="https://svgsbaahxiaeljmfykzp.supabase.co/storage/v1/object/public/mcc_industrialpark/Untitled%20video%20-%20Made%20with%20Clipchamp%20(7).mp4" 
                type="video/mp4" 
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      <ExecutiveSummary />
      <MarketAnalysis />
      <LandParcels />
      <IndividualLots />
      <FinancialProjections />
      <InvestmentTabs />
      <LocationAdvantages />
      <StrategicPosition />
      <PropertySpecifications />
      <Demographics />
      <VideoCarousel />
      <ProfessionalAnalysis />
      <RiskAnalysis />
      <InvestmentProcess />
      
      
      {/* Mobile Navigation Overlay */}
      {isMobileNavOpen && (
        <MobileNavigation 
          onNavigate={handleMobileNavigation} 
          onClose={() => setIsMobileNavOpen(false)}
        />
      )}

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