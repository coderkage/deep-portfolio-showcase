
import { FileText, ExternalLink, Calendar, Github, Video, Code } from "lucide-react";

export default function Publications() {
  const publications = [
    {
      title: "Earthquake Response Analysis with AI: A Machine Learning Approach to Natural Disaster Management",
      type: "Peer-Reviewed Conference Paper",
      venue: "ACIIDS 2025",
      year: "2024-25",
      description: "Developed advanced AI-powered earthquake response analysis system using custom Named Entity Recognition (NER) models and geospatial mapping techniques. Implemented transfer learning with spaCy to extract geopolitical entities (GPE) and disaster-related information from social media data, specifically analyzing Turkey-Syria 2023 and Japan Noto 2024 earthquakes. Created interactive severity maps and real-time disaster monitoring dashboards to enhance emergency response coordination and improve natural disaster management through data-driven insights.",
      tags: ["Artificial Intelligence", "Named Entity Recognition", "Natural Language Processing", "Disaster Management", "Geospatial Analysis", "Transfer Learning", "spaCy", "Emergency Response", "Social Media Analytics", "Interactive Mapping"],
      links: [
        
        { type: "arXiv", url: "https://link.springer.com/chapter/10.1007/978-981-96-5887-9_2", icon: FileText },
        { type: "Proceedings", url: "https://link.springer.com/chapter/10.1007/978-981-96-5887-9_2", icon: ExternalLink },
        { type: "GitHub", url: "https://github.com/coderkage/Earthquake-Response-Analysis-with-AI", icon: Github }
      ],
      isPeerReviewed: true,
      image: "https://media.springernature.com/lw685/springer-static/image/chp%3A10.1007%2F978-981-96-5887-9_2/MediaObjects/658105_1_En_2_Fig2_HTML.png"
    },
    {
      title: "QR Code Forgery Detection : A Cross-architectural Analysis of Classical ML, FFNN, CNN, and ResNet Architectures",
      type: "Technical Report",
      venue: "Independent Research",
      year: "2025",
      description: "Comprehensive comparative study of QR code forgery detection methods using multiple machine learning architectures. Implemented and evaluated classical machine learning algorithms, Feed-Forward Neural Networks (FFNN), Convolutional Neural Networks (CNN), and ResNet architectures for identifying forged QR codes. Developed robust feature extraction techniques and conducted performance analysis across different network architectures to establish optimal approaches for QR code authenticity verification and digital security applications.",
      tags: ["QR Code Security", "Forgery Detection", "Convolutional Neural Networks", "ResNet Architecture", "Feed-Forward Neural Networks", "Classical Machine Learning", "Computer Vision", "Digital Security", "Feature Extraction", "Cross-Architecture Analysis"],
      links: [
        { type: "PDF", url: "https://drive.google.com/file/d/1YryS0cGeUEelnK_iXtkRFXUVpHuRlXtb/view?usp=drive_link", icon: FileText }, { type: "GitHub", url: "#", icon: Github }
      ],
      isPeerReviewed: false,
      image: "data:image/png;base64,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"
    },
    {
      title: "Node Embeddings in Large Graphs via Adversarially Regularized Variational Autoencoders",
      type: "Technical Report",
      venue: "Academic Project",
      year: "2024",
      description: "Advanced graph neural network implementation using Adversarially Regularized Variational Autoencoders (ARVAE) for generating high-quality node embeddings in large-scale graph structures. Developed novel adversarial training mechanisms to improve representation quality and scalability for complex network analysis. Applied advanced regularization techniques and variational inference methods to capture intricate graph topologies, enabling superior performance in node classification, link prediction, and graph clustering tasks on large datasets.",
      tags: ["Graph Neural Networks", "Variational Autoencoders", "Adversarial Training", "Node Embeddings", "Large-Scale Graphs", "Network Analysis", "Variational Inference", "Graph Representation Learning", "Link Prediction", "Graph Clustering"],
      links: [
{ type: "PDF", url: "https://drive.google.com/file/d/1LM7PrJl2fMxA0nlDgV2wrk3yx4Z0MHHJ/view?usp=sharing", icon: FileText }, { type: "Colab", url: "https://colab.research.google.com/drive/15MLPRbGj3sX14HCIUlP0RsU4N4w30kbm?usp=sharing", icon: Code }      ],
      isPeerReviewed: false,
      image: "https://www.researchgate.net/publication/343466493/figure/fig1/AS:933314613489664@1599530952844/sualization-of-the-Citeseer-dataset.jpg"
    },
    {
      title: "Hybrid Quantum Neural Networks for Function Approximation and Classification",
      type: "Technical Report",
      venue: "Academic Project",
      year: "2024",
      description: "Innovative integration of quantum computing principles with classical neural networks for enhanced function approximation and pattern classification tasks. Implemented hybrid quantum-classical architectures using quantum circuits and variational quantum algorithms combined with traditional deep learning models. Explored quantum advantage in machine learning applications, demonstrating improved performance in complex optimization problems and non-linear function approximation through quantum-enhanced feature spaces and quantum kernel methods.",
      tags: ["Quantum Computing", "Hybrid Neural Networks", "Quantum Machine Learning", "Function Approximation", "Variational Quantum Algorithms", "Quantum Circuits", "Pattern Classification", "Quantum Kernels", "Estimator QNN", "Quantum Advantage"],
      links: [
{ type: "PDF", url: "https://drive.google.com/file/d/1Xmjw70NC0Kxk7GD78TnYCAjLUxB5FveT/view?usp=sharing", icon: FileText }, { type: "GitHub", url: "https://github.com/coderkage/Hybrid-QNN", icon: Github }      ],
      isPeerReviewed: false,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfxuxbxDG2Po1mqcGQNBbLxAU18fHUu9z4-hZAHQu2HS8ZCOsCxeIy1ut2u9PvMEtmhFU&usqp=CAU"
    },
    {
      title: "Enhancing Traffic Management in Urban Areas: Efficient Data Rate & Bandwidth Utilization",
      type: "Technical Report",
      venue: "Academic Project",
      year: "2023",
      description: "Comprehensive urban traffic management optimization system focusing on intelligent data rate control and bandwidth utilization strategies. Developed advanced traffic flow algorithms and real-time monitoring systems using SUMO and OMNeT++ to improve urban mobility and reduce congestion. Implemented smart traffic signal coordination, vehicular communication protocols, and data-driven decision-making frameworks to optimize traffic patterns, minimize travel time, and enhance overall transportation efficiency in metropolitan areas through innovative network management techniques.",
      tags: ["Traffic Management", "Urban Planning", "Bandwidth Optimization", "Data Rate Control", "Smart Transportation", "Traffic Flow Optimization", "Real-time Monitoring", "Vehicular Networks", "Smart Cities", "Transportation Systems"],
      links: [
{ type: "PDF", url: "https://drive.google.com/file/d/1k1QxHvUR5L2kHb6_5m1OXk5O0DRwCPCn/view?usp=drive_link", icon: FileText }, { type: "Simulation", url: "https://drive.google.com/file/d/16hk7FFbvoHfPfSWuhHwWG1ET1UxOjqos/view?usp=sharing", icon: Video }      ],
      isPeerReviewed: false,
      image: "https://www.researchgate.net/publication/279765559/figure/fig1/AS:284606042525696@1444866776056/TS-V2X-communications.png"
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
                <div className="w-24 h-20 rounded-lg overflow-hidden shrink-0 bg-gradient-to-br from-primary/10 to-accent/10">
  <img
    src={pub.image}
    alt={pub.title}
    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
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
                  <p className="text-sm text-muted-foreground mb-3 leading-relaxed line-clamp-4">
                    {pub.description}
                  </p>
                  
                  {/* Tags and Links Row */}
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-1">
                      {pub.tags.slice(0, 10).map((tag, tagIndex) => (
                        <span key={tagIndex} className="px-2 py-0.5 bg-primary/10 rounded-full text-xs font-medium">
                          {tag}
                        </span>
                      ))}
                      {pub.tags.length > 10 && (
                        <span className="px-2 py-0.5 bg-muted rounded-full text-xs font-medium text-muted-foreground">
                          +{pub.tags.length - 10}
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
                          target = "_blank"
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
