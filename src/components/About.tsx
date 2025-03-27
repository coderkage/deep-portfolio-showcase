
import { GraduationCap, Award, Book } from "lucide-react";

export default function About() {
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
            <div className="aspect-video rounded-2xl overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 opacity-50 mix-blend-overlay z-10"></div>
              <img
                src="https://images.unsplash.com/photo-1679403766669-6ed8570311cd?auto=format&fit=crop&q=80"
                alt="AI Research"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Stats Overlay */}
            <div className="absolute -bottom-8 -right-8 glass rounded-2xl p-6 shadow-lg backdrop-blur-lg w-3/4">
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary">3+</p>
                  <p className="text-sm text-muted-foreground">Years Experience</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-accent">10+</p>
                  <p className="text-sm text-muted-foreground">Projects</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary">5+</p>
                  <p className="text-sm text-muted-foreground">Publications</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
