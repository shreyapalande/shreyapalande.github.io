import { Card } from "@/components/ui/card"
import { Code, Brain, Wrench } from "lucide-react"

const skillCategories = [
  {
    title: "Languages & Frameworks",
    icon: Code,
    skills: ["Python", "JavaScript", "SQL", "Flask", "React"],
  },
  {
    title: "AI / LLM / Agentic Stack",
    icon: Brain,
    skills: [
      "LangGraph",
      "LangChain",
      "LangSmith",
      "Tavily API",
      "RAG pipelines",
      "agentic orchestration",
      "LLM-as-judge evaluation",
      "context engineering",
      "prompt engineering",
      "LiteLLM",
      "FAISS",
      "BM25",
      "GraphRAG",
      "RAGAS",
      "fine-tuning (Mistral-7B, FLAN-T5)",
      "Groq",
      "Hugging Face",
    ],
  },
  {
    title: "Infra & Systems",
    icon: Wrench,
    skills: [
      "FastAPI",
      "Redis",
      "Docker",
      "Git",
      "CI/CD",
      "async Python",
      "structured logging",
      "observability & tracing",
      "data pipelines",
      "API integration",
      "Streamlit",
    ],
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              <span className="text-primary font-mono text-xl sm:text-2xl">04.</span> Skills
            </h2>
            <div className="h-px bg-border max-w-xs" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => {
              const Icon = category.icon
              return (
                <Card key={index} className="p-6 hover:border-primary/50 transition-colors">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <h3 className="text-lg font-bold text-foreground">{category.title}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-secondary text-secondary-foreground rounded-md text-sm font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
