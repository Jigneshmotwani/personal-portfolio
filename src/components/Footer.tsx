
import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-xl font-bold tracking-tight">Jignesh Motwani</h2>
            <p className="text-muted-foreground mt-1">
              Software Engineer & AI Enthusiast
            </p>
          </div>
          
          <div className="flex flex-col space-y-6 md:space-y-0 md:flex-row md:items-center md:space-x-12">
            <nav className="flex space-x-6">
              <a 
                href="#home" 
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Home
              </a>
              <a 
                href="#experience" 
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Experience
              </a>
              <a 
                href="#projects" 
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Projects
              </a>
              <a 
                href="#contact" 
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Contact
              </a>
            </nav>
            
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
        </div>
        
        <div className="mt-8 pt-8 border-t">
          <p className="text-center text-sm text-muted-foreground">
            © {currentYear} Jignesh Motwani. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
