
import { useEffect, useState } from "react";
import { Brain, Code, Computer, Gear, Terminal, Flask } from "lucide-react";

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

  const skillCategories = [
    {
      name: "AI & Machine Learning",
      icon: Brain,
      skills: [
        "PyTorch", "TensorFlow", "Hugging Face", "LangChain", "NLP", 
        "LLM Fine-tuning", "RAG Systems", "Agentic AI", "BERT", 
        "Transformers", "Embeddings", "Function Calling"
      ],
      gradient: "from-emerald-500 to-green-500"
    },
    {
      name: "Programming Languages",
      icon: Code,
      skills: [
        "Python", "JavaScript", "TypeScript", "C++", "SQL"
      ],
      gradient: "from-green-500 to-emerald-600"
    },
    {
      name: "Development & Tools",
      icon: Computer,
      skills: [
        "React", "Flask", "FastAPI", "Docker", "AWS", "Git", 
        "RESTful APIs", "Streamlit", "Web Development"
      ],
      gradient: "from-emerald-600 to-teal-500"
    },
    {
      name: "Data Science & Analytics",
      icon: Terminal,
      skills: [
        "Pandas", "NumPy", "scikit-learn", "Data Visualization", 
        "Data Engineering", "Model Optimization", "MLflow"
      ],
      gradient: "from-teal-500 to-green-600"
    },
    {
      name: "DevOps & Infrastructure",
      icon: Gear,
      skills: [
        "Kubernetes", "CI/CD Pipelines", "Cloud Computing", "Containerization"
      ],
      gradient: "from-green-600 to-emerald-500"
    },
    {
      name: "Research & Analysis",
      icon: Flask,
      skills: [
        "Sentiment Analysis", "Text Summarization", "Document AI", 
        "Classification", "ROUGE", "BLEU", "Disaster Management"
      ],
      gradient: "from-emerald-500 to-green-500"
    }
  ];

  return (
    <section id="skills" className="section-container">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-sm font-medium rounded-full glass mb-4 text-primary">
            Skills
          </span>
          <h2 className="section-title">Complete <span className="gradient-text">Tech Stack</span></h2>
          <p className="section-subtitle mx-auto">
            Full-stack AI engineer with comprehensive expertise across the entire machine learning and software development lifecycle.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const IconComponent = category.icon;
            return (
              <div 
                key={category.name}
                className="glass rounded-xl p-6 border border-border hover:border-primary/30 transition-all duration-500 group animate-fade-in"
                style={{ animationDelay: `${categoryIndex * 150}ms` }}
              >
                <div className="flex items-center mb-6">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${category.gradient} flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-medium group-hover:text-primary transition-colors">
                    {category.name}
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, index) => (
                    <span 
                      key={skill}
                      className={`px-3 py-1.5 bg-gradient-to-r ${category.gradient} bg-opacity-10 rounded-full text-sm font-medium border border-primary/20 hover:border-primary/40 transition-all duration-300 cursor-default animate-fade-in hover:scale-105`}
                      style={{ 
                        animationDelay: `${(categoryIndex * 6 + index) * 100 + 300}ms`,
                        opacity: isVisible ? 1 : 0
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="mt-16 text-center">
          <div className="glass rounded-xl p-8 border border-border">
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
                  className="px-4 py-2 bg-gradient-to-r from-emerald-500/20 to-green-500/20 rounded-full text-sm font-medium border border-primary/30 animate-fade-in"
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
