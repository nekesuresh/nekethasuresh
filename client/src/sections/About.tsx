import React from 'react';
import { motion } from 'framer-motion';
import { Card } from "@/components/ui/card";
import { Layers, Brain, Rocket, Users } from 'lucide-react';

const About = () => {
  return (
    <section className="mb-12 animate-fade-in">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Card className="tech-card border-primary/10 shadow-lg overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="grid-background absolute inset-0"></div>
          </div>
          
          <div className="relative p-6 md:p-8">
            <h2 className="futuristic-title text-2xl md:text-3xl font-bold mb-6 inline-block">
              About Me
              <div className="h-1 bg-gradient-to-r from-transparent via-primary to-transparent mt-1"></div>
            </h2>
            
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Quick stats */}
              <div className="lg:w-1/4 flex flex-col items-center lg:items-start">
                <div className="grid grid-cols-2 gap-3 w-full max-w-xs mb-6">
                  <div className="tech-card p-3 rounded-md text-center">
                    <Layers className="h-5 w-5 text-primary mb-1 mx-auto" />
                    <p className="text-xs text-white/70">Full Stack</p>
                  </div>
                  <div className="tech-card p-3 rounded-md text-center">
                    <Brain className="h-5 w-5 text-primary mb-1 mx-auto" />
                    <p className="text-xs text-white/70">AI/ML</p>
                  </div>
                  <div className="tech-card p-3 rounded-md text-center">
                    <Rocket className="h-5 w-5 text-primary mb-1 mx-auto" />
                    <p className="text-xs text-white/70">Founding Eng</p>
                  </div>
                  <div className="tech-card p-3 rounded-md text-center">
                    <Users className="h-5 w-5 text-primary mb-1 mx-auto" />
                    <p className="text-xs text-white/70">MS CS</p>
                  </div>
                </div>
              </div>
              
              {/* About Content */}
              <div className="lg:w-3/4">                
                <div className="space-y-4 text-white/80">
                  <p className="text-white/80">
                    Full stack engineer who has often been the early engineer on small teams — the person who builds the product and the pipeline that ships it. Over three years I've taken clinical and B2B tools from rough prototype to production, owning React and FastAPI end to end, standing up the containerized CI/CD that deploys them, and turning real user behavior into the signal that makes the product better.
                  </p>
                  <p className="text-white/80">
                    Drawn to the developer experience work that makes a whole team faster: design systems, review tooling, and AI coding assistants. I learn a new stack by shipping on it.
                  </p>
                  <p className="text-white/80">
                    I'm currently open to: <span className="text-primary font-medium">full-time engineering roles</span> · <span className="text-primary font-medium">independent contract & freelance projects</span>.
                  </p>
                  
                  <div className="pt-4">
                    <h3 className="futuristic-subtitle text-xl font-semibold mb-4">Key Strengths</h3>
                    <ul className="space-y-2 list-disc list-inside">
                      <li className="text-white/80">
                        <span className="text-primary">Full Stack Development</span> — React, Next.js, FastAPI, PostgreSQL, end-to-end ownership
                      </li>
                      <li className="text-white/80">
                        <span className="text-primary">Applied AI</span> — LLM integration, RAG, agentic workflows, AI coding assistants
                      </li>
                      <li className="text-white/80">
                        <span className="text-primary">Production Shipping</span> — containerized CI/CD, Docker, Kubernetes, AWS EKS
                      </li>
                      <li className="text-white/80">
                        <span className="text-primary">Early-team Engineering</span> — prototype to production, design systems, mentoring, code quality
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </motion.div>
    </section>
  );
};

export default About;
