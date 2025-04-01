import { Card, CardContent } from "@/components/ui/card";
import { resumeData } from "@/data/resumeData";

const Education = () => {
  const { education } = resumeData;
  
  return (
    <section className="mb-12">
      <Card className="bg-black/40 border border-white/10 shadow-lg">
        <CardContent className="p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Education</h2>
          
          {education.map((edu, index) => (
            <div 
              key={index} 
              className="bg-black/60 border border-white/10 rounded-lg p-5 mb-6 hover:border-primary/30 transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-white">{edu.institution}</h3>
                  <p className="text-primary font-medium">{edu.degree}</p>
                </div>
                <div className="mt-2 md:mt-0 md:text-right">
                  <p className="text-white/70">{edu.location}</p>
                  <p className="text-white/60 text-sm">{edu.period}</p>
                </div>
              </div>
              <div className="mb-3">
                <p className="text-white/80"><span className="text-white/60">GPA:</span> {edu.gpa}</p>
              </div>
              {edu.courses && (
                <div className="mb-4">
                  <h4 className="text-white font-medium mb-2">Relevant Coursework:</h4>
                  <div className="flex flex-wrap gap-2">
                    {edu.courses.map((course, courseIndex) => (
                      <span 
                        key={courseIndex}
                        className="inline-block px-3 py-1.5 rounded-full bg-primary/10 text-white/90 text-xs font-medium hover:bg-primary/20 transition-colors"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              {edu.campusInvolvement && (
                <div className="mb-4">
                  <h4 className="text-white font-medium mb-2">Campus Involvement:</h4>
                  <div className="flex flex-wrap gap-2">
                    {edu.campusInvolvement.map((involvement, idx) => (
                      <span 
                        key={idx} 
                        className="inline-block px-3 py-1.5 rounded-full bg-primary/10 text-white/90 text-xs font-medium hover:bg-primary/20 transition-colors"
                      >
                        {involvement}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </CardContent>
      </Card>
    </section>
  );
};

export default Education;
