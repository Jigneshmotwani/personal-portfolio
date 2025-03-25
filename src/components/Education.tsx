import React, { useEffect, useRef } from "react";
import { images } from "../assets/images";
import { Award, Calendar, GraduationCap, MapPin } from "lucide-react";

const education = [
  {
    degree: "Bachelor's in Computer Science with a minor in AI",
    institution: "Singapore University of Technology and Design (SUTD)",
    logo: images.companies.sutd,
    date: "2021 - 2025",
    location: "Singapore",
  },
  {
    degree: "Maharashtra Higher Secondary Certificate(HSC Board)",
    institution: "Narayana Junior College",
    logo: images.companies.narayana, // Using a placeholder logo
    date: "2019 - 2021",
    location: "India",
    grade: "98% grade",
  },
  {
    degree: "CBSE 10th",
    institution: "Global Indian International School",
    logo: images.companies.giis, // Using a placeholder logo
    date: "2013 - 2019",
    location: "India",
  },
];

const certifications = [
  {
    name: "Best Machine Learning Project Award",
    issuer: "SUTD",
    logo: images.companies.sutd,
    date: "2022",
  },
  {
    name: "Honourable Mention Award - Singtel x Information Systems and Programming Merit Award",
    issuer: "SUTD",
    logo: images.companies.sutd,
    date: "2022",
  },
  {
    name: "Undergraduate Merit Scholarship",
    issuer: "SUTD",
    logo: images.companies.sutd,
    date: "2021 - Present",
  },
  {
    name: "AI4I® – Literacy in AI certification",
    issuer: "AI Singapore",
    logo: images.companies.aisg,
    date: "2022",
  },
];

const Education = () => {
  const educationRef = useRef<HTMLDivElement>(null);

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

    const items = educationRef.current?.querySelectorAll(".animate-on-scroll");
    items?.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="education" className="py-20">
      <div className="section-container" ref={educationRef}>
        <div className="text-center mb-16">
          <h2 className="section-title">Education & Achievements</h2>
          <p className="section-subtitle mx-auto">
            My educational background and notable certifications.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <div className="animate-on-scroll">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2.5 rounded-lg bg-primary/10">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold">Education</h3>
            </div>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="glass-card rounded-xl p-5">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-md overflow-hidden bg-white flex items-center justify-center shadow-sm shrink-0">
                      <img
                        src={edu.logo}
                        alt={edu.institution}
                        className="w-10 h-10 object-contain"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">{edu.degree}</h4>
                      <p className="text-muted-foreground mb-2">
                        {edu.institution}
                      </p>

                      <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1.5">
                          <Calendar className="h-3.5 w-3.5" />
                          <span>{edu.date}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <MapPin className="h-3.5 w-3.5" />
                          <span>{edu.location}</span>
                        </div>
                        {edu.grade && (
                          <div className="flex items-center gap-1.5">
                            <Award className="h-3.5 w-3.5" />
                            <span>{edu.grade}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="animate-on-scroll delay-2">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2.5 rounded-lg bg-primary/10">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold">
                Certifications & Awards
              </h3>
            </div>

            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <div key={index} className="glass-card rounded-xl p-5">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-md overflow-hidden bg-white flex items-center justify-center shadow-sm shrink-0">
                      <img
                        src={cert.logo}
                        alt={cert.issuer}
                        className="w-10 h-10 object-contain"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold">{cert.name}</h4>
                      <p className="text-muted-foreground mb-1">
                        {cert.issuer}
                      </p>

                      <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                        <Calendar className="h-3.5 w-3.5" />
                        <span>{cert.date}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
