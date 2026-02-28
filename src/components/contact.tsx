import { useEffect, useRef, useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { toast } from "sonner"
import { useForm, ValidationError } from '@formspree/react'

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const sectionRef = useRef<HTMLElement>(null)
  const [state, handleSubmit] = useForm("mrgozgva")

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (state.succeeded) {
      toast.success('TRANSMISSION SUCCESSFUL. I WILL RESPOND AS SOON AS POSSIBLE.')
      setFormData({ name: '', email: '', message: '' })
    }
  }, [state.succeeded])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <section id="contact" ref={sectionRef} className="py-24 border-b border-border relative overflow-hidden bg-muted/20">
      <div className="absolute left-0 top-0 text-[30vw] font-serif leading-none tracking-tighter opacity-[0.02] dark:opacity-[0.03] select-none pointer-events-none">
        05
      </div>
      <div className="section-container relative z-10 w-full">

        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start ${isVisible ? 'fade-in visible' : 'fade-in'}`}>
          {/* Left Column: Typography & Info */}
          <div className="flex flex-col h-full justify-between">
            <div className="mb-16">
              <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-8">
                [COMMUNICATIONS LINK ACTIVE]
              </div>
              <h2 className="font-serif text-6xl md:text-8xl font-bold uppercase tracking-tighter leading-none mb-8">
                Initialize <br />
                <span className="italic text-muted-foreground">Contact</span>
                <span className="text-primary align-top text-[0.5em] animate-pulse">_</span>
              </h2>
              <p className="font-mono text-sm leading-relaxed text-muted-foreground max-w-md uppercase tracking-wider">
                Currently open to engaging in new opportunities, collaborations, or discussing architecture. Await your transmission.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 font-mono text-xs uppercase tracking-widest border-t border-border pt-8 mt-auto">
              <div>
                <div className="text-muted-foreground mb-2">[EMAIL]</div>
                <a href="mailto:cristianxsa15@gmail.com" className="hover:text-primary transition-colors hover:underline underline-offset-4">cristianxsa15@gmail.com</a>
              </div>
              <div>
                <div className="text-muted-foreground mb-2">[PHONE]</div>
                <a href="tel:+48512726313" className="hover:text-primary transition-colors hover:underline underline-offset-4">+48 512 726 313</a>
              </div>
              <div>
                <div className="text-muted-foreground mb-2">[LOCATION]</div>
                <span>Warsaw, Poland / GMT+1</span>
              </div>
              <div>
                <div className="text-muted-foreground mb-2">[STATUS]</div>
                <span className="text-green-500 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span> ONLINE
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="border border-border bg-background p-8 md:p-12 shadow-[8px_8px_0_0_rgba(0,0,0,0.1)] dark:shadow-[8px_8px_0_0_rgba(255,255,255,0.05)] relative">
            <div className="absolute top-0 right-0 p-4 font-mono text-xs text-muted-foreground">SECURE_CHANNEL</div>

            <form onSubmit={handleSubmit} className="space-y-8 mt-4">
              <div className="space-y-2">
                <label htmlFor="name" className="font-mono text-xs uppercase tracking-widest text-muted-foreground flex items-center">
                  <ArrowRight className="w-3 h-3 mr-2 hidden group-focus-within:block" /> Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="IDENTIFIER"
                  required
                  className="w-full bg-transparent border-b border-border py-4 font-mono text-sm uppercase focus:outline-none focus:border-primary transition-colors placeholder:text-muted-foreground/30"
                />
                <ValidationError prefix="Name" field="name" errors={state.errors} className="text-red-500 font-mono text-xs" />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="RETURN_ADDRESS"
                  required
                  className="w-full bg-transparent border-b border-border py-4 font-mono text-sm uppercase focus:outline-none focus:border-primary transition-colors placeholder:text-muted-foreground/30"
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 font-mono text-xs" />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="PAYLOAD..."
                  rows={4}
                  required
                  className="w-full bg-transparent border-b border-border py-4 font-mono text-sm uppercase resize-none focus:outline-none focus:border-primary transition-colors placeholder:text-muted-foreground/30"
                />
                <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-500 font-mono text-xs" />
              </div>

              <button
                type="submit"
                disabled={state.submitting}
                className="w-full bg-foreground text-background font-mono text-xs uppercase tracking-widest py-6 hover:bg-primary transition-colors flex items-center justify-center gap-4 group"
              >
                {state.submitting ? '[TRANSMITTING...]' : (
                  <>
                    [TRANSMIT]
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact