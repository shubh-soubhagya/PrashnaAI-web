import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  MessageCircle, 
  FileText, 
  History, 
  Download,
  ArrowRight,
  Users,
  TrendingUp,
  Award,
  CheckCircle
} from "lucide-react"
import { Link } from "react-router-dom"

const quickFeatures = [
  {
    icon: MessageCircle,
    title: "Chat with Any Website",
    description: "Enter a URL and start an intelligent conversation with the content instantly."
  },
  {
    icon: FileText,
    title: "Smart Summarization",
    description: "Get key insights and concise answers from long articles and documentation."
  },
  {
    icon: History,
    title: "Save Your Chats",
    description: "All conversations are automatically saved for future reference and analysis."
  },
  {
    icon: Download,
    title: "Export Content",
    description: "Download extracted website text in .txt format for offline use."
  }
]

const stats = [
  { value: "10K+", label: "Websites Analyzed" },
  { value: "50K+", label: "Questions Answered" },
  { value: "99.9%", label: "Uptime" },
  { value: "Free", label: "Always" }
]

const testimonials = [
  {
    text: "PrashnaAI has revolutionized how I research academic papers. What used to take hours now takes minutes.",
    author: "Research Student",
    role: "University Graduate"
  },
  {
    text: "As a content creator, I use PrashnaAI daily to analyze trending articles and get quick insights.",
    author: "Content Creator",
    role: "Digital Marketing"
  },
  {
    text: "Perfect for analyzing competitor websites and industry reports. It's like having an AI research assistant.",
    author: "Business Analyst",
    role: "Tech Industry"
  }
]

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        <HeroSection />
        
        {/* Quick Features Overview */}
        <section className="py-20 bg-secondary/10">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Why Choose <span className="gradient-text">PrashnaAI</span>?
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                The fastest way to extract insights from any website using advanced AI technology
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {quickFeatures.map((feature, index) => {
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

            <div className="text-center mt-12">
              <Button
                size="lg"
                asChild
                className="bg-hero-gradient hover:opacity-90 text-white px-8 py-4 text-lg font-semibold"
              >
                <Link to="/features" className="flex items-center gap-2">
                  Explore All Features
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Trusted by Users Worldwide
              </h2>
              <p className="text-xl text-muted-foreground">
                Join thousands who use PrashnaAI for intelligent web content analysis
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <Card 
                  key={index} 
                  className="text-center border-border/40 animate-fade-in"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <CardHeader>
                    <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                      {stat.value}
                    </div>
                    <p className="text-muted-foreground font-medium">
                      {stat.label}
                    </p>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 bg-secondary/10">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                How It Works
              </h2>
              <p className="text-xl text-muted-foreground">
                Get started in three simple steps
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center animate-fade-in">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-primary">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">Enter Website URL</h3>
                <p className="text-muted-foreground">
                  Simply paste any website URL into PrashnaAI's chat interface
                </p>
              </div>

              <div className="text-center animate-fade-in delay-200">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-primary">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">Ask Your Questions</h3>
                <p className="text-muted-foreground">
                  Start chatting with the content - ask questions, request summaries, or seek insights
                </p>
              </div>

              <div className="text-center animate-fade-in delay-300">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-primary">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">Get Instant Answers</h3>
                <p className="text-muted-foreground">
                  Receive intelligent, context-aware responses in seconds
                </p>
              </div>
            </div>

            <div className="text-center mt-12">
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
                  Try It Now - Free
                  <ArrowRight className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                What Our Users Say
              </h2>
              <p className="text-xl text-muted-foreground">
                Real feedback from professionals who use PrashnaAI daily
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card 
                  key={index} 
                  className="hover:shadow-card-glow transition-all duration-300 border-border/40 hover:border-primary/20 animate-fade-in"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Award key={i} className="h-4 w-4 text-primary fill-current" />
                      ))}
                    </div>
                    <CardDescription className="text-base leading-relaxed italic">
                      "{testimonial.text}"
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="font-semibold">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-secondary/10">
          <div className="container mx-auto px-4 lg:px-6 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Transform Your Research?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Join the AI revolution in web content analysis. Start chatting with websites today.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
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
                    Start Your Free Chat
                    <ArrowRight className="h-5 w-5" />
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  asChild
                  className="px-8 py-4 text-lg border-primary/20 hover:bg-primary/10"
                >
                  <Link to="/about">
                    Learn More About Us
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}

export default Index