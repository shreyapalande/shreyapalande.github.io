import { Card } from "@/components/ui/card"

export function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <div className="space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              <span className="text-primary font-mono text-xl sm:text-2xl">01.</span> About Me
            </h2>
            <div className="h-px bg-border max-w-xs" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                I'm a CS grad student at Ohio State finishing in May 2026, focused on RAG pipelines, agentic systems, and LLM infrastructure. I build things that connect language models to the real world — retrieval layers, agent orchestration, evaluation frameworks. Currently exploring how production agentic systems actually break and what it takes to make them reliable.
              </p>
            </div>

            <Card className="p-6 space-y-4 h-fit">
              <div className="aspect-square bg-muted rounded-lg overflow-hidden">
                <img src="/professional-headshot.jpeg" alt="Shreya Palande" className="w-full h-full object-cover" />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
