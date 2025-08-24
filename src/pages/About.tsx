import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  Target,
  Lightbulb,
  Users,
  Rocket,
  ArrowRight,
  CheckCircle,
  Globe,
  TrendingUp,
  Award,
  Heart
} from "lucide-react"

const milestones = [
  {
    year: "2024",
    title: "Project Launch",
    description: "PrashnaAI was conceived to solve the problem of information overload on the web."
  },
  {
    year: "2024",
    title: "AI Integration",
    description: "Advanced AI models integrated for real-time website content processing."
  },
  {
    year: "2024",
    title: "Public Release",
    description: "Free public access launched for researchers, students, and professionals worldwide."
  }
]

const values = [
  {
    icon: Target,
    title: "Precision",
    description: "We deliver accurate, contextual insights from any website content with AI precision."
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Constantly pushing the boundaries of what's possible with AI and web content analysis."
  },
  {
    icon: Users,
    title: "Accessibility",
    description: "Making advanced AI research tools available to everyone, regardless of technical background."
  },
  {
    icon: Heart,
    title: "Community",
    description: "Building a supportive community of learners, researchers, and knowledge seekers."
  }
]

const useCases = [
  {
    title: "Academic Research",
    description: "Students and researchers can quickly analyze academic papers, extract key findings, and understand complex concepts.",
    benefits: ["Literature review acceleration", "Concept clarification", "Citation discovery"]
  },
  {
    title: "Professional Analysis",
    description: "Business professionals can analyze market reports, competitor websites, and industry documentation.",
    benefits: ["Market intelligence", "Competitive analysis", "Industry insights"]
  },
  {
    title: "Content Creation",
    description: "Writers and creators can research topics, gather insights, and understand trending content.",
    benefits: ["Topic research", "Content inspiration", "Trend analysis"]
  },
  {
    title: "Learning & Education",
    description: "Educators and students can break down complex materials and create interactive learning experiences.",
    benefits: ["Simplified explanations", "Interactive Q&A", "Concept visualization"]
  }
]

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-background via-background to-primary/5">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
              About <span className="gradient-text">PrashnaAI</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 animate-slide-up">
              Transforming how people interact with web content through intelligent AI conversations
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                In today's information-rich world, finding specific insights from websites can be overwhelming. 
                PrashnaAI was born from the need to make web content more accessible and interactive.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                We believe that every piece of content should be conversational. Whether you're a researcher 
                diving into academic papers, a student trying to understand complex documentation, or a 
                professional analyzing industry reports, PrashnaAI transforms static web pages into 
                dynamic, intelligent conversations.
              </p>
              <Button
                size="lg"
                asChild
                className="bg-hero-gradient hover:opacity-90 text-white px-6 py-3"
              >
                <a
                  href="https://prashna-web.onrender.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  Experience Our Mission
                  <ArrowRight className="h-5 w-5" />
                </a>
              </Button>
            </div>
            <div className="space-y-6 animate-slide-up">
              <Card className="border-border/40">
                <CardHeader>
                  <Globe className="h-12 w-12 text-primary mb-4" />
                  <CardTitle>Global Impact</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Making knowledge accessible to millions of users worldwide, 
                    breaking down language and complexity barriers.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-border/40">
                <CardHeader>
                  <TrendingUp className="h-12 w-12 text-primary mb-4" />
                  <CardTitle>Continuous Innovation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Constantly evolving our AI capabilities to provide better, 
                    faster, and more accurate insights from web content.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Values
            </h2>
            <p className="text-xl text-muted-foreground">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <Card 
                  key={index} 
                  className="text-center hover:shadow-card-glow transition-all duration-300 border-border/40 hover:border-primary/20 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader>
                    <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl font-semibold">
                      {value.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                      {value.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Who Uses PrashnaAI?
            </h2>
            <p className="text-xl text-muted-foreground">
              Trusted by professionals across various industries
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <Card 
                key={index} 
                className="hover:shadow-card-glow transition-all duration-300 border-border/40 hover:border-primary/20 animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardHeader>
                  <CardTitle className="text-xl font-semibold mb-3">
                    {useCase.title}
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {useCase.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {useCase.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center gap-3">
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-muted-foreground">
              Key milestones in PrashnaAI's development
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div 
                  key={index} 
                  className="flex gap-8 items-start animate-fade-in"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-primary font-semibold">{milestone.year}</span>
                    </div>
                  </div>
                  <Card className="flex-1 border-border/40">
                    <CardHeader>
                      <CardTitle className="text-lg">{milestone.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{milestone.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <Award className="h-16 w-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Join Our Mission
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Be part of the future of intelligent web content interaction. 
              Start your journey with PrashnaAI today.
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
                <Rocket className="h-5 w-5" />
                Get Started Now
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

export default About