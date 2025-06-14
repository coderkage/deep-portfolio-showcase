
import { ArrowDown, Github, Linkedin, ExternalLink } from "lucide-react";

export default function Hero() {
  const socialLinks = [
    { name: "GitHub", href: "https://github.com/deeppatel234", icon: Github },
    { name: "LinkedIn", href: "https://linkedin.com/in/deeppatel234", icon: Linkedin },
    { name: "Kaggle", href: "https://kaggle.com/deeppatel234", icon: ExternalLink },
  ];

  return (
    <section className="relative flex flex-col justify-center min-h-screen pt-28 pb-20 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Text Content */}
          <div className="flex-1 space-y-6 animate-fade-in">
            <div className="space-y-1">
              <h2 className="text-xl font-medium text-foreground/70 font-gothic">Greetings, I am</h2>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-wider font-gothic">
                Deep <span className="gradient-text">Patel</span>
              </h1>
              <h3 className="text-xl md:text-2xl font-semibold text-foreground/80 mt-2 font-gothic">
                AI Engineer & Researcher
              </h3>
            </div>
            
            <p className="text-lg text-muted-foreground max-w-lg font-gothic leading-relaxed">
              Specializing in NLP, LLM fine-tuning, and scalable AI solutions, with a passion for developing AI systems that solve real-world problems.
            </p>
            
            <div className="flex gap-4 pt-2">
              <a 
                href="/DeepPatel_Resume.pdf"
                target="_blank"
                download 
                className="bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90 px-6 py-3 rounded-md font-semibold transition-all transform hover:translate-y-[-2px] hover:shadow-lg hover:shadow-primary/25 font-gothic"
              >
                Download Resume
              </a>
              <a 
                href="#projects" 
                className="glass border-2 border-border hover:border-primary px-6 py-3 rounded-md font-semibold transition-all transform hover:translate-y-[-2px] hover:shadow-lg hover:shadow-primary/25 font-gothic"
              >
                View Projects
              </a>
            </div>
            
            <div className="flex gap-4 pt-2">
              {socialLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/70 hover:text-primary transition-colors hover:scale-110 transform"
                    aria-label={item.name}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
          
          {/* Image */}
          <div className="relative w-full max-w-md animate-scale-in">
            <div className="aspect-square rounded-2xl overflow-hidden border-4 border-primary/30 relative z-10 shadow-xl shadow-primary/20">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 to-accent/30 opacity-60 mix-blend-overlay z-10"></div>
              <img
                src="/hero.jpg"
                alt="Deep Patel"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Background Design Elements */}
            <div className="absolute -bottom-10 -right-10 w-full h-full rounded-2xl bg-gradient-to-r from-primary/20 to-accent/20 -z-10 animate-[float_5s_ease-in-out_infinite_0.5s] blur-sm"></div>
            <div className="absolute -top-5 -left-5 w-32 h-32 rounded-full bg-gradient-to-r from-accent/25 to-primary/25 -z-10 animate-[float_4s_ease-in-out_infinite_1s] blur-sm"></div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
          <span className="text-sm text-muted-foreground mb-2 font-gothic">Scroll to explore</span>
          <ArrowDown className="w-5 h-5 text-primary animate-bounce" />
        </div>
      </div>
    </section>
  );
}
