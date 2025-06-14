
import { ArrowDown, Github, Linkedin, ExternalLink, Download, Eye } from "lucide-react";
import { useState, useEffect } from "react";

export default function Hero() {
  const [typedText, setTypedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  
  const titles = ["AI Engineer", "Researcher", "Full-Stack Developer"];
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

  useEffect(() => {
    const currentTitle = titles[currentTitleIndex];
    let timeout: NodeJS.Timeout;

    if (isTyping) {
      if (typedText.length < currentTitle.length) {
        timeout = setTimeout(() => {
          setTypedText(currentTitle.slice(0, typedText.length + 1));
        }, 100);
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
      }
    } else {
      if (typedText.length > 0) {
        timeout = setTimeout(() => {
          setTypedText(typedText.slice(0, -1));
        }, 50);
      } else {
        setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [typedText, isTyping, currentTitleIndex]);

  const socialLinks = [
    { name: "GitHub", href: "https://github.com/deeppatel234", icon: Github },
    { name: "LinkedIn", href: "https://linkedin.com/in/deeppatel234", icon: Linkedin },
    { name: "Kaggle", href: "https://kaggle.com/deeppatel234", icon: ExternalLink },
  ];

  return (
    <section className="relative flex flex-col justify-center min-h-screen pt-32 pb-20 px-6 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-gradient-to-r from-accent/20 to-primary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="flex flex-col xl:flex-row items-center gap-16">
          {/* Text Content */}
          <div className="flex-1 space-y-8 text-center xl:text-left">
            <div className="space-y-4">
              <div className="inline-block px-4 py-2 glass rounded-full text-sm font-medium text-primary mb-4">
                👋 Welcome to my portfolio
              </div>
              
              <h2 className="text-xl md:text-2xl font-medium text-muted-foreground animate-fade-in">
                Hello, I'm
              </h2>
              
              <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tighter animate-fade-in">
                Deep <span className="gradient-text">Patel</span>
              </h1>
              
              <div className="h-16 flex items-center justify-center xl:justify-start">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-muted-foreground">
                  {typedText}
                  <span className="inline-block w-1 h-8 bg-primary ml-1 animate-pulse"></span>
                </h3>
              </div>
            </div>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto xl:mx-0 leading-relaxed animate-fade-in">
              Specializing in <span className="text-primary font-semibold">NLP</span>, <span className="text-accent font-semibold">LLM fine-tuning</span>, and scalable AI solutions that solve real-world problems.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 pt-4 justify-center xl:justify-start">
              <a 
                href="/DeepPatel_Resume.pdf"
                target="_blank"
                download 
                className="premium-button group"
              >
                <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                Download Resume
              </a>
              <a 
                href="#projects" 
                className="outline-button group"
              >
                <Eye className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                View Projects
              </a>
            </div>
            
            <div className="flex gap-6 pt-4 justify-center xl:justify-start">
              {socialLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-foreground hover:text-primary transition-all duration-300 hover:scale-110 hover:shadow-xl group"
                    aria-label={item.name}
                  >
                    <Icon className="w-6 h-6 group-hover:scale-110 transition-transform" />
                  </a>
                );
              })}
            </div>
          </div>
          
          {/* Enhanced Image Section */}
          <div className="relative w-full max-w-lg animate-scale-in">
            <div className="relative">
              {/* Main Image Container */}
              <div className="aspect-square rounded-3xl overflow-hidden glass-card relative z-10 group">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 via-transparent to-accent/30 opacity-60 mix-blend-overlay z-10 group-hover:opacity-40 transition-opacity duration-500"></div>
                <img
                  src="/hero.jpg"
                  alt="Deep Patel"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 ring-1 ring-white/20 rounded-3xl"></div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -bottom-6 -right-6 w-full h-full rounded-3xl bg-gradient-to-r from-primary/20 to-accent/20 -z-10 animate-float blur-sm"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 rounded-2xl bg-gradient-to-r from-accent/30 to-primary/30 -z-10 animate-float blur-lg" style={{ animationDelay: '1s' }}></div>
              
              {/* Floating Tech Icons */}
              <div className="absolute -top-4 right-8 w-16 h-16 glass rounded-2xl flex items-center justify-center animate-float" style={{ animationDelay: '0.5s' }}>
                <span className="text-2xl">🤖</span>
              </div>
              <div className="absolute bottom-8 -left-4 w-14 h-14 glass rounded-2xl flex items-center justify-center animate-float" style={{ animationDelay: '1.5s' }}>
                <span className="text-xl">⚡</span>
              </div>
              <div className="absolute top-1/2 -right-8 w-12 h-12 glass rounded-2xl flex items-center justify-center animate-float" style={{ animationDelay: '2.5s' }}>
                <span className="text-lg">🚀</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Enhanced Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-fade-in">
          <span className="text-sm text-muted-foreground mb-3 font-medium">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
