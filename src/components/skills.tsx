import React, { useEffect, useRef, useState } from 'react'

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
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const skillCategories = [
    {
      id: "01",
      title: 'Languages',
      skills: ['TypeScript', 'JavaScript', 'Node.js', 'HTML5', 'CSS3', 'SASS']
    },
    {
      id: "02",
      title: 'Frameworks',
      skills: ['React', 'Angular', 'Next.js', 'Material UI', 'Tailwind CSS', 'Storybook', 'Chart.js']
    },
    {
      id: "03",
      title: 'Ecosystem',
      skills: ['Git', 'GitHub Actions', 'Docker', 'Vite', 'vitest', 'cypress', 'Docusaurus', 'GraphQL']
    },
    {
      id: "04",
      title: 'AI Tooling',
      skills: ['Claude Code', 'GitHub Copilot', 'Antigravity', 'Cursor', 'Microsoft Copilot Studio']
    }
  ]

  const expertiseAreas = [
    'WCAG Accessibility (AA/AAA)',
    'Responsive Web Design (RWD)',
    'Enterprise Component Libraries',
    'Unit Testing / Integration Testing',
    'API Documentation',
    'Performance Optimization',
    'CI/CD',
    'Pixel Perfect UI',
    'RESTful APIs',
  ]

  return (
    <section id="skills" ref={sectionRef} className="py-24 border-b border-border">
      <div className="section-container relative">
        <div className={`flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-border pb-8 ${isVisible ? 'fade-in visible' : 'fade-in'}`}>
          <div className="space-y-4 max-w-2xl">
            <h2 className="font-serif text-5xl md:text-7xl font-bold uppercase tracking-tighter">
              Skills / <span className="italic text-muted-foreground mr-2">Core</span>
            </h2>
            <p className="text-muted-foreground font-mono text-sm max-w-md uppercase tracking-wider">
              [CAPABILITIES] Frameworks, Languages, Operations
            </p>
          </div>
          <div className="mt-8 md:mt-0 font-mono text-xs uppercase text-right">
            [SYS.DATA] Technical <br /> Specifications
          </div>
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-l border-t border-border ${isVisible ? 'scale-in visible' : 'scale-in'}`}>
          {skillCategories.map((category) => (
            <div key={category.id} className="border-r border-b border-border p-8 hover:bg-muted/30 transition-colors group">
              <div className="font-mono text-xs text-muted-foreground mb-12">
                [{category.id}]
              </div>
              <h3 className="font-serif text-2xl mb-8 group-hover:text-primary transition-colors">
                {category.title}
              </h3>
              <ul className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="font-mono text-sm border-b border-border/50 pb-2 last:border-0 hover:pl-2 transition-all cursor-default">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className={`mt-24 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start ${isVisible ? 'slide-in-left visible' : 'slide-in-left'}`}>
          <div className="lg:col-span-4 max-w-sm">
            <h3 className="font-serif text-3xl mb-4 uppercase">Expertise</h3>
            <p className="text-muted-foreground text-sm uppercase font-mono tracking-widest leading-relaxed mb-8">
              Specialized domains of knowledge gathered over half a decade in fintech frontend engineering.
            </p>
          </div>

          <div className="lg:col-span-8 flex flex-wrap gap-2">
            {expertiseAreas.map((area, idx) => (
              <span key={idx} className="font-mono text-xs uppercase tracking-wider px-4 py-3 border border-border hover:bg-foreground hover:text-background transition-colors cursor-default">
                {area}
              </span>
            ))}
          </div>
        </div>

        <div className={`mt-24 grid grid-cols-2 md:grid-cols-4 border-t border-l border-border ${isVisible ? 'fade-in visible' : 'fade-in'}`}>
          {[
            { num: '40+', label: 'Projects' },
            { num: 'AA', label: 'WCAG Compliance' },
            { num: '5+', label: 'Years Experience' },
            { num: '∞', label: 'Lines of Code' }
          ].map((stat, idx) => (
            <div key={idx} className="border-r border-b border-border p-6 md:p-10 flex flex-col justify-center items-center group hover:bg-muted/30 transition-colors text-center aspect-square">
              <div className="font-serif text-4xl md:text-6xl mb-4 group-hover:scale-110 transition-transform">
                {stat.num}
              </div>
              <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills