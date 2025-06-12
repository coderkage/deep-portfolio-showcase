
import { ArrowRight, Github, ExternalLink, Brain, Code, Database, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Projects() {
  const [showMore, setShowMore] = useState<{[key: string]: boolean}>({
    'ai-ml': false,
    'web-dev': false,
    'data-science': false
  });

  const aiMlProjects = [
    {
      id: "rumbleradar",
      title: "RumbleRadar",
      description: "An advanced NLP framework designed for disaster risk reduction, capable of processing and analyzing large volumes of text data to identify critical information during emergency situations.",
      image: "https://images.unsplash.com/photo-1593673953398-02b921f84fa0?auto=format&fit=crop&q=80",
      tags: ["NLP", "Disaster Management", "Python", "PyTorch", "API"],
      links: {
        github: "https://github.com/deeppatel234/rumbleradar",
        demo: "https://rumbleradar.ai"
      }
    },
    {
      id: "bert-qa-chatbot",
      title: "BERT QA Chatbot",
      description: "An optimized question-answering model built on BERT architecture, capable of understanding and responding to natural language queries with high accuracy and contextual relevance.",
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&q=80",
      tags: ["BERT", "QA", "NLP", "Chatbot", "Transformer Models"],
      links: {
        github: "https://github.com/deeppatel234/bert-qa-chatbot",
        demo: "https://bertqa.ai"
      }
    },
    {
      id: "sentiment-analyzer",
      title: "Sentiment Analyzer",
      description: "Real-time sentiment analysis tool for social media monitoring and brand reputation management using transformer models and deep learning techniques.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80",
      tags: ["Sentiment Analysis", "Social Media", "Deep Learning", "React", "FastAPI"],
      links: {
        github: "https://github.com/deeppatel234/sentiment-analyzer",
        demo: "https://sentiment-ai.dev"
      }
    }
  ];

  const webDevProjects = [
    {
      id: "portfolio-website",
      title: "Personal Portfolio",
      description: "A modern, responsive portfolio website built with React and TypeScript, featuring smooth animations and a clean design system.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&q=80",
      tags: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      links: {
        github: "https://github.com/deeppatel234/portfolio",
        demo: "https://deeppatel.dev"
      }
    },
    {
      id: "task-manager",
      title: "Task Management App",
      description: "A full-stack task management application with real-time collaboration features, built using React, Node.js, and WebSocket technology.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&q=80",
      tags: ["React", "Node.js", "MongoDB", "WebSocket", "Express"],
      links: {
        github: "https://github.com/deeppatel234/task-manager",
        demo: "https://taskflow.dev"
      }
    }
  ];

  const dataScienceProjects = [
    {
      id: "pyclassify",
      title: "pyClassify",
      description: "Automated machine learning-based classification tool that streamlines the process of categorizing and organizing data, with applications in content moderation and information retrieval.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80",
      tags: ["Machine Learning", "Classification", "Python", "TensorFlow", "Data Science"],
      links: {
        github: "https://github.com/deeppatel234/pyclassify",
        demo: "https://pyclassify.dev"
      }
    },
    {
      id: "document-qa",
      title: "Document Q&A System",
      description: "Intelligent document question-answering system that allows users to upload documents and ask questions about their content using advanced RAG techniques.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80",
      tags: ["RAG", "Document AI", "Vector Search", "LangChain", "Streamlit"],
      links: {
        github: "https://github.com/deeppatel234/document-qa",
        demo: "https://docqa.ai"
      }
    },
    {
      id: "text-summarizer",
      title: "Text Summarizer",
      description: "Advanced text summarization tool using extractive and abstractive techniques to generate concise summaries from long-form content and research papers.",
      image: "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?auto=format&fit=crop&q=80",
      tags: ["Text Summarization", "NLP", "Transformers", "ROUGE", "BLEU"],
      links: {
        github: "https://github.com/deeppatel234/text-summarizer",
        demo: "https://summarize-ai.dev"
      }
    }
  ];

  const additionalAiMlProjects = [
    {
      id: "computer-vision-model",
      title: "Object Detection Model",
      description: "Custom YOLO-based object detection model for real-time identification of objects in images and video streams with high accuracy.",
      image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?auto=format&fit=crop&q=80",
      tags: ["Computer Vision", "YOLO", "OpenCV", "PyTorch", "Real-time"],
      links: {
        github: "https://github.com/deeppatel234/object-detection",
        demo: "https://vision-ai.dev"
      }
    }
  ];

  const additionalWebDevProjects = [
    {
      id: "ecommerce-platform",
      title: "E-commerce Platform",
      description: "Full-featured e-commerce platform with payment integration, inventory management, and admin dashboard built with modern web technologies.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80",
      tags: ["React", "Stripe", "PostgreSQL", "Docker", "AWS"],
      links: {
        github: "https://github.com/deeppatel234/ecommerce",
        demo: "https://shopify-clone.dev"
      }
    }
  ];

  const projectCategories = [
    {
      id: 'ai-ml',
      label: 'AI/ML',
      icon: Brain,
      projects: aiMlProjects,
      additionalProjects: additionalAiMlProjects
    },
    {
      id: 'web-dev',
      label: 'Web Development',
      icon: Globe,
      projects: webDevProjects,
      additionalProjects: additionalWebDevProjects
    },
    {
      id: 'data-science',
      label: 'Data Science',
      icon: Database,
      projects: dataScienceProjects,
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
            Explore a selection of projects that showcase my technical skills and problem-solving approach across different domains.
          </p>
        </div>
        
        <Tabs defaultValue="ai-ml" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-12">
            {projectCategories.map((category) => {
              const IconComponent = category.icon;
              return (
                <TabsTrigger 
                  key={category.id} 
                  value={category.id}
                  className="flex items-center space-x-2"
                >
                  <IconComponent className="w-4 h-4" />
                  <span>{category.label}</span>
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
            href="https://github.com/deeppatel234"
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
