import { Button } from "@/components/ui/button"
import { ArrowRight, MessageCircle, Zap } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000" />
      
      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-fade-in">
            <Zap className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium">AI-Powered Website Analysis</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-slide-up">
            Chat with Any Website
            <span className="block gradient-text">Instantly</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed animate-slide-up delay-200">
            Transform any website into an intelligent conversation. Get instant insights, 
            summaries, and answers from blogs, articles, and documentation.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-slide-up delay-300">
            <Button
              size="lg"
              asChild
              className="bg-hero-gradient hover:opacity-90 text-white px-8 py-4 text-lg font-semibold shadow-hero-glow animate-glow-pulse group"
            >
              <a
                href="https://prashna-web.onrender.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <MessageCircle className="h-5 w-5" />
                Start Your Free Chat
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>

            <Button
              variant="outline"
              size="lg"
              asChild
              className="px-8 py-4 text-lg border-primary/20 hover:bg-primary/10"
            >
              <a href="#features">
                Learn More
              </a>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground animate-fade-in delay-500">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span>Free to Use</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
              <span>No Registration Required</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
              <span>Instant Results</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}