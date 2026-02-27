import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { ThemeToggle } from "./theme-toggle";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { id: "home", label: "00.Home" },
    { id: "about", label: "01.About" },
    { id: "skills", label: "02.Skills" },
    { id: "experience", label: "03.Experience" },
    { id: "projects", label: "04.Projects" },
    { id: "contact", label: "05.Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleSectionInView = () => {
      const sections = navItems.map((item) => document.getElementById(item.id.replace(/\d+\./, '')));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("scroll", handleSectionInView);
    handleScroll();
    handleSectionInView();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", handleSectionInView);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const sectionIndex = sectionId.replace(/\d+\./, '');
    const element = document.getElementById(sectionIndex);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? "bg-background border-b-2 border-border"
        : "bg-background border-b-2 border-transparent"
        }`}
    >
      <div className="section-container px-0 sm:px-4">
        <div className="flex items-stretch justify-between h-16">
          {/* Logo */}
          <div
            className="cursor-pointer flex items-center px-4 border-r-2 border-transparent sm:border-border hover:bg-foreground hover:text-background transition-colors"
            onClick={() => scrollToSection("home")}
          >
            <span className="text-xl font-serif tracking-tighter uppercase font-bold">
              C. Bernal
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-stretch flex-1 justify-end">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-4 xl:px-6 text-xs font-mono uppercase tracking-widest transition-colors border-l-2 border-border hover:bg-foreground hover:text-background flex items-center ${activeSection === item.id ? "bg-foreground text-background" : "bg-transparent text-foreground"
                  }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Theme Toggle & Mobile Menu */}
          <div className="flex items-center space-x-0 border-l-2 border-transparent lg:border-border pl-0 lg:pl-0">
            <div className="h-full border-r-2 lg:border-r-0 border-transparent sm:border-border px-4 flex items-center justify-center">
              <ThemeToggle />
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden h-full rounded-none px-4 hover:bg-foreground hover:text-background"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-background border-b-2 border-border">
            <nav className="flex flex-col">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-left p-4 text-xs font-mono uppercase tracking-widest border-t-2 border-border hover:bg-foreground hover:text-background transition-colors ${activeSection === item.id
                    ? "bg-foreground text-background"
                    : "text-foreground"
                    }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
