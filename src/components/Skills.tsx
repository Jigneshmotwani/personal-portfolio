import React, { useEffect, useRef, useState } from "react";
import { placeholders } from "../assets/images";
import {
  Code,
  Database,
  Monitor,
  Binary,
  Network,
  CloudCog,
  ZapIcon,
  Sparkles,
} from "lucide-react";

const skillCategories = [
  {
    name: "Programming",
    icon: <Code className="h-5 w-5" />,
    skills: [
      { name: "JavaScript", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "Python", level: 80 },
      { name: "Java", level: 80 },
      { name: "C++", level: 70 },
    ],
  },
  {
    name: "Web Development",
    icon: <Monitor className="h-5 w-5" />,
    skills: [
      { name: "React", level: 85 },
      { name: "Node.js", level: 80 },
      { name: "HTML/CSS", level: 90 },
      { name: "Tailwind", level: 70 },
    ],
  },
  {
    name: "Artificial Intelligence",
    icon: <Sparkles className="h-5 w-5" />,
    skills: [
      { name: "Machine Learning", level: 75 },
      { name: "Computer Vision", level: 70 },
      { name: "NLP", level: 65 },
    ],
  },
  {
    name: "Backend and DevOps",
    icon: <CloudCog className="h-5 w-5" />,
    skills: [
      { name: "Databases", level: 85 },
      { name: "APIs", level: 80 },
      { name: "Cloud Services", level: 75 },
      { name: "Docker", level: 70 },
    ],
  },
];

const Skills = () => {
  const skillsRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-active");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const items = skillsRef.current?.querySelectorAll(".animate-on-scroll");
    items?.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCategory((prev) => (prev + 1) % skillCategories.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="skills" className="py-20">
      <div className="section-container" ref={skillsRef}>
        <div className="text-center mb-16">
          <h2 className="section-title">Skills & Expertise</h2>
          <p className="section-subtitle mx-auto">
            A showcase of my technical abilities and areas of specialization.
          </p>
        </div>

        {/* Skills Overview */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
          <div className="animate-on-scroll">
            <h3 className="text-2xl font-semibold mb-4">
              Technical Proficiency
            </h3>
            <p className="text-muted-foreground mb-6">
              With expertise spanning from full-stack development to quantum
              computing and AI, I bring a diverse skill set to solve complex
              technical challenges.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
              {skillCategories.map((category, index) => (
                <button
                  key={index}
                  className={`flex items-center gap-2 p-3 rounded-lg border transition-all ${
                    activeCategory === index
                      ? "border-primary/50 bg-primary/5 text-primary shadow-sm"
                      : "border-border bg-white/50 text-muted-foreground hover:border-primary/30 hover:bg-primary/5"
                  }`}
                  onClick={() => setActiveCategory(index)}
                >
                  {category.icon}
                  <span className="text-sm font-medium">{category.name}</span>
                </button>
              ))}
            </div>

            <div className="space-y-5">
              {skillCategories[activeCategory].skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1.5">
                    <span className="font-medium text-sm">{skill.name}</span>
                    <span className="text-xs text-muted-foreground">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="skill-bar">
                    <div
                      className="skill-progress"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative animate-on-scroll delay-2">
            <div className="aspect-video rounded-2xl overflow-hidden">
              <img
                src={placeholders.code}
                alt="Coding"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-glass">
              <div className="flex items-center gap-2">
                <ZapIcon className="h-5 w-5 text-yellow-500" />
                <span className="font-medium text-sm">Core Expertise</span>
              </div>
              <ul className="mt-2 text-sm text-muted-foreground space-y-1">
                <li>• Full Stack Development</li>
                <li>• Artificial Intelligence</li>
                <li>• Data Analytics</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
