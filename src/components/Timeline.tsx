import React, { useEffect, useRef } from "react";
import { images } from "../assets/images";
import { Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    title: "Full Stack Algorithms Engineer Intern",
    company: "FireJet",
    logo: images.companies.firejet,
    date: "2024",
    location: "Singapore",
    description:
      "As a Full Stack Algorithms Engineer Intern, I developed and optimized a Figma to Code converter, contributed to a Website to Figma Design product, and leveraged Supabase and advanced algorithms to enhance design-to-code conversion, driving user growth and performance.",
  },
  {
    title: "Software Engineer Intern",
    company: "pQCee",
    logo: images.companies.pqcee,
    date: "2023",
    location: "Singapore",
    description:
      "As a Software Engineering Intern, I took QuantumNFT from v0.1 to v0.6, utilizing Web3 and Metamask to create a platform for developers to showcase skills through NFTs and challenges, wrote JavaScript plugins for converting quantum circuits into unique NFTs, and advanced the platform to the testnet phase.",
  },

  {
    title: "Student Intern",
    company: "Sony Electronics Asia Pacific",
    logo: images.companies.sony,
    date: "2022",
    location: "Singapore",
    description:
      "Contributed to Harmonization/BPR for Sony's global SAP implementation, assisted in process flow reviews, supported business analysts in capturing local requirements, implemented Adobe Analytics for SONY TH, MY, SG websites, and researched omnichannel chatbots.",
  },
  {
    title: "Undergraduate Research Assistant",
    company: "Singapore University of Technology and Design",
    logo: images.companies.sutd,
    date: "2022 - 2023",
    location: "Singapore",
    description:
      "Passionate about creating innovative solutions for speech impairments, I worked on developing a hand gesture-to-speech conversion glove to enhance communication, independence, and accessibility.",
  },
];

const Timeline = () => {
  const timelineRef = useRef<HTMLDivElement>(null);

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

    const items = timelineRef.current?.querySelectorAll(".animate-on-scroll");
    items?.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="experience"
      className="py-20 bg-gradient-to-b from-white to-secondary/30"
    >
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title">Professional Experience</h2>
          <p className="section-subtitle mx-auto">
            A journey through my professional experiences and roles in the tech
            industry.
          </p>
        </div>

        <div ref={timelineRef} className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`timeline-item animate-on-scroll delay-${index + 1}`}
            >
              <div className="timeline-dot"></div>
              <div className="glass-card rounded-xl p-5">
                <div className="flex justify-between items-start flex-wrap gap-4 mb-4">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-md overflow-hidden bg-white flex items-center justify-center shadow-sm">
                      <img
                        src={exp.logo}
                        alt={exp.company}
                        className="w-8 h-8 object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{exp.title}</h3>
                      <p className="text-muted-foreground">{exp.company}</p>
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    <div className="flex items-center gap-1.5 mb-1">
                      <Calendar className="h-3.5 w-3.5" />
                      <span>{exp.date}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="h-3.5 w-3.5" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
