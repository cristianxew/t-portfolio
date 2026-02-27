import { useEffect, useRef, useState } from "react";

const About = () => {
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

  const highlights = [
    {
      title: "Accessibility (WCAG)",
      description: "Building inclusive web experiences that strictly meet WCAG AA and AAA standards — because the web is for everyone."
    },
    {
      title: "Bridging Design & Dev", // Changed from "Team Collaboration" to be more specific
      description: "Working closely with designers and product managers to turn complex financial requirements into seamless user experiences."
    },
    {
      title: "AI-Driven Workflows",
      description: "Using tools like GitHub Copilot and Claude to eliminate the busywork, leaving me more time to focus on the actual craft."
    },
    {
      title: "Scalable Architecture",
      description: "Laying down solid foundations for component libraries and apps so that other developers actually enjoy working in the codebase."
    },
  ];

  return (
    <section id="about" ref={sectionRef} className="py-24 border-b border-border bg-muted/20 relative overflow-hidden">
      <div className="absolute right-0 top-0 text-[30vw] font-serif leading-none tracking-tighter opacity-[0.02] dark:opacity-[0.03] select-none pointer-events-none">
        01
      </div>

      <div className="section-container relative z-10 w-full">
        <div className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start ${isVisible ? 'slide-in-right visible' : 'slide-in-right'}`}>
          <div className="lg:col-span-5 h-full flex flex-col justify-between">
            <div>
              <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-8">
                [01. PROFILE SUMMARY]
              </div>
              <h2 className="font-serif text-5xl md:text-7xl font-bold uppercase tracking-tighter leading-none mb-12">
                Origin / <br /><span className="italic text-muted-foreground">About</span>
              </h2>
            </div>

            <div className="hidden lg:block pb-12">
              <div className="font-mono text-4xl mb-2">5.0+</div>
              <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                Years in continuous operation
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col space-y-12">
            <div className={`font-mono text-base lg:text-lg leading-relaxed space-y-6 ${isVisible ? 'fade-in visible' : 'fade-in'}`}>
              <p>
                Currently I'm working at <a href="https://www.tieto.com/" target="_blank" rel="noopener noreferrer" className="font-bold underline decoration-2 underline-offset-4">Tieto Banktech</a>, where I focus on making the web accessible and our workflows seamless. I build out our WCAG-compliant component libraries, manage our CI/CD pipelines, and automate the heavy lifting of design system documentation."
              </p>
              <p className="text-muted-foreground">
                I love the challenge of taking complicated technical rules and turning them into clean, friendly interfaces. Spending five years in the financial sector taught me how to write highly disciplined code without losing my creative spark. These days, I use AI to help speed up the busywork, which lets me ship faster without ever cutting corners on the quality of the code.
              </p>
            </div>

            <div className={`pt-12 border-t border-border ${isVisible ? 'slide-in-left visible' : 'slide-in-left'}`}>
              <div className="font-mono text-xs uppercase tracking-widest mb-8">
                [CORE VALUE PROPOSITIONS]
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-border border border-border">
                {highlights.map((item, idx) => (
                  <div key={idx} className="bg-background p-8 hover:bg-muted transition-colors">
                    <h4 className="font-serif text-xl mb-4 font-bold uppercase">{item.title}</h4>
                    <p className="font-mono text-xs leading-relaxed text-muted-foreground uppercase">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
