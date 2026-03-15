import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github } from "lucide-react"

const projects = [
  {
    title: "AgentCorp — Agentic Company Intelligence System",
    description:
      "A production agentic pipeline built on LangGraph StateGraph with 6 parallel Tavily search nodes, per-node domain filtering, and freshness control. Synthesizes real-time company intelligence briefs end-to-end in under 15 seconds. Includes a FastAPI backend for programmatic access and full observability via LangSmith tracing across all nodes and LLM calls. Features change detection that diffs cached reports against fresh results to surface what changed at a company since last search.",
    image: "/agentcorp-dashboard.jpg",
    technologies: ["Tavily", "LangGraph", "FastAPI", "Groq", "LangSmith", "Python"],
    github: "https://github.com/shreyapalande/agent-corp",
  },
  {
    title: "RAGBench — Retrieval Strategy Benchmarking Framework",
    description:
      "End-to-end benchmarking framework comparing 6 retrieval strategies — dense (FAISS), sparse (BM25), hybrid RRF, KV-cache, semantic cache, and PageRank GraphRAG — across LLaMA-3.3-70B and Gemini on custom document corpora. Implements LLM-as-judge evaluation pipeline scoring faithfulness, answer relevancy, and completeness with RAGAS as a secondary evaluator for reproducible quantitative comparison.",
    image: "/ragbench-dashboard.jpg",
    technologies: ["FAISS", "BM25", "LangGraph", "Groq", "RAGAS", "Python"],
    github: "https://github.com/shreyapalande/rag-bench",
  },
  {
    title: "AI Fashion Trend Forecasting",
    description:
      "Fine-tuned Mistral-7B-Instruct for structured entity extraction across 1,000+ fashion entries achieving 92% precision. Fine-tuned FLAN-T5 achieving 0.86 semantic similarity for trend forecasting. Built multimodal data collection pipeline integrating Whisper audio transcription with text scraping.",
    image: "/fashion-ai-trend-analysis-dashboard.jpg",
    technologies: ["Mistral-7B", "FLAN-T5", "Whisper", "HuggingFace", "Python"],
    github: "https://github.com/shreyapalande/Fashion-Trend-Prediction",
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              <span className="text-primary font-mono text-xl sm:text-2xl">03.</span> Projects
            </h2>
            <div className="h-px bg-border max-w-xs" />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:border-primary/50 transition-all group">
                <div className="aspect-video bg-muted overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-foreground">{project.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="font-mono text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  {project.github && (
                    <div className="flex gap-3 pt-2">
                      <Button size="sm" variant="outline" className="gap-2 bg-transparent" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4" />
                          View Code
                        </a>
                      </Button>
                    </div>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
