import React, { useEffect, useState } from "react";
import { Github, Linkedin, Mail, ArrowDown, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import cristian_bernal_img from "../assets/images/cristian_bernal.png";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const socialLinks = [
    { icon: Github, href: "https://github.com/cristianbernal", label: "GH" },
    { icon: Linkedin, href: "https://linkedin.com/in/cristian-bernal", label: "LN" },
    { icon: Mail, href: "mailto:cristianxsa15@gmail.com", label: "EM" },
  ];

  return (
    <section
      id="home"
      className="relative min-h-[100svh] flex flex-col justify-end pt-24 pb-12 border-b-2 border-border overflow-hidden bg-background"
    >
      {/* Decorative Blueprint Background grid */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.03] dark:opacity-[0.05]"
        style={{
          backgroundImage: 'linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)',
          backgroundSize: '4rem 4rem'
        }}>
      </div>

      <div className="section-container relative z-10 w-full h-full flex flex-col justify-between flex-1">

        {/* Top Info row */}
        <div className={`flex flex-col md:flex-row justify-between items-start md:items-center w-full mb-12 uppercase tracking-widest text-xs font-mono text-muted-foreground ${isVisible ? "fade-in visible" : "fade-in"}`}>
          <div className="flex gap-4 items-center">
            <span className="inline-block w-2 h-2 rounded-full bg-green-500 animate-pulse border border-background"></span>
            <span>Available for new opportunities</span>
          </div>
          <div className="hidden md:flex gap-8">
            <span>Lat: 59.3293° N</span>
            <span>Lon: 18.0686° E</span>
            <span>SYS.VER: 2026.1.0</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end flex-1">
          {/* Main Title Area */}
          <div className={`lg:col-span-8 flex flex-col justify-end ${isVisible ? "slide-in-left visible" : "slide-in-left"}`}>
            <h1 className="font-serif text-[12vw] lg:text-[140px] leading-[0.85] tracking-tighter uppercase ml-[-0.05em] text-foreground mb-6 mix-blend-difference z-20">
              Senior <br />
              <span className="italic text-muted-foreground mr-6">Frontend</span>
              <br />
              Engineer<span className="text-primary text-[0.5em] alignment-baseline-top">.</span>
            </h1>

            <div className="flex flex-col sm:flex-row gap-6 mt-8 max-w-2xl">
              <p className="text-base md:text-lg font-mono text-muted-foreground leading-relaxed flex-1">
                [01] Specialized in highly scalable architectures, WCAG compliance, and pixel-perfect UIs. Crafting digital experiences that load fast and look immaculate.
              </p>
            </div>
          </div>

          {/* Right/Bottom Area */}
          <div className={`lg:col-span-4 flex flex-col justify-end pb-2 lg:pb-8 space-y-8 ${isVisible ? "slide-in-right visible" : "slide-in-right"}`}>
            <div className="relative aspect-[3/4] w-full max-w-[300px] ml-auto overflow-hidden group border-2 border-border bg-muted">
              <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity duration-700"></div>
              <ImageWithFallback
                src={cristian_bernal_img}
                alt="Cristian Bernal"
                className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute bottom-4 right-4 bg-background border border-border text-foreground font-mono text-xs px-2 py-1 z-20 shadow-md">
                CRISTIAN BERNAL // {new Date().getFullYear()}
              </div>
            </div>

            <div className="flex flex-col gap-4 items-end">
              <Button
                size="lg"
                onClick={() => scrollToSection("projects")}
                className="w-full sm:w-auto bg-foreground text-background hover:bg-foreground/90 rounded-none font-mono uppercase tracking-widest h-14 px-8 border border-transparent transition-all flex justify-between items-center group shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,0.1)] dark:hover:shadow-[2px_2px_0px_0px_rgba(255,255,255,0.1)]"
              >
                <span>View Index</span>
                <ArrowRight className="ml-4 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
              </Button>

              <div className="flex gap-2 w-full sm:w-auto justify-between sm:justify-end mt-2">
                {socialLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-14 w-14 border border-border flex items-center justify-center text-foreground hover:bg-foreground hover:text-background transition-colors"
                      aria-label={link.label}
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator overlay */}
      <div className="absolute bottom-0 right-12 lg:right-24 transform translate-y-1/2 hidden md:block z-20">
        <button
          onClick={() => scrollToSection("about")}
          className="h-24 w-24 bg-background border border-border rounded-full flex items-center justify-center hover:bg-foreground hover:text-background transition-colors group shadow-lg"
          aria-label="Scroll to about section"
        >
          <ArrowDown className="h-6 w-6 transform group-hover:translate-y-2 transition-transform" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
