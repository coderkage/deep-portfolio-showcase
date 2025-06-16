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
      description: "Suite of Natural Language Processing (NLP) methodologies designed for earthquake response analysis leveraging Twitter data with sentiment analysis, location extraction, and topic modeling.",
      image: "https://github.com/coderkage/RumbleRadar/raw/main/sev_map.png",
      tags: ["NLP", "Earthquake Analysis", "Python", "Twitter API", "Sentiment Analysis", "Location Extraction", "Topic Modeling", "Disaster Response"],
      links: {
        github: "https://github.com/coderkage/RumbleRadar",
        demo: "https://github.com/coderkage/RumbleRadar"
      }
    },
    {
      id: "delta",
      title: "DELTA: DeepSeek for Event-based Location Tracking and Analysis",
      description: "DeepSeek framework for Event-based Location Tracking and Analysis using advanced machine learning techniques for spatial-temporal data processing.",
      image: "https://github.com/coderkage/DELTA-DeepSeek-for-Event-based-Location-Tracking-and-Analysis/raw/main/img/architecture.png",
      tags: ["Deep Learning", "Location Tracking", "Event Analysis", "Python", "Spatial Data", "Machine Learning"],
      links: {
        github: "https://github.com/coderkage/DELTA-DeepSeek-for-Event-based-Location-Tracking-and-Analysis",
        demo: "https://github.com/coderkage/DELTA-DeepSeek-for-Event-based-Location-Tracking-and-Analysis"
      }
    },
    {
      id: "osakabot",
      title: "OsakaBot",
      description: "Chatbot implementation of Osaka character from the slice-of-life anime 'Azumanga Daioh' with personality-driven conversational AI responses.",
      image: "https://github.com/coderkage/OsakaBot/raw/main/img/Screenshot%202025-03-10%20025014.png",
      tags: ["Chatbot", "Character AI", "Python", "Anime", "Conversational AI", "NLP"],
      links: {
        github: "https://github.com/coderkage/OsakaBot",
        demo: "https://osakabot.streamlit.app/"
      }
    }
  ];

  const computerVisionProjects = [
    {
      id: "face-recognition",
      title: "Face Recognition Based Attendance System",
      description: "Advanced facial recognition system with high accuracy detection and identification capabilities using computer vision techniques.",
      image: "https://github.com/coderkage/Face-Recognition/raw/main/demo.png",
      tags: ["Face Recognition", "Computer Vision", "OpenCV", "Python", "Real-time Detection", "Attendance System"],
      links: {
        github: "https://github.com/coderkage/Face-Recognition",
        demo: "https://www.youtube.com/watch?v=dQw4w9WgXq6"
      }
    },
    {
      id: "webcam-filters",
      title: "Webcam Artistic Filters",
      description: "Creative webcam filters with the functionality of edge contour detection using the Canny edge detector and various artistic effects using OpenCV.",
      image: "https://gamingcareers.com/wp-content/uploads/2023/04/Make-Your-Webcam-Look-Cinematic-2.jpg",
      tags: ["Computer Vision", "OpenCV", "Canny Edge Detection", "Real-time Filters", "Python", "Jupyter Notebook"],
      links: {
        github: "https://github.com/coderkage/webcam-artistic-filters",
        demo: "https://github.com/coderkage/webcam-artistic-filters"
      }
    }
  ];

  const dataScienceProjects = [
    {
      id: "pyclassify",
      title: "pyClassify",
      description: "Automated machine learning-based tool for classification problems with multiple algorithms and streamlined workflow for data preprocessing and model evaluation.",
      image: "https://makeshiftinsights.com/wp-content/uploads/2019/10/iris_scatter_matrix_qtj7jm.png",
      tags: ["Machine Learning", "Data Preprocessing", "Classification", "Feature Selection", "Cross-Validation", "Model Evaluation", "Automation"],

      links: {
        github: "https://github.com/coderkage/pyClassify",
        demo: "https://github.com/coderkage/pyClassify"
      }
    },
    {
      id: "qr-cdp-forgery-detection",
      title: "QR Code Forgery Detection using ML & Deep Learning",
      description: "Advanced system for QR code counterfeit detection and analysis using machine learning techniques for pattern recognition and authenticity verification.",
      image: "/dtreeviz.png",
      tags: ["QR Code", "Counterfeit Detection", "Computer Vision", "Python", "Security", "Pattern Recognition", "Jupyter Notebook"],
      links: {
        github: "https://github.com/coderkage/QRCode-Counterfeit-Detection",
        demo: "https://github.com/coderkage/QRCode-Counterfeit-Detection"
      }
    }
  ];

  const webDevProjects = [
    {
      id: "mess-management",
      title: "IIITR Mess Management System",
      description: "Comprehensive mess management system for IIIT Raichur hostels and cafeterias with meal planning, complaint filing, and billing features built with PHP.",
      image: "https://github.com/coderkage/IIITR-Mess-Management-System/blob/main/demo.png?raw=true",
      tags: ["Web Development", "PHP", "Mess Management", "Database", "Full-stack", "Hostel System"],
      links: {
        github: "https://github.com/coderkage/IIITR-Mess-Management-System",
        demo: "https://github.com/coderkage/IIITR-Mess-Management-System"
      }
    },
    {
      id: "mrcf-website",
      title: "MRCF Website",
      description: "Official website for MRCF organization with modern design, responsive layout, project display, event updates and content management features.",
      image: "/mrcf.png",
      tags: ["Web Development", "ReactJS", "Responsive Design", "Frontend", "UI/UX", "Freelancing"],
      links: {
        website: "https://motibhaifoundation.org/"
      }
    },
    {
      id: "track-75",
      title: "Track75 - Geek Edition",
      description: "Web application for keeping track of the 75-hard challenge with a geek twist, featuring progress tracking, analytics, and personal goal management.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&q=80",
      tags: ["Web App", "Python", "75 Hard Challenge", "Progress Tracking", "Personal Development", "Streamlit"],
      links: {
        github: "https://github.com/coderkage/track75",
        demo: "https://github.com/coderkage/track75"
      }
    }
  ];

  const quantumProjects = [
    {
      id: "hybrid-qnn",
      title: "Hybrid Quantum Neural Networks for Function Approximation and Classification",
      description: "Hybrid Quantum Neural Network implementation combining classical and quantum computing approaches for enhanced classification and regression.",
      image: "https://www.mdpi.com/electronics/electronics-10-02980/article_deploy/html/images/electronics-10-02980-g005.png",
      tags: ["Quantum Computing", "Neural Networks", "Hybrid Systems", "Qiskit", "Machine Learning"],
      links: {
        github: "https://github.com/coderkage/Hybrid-QNN",
        demo: "https://github.com/coderkage/Hybrid-QNN"
      }
    },
    {
      id: "circuits-algorithms",
      title: "Quantum Circuits and Algorithms",
      description: "Academic submission for Quantum Computing (CS333) course covering quantum algorithms implementation and circuit design using Qiskit framework.",
      image: "https://qmunity.thequantuminsider.com/wp-content/uploads/2024/06/615c924f06c94e4e5c46b408_maxresdefault.jpeg",
      tags: ["Quantum Circuits", "Quantum Algorithms", "Qiskit", "Python", "Academic Project", "Jupyter Notebook"],
      links: {
        github: "https://github.com/coderkage/Quantum-Circuits-and-Algorithms",
        demo: "https://github.com/coderkage/Quantum-Circuits-and-Algorithms"
      }
    }
  ];

  const miscellaneousProjects = [
    {
      id: "myneta-webscraper",
      title: "Web Scraper MyNeta",
      description: "Python-based web scraping tool for extracting political candidate information and electoral data from the MyNeta platform for analysis and research.",
      image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?auto=format&fit=crop&q=80",
      tags: ["Web Scraping", "Python", "Political Data", "Data Extraction", "MyNeta", "Electoral Analysis"],
      links: {
        github: "https://github.com/coderkage/Web-Scraper-MyNeta",
        demo: "https://github.com/coderkage/Web-Scraper-MyNeta"
      }
    },
    {
      id: "lossy-image-compression",
      title: "Image Compression (DCT Method)",
      description: "Implementation of lossy image compression using discrete cosine transform (DCT) method with MATLAB, demonstrating digital signal processing techniques.",
      image: "https://miro.medium.com/v2/resize:fit:1000/1*Oe9Rul4rOcBgx1aMqM7awA.png",
      tags: ["Image Compression", "DCT", "MATLAB", "Digital Signal Processing", "Algorithm Implementation"],
      links: {
        github: "https://github.com/coderkage/Image-Compression",
        demo: "https://github.com/coderkage/Image-Compression"
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
    const hasMoreThanSix = projects.length > 6;
    const initialProjects = hasMoreThanSix ? projects.slice(0, 6) : projects;
    const remainingProjects = hasMoreThanSix ? projects.slice(6) : [];
    const allAdditionalProjects = [...remainingProjects, ...additionalProjects];
    
    const displayedProjects = showMore[categoryId] ? [...initialProjects, ...allAdditionalProjects] : initialProjects;
    
    return (
      <>
        <div id="projects" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project, index) => (
            <div 
              key={project.id}
              className="glass rounded-xl overflow-hidden border border-border hover:border-primary/30 transition-all duration-300 hover:translate-y-[-4px] group animate-fade-in backdrop-blur-lg bg-card/50"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="aspect-video relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10"></div>
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                <div className="absolute top-4 right-4 flex space-x-2 z-20">
                  <a 
                    href={project.links.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full glass flex items-center justify-center text-foreground hover:text-primary transition-colors backdrop-blur-lg"
                    aria-label={`GitHub: ${project.title}`}
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a 
                    href={project.links.demo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full glass flex items-center justify-center text-foreground hover:text-primary transition-colors backdrop-blur-lg"
                    aria-label={`Live Demo: ${project.title}`}
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
              
              <div className="p-6 bg-card/30 backdrop-blur-sm">
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
                      className="px-3 py-1 bg-primary/10 rounded-full text-xs font-medium border border-primary/20 backdrop-blur-sm"
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
              className="glass px-6 py-3 rounded-lg border border-border hover:border-primary/50 transition-all duration-300 inline-flex items-center space-x-2 backdrop-blur-lg bg-card/30"
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
    <section id="projects" className="section-container relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-sm font-medium rounded-full glass mb-4 text-primary backdrop-blur-lg">
            Projects
          </span>
          <h2 className="section-title">Featured Work</h2>
          <p className="section-subtitle mx-auto">
            Explore a diverse collection of projects spanning AI/ML, quantum computing, web development, and more.
          </p>
        </div>
        
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full grid-cols-7 mb-12 h-auto glass backdrop-blur-lg border border-border/50">
            {projectCategories.map((category) => {
              const IconComponent = category.icon;
              return (
                <TabsTrigger 
                  key={category.id} 
                  value={category.id}
                  className="flex flex-col items-center space-y-1 py-3 px-2 text-xs data-[state=active]:bg-primary/20 transition-all"
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
            className="glass px-6 py-3 rounded-lg border border-border hover:border-primary/50 transition-all duration-300 inline-flex items-center space-x-2 backdrop-blur-lg bg-card/30"
          >
            <span>View on GitHub</span>
            <Github className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
