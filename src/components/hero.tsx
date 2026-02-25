import React, { useEffect, useState } from "react";
import { Github, Linkedin, Mail, ExternalLink, ArrowDown } from "lucide-react";
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
    {
      icon: Github,
      href: "https://github.com/cristianbernal",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/cristian-bernal",
      label: "LinkedIn",
    },
    {
      icon: Mail,
      href: "mailto:cristianxsa15@gmail.com",
      label: "Email",
    },
    {
      icon: ExternalLink,
      href: "https://cristianbernal.com",
      label: "Website",
    },
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16"
    >
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div
            className={`space-y-8 ${isVisible ? "fade-in visible" : "fade-in"}`}
          >
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Hi, I'm <span className="gradient-text">Cristian Bernal</span>
              </h1>
              <h2 className="text-2xl md:text-3xl text-muted-foreground">
                Senior Frontend Developer
              </h2>
              <p className="text-lg text-foreground max-w-xl">
                Senior Frontend Developer with 5+ years of experience building dynamic user interfaces and scalable component libraries for the financial sector. Self-taught and driven by curiosity, I bridge the gap between design and engineering to deliver production-grade solutions.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={() => scrollToSection("projects")}
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                View Work
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("contact")}
              >
                Contact Me
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <Button
                    key={link.label}
                    variant="ghost"
                    size="icon"
                    asChild
                    className="h-10 w-10 hover:bg-accent transition-colors"
                  >
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.label}
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  </Button>
                );
              })}
            </div>
          </div>

          {/* Profile Image */}
          <div
            className={`flex justify-center lg:justify-end ${isVisible ? "scale-in visible" : "scale-in"
              }`}
          >
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden shadow-xl">
                <ImageWithFallback
                  src={cristian_bernal_img}
                  alt="Cristian Bernal - Senior Frontend Developer"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Gradient ring */}
              <div className="absolute  rounded-full blur-xl animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => scrollToSection("about")}
            className="h-12 w-12 rounded-full"
            aria-label="Scroll to about section"
          >
            <ArrowDown className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
