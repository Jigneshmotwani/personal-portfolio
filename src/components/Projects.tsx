
import React, { useEffect, useRef, useState } from 'react';
import { placeholders } from '../assets/images';
import { ArrowRight, Github, Link } from 'lucide-react';

const projects = [
  {
    title: "Live Sign-Language Translation Tool",
    description: "A real-time sign language translation application that uses computer vision and machine learning to convert sign language gestures into text and speech.",
    image: placeholders.ai,
    tags: ["AI", "Computer Vision", "Accessibility"],
    links: {
      github: "https://github.com/jigneshmotwani/sign-language-translator",
      demo: "#"
    }
  },
  {
    title: "Quantum Programming Platform",
    description: "A platform for learning and experimenting with quantum programming concepts, designed for beginners and advanced users alike.",
    image: placeholders.quantum,
    tags: ["Quantum Computing", "Education", "JavaScript"],
    links: {
      github: "https://github.com/jigneshmotwani/quantum-platform",
      demo: "#"
    }
  },
  {
    title: "Travel Planner with Generative AI",
    description: "An intelligent travel planning application that uses generative AI to create personalized travel itineraries based on user preferences.",
    image: placeholders.code,
    tags: ["Generative AI", "React", "Node.js"],
    links: {
      github: "https://github.com/jigneshmotwani/ai-travel-planner",
      demo: "#"
    }
  },
  {
    title: "Sustainability Tracking App",
    description: "A mobile application that helps users track their environmental impact and suggests ways to reduce their carbon footprint.",
    image: placeholders.sustainability,
    tags: ["React Native", "Sustainability", "Data Visualization"],
    links: {
      github: "https://github.com/jigneshmotwani/eco-tracker",
      demo: "#"
    }
  }
];

const Projects = () => {
  const projectsRef = useRef<HTMLDivElement>(null);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-active');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const items = projectsRef.current?.querySelectorAll('.animate-on-scroll');
    items?.forEach((item) => observer.observe(item));
    
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-secondary/30 to-white">
      <div className="section-container" ref={projectsRef}>
        <div className="text-center mb-16">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle mx-auto">
            A selection of my most impactful and innovative projects.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className={`group animate-on-scroll delay-${index % 2 + 1}`}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="glass-card rounded-xl overflow-hidden h-full flex flex-col">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full aspect-video object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80"></div>
                  <div className="absolute bottom-0 left-0 p-5 text-white">
                    <div className="flex flex-wrap gap-2 mb-2">
                      {project.tags.map((tag, tagIndex) => (
                        <span 
                          key={tagIndex}
                          className="px-2.5 py-1 text-xs font-medium rounded-full bg-white/20 backdrop-blur-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                  </div>
                </div>
                
                <div className="p-5 flex-grow">
                  <p className="text-muted-foreground">{project.description}</p>
                </div>
                
                <div className="p-5 pt-0 flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a 
                      href={project.links.github} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-md hover:bg-secondary transition-colors"
                      aria-label="View GitHub repository"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                    <a 
                      href={project.links.demo} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-md hover:bg-secondary transition-colors"
                      aria-label="View live demo"
                    >
                      <Link className="h-5 w-5" />
                    </a>
                  </div>
                  
                  <a 
                    href={project.links.demo}
                    className="flex items-center text-sm font-medium text-primary group-hover:gap-1.5 transition-all"
                  >
                    View Project 
                    <ArrowRight 
                      className={`h-4 w-4 transition-all ${
                        hoveredProject === index ? 'translate-x-1 opacity-100' : 'opacity-0'
                      }`} 
                    />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="https://github.com/jigneshmotwani"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-secondary text-foreground font-medium hover:bg-secondary/80 transition-colors"
          >
            View More Projects
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
