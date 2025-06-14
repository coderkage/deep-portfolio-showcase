
import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Logo and Short Description */}
          <div className="md:col-span-2 space-y-4">
            <h3 className="text-2xl font-medium tracking-tight">
              Deep<span className="text-primary/80">Patel</span>
            </h3>
            <p className="text-muted-foreground max-w-md">
              AI Engineer and Researcher specializing in NLP, LLM fine-tuning, and scalable AI solutions. Based in India, working globally.
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-medium">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#about" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a 
                  href="#experience" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Experience
                </a>
              </li>
              <li>
                <a 
                  href="#projects" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Projects
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-medium">Contact</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="mailto:deeppatel3910@gmail.com" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  E-mail
                </a>
              </li>
              <li>
                <a 
                  href="https://github.com/coderkage" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a 
                  href="https://www.linkedin.com/in/deeppatel3910/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a 
                  href="https://www.kaggle.com/deeppatel03" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Kaggle
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center mt-12 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Deep Patel. All rights reserved.
          </p>
          
          <p className="text-sm text-muted-foreground mt-4 md:mt-0">
            Designed with precision. Built with passion.
          </p>
        </div>
      </div>
      
      {/* Scroll To Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg transition-all duration-300 ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </footer>
  );
}
