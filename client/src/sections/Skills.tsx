import { Card, CardContent } from "@/components/ui/card";
import { Code, BarChart2, Settings } from "lucide-react";
import { resumeData } from "@/data/resumeData";

const Skills = () => {
  const { skills } = resumeData;
  
  return (
    <section className="mb-12">
      <Card className="bg-black/40 border border-white/10 shadow-lg">
        <CardContent className="p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Skills & Technologies</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-black/60 border border-white/10 rounded-lg p-5 hover:border-primary/30 transition-all duration-300">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                <Code className="h-5 w-5 text-primary mr-2" />
                Programming & Web
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.programming.map((skill, index) => (
                  <span 
                    key={index}
                    className="inline-block px-3 py-1.5 rounded-full bg-primary/10 text-white/90 text-xs font-medium hover:bg-primary/20 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="bg-black/60 border border-white/10 rounded-lg p-5 hover:border-primary/30 transition-all duration-300">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                <BarChart2 className="h-5 w-5 text-green-500 mr-2" />
                Data Management & Analysis
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.data.map((skill, index) => (
                  <span 
                    key={index}
                    className="inline-block px-3 py-1.5 rounded-full bg-green-500/10 text-white/90 text-xs font-medium hover:bg-green-500/20 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="bg-black/60 border border-white/10 rounded-lg p-5 hover:border-primary/30 transition-all duration-300">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                <Settings className="h-5 w-5 text-purple-500 mr-2" />
                Tools & Methodologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.tools.map((skill, index) => (
                  <span 
                    key={index}
                    className="inline-block px-3 py-1.5 rounded-full bg-purple-500/10 text-white/90 text-xs font-medium hover:bg-purple-500/20 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default Skills;
