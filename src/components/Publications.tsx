
import { FileText, ExternalLink, Calendar, Github } from "lucide-react";

export default function Publications() {
  const publications = [
    {
      title: "Earthquake Response Analysis with AI: A Machine Learning Approach to Natural Disaster Management",
      type: "Peer-Reviewed Conference Paper",
      venue: "ACIIDS 2025",
      year: "2025",
      description: "Developed custom Named Entity Recognition models and geolocation tagging systems to extract actionable insights from earthquake response datasets. Applied natural language processing techniques to analyze disaster communications and improve emergency response coordination through data-driven visualization.",
      tags: ["NLP", "Named Entity Recognition", "Disaster Management", "Geolocation"],
      links: [
        { type: "GitHub", url: "#", icon: Github },
        { type: "PDF", url: "#", icon: FileText }
      ],
      isPeerReviewed: true
    },
    {
      title: "Physics-Informed Neural Networks for Quantum System Simulation",
      type: "Technical Paper",
      venue: "Independent Research",
      year: "2024",
      description: "Implemented Physics-Informed Neural Networks from scratch to solve the time-dependent Schrödinger equation for quantum systems. Designed custom loss functions incorporating PDE constraints and compared performance against traditional numerical solvers for quantum state evolution.",
      tags: ["Physics-Informed Neural Networks", "Quantum Computing", "PDEs", "Scientific Computing"],
      links: [
        { type: "GitHub", url: "#", icon: Github }
      ],
      isPeerReviewed: false
    },
    {
      title: "Subword-Aware Neural Machine Translation for English-French Language Pairs",
      type: "Capstone Report",
      venue: "Academic Project",
      year: "2024",
      description: "Developed a sequence-to-sequence neural machine translation model with attention mechanisms for English-French translation. Implemented subword tokenization, teacher forcing, and masking techniques, achieving competitive BLEU scores on parallel corpora datasets.",
      tags: ["Neural Machine Translation", "Seq2Seq", "Attention Mechanisms", "NLP"],
      links: [
        { type: "GitHub", url: "#", icon: Github }
      ],
      isPeerReviewed: false
    },
    {
      title: "Hybrid Image Compression: Comparative Analysis of Classical and Deep Learning Approaches",
      type: "Technical Paper",
      venue: "Independent Study",
      year: "2024",
      description: "Conducted comprehensive comparison between traditional unsupervised learning methods (PCA + K-Means clustering) and convolutional autoencoders for image compression. Evaluated performance using PSNR, SSIM, compression ratios, and bits-per-pixel metrics across diverse image datasets.",
      tags: ["Image Compression", "Autoencoders", "PCA", "Computer Vision"],
      links: [
        { type: "GitHub", url: "#", icon: Github }
      ],
      isPeerReviewed: false
    },
    {
      title: "RAG-Enhanced LLM System for Automated YouTube Content Summarization",
      type: "Technical Paper",
      venue: "Independent Project",
      year: "2024",
      description: "Engineered an end-to-end Retrieval-Augmented Generation pipeline for automated video content analysis. Implemented web scraping, transcript filtering, and local LLM integration to generate contextual summaries of YouTube videos based on user queries, deployed as a Python CLI application.",
      tags: ["RAG", "Large Language Models", "Information Retrieval", "Web Scraping"],
      links: [
        { type: "GitHub", url: "#", icon: Github }
      ],
      isPeerReviewed: false
    }
  ];

  return (
    <section id="publications" className="section-container">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-sm font-medium rounded-full glass mb-4 text-primary">
            Publications
          </span>
          <h2 className="section-title">Publications & Technical Papers</h2>
          <p className="section-subtitle mx-auto">
            Research contributions spanning machine learning, natural language processing, and applied AI systems.
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-6">
          {publications.map((pub, index) => (
            <div key={index} className="glass p-6 rounded-xl border border-border hover:border-primary/50 transition-all duration-300 group animate-fade-in">
              <div className="flex flex-wrap md:flex-nowrap items-start gap-6">
                {/* Icon */}
                <div className="bg-accent/80 rounded-xl p-4 shrink-0">
                  <FileText className="w-8 h-8 text-primary" />
                </div>
                
                {/* Content */}
                <div className="flex-1">
                  {/* Header */}
                  <div className="mb-3">
                    <h3 className="text-xl font-medium mb-2 group-hover:text-primary transition-colors duration-200">
                      {pub.title}
                    </h3>
                    <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-muted-foreground">
                      <span className="font-medium">
                        {pub.type} — {pub.venue} ({pub.year})
                      </span>
                      {pub.isPeerReviewed && (
                        <span className="px-2 py-1 bg-primary/10 rounded text-primary text-xs font-medium">
                          Peer-Reviewed
                        </span>
                      )}
                    </div>
                  </div>
                  
                  {/* Description */}
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {pub.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {pub.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="px-3 py-1 bg-primary/10 rounded-full text-xs font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {/* Links */}
                  <div className="flex flex-wrap gap-4">
                    {pub.links.map((link, linkIndex) => (
                      <a 
                        key={linkIndex}
                        href={link.url} 
                        className="inline-flex items-center text-sm font-medium text-primary hover:underline transition-colors"
                      >
                        <link.icon className="w-4 h-4 mr-1.5" />
                        <span>{link.type}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
          
          {/* Footer note */}
          <div className="text-center mt-8">
            <p className="text-muted-foreground text-sm">
              Additional research papers and publications are currently under development and review.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
