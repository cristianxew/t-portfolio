import React from 'react'
import { Github, Linkedin, Mail } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Github, href: 'https://github.com/cristianbernal', label: 'GH' },
    { icon: Linkedin, href: 'https://linkedin.com/in/cristian-bernal', label: 'LN' },
    { icon: Mail, href: 'mailto:cristianxsa15@gmail.com', label: 'EM' },
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-foreground text-background">
      <div className="section-container">

        {/* Massive Footer Text */}
        <div className="py-24 border-b border-background/20">
          <h2 className="font-serif text-[15vw] md:text-[180px] leading-none tracking-tighter uppercase mb-8 cursor-pointer hover:opacity-80 transition-opacity ml-[-0.05em]" onClick={scrollToTop}>
            Bernal<span className="text-primary">.</span>
          </h2>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
            <p className="font-mono text-sm uppercase max-w-md text-background/60 leading-relaxed">
              [01] Specialized in highly scalable architectures, WCAG compliance, and pixel-perfect UIs. Crafting digital experiences that load fast and look immaculate.
            </p>
            <button
              onClick={scrollToTop}
              className="font-mono text-xs uppercase tracking-widest border border-background/20 px-6 py-4 hover:bg-background hover:text-foreground transition-colors"
            >
              [RETURN TO TOP]
            </button>
          </div>
        </div>

        {/* Links & Meta */}
        <div className="grid grid-cols-1 md:grid-cols-12 py-12 gap-12">

          <div className="md:col-span-4 flex flex-col justify-between">
            <div>
              <div className="font-mono text-xs uppercase text-background/40 mb-4">[LOCATION]</div>
              <div className="font-mono text-sm uppercase">Warsaw, Poland / GMT+1</div>
              <div className="font-mono text-sm uppercase mt-2">Available for relocation / Remote</div>
            </div>
            <div className="mt-12 md:mt-0 font-mono text-xs uppercase text-background/40">
              © {currentYear} ALL RIGHTS RESERVED.
            </div>
          </div>

          <div className="md:col-span-4 flex flex-col">
            <div className="font-mono text-xs uppercase text-background/40 mb-4">[NAVIGATION]</div>
            <nav className="flex flex-col space-y-4">
              {['Home', 'About', 'Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    const el = document.getElementById(item.toLowerCase())
                    if (el) el.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="font-mono text-sm uppercase tracking-widest text-left hover:text-primary transition-colors w-fit"
                >
                  {item}
                </button>
              ))}
            </nav>
          </div>

          <div className="md:col-span-4 flex flex-col justify-between items-start md:items-end">
            <div className="w-full md:w-auto">
              <div className="font-mono text-xs uppercase text-background/40 mb-4 md:text-right">[CONNECT]</div>
              <div className="flex gap-2 justify-start md:justify-end">
                {socialLinks.map((link) => {
                  const Icon = link.icon
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-12 w-12 border border-background/20 flex items-center justify-center hover:bg-background hover:text-foreground transition-colors"
                      aria-label={link.label}
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  )
                })}
              </div>
            </div>

            <div className="mt-12 md:mt-0 font-mono text-[10px] uppercase text-background/40 md:text-right max-w-[200px]">
              ENGINEERED WITH REACT, TYPESCRIPT & TAILWIND V4.
            </div>
          </div>

        </div>
      </div>
    </footer>
  )
}

export default Footer