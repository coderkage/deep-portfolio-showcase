
import { ArrowDown, Github, Linkedin, ExternalLink } from "lucide-react";
import { useEffect, useState } from "react";

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorTrails, setCursorTrails] = useState<Array<{id: number, x: number, y: number}>>([]);

  useEffect(() => {
    let trailId = 0;
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      // Add cursor trail
      const newTrail = { id: trailId++, x: e.clientX, y: e.clientY };
      setCursorTrails(prev => [...prev.slice(-8), newTrail]);
      
      // Remove trail after animation
      setTimeout(() => {
        setCursorTrails(prev => prev.filter(trail => trail.id !== newTrail.id));
      }, 600);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const socialLinks = [
    { name: "GitHub", href: "https://github.com/deeppatel234", icon: Github },
    { name: "LinkedIn", href: "https://linkedin.com/in/deeppatel234", icon: Linkedin },
    { name: "Kaggle", href: "https://kaggle.com/deeppatel234", icon: ExternalLink },
  ];

  return (
    <>
      {/* Custom Cursor */}
      <div 
        className="custom-cursor"
        style={{ left: mousePosition.x - 10, top: mousePosition.y - 10 }}
      />
      
      {/* Cursor Trails */}
      {cursorTrails.map((trail, index) => (
        <div
          key={trail.id}
          className="cursor-trail"
          style={{ 
            left: trail.x - 2, 
            top: trail.y - 2,
            animationDelay: `${index * 0.05}s`
          }}
        />
      ))}

      <section className="relative flex flex-col justify-center min-h-screen pt-28 pb-20 px-4 overflow-hidden">
        {/* Floating Gothic Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-2 h-2 bg-primary/30 rounded-full animate-gothic-float" style={{animationDelay: '0s'}}></div>
          <div className="absolute top-40 right-20 w-1 h-1 bg-accent/40 rounded-full animate-gothic-float" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-40 left-1/4 w-1.5 h-1.5 bg-primary/20 rounded-full animate-gothic-float" style={{animationDelay: '4s'}}></div>
          <div className="absolute top-60 right-1/3 w-1 h-1 bg-accent/30 rounded-full animate-gothic-float" style={{animationDelay: '6s'}}></div>
        </div>

        <div className="max-w-7xl mx-auto w-full">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Text Content */}
            <div className="flex-1 space-y-6 animate-fade-in">
              <div className="space-y-1">
                <h2 className="text-xl font-medium text-foreground/80 font-gothic">Behold, I am</h2>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold tracking-tighter">
                  Deep <span className="gradient-text animate-gothic-glow">Patel</span>
                </h1>
                <h3 className="text-xl md:text-2xl font-medium text-foreground/80 mt-2 font-gothic">
                  Architect of Artificial Minds
                </h3>
              </div>
              
              <p className="text-lg text-muted-foreground max-w-lg font-gothic leading-relaxed">
                Weaving the dark arts of NLP, LLM conjuring, and scalable AI incantations, 
                crafting digital consciousness that transcends the mortal realm.
              </p>
              
              <div className="flex gap-4 pt-2">
                <a 
                  href="/DeepPatel_Resume.pdf"
                  target="_blank"
                  download 
                  className="bg-gradient-to-r from-primary to-accent text-background hover:from-accent hover:to-primary px-8 py-4 rounded-lg font-medium font-gothic transition-all duration-500 transform hover:translate-y-[-4px] hover:scale-105 shadow-lg hover:shadow-2xl hover:shadow-primary/25 border border-primary/30 hover:border-primary/60"
                  style={{boxShadow: '0 0 20px rgba(34, 197, 94, 0.2)'}}
                >
                  Summon Resume
                </a>
                <a 
                  href="#projects" 
                  className="glass border-2 border-primary/30 hover:border-primary/60 px-8 py-4 rounded-lg font-medium font-gothic transition-all duration-500 transform hover:translate-y-[-4px] hover:scale-105 hover:bg-primary/10"
                >
                  Witness Creations
                </a>
              </div>
              
              <div className="flex gap-6 pt-4">
                {socialLinks.map((item) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/70 hover:text-primary transition-all duration-300 transform hover:scale-125 hover:rotate-12"
                      aria-label={item.name}
                    >
                      <Icon className="w-6 h-6" style={{filter: 'drop-shadow(0 0 8px rgba(34, 197, 94, 0.4))'}} />
                    </a>
                  );
                })}
              </div>
            </div>
            
            {/* Image */}
            <div className="relative w-full max-w-md animate-scale-in">
              <div className="aspect-square rounded-3xl overflow-hidden border-4 border-primary/30 relative z-10 shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 via-accent/20 to-primary/30 opacity-70 mix-blend-overlay z-10 animate-gothic-glow"></div>
                <img
                  src="/hero.jpg"
                  alt="Deep Patel"
                  className="w-full h-full object-cover filter contrast-110 brightness-90"
                />
              </div>
              
              {/* Background Design Elements */}
              <div className="absolute -bottom-10 -right-10 w-full h-full rounded-3xl bg-gradient-to-r from-primary/20 to-accent/15 -z-10 animate-gothic-float blur-sm"></div>
              <div className="absolute -top-5 -left-5 w-32 h-32 rounded-full bg-gradient-to-r from-accent/20 to-primary/20 -z-10 animate-gothic-float blur-md" style={{animationDelay: '1s'}}></div>
              <div className="absolute top-1/2 -right-8 w-16 h-16 rounded-full bg-gradient-to-r from-primary/15 to-accent/15 -z-10 animate-gothic-float blur-lg" style={{animationDelay: '2s'}}></div>
            </div>
          </div>
          
          {/* Scroll Indicator */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
            <span className="text-sm text-muted-foreground mb-3 font-gothic">Descend into the depths</span>
            <ArrowDown className="w-6 h-6 text-primary animate-bounce" style={{filter: 'drop-shadow(0 0 10px rgba(34, 197, 94, 0.6))'}} />
          </div>
        </div>
      </section>
    </>
  );
}
