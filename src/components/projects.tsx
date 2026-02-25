import React, { useEffect, useRef, useState } from 'react'
import { ExternalLink, Github, Eye, ArrowUpRight } from 'lucide-react'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import { ImageWithFallback } from './figma/ImageWithFallback'

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const projects = [
    {
      title: 'WCAG Design System Library',
      description: 'A comprehensive React-based design system library that meets WCAG AA accessibility standards. Features over 50 reusable components with extensive documentation and testing.',
      image: 'https://images.unsplash.com/photo-1737918543099-dfa8ec2e3909?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjBzeXN0ZW0lMjBjb21wb25lbnRzfGVufDF8fHx8MTc1OTE1MzczN3ww&ixlib=rb-4.1.0&q=80&w=1080',
      technologies: ['React', 'TypeScript', 'Storybook', 'Material UI', 'Jest', 'WCAG'],
      year: '2025',
      links: { github: '#', demo: '#', docs: '#' }
    },
    {
      title: 'API Documentation Generator',
      description: 'Custom CLI tool that generates comprehensive API documentation sites using Docusaurus and OpenAPI specifications. Used to create 40+ documentation sites.',
      image: 'https://images.unsplash.com/photo-1606623745407-fee6bc803d59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcGklMjBkb2N1bWVudGF0aW9uJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc1OTI1NzMxNHww&ixlib=rb-4.1.0&q=80&w=1080',
      technologies: ['Node.js', 'Docusaurus', 'OpenAPI', 'TypeScript', 'CLI', 'Markdown'],
      year: '2025',
      links: { github: '#', docs: '#' }
    },
    {
      title: 'API Traffic Analytics',
      description: 'Real-time dashboard for monitoring API usage patterns, performance metrics, and traffic analysis. Helps teams optimize API performance and understand usage trends.',
      image: 'https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmFseXRpY3MlMjBkYXNoYm9hcmR8ZW58MXx8fHwxNzU5MTgyOTE5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      technologies: ['React', 'Chart.js', 'TypeScript', 'REST API', 'Real-time Data'],
      year: '2024',
      links: { github: '#', demo: '#' }
    },
    {
      title: 'CI/CD Pipeline Suite',
      description: 'Comprehensive CI/CD pipeline implementation using GitHub Actions for automated testing, building, and deployment of frontend applications with quality gates.',
      image: 'https://images.unsplash.com/photo-1649451844931-57e22fc82de3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tYW5kJTIwbGluZSUyMGludGVyZmFjZXxlbnwxfHx8fDE3NTkyNDE1MDR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      technologies: ['GitHub Actions', 'Docker', 'Node.js', 'Jest', 'ESLint'],
      year: '2024',
      links: { github: '#', docs: '#' }
    }
  ]

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-24 border-b border-border bg-background"
    >
      <div className="section-container">
        {/* Header */}
        <div className={`flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-border pb-8 ${isVisible ? 'fade-in visible' : 'fade-in'}`}>
          <div className="space-y-4 max-w-2xl">
            <h2 className="font-serif text-5xl md:text-7xl font-bold uppercase tracking-tighter">
              Selected <span className="italic text-muted-foreground mr-2">Works</span>
            </h2>
            <p className="text-muted-foreground font-mono text-sm max-w-md uppercase tracking-wider">
              [INDEX] Architecture, Accessibility, Tooling
            </p>
          </div>
          <div className="mt-8 md:mt-0 font-mono text-xs uppercase text-right">
            [04] Projects <br /> Displayed
          </div>
        </div>

        {/* Projects List - Editorial Style */}
        <div className={`flex flex-col ${isVisible ? 'fade-in visible' : 'fade-in'}`}>
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative border-b border-border py-8 md:py-12 transition-all hover:bg-muted/50 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Info Column */}
              <div className="lg:col-span-4 flex flex-col justify-between h-full space-y-4 lg:space-y-0">
                <div className="font-mono text-sm text-muted-foreground">
                  [{String(index + 1).padStart(2, '0')}] // {project.year}
                </div>
                <h3 className="font-serif text-3xl md:text-4xl leading-none mt-4 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
              </div>

              {/* Description Column */}
              <div className="lg:col-span-4 flex flex-col justify-center space-y-6">
                <p className="text-muted-foreground text-sm uppercase tracking-wider leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-xs font-mono border border-border px-2 py-1 bg-background"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action/Image Column */}
              <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-center">
                <div className="relative w-full aspect-video overflow-hidden border border-border mb-4">
                  <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity duration-500"></div>
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                  />
                </div>
                <div className="flex gap-2 w-full justify-between lg:justify-end">
                  {project.links.demo && (
                    <a href={project.links.demo} className="flex-1 lg:flex-none border border-border px-4 py-2 font-mono text-xs uppercase flex items-center justify-center hover:bg-foreground hover:text-background transition-colors group/link">
                      Demo <ArrowUpRight className="ml-2 h-3 w-3 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                    </a>
                  )}
                  {project.links.github && (
                    <a href={project.links.github} className="flex-1 lg:flex-none border border-border px-4 py-2 font-mono text-xs uppercase flex items-center justify-center hover:bg-foreground hover:text-background transition-colors">
                      Repo
                    </a>
                  )}
                  {project.links.docs && (
                    <a href={project.links.docs} className="flex-1 lg:flex-none border border-border px-4 py-2 font-mono text-xs uppercase flex items-center justify-center hover:bg-foreground hover:text-background transition-colors">
                      Docs
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className={`flex flex-col items-center justify-center mt-24 ${isVisible ? 'fade-in visible' : 'fade-in'}`}>
          <div className="font-mono text-xs text-muted-foreground mb-4">[INTERESTED IN COLLABORATION?]</div>
          <Button
            size="lg"
            variant="outline"
            className="rounded-none border-border font-mono uppercase tracking-widest h-16 px-12 hover:bg-foreground hover:text-background transition-colors border max-w-sm w-full"
            onClick={() => {
              const element = document.getElementById('contact')
              if (element) element.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            Initiate Contact
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Projects