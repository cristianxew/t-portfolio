import React, { useEffect, useRef, useState } from "react";
import { CalendarDays, MapPin, Building } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const experiences = [
    {
      company: "Tietoevry Banking",
      position: "Software Engineer",
      period: "October 2021 - Present",
      location: "Warsaw, Poland",
      type: "Full-time",
      description:
        "Leading frontend development initiatives with focus on accessibility and developer experience.",
      achievements: [
        "Architected and maintained a scalable monorepo for UI component libraries via npm, increasing development velocity and ensuring design parity across multiple product teams",
        "Ensured 100% WCAG 2.1 Level AA compliance across all UI components, mitigating legal risk and improving UX for all users",
        "Authored comprehensive documentation for UI components usage and integration",
        "Automated API documentation generation for UI components, reducing manual overhead and ensuring technical specs remained in sync with code changes",
        "Built an AI-powered Chat Assistant via Microsoft Copilot Studio, trained on design system documentation to provide real-time support, significantly reducing manual developer inquiries and accelerating onboarding for new hires",
        "Established rigorous unit testing and QA protocols for the design system, resulting in a measurable increase in library stability and a reduction in UI-related production bugs",
        "Established CI/CD pipelines for asset publication, ensuring a seamless release cycle for internal consumers",
        "Collaborated cross-functionally with Design and Product stakeholders to define component roadmaps, acting as the technical bridge to ensure feasible and scalable UI implementations",
        "Developed an API traffic analysis dashboard using the internal design system, demonstrating the library's capability for complex, data-heavy applications",
        "Developed a custom CLI tool to automate the generation of 40+ Open API specification websites replacing a costly third-party solution",
      ],
      technologies: [
        "React",
        "TypeScript",
        "Material UI",
        "Storybook",
        "GitHub Actions",
        "Docusaurus",
        "OpenAPI",
        "Copilot Studio",
        "Node.js",
      ],
    },
    {
      company: "Freelance Projects",
      position: "Web Developer",
      period: "July 2020 - September 2021",
      location: "Remote",
      type: "Freelance",
      description:
        "Delivered custom web solutions for various clients, focusing on modern technologies and user experience.",
      achievements: [
        "Developed accessible, responsive websites and landing pages using React, Next.js and headless CMS, focusing on performance and maintainability",
        "Collaborated with clients to gather requirements and deliver tailored web solutions",
      ],
      technologies: [
        "React",
        "Next.js",
        "JavaScript",
        "CSS/SASS",
        "Headless CMS",
        "Stripe API",
        "SEO",
      ],
    },
  ];

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="section-padding bg-muted/30"
    >
      <div className="section-container">
        {/* Header */}
        <div
          className={`text-center space-y-4 mb-12 ${
            isVisible ? "fade-in visible" : "fade-in"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My journey as a frontend developer, building impactful solutions and
            growing with amazing teams.
          </p>
        </div>

        {/* Experience Timeline */}
        <div
          className={`experience-timeline ${
            isVisible ? "slide-in-left visible" : "slide-in-left"
          }`}
        >
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="timeline-item"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <Card className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Building className="h-5 w-5 text-primary" />
                          <h3 className="text-xl font-semibold text-foreground">
                            {exp.company}
                          </h3>
                        </div>
                        <h4 className="text-lg font-medium text-primary">
                          {exp.position}
                        </h4>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center space-x-1">
                            <CalendarDays className="h-4 w-4" />
                            <span>{exp.period}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MapPin className="h-4 w-4" />
                            <span>{exp.location}</span>
                          </div>
                          <Badge variant="outline" className="text-xs">
                            {exp.type}
                          </Badge>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-foreground">{exp.description}</p>

                    {/* Achievements */}
                    <div className="space-y-3">
                      <h5 className="font-medium text-foreground">
                        Key Achievements:
                      </h5>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li
                            key={achIndex}
                            className="flex items-start space-x-2 text-sm text-foreground"
                          >
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="space-y-3">
                      <h5 className="font-medium text-foreground">
                        Technologies Used:
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <Badge
                            key={techIndex}
                            variant="secondary"
                            className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
