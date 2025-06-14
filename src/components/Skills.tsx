
import { useEffect, useState } from "react";
import { Brain, Code, Computer, Settings, Terminal, Beaker, Search, Grid3X3, List, Star } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

interface Skill {
  name: string;
  level: "Expert" | "Advanced" | "Intermediate";
  percentage: number;
}

interface SkillCategory {
  name: string;
  icon: any;
  skills: Skill[];
  gradient: string;
}

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [viewMode, setViewMode] = useState<"grid" | "detailed">("grid");
  
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

  const skillCategories: SkillCategory[] = [
    {
      name: "Programming Languages",
      icon: Code,
      skills: [
        { name: "Python", level: "Expert", percentage: 95 },
        { name: "JavaScript", level: "Advanced", percentage: 85 },
        { name: "TypeScript", level: "Advanced", percentage: 80 },
        { name: "C++", level: "Intermediate", percentage: 70 },
        { name: "SQL", level: "Advanced", percentage: 85 }
      ],
      gradient: "from-emerald-500 to-green-500"
    },
    {
      name: "AI & Machine Learning",
      icon: Brain,
      skills: [
        { name: "PyTorch", level: "Expert", percentage: 90 },
        { name: "TensorFlow", level: "Advanced", percentage: 85 },
        { name: "Hugging Face", level: "Expert", percentage: 95 },
        { name: "LangChain", level: "Advanced", percentage: 80 },
        { name: "NLP", level: "Expert", percentage: 90 },
        { name: "LLM Fine-tuning", level: "Expert", percentage: 95 },
        { name: "RAG Systems", level: "Advanced", percentage: 85 },
        { name: "Agentic AI", level: "Advanced", percentage: 80 },
        { name: "BERT", level: "Advanced", percentage: 85 },
        { name: "Transformers", level: "Expert", percentage: 90 },
        { name: "Embeddings", level: "Advanced", percentage: 85 },
        { name: "Function Calling", level: "Advanced", percentage: 80 }
      ],
      gradient: "from-green-500 to-emerald-600"
    },
    {
      name: "Development & Tools",
      icon: Computer,
      skills: [
        { name: "React", level: "Advanced", percentage: 85 },
        { name: "Flask", level: "Expert", percentage: 90 },
        { name: "FastAPI", level: "Expert", percentage: 95 },
        { name: "Docker", level: "Advanced", percentage: 80 },
        { name: "AWS", level: "Advanced", percentage: 75 },
        { name: "Git", level: "Expert", percentage: 95 },
        { name: "RESTful APIs", level: "Expert", percentage: 90 },
        { name: "Streamlit", level: "Advanced", percentage: 85 },
        { name: "Web Development", level: "Advanced", percentage: 80 }
      ],
      gradient: "from-emerald-600 to-teal-500"
    },
    {
      name: "Data Science & Analytics",
      icon: Terminal,
      skills: [
        { name: "Pandas", level: "Expert", percentage: 95 },
        { name: "NumPy", level: "Expert", percentage: 90 },
        { name: "scikit-learn", level: "Advanced", percentage: 85 },
        { name: "Data Visualization", level: "Advanced", percentage: 80 },
        { name: "Data Engineering", level: "Advanced", percentage: 75 },
        { name: "Model Optimization", level: "Advanced", percentage: 80 },
        { name: "MLflow", level: "Intermediate", percentage: 70 }
      ],
      gradient: "from-teal-500 to-green-600"
    },
    {
      name: "DevOps & Infrastructure",
      icon: Settings,
      skills: [
        { name: "Kubernetes", level: "Intermediate", percentage: 65 },
        { name: "CI/CD Pipelines", level: "Advanced", percentage: 75 },
        { name: "Cloud Computing", level: "Advanced", percentage: 80 },
        { name: "Containerization", level: "Advanced", percentage: 85 }
      ],
      gradient: "from-green-600 to-emerald-500"
    },
    {
      name: "Research & Analysis",
      icon: Beaker,
      skills: [
        { name: "Sentiment Analysis", level: "Expert", percentage: 90 },
        { name: "Text Summarization", level: "Expert", percentage: 85 },
        { name: "Document AI", level: "Advanced", percentage: 80 },
        { name: "Classification", level: "Expert", percentage: 90 },
        { name: "ROUGE", level: "Advanced", percentage: 75 },
        { name: "BLEU", level: "Advanced", percentage: 75 },
        { name: "Disaster Management", level: "Advanced", percentage: 80 }
      ],
      gradient: "from-emerald-500 to-green-500"
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Expert": return "bg-emerald-500 text-white";
      case "Advanced": return "bg-green-500 text-white";
      case "Intermediate": return "bg-yellow-500 text-white";
      default: return "bg-gray-500 text-white";
    }
  };

  const getLevelStars = (level: string) => {
    switch (level) {
      case "Expert": return 5;
      case "Advanced": return 4;
      case "Intermediate": return 3;
      default: return 2;
    }
  };

  const filteredCategories = skillCategories.map(category => ({
    ...category,
    skills: category.skills.filter(skill =>
      skill.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.skills.length > 0);

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

        {/* Controls */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-between items-center">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <input
              type="text"
              placeholder="Search skills..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 glass rounded-lg border border-border focus:border-primary focus:outline-none transition-colors"
            />
          </div>
          
          <div className="flex items-center gap-2 glass rounded-lg p-1">
            <button
              onClick={() => setViewMode("grid")}
              className={`p-2 rounded transition-colors ${
                viewMode === "grid" ? "bg-primary text-primary-foreground" : "hover:bg-muted"
              }`}
            >
              <Grid3X3 className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode("detailed")}
              className={`p-2 rounded transition-colors ${
                viewMode === "detailed" ? "bg-primary text-primary-foreground" : "hover:bg-muted"
              }`}
            >
              <List className="w-4 h-4" />
            </button>
          </div>
        </div>

        <Tabs defaultValue={filteredCategories[0]?.name} className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-6 mb-8">
            {filteredCategories.map((category) => (
              <TabsTrigger 
                key={category.name} 
                value={category.name}
                className="text-xs md:text-sm"
              >
                <category.icon className="w-4 h-4 mr-1" />
                <span className="hidden sm:inline">{category.name.split(' ')[0]}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {filteredCategories.map((category, categoryIndex) => (
            <TabsContent key={category.name} value={category.name} className="mt-0">
              <div className="glass rounded-xl p-6 border border-border">
                <div className="flex items-center mb-6">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${category.gradient} flex items-center justify-center mr-4`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium">{category.name}</h3>
                    <p className="text-muted-foreground text-sm">{category.skills.length} skills</p>
                  </div>
                </div>

                {viewMode === "grid" ? (
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                    {category.skills.map((skill, index) => (
                      <div 
                        key={skill.name}
                        className="group relative p-3 glass rounded-lg border border-border hover:border-primary/30 transition-all duration-300 animate-fade-in"
                        style={{ animationDelay: `${index * 50}ms` }}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-medium text-sm">{skill.name}</span>
                          <Badge 
                            className={`text-xs px-2 py-0.5 ${getLevelColor(skill.level)}`}
                          >
                            {skill.level}
                          </Badge>
                        </div>
                        <div className="flex items-center">
                          {Array.from({ length: 5 }, (_, i) => (
                            <Star
                              key={i}
                              className={`w-3 h-3 ${
                                i < getLevelStars(skill.level)
                                  ? "text-yellow-400 fill-current"
                                  : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="space-y-4">
                    {category.skills.map((skill, index) => (
                      <div 
                        key={skill.name}
                        className="group p-4 glass rounded-lg border border-border hover:border-primary/30 transition-all duration-300 animate-fade-in"
                        style={{ animationDelay: `${index * 50}ms` }}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-3">
                            <span className="font-medium">{skill.name}</span>
                            <Badge 
                              className={`text-xs px-2 py-0.5 ${getLevelColor(skill.level)}`}
                            >
                              {skill.level}
                            </Badge>
                          </div>
                          <div className="flex items-center gap-1">
                            {Array.from({ length: 5 }, (_, i) => (
                              <Star
                                key={i}
                                className={`w-4 h-4 ${
                                  i < getLevelStars(skill.level)
                                    ? "text-yellow-400 fill-current"
                                    : "text-gray-300"
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <Progress 
                            value={skill.percentage} 
                            className="flex-1 h-2"
                          />
                          <span className="text-sm text-muted-foreground font-medium">
                            {skill.percentage}%
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </TabsContent>
          ))}
        </Tabs>
        
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
                  className="px-4 py-2 bg-gradient-to-r from-emerald-500/20 to-green-500/20 rounded-full text-sm font-medium border border-primary/30 animate-fade-in hover:scale-105 transition-transform"
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
