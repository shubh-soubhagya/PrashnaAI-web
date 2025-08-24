import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <div id="about" className="py-20 bg-secondary/10">
          <div className="container mx-auto px-4 lg:px-6 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                About <span className="gradient-text">PrashnaAI</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                PrashnaAI was born from the need to quickly extract insights from the vast amount of 
                information available on the web. Whether you're a researcher diving into academic papers, 
                a student trying to understand complex documentation, or a professional analyzing industry 
                reports, PrashnaAI transforms any website into an interactive conversation.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our advanced AI technology processes web content in real-time, allowing you to ask questions, 
                get summaries, and extract key information without having to read through entire articles. 
                It's like having a personal research assistant that never sleeps.
              </p>
            </div>
          </div>
        </div>
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

export default Index