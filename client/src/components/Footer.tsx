import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="relative z-10 py-8 px-4 md:px-8 mt-16 border-t border-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 gap-8">
          {/* Contact */}
          <div className="text-center">
            <h3 className="futuristic-subtitle text-lg font-medium mb-4">Get In Touch</h3>
            <p className="text-gray-400 text-sm mb-2">
              Feel free to reach out to discuss potential opportunities or collaborations.
            </p>
            <a 
              href="mailto:sureshneketha@gmail.com"
              className="inline-block text-primary hover:text-primary/80 transition-colors text-sm"
            >
              sureshneketha@gmail.com
            </a>
            <div className="mt-2 flex justify-center">
              <a 
                href="tel:+17042226867"
                className="inline-block text-primary hover:text-primary/80 transition-colors text-sm"
              >
                +1 (704) 222-6867
              </a>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-gray-800 text-center text-gray-500 text-xs">
          <div className="grid-background h-px w-full my-4"></div>
          <p>© {currentYear} Neketha Suresh. All rights reserved.</p>
          <p className="mt-1">
            <span className="inline-block w-2 h-2 rounded-full bg-primary animate-pulse mr-2"></span>
            Built with React and modern web technologies
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;