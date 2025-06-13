import { HashLink } from 'react-router-hash-link';
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Github, ExternalLink, Calendar, User, Tag } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription: string[];
  image: string;
  date: string;
  role: string;
  technologies: string[];
  features: string[];
  challenges: string[];
  links: {
    github: string;
    demo: string;
  };
}

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API fetch for project details
    setLoading(true);
    
    // Mock data - in a real application, this would come from an API
    const projects: Project[] = [
  {
    id: "rumbleradar",
    title: "RumbleRadar",
    description: "NLP Framework for Earthquake Response Analysis",
    fullDescription: [
      "RumbleRadar is a comprehensive suite of Natural Language Processing methodologies specifically designed for earthquake response analysis leveraging Twitter data. The system processes real-time social media streams to extract critical information during seismic events.",
      "The framework employs advanced machine learning algorithms including Named Entity Recognition (NER), Aspect-Based Sentiment Analysis (ABSA), and Topic Modeling using Latent Dirichlet Allocation (LDA). It analyzes tweets from major earthquake events including Haiti 2010, Mexico 2017, Iraq-Iran 2017, Turkey 2023, and Japan 2024.",
      "By combining location extraction, sentiment analysis across 9 key aspects (Food, Injury, Shelter, Death, Property Damage, Rescue Efforts, Fear/Panic, Relief/Support, Government Response), and temporal visualization, RumbleRadar provides actionable insights for disaster management teams to prioritize emergency response efforts effectively."
    ],
    image: "https://images.unsplash.com/photo-1593673953398-02b921f84fa0?auto=format&fit=crop&q=80",
    date: "May 2024",
    role: "ML Research Engineer",
    technologies: ["Python", "spaCy", "VADER", "scikit-learn", "geopy", "Tweepy", "Jupyter Notebook", "LDA", "NER"],
    features: [
      "Real-time Twitter data processing and analysis",
      "Location extraction using Named Entity Recognition (NER)",
      "Aspect-Based Sentiment Analysis across 9 disaster-related aspects",
      "Topic modeling using Latent Dirichlet Allocation (LDA)",
      "Geographic severity mapping with coordinate visualization",
      "Temporal analysis and visualization of tweet patterns",
      "Multi-dataset support for comparative earthquake analysis"
    ],
    challenges: [
      "Handling sparse and inaccurate geo-tagged data from Twitter API",
      "Developing robust NER models for location extraction from tweet text",
      "Processing large volumes of multilingual social media content",
      "Creating accurate severity maps from crowdsourced information",
      "Implementing real-time analysis pipeline for emergency response"
    ],
    links: {
      github: "https://github.com/coderkage/RumbleRadar",
      demo: "https://github.com/coderkage/RumbleRadar"
    }
  },
  {
    id: "delta",
    title: "DELTA",
    description: "DeepSeek Framework for Event-based Location Tracking",
    fullDescription: [
      "DELTA (DeepSeek for Event-based Location Tracking and Analysis) is an advanced machine learning framework designed for spatial-temporal data processing and event analysis. The system combines deep learning techniques with geospatial analytics to track and analyze location-based events in real-time.",
      "The framework utilizes state-of-the-art deep learning models to process complex spatial-temporal datasets, identifying patterns and anomalies in location-based events. It incorporates advanced feature extraction techniques and predictive modeling to forecast event trajectories and assess risk factors.",
      "DELTA provides comprehensive analytics for event-based location intelligence, enabling organizations to make data-driven decisions for security, logistics, and emergency management applications through sophisticated pattern recognition and predictive capabilities."
    ],
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&q=80",
    date: "April 2025",
    role: "Deep Learning Engineer",
    technologies: ["Python", "TensorFlow", "PyTorch", "GeoPandas", "Folium", "NumPy", "Pandas", "Scikit-learn"],
    features: [
      "Deep learning-based spatial-temporal pattern recognition",
      "Real-time event tracking and location analysis",
      "Predictive modeling for event trajectory forecasting",
      "Advanced geospatial data visualization and mapping",
      "Multi-source data integration and preprocessing",
      "Anomaly detection in location-based event streams",
      "Risk assessment and threat evaluation algorithms"
    ],
    challenges: [
      "Processing high-dimensional spatial-temporal datasets efficiently",
      "Developing robust deep learning models for location prediction",
      "Integrating multiple heterogeneous data sources seamlessly",
      "Implementing real-time processing with low-latency requirements",
      "Creating accurate predictive models for complex event patterns"
    ],
    links: {
      github: "https://github.com/coderkage/DELTA-DeepSeek-for-Event-based-Location-Tracking-and-Analysis",
      demo: "https://github.com/coderkage/DELTA-DeepSeek-for-Event-based-Location-Tracking-and-Analysis"
    }
  },
  {
    id: "osakabot",
    title: "OsakaBot",
    description: "Character AI Chatbot from Azumanga Daioh",
    fullDescription: [
      "OsakaBot is a personality-driven conversational AI implementation of the beloved Osaka character from the slice-of-life anime 'Azumanga Daioh'. The chatbot captures Osaka's unique speech patterns, quirky personality traits, and distinctive conversational style.",
      "The system employs natural language processing techniques to generate responses that authentically reflect Osaka's character, including her slow-paced thinking, unexpected insights, and endearing confusion. The bot maintains conversation context while staying true to the character's personality.",
      "Built with Python and leveraging modern NLP libraries, OsakaBot provides an entertaining and nostalgic experience for anime fans while demonstrating advanced character modeling and conversational AI techniques."
    ],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80",
    date: "March 2025",
    role: "AI Developer",
    technologies: ["Python", "NLTK", "spaCy", "Transformers", "Flask", "JSON", "Regular Expressions"],
    features: [
      "Character-accurate personality modeling and response generation",
      "Context-aware conversation management",
      "Anime-specific dialogue patterns and speech quirks",
      "Memory system for maintaining conversation continuity",
      "Customizable personality parameters and response styles",
      "Integration-ready API for web and mobile applications"
    ],
    challenges: [
      "Accurately modeling complex anime character personality traits",
      "Maintaining character consistency across long conversations",
      "Balancing entertainment value with meaningful interactions",
      "Implementing natural conversation flow with character quirks",
      "Creating engaging responses while staying true to source material"
    ],
    links: {
      github: "https://github.com/coderkage/OsakaBot",
      demo: "https://github.com/coderkage/OsakaBot"
    }
  },
  {
    id: "webcam-filters",
    title: "Webcam Artistic Filters",
    description: "Real-time Computer Vision Filter Application",
    fullDescription: [
      "Webcam Artistic Filters is a comprehensive computer vision application that applies creative visual effects and artistic filters to real-time webcam feeds. The system utilizes advanced image processing techniques, including Canny edge detection, to create stunning visual transformations.",
      "The application features multiple artistic filters ranging from edge contour detection to stylistic transformations, all processed in real-time using OpenCV. Users can apply various effects including sketch-like drawings, artistic renderings, and custom visual filters.",
      "Built with Python and OpenCV, the system demonstrates proficiency in computer vision techniques while providing an interactive and entertaining user experience with smooth real-time performance."
    ],
    image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?auto=format&fit=crop&q=80",
    date: "May 2024",
    role: "Computer Vision Developer",
    technologies: ["Python", "OpenCV", "NumPy", "Matplotlib", "Jupyter Notebook", "Image Processing"],
    features: [
      "Real-time webcam feed processing and display",
      "Canny edge detection with customizable parameters",
      "Multiple artistic filter options and effects",
      "Interactive user interface for filter selection",
      "Real-time parameter adjustment and tuning",
      "Image capture and save functionality",
      "Performance optimization for smooth real-time processing"
    ],
    challenges: [
      "Achieving smooth real-time performance with complex image processing",
      "Implementing multiple filter algorithms efficiently",
      "Optimizing OpenCV operations for low-latency processing",
      "Creating intuitive user interface for filter controls",
      "Balancing filter quality with processing speed requirements"
    ],
    links: {
      github: "https://github.com/coderkage/webcam-artistic-filters",
      demo: "https://github.com/coderkage/webcam-artistic-filters"
    }
  },
  {
    id: "pyclassify",
    title: "pyClassify",
    description: "Automated Machine Learning Classification Tool",
    fullDescription: [
      "pyClassify is a comprehensive automated machine learning tool specifically designed for classification problems. The system streamlines the entire ML pipeline from data preprocessing to model evaluation, making machine learning accessible to users with varying levels of expertise.",
      "The framework incorporates multiple classification algorithms including Random Forest, SVM, Gradient Boosting, and Neural Networks, with automated hyperparameter tuning and cross-validation. It features intelligent data preprocessing, feature selection, and model comparison capabilities.",
      "Built with a focus on automation and ease of use, pyClassify provides detailed model performance metrics, visualization tools, and export capabilities, enabling users to quickly prototype and deploy classification solutions."
    ],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80",
    date: "July 2024",
    role: "ML Engineer",
    technologies: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib", "Seaborn", "XGBoost", "GridSearchCV"],
    features: [
      "Automated data preprocessing and feature engineering",
      "Multiple classification algorithm implementations",
      "Hyperparameter tuning with grid search and random search",
      "Cross-validation and model performance evaluation",
      "Feature importance analysis and selection",
      "Model comparison and recommendation system",
      "Comprehensive visualization and reporting tools",
      "Export functionality for trained models"
    ],
    challenges: [
      "Creating a flexible framework supporting multiple ML algorithms",
      "Implementing robust automated preprocessing for diverse datasets",
      "Designing efficient hyperparameter optimization strategies",
      "Building comprehensive evaluation and comparison metrics",
      "Ensuring scalability for large datasets and complex models"
    ],
    links: {
      github: "https://github.com/coderkage/pyClassify",
      demo: "https://github.com/coderkage/pyClassify"
    }
  },
  {
    id: "qrclassify",
    title: "QR Code Counterfeit Detection",
    description: "Advanced QR Code Security and Authentication System",
    fullDescription: [
      "QR Code Counterfeit Detection is a sophisticated security system designed to identify and prevent QR code counterfeiting through advanced machine learning and computer vision techniques. The system analyzes QR code patterns, structures, and authenticity markers to detect fraudulent codes.",
      "The framework employs deep learning models trained on legitimate and counterfeit QR code datasets, utilizing pattern recognition algorithms to identify subtle differences that indicate tampering or forgery. It includes real-time scanning capabilities and comprehensive security assessment features.",
      "Built for security-critical applications, the system provides detailed analysis reports, confidence scores, and integration capabilities for existing security infrastructure, helping organizations protect against QR code-based fraud and security threats."
    ],
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&q=80",
    date: "June 2025",
    role: "Security Research Engineer",
    technologies: ["Python", "OpenCV", "TensorFlow", "PIL", "NumPy", "Jupyter Notebook", "Image Processing", "Pattern Recognition"],
    features: [
      "Advanced QR code pattern analysis and verification",
      "Machine learning-based counterfeit detection algorithms",
      "Real-time scanning and authentication capabilities",
      "Comprehensive security assessment and reporting",
      "Integration APIs for existing security systems",
      "Detailed forensic analysis of QR code structures",
      "Multi-format QR code support and validation",
      "Confidence scoring and risk assessment"
    ],
    challenges: [
      "Developing robust detection algorithms for sophisticated forgeries",
      "Training models on diverse counterfeit QR code samples",
      "Achieving high accuracy while minimizing false positives",
      "Implementing real-time processing for security applications",
      "Creating comprehensive testing frameworks for security validation"
    ],
    links: {
      github: "https://github.com/coderkage/QRCode-Counterfeit-Detection",
      demo: "https://github.com/coderkage/QRCode-Counterfeit-Detection"
    }
  },
  {
    id: "mess-management",
    title: "IIITR Mess Management System",
    description: "Comprehensive Hostel Mess Management Platform",
    fullDescription: [
      "IIITR Mess Management System is a comprehensive web-based platform designed specifically for managing hostel mess operations at IIIT Ranchi. The system streamlines meal planning, inventory management, billing, and student services through an integrated digital solution.",
      "The platform features separate interfaces for students, mess staff, and administrators, providing role-based access control and functionality. It includes meal booking systems, menu management, inventory tracking, billing automation, and detailed reporting capabilities.",
      "Built with PHP and featuring a robust database architecture, the system has significantly improved operational efficiency and student satisfaction by digitizing previously manual processes and providing transparent, accessible mess management services."
    ],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80",
    date: "December 2023",
    role: "Full-Stack Developer",
    technologies: ["PHP", "MySQL", "HTML", "CSS", "JavaScript", "Bootstrap", "AJAX", "Session Management"],
    features: [
      "Role-based user authentication and access control",
      "Meal booking and menu management system",
      "Inventory tracking and procurement management",
      "Automated billing and payment processing",
      "Student feedback and rating system",
      "Administrative dashboard with analytics",
      "Mobile-responsive design for all devices",
      "Comprehensive reporting and data export"
    ],
    challenges: [
      "Designing scalable architecture for multiple user roles",
      "Implementing secure payment processing and billing systems",
      "Creating intuitive interfaces for non-technical users",
      "Managing complex inventory and meal planning workflows",
      "Ensuring high availability for critical mess operations"
    ],
    links: {
      github: "https://github.com/coderkage/IIITR-Mess-Management-System",
      demo: "https://github.com/coderkage/IIITR-Mess-Management-System"
    }
  },
  {
    id: "track-75",
    title: "Track75 - Geek Edition",
    description: "Gamified 75-Hard Challenge Tracking Application",
    fullDescription: [
      "Track75 Geek Edition is an innovative web application that gamifies the popular 75-Hard challenge with a technology-focused twist. The platform helps users track their progress through a structured 75-day personal development program with added geek-culture elements and achievements.",
      "The application features comprehensive progress tracking, habit monitoring, achievement systems, and social features that encourage consistency and motivation. It includes customizable challenges, progress visualization, and community features for shared accountability.",
      "Built with Python web frameworks, the system demonstrates modern web development practices while providing an engaging user experience that makes personal development both fun and sustainable through gamification principles."
    ],
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&q=80",
    date: "May 2024",
    role: "Full-Stack Developer",
    technologies: ["Python", "Flask/Django", "SQLAlchemy", "HTML", "CSS", "JavaScript", "Chart.js", "Bootstrap"],
    features: [
      "Comprehensive 75-day challenge tracking system",
      "Gamified achievement and badge system",
      "Progress visualization with charts and analytics",
      "Social features and community challenges",
      "Customizable goals and habit tracking",
      "Mobile-responsive design for daily use",
      "Progress sharing and social accountability",
      "Detailed statistics and performance insights"
    ],
    challenges: [
      "Creating engaging gamification mechanics for long-term motivation",
      "Designing intuitive daily tracking interfaces",
      "Implementing reliable progress persistence and data integrity",
      "Building social features that encourage positive competition",
      "Optimizing user experience for consistent daily engagement"
    ],
    links: {
      github: "https://github.com/coderkage/track75",
      demo: "https://github.com/coderkage/track75"
    }
  },
  {
    id: "circuits-algorithms",
    title: "Quantum Computing Homework-3",
    description: "Academic Quantum Algorithms Implementation",
    fullDescription: [
      "Quantum Computing Homework-3 is an academic project for the CS333 Quantum Computing course, focusing on the implementation and analysis of fundamental quantum algorithms. The project demonstrates practical applications of quantum computing principles using the Qiskit framework.",
      "The implementation covers various quantum algorithms including quantum search algorithms, quantum cryptographic protocols, and quantum machine learning techniques. Each algorithm is thoroughly documented with theoretical background, implementation details, and performance analysis.",
      "Built as a comprehensive learning resource, the project showcases quantum circuit design, quantum state manipulation, and algorithm optimization techniques, providing valuable insights into the practical aspects of quantum computing development."
    ],
    image: "https://images.unsplash.com/photo-1636953056323-9c09fdd74fa6?auto=format&fit=crop&q=80",
    date: "November 2024",
    role: "Quantum Computing Researcher",
    technologies: ["Python", "Qiskit", "Jupyter Notebook", "NumPy", "Matplotlib", "Quantum Circuits"],
    features: [
      "Implementation of fundamental quantum algorithms",
      "Quantum circuit design and optimization",
      "Comprehensive theoretical and practical documentation",
      "Performance analysis and benchmarking",
      "Interactive Jupyter notebook demonstrations",
      "Quantum state visualization and analysis",
      "Educational resources and learning materials"
    ],
    challenges: [
      "Understanding and implementing complex quantum algorithms",
      "Optimizing quantum circuits for limited quantum hardware",
      "Creating clear educational documentation for quantum concepts",
      "Debugging quantum algorithms with probabilistic outcomes",
      "Balancing theoretical accuracy with practical implementation constraints"
    ],
    links: {
      github: "https://github.com/coderkage/Quantum-Computing-Homework-3",
      demo: "https://github.com/coderkage/Quantum-Computing-Homework-3"
    }
  },
  {
    id: "myneta-webscraper",
    title: "Web Scraper MyNeta",
    description: "Political Data Extraction and Analysis Tool",
    fullDescription: [
      "Web Scraper MyNeta is a specialized data extraction tool designed to collect and analyze political candidate information from the MyNeta platform. The system automates the process of gathering electoral data, candidate profiles, and political information for research and analysis purposes.",
      "The scraper employs advanced web scraping techniques to navigate complex web structures, handle dynamic content, and extract structured data from various political information sources. It includes data cleaning, validation, and export capabilities for further analysis.",
      "Built with Python and web scraping libraries, the tool demonstrates proficiency in data extraction, web automation, and political data analysis, providing valuable resources for researchers, journalists, and civic organizations studying electoral processes."
    ],
    image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?auto=format&fit=crop&q=80",
    date: "September 2024",
    role: "Data Engineer",
    technologies: ["Python", "BeautifulSoup", "Requests", "Selenium", "Pandas", "CSV", "JSON", "Web Scraping"],
    features: [
      "Automated political candidate data extraction",
      "Robust web scraping with error handling and retries",
      "Data cleaning and validation pipelines",
      "Multiple output formats (CSV, JSON, Excel)",
      "Configurable scraping parameters and filters",
      "Rate limiting and ethical scraping practices",
      "Comprehensive logging and monitoring",
      "Data analysis and visualization capabilities"
    ],
    challenges: [
      "Handling dynamic web content and JavaScript-rendered pages",
      "Implementing robust error handling for unreliable web sources",
      "Ensuring ethical scraping practices and rate limiting",
      "Managing large-scale data extraction efficiently",
      "Creating reliable data validation and cleaning processes"
    ],
    links: {
      github: "https://github.com/coderkage/Web-Scraper-MyNeta",
      demo: "https://github.com/coderkage/Web-Scraper-MyNeta"
    }
  },
  {
    id: "lossy-image-compression",
    title: "Image Compression (DCT Method)",
    description: "MATLAB Implementation of JPEG Compression Algorithm",
    fullDescription: [
      "Image Compression using DCT Method is a comprehensive MATLAB implementation of the JPEG compression algorithm utilizing Discrete Cosine Transform (DCT) techniques. The project demonstrates fundamental concepts in digital signal processing and image compression theory.",
      "The implementation covers the complete JPEG compression pipeline including color space conversion, block-wise DCT transformation, quantization, entropy encoding, and decompression. It provides detailed analysis of compression ratios, quality metrics, and visual comparison tools.",
      "Built as both an educational resource and practical tool, the project showcases advanced MATLAB programming techniques while providing insights into the mathematical foundations of modern image compression standards used worldwide."
    ],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80",
    date: "May 2024",
    role: "Signal Processing Engineer",
    technologies: ["MATLAB", "Image Processing Toolbox", "DCT", "Quantization", "Digital Signal Processing"],
    features: [
      "Complete JPEG compression algorithm implementation",
      "Discrete Cosine Transform (DCT) analysis and optimization",
      "Customizable quantization tables and quality settings",
      "Comprehensive image quality metrics and analysis",
      "Visual comparison tools for original vs compressed images",
      "Batch processing capabilities for multiple images",
      "Detailed performance benchmarking and optimization",
      "Educational documentation and algorithm explanations"
    ],
    challenges: [
      "Implementing efficient DCT algorithms for large images",
      "Optimizing quantization parameters for quality vs size trade-offs",
      "Creating accurate image quality assessment metrics",
      "Developing user-friendly interfaces in MATLAB environment",
      "Ensuring compatibility with standard JPEG specifications"
    ],
    links: {
      github: "https://github.com/coderkage/Image-Compression",
      demo: "https://github.com/coderkage/Image-Compression"
    }
  }
];
    
    setTimeout(() => {
      const foundProject = projects.find(p => p.id === id);
      setProject(foundProject || null);
      setLoading(false);
    }, 500);
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <div className="pt-28 pb-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col items-center justify-center h-[60vh]">
              <div className="w-16 h-16 border-4 border-primary/30 border-t-primary rounded-full animate-spin"></div>
              <p className="mt-4 text-muted-foreground">Loading project details...</p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <div className="pt-28 pb-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col items-center justify-center h-[60vh] text-center">
              <h2 className="text-3xl font-medium mb-4">Project Not Found</h2>
              <p className="text-muted-foreground mb-8">The project you're looking for doesn't exist or has been removed.</p>
              <HashLink
                to="/#projects"
                smooth
                className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-8"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                <span>Back to Projects</span>
              </HashLink>

            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      <div className="pt-28 pb-20 px-4">
        <div className="max-w-5xl mx-auto">
          {/* Back to Projects Link */}
          <HashLink
                to="/#projects"
                smooth
                className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-8"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                <span>Back to Projects</span>
              </HashLink>
          
          {/* Project Header */}
          <div className="mb-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{project.title}</h1>
            <p className="text-xl text-muted-foreground mb-8">{project.description}</p>
            
            <div className="flex flex-wrap gap-4 items-center">
              <a 
                href={project.links.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="glass px-4 py-2 rounded-lg border border-border hover:border-primary/50 transition-all duration-300 inline-flex items-center"
              >
                <Github className="w-4 h-4 mr-2" />
                <span>View on GitHub</span>
              </a>
              
              <a 
                href={project.links.demo} 
                target="_blank" 
                rel="noopener noreferrer"
                className="glass px-4 py-2 rounded-lg border border-border hover:border-primary/50 transition-all duration-300 inline-flex items-center"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                <span>Live Demo</span>
              </a>
            </div>
          </div>
          
          {/* Project Image */}
          <div className="mb-12 rounded-xl overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-auto object-cover aspect-video"
            />
          </div>
          
          {/* Project Metadata */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="glass p-5 rounded-xl border border-border">
              <div className="flex items-center mb-2 text-primary">
                <Calendar className="w-5 h-5 mr-2" />
                <h3 className="font-medium">Timeline</h3>
              </div>
              <p>{project.date}</p>
            </div>
            
            <div className="glass p-5 rounded-xl border border-border">
              <div className="flex items-center mb-2 text-primary">
                <User className="w-5 h-5 mr-2" />
                <h3 className="font-medium">Role</h3>
              </div>
              <p>{project.role}</p>
            </div>
            
            <div className="glass p-5 rounded-xl border border-border">
              <div className="flex items-center mb-2 text-primary">
                <Tag className="w-5 h-5 mr-2" />
                <h3 className="font-medium">Technologies</h3>
              </div>
              <div className="flex flex-wrap gap-2 mt-2">
                {project.technologies.slice(0, 3).map((tech) => (
                  <span key={tech} className="px-2 py-1 bg-primary/10 rounded-full text-xs">
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 3 && (
                  <span className="px-2 py-1 bg-primary/10 rounded-full text-xs">
                    +{project.technologies.length - 3} more
                  </span>
                )}
              </div>
            </div>
          </div>
          
          {/* Project Description */}
          <div className="mb-12">
            <h2 className="text-2xl font-medium mb-6">About the Project</h2>
            <div className="space-y-4 text-lg">
              {project.fullDescription.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
          
          {/* Project Details - Two Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            {/* Features */}
            <div>
              <h2 className="text-2xl font-medium mb-6">Key Features</h2>
              <ul className="space-y-3">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary text-sm shrink-0 mt-0.5 mr-3">
                      {index + 1}
                    </div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Challenges */}
            <div>
              <h2 className="text-2xl font-medium mb-6">Technical Challenges</h2>
              <ul className="space-y-3">
                {project.challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-primary shrink-0 mt-2 mr-3"></div>
                    <span>{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Technologies */}
          <div className="mb-12">
            <h2 className="text-2xl font-medium mb-6">Technologies Used</h2>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech) => (
                <span key={tech} className="px-4 py-2 glass rounded-lg border border-border">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          {/* Call to Action */}
          <div className="glass p-10 rounded-xl border border-border text-center">
            <h3 className="text-2xl font-medium mb-4">Interested in working together?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            <Link 
              to="/#contact"
              className="bg-primary text-primary-foreground hover:opacity-90 px-6 py-3 rounded-md font-medium transition-all transform hover:translate-y-[-2px] inline-flex items-center"
            >
              <span>Get In Touch</span>
            </Link>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
