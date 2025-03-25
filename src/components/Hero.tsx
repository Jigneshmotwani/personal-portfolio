
import React, { useEffect, useRef } from 'react';
import { images } from '../assets/images';
import { Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const moveX = (x - centerX) / 40;
      const moveY = (y - centerY) / 40;
      
      const img = containerRef.current.querySelector('.profile-img') as HTMLElement;
      if (img) {
        img.style.transform = `translate3d(${moveX}px, ${moveY}px, 0) scale(1.05)`;
      }
    };
    
    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove as EventListener);
    }
    
    return () => {
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove as EventListener);
      }
    };
  }, []);

  return (
    <section 
      id="home" 
      className="min-h-screen flex flex-col justify-center pt-16 overflow-hidden"
    >
      <div className="section-container grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1 animate-fade-in">
          <div className="inline-block mb-2 px-3 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary">
            Software Engineer & AI Enthusiast
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
            Hi, I'm Jignesh <span className="animate-pulse-soft">👋</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-6 max-w-lg">
            Building innovative solutions at the intersection of quantum computing, AI, and blockchain technology.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-8">
            <a 
              href="#contact" 
              className="px-6 py-3 rounded-lg bg-primary text-white font-medium hover:bg-primary/90 transition-colors"
            >
              Get in Touch
            </a>
            <a 
              href="#projects" 
              className="px-6 py-3 rounded-lg bg-secondary text-foreground font-medium hover:bg-secondary/80 transition-colors"
            >
              View Projects
            </a>
          </div>
          
          <div className="flex space-x-5">
            <a 
              href="https://github.com/jigneshmotwani" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a 
              href="https://linkedin.com/in/jignesh-motwani" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a 
              href="mailto:jignesh@example.com" 
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
        
        <div 
          ref={containerRef}
          className="order-1 md:order-2 flex justify-center overflow-hidden animate-fade-in"
        >
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 animate-pulse-soft"></div>
            <img 
              src={images.profile} 
              alt="Jignesh Motwani" 
              className="profile-img absolute inset-2 object-cover rounded-full border-2 border-white shadow-xl transition-transform duration-200"
            />
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
        <a href="#experience" aria-label="Scroll down">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="text-muted-foreground"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
