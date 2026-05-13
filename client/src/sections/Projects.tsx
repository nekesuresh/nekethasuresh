import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Lock } from "lucide-react";
import { resumeData } from "@/data/resumeData";

type ProjectStatus = "Live" | "NDA" | "Open source" | "Academic";

const StatusBadge = ({ status }: { status: ProjectStatus }) => {
  if (status === "Live") {
    return (
      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-green-500/10 text-green-400 border border-green-500/30">
        <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
        Live
      </span>
    );
  }
  if (status === "Open source") {
    return (
      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-primary/15 text-primary border border-primary/30">
        Open source
      </span>
    );
  }
  if (status === "NDA") {
    return (
      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-white/5 text-white/60 border border-white/15">
        <Lock className="h-3 w-3" />
        NDA
      </span>
    );
  }
  if (status === "Academic") {
    return (
      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-blue-500/10 text-blue-400 border border-blue-500/30">
        Academic
      </span>
    );
  }
  return null;
};

const Projects = () => {
  const { projects } = resumeData;
  
  return (
    <section className="mb-12">
      <Card className="bg-black/40 border border-white/10 shadow-lg">
        <CardContent className="p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Featured Projects</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className="bg-black/60 border border-white/10 rounded-lg p-5 hover:border-primary/30 transition-all duration-300 transform hover:-translate-y-1 flex flex-col h-full"
              >
                <div className="mb-3">
                  <div className="mb-2">
                    <StatusBadge status={project.status as ProjectStatus} />
                  </div>
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                    {project.liveLink && (
                      <a href={project.liveLink} className="text-primary hover:text-primary/80 ml-2 flex-shrink-0" target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                  <p className="text-primary/90 font-medium text-sm mb-2">{project.subtitle}</p>
                </div>
                
                <div className="mb-4 flex-grow">
                  <ul className="space-y-2">
                    <li className="text-white/80 flex items-start">
                      <span>{project.description}</span>
                    </li>
                  </ul>
                </div>
                
                <div className="mt-4">
                  <h4 className="text-white font-medium mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex} 
                        className="inline-block px-3 py-1.5 rounded-full bg-primary/10 text-white/90 text-xs font-medium hover:bg-primary/20 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default Projects;
