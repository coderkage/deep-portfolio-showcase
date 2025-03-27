
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
              <h2 className="text-xl font-medium text-foreground/80">Hello, I'm</h2>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter">
                Deep Patel
              </h1>
              <h3 className="text-xl md:text-2xl font-medium text-foreground/80 mt-2">
                AI Engineer & Researcher
              </h3>
            </div>
            
            <p className="text-lg text-muted-foreground max-w-lg">
              Specializing in NLP, LLM fine-tuning, and scalable AI solutions, with a passion for developing AI systems that solve real-world problems.
            </p>
            
            <div className="flex gap-4 pt-2">
              <a 
                href="#contact" 
                className="bg-primary text-primary-foreground hover:opacity-90 px-6 py-3 rounded-md font-medium transition-all transform hover:translate-y-[-2px]"
              >
                Get in Touch
              </a>
              <a 
                href="#projects" 
                className="glass border-2 border-border hover:border-primary px-6 py-3 rounded-md font-medium transition-all transform hover:translate-y-[-2px]"
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
                    className="text-foreground/70 hover:text-primary transition-colors"
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
            <div className="aspect-square rounded-3xl overflow-hidden border-4 border-background relative z-10">
              <div className="absolute inset-0 bg-gradient-to-tr from-accent to-transparent opacity-30 mix-blend-overlay z-10"></div>
              <img
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80"
                alt="Deep Patel"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Background Design Elements */}
            <div className="absolute -bottom-10 -right-10 w-full h-full rounded-3xl bg-primary/5 -z-10 animate-[float_5s_ease-in-out_infinite_0.5s]"></div>
            <div className="absolute -top-5 -left-5 w-32 h-32 rounded-full bg-primary/10 -z-10 animate-[float_4s_ease-in-out_infinite_1s]"></div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
          <span className="text-sm text-muted-foreground mb-2">Scroll to explore</span>
          <ArrowDown className="w-5 h-5 text-muted-foreground animate-bounce" />
        </div>
      </div>
    </section>
  );
}
