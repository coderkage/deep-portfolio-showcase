
import { useEffect, useState } from "react";
import { Brain, Code, Computer, Settings, Terminal, Beaker, Database, Globe, Cpu, Shield, Zap, Layers } from "lucide-react";

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    const element = document.getElementById("skills");
    if (element) observer.observe(element);
    
    return () => {
      if (element) observer.disconnect();
    };
  }, []);

  const skillsData = [
    // First row - AI & Programming
    {
      skills: [
        { name: "PyTorch", icon: Brain, color: "text-orange-400" },
        { name: "TensorFlow", icon: Cpu, color: "text-orange-500" },
        { name: "Python", icon: Code, color: "text-blue-400" },
        { name: "JavaScript", icon: Code, color: "text-yellow-400" },
        { name: "TypeScript", icon: Code, color: "text-blue-500" },
        { name: "Hugging Face", icon: Brain, color: "text-purple-400" },
        { name: "LangChain", icon: Layers, color: "text-green-400" },
        { name: "NLP", icon: Brain, color: "text-pink-400" },
        { name: "LLM Fine-tuning", icon: Settings, color: "text-indigo-400" },
        { name: "RAG Systems", icon: Database, color: "text-cyan-400" }
      ]
    },
    // Second row - Development & Tools
    {
      skills: [
        { name: "React", icon: Computer, color: "text-cyan-400" },
        { name: "Flask", icon: Globe, color: "text-green-500" },
        { name: "FastAPI", icon: Zap, color: "text-emerald-400" },
        { name: "Docker", icon: Layers, color: "text-blue-600" },
        { name: "AWS", icon: Database, color: "text-orange-600" },
        { name: "Kubernetes", icon: Settings, color: "text-blue-500" },
        { name: "Git", icon: Terminal, color: "text-red-400" },
        { name: "scikit-learn", icon: Beaker, color: "text-orange-400" },
        { name: "Pandas", icon: Database, color: "text-purple-500" },
        { name: "NumPy", icon: Terminal, color: "text-blue-400" }
      ]
    },
    // Third row - Specialized & Research
    {
      skills: [
        { name: "BERT", icon: Brain, color: "text-green-500" },
        { name: "Transformers", icon: Cpu, color: "text-purple-600" },
        { name: "Embeddings", icon: Layers, color: "text-teal-400" },
        { name: "MLflow", icon: Settings, color: "text-blue-500" },
        { name: "Streamlit", icon: Globe, color: "text-red-500" },
        { name: "C++", icon: Code, color: "text-blue-600" },
        { name: "SQL", icon: Database, color: "text-indigo-500" },
        { name: "CI/CD", icon: Terminal, color: "text-green-600" },
        { name: "Sentiment Analysis", icon: Brain, color: "text-pink-500" },
        { name: "Document AI", icon: Beaker, color: "text-cyan-500" }
      ]
    }
  ];

  const MarqueeRow = ({ skills, direction = "left", speed = "20s" }: { 
    skills: Array<{ name: string; icon: any; color: string }>, 
    direction?: "left" | "right",
    speed?: string 
  }) => (
    <div className="flex overflow-hidden whitespace-nowrap">
      <div 
        className={`flex gap-6 ${direction === "left" ? "animate-marquee-left" : "animate-marquee-right"}`}
        style={{ animationDuration: speed }}
      >
        {[...skills, ...skills].map((skill, index) => {
          const IconComponent = skill.icon;
          return (
            <div
              key={`${skill.name}-${index}`}
              className="flex items-center gap-3 px-4 py-3 glass rounded-xl border border-border/30 hover:border-primary/40 transition-all duration-300 hover:scale-105 group cursor-default"
            >
              <IconComponent className={`w-5 h-5 ${skill.color} group-hover:scale-110 transition-transform`} />
              <span className="text-sm font-medium whitespace-nowrap group-hover:text-primary transition-colors">
                {skill.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );

  return (
    <section id="skills" className="section-container relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent/5 rounded-full blur-xl"></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-sm font-medium rounded-full glass mb-4 text-primary">
            Skills
          </span>
          <h2 className="section-title">Complete <span className="gradient-text">Tech Stack</span></h2>
          <p className="section-subtitle mx-auto">
            Full-stack AI engineer with comprehensive expertise across the entire machine learning and software development lifecycle.
          </p>
        </div>
        
        <div className="space-y-8">
          {skillsData.map((row, index) => (
            <MarqueeRow 
              key={index} 
              skills={row.skills} 
              direction={index % 2 === 0 ? "left" : "right"}
              speed={`${25 + index * 5}s`}
            />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="glass rounded-xl p-8 border border-border backdrop-blur-lg">
            <h3 className="text-xl font-medium mb-4 gradient-text">Core Expertise</h3>
            <p className="text-muted-foreground mb-6 max-w-3xl mx-auto">
              Specialized in building end-to-end AI solutions, from research and model development to production deployment. 
              Experienced in architecting scalable systems that bridge the gap between cutting-edge AI research and real-world applications.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                "End-to-End AI Development",
                "Production ML Systems", 
                "Research & Innovation",
                "Technical Leadership"
              ].map((expertise, index) => (
                <span 
                  key={expertise}
                  className="px-4 py-2 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full text-sm font-medium border border-primary/30 animate-fade-in hover:scale-105 transition-transform cursor-default"
                  style={{ animationDelay: `${index * 100 + 800}ms` }}
                >
                  {expertise}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
