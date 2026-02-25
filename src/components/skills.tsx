import React, { useEffect, useRef, useState } from 'react'
import { Code, Palette, Settings, Bot } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Badge } from './ui/badge'

const Skills = () => {
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

  const skillCategories = [
    {
      icon: Code,
      title: 'Programming Languages',
      color: 'bg-blue-500/10 text-blue-600',
      skills: ['TypeScript', 'JavaScript', 'Node.js', 'HTML5', 'CSS3', 'SASS']
    },
    {
      icon: Palette,
      title: 'Frameworks & Libraries',
      color: 'bg-green-500/10 text-green-600',
      skills: ['React', 'Angular', 'Next.js', 'Material UI', 'Tailwind CSS', 'Storybook', 'Chart.js']
    },
    {
      icon: Settings,
      title: 'Tools & Technologies',
      color: 'bg-purple-500/10 text-purple-600',
      skills: ['Git', 'GitHub Actions', 'Vite', 'Docusaurus', 'RESTful APIs', 'GraphQL', 'CI/CD Pipelines']
    },
    {
      icon: Bot,
      title: 'AI Tools',
      color: 'bg-orange-500/10 text-orange-600',
      skills: ['Cursor', 'Claude Code', 'GitHub Copilot', 'Microsoft Copilot Studio']
    }
  ]

  const expertiseAreas = [
    'WCAG Accessibility Standards',
    'Responsive Web Design (RWD)',
    'Component Library Development',
    'API Documentation',
    'Unit Testing',
    'Performance Optimization'
  ]

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="section-padding"
    >
      <div className="section-container">
        {/* Header */}
        <div className={`text-center space-y-4 mb-12 ${isVisible ? 'fade-in visible' : 'fade-in'}`}>
          <h2 className="text-3xl md:text-4xl font-bold">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and areas of expertise in frontend development.
          </p>
        </div>

        {/* Skills Grid */}
        <div className={`tech-grid mb-12 ${isVisible ? 'scale-in visible' : 'scale-in'}`}>
          {skillCategories.map((category, index) => {
            const Icon = category.icon
            return (
              <Card
                key={index}
                className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-3">
                    <div className={`w-10 h-10 rounded-lg ${category.color} flex items-center justify-center`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <CardTitle className="text-lg">{category.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="secondary"
                        className="hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Expertise Areas */}
        <div className={`${isVisible ? 'fade-in visible' : 'fade-in'}`}>
          <h3 className="text-2xl font-semibold text-center mb-8">Areas of Expertise</h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {expertiseAreas.map((area, index) => (
              <Badge
                key={index}
                variant="outline"
                className="px-4 py-2 text-sm hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 cursor-default"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {area}
              </Badge>
            ))}
          </div>
        </div>

        {/* Fun Stats */}
        <div className={`mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 ${isVisible ? 'slide-in-left visible' : 'slide-in-left'}`}>
          {[
            { number: '40+', label: 'API Documentation Sites' },
            { number: '100%', label: 'WCAG AA Compliance' },
            { number: '5+', label: 'Years Experience' },
            { number: '∞', label: 'Lines of Code' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl md:text-3xl font-bold gradient-text">{stat.number}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills