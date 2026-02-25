import React, { useEffect, useRef, useState } from 'react'
import { ExternalLink, Github, Eye, Award } from 'lucide-react'
import { Card, CardContent, CardHeader } from './ui/card'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import { ImageWithFallback } from './figma/ImageWithFallback'

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false)
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
      highlights: ['100% WCAG AA Compliant', '50+ Components', 'Full Test Coverage'],
      links: {
        github: '#',
        demo: '#',
        docs: '#'
      }
    },
    {
      title: 'API Documentation Generator',
      description: 'Custom CLI tool that generates comprehensive API documentation sites using Docusaurus and OpenAPI specifications. Used to create 40+ documentation sites.',
      image: 'https://images.unsplash.com/photo-1606623745407-fee6bc803d59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcGklMjBkb2N1bWVudGF0aW9uJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc1OTI1NzMxNHww&ixlib=rb-4.1.0&q=80&w=1080',
      technologies: ['Node.js', 'Docusaurus', 'OpenAPI', 'TypeScript', 'CLI', 'Markdown'],
      highlights: ['40+ Sites Generated', 'Automated Workflow', 'Developer-Friendly'],
      links: {
        github: '#',
        docs: '#'
      }
    },
    {
      title: 'API Traffic Analytics Dashboard',
      description: 'Real-time dashboard for monitoring API usage patterns, performance metrics, and traffic analysis. Helps teams optimize API performance and understand usage trends.',
      image: 'https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmFseXRpY3MlMjBkYXNoYm9hcmR8ZW58MXx8fHwxNzU5MTgyOTE5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      technologies: ['React', 'Chart.js', 'TypeScript', 'REST API', 'Real-time Data', 'Material UI'],
      highlights: ['Real-time Analytics', 'Performance Insights', 'Interactive Charts'],
      links: {
        github: '#',
        demo: '#'
      }
    },
    {
      title: 'CI/CD Pipeline Suite',
      description: 'Comprehensive CI/CD pipeline implementation using GitHub Actions for automated testing, building, and deployment of frontend applications with quality gates.',
      image: 'https://images.unsplash.com/photo-1649451844931-57e22fc82de3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tYW5kJTIwbGluZSUyMGludGVyZmFjZXxlbnwxfHx8fDE3NTkyNDE1MDR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      technologies: ['GitHub Actions', 'Docker', 'Node.js', 'Jest', 'ESLint', 'Automated Testing'],
      highlights: ['75% Faster Deployments', 'Quality Gates', 'Zero Downtime'],
      links: {
        github: '#',
        docs: '#'
      }
    }
  ]

  return (
    <section 
      id="projects" 
      ref={sectionRef}
      className="section-padding"
    >
      <div className="section-container">
        {/* Header */}
        <div className={`text-center space-y-4 mb-12 ${isVisible ? 'fade-in visible' : 'fade-in'}`}>
          <h2 className="text-3xl md:text-4xl font-bold">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work, demonstrating expertise in modern frontend development, 
            accessibility, and developer tooling.
          </p>
        </div>

        {/* Projects Grid */}
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 ${isVisible ? 'scale-in visible' : 'scale-in'}`}>
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex space-x-2">
                    {project.links.demo && (
                      <Button size="sm" className="bg-white text-black hover:bg-white/90">
                        <Eye className="h-4 w-4 mr-1" />
                        Demo
                      </Button>
                    )}
                    {project.links.github && (
                      <Button size="sm" variant="outline" className="border-white text-white hover:bg-white hover:text-black">
                        <Github className="h-4 w-4 mr-1" />
                        Code
                      </Button>
                    )}
                  </div>
                </div>
              </div>

              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold leading-tight">{project.title}</h3>
                  <div className="flex space-x-2 ml-4">
                    {project.links.github && (
                      <Button variant="ghost" size="icon" className="h-8 w-8" asChild>
                        <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4" />
                        </a>
                      </Button>
                    )}
                    {project.links.demo && (
                      <Button variant="ghost" size="icon" className="h-8 w-8" asChild>
                        <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    )}
                    {project.links.docs && (
                      <Button variant="ghost" size="icon" className="h-8 w-8" asChild>
                        <a href={project.links.docs} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Highlights */}
                <div className="flex items-center space-x-2">
                  <Award className="h-4 w-4 text-primary flex-shrink-0" />
                  <div className="flex flex-wrap gap-1">
                    {project.highlights.map((highlight, hIndex) => (
                      <Badge 
                        key={hIndex}
                        variant="secondary" 
                        className="text-xs bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground"
                      >
                        {highlight}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="space-y-2">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex}
                        variant="outline"
                        className="text-xs hover:bg-accent transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className={`text-center mt-12 ${isVisible ? 'fade-in visible' : 'fade-in'}`}>
          <p className="text-muted-foreground mb-6">
            Interested in seeing more of my work or collaborating on a project?
          </p>
          <Button 
            size="lg"
            onClick={() => {
              const element = document.getElementById('contact')
              if (element) element.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            Get In Touch
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Projects