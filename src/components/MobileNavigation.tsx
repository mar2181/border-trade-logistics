import React, { useState } from 'react';
import { Menu, X, Phone, Building } from 'lucide-react';
import { Link } from 'react-router-dom';

interface MobileNavigationProps {
  onNavigate?: (id: string) => void;
  onClose?: () => void;
}

const MobileNavigation: React.FC<MobileNavigationProps> = ({ onNavigate, onClose }) => {
  const navItems = [
    { id: 'overview', label: 'Overview', href: '#overview' },
    { id: 'analysis', label: 'Market Analysis', href: '#analysis' },
    { id: 'dry-warehouse', label: 'Dry Warehouse', action: 'dry' },
    { id: 'refrigerated', label: 'Refrigerated', action: 'refrigerated' },
    { id: 'financials', label: 'Financials', href: '#financials' },
    { id: 'properties', label: 'Properties', href: '#properties' },
    { id: 'calculator', label: 'Calculator', href: '/calculator', isLink: true },
  ];

  const handleNavClick = (item: any) => {
    if (item.isLink) {
      onClose?.();
      return;
    }
    
    if (item.action) {
      onNavigate?.(item.action);
    } else if (item.href && item.href.startsWith('#')) {
      document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth' });
    }
    onClose?.();
  };

  return (
    <>
      {/* Mobile Menu Overlay */}
      <div 
        className="fixed inset-0 bg-black/50 z-40 md:hidden"
        onClick={() => onClose?.()}
      />
      <div className="fixed top-0 right-0 w-80 max-w-[85vw] h-full bg-background border-l border-border z-50 md:hidden">
        <div className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-2">
              <Building className="w-5 h-5 text-gold" />
              <span className="font-semibold text-foreground">McAllen Warehouse</span>
            </div>
            <button
              onClick={() => onClose?.()}
              className="text-muted-foreground hover:text-foreground"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation Items */}
          <nav className="space-y-2">
            {navItems.map((item) => (
              item.isLink ? (
                <Link
                  key={item.id}
                  to={item.href}
                  className="block py-3 px-4 text-muted-foreground hover:text-gold hover:bg-accent/50 rounded-lg transition-colors"
                  onClick={() => onClose?.()}
                >
                  {item.label}
                </Link>
              ) : (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item)}
                  className="w-full text-left py-3 px-4 text-muted-foreground hover:text-gold hover:bg-accent/50 rounded-lg transition-colors"
                >
                  {item.label}
                </button>
              )
            ))}
          </nav>

          {/* Contact Info */}
          <div className="mt-8 pt-6 border-t border-border">
            <a 
              href="tel:(956)522-1481"
              className="flex items-center space-x-3 py-3 px-4 text-muted-foreground hover:text-gold hover:bg-accent/50 rounded-lg transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span className="font-medium">(956) 522-1481</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileNavigation;