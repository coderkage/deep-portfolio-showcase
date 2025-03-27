
import { CalendarDays, Navigation, MapPin, Building } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="section-container bg-accent/50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-sm font-medium rounded-full glass mb-4 text-primary">
            Experience
          </span>
          <h2 className="section-title">Professional Journey</h2>
          <p className="section-subtitle mx-auto">
            Translating academic knowledge into practical AI solutions with a focus on Natural Language Processing and machine learning applications.
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border transform md:translate-x-px"></div>
          
          {/* Experience Items */}
          <div className="space-y-12">
            {/* Tarutium Global Consulting */}
            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 md:gap-y-0">
              {/* Date for large screens (right side of odd items) */}
              <div className="hidden md:flex md:order-1 justify-start">
                <div className="glass px-6 py-3 rounded-full inline-flex items-center space-x-2">
                  <CalendarDays className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">May 2023 - August 2023</span>
                </div>
              </div>
              
              {/* Content for large screens (left side of odd items) */}
              <div className="md:order-0 group">
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 top-6 w-5 h-5 bg-background border-2 border-primary rounded-full transform -translate-x-1/2 z-10"></div>
                
                <div className="ml-8 md:ml-0 md:mr-8 p-6 rounded-xl glass border border-border group-hover:border-primary/50 transition-all duration-300 animate-fade-in">
                  <div className="flex items-start mb-4">
                    <div className="mr-4 bg-accent/80 rounded-full p-2.5">
                      <Building className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-medium">R&D Intern</h3>
                      <p className="text-muted-foreground">Tarutium Global Consulting</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center mt-4 mb-4 space-x-4">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span>Remote</span>
                    </div>
                    
                    {/* Date for mobile */}
                    <div className="md:hidden flex items-center text-sm text-muted-foreground">
                      <CalendarDays className="w-4 h-4 mr-1" />
                      <span>May - Aug 2023</span>
                    </div>
                  </div>
                  
                  <div className="space-y-3 mt-6">
                    <p>
                      Built an end-to-end NLP pipeline for real-time disaster response applications, enabling more efficient emergency management systems.
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>Implemented efficient data processing pipelines using Python and PyTorch</li>
                      <li>Optimized large language models for specialized disaster-related text analysis</li>
                      <li>Architected scalable ML infrastructure for real-time data processing</li>
                      <li>Designed and documented API interfaces for system integration</li>
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mt-6">
                    <span className="px-3 py-1 bg-primary/10 rounded-full text-xs font-medium">Python</span>
                    <span className="px-3 py-1 bg-primary/10 rounded-full text-xs font-medium">PyTorch</span>
                    <span className="px-3 py-1 bg-primary/10 rounded-full text-xs font-medium">NLP</span>
                    <span className="px-3 py-1 bg-primary/10 rounded-full text-xs font-medium">Flask</span>
                    <span className="px-3 py-1 bg-primary/10 rounded-full text-xs font-medium">ML Ops</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Research Assistant */}
            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 md:gap-y-0">
              {/* Date for large screens (left side of even items) */}
              <div className="hidden md:flex md:order-0 justify-end">
                <div className="glass px-6 py-3 rounded-full inline-flex items-center space-x-2">
                  <CalendarDays className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">Jan 2023 - May 2023</span>
                </div>
              </div>
              
              {/* Content for large screens (right side of even items) */}
              <div className="md:order-1 group">
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 top-6 w-5 h-5 bg-background border-2 border-primary rounded-full transform -translate-x-1/2 z-10"></div>
                
                <div className="ml-8 md:ml-8 md:mr-0 p-6 rounded-xl glass border border-border group-hover:border-primary/50 transition-all duration-300 animate-fade-in">
                  <div className="flex items-start mb-4">
                    <div className="mr-4 bg-accent/80 rounded-full p-2.5">
                      <Navigation className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-medium">Research Assistant</h3>
                      <p className="text-muted-foreground">IIIT Raichur</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center mt-4 mb-4 space-x-4">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span>Raichur, India</span>
                    </div>
                    
                    {/* Date for mobile */}
                    <div className="md:hidden flex items-center text-sm text-muted-foreground">
                      <CalendarDays className="w-4 h-4 mr-1" />
                      <span>Jan - May 2023</span>
                    </div>
                  </div>
                  
                  <div className="space-y-3 mt-6">
                    <p>
                      Conducted research on AI-powered systems for disaster management, focusing on earthquake response analysis using machine learning.
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>Collected and preprocessed multimodal data from various earthquake events</li>
                      <li>Developed novel algorithms for risk assessment and emergency response</li>
                      <li>Published research findings in international conference (ACIIDS 2025)</li>
                      <li>Collaborated with interdisciplinary teams of scientists and engineers</li>
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mt-6">
                    <span className="px-3 py-1 bg-primary/10 rounded-full text-xs font-medium">Research</span>
                    <span className="px-3 py-1 bg-primary/10 rounded-full text-xs font-medium">Machine Learning</span>
                    <span className="px-3 py-1 bg-primary/10 rounded-full text-xs font-medium">Data Analysis</span>
                    <span className="px-3 py-1 bg-primary/10 rounded-full text-xs font-medium">TensorFlow</span>
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
