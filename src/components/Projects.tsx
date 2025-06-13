import { ArrowRight, Github, ExternalLink, Brain, Code, Database, Globe, Eye, Atom, Layers } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Projects() {
  const [showMore, setShowMore] = useState<{[key: string]: boolean}>({
    'all': false,
    'nlp-llm': false,
    'computer-vision': false,
    'data-science': false,
    'web-dev': false,
    'quantum': false,
    'miscellaneous': false
  });

  const nlpLlmProjects = [
    {
      id: "rumbleradar",
      title: "RumbleRadar",
      description: "Advanced sentiment analysis system for real-time monitoring and analysis of social media content using natural language processing techniques.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80",
      tags: ["NLP", "Sentiment Analysis", "Python", "Machine Learning", "Social Media"],
      links: {
        github: "https://github.com/coderkage/RumbleRadar",
        demo: "https://github.com/coderkage/RumbleRadar"
      }
    },
    {
      id: "delta",
      title: "DELTA",
      description: "Deep learning framework for advanced text analysis and language understanding with transformer-based architecture.",
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&q=80",
      tags: ["Deep Learning", "NLP", "Transformers", "Python", "PyTorch"],
      links: {
        github: "https://github.com/coderkage/DELTA",
        demo: "https://github.com/coderkage/DELTA"
      }
    },
    {
      id: "osakabot",
      title: "Osakabot",
      description: "Intelligent conversational AI chatbot with natural language understanding and context-aware responses.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80",
      tags: ["Chatbot", "AI", "NLP", "Conversational AI", "Python"],
      links: {
        github: "https://github.com/coderkage/Osakabot",
        demo: "https://github.com/coderkage/Osakabot"
      }
    }
  ];

  const computerVisionProjects = [
    {
      id: "face-recognition",
      title: "Face Recognition",
      description: "Advanced facial recognition system with high accuracy detection and identification capabilities using computer vision techniques.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80",
      tags: ["Face Recognition", "Computer Vision", "OpenCV", "Python", "Machine Learning"],
      links: {
        github: "https://github.com/coderkage/Face-Recognition",
        demo: "https://github.com/coderkage/Face-Recognition"
      }
    },
    {
      id: "webcam-filters",
      title: "Webcam Filters",
      description: "Real-time webcam filter application with various visual effects and image processing capabilities.",
      image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?auto=format&fit=crop&q=80",
      tags: ["Computer Vision", "OpenCV", "Real-time", "Image Processing", "Python"],
      links: {
        github: "https://github.com/coderkage/Webcam-Filters",
        demo: "https://github.com/coderkage/Webcam-Filters"
      }
    }
  ];

  const dataScienceProjects = [
    {
      id: "pyclassify",
      title: "PyClassify",
      description: "Python-based classification toolkit for machine learning with multiple algorithms and data preprocessing capabilities.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80",
      tags: ["Machine Learning", "Classification", "Python", "Data Science", "Scikit-learn"],
      links: {
        github: "https://github.com/coderkage/PyClassify",
        demo: "https://github.com/coderkage/PyClassify"
      }
    },
    {
      id: "qrclassify",
      title: "QRClassify",
      description: "QR code classification and analysis system with advanced pattern recognition and data extraction capabilities.",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&q=80",
      tags: ["QR Code", "Classification", "Computer Vision", "Python", "Pattern Recognition"],
      links: {
        github: "https://github.com/coderkage/QRClassify",
        demo: "https://github.com/coderkage/QRClassify"
      }
    }
  ];

  const webDevProjects = [
    {
      id: "mess-management",
      title: "Mess Management",
      description: "Comprehensive mess management system for hostels and cafeterias with meal planning, inventory, and billing features.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80",
      tags: ["Web Development", "Management System", "Full-stack", "Database", "React"],
      links: {
        github: "https://github.com/coderkage/Mess-Management",
        demo: "https://github.com/coderkage/Mess-Management"
      }
    },
    {
      id: "mrcf-website",
      title: "MRCF Website",
      description: "Official website for MRCF organization with modern design, responsive layout, and content management features.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&q=80",
      tags: ["Web Development", "React", "Responsive Design", "Frontend", "UI/UX"],
      links: {
        github: "https://github.com/coderkage/MRCF-Website",
        demo: "https://github.com/coderkage/MRCF-Website"
      }
    },
    {
      id: "track-75",
      title: "Track 75",
      description: "Progress tracking application for personal goals and milestones with analytics and visualization features.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&q=80",
      tags: ["Web App", "Progress Tracking", "Analytics", "React", "Data Visualization"],
      links: {
        github: "https://github.com/coderkage/Track-75",
        demo: "https://github.com/coderkage/Track-75"
      }
    }
  ];

  const quantumProjects = [
    {
      id: "hybrid-qnn",
      title: "Hybrid QNN",
      description: "Hybrid Quantum Neural Network implementation combining classical and quantum computing approaches for enhanced machine learning.",
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80",
      tags: ["Quantum Computing", "Neural Networks", "Hybrid Systems", "Qiskit", "Machine Learning"],
      links: {
        github: "https://github.com/coderkage/Hybrid-QNN",
        demo: "https://github.com/coderkage/Hybrid-QNN"
      }
    },
    {
      id: "circuits-algorithms",
      title: "Circuits and Algorithms",
      description: "Implementation of various quantum circuits and algorithms including fundamental quantum computing principles and operations.",
      image: "https://images.unsplash.com/photo-1636953056323-9c09fdd74fa6?auto=format&fit=crop&q=80",
      tags: ["Quantum Circuits", "Quantum Algorithms", "Qiskit", "Python", "Research"],
      links: {
        github: "https://github.com/coderkage/Circuits-and-Algorithms",
        demo: "https://github.com/coderkage/Circuits-and-Algorithms"
      }
    }
  ];

  const miscellaneousProjects = [
    {
      id: "myneta-webscraper",
      title: "MyNeta WebScraper",
      description: "Web scraping tool for extracting political candidate information and electoral data from MyNeta platform.",
      image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?auto=format&fit=crop&q=80",
      tags: ["Web Scraping", "Python", "Data Extraction", "Political Data", "Automation"],
      links: {
        github: "https://github.com/coderkage/MyNeta-WebScraper",
        demo: "https://github.com/coderkage/MyNeta-WebScraper"
      }
    },
    {
      id: "lossy-image-compression",
      title: "Lossy Image Compression (JPEG)",
      description: "Implementation of JPEG compression algorithm for lossy image compression with customizable quality settings.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80",
      tags: ["Image Compression", "JPEG", "Algorithm Implementation", "Python", "Digital Signal Processing"],
      links: {
        github: "https://github.com/coderkage/Lossy-Image-Compression-JPEG",
        demo: "https://github.com/coderkage/Lossy-Image-Compression-JPEG"
      }
    }
  ];

  const projectCategories = [
    {
      id: 'all',
      label: 'All',
      icon: Layers,
      projects: [...nlpLlmProjects.slice(0, 2), ...computerVisionProjects.slice(0, 1), ...dataScienceProjects.slice(0, 1), ...webDevProjects.slice(0, 2)],
      additionalProjects: [...nlpLlmProjects.slice(2), ...computerVisionProjects.slice(1), ...dataScienceProjects.slice(1), ...webDevProjects.slice(2), ...quantumProjects, ...miscellaneousProjects]
    },
    {
      id: 'nlp-llm',
      label: 'NLP & LLM',
      icon: Brain,
      projects: nlpLlmProjects,
      additionalProjects: []
    },
    {
      id: 'computer-vision',
      label: 'Computer Vision',
      icon: Eye,
      projects: computerVisionProjects,
      additionalProjects: []
    },
    {
      id: 'data-science',
      label: 'Data Science',
      icon: Database,
      projects: dataScienceProjects,
      additionalProjects: []
    },
    {
      id: 'web-dev',
      label: 'Web Dev',
      icon: Globe,
      projects: webDevProjects,
      additionalProjects: []
    },
    {
      id: 'quantum',
      label: 'Quantum',
      icon: Atom,
      projects: quantumProjects,
      additionalProjects: []
    },
    {
      id: 'miscellaneous',
      label: 'Miscellaneous',
      icon: Code,
      projects: miscellaneousProjects,
      additionalProjects: []
    }
  ];

  const renderProjectGrid = (projects: any[], additionalProjects: any[], categoryId: string) => {
    // For categories with more than 6 projects, split them
    const hasMoreThanSix = projects.length > 6;
    const initialProjects = hasMoreThanSix ? projects.slice(0, 6) : projects;
    const remainingProjects = hasMoreThanSix ? projects.slice(6) : [];
    const allAdditionalProjects = [...remainingProjects, ...additionalProjects];
    
    const displayedProjects = showMore[categoryId] ? [...initialProjects, ...allAdditionalProjects] : initialProjects;
    
    return (
      <>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project, index) => (
            <div 
              key={project.id}
              className="glass rounded-xl overflow-hidden border border-border hover:border-primary/30 transition-all duration-300 hover:translate-y-[-4px] group animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="aspect-video relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10"></div>
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Project Links */}
                <div className="absolute top-4 right-4 flex space-x-2 z-20">
                  <a 
                    href={project.links.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full glass flex items-center justify-center text-foreground hover:text-primary transition-colors"
                    aria-label={`GitHub: ${project.title}`}
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a 
                    href={project.links.demo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full glass flex items-center justify-center text-foreground hover:text-primary transition-colors"
                    aria-label={`Live Demo: ${project.title}`}
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-medium mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag: string) => (
                    <span 
                      key={tag} 
                      className="px-3 py-1 bg-primary/10 rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <Link 
                  to={`/project/${project.id}`}
                  className="inline-flex items-center text-sm font-medium text-primary group-hover:underline"
                >
                  <span className="mr-1">View Details</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        {allAdditionalProjects.length > 0 && (
          <div className="text-center mt-12">
            <button 
              onClick={() => setShowMore(prev => ({ ...prev, [categoryId]: !prev[categoryId] }))}
              className="glass px-6 py-3 rounded-lg border border-border hover:border-primary/50 transition-all duration-300 inline-flex items-center space-x-2"
            >
              <span>{showMore[categoryId] ? 'Show Less Projects' : 'View More Projects'}</span>
              <ArrowRight className={`w-4 h-4 transition-transform ${showMore[categoryId] ? 'rotate-180' : ''}`} />
            </button>
          </div>
        )}
      </>
    );
  };

  return (
    <section id="projects" className="section-container bg-accent/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-sm font-medium rounded-full glass mb-4 text-primary">
            Projects
          </span>
          <h2 className="section-title">Featured Work</h2>
          <p className="section-subtitle mx-auto">
            Explore a diverse collection of projects spanning AI/ML, quantum computing, web development, and more.
          </p>
        </div>
        
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full grid-cols-7 mb-12 h-auto">
            {projectCategories.map((category) => {
              const IconComponent = category.icon;
              return (
                <TabsTrigger 
                  key={category.id} 
                  value={category.id}
                  className="flex flex-col items-center space-y-1 py-3 px-2 text-xs"
                >
                  <IconComponent className="w-4 h-4" />
                  <span className="hidden sm:inline">{category.label}</span>
                  <span className="sm:hidden">{category.label.split(' ')[0]}</span>
                </TabsTrigger>
              );
            })}
          </TabsList>
          
          {projectCategories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="space-y-8">
              {renderProjectGrid(category.projects, category.additionalProjects, category.id)}
            </TabsContent>
          ))}
        </Tabs>
        
        <div className="text-center mt-12">
          <a 
            href="https://github.com/coderkage"
            target="_blank"
            rel="noopener noreferrer"
            className="glass px-6 py-3 rounded-lg border border-border hover:border-primary/50 transition-all duration-300 inline-flex items-center space-x-2"
          >
            <span>View on GitHub</span>
            <Github className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
