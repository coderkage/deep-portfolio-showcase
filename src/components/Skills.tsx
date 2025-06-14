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
        { name: "C", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
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
      category: "DevOps & Cloud",
      skills: [
        { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
        { name: "AWS", logo: "https://static-00.iconduck.com/assets.00/aws-icon-512x512-4v2f55fn.png" },
        { name: "GCP", logo: "https://static-00.iconduck.com/assets.00/google-cloud-icon-2048x1646-7admxejz.png" },
        { name: "Kubernetes", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
        { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
        { name: "MLflow", logo: "https://cdn.brandfetch.io/mlflow.org/fallback/lettermark/theme/dark/h/256/w/256/icon?c=1bfwsmEH20zzEfSNTed" }
      ]
    }
  ];

  const SkillCard = ({ skill, index }: { skill: { name: string; logo: string }, index: number }) => (
    <div
      className={`flex flex-col items-center p-3 glass rounded-xl border border-border/30 hover:border-primary/40 transition-all duration-500 hover:scale-105 group cursor-default shadow-lg hover:shadow-primary/10 ${
        isVisible ? 'animate-fade-in' : 'opacity-0 translate-y-4'
      } shadow-[0_0_20px_rgba(16,185,129,0.12)] hover:shadow-[0_0_30px_rgba(16,185,129,0.25)]`}
      style={{ animationDelay: `${index * 50}ms` }}
    >
     <div className="w-14 h-14 sm:w-16 sm:h-16 mb-3 flex items-center justify-center bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg p-2 group-hover:from-primary/20 group-hover:to-accent/20 transition-all duration-300 shadow-[0_0_15px_rgba(16,185,129,0.15)] group-hover:shadow-[0_0_20px_rgba(16,185,129,0.3)]">
  <img 
    src={skill.logo} 
    alt={`${skill.name} logo`}
    className="w-full h-full object-contain filter group-hover:brightness-110 group-hover:drop-shadow-sm transition-all duration-300"
    onError={(e) => {
      e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23059669' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccode%3E%3C/code%3E%3C/svg%3E";
    }}
  />
</div>

      <span className="text-sm font-medium text-center group-hover:text-primary transition-colors duration-300 leading-tight">
        {skill.name}
      </span>
    </div>
  );

  return (
    <section id="skills" className="section-container relative overflow-hidden py-20">
      {/* Enhanced background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-primary/5 to-accent/5 rounded-full blur-2xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-l from-accent/5 to-primary/5 rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-primary/3 rounded-full blur-xl animate-glow-pulse"></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 text-sm font-medium rounded-full glass mb-6 text-primary border border-primary/20">
            Skills & Expertise
          </span>
          <h2 className="text-3xl md:text-4xl font-medium mb-6 opacity-90">Complete <span className="gradient-text">Tech Stack</span></h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto mb-8 leading-relaxed">
            Full-stack AI engineer with comprehensive expertise across the entire machine learning and software development lifecycle.
          </p>
        </div>
        
        <div className="space-y-12">
          {skillsData.map((category, categoryIndex) => (
            <div 
              key={category.category} 
              className={`${isVisible ? 'animate-fade-in' : 'opacity-0 translate-y-6'}`} 
              style={{ animationDelay: `${categoryIndex * 150}ms` }}
            >
              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold mb-2 gradient-text">
                  {category.category}
                </h3>
                <div className="w-16 h-0.5 bg-gradient-to-r from-primary to-accent mx-auto opacity-60"></div>
              </div>
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
          <div className={`glass rounded-2xl p-8 border border-border backdrop-blur-lg shadow-2xl ${isVisible ? 'animate-scale-in' : 'opacity-0 scale-95'}`} style={{ animationDelay: '600ms' }}>
            <h3 className="text-xl font-semibold mb-4 gradient-text">Core Expertise</h3>
            <p className="text-muted-foreground mb-6 max-w-3xl mx-auto leading-relaxed">
              Specialized in building end-to-end AI solutions, from research and model development to production deployment. 
              Experienced in architecting scalable systems that bridge the gap between cutting-edge AI research and real-world applications.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "End-to-End AI Development",
                "Production ML Systems", 
                "Research & Innovation",
                "Technical Leadership"
              ].map((expertise, index) => (
                <span 
                  key={expertise}
                  className={`px-4 py-2 bg-gradient-to-r from-primary/15 to-accent/15 rounded-full text-sm font-medium border border-primary/25 hover:scale-105 transition-all duration-300 cursor-default hover:shadow-lg hover:shadow-primary/10 ${
                    isVisible ? 'animate-fade-in' : 'opacity-0'
                  }`}
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
