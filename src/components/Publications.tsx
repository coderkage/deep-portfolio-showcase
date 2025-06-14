
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
      isPeerReviewed: true,
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop"
    },
    {
      title: "QR Code Forgery Detection : A Cross-architectural Analysis of Classical ML, FFNN, CNN, and ResNet Architectures",
      type: "Technical Paper",
      venue: "Independent Research",
      year: "2024",
      description: "Implemented Physics-Informed Neural Networks from scratch to solve the time-dependent Schrödinger equation for quantum systems. Designed custom loss functions incorporating PDE constraints and compared performance against traditional numerical solvers for quantum state evolution.",
      tags: ["Physics-Informed Neural Networks", "Quantum Computing", "PDEs", "Scientific Computing"],
      links: [
        { type: "PDF", url: "#", icon: FileText }
      ],
      isPeerReviewed: false,
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop"
    },
    {
      title: "Node Embeddings in Large Graphs via Adversarially Regularized Variational Autoencoders",
      type: "Capstone Report",
      venue: "Academic Project",
      year: "2024",
      description: "Developed a sequence-to-sequence neural machine translation model with attention mechanisms for English-French translation. Implemented subword tokenization, teacher forcing, and masking techniques, achieving competitive BLEU scores on parallel corpora datasets.",
      tags: ["Neural Machine Translation", "Seq2Seq", "Attention Mechanisms", "NLP"],
      links: [
{ type: "PDF", url: "#", icon: FileText }      ],
      isPeerReviewed: false,
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop"
    },
    {
      title: "Hybrid Quantum Neural Networks for Function Approximation and Classification Using the Torch Connector",
      type: "Technical Paper",
      venue: "Independent Study",
      year: "2024",
      description: "Conducted comprehensive comparison between traditional unsupervised learning methods (PCA + K-Means clustering) and convolutional autoencoders for image compression. Evaluated performance using PSNR, SSIM, compression ratios, and bits-per-pixel metrics across diverse image datasets.",
      tags: ["Image Compression", "Autoencoders", "PCA", "Computer Vision"],
      links: [
{ type: "PDF", url: "#", icon: FileText }      ],
      isPeerReviewed: false,
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=300&fit=crop"
    },
    {
      title: "Enhancing Traffic Management in Urban Areas: Efficient Data Rate & Bandwidth Utilization",
      type: "Technical Paper",
      venue: "Independent Project",
      year: "2024",
      description: "Engineered an end-to-end Retrieval-Augmented Generation pipeline for automated video content analysis. Implemented web scraping, transcript filtering, and local LLM integration to generate contextual summaries of YouTube videos based on user queries, deployed as a Python CLI application.",
      tags: ["RAG", "Large Language Models", "Information Retrieval", "Web Scraping"],
      links: [
{ type: "PDF", url: "#", icon: FileText }      ],
      isPeerReviewed: false,
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop"
    }
  ];

  return (
    <section id="publications" className="section-container">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 text-sm font-medium rounded-full glass mb-4 text-primary">
            Publications
          </span>
          <h2 className="section-title">Publications & Technical Papers</h2>
          <p className="section-subtitle mx-auto">
            Research contributions spanning machine learning, natural language processing, and applied AI systems.
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-4">
          {publications.map((pub, index) => (
            <div key={index} className="glass p-4 rounded-xl border border-border hover:border-primary/50 transition-all duration-300 group animate-fade-in">
              <div className="flex gap-4 items-start">
                {/* Image */}
                <div className="w-24 h-18 rounded-lg overflow-hidden shrink-0 bg-gradient-to-br from-primary/10 to-accent/10">
                  <img
                    src={pub.image}
                    alt={pub.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                {/* Content */}
                <div className="flex-1 min-w-0">
                  {/* Header */}
                  <div className="mb-2">
                    <h3 className="text-lg font-medium mb-1 group-hover:text-primary transition-colors duration-200 line-clamp-2">
                      {pub.title}
                    </h3>
                    <div className="flex flex-wrap gap-x-3 gap-y-1 text-sm text-muted-foreground">
                      <span className="font-medium">
                        {pub.type} — {pub.venue} ({pub.year})
                      </span>
                      {pub.isPeerReviewed && (
                        <span className="px-2 py-0.5 bg-primary/10 rounded text-primary text-xs font-medium">
                          Peer-Reviewed
                        </span>
                      )}
                    </div>
                  </div>
                  
                  {/* Description */}
                  <p className="text-sm text-muted-foreground mb-3 leading-relaxed line-clamp-2">
                    {pub.description}
                  </p>
                  
                  {/* Tags and Links Row */}
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-1">
                      {pub.tags.slice(0, 3).map((tag, tagIndex) => (
                        <span key={tagIndex} className="px-2 py-0.5 bg-primary/10 rounded-full text-xs font-medium">
                          {tag}
                        </span>
                      ))}
                      {pub.tags.length > 3 && (
                        <span className="px-2 py-0.5 bg-muted rounded-full text-xs font-medium text-muted-foreground">
                          +{pub.tags.length - 3}
                        </span>
                      )}
                    </div>
                    
                    {/* Links */}
                    <div className="flex gap-3">
                      {pub.links.map((link, linkIndex) => (
                        <a 
                          key={linkIndex}
                          href={link.url} 
                          className="inline-flex items-center text-sm font-medium text-primary hover:underline transition-colors"
                        >
                          <link.icon className="w-3.5 h-3.5 mr-1" />
                          <span>{link.type}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          
          {/* Footer note */}
          <div className="text-center mt-6">
            <p className="text-muted-foreground text-sm">
              Additional research papers and publications are currently under development and review.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
