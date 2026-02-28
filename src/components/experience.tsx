import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const experiences = [
    {
      id: "01",
      company: "Tieto Banktech",
      position: "Software Engineer",
      period: "2021—PRESENT",
      location: "Warsaw, PL",
      description: "Leading frontend development initiatives with focus on accessibility and developer experience.",
      achievements: [
        "Architected and maintained a scalable monorepo for UI component libraries via npm, increasing development velocity and ensuring design parity across multiple product teams",
        "Ensured 100% WCAG 2.1 Level AA compliance across all UI components, mitigating legal risk and improving UX for all users",
        "Automated API documentation generation for UI components, reducing manual overhead and ensuring technical specs remained in sync with code changes",
        "Established CI/CD pipelines for asset publication, ensuring a seamless release cycle for internal consumers",
        "Developed an API traffic analysis dashboard using the internal design system, demonstrating the library's capability for complex, data-heavy applications",
      ],
      technologies: ["React", "TypeScript", "Storybook", "Angular", "Docusaurus", "GitHub Actions", "Copilot Studio"],
    },
    {
      id: "02",
      company: "Freelance",
      position: "Web Developer",
      period: "2020—2021",
      location: "Remote",
      description: "Delivered custom web solutions for various clients, focusing on modern technologies and user experience.",
      achievements: [
        "Developed accessible, responsive websites and landing pages using React and Next.js.",
        "Integrated Headless CMS and Stripe API for modern e-commerce experiences.",
      ],
      technologies: ["React", "Next.js", "Headless CMS", "Stripe"],
    },
  ];

  return (
    <section id="experience" ref={sectionRef} className="py-24 border-b border-border relative overflow-hidden bg-muted/20">
      <div className="absolute right-0 top-0 text-[30vw] font-serif leading-none tracking-tighter opacity-[0.02] dark:opacity-[0.03] select-none pointer-events-none">
        03
      </div>
      <div className="section-container relative z-10 w-full">
        <div className={`flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-border pb-8 ${isVisible ? 'fade-in visible' : 'fade-in'}`}>
          <div className="space-y-4 max-w-2xl">
            <h2 className="font-serif text-5xl md:text-7xl font-bold uppercase tracking-tighter">
              Chronology / <span className="italic text-muted-foreground">Log</span>
            </h2>
            <p className="text-muted-foreground font-mono text-sm max-w-md uppercase tracking-wider">
              [TRAJECTORY] Employment history and timeline
            </p>
          </div>
          <div className="mt-8 md:mt-0 font-mono text-xs uppercase text-right">
            [DATA] Operational <br /> History
          </div>
        </div>

        <div className="space-y-0">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`group grid grid-cols-1 lg:grid-cols-12 gap-8 border-b border-border py-12 lg:py-16 transition-colors ${isVisible ? 'slide-in-left visible' : 'slide-in-left'}`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Meta data */}
              <div className="lg:col-span-3 flex flex-col justify-between font-mono text-xs uppercase tracking-widest text-muted-foreground">
                <div>[{exp.id}] // {exp.period}</div>
                <div className="mt-8 lg:mt-0">{exp.location}</div>
              </div>

              {/* Headings & Desc */}
              <div className="lg:col-span-5 flex flex-col">
                <h3 className="font-serif text-4xl md:text-5xl font-bold uppercase leading-none mb-4 group-hover:text-primary transition-colors">
                  {exp.company}
                </h3>
                <h4 className="font-mono text-sm uppercase tracking-widest mb-8 text-foreground/80 flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2 hidden group-hover:block text-primary" />
                  {exp.position}
                </h4>
                <p className="font-mono text-sm leading-relaxed text-muted-foreground mb-8">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {exp.technologies.map((tech, idx) => (
                    <span key={idx} className="font-mono text-[10px] uppercase tracking-wider border border-border px-2 py-1 bg-background">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Achievements */}
              <div className="lg:col-span-4 flex flex-col justify-center">
                <div className="font-mono text-xs uppercase tracking-widest mb-6 text-foreground">
                  [KEY DELIVERABLES]
                </div>
                <ul className="space-y-4">
                  {exp.achievements.map((ach, idx) => (
                    <li key={idx} className="font-mono text-xs leading-relaxed text-muted-foreground flex items-start">
                      <span className="mr-3 text-primary mt-0.5 opacity-50">+</span>
                      <span>{ach}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
