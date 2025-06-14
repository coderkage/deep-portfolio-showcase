
import { useEffect, useState } from "react";

export default function Loading() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          clearInterval(timer);
          return 100;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 100);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-background via-background/95 to-background/90 flex items-center justify-center z-50 backdrop-blur-sm">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-primary/5 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      </div>

      <div className="text-center space-y-8 relative z-10">
        {/* Logo/Icon */}
        <div className="relative">
          <div className="w-20 h-20 mx-auto bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center animate-bounce">
            <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
              <span className="text-2xl font-bold text-white">DP</span>
            </div>
          </div>
          <div className="absolute inset-0 w-20 h-20 mx-auto bg-gradient-to-br from-primary to-accent rounded-2xl blur-xl opacity-60 animate-pulse"></div>
        </div>

        {/* Loading text */}
        <div className="space-y-4">
          <h2 className="text-2xl font-medium gradient-text animate-fade-in">
            Loading Portfolio
          </h2>
          
          {/* Progress bar */}
          <div className="w-64 mx-auto">
            <div className="h-1 bg-border rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-300 ease-out rounded-full"
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="flex justify-between text-xs text-muted-foreground mt-2">
              <span>Initializing...</span>
              <span>{Math.round(progress)}%</span>
            </div>
          </div>
        </div>

        {/* Animated dots */}
        <div className="flex justify-center space-x-2">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-2 h-2 bg-primary rounded-full animate-pulse"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
