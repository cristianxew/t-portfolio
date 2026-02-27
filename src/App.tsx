import { useEffect } from 'react'
import { ThemeProvider } from './components/theme-provider'
import { Toaster } from "./components/ui/sonner"
import Header from './components/header'
import Hero from './components/hero'
import About from './components/about'
import Skills from './components/skills'
import Experience from './components/experience'
import Projects from './components/projects'
import Contact from './components/contact'
import Footer from './components/footer'
import { AnimatedBackground } from './components/animated-background'

// Animation utility function
const observeElements = () => {
  const animatedElements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right, .scale-in')

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible')
      }
    })
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  })

  animatedElements.forEach((el) => observer.observe(el))
}

export default function App() {
  useEffect(() => {
    // Initialize animations
    observeElements()

    // Add smooth scrolling behavior
    document.documentElement.style.scrollBehavior = 'smooth'

    // Cleanup function
    return () => {
      document.documentElement.style.scrollBehavior = 'auto'
    }
  }, [])

  return (
    <ThemeProvider defaultTheme="system" storageKey="portfolio-theme">
      <div className="min-h-screen bg-transparent font-sans antialiased relative z-0">
        <AnimatedBackground />

        {/* Header */}
        <Header />

        {/* Main Content */}
        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Contact />
        </main>

        {/* Footer */}
        <Footer />

        {/* Toast notifications */}
        <Toaster />
      </div>
    </ThemeProvider>
  )
}