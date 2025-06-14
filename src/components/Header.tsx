
import { useState, useEffect } from "react";
import { X, Menu, Github, Linkedin, ExternalLink } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll event to change header background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Navigation items
  const navItems = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Publications", href: "#publications" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  // Social Links
  const socialLinks = [
    { name: "GitHub", href: "https://github.com/deeppatel234", icon: Github },
    { name: "LinkedIn", href: "https://linkedin.com/in/deeppatel234", icon: Linkedin },
    { name: "Kaggle", href: "https://kaggle.com/deeppatel234", icon: ExternalLink },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? "py-3 glass shadow-2xl border-b border-primary/30" 
          : "py-6 bg-transparent"
      }`}
      style={scrolled ? {
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4), 0 0 20px rgba(34, 197, 94, 0.1)'
      } : {}}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="text-xl font-serif font-bold tracking-tight z-10 group">
            Deep<span className="text-primary/90 group-hover:text-primary transition-colors duration-300">Patel</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium font-gothic text-foreground/80 hover:text-primary transition-all duration-300 relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Desktop Social Links + Theme Toggle */}
          <div className="hidden md:flex items-center space-x-4">
            {socialLinks.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full flex items-center justify-center glass text-foreground hover:text-primary transition-all duration-300 border border-primary/20 hover:border-primary/50 group"
                  aria-label={item.name}
                  style={{
                    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.2)',
                  }}
                >
                  <Icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                </a>
              );
            })}
            <ThemeToggle />
          </div>

          {/* Mobile Navigation Toggle */}
          <button
            className="md:hidden z-10 group"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-foreground group-hover:text-primary transition-colors duration-300" />
            ) : (
              <Menu className="w-6 h-6 text-foreground group-hover:text-primary transition-colors duration-300" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 glass z-10 flex flex-col transition-all duration-500 ease-in-out transform ${
          isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        } md:hidden`}
        style={{
          background: 'rgba(15, 20, 25, 0.95)',
          backdropFilter: 'blur(20px)',
          boxShadow: isOpen ? '0 0 50px rgba(34, 197, 94, 0.2)' : 'none'
        }}
      >
        <div className="flex-1 flex flex-col items-center justify-center space-y-8 p-8">
          {navItems.map((item, index) => (
            <a
              key={item.name}
              href={item.href}
              className="text-2xl font-medium font-gothic text-foreground hover:text-primary transition-all duration-300 animate-fade-in"
              onClick={() => setIsOpen(false)}
              style={{animationDelay: `${index * 0.1}s`}}
            >
              {item.name}
            </a>
          ))}
          
          <div className="flex items-center space-x-6 mt-12 animate-fade-in" style={{animationDelay: '0.6s'}}>
            {socialLinks.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full flex items-center justify-center glass text-foreground hover:text-primary transition-all duration-300 border border-primary/20 hover:border-primary/50 group"
                  aria-label={item.name}
                >
                  <Icon className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                </a>
              );
            })}
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
