
import { useEffect, useState } from "react";

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
    {
      category: "Programming Languages",
      skills: [
        { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
        { name: "C++", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
        { name: "SQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" }
      ]
    },
    {
      category: "AI/ML Frameworks",
      skills: [
        { name: "PyTorch", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
        { name: "TensorFlow", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
        { name: "Hugging Face", logo: "https://huggingface.co/front/assets/huggingface_logo-noborder.svg" },
        { name: "scikit-learn", logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg" },
        { name: "Pandas", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
        { name: "NumPy", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" }
      ]
    },
    {
      category: "Web Development",
      skills: [
        { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Flask", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" },
        { name: "FastAPI", logo: "https://fastapi.tiangolo.com/img/logo-margin/logo-teal.png" },
        { name: "Streamlit", logo: "https://streamlit.io/images/brand/streamlit-mark-color.svg" }
      ]
    },
    {
      category: "Tools & Technologies",
      skills: [
        { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
        { name: "AWS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" },
        { name: "Kubernetes", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
        { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
        { name: "MLflow", logo: "https://mlflow.org/docs/latest/_static/MLflow-logo-final-black.png" }
      ]
    }
  ];

  const SkillCard = ({ skill, index }: { skill: { name: string; logo: string }, index: number }) => (
    <div
      className="flex flex-col items-center p-4 glass rounded-xl border border-border/30 hover:border-primary/40 transition-all duration-300 hover:scale-105 group cursor-default"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="w-12 h-12 mb-3 flex items-center justify-center bg-white/10 rounded-lg p-2">
        <img 
          src={skill.logo} 
          alt={`${skill.name} logo`}
          className="w-full h-full object-contain filter group-hover:brightness-110 transition-all"
          onError={(e) => {
            // Fallback to a placeholder if image fails to load
            e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23059669' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccode%3E%3C/code%3E%3C/svg%3E";
          }}
        />
      </div>
      <span className="text-sm font-medium text-center group-hover:text-primary transition-colors">
        {skill.name}
      </span>
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
        
        <div className="space-y-12">
          {skillsData.map((category, categoryIndex) => (
            <div key={category.category} className="animate-fade-in" style={{ animationDelay: `${categoryIndex * 200}ms` }}>
              <h3 className="text-xl font-medium mb-6 text-center gradient-text">
                {category.category}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <SkillCard 
                    key={skill.name} 
                    skill={skill} 
                    index={skillIndex} 
                  />
                ))}
              </div>
            </div>
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
