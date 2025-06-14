
import { CalendarDays, Navigation, MapPin, Building, ExternalLink } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="section-container relative overflow-hidden">
      {/* Subtle background contrast */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-accent/5 via-transparent to-transparent"></div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-sm font-medium rounded-full glass mb-4 text-primary backdrop-blur-lg">
            Experience
          </span>
          <h2 className="section-title">Professional Journey</h2>
          <p className="section-subtitle mx-auto">
            Translating academic knowledge into practical AI solutions with a focus on Natural Language Processing and machine learning applications.
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/50 via-primary to-primary/50"></div>
          
          {/* Experience Items */}
          <div className="space-y-8">
            {/* Tarutium Global Consulting */}
            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Timeline dot */}
              <div className="absolute left-4 md:left-1/2 top-8 w-4 h-4 bg-primary rounded-full transform -translate-x-1/2 z-10 shadow-lg border-2 border-background">
                <div className="absolute inset-1 bg-primary/30 rounded-full animate-pulse"></div>
              </div>
              
              {/* Date for large screens */}
              <div className="hidden md:flex md:order-1 justify-start items-center">
                <div className="glass px-4 py-2 rounded-full inline-flex items-center space-x-2 border border-primary/20 backdrop-blur-lg bg-card/20">
                  <CalendarDays className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">May 2023 - August 2023</span>
                </div>
              </div>
              
              {/* Content */}
              <div className="md:order-0 group relative">
                {/* Soft glow background */}
                <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-primary/10 rounded-2xl blur-xl opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                
                <div className="relative ml-8 md:ml-0 md:mr-8 p-6 rounded-xl glass border border-border/50 group-hover:border-primary/30 transition-all duration-300 animate-fade-in hover:shadow-lg backdrop-blur-lg bg-card/30">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="bg-primary/10 rounded-lg p-2">
                        <Building className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold">R&D Intern</h3>
                        <p className="text-muted-foreground">Tarutium Global Consulting</p>
                      </div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span>Remote</span>
                    </div>
                    
                    <div className="md:hidden flex items-center text-sm text-muted-foreground">
                      <CalendarDays className="w-4 h-4 mr-1" />
                      <span>May - Aug 2023</span>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <p className="text-muted-foreground">
                      Built an end-to-end NLP pipeline for real-time disaster response applications, enabling more efficient emergency management systems.
                    </p>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li className="flex items-start">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-2 flex-shrink-0"></span>
                        Implemented efficient data processing pipelines using Python and PyTorch
                      </li>
                      <li className="flex items-start">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-2 flex-shrink-0"></span>
                        Optimized large language models for specialized disaster-related text analysis
                      </li>
                      <li className="flex items-start">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-2 flex-shrink-0"></span>
                        Architected scalable ML infrastructure for real-time data processing
                      </li>
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mt-4">
                    {["Python", "PyTorch", "NLP", "Flask", "ML Ops"].map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-primary/10 text-primary rounded-md text-xs font-medium border border-primary/20">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Research Assistant */}
            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Timeline dot */}
              <div className="absolute left-4 md:left-1/2 top-8 w-4 h-4 bg-primary rounded-full transform -translate-x-1/2 z-10 shadow-lg border-2 border-background">
                <div className="absolute inset-1 bg-primary/30 rounded-full animate-pulse"></div>
              </div>
              
              {/* Date for large screens */}
              <div className="hidden md:flex md:order-0 justify-end items-center">
                <div className="glass px-4 py-2 rounded-full inline-flex items-center space-x-2 border border-primary/20 backdrop-blur-lg bg-card/20">
                  <CalendarDays className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">Jan 2023 - May 2023</span>
                </div>
              </div>
              
              {/* Content */}
              <div className="md:order-1 group relative">
                {/* Soft glow background */}
                <div className="absolute -inset-2 bg-gradient-to-r from-accent/20 to-accent/10 rounded-2xl blur-xl opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                
                <div className="relative ml-8 md:ml-8 md:mr-0 p-6 rounded-xl glass border border-border/50 group-hover:border-primary/30 transition-all duration-300 animate-fade-in hover:shadow-lg backdrop-blur-lg bg-card/30">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="bg-accent/20 rounded-lg p-2">
                        <Navigation className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold">Research Assistant</h3>
                        <p className="text-muted-foreground">IIIT Raichur</p>
                      </div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors" />
                  </div>
                  
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span>Raichur, India</span>
                    </div>
                    
                    <div className="md:hidden flex items-center text-sm text-muted-foreground">
                      <CalendarDays className="w-4 h-4 mr-1" />
                      <span>Jan - May 2023</span>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <p className="text-muted-foreground">
                      Conducted research on AI-powered systems for disaster management, focusing on earthquake response analysis using machine learning.
                    </p>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li className="flex items-start">
                        <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 mr-2 flex-shrink-0"></span>
                        Collected and preprocessed multimodal data from various earthquake events
                      </li>
                      <li className="flex items-start">
                        <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 mr-2 flex-shrink-0"></span>
                        Developed novel algorithms for risk assessment and emergency response
                      </li>
                      <li className="flex items-start">
                        <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 mr-2 flex-shrink-0"></span>
                        Published research findings in international conference (ACIIDS 2025)
                      </li>
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mt-4">
                    {["Research", "Machine Learning", "Data Analysis", "TensorFlow"].map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-accent/10 text-accent rounded-md text-xs font-medium border border-accent/20">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
