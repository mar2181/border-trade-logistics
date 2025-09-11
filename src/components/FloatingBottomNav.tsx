import React from 'react';
import { Home, BarChart3, MessageCircle, Calculator, Menu } from 'lucide-react';
import { Link } from 'react-router-dom';

interface FloatingBottomNavProps {
  onMenuClick: () => void;
  onChatClick: () => void;
  isChatOpen: boolean;
}

const FloatingBottomNav: React.FC<FloatingBottomNavProps> = ({ onMenuClick, onChatClick, isChatOpen }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToAnalysis = () => {
    document.getElementById('analysis')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 md:hidden">
      <div className="bg-background/95 backdrop-blur-md border border-border rounded-2xl shadow-2xl">
        <div className="flex items-center justify-around py-3 px-2">
          <button
            onClick={scrollToTop}
            className="flex flex-col items-center space-y-1 px-3 py-2 rounded-xl hover:bg-accent/50 transition-colors"
          >
            <Home className="w-5 h-5 text-muted-foreground" />
            <span className="text-xs text-muted-foreground">Home</span>
          </button>
          
          <button
            onClick={scrollToAnalysis}
            className="flex flex-col items-center space-y-1 px-3 py-2 rounded-xl hover:bg-accent/50 transition-colors"
          >
            <BarChart3 className="w-5 h-5 text-muted-foreground" />
            <span className="text-xs text-muted-foreground">Analysis</span>
          </button>
          
          <button
            onClick={onChatClick}
            className={`flex flex-col items-center space-y-1 px-3 py-2 rounded-xl transition-colors ${
              isChatOpen 
                ? 'bg-accent text-accent-foreground' 
                : 'hover:bg-accent/50'
            }`}
          >
            <MessageCircle className={`w-5 h-5 ${isChatOpen ? 'text-accent-foreground' : 'text-muted-foreground'}`} />
            <span className={`text-xs ${isChatOpen ? 'text-accent-foreground' : 'text-muted-foreground'}`}>Chat</span>
          </button>
          
          <Link
            to="/calculator"
            className="flex flex-col items-center space-y-1 px-3 py-2 rounded-xl hover:bg-accent/50 transition-colors"
          >
            <Calculator className="w-5 h-5 text-muted-foreground" />
            <span className="text-xs text-muted-foreground">Calculator</span>
          </Link>
          
          <button
            onClick={onMenuClick}
            className="flex flex-col items-center space-y-1 px-3 py-2 rounded-xl hover:bg-accent/50 transition-colors"
          >
            <Menu className="w-5 h-5 text-muted-foreground" />
            <span className="text-xs text-muted-foreground">Menu</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FloatingBottomNav;