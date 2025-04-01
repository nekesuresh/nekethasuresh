import React from 'react';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import profileImg from "@assets/WhatsApp Image 2025-03-29 at 19.17.03_b83321a6.jpg";

const Header = () => {
  return (
    <header className="relative z-10 py-8 px-4 md:px-8 animate-fade-in">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Profile Section */}
          <div className="flex flex-col md:flex-row items-center gap-6">
            <Avatar className="w-28 h-28 profile-image animate-fade-in">
              <AvatarImage src={profileImg} alt="Neketha Suresh" />
              <AvatarFallback className="bg-primary/20 text-white">NS</AvatarFallback>
            </Avatar>
            
            <div className="text-center md:text-left">
              <h1 className="futuristic-title text-3xl md:text-4xl lg:text-5xl">
                Neketha Suresh
              </h1>
              <p className="futuristic-subtitle text-base md:text-lg text-gray-300 mt-2">
                Software Engineer & Developer
              </p>
              <div className="flex items-center justify-center md:justify-start gap-4 mt-2">
                <div className="flex items-center gap-1 text-gray-400 text-sm">
                  <span className="inline-block w-2 h-2 rounded-full bg-green-400"></span>
                  Charlotte, North Carolina
                </div>
                <div className="text-gray-400 text-sm">•</div>
                <div className="text-gray-400 text-sm">
                  <a href="mailto:neketha@example.com" className="hover:text-primary transition-colors">
                    neketha@example.com
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Social Links / CTA */}
          <div className="flex gap-3">
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="tech-card px-4 py-2 rounded-md neon-border"
            >
              LinkedIn
            </a>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="tech-card px-4 py-2 rounded-md neon-border"
            >
              GitHub
            </a>
            <a 
              href="#contact" 
              className="bg-primary/90 text-white px-4 py-2 rounded-md neon-border"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;