
import { ArrowRight, Github, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

export default function Projects() {
  const projects = [
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
      id: "bert-qa-chatbot",
      title: "BERT QA Chatbot",
      description: "An optimized question-answering model built on BERT architecture, capable of understanding and responding to natural language queries with high accuracy and contextual relevance.",
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&q=80",
      tags: ["BERT", "QA", "NLP", "Chatbot", "Transformer Models"],
      links: {
        github: "https://github.com/deeppatel234/bert-qa-chatbot",
        demo: "https://bertqa.ai"
      }
    }
  ];

  return (
    <section id="projects" className="section-container bg-accent/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-sm font-medium rounded-full glass mb-4 text-primary">
            Projects
          </span>
          <h2 className="section-title">Featured Work</h2>
          <p className="section-subtitle mx-auto">
            Explore a selection of projects that showcase my technical skills and problem-solving approach in AI engineering and research.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
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
                  {project.tags.map(tag => (
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
        
        <div className="text-center mt-12">
          <a 
            href="https://github.com/deeppatel234"
            target="_blank"
            rel="noopener noreferrer"
            className="glass px-6 py-3 rounded-lg border border-border hover:border-primary/50 transition-all duration-300 inline-flex items-center space-x-2"
          >
            <span>View More Projects on GitHub</span>
            <Github className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
