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
          {/* Left Side - Photo */}
          <div className="animate-scale-in group">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden border-4 border-background">
              <img
                src="/self.jpg"
                alt="Deep Patel"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
          
          {/* Right Side - Bio */}
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
        </div>
        
        {/* Stats Cards - positioned to align with photo width */}
        <div className="grid grid-cols-3 gap-6 max-w-md mt-8">
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
    </section>
  );
}
