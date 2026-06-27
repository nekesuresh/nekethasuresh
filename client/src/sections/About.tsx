import React from 'react';
import { motion } from 'framer-motion';
import { Card } from "@/components/ui/card";
import { Target, Brain, Rocket, Users } from 'lucide-react';

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
                    <Target className="h-5 w-5 text-primary mb-1 mx-auto" />
                    <p className="text-xs text-white/70">Technical PM</p>
                  </div>
                  <div className="tech-card p-3 rounded-md text-center">
                    <Brain className="h-5 w-5 text-primary mb-1 mx-auto" />
                    <p className="text-xs text-white/70">AI Products</p>
                  </div>
                  <div className="tech-card p-3 rounded-md text-center">
                    <Rocket className="h-5 w-5 text-primary mb-1 mx-auto" />
                    <p className="text-xs text-white/70">Zero to One</p>
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
                    Technical Product Manager with three years owning AI products end to end, engineer by background. I work close to users and to ML and backend teams alike: reading the design docs, defining the eval metrics, and making the quality, latency, cost, and reliability trade-offs that turn nondeterministic model behavior into product users trust.
                  </p>
                  <p className="text-white/80">
                    Track record taking AI from zero to one in real-world settings: a clinical recommendation tool used daily by 150+ clinicians, a multi-agent LLM system that cut review time ~45%, and a platform taken from broken codebase to 250 users in five weeks.
                  </p>
                  <p className="text-white/80">
                    I'm currently open to: <span className="text-primary font-medium">full-time PM roles</span> · <span className="text-primary font-medium">AI product & consulting engagements</span>.
                  </p>
                  
                  <div className="pt-4">
                    <h3 className="futuristic-subtitle text-xl font-semibold mb-4">Key Strengths</h3>
                    <ul className="space-y-2 list-disc list-inside">
                      <li className="text-white/80">
                        <span className="text-primary">AI Product Ownership</span> — eval frameworks, human-in-the-loop, zero-to-one shipping
                      </li>
                      <li className="text-white/80">
                        <span className="text-primary">Engineering Depth</span> — reads design docs, writes specs, ships code when needed
                      </li>
                      <li className="text-white/80">
                        <span className="text-primary">User Research & Iteration</span> — A/B testing, usage analytics, clinician & stakeholder interviews
                      </li>
                      <li className="text-white/80">
                        <span className="text-primary">Cross-functional Leadership</span> — influence without authority, mentoring, founding-team velocity
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
