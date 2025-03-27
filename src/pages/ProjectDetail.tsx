
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
        description: "NLP Framework for Disaster Risk Reduction",
        fullDescription: [
          "RumbleRadar is an advanced NLP framework designed specifically for disaster risk reduction and emergency management. It processes and analyzes large volumes of text data from various sources to identify critical information during emergency situations.",
          "The system utilizes state-of-the-art language models to extract relevant entities, sentiments, and actionable insights from social media posts, news articles, and emergency communications. This information is then categorized, prioritized, and presented to emergency responders in real-time.",
          "By leveraging advanced AI techniques, RumbleRadar helps disaster management teams make faster, more informed decisions, potentially saving lives and resources during critical situations."
        ],
        image: "https://images.unsplash.com/photo-1593673953398-02b921f84fa0?auto=format&fit=crop&q=80",
        date: "January 2023",
        role: "Lead AI Engineer",
        technologies: ["Python", "PyTorch", "Flask", "NLP", "RESTful API", "Docker", "Redis", "MongoDB"],
        features: [
          "Real-time processing of social media streams",
          "Multi-lingual text analysis and translation",
          "Entity recognition for locations, organizations, and people",
          "Sentiment analysis and urgency detection",
          "Geographic information visualization",
          "Automated alert system for critical information"
        ],
        challenges: [
          "Processing large volumes of noisy social media data in real-time",
          "Accurately identifying relevant information during crisis events",
          "Handling multi-lingual content with consistent accuracy",
          "Developing low-latency API endpoints for emergency response systems",
          "Implementing a robust infrastructure with high availability requirements"
        ],
        links: {
          github: "https://github.com/deeppatel234/rumbleradar",
          demo: "https://rumbleradar.ai"
        }
      },
      {
        id: "pyclassify",
        title: "pyClassify",
        description: "Automated ML-based Classification Tool",
        fullDescription: [
          "pyClassify is an automated machine learning-based classification tool designed to streamline the process of categorizing and organizing data. It provides an easy-to-use interface for building, training, and deploying classification models without requiring extensive machine learning expertise.",
          "The tool incorporates a range of classification algorithms including logistic regression, random forests, gradient boosting, and neural networks. It automatically performs feature engineering, hyperparameter tuning, and model selection to deliver optimal classification performance.",
          "With applications in content moderation, information retrieval, and document categorization, pyClassify helps organizations efficiently process and organize large volumes of unstructured data."
        ],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80",
        date: "June 2022",
        role: "Machine Learning Engineer",
        technologies: ["Python", "scikit-learn", "TensorFlow", "Streamlit", "Pandas", "MLflow", "Docker"],
        features: [
          "Auto ML for classification tasks",
          "Interactive model training and evaluation",
          "Feature importance visualization",
          "Model version tracking and comparison",
          "One-click model deployment",
          "REST API for integration with other systems",
          "Comprehensive performance metrics and reports"
        ],
        challenges: [
          "Developing an intuitive interface for non-technical users",
          "Automating the feature engineering process effectively",
          "Balancing accuracy and computational efficiency",
          "Supporting a wide range of data formats and structures",
          "Implementing robust error handling and validation"
        ],
        links: {
          github: "https://github.com/deeppatel234/pyclassify",
          demo: "https://pyclassify.dev"
        }
      },
      {
        id: "bert-qa-chatbot",
        title: "BERT QA Chatbot",
        description: "Optimized question-answering model",
        fullDescription: [
          "The BERT QA Chatbot is an optimized question-answering model built on the BERT architecture, designed to understand and respond to natural language queries with high accuracy and contextual relevance.",
          "This system leverages fine-tuned BERT models to extract precise answers from given contexts, making it ideal for applications like customer support, information retrieval, and interactive documentation systems.",
          "The chatbot incorporates context management to maintain conversation history, ensuring coherent multi-turn dialogues. It also features a fallback mechanism for handling queries outside its knowledge domain."
        ],
        image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&q=80",
        date: "October 2022",
        role: "NLP Specialist",
        technologies: ["Python", "PyTorch", "Hugging Face Transformers", "BERT", "FastAPI", "Redis", "Docker"],
        features: [
          "Contextual question answering",
          "Multi-turn conversation support",
          "PDF and document integration for knowledge base",
          "Answer confidence scoring",
          "Low-latency response generation",
          "Simple integration via REST API",
          "Multi-language support (English, Spanish, French)"
        ],
        challenges: [
          "Optimizing the model for production deployment",
          "Reducing inference time while maintaining accuracy",
          "Handling ambiguous queries effectively",
          "Managing conversation context for multi-turn interactions",
          "Implementing effective fallback strategies for out-of-domain questions"
        ],
        links: {
          github: "https://github.com/deeppatel234/bert-qa-chatbot",
          demo: "https://bertqa.ai"
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
              <Link 
                to="/#projects"
                className="bg-primary text-primary-foreground hover:opacity-90 px-6 py-3 rounded-md font-medium transition-all transform hover:translate-y-[-2px] inline-flex items-center"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Projects
              </Link>
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
          <Link 
            to="/#projects"
            className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            <span>Back to Projects</span>
          </Link>
          
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
