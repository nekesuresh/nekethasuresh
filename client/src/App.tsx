import { useState, useEffect } from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedDots from "@/components/AnimatedDots";
import NavTabs from "@/components/NavTabs";
import Footer from "@/components/Footer";
import About from "@/sections/About";
import Experience from "@/sections/Experience";
import Projects from "@/sections/Projects";
import Education from "@/sections/Education";
import Skills from "@/sections/Skills";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import profileImg from "@assets/Untitled design.png";

// Tab types for navigation
type Tab = 'about' | 'experience' | 'projects' | 'education' | 'skills';

function App() {
  const [activeTab, setActiveTab] = useState<Tab>('about');
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Simulate loading time for a more dramatic entrance effect
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);
  
  // Handle tab change
  const handleTabChange = (tab: Tab) => {
    setActiveTab(tab);
  };

  // Render the active section based on tab
  const renderActiveSection = () => {
    switch (activeTab) {
      case 'about':
        return <About />;
      case 'skills':
        return <Skills />;
      case 'experience':
        return <Experience />;
      case 'projects':
        return <Projects />;
      case 'education':
        return <Education />;
      default:
        return <About />;
    }
  };

  return (
    <QueryClientProvider client={queryClient}>
      <div className="relative min-h-screen bg-black text-white overflow-x-hidden">
        {/* Animated Dots Background */}
        <AnimatedDots />
        
        {/* Loading Screen */}
        <AnimatePresence>
          {loading && (
            <motion.div 
              className="fixed inset-0 z-50 flex items-center justify-center bg-black"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 1.2, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <h1 className="futuristic-title text-4xl mb-4">Neketha Suresh</h1>
                <div className="flex space-x-2 justify-center">
                  <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                  <div className="w-3 h-3 bg-primary rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                  <div className="w-3 h-3 bg-primary rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Main Content */}
        <motion.div 
          className="relative z-10 flex flex-col min-h-screen"
          initial={{ opacity: 0 }}
          animate={{ opacity: loading ? 0 : 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {/* Hero Section with Profile */}
          <section className="relative z-10 h-[100vh] flex flex-col items-center justify-center px-4 py-0">
            <div className="max-w-6xl mx-auto text-center">
              {/* Profile Image */}
              <motion.div 
                className="mb-5"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <div className="relative inline-block">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/50 via-purple-500/50 to-primary/50 blur-md"></div>
                  <Avatar className="w-48 h-48 md:w-56 md:h-56 relative profile-image">
                    <AvatarImage src={profileImg} alt="Neketha Suresh" className="object-cover" />
                    <AvatarFallback className="bg-primary/20 text-white">NS</AvatarFallback>
                  </Avatar>
                </div>
              </motion.div>
              
              {/* Name and Title */}
              <motion.h1 
                className="futuristic-title text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                Neketha Suresh
              </motion.h1>
              
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                <p className="futuristic-subtitle text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-2">
                  MSCS Student & AI Enthusiast
                </p>
                <p className="text-md text-gray-400 max-w-2xl mx-auto">
                  Charlotte, North Carolina
                </p>
              </motion.div>
              
              {/* Social links */}
              <motion.div 
                className="mt-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.9 }}
              >
                <div className="flex justify-center space-x-4 flex-wrap">
                  <a 
                    href="https://github.com/nekesuresh" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="tech-card px-4 py-2 rounded-md neon-border m-1"
                  >
                    GitHub
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/nekethasuresh/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="tech-card px-4 py-2 rounded-md neon-border m-1"
                  >
                    LinkedIn
                  </a>
                  <a 
                    href="https://devpost.com/sureshneketha?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="tech-card px-4 py-2 rounded-md neon-border m-1"
                  >
                    DevPost
                  </a>
                  <a 
                    href="https://drive.google.com/file/d/1W42YG4UpwcYTGDhQTKGhrmz8SWF8hyTY/view?usp=sharing" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="tech-card px-4 py-2 rounded-md neon-border m-1"
                  >
                    Resume
                  </a>
                </div>
              </motion.div>
            </div>
          </section>
          
          {/* Navigation Tabs - Sticky when scrolling */}
          <div className="sticky top-0 z-20 bg-black flex justify-center">
            <NavTabs activeTab={activeTab} onTabChange={handleTabChange} />
          </div>
          
          {/* Content Section */}
          <main className="flex-grow max-w-6xl mx-auto px-4 py-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {renderActiveSection()}
              </motion.div>
            </AnimatePresence>
          </main>
          
          <Footer />
        </motion.div>
      </div>
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;