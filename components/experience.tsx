import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, Calendar, MapPin } from "lucide-react"

const experiences = [
  {
    title: "Research Engineer",
    company: "Ohio State University",
    location: "Columbus, OH",
    period: "Aug 2025 – Present",
    description: [
      "Translated ambiguous research requirements into a production LLM evaluation system — used LiteLLM to orchestrate GPT-4 and Claude backends, automating 500+ proposal assessments with 75% agreement with human reviewers.",
      "Engineered data pipelines ingesting from ProductHunt (100+ products), Twitter (15K+ posts), and BuiltWith API (35K+ tech stacks) with retry logic, rate-limiting, and structured logging — delivered clean datasets meeting project specifications.",
      "Iterated on LLM evaluation rubrics with a 3-person team, benchmarking model outputs against human reviewers to validate scoring consistency across diverse proposal types.",
    ],
    technologies: ["Python", "GPT-4", "Claude", "LiteLLM", "Data Pipelines", "LLM Evaluation"],
  },
  {
    title: "Software Engineering Intern",
    company: "Arcon TechSolutions",
    location: "Mumbai, India",
    period: "Jun – Aug 2023",
    description: [
      "Implemented structured logging in C, reducing debugging time during production failures.",
      "Contributed to plugin development and deployment, enhancing system functionality.",
      "Improved CI/CD workflows, reducing merge conflicts by ~30%.",
    ],
    technologies: ["C", "CI/CD", "Git", "Plugin Development", "Logging"],
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <div className="space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              <span className="text-primary font-mono text-xl sm:text-2xl">02.</span> Experience
            </h2>
            <div className="h-px bg-border max-w-xs" />
          </div>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <Card key={index} className="p-6 hover:border-primary/50 transition-colors">
                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                    <div className="space-y-1">
                      <h3 className="text-xl font-bold text-foreground">{exp.title}</h3>
                      <div className="flex items-center gap-2 text-primary">
                        <Briefcase className="h-4 w-4" />
                        <span className="font-medium">{exp.company}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground text-sm">
                        <MapPin className="h-4 w-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground text-sm">
                      <Calendar className="h-4 w-4" />
                      <span className="font-mono">{exp.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-2 text-muted-foreground leading-relaxed">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="text-primary mt-1.5">▹</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="font-mono text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
