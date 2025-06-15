
import { GraduationCap, Award, Book } from "lucide-react";

export default function About() {
  const certifications = [
    {
      name: "Ethical Hacking",
      issuer: "NPTEL",
      year: "2024",
      credential: "SAA-C03",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=400&h=300"
    },
    {
      name: "Python for Data Science and Machine Learning",
      issuer: "Udemy",
      year: "2024",
      credential: "PML-C01",
      image: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?auto=format&fit=crop&q=80&w=400&h=300"
    },
    {
      name: "Build Real World Al Applications with Gemini and Imagen",
      issuer: "Google Cloud",
      year: "2025",
      credential: "TF-DEV",
      image: "https://cdn.qwiklabs.com/RQhZyhu6J%2FB6MoY2p4wAb4HWxjAuBOsmG71ZtUW9hUQ%3D"
    }
    // {
    //   name: "Microsoft Azure AI Engineer",
    //   issuer: "Microsoft",
    //   year: "2023",
    //   credential: "AI-102",
    //   image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=400&h=300"
    // }
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
          <div className="relative animate-scale-in group">
            {/* Scattered Images Layout */}
            <div className="relative h-96 mb-12">
              {/* Image 1 - Top Left */}
              <div className="absolute top-0 left-0 w-21 transform rotate-0 hover:rotate-0 transition-transform duration-500 hover:scale-105 hover:z-20">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400 rounded-2xl opacity-20 blur-sm animate-pulse"></div>
                <div className="relative rounded-2xl overflow-hidden shadow-xl h-full">
                  <img
                    src="/self.jpg"
                    alt="AI Research 1"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Floating particles scattered around */}
              {/* <div className="absolute top-20 left-1/3 w-2 h-2 bg-cyan-400 rounded-full opacity-60 animate-bounce" style={{animationDelay: '0s'}}></div>
              <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-purple-400 rounded-full opacity-50 animate-bounce" style={{animationDelay: '1.5s'}}></div>
              <div className="absolute bottom-32 left-1/2 w-1 h-1 bg-blue-400 rounded-full opacity-70 animate-bounce" style={{animationDelay: '3s'}}></div>
              <div className="absolute top-1/3 left-1/2 w-1.5 h-1.5 bg-teal-400 rounded-full opacity-60 animate-bounce" style={{animationDelay: '4s'}}></div> */}
            </div>
            
            {/* Enhanced Stats Cards */}
            <div className="grid grid-cols-3 gap-6">
              {/* Card 1 */}
              <div className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-300 blur-sm"></div>
                <div className="relative glass rounded-2xl p-6 text-center transform transition-all duration-300 hover:scale-105 hover:-translate-y-1 border border-white/10">
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full animate-pulse"></div>
                  </div>
                  <p className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent mb-1">3+</p>
                  <p className="text-sm text-muted-foreground font-medium">YoE</p>
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500/20 to-transparent rounded-b-2xl"></div>
                </div>
              </div>
              
              {/* Card 2 */}
              <div className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-300 blur-sm"></div>
                <div className="relative glass rounded-2xl p-6 text-center transform transition-all duration-300 hover:scale-105 hover:-translate-y-1 border border-white/10">
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-cyan-600 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                  </div>
                  <p className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-600 bg-clip-text text-transparent mb-1">10+</p>
                  <p className="text-sm text-muted-foreground font-medium">Projects</p>
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500/20 to-transparent rounded-b-2xl"></div>
                </div>
              </div>
              
              {/* Card 3 */}
              <div className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-300 blur-sm"></div>
                <div className="relative glass rounded-2xl p-6 text-center transform transition-all duration-300 hover:scale-105 hover:-translate-y-1 border border-white/10">
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-3 h-3 bg-gradient-to-r from-cyan-400 to-teal-600 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                  </div>
                  <p className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-teal-600 bg-clip-text text-transparent mb-1">5+</p>
                  <p className="text-sm text-muted-foreground font-medium">Publications</p>
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500/20 to-transparent rounded-b-2xl"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Certifications Section */}
        {/* <div className="mt-20">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Award className="w-6 h-6 text-primary mr-2" />
              <h3 className="text-2xl font-bold">Professional Certifications</h3>
            </div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Validated expertise across leading cloud platforms and AI technologies, demonstrating commitment to continuous learning and industry best practices.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
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
                <div className="p-4">
                  <h4 className="font-medium text-sm group-hover:text-primary transition-colors mb-1 line-clamp-2">
                    {cert.name}
                  </h4>
                  <p className="text-muted-foreground text-xs mb-2">
                    {cert.issuer}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="px-2 py-1 bg-primary/10 rounded-full text-xs font-medium text-primary">
                      {cert.credential}
                    </span>
                    <span className="text-xs font-medium text-primary">
                      {cert.year}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
}
