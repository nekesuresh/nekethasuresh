import React from 'react';
import { motion } from 'framer-motion';
import { Card } from "@/components/ui/card";
import { resumeData } from "@/data/resumeData";
import { MapPin, Mail, Phone, AtSign, Code, Star, Book, LineChart } from 'lucide-react';

const About = () => {
  const { contactInfo } = resumeData;
  
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
                    <Code className="h-5 w-5 text-primary mb-1 mx-auto" />
                    <p className="text-xs text-white/70">Developer</p>
                  </div>
                  <div className="tech-card p-3 rounded-md text-center">
                    <Star className="h-5 w-5 text-primary mb-1 mx-auto" />
                    <p className="text-xs text-white/70">AI/ML</p>
                  </div>
                  <div className="tech-card p-3 rounded-md text-center">
                    <LineChart className="h-5 w-5 text-primary mb-1 mx-auto" />
                    <p className="text-xs text-white/70">Analyst</p>
                  </div>
                  <div className="tech-card p-3 rounded-md text-center">
                    <Book className="h-5 w-5 text-primary mb-1 mx-auto" />
                    <p className="text-xs text-white/70">MS CS</p>
                  </div>
                </div>
              </div>
              
              {/* About Content */}
              <div className="lg:w-3/4">                
                <div className="space-y-4 text-white/80">
                  <p className="text-white/80">
                    I'm a Computer Science graduate student at the University of North Carolina at Charlotte with a passion for developing intelligent solutions that solve real-world problems. With experience in machine learning, data analysis, and full-stack development, I bring a comprehensive approach to software engineering challenges.
                  </p>
                  <p className="text-white/80">
                    My professional journey includes multiple internships where I've applied machine learning techniques to enhance business outcomes, developed responsive web applications, and engineered data-driven solutions that produce tangible results.
                  </p>
                  <p className="text-white/80">
                    I'm constantly exploring new technologies and frameworks to stay at the cutting edge of software development, with a particular interest in artificial intelligence and its applications across various domains.
                  </p>
                  
                  <div className="pt-4">
                    <h3 className="futuristic-subtitle text-xl font-semibold mb-4">Research Interests</h3>
                    <ul className="space-y-2 list-disc list-inside">
                      <li className="text-white/80">
                        <span className="text-primary">Machine Learning</span> - Developing models that can learn from data and make intelligent decisions
                      </li>
                      <li className="text-white/80">
                        <span className="text-primary">Natural Language Processing</span> - Creating systems that can understand and generate human language
                      </li>
                      <li className="text-white/80">
                        <span className="text-primary">Computer Vision</span> - Building algorithms that can interpret and analyze visual data
                      </li>
                      <li className="text-white/80">
                        <span className="text-primary">Cloud Computing</span> - Leveraging distributed systems for scalable and efficient solutions
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
