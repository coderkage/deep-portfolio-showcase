
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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3 glass shadow-sm border-b border-border/50" : "py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="text-xl font-medium tracking-tight z-10">
            Deep<span className="text-primary/80">Patel</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors duration-200"
              >
                {item.name}
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
                  className="w-10 h-10 rounded-full flex items-center justify-center glass text-foreground hover:text-primary transition-all duration-300 border border-border hover:border-primary/50"
                  aria-label={item.name}
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
            <ThemeToggle />
          </div>

          {/* Mobile Navigation Toggle */}
          <button
            className="md:hidden z-10"
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

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-background/90 glass z-10 flex flex-col transition-transform duration-300 ease-in-out transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <div className="flex-1 flex flex-col items-center justify-center space-y-8 p-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-2xl font-medium text-foreground hover:text-primary transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </a>
          ))}
          
          <div className="flex items-center space-x-4 mt-8">
            {socialLinks.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full flex items-center justify-center glass text-foreground hover:text-primary transition-all duration-300 border border-border hover:border-primary/50"
                  aria-label={item.name}
                >
                  <Icon className="w-5 h-5" />
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
