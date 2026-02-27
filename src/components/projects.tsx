import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { Button } from './ui/button'
import { ImageWithFallback } from './figma/ImageWithFallback'
import dietai from '../assets/images/dietai.png'
import opunet from '../assets/images/opunet.png'
import chatdecks from '../assets/images/chatdecks.png'
import zdra from '../assets/images/zdra.png'

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
      title: 'DIETAI',
      description: 'A SaaS platform I founded and built from scratch. I wanted to see how far I could push AI to solve a daily chore, so I created a tool that completely automates meal planning—from analyzing nutrition to actually handling the grocery shopping.',
      image: dietai,
      technologies: ['TypeScript', 'Next.js', 'Tailwind CSS', 'Supabase', 'Stripe', 'Shadcn UI', 'Edamam API', 'Browser-use API'],
      year: '2025 - Present',
      links: { github: 'https://github.com/cristianxew/dietaibest', demo: 'https://dietaimanager.com/' }
    },
    {
      title: 'CHATDECKS',
      description: 'A fast, friendly landing page for an ed-tech platform. The goal was to build a seamless experience that helps teachers easily create digital activity cards for their students without fighting the software.',
      image: chatdecks,
      technologies: ['Gatsby', 'Sass', 'Wordpress CMS', 'GraphQL'],
      year: '2021',
      links: { github: 'https://gitlab.com/cristian_bernal/project-cd', demo: 'https://unruffled-shaw-808342.netlify.app/' }
    },
    {
      title: 'OPUNET',
      description: 'A corporate site for a digital agency where frontend performance meets easy content management. I paired a fast Next.js UI with a headless Strapi backend so the client could update their site effortlessly.',
      image: opunet,
      technologies: ['Next.js', 'Sass', 'Strapi', 'REST API', 'GSAP'],
      year: '2020',
      links: { github: 'https://gitlab.com/cristian_bernal/opunet/-/tree/main', demo: 'https://opunet.vercel.app/' }
    },
    {
      title: 'ZDRA',
      description: 'An interactive landing page built to grab attention. I focused on using GSAP to build complex, engaging scroll animations that feel incredibly smooth.',
      image: zdra,
      technologies: ['Gatsby', 'Sass', 'GSAP'],
      year: '2020',
      links: { github: 'https://github.com/cristianxew/drawing-line-on-scroll', demo: 'https://pensive-bhaskara-e3a9d4.netlify.app/' }
    },
  ];

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-24 border-b border-border"
    >
      <div className="section-container">
        {/* Header */}
        <div className={`flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-border pb-8 ${isVisible ? 'fade-in visible' : 'fade-in'}`}>
          <div className="space-y-4 max-w-2xl">
            <h2 className="font-serif text-5xl md:text-7xl font-bold uppercase tracking-tighter">
              Selected <span className="italic text-muted-foreground mr-2">Works</span>
            </h2>
            <p className="text-muted-foreground font-mono text-sm max-w-md uppercase tracking-wider">
              [INDEX]
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
              className="group relative border-b border-border py-8 md:py-12 transition-all grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
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
                <p className="text-muted-foreground text-sm  tracking-wider leading-relaxed">
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
                    className="w-full h-full object-cover transition-all duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="flex gap-2 w-full justify-between lg:justify-end">
                  {project.links.demo && (
                    <a target="_blank" href={project.links.demo} className="flex-1 lg:flex-none border border-border px-4 py-2 font-mono text-xs uppercase flex items-center justify-center hover:bg-foreground hover:text-background transition-colors group/link">
                      Demo <ArrowUpRight className="ml-2 h-3 w-3 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                    </a>
                  )}
                  {project.links.github && (
                    <a target="_blank" href={project.links.github} className="flex-1 lg:flex-none border border-border px-4 py-2 font-mono text-xs uppercase flex items-center justify-center hover:bg-foreground hover:text-background transition-colors">
                      Repo
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
            className="rounded-none border-border font-mono uppercase tracking-widest h-16 px-12 hover:bg-foreground hover:text-background dark:hover:bg-foreground dark:hover:text-background transition-colors border max-w-sm w-full"
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