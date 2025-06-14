
import { useState, useEffect } from "react";
import { X, Menu, Github, Linkedin, ExternalLink } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Publications", href: "#publications" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { name: "GitHub", href: "https://github.com/deeppatel234", icon: Github },
    { name: "LinkedIn", href: "https://linkedin.com/in/deeppatel234", icon: Linkedin },
    { name: "Kaggle", href: "https://kaggle.com/deeppatel234", icon: ExternalLink },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? "py-4 glass-card shadow-2xl border-b border-white/20" 
          : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Enhanced Logo */}
          <a href="#" className="relative group z-10">
            <span className="text-2xl font-bold tracking-tight">
              Deep<span className="gradient-text">Patel</span>
            </span>
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-300 group-hover:w-full"></div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="relative px-4 py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-all duration-300 rounded-xl hover:bg-white/10 group"
              >
                {item.name}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-3/4"></div>
              </a>
            ))}
          </nav>

          {/* Desktop Social Links + Theme Toggle */}
          <div className="hidden lg:flex items-center space-x-3">
            {socialLinks.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl glass flex items-center justify-center text-foreground hover:text-primary transition-all duration-300 hover:scale-110 hover:shadow-xl group"
                  aria-label={item.name}
                >
                  <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
              );
            })}
            <div className="ml-2">
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile Navigation Toggle */}
          <button
            className="lg:hidden z-10 w-12 h-12 rounded-xl glass flex items-center justify-center"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>
      </div>

      {/* Enhanced Mobile Menu */}
      <div
        className={`fixed inset-0 glass-card z-10 flex flex-col transition-all duration-500 ease-in-out transform ${
          isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        } lg:hidden`}
      >
        <div className="flex-1 flex flex-col items-center justify-center space-y-8 p-8">
          {navItems.map((item, index) => (
            <a
              key={item.name}
              href={item.href}
              className="text-3xl font-semibold text-foreground hover:text-primary transition-all duration-300 transform hover:scale-110"
              onClick={() => setIsOpen(false)}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {item.name}
            </a>
          ))}
          
          <div className="flex items-center space-x-4 mt-12">
            {socialLinks.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-foreground hover:text-primary transition-all duration-300 hover:scale-110"
                  aria-label={item.name}
                >
                  <Icon className="w-6 h-6" />
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
