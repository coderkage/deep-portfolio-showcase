
import { ArrowDown, Github, Linkedin, ExternalLink } from "lucide-react";

export default function Hero() {
  const socialLinks = [
    { name: "GitHub", href: "https://github.com/coderkage", icon: Github },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/deeppatel3910/", icon: Linkedin },
     {
    name: "Kaggle",
    href: "https://www.kaggle.com/deeppatel03",
    icon: () => (
      <img
        src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/189_Kaggle_logo_logos-512.png"
        alt="Kaggle"
        className="w-5 h-5"
      />
    ),
  },
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
                Deep <span className="gradient-text">Patel</span>
              </h1>
              <h3 className="text-xl md:text-2xl font-medium text-foreground/80 mt-2">
                Software & AI Engineer, Applied Researcher
              </h3>
            </div>
            
            <p className="text-lg text-muted-foreground max-w-lg">
              Specializing in NLP, LLMs, and scalable AI solutions, with a passion for developing AI systems that solve real-world problems.
            </p>
            
            <div className="flex gap-4 pt-2">
              <a 
                href="https://drive.google.com/file/d/1a0spdbUvwgO8RT_VhTeCnE0tQDPKBSCw/view?usp=sharing"
                target="_blank"
                className="bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90 px-6 py-3 rounded-md font-medium transition-all transform hover:translate-y-[-2px]"
              >
                Download Resume
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
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-accent/20 opacity-60 mix-blend-overlay z-10"></div>
              <img
                src="/hero.jpg"
                alt="Deep Patel"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Background Design Elements */}
            <div className="absolute -bottom-10 -right-10 w-full h-full rounded-3xl bg-gradient-to-r from-primary/10 to-accent/10 -z-10 animate-[float_5s_ease-in-out_infinite_0.5s]"></div>
            <div className="absolute -top-5 -left-5 w-32 h-32 rounded-full bg-gradient-to-r from-accent/15 to-primary/15 -z-10 animate-[float_4s_ease-in-out_infinite_1s]"></div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
          <span className="text-sm text-muted-foreground mb-2">Scroll to explore</span>
          <ArrowDown className="w-5 h-5 text-primary animate-bounce" />
        </div>
      </div>
    </section>
  );
}
