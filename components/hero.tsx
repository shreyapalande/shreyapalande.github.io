"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Linkedin, Mail, FileText } from "lucide-react"

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
      <div className="container mx-auto max-w-4xl">
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="text-primary font-mono text-sm sm:text-base">Hi, my name is</p>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-foreground text-balance">Shreya Palande</h1>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-muted-foreground text-balance">
              I build agentic systems and RAG pipelines.
            </h2>
          </div>

          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed text-pretty">
            I'm a graduate student at <span className="text-foreground font-medium">The Ohio State University</span>{" "}
            specializing in <span className="text-foreground font-medium">artificial intelligence</span>,{" "}
            <span className="text-foreground font-medium">machine learning</span>, and{" "}
            <span className="text-foreground font-medium">data science</span>. I'm passionate about turning complex data
            into actionable insights and building intelligent systems that make a difference.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <Button size="lg" className="font-mono group" asChild>
              <a href="#projects">
                View My Work
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="font-mono bg-transparent" asChild>
              <a href="#contact">Get In Touch</a>
            </Button>
          </div>

          <div className="flex gap-4 pt-8">
            <a
              href="https://github.com/shreyapalande"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/shreyapalande02/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="mailto:shreyapalande02@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail className="h-6 w-6" />
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Resume"
            >
              <FileText className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
