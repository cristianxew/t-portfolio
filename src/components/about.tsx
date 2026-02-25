import React, { useEffect, useRef, useState } from "react";
import { Award, Users, Sparkles, Lightbulb } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const About = () => {
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

  const highlights = [
    {
      icon: Award,
      title: "WCAG Compliance",
      description:
        "Expert in building accessible web applications that meet WCAG AA standards",
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description:
        "Experience working with cross-functional teams and mentoring junior developers",
    },
    {
      icon: Sparkles,
      title: "AI-Driven Development",
      description:
        "Leveraging AI tools like Cursor, Claude Code, and GitHub Copilot to accelerate development and improve code quality",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "Passionate about exploring new technologies and best practices in frontend development",
    },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="section-padding bg-muted/30"
    >
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Content */}
          <div
            className={`space-y-6 ${isVisible ? "fade-in visible" : "fade-in"}`}
          >
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">
                About <span className="gradient-text">Me</span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full"></div>
            </div>

            <div className="space-y-4 text-foreground">
              <p>
                Currently working at{" "}
                <span className="text-foreground font-medium">
                  Tietoevry Banking
                </span>
                , I specialize in WCAG-compliant component libraries, implementing CI/CD pipelines, and leveraging AI tools to accelerate delivery and improve developer experience. I'm
                particularly passionate about building tools that help other
                developers work more efficiently.
              </p>

              <p>
                With a strong foundation in modern frontend technologies and a
                keen eye for detail, I strive to deliver high-quality solutions
                that meet both business requirements and user needs. I believe
                in writing clean, maintainable code and fostering collaborative
                development environments.
              </p>
            </div>

            <div className="pt-4">
              <h3 className="text-xl font-semibold mb-4">
                Years of Experience
              </h3>
              <div className="flex items-center space-x-4">
                <div className="text-4xl font-bold gradient-text">5+</div>
                <div className="text-muted-foreground">
                  Years of professional frontend development experience
                </div>
              </div>
            </div>
          </div>

          {/* Highlights */}
          <div
            className={`space-y-6 ${isVisible ? "slide-in-right visible" : "slide-in-right"
              }`}
          >
            <h3 className="text-2xl font-semibold">What I Bring</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((highlight, index) => {
                const Icon = highlight.icon;
                return (
                  <Card
                    key={index}
                    className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  >
                    <CardContent className="p-6 space-y-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-muted-foreground">
                          {highlight.title}
                        </h4>
                        <p className="text-sm text-foreground mt-1">
                          {highlight.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
