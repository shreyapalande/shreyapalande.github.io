import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Mail, MessageSquare, Phone } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-2xl">
        <div className="space-y-8">
          <div className="space-y-2 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              <span className="text-primary font-mono text-xl sm:text-2xl">05.</span> Get In Touch
            </h2>
            <div className="h-px bg-border max-w-xs mx-auto" />
          </div>

          <Card className="p-8 text-center space-y-6">
            <div className="space-y-4">
              <div className="inline-flex p-4 bg-primary/10 rounded-full">
                <MessageSquare className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Let's Connect!</h3>
              <p className="text-muted-foreground leading-relaxed max-w-md mx-auto">
                I'm finishing my MS at Ohio State in May 2026 and actively looking for AI Engineer and Forward Deployed Engineer roles. Open to opportunities in New York or San Francisco. Whether you have a question or just want to say hi, feel free to reach out!
              </p>
            </div>

            <div className="space-y-3 text-muted-foreground">
              <div className="flex items-center justify-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <a href="mailto:shreyapalande02@gmail.com" className="hover:text-primary transition-colors">
                  shreyapalande02@gmail.com
                </a>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <a href="tel:+16143607291" className="hover:text-primary transition-colors">
                  +1 614-360-7291
                </a>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" className="gap-2 font-mono" asChild>
                <a href="mailto:shreyapalande02@gmail.com">
                  <Mail className="h-4 w-4" />
                  Send Email
                </a>
              </Button>
              <Button size="lg" variant="outline" className="font-mono bg-transparent" asChild>
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                  Download Resume
                </a>
              </Button>
            </div>
          </Card>

          <footer className="text-center pt-12 pb-8">
            <p className="text-sm text-muted-foreground font-mono">Built with Next.js & Tailwind CSS</p>
            <p className="text-sm text-muted-foreground font-mono mt-2">© 2026 Shreya Palande</p>
          </footer>
        </div>
      </div>
    </section>
  )
}
