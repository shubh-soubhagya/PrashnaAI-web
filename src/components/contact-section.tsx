import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Code } from "lucide-react"

const developers = [
  {
    name: "Lead Developer",
    role: "Full Stack Engineer",
    email: "developer@prashnaai.com",
    linkedin: "https://linkedin.com/in/prashnaai-dev",
    github: "https://github.com/prashnaai"
  },
  {
    name: "AI Engineer",
    role: "Machine Learning Specialist",
    email: "ai@prashnaai.com",
    linkedin: "https://linkedin.com/in/prashnaai-ai",
    github: "https://github.com/prashnaai"
  }
]

export function ContactSection() {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get in Touch with Our
            <span className="gradient-text"> Development Team</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have questions, suggestions, or want to collaborate? We'd love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {developers.map((dev, index) => (
            <Card 
              key={index}
              className="hover:shadow-card-glow transition-all duration-300 border-border/40 hover:border-primary/20 animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-hero-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                  <Code className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl font-semibold">
                  {dev.name}
                </CardTitle>
                <CardDescription className="text-base">
                  {dev.role}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-col gap-3">
                  <Button
                    variant="outline"
                    asChild
                    className="justify-start hover:bg-primary/10"
                  >
                    <a href={`mailto:${dev.email}`} className="flex items-center gap-3">
                      <Mail className="h-4 w-4" />
                      {dev.email}
                    </a>
                  </Button>
                  
                  <Button
                    variant="outline"
                    asChild
                    className="justify-start hover:bg-primary/10"
                  >
                    <a href={dev.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
                      <Linkedin className="h-4 w-4" />
                      LinkedIn Profile
                    </a>
                  </Button>
                  
                  <Button
                    variant="outline"
                    asChild
                    className="justify-start hover:bg-primary/10"
                  >
                    <a href={dev.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
                      <Github className="h-4 w-4" />
                      GitHub Profile
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Contact Info */}
        <div className="mt-16 text-center">
          <Card className="max-w-2xl mx-auto border-border/40">
            <CardHeader>
              <CardTitle className="text-2xl">Open Source Project</CardTitle>
              <CardDescription className="text-base">
                PrashnaAI is built with transparency and community in mind.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Found a bug? Have a feature request? Want to contribute? 
                Check out our GitHub repository and join our growing community.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  variant="outline"
                  size="lg"
                  asChild
                  className="hover:bg-primary/10"
                >
                  <a
                    href="https://github.com/prashnaai/issues"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Github className="h-5 w-5" />
                    Report Issues
                  </a>
                </Button>
                <Button
                  size="lg"
                  asChild
                  className="bg-hero-gradient hover:opacity-90 text-white"
                >
                  <a
                    href="https://github.com/prashnaai/prashnaai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Github className="h-5 w-5" />
                    Contribute
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}