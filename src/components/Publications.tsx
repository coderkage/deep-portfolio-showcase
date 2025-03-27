
import { FileText, ExternalLink, Calendar } from "lucide-react";

export default function Publications() {
  return (
    <section id="publications" className="section-container">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-sm font-medium rounded-full glass mb-4 text-primary">
            Publications
          </span>
          <h2 className="section-title">Research Papers</h2>
          <p className="section-subtitle mx-auto">
            Contributing to the academic community through research focused on practical applications of artificial intelligence.
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-8">
          {/* Publication Item */}
          <div className="glass p-6 rounded-xl border border-border hover:border-primary/50 transition-all duration-300 group animate-fade-in">
            <div className="flex flex-wrap md:flex-nowrap items-start gap-6">
              {/* Icon */}
              <div className="bg-accent/80 rounded-xl p-4 shrink-0">
                <FileText className="w-8 h-8 text-primary" />
              </div>
              
              {/* Content */}
              <div className="flex-1">
                <h3 className="text-xl font-medium mb-2 group-hover:text-primary transition-colors duration-200">
                  Earthquake Response Analysis with AI: A Machine Learning Approach to Natural Disaster Management
                </h3>
                
                <div className="flex flex-wrap gap-x-6 gap-y-2 mb-4 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1.5" />
                    <span>ACIIDS 2025</span>
                  </div>
                  <div className="flex items-center">
                    <span>Authors: Deep Patel, et al.</span>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-4">
                  This research paper introduces a novel approach for analyzing earthquake response data using machine learning techniques, enabling more effective disaster management strategies. The methodology combines natural language processing of emergency communications with predictive modeling to improve response times and resource allocation during crisis situations.
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-primary/10 rounded-full text-xs font-medium">Machine Learning</span>
                  <span className="px-3 py-1 bg-primary/10 rounded-full text-xs font-medium">Natural Disasters</span>
                  <span className="px-3 py-1 bg-primary/10 rounded-full text-xs font-medium">NLP</span>
                  <span className="px-3 py-1 bg-primary/10 rounded-full text-xs font-medium">Emergency Response</span>
                </div>
                
                <div className="flex justify-end">
                  <a 
                    href="#" 
                    className="inline-flex items-center text-sm font-medium text-primary hover:underline"
                  >
                    <span className="mr-1">View Publication</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Add more publications here if needed */}
          
          {/* CTA for more publications */}
          <div className="text-center mt-8">
            <p className="text-muted-foreground mb-6">Additional research papers and publications are currently under review or in development.</p>
            <button className="glass px-6 py-3 rounded-lg border border-border hover:border-primary/50 transition-all duration-300 inline-flex items-center space-x-2">
              <span>Check back soon for more publications</span>
              <Calendar className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
