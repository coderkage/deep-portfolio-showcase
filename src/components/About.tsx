
import { GraduationCap, Award, Book } from "lucide-react";

export default function About() {
  const certifications = [
    {
      name: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      year: "2023",
      credential: "SAA-C03",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=400&h=300"
    },
    {
      name: "Google Cloud Professional ML Engineer",
      issuer: "Google Cloud",
      year: "2023",
      credential: "PML-C01",
      image: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?auto=format&fit=crop&q=80&w=400&h=300"
    },
    {
      name: "TensorFlow Developer Certificate",
      issuer: "TensorFlow",
      year: "2022",
      credential: "TF-DEV",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80&w=400&h=300"
    },
    {
      name: "Microsoft Azure AI Engineer",
      issuer: "Microsoft",
      year: "2023",
      credential: "AI-102",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=400&h=300"
    }
  ];

  return (
    <section id="about" className="section-container">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-sm font-medium rounded-full glass mb-4 text-primary">
            About Me
          </span>
          <h2 className="section-title">AI Engineer & <span className="gradient-text">Researcher</span></h2>
          <p className="section-subtitle mx-auto">
            Passionate about leveraging AI to solve complex problems and drive innovation in the field of Natural Language Processing.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Side - Bio */}
          <div className="space-y-6 animate-fade-in">
            <p className="text-lg">
              As an AI Engineer specializing in Natural Language Processing and Large Language Models, I'm deeply interested in developing scalable AI solutions that solve real-world problems with a focus on NLP, LLM fine-tuning, and RAG systems.
            </p>
            
            <p className="text-lg">
              My research interests lie at the intersection of Artificial Intelligence and Natural Language Processing, where I explore ways to make AI systems more robust, interpretable, and useful for practical applications.
            </p>
            
            <div className="space-y-4 mt-8">
              <div className="flex items-start space-x-3">
                <GraduationCap className="w-5 h-5 text-primary shrink-0 mt-1" />
                <div>
                  <h4 className="font-medium">B.Tech in Computer Science and Engineering</h4>
                  <p className="text-muted-foreground">Indian Institute of Information Technology, Raichur</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Award className="w-5 h-5 text-accent shrink-0 mt-1" />
                <div>
                  <h4 className="font-medium">GATE AIR 512</h4>
                  <p className="text-muted-foreground">Graduate Aptitude Test in Engineering</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Book className="w-5 h-5 text-primary shrink-0 mt-1" />
                <div>
                  <h4 className="font-medium">Research Focus</h4>
                  <p className="text-muted-foreground">Artificial Intelligence & Natural Language Processing</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Side - Image and Stats */}
          <div className="relative animate-scale-in">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl mb-8">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 opacity-50 mix-blend-overlay z-10"></div>
              <img
                src="https://images.unsplash.com/photo-1679403766669-6ed8570311cd?auto=format&fit=crop&q=80"
                alt="AI Research"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Stats Cards */}
            <div className="grid grid-cols-3 gap-4">
              <div className="glass rounded-xl p-4 text-center">
                <p className="text-2xl font-bold text-primary">3+</p>
                <p className="text-xs text-muted-foreground">Years Experience</p>
              </div>
              <div className="glass rounded-xl p-4 text-center">
                <p className="text-2xl font-bold text-accent">10+</p>
                <p className="text-xs text-muted-foreground">Projects</p>
              </div>
              <div className="glass rounded-xl p-4 text-center">
                <p className="text-2xl font-bold text-primary">5+</p>
                <p className="text-xs text-muted-foreground">Publications</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Certifications Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Award className="w-6 h-6 text-primary mr-2" />
              <h3 className="text-2xl font-bold">Professional Certifications</h3>
            </div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Validated expertise across leading cloud platforms and AI technologies, demonstrating commitment to continuous learning and industry best practices.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <div 
                key={cert.name}
                className="glass rounded-xl overflow-hidden border border-border hover:border-primary/30 transition-all duration-300 group animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={cert.image}
                    alt={cert.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h4 className="font-medium text-lg group-hover:text-primary transition-colors">
                        {cert.name}
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        {cert.issuer}
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="text-sm font-medium text-primary">
                        {cert.year}
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 bg-primary/10 rounded-full text-xs font-medium text-primary">
                      {cert.credential}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 flex items-center justify-center">
                      <Award className="w-4 h-4 text-primary" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
