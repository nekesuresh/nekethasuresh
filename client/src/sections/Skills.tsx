import { Card, CardContent } from "@/components/ui/card";
import { Brain, Target, Code, Users } from "lucide-react";
import { resumeData } from "@/data/resumeData";

const Skills = () => {
  const { skills } = resumeData;
  
  const categories = [
    {
      label: "AI Systems & Evaluation",
      icon: <Brain className="h-5 w-5 text-primary mr-2" />,
      items: skills.aiSystems,
      pill: "bg-primary/10 text-white/90 hover:bg-primary/20"
    },
    {
      label: "Product",
      icon: <Target className="h-5 w-5 text-green-500 mr-2" />,
      items: skills.product,
      pill: "bg-green-500/10 text-white/90 hover:bg-green-500/20"
    },
    {
      label: "Engineering & Data",
      icon: <Code className="h-5 w-5 text-orange-400 mr-2" />,
      items: skills.engineering,
      pill: "bg-orange-400/10 text-white/90 hover:bg-orange-400/20"
    },
    {
      label: "Leadership & Collaboration",
      icon: <Users className="h-5 w-5 text-primary mr-2" />,
      items: skills.leadership,
      pill: "bg-primary/10 text-white/90 hover:bg-primary/20"
    }
  ];

  return (
    <section className="mb-12">
      <Card className="bg-black/40 border border-white/10 shadow-lg">
        <CardContent className="p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Skills & Technologies</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {categories.map((cat) => (
              <div
                key={cat.label}
                className="bg-black/60 border border-white/10 rounded-lg p-5 hover:border-primary/30 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                  {cat.icon}
                  {cat.label}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((skill, index) => (
                    <span
                      key={index}
                      className={`inline-block px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${cat.pill}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default Skills;
