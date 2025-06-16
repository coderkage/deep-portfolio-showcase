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
    image: "https://github.com/coderkage/RumbleRadar/raw/main/sev_map.png",
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
      demo: ""
    }
  },
  {
    id: "delta",
    title: "DELTA",
    description: "DeepSeek for Event-based Location Tracking and Analysis",
    fullDescription: [
      "DELTA (DeepSeek for Event-based Location Tracking and Analysis) is an advanced machine learning framework designed for spatial-temporal data processing and event analysis. The system combines deep learning techniques with geospatial analytics to track and analyze location-based events in real-time.",
      "The framework utilizes state-of-the-art deep learning models to run model on local machine using Ollama, process complex spatial-temporal datasets, identifying patterns and anomalies in location-based events. It utilizes YouTube api, collects trending videos, summarizes their content, and converts into audio format for further analysis.",
      "DELTA provides comprehensive analytics for event-based location intelligence and web platform, enabling organizations to make data-driven decisions for security, logistics, and emergency management applications through sophisticated pattern recognition and predictive capabilities."
    ],
    image: "https://github.com/coderkage/DELTA-DeepSeek-for-Event-based-Location-Tracking-and-Analysis/raw/main/img/architecture.png",
    date: "April 2025",
    role: "Deep Learning Engineer",
    technologies: ["Python", "Ollama", "PyTorch", "Stremlit", "GeoPandas", "Folium", "NumPy", "Pandas", "Scikit-learn"],
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
      demo: ""
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
    image: "https://github.com/coderkage/OsakaBot/blob/main/img/Screenshot%202025-03-08%20022059.png?raw=true",
    date: "March 2025",
    role: "AI Developer",
    technologies: ["LangChain", "Streamlit", "FAISS", "HuggingFace Transformers", "OpenRouter API", "Sentence Transformers"],
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
      demo: "https://osakabot.streamlit.app/"
    }
  },
  {
    id: "face-recognition",
    title: "Face Recognition Based Attendance System",
    description: "Computer Vision Application for Real-time Face Detection and Attendance Logging",
   fullDescription: [
    "This Face Recognition Attendance System is a real-time computer vision application that detects and recognizes faces using deep learning to automate attendance logging. It captures live video from a webcam (or screen) and matches faces against a set of pre-stored training images.",
    "The system uses the `face_recognition` library built on deep learning models for highly accurate face encoding and comparison. It marks attendance in a CSV file with timestamps and avoids duplicate entries by updating existing records.",
    "Built entirely with Python and OpenCV, the project showcases practical implementation of face recognition and real-time data logging, making it ideal for educational, security, and organizational use cases."
  ],
    image: "https://github.com/coderkage/Face-Recognition/raw/main/demo.png",
    date: "April 2025",
    role: "Deep Learning Engineer",
    technologies: ["Python", "OpenCV", "face_recognition", "NumPy", "Pillow (ImageGrab)", "CSV"],
    features: [
      "Real-time face detection and recognition from webcam feed",
      "Automatic attendance logging with timestamps in CSV format",
      "Multi-face recognition in a single frame",
      "Optimized face encoding and matching using `face_recognition` library",
      "Automatic handling of duplicate entries with update capability",
      "Easy extensibility for screen capture instead of webcam",
      "Lightweight and fast performance using OpenCV and NumPy"
    ],
    challenges: [
      "Handling false positives and inaccurate face matches in varying lighting",
      "Managing performance bottlenecks during real-time recognition",
      "Ensuring accurate face encoding from limited image data",
      "Preventing duplicate attendance without full database integration",
      "Improving robustness across diverse face angles and occlusions"
    ],
    links: {
      github: "https://github.com/coderkage/Face-Recognition",
      demo: ""
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
    image: "https://gamingcareers.com/wp-content/uploads/2023/04/Make-Your-Webcam-Look-Cinematic-2.jpg",
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
      demo: ""
    }
  },
  {
    id: "pyclassify",
    title: "pyClassify",
    description: "Automated Machine Learning Classification Tool",
    fullDescription: [
      "This project implements a modular and automated machine learning pipeline for classification tasks. Each component of the pipeline is decoupled into individual scripts that handle preprocessing, normalization, feature selection, model training, cross-validation, and evaluation.",
      "The main script acts as an orchestrator, accepting user inputs and executing the appropriate modules sequentially to ensure a seamless end-to-end workflow.",
      "The pipeline is designed for flexibility and reproducibility, supporting various classification algorithms and preprocessing techniques. It also generates visual performance reports such as heatmaps and accuracy plots in a final PDF output."
    ],
    image: "https://makeshiftinsights.com/wp-content/uploads/2019/10/iris_scatter_matrix_qtj7jm.png",
    date: "July 2024",
    role: "ML Engineer",
    technologies: ["Python","NumPy", "Pandas", "Scikit-learn", "Matplotlib", "Seaborn", "PDF generation(fpdf)", "CSV"],
    features: [
      "Modular design with separate scripts for each ML pipeline stage",
      "Supports multiple normalization and feature selection techniques",
      "Cross-validation with customizable number of folds",
      "Flexible model training using user-specified classification algorithms",
      "Evaluation on a blind test set with metric reporting",
      "Automated PDF generation with visualizations (heatmaps, plots)",
      "CLI-driven user interaction for full pipeline customization"
    ],
    challenges: [
      "Ensuring modular components interact seamlessly during execution",
      "Designing flexible user input handling across all scripts",
      "Managing pipeline dependencies and intermediate file formats",
      "Balancing generalization vs. overfitting during model training",
      "Generating clear and interpretable visualizations for evaluation"
    ],
    links: {
      github: "https://github.com/coderkage/pyClassify",
      demo: ""
    }
  },
{
  id: "qr-cdp-forgery-detection",
  title: "QR Code Forgery Detection using ML & Deep Learning",
  description: "Forgery detection in printed QR codes using classical ML, CNN, and transfer learning on CDP features",
  fullDescription: [
    "This project addresses the problem of detecting forged (second print) QR codes by analyzing Copy Detection Pattern (CDP) degradation through classical machine learning and deep learning techniques.",
    "A dataset of 200 QR code images, equally divided between original and counterfeit prints, was analyzed for structural differences using histogram peaks, entropy, edge sharpness, blur levels, and other handcrafted features. Models such as SVM, Random Forest, k-NN, XGBoost, and Decision Tree were evaluated using multiple metrics.",
    "Additionally, deep learning models including a Feedforward Neural Network (FFNN), CNN, and a fine-tuned ResNet-18 architecture were implemented to extract spatial and pixel-level features directly from the images. ResNet-18 achieved perfect classification accuracy (100%) on the validation set.",
    "The final pipeline integrates both feature-engineered and image-based models to ensure high performance in counterfeit detection, with future deployment potential in secure and real-time anti-counterfeiting systems."
  ],
  date: "June 2024",
  role: "Researcher & ML Engineer",
  image: "/feature.png", 
  technologies: ["Scikit-learn", "OpenCV", "PyTorch", "ResNet18", "t-SNE", "Matplotlib", "Feature Engineering"],
  features: [
    "Histogram and peak analysis for visual feature extraction",
    "10+ handcrafted features capturing blur, noise, and edge characteristics",
    "SVM, k-NN, Random Forest, and XGBoost-based classification",
    "Fully connected and convolutional neural network architectures",
    "Transfer learning with fine-tuned ResNet-18",
    "t-SNE visualization of feature separability",
    "Comprehensive evaluation using accuracy, precision, recall, and F1-score",
    "Deployment considerations for real-world security systems"
  ],
  challenges: [
    "Distinguishing between reprinted and original QR codes with subtle pixel differences",
    "Designing handcrafted features sensitive to CDP degradation",
    "Training deep learning models on a small dataset (200 samples)",
    "Evaluating performance using balanced metrics and visual diagnostics",
    "Ensuring generalization across varying print quality and distortions"
  ],
  links: {
    github: "https://github.com/coderkage/QRCode-Counterfeit-Detection",
    demo: ""
  }
}
,
  {
    id: "mess-management",
    title: "IIITR Mess Management System",
    description: "Comprehensive Hostel Mess Management Platform",
    fullDescription: [
      "This project is a full-stack Mess Management System developed using PHP, MySQL, HTML, CSS, and JavaScript. It is designed to streamline daily mess operations including meal bookings, user complaints, billing, and feedback management.",
      "The system features robust role-based authentication to distinguish between students, administrators, and staff. Students can book meals, provide feedback, and raise complaints, while administrators can manage menus, handle complaints, analyze usage patterns, and generate detailed reports.",
      "The application includes a responsive interface built with Bootstrap for seamless usability across devices and ensures secure session management for reliable user interactions."
    ],
    image: "https://github.com/coderkage/IIITR-Mess-Management-System/blob/main/demo.png?raw=true",
    date: "December 2023",
    role: "Full-Stack Developer",
    technologies: ["PHP", "MySQL", "HTML", "CSS", "JavaScript", "Bootstrap", "XAMPP", "Session Management"],
    features: [
      "Role-based user authentication and access control",
      "Meal booking and menu management system",
      "Complaint filing, viewing, commenting, and resolving",
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
      demo: ""
    }
  },
  {
    id: "mrcf-website",
    title: "MRCF Website",
    description: "Responsive NGO Website for Rural Development Outreach",
    fullDescription: [
      "This project involved designing and developing the official website for the Motibhai R. Chaudhary Foundation, a nonprofit organization focused on rural development and social welfare in Gujarat, India.",
      "The website presents the foundation’s mission, ongoing initiatives, disaster relief efforts, and healthcare programs in a clean, responsive layout. Built with modern web technologies, it serves as an outreach and information platform for both donors and beneficiaries.",
      "The goal was to create a minimalistic yet impactful design with an intuitive user experience, optimized for accessibility across devices, and structured for content scalability as the organization grows."
    ],
    image: "/mrcf.png",
    date: "December 2023",
    role: "Front End Developer",
    technologies: ["ReactJS", "HTML", "CSS", "JavaScript", "Bootstrap", "Responsive Web Design", "Web Hosting"],
    features: [
      "Fully responsive and mobile-friendly design",
      "Informational pages highlighting programs, history, and impact",
      "Gallery section showcasing fieldwork and events",
      "Contact and feedback form with email forwarding",
      "Integrated donation and support channels",
      "Accessible layout optimized for all user groups",
      "SEO-optimized metadata and page structure",
      "Cross-browser compatibility and fast load time"
    ],
    challenges: [
      "Translating organizational values into a clean digital interface",
      "Ensuring compatibility across low-end devices in rural areas",
      "Optimizing image and content load speeds for slow networks",
      "Structuring content to accommodate non-technical users",
      "Designing intuitive UX for stakeholders of all age groups"
    ],
    links: {
      github: "",
      demo: "https://motibhaifoundation.org/"
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
      technologies: ["Python", "Streamlit", "Pandas", "Datetime", "HTML/CSS", "JavaScript (DOM Injection)", "CSV File Handling"],
      features: [
        "Gamified 75-day challenge tracking for multiple users",
        "Daily submission system with timestamp validation",
        "Automatic streak detection and leaderboard display",
        "Editable task history with CSV download support",
        "Custom dark mode adaptation via injected JavaScript",
        "Dynamic circular streak progress indicators with SVG",
        "Sticky footer, styled sidebar, and GitHub link integration",
        "Responsive UI built with Streamlit’s component system"
      ],
      challenges: [
        "Ensuring correct streak computation despite late or skipped submissions",
        "Handling per-user data persistence using local CSV files",
        "Injecting JavaScript and HTML for UI enhancements inside Streamlit",
        "Implementing intuitive UX with visual streak feedback",
        "Maintaining code modularity despite Streamlit’s script-style flow"
      ],
    links: {
      github: "https://github.com/coderkage/track75",
      demo: ""
    }
  },
  {
  id: "hybrid-qnn",
  title: "Hybrid Quantum Neural Networks for Function Approximation and Classification",
  description: "Exploring Hybrid QNNs with PyTorch and Qiskit for solving classification and regression tasks",
  fullDescription: [
    "This project presents an in-depth study of Hybrid Quantum Neural Networks (QNNs) that combine classical deep learning with quantum computing principles to perform supervised learning tasks such as classification and regression.",
    "Implemented using Qiskit’s Torch Connector, the project bridges parameterized quantum circuits with PyTorch workflows, enabling classical optimization of quantum parameters. It explores EstimatorQNN and SamplerQNN variants and compares their performance on synthetic 2D datasets.",
    "The project demonstrates that Sampler QNNs outperform Estimator QNNs in classification accuracy across datasets like Moons, Circles, and Blobs, while Estimator QNNs provide excellent regression performance for smooth functions like Sin and Cos.",
    "This hybrid architecture not only shows potential for quantum advantage in low-data regimes but also lays the foundation for scaling up QNNs through classical-quantum hybrid optimization techniques, highlighting opportunities and limitations in real-world deployment."
  ],
  date: "June 2024",
  role: "Quantum ML Researcher",
  image: "https://qiskit-community.github.io/qiskit-machine-learning/_images/tutorials_10_effective_dimension_6_0.png",  // Replace with actual image path
  technologies: ["Qiskit", "Qiskit Machine Learning", "TorchConnector", "Quantum Circuits", "EstimatorQNN", "SamplerQNN"],
  features: [
    "Design and simulation of Hybrid Quantum Neural Networks",
    "Implementation of Estimator QNNs and Sampler QNNs",
    "Integration of quantum models into PyTorch via Qiskit's TorchConnector",
    "Function approximation using QNNs on datasets like Sin, Cos, Exp, and Tan",
    "Binary classification on synthetic datasets with quantum parity and probability-based models",
    "Use of parameterized quantum circuits with RealAmplitudes ansatz",
    "Training using classical optimizers such as L-BFGS and loss functions like MSE and CrossEntropy"
  ],
  challenges: [
    "Encoding classical data into quantum states using feature maps and ansatz",
    "Training quantum circuits with classical optimizers on small datasets",
    "Modeling discontinuous or nonlinear functions (e.g., Tan, Floor) using Estimator QNNs",
    "Choosing appropriate QNN type (Estimator vs. Sampler) for a given task",
    "Evaluating hybrid quantum-classical models under hardware and simulation constraints"
  ],
  links: {
    github: "https://github.com/coderkage/Hybrid-QNN",
    demo: ""  
  }
},
  {
    id: "circuits-algorithms",
    title: "Quantum Circuits and Algorithms",
    description: "Academic Quantum Algorithms Implementation and Circuit Design",
    fullDescription: [
      "This project is a comprehensive exploration of foundational quantum computing concepts and algorithms implemented using Qiskit. It includes hands-on, interactive Jupyter notebooks that simulate quantum logic gates, multi-qubit systems, and standard quantum algorithms.",
      "The repository features implementations of landmark quantum algorithms such as Deutsch–Jozsa, Grover’s Search, and Bernstein–Vazirani, along with demonstrations of state vector evolution, measurement behavior, and quantum randomness. Each notebook walks through circuit construction, simulation, visualization, and interpretation of results.",
      "The project is educationally oriented, making it suitable for students and enthusiasts beginning their journey into quantum computing. It also demonstrates the use of IBM's quantum backend (via Qiskit) for real-world circuit execution, bridging theory with practice. Concepts like entanglement, interference, and quantum parallelism are made tangible through well-commented examples and visual outputs."
    ],
    image: "https://www.researchgate.net/publication/355342607/figure/fig1/AS:1079520413130752@1634389131189/The-Grovers-algorithm-circuit.png",
    date: "November 2024",
    role: "Quantum Computing Researcher",
    technologies: ["Python", "Qiskit", "Jupyter Notebook", "NumPy", "Matplotlib", "Quantum Circuits"],
    features: [
      "Implementation of standard quantum algorithms: Deutsch–Jozsa, Grover's algorithm, Bernstein–Vazirani, and more",
      "Hands-on Jupyter notebooks demonstrating quantum gate behaviors and multi-qubit operations",
      "Use of Qiskit to simulate and execute circuits on IBM Quantum backends",
      "Visualization of quantum circuit structure and statevector outputs",
      "Educational examples like quantum random walks and number swapping",
      "Modular, annotated code ideal for learning quantum computing fundamentals",
      "Step-by-step walkthroughs with explanations and code commentary"
    ],
    challenges: [
      "Translating theoretical quantum algorithms into executable Qiskit code",
      "Managing state complexity and visualizing results for multi-qubit systems",
      "Ensuring correctness of quantum gates in simulation vs real hardware",
      "Optimizing circuit depth and gate count for efficient execution",
      "Explaining abstract quantum principles clearly in a notebook format"
    ],
    links: {
      github: "https://github.com/coderkage/Quantum-Circuits-and-Algorithms",
      demo: ""
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
    image: "https://pbs.twimg.com/media/GOGDmsPbgAApuyI?format=jpg&name=4096x4096",
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
      demo: ""
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
    image: "https://miro.medium.com/v2/resize:fit:1000/1*Oe9Rul4rOcBgx1aMqM7awA.png",
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
      demo: ""
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
              {project.links.github && project.links.github.trim() !== "" && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass px-4 py-2 rounded-lg border border-border hover:border-primary/50 transition-all duration-300 inline-flex items-center"
                >
                  <Github className="w-4 h-4 mr-2" />
                  <span>View on GitHub</span>
                </a>
              )}

              {project.links.demo && project.links.demo.trim() !== "" && (
                <a
                  href={project.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass px-4 py-2 rounded-lg border border-border hover:border-primary/50 transition-all duration-300 inline-flex items-center"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  <span>Live Demo</span>
                </a>
              )}
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
