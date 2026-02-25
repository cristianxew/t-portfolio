import React from 'react'
import { Github, Linkedin, Mail, ExternalLink, Heart } from 'lucide-react'
import { Button } from './ui/button'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/cristianbernal',
      label: 'GitHub',
    },
    {
      icon: Linkedin,
      href: 'https://linkedin.com/in/cristian-bernal',
      label: 'LinkedIn',
    },
    {
      icon: Mail,
      href: 'mailto:cristianxsa15@gmail.com',
      label: 'Email',
    },
    {
      icon: ExternalLink,
      href: 'https://cristianbernal.com',
      label: 'Website',
    },
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-background border-t border-border">
      <div className="section-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand & Description */}
          <div className="space-y-4">
            <div 
              className="cursor-pointer inline-block"
              onClick={scrollToTop}
            >
              <span className="text-2xl font-semibold gradient-text">
                Cristian Bernal
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Senior Frontend Developer passionate about building accessible, 
              scalable web applications and empowering teams with great developer tools.
            </p>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-500 fill-red-500" />
              <span>using React & TypeScript</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              {[
                { label: 'About', href: '#about' },
                { label: 'Skills', href: '#skills' },
                { label: 'Experience', href: '#experience' },
                { label: 'Projects', href: '#projects' },
                { label: 'Contact', href: '#contact' },
              ].map((link) => (
                <button
                  key={link.label}
                  onClick={() => {
                    const element = document.getElementById(link.href.replace('#', ''))
                    if (element) element.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="text-left text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Connect</h3>
            <div className="space-y-3">
              <div className="text-sm text-muted-foreground">
                <p>Warsaw, Poland</p>
                <a 
                  href="mailto:cristianxsa15@gmail.com"
                  className="hover:text-primary transition-colors"
                >
                  cristianxsa15@gmail.com
                </a>
              </div>
              
              <div className="flex space-x-2">
                {socialLinks.map((link) => {
                  const Icon = link.icon
                  return (
                    <Button
                      key={link.label}
                      variant="ghost"
                      size="icon"
                      asChild
                      className="h-9 w-9 hover:bg-accent transition-colors"
                    >
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={link.label}
                      >
                        <Icon className="h-4 w-4" />
                      </a>
                    </Button>
                  )
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground">
              © {currentYear} Cristian Bernal. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <span>Built with React, TypeScript & Tailwind CSS</span>
              <Button
                variant="ghost"
                size="sm"
                onClick={scrollToTop}
                className="h-8 text-xs hover:text-primary"
              >
                Back to Top ↑
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer