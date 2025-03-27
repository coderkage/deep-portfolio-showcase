
import { useState } from "react";
import { Mail, Send, Phone, MapPin, Loader2 } from "lucide-react";
import { toast } from "sonner";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Message sent successfully! I'll get back to you soon.");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    }, 1500);
  };

  return (
    <section id="contact" className="section-container">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-sm font-medium rounded-full glass mb-4 text-primary">
            Contact
          </span>
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle mx-auto">
            Have a project in mind or want to discuss potential collaborations? I'd love to hear from you.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8 animate-fade-in">
            <div className="glass rounded-xl p-8 border border-border h-full">
              <h3 className="text-2xl font-medium mb-6">Contact Information</h3>
              <p className="text-muted-foreground mb-8">
                Feel free to reach out using any of the methods below. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="mr-4 bg-primary/10 rounded-full p-3">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <a 
                      href="mailto:contact@deeppatel.ai" 
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      contact@deeppatel.ai
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 bg-primary/10 rounded-full p-3">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Phone</h4>
                    <a 
                      href="tel:+910000000000" 
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      +91 (000) 000-0000
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 bg-primary/10 rounded-full p-3">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Location</h4>
                    <p className="text-muted-foreground">
                      Raichur, Karnataka, India
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h4 className="font-medium mb-4">Connect on Social Media</h4>
                <div className="flex space-x-4">
                  <a 
                    href="https://github.com/deeppatel234" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full glass flex items-center justify-center text-foreground hover:text-primary transition-all duration-300 border border-border hover:border-primary/50"
                    aria-label="GitHub"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2C6.477 2 2 6.477 2 12C2 16.418 4.865 20.166 8.839 21.489C9.339 21.581 9.521 21.268 9.521 21.006C9.521 20.773 9.512 20.009 9.508 19.14C6.726 19.79 6.139 17.807 6.139 17.807C5.684 16.632 5.029 16.321 5.029 16.321C4.121 15.67 5.098 15.683 5.098 15.683C6.101 15.753 6.636 16.75 6.636 16.75C7.52 18.295 8.97 17.854 9.54 17.602C9.631 16.931 9.889 16.49 10.175 16.219C7.954 15.945 5.619 15.079 5.619 11.317C5.619 10.173 6.01 9.244 6.658 8.522C6.556 8.272 6.211 7.262 6.761 5.953C6.761 5.953 7.586 5.687 9.497 6.916C10.295 6.692 11.152 6.58 12.002 6.576C12.853 6.58 13.71 6.692 14.509 6.916C16.418 5.687 17.243 5.953 17.243 5.953C17.793 7.262 17.448 8.272 17.346 8.522C17.995 9.244 18.383 10.173 18.383 11.317C18.383 15.088 16.042 15.942 13.814 16.21C14.169 16.546 14.489 17.211 14.489 18.223C14.489 19.676 14.474 20.68 14.474 21.006C14.474 21.271 14.653 21.586 15.162 21.485C19.133 20.162 22 16.415 22 12C22 6.477 17.523 2 12 2Z" fill="currentColor"/>
                    </svg>
                  </a>
                  
                  <a 
                    href="https://linkedin.com/in/deeppatel234" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full glass flex items-center justify-center text-foreground hover:text-primary transition-all duration-300 border border-border hover:border-primary/50"
                    aria-label="LinkedIn"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z" fill="currentColor"/>
                      <path d="M6 9H2V21H6V9Z" fill="currentColor"/>
                      <path d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z" fill="currentColor"/>
                    </svg>
                  </a>
                  
                  <a 
                    href="https://twitter.com/deeppatel" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full glass flex items-center justify-center text-foreground hover:text-primary transition-all duration-300 border border-border hover:border-primary/50"
                    aria-label="Twitter"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22 4.01C21.13 4.44 20.18 4.72 19.17 4.84C20.2 4.2 20.97 3.2 21.33 2.01C20.38 2.59 19.33 3 18.21 3.21C17.31 2.18 16.03 1.5 14.61 1.5C11.9 1.5 9.7 3.7 9.7 6.41C9.7 6.82 9.74 7.21 9.83 7.58C5.76 7.38 2.13 5.43 0.57 2.51C0.33 3.28 0.19 4.12 0.19 5.01C0.19 6.69 1.14 8.19 2.57 9.08C1.8 9.06 1.07 8.85 0.43 8.5C0.43 8.52 0.43 8.54 0.43 8.56C0.43 10.95 2.11 12.95 4.34 13.43C3.7 13.61 3.01 13.65 2.35 13.54C2.9 15.49 4.73 16.89 6.89 16.93C5.22 18.22 3.11 19 0.85 19C0.57 19 0.29 18.98 0 18.94C2.19 20.31 4.77 21.13 7.55 21.13C14.6 21.13 18.94 15.24 18.94 10.11C18.94 9.89 18.94 9.67 18.93 9.46C19.9 8.73 20.74 7.83 21.42 6.79C20.56 7.19 19.63 7.46 18.65 7.59C19.65 6.96 20.4 5.99 20.75 4.83L22 4.01Z" fill="currentColor"/>
                    </svg>
                  </a>
                  
                  <a 
                    href="https://kaggle.com/deeppatel234" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full glass flex items-center justify-center text-foreground hover:text-primary transition-all duration-300 border border-border hover:border-primary/50"
                    aria-label="Kaggle"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18.825 23.859C18.6 23.635 13.02 16.62 13.02 16.62L8.358 21.379V23.654H6.27V16.614C6.27 16.614 13.418 8.728 13.589 8.529C13.76 8.33 13.989 8.216 14.305 8.216C14.62 8.216 22.82 8.229 22.82 8.229V10.252H14.809L7.045 18.624L13.796 23.863C13.886 23.939 13.886 24 13.886 24H18.769C18.769 24 19.05 24.07 18.825 23.859Z" fill="currentColor"/>
                      <path d="M2 8.222V6.222H4V8.222H2Z" fill="currentColor"/>
                      <path d="M4 10.222V12.222H2V10.222H4Z" fill="currentColor"/>
                      <path d="M2 14.222V16.222H4V14.222H2Z" fill="currentColor"/>
                      <path d="M4 18.222V20.222H2V18.222H4Z" fill="currentColor"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="glass rounded-xl p-8 border border-border animate-scale-in">
            <h3 className="text-2xl font-medium mb-6">Send Me a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-lg bg-background border border-border focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/50 transition-colors"
                    placeholder="John Doe"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-lg bg-background border border-border focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/50 transition-colors"
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-lg bg-background border border-border focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/50 transition-colors"
                  placeholder="Project Inquiry"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-2.5 rounded-lg bg-background border border-border focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/50 transition-colors resize-none"
                  placeholder="Hello, I'd like to discuss a project..."
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex items-center justify-center w-full py-3 px-6 bg-primary text-primary-foreground rounded-lg font-medium transition-all transform hover:translate-y-[-2px] disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
