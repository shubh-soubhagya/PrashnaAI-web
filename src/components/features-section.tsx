import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  MessageCircle, 
  FileText, 
  History, 
  Download, 
  Users, 
  Zap 
} from "lucide-react"

const features = [
  {
    icon: MessageCircle,
    title: "URL-to-Chat AI Assistant",
    description: "Simply enter any website URL and start chatting with its content in real-time. Our AI processes the page instantly."
  },
  {
    icon: FileText,
    title: "Smart Summarization",
    description: "Get concise answers and key insights from long articles, blog posts, and documentation pages."
  },
  {
    icon: History,
    title: "Chat History Navigation",
    description: "Every chat session is automatically saved under 'New Chat' for easy access and future reference."
  },
  {
    icon: Download,
    title: "Downloadable Content",
    description: "Export and save the extracted website text in .txt format for offline reference and analysis."
  },
  {
    icon: Users,
    title: "Perfect for Professionals",
    description: "Ideal for researchers, students, journalists, analysts, and content creators who need quick insights."
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Get AI-powered answers in seconds. No waiting, no complex setup - just instant intelligent responses."
  }
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Powerful Features for
            <span className="gradient-text"> Every Use Case</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to extract insights from any website, powered by advanced AI technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card 
                key={index} 
                className="group hover:shadow-card-glow transition-all duration-300 border-border/40 hover:border-primary/20 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-semibold">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}