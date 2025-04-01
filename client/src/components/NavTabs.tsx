import React from 'react';
import { motion } from 'framer-motion';

type Tab = 'about' | 'experience' | 'projects' | 'education' | 'skills';

interface NavTabsProps {
  activeTab: Tab;
  onTabChange: (tab: Tab) => void;
}

const NavTabs = ({ activeTab, onTabChange }: NavTabsProps) => {
  const tabs: { id: Tab; label: string }[] = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
  ];

  return (
    <div className="w-full bg-black/70 backdrop-blur-lg sticky top-0 z-10 border-b border-primary/10">
      <div className="max-w-6xl mx-auto px-4 py-1">
        <div className="flex items-center justify-center md:justify-start space-x-1 md:space-x-0">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`
                px-6 py-3 relative group transition-all duration-300
                ${activeTab === tab.id 
                  ? 'text-white' 
                  : 'text-white/60 hover:text-white/90'}
              `}
              onClick={() => onTabChange(tab.id)}
            >
              {/* Tab text */}
              <span className="relative z-10 font-medium futuristic-subtitle text-sm md:text-base">
                {tab.label}
              </span>
              
              {/* Active tab indicator */}
              {activeTab === tab.id && (
                <motion.div 
                  className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-primary/50 via-primary to-primary/50"
                  layoutId="activeTab"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
              
              {/* Inactive tab hover effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-primary/20 transition-opacity duration-300"></div>
              
              {/* Top highlight line */}
              <div className={`absolute top-0 left-1/2 right-1/2 h-[2px] bg-primary/30 transition-all duration-300 ${activeTab === tab.id ? 'left-0 right-0' : 'group-hover:left-1/4 group-hover:right-1/4'}`}></div>
            </button>
          ))}
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute left-0 right-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
      <div className="absolute left-0 top-0 w-20 h-[1px] bg-gradient-to-r from-primary/30 to-transparent"></div>
      <div className="absolute right-0 top-0 w-20 h-[1px] bg-gradient-to-l from-primary/30 to-transparent"></div>
    </div>
  );
};

export default NavTabs;
