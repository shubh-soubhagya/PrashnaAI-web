import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  MessageCircle, 
  FileText, 
  History, 
  Download, 
  Users, 
  Zap,
  ArrowRight,
  CheckCircle,
  Globe,
  Brain,
  Clock,
  Shield
} from "lucide-react"

const mainFeatures = [
  {
    icon: MessageCircle,
    title: "URL-to-Chat AI Assistant",
    description: "Simply enter any website URL and start chatting with its content in real-time. Our AI processes the page instantly.",
    benefits: [
      "Works with any public website",
      "Real-time content processing",
      "No manual content input needed",
      "Supports multiple formats (articles, blogs, docs)"
    ]
  },
  {
    icon: FileText,
    title: "Smart Summarization",
    description: "Get concise answers and key insights from long articles, blog posts, and documentation pages.",
    benefits: [
      "Extract key points instantly",
      "Generate executive summaries",
      "Identify main arguments",
      "Highlight important statistics"
    ]
  },
  {
    icon: History,
    title: "Chat History Navigation",
    description: "Every chat session is automatically saved under 'New Chat' for easy access and future reference.",
    benefits: [
      "Never lose important conversations",
      "Easy session management",
      "Quick reference access",
      "Organized chat timeline"
    ]
  },
  {
    icon: Download,
    title: "Downloadable Content",
    description: "Export and save the extracted website text in .txt format for offline reference and analysis.",
    benefits: [
      "Offline content access",
      "Easy sharing with team",
      "Archive important information",
      "Compatible with all devices"
    ]
  },
  {
    icon: Users,
    title: "Perfect for Professionals",
    description: "Ideal for researchers, students, journalists, analysts, and content creators who need quick insights.",
    benefits: [
      "Academic research support",
      "Market analysis tools",
      "Content creation assistance",
      "Professional documentation"
    ]
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Get AI-powered answers in seconds. No waiting, no complex setup - just instant intelligent responses.",
    benefits: [
      "Sub-second response times",
      "Concurrent processing",
      "Optimized AI algorithms",
      "Real-time insights"
    ]
  }
]

const additionalFeatures = [
  {
    icon: Globe,
    title: "Multi-Language Support",
    description: "Process websites in multiple languages and get responses in your preferred language."
  },
  {
    icon: Brain,
    title: "Context-Aware AI",
    description: "Our AI understands context and maintains conversation flow for better insights."
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Access PrashnaAI anytime, anywhere. No downtime, no maintenance windows."
  },
  {
    icon: Shield,
    title: "Privacy First",
    description: "Your conversations are private. We don't store or share your chat data."
  }
]

const Features = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-background via-background to-primary/5">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
              Powerful Features for
              <span className="gradient-text block">Every Use Case</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 animate-slide-up">
              Discover how PrashnaAI transforms any website into an intelligent conversation partner
            </p>
            <Button
              size="lg"
              asChild
              className="bg-hero-gradient hover:opacity-90 text-white px-8 py-4 text-lg font-semibold animate-glow-pulse"
            >
              <a
                href="https://prashna-web.onrender.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                Try All Features Free
                <ArrowRight className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {mainFeatures.map((feature, index) => {
              const Icon = feature.icon
              return (
                <Card 
                  key={index} 
                  className="group hover:shadow-card-glow transition-all duration-300 border-border/40 hover:border-primary/20 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader>
                    <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-2xl font-semibold mb-3">
                      {feature.title}
                    </CardTitle>
                    <CardDescription className="text-base leading-relaxed text-muted-foreground">
                      {feature.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                          <span className="text-sm">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Additional Features */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Additional Features
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              More powerful capabilities to enhance your research and analysis workflow
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalFeatures.map((feature, index) => {
              const Icon = feature.icon
              return (
                <Card 
                  key={index} 
                  className="text-center hover:shadow-card-glow transition-all duration-300 border-border/40 hover:border-primary/20 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg font-semibold">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Research?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of researchers, students, and professionals who use PrashnaAI daily
            </p>
            <Button
              size="lg"
              asChild
              className="bg-hero-gradient hover:opacity-90 text-white px-8 py-4 text-lg font-semibold shadow-hero-glow animate-glow-pulse"
            >
              <a
                href="https://prashna-web.onrender.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <MessageCircle className="h-5 w-5" />
                Start Chatting Now
                <ArrowRight className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Features