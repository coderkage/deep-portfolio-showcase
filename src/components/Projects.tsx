
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
      id: "llm-from-scratch",
      title: "LLM from Scratch",
      description: "Building a Large Language Model from scratch using PyTorch, implementing transformer architecture with attention mechanisms and training on custom datasets.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80",
      tags: ["PyTorch", "Transformers", "NLP", "Deep Learning", "Python"],
      links: {
        github: "https://github.com/coderkage/llm-from-scratch",
        demo: "https://llm-demo.dev"
      }
    },
    {
      id: "chatbot-ai",
      title: "AI Chatbot",
      description: "Intelligent conversational AI system with natural language understanding, context awareness, and multi-turn dialogue capabilities.",
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&q=80",
      tags: ["NLP", "Chatbot", "AI", "Python", "API"],
      links: {
        github: "https://github.com/coderkage/chatbot-ai",
        demo: "https://chatbot-ai.dev"
      }
    },
    {
      id: "sentiment-analysis",
      title: "Sentiment Analysis Tool",
      description: "Real-time sentiment analysis system for social media monitoring using transformer models and advanced NLP techniques.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80",
      tags: ["Sentiment Analysis", "NLP", "Machine Learning", "Python", "API"],
      links: {
        github: "https://github.com/coderkage/sentiment-analysis",
        demo: "https://sentiment-ai.dev"
      }
    }
  ];

  const computerVisionProjects = [
    {
      id: "object-detection",
      title: "Real-time Object Detection",
      description: "YOLO-based object detection system for real-time identification and tracking of objects in video streams with high accuracy.",
      image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?auto=format&fit=crop&q=80",
      tags: ["Computer Vision", "YOLO", "OpenCV", "PyTorch", "Real-time"],
      links: {
        github: "https://github.com/coderkage/object-detection",
        demo: "https://vision-ai.dev"
      }
    },
    {
      id: "face-recognition",
      title: "Face Recognition System",
      description: "Advanced facial recognition system with liveness detection and anti-spoofing capabilities for secure authentication.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80",
      tags: ["Face Recognition", "Computer Vision", "Security", "Python", "OpenCV"],
      links: {
        github: "https://github.com/coderkage/face-recognition",
        demo: "https://face-auth.dev"
      }
    },
    {
      id: "image-classifier",
      title: "Image Classification Model",
      description: "Deep learning model for image classification with transfer learning using pre-trained networks and custom datasets.",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&q=80",
      tags: ["Image Classification", "Transfer Learning", "CNN", "TensorFlow", "Python"],
      links: {
        github: "https://github.com/coderkage/image-classifier",
        demo: "https://classify-ai.dev"
      }
    }
  ];

  const dataScienceProjects = [
    {
      id: "data-analysis-toolkit",
      title: "Data Analysis Toolkit",
      description: "Comprehensive data analysis and visualization toolkit with automated insights generation and statistical analysis capabilities.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80",
      tags: ["Data Analysis", "Pandas", "Visualization", "Statistics", "Python"],
      links: {
        github: "https://github.com/coderkage/data-analysis-toolkit",
        demo: "https://data-toolkit.dev"
      }
    },
    {
      id: "predictive-model",
      title: "Predictive Analytics Model",
      description: "Machine learning model for predictive analytics with feature engineering, model selection, and performance optimization.",
      image: "https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?auto=format&fit=crop&q=80",
      tags: ["Predictive Analytics", "Machine Learning", "Feature Engineering", "Scikit-learn", "Python"],
      links: {
        github: "https://github.com/coderkage/predictive-model",
        demo: "https://predict-ai.dev"
      }
    }
  ];

  const webDevProjects = [
    {
      id: "portfolio-website",
      title: "Personal Portfolio",
      description: "Modern, responsive portfolio website built with React and TypeScript, featuring smooth animations and a clean design system.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&q=80",
      tags: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      links: {
        github: "https://github.com/coderkage/portfolio",
        demo: "https://coderkage.dev"
      }
    },
    {
      id: "fullstack-app",
      title: "Full-Stack Web Application",
      description: "Complete web application with authentication, database integration, and RESTful API using modern web technologies.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&q=80",
      tags: ["React", "Node.js", "MongoDB", "Express", "JWT"],
      links: {
        github: "https://github.com/coderkage/fullstack-app",
        demo: "https://webapp.dev"
      }
    },
    {
      id: "ecommerce-platform",
      title: "E-commerce Platform",
      description: "Feature-rich e-commerce platform with payment integration, inventory management, and admin dashboard.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80",
      tags: ["React", "Stripe", "PostgreSQL", "Docker", "AWS"],
      links: {
        github: "https://github.com/coderkage/ecommerce",
        demo: "https://shop-platform.dev"
      }
    }
  ];

  const quantumProjects = [
    {
      id: "quantum-simulator",
      title: "Quantum Circuit Simulator",
      description: "Quantum computing simulator for designing and testing quantum circuits with visualization of quantum states and operations.",
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80",
      tags: ["Quantum Computing", "Qiskit", "Python", "Simulation", "Visualization"],
      links: {
        github: "https://github.com/coderkage/quantum-simulator",
        demo: "https://quantum-sim.dev"
      }
    },
    {
      id: "quantum-algorithms",
      title: "Quantum Algorithms Implementation",
      description: "Implementation of various quantum algorithms including Shor's algorithm, Grover's search, and quantum machine learning algorithms.",
      image: "https://images.unsplash.com/photo-1636953056323-9c09fdd74fa6?auto=format&fit=crop&q=80",
      tags: ["Quantum Algorithms", "Qiskit", "Python", "Research", "Implementation"],
      links: {
        github: "https://github.com/coderkage/quantum-algorithms",
        demo: "https://quantum-algos.dev"
      }
    }
  ];

  const miscellaneousProjects = [
    {
      id: "automation-scripts",
      title: "Automation Scripts Collection",
      description: "Collection of Python automation scripts for various tasks including file management, web scraping, and system administration.",
      image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?auto=format&fit=crop&q=80",
      tags: ["Python", "Automation", "Scripting", "Web Scraping", "System Admin"],
      links: {
        github: "https://github.com/coderkage/automation-scripts",
        demo: "https://auto-scripts.dev"
      }
    },
    {
      id: "api-gateway",
      title: "Microservices API Gateway",
      description: "Scalable API gateway for microservices architecture with rate limiting, authentication, and load balancing capabilities.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80",
      tags: ["Microservices", "API Gateway", "Node.js", "Docker", "Kubernetes"],
      links: {
        github: "https://github.com/coderkage/api-gateway",
        demo: "https://gateway-api.dev"
      }
    },
    {
      id: "blockchain-app",
      title: "Blockchain Application",
      description: "Decentralized application built on Ethereum with smart contracts for secure and transparent transactions.",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80",
      tags: ["Blockchain", "Ethereum", "Smart Contracts", "Solidity", "Web3"],
      links: {
        github: "https://github.com/coderkage/blockchain-app",
        demo: "https://dapp.dev"
      }
    }
  ];

  const projectCategories = [
    {
      id: 'all',
      label: 'All',
      icon: Layers,
      projects: [...nlpLlmProjects.slice(0, 2), ...computerVisionProjects.slice(0, 2), ...dataScienceProjects.slice(0, 1), ...webDevProjects.slice(0, 2)],
      additionalProjects: [...nlpLlmProjects.slice(2), ...computerVisionProjects.slice(2), ...dataScienceProjects.slice(1), ...webDevProjects.slice(2), ...quantumProjects, ...miscellaneousProjects]
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
    const displayedProjects = showMore[categoryId] ? [...projects, ...additionalProjects] : projects;
    
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
        
        {additionalProjects.length > 0 && (
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
