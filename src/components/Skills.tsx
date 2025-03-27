
import { useEffect, useState } from "react";

export default function Skills() {
  // For animation purposes
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
    
    const element = document.getElementById("skills-section");
    if (element) observer.observe(element);
    
    return () => {
      if (element) observer.disconnect();
    };
  }, []);

  // Skill categories with respective skills
  const skillCategories = [
    {
      name: "Programming Languages",
      skills: [
        { name: "Python", level: 95 },
        { name: "JavaScript", level: 85 },
        { name: "TypeScript", level: 80 },
        { name: "C++", level: 75 },
      ],
    },
    {
      name: "AI & ML Frameworks",
      skills: [
        { name: "PyTorch", level: 90 },
        { name: "TensorFlow", level: 85 },
        { name: "Hugging Face", level: 90 },
        { name: "LangChain", level: 85 },
      ],
    },
    {
      name: "ML Ops & Development",
      skills: [
        { name: "Flask", level: 80 },
        { name: "Docker", level: 75 },
        { name: "AWS", level: 70 },
        { name: "Git", level: 85 },
      ],
    },
    {
      name: "AI Specializations",
      skills: [
        { name: "NLP", level: 95 },
        { name: "LLM Fine-tuning", level: 90 },
        { name: "RAG Systems", level: 85 },
        { name: "Agentic AI", level: 80 },
      ],
    },
  ];

  return (
    <section id="skills" className="section-container" id="skills-section">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-sm font-medium rounded-full glass mb-4 text-primary">
            Skills
          </span>
          <h2 className="section-title">Technical Proficiencies</h2>
          <p className="section-subtitle mx-auto">
            A comprehensive overview of my technical skills and expertise in AI engineering, machine learning, and software development.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {skillCategories.map((category, categoryIndex) => (
            <div key={category.name} className="space-y-6 animate-fade-in" style={{ animationDelay: `${categoryIndex * 150}ms` }}>
              <h3 className="text-xl font-medium mb-4">{category.name}</h3>
              
              <div className="space-y-5">
                {category.skills.map((skill, index) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-primary transition-all duration-1000 ease-out rounded-full"
                        style={{ 
                          width: isVisible ? `${skill.level}%` : '0%',
                          transitionDelay: `${(categoryIndex * 4 + index) * 100}ms`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* Additional skill highlights */}
        <div className="mt-20">
          <h3 className="text-xl font-medium mb-8 text-center">Additional Expertise</h3>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {[
              "RESTful APIs",
              "Data Visualization",
              "Pandas",
              "NumPy",
              "scikit-learn",
              "Function Calling",
              "Embeddings",
              "Kubernetes",
              "CI/CD Pipelines",
              "Streamlit",
              "FastAPI",
              "Model Optimization",
              "Data Engineering",
              "MLflow",
              "Web Development",
              "SQL"
            ].map((skill, index) => (
              <div 
                key={skill}
                className="glass py-3 px-4 rounded-lg text-center border border-border hover:border-primary/50 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
