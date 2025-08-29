import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  Github, 
  Linkedin, 
  Mail, 
  Code, 
  MessageCircle,
  ArrowRight,
  User,
  Briefcase,
  MapPin,
  Calendar,
  Star,
  Heart,
  Coffee
} from "lucide-react"

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-background via-background to-primary/5">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
              Get in Touch
            </h1>
            <p className="text-xl text-muted-foreground mb-8 animate-slide-up">
              Have questions, suggestions, or want to collaborate? Let's connect!
            </p>
          </div>
        </div>
      </section>

      {/* Developer Profile Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Meet the <span className="gradient-text">Developer</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                The mind behind PrashnaAI's intelligent web content analysis
              </p>
            </div>

            {/* Developer Card */}
            <Card className="max-w-2xl mx-auto hover:shadow-card-glow transition-all duration-300 border-border/40 hover:border-primary/20 animate-fade-in">
              <CardHeader className="text-center pb-6">
                <div className="w-24 h-24 bg-hero-gradient rounded-full flex items-center justify-center mx-auto mb-6 shadow-hero-glow">
                  <Code className="h-12 w-12 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold">
                  Soubhagya Srivastava
                </CardTitle>
                <CardDescription className="text-lg text-primary font-medium">
                  Full Stack AI Engineer
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* About */}
                <div className="text-center mb-8">
                  <p className="text-muted-foreground leading-relaxed">
                    Passionate about creating intelligent solutions that make information more accessible. 
                    Specialized in full-stack development with a focus on AI integration and user experience.
                  </p>
                </div>

                {/* Skills & Expertise */}
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <Briefcase className="h-4 w-4 text-primary" />
                      Expertise
                    </h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Full Stack Development</li>
                      <li>• AI/ML Integration</li>
                      <li>• Web Content Processing</li>
                      <li>• React & Node.js</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <Star className="h-4 w-4 text-primary" />
                      Interests
                    </h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Artificial Intelligence</li>
                      <li>• Open Source Projects</li>
                      <li>• Research & Innovation</li>
                      <li>• Tech Communities</li>
                    </ul>
                  </div>
                </div>

                {/* Contact Methods */}
                <div className="space-y-4">
                  <h4 className="font-semibold text-center mb-6">Let's Connect</h4>
                  
                  <Button
                    variant="outline"
                    asChild
                    className="w-full justify-start hover:bg-primary/10 border-border/40 hover:border-primary/20"
                  >
                    <a href="mailto:soubhagyasrivastava240@gmail.com" className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-primary" />
                      <div className="text-left">
                        <div className="font-medium">Email</div>
                        <div className="text-sm text-muted-foreground">soubhagyasrivastava240@gmail.com</div>
                      </div>
                    </a>
                  </Button>
                  
                  <Button
                    variant="outline"
                    asChild
                    className="w-full justify-start hover:bg-primary/10 border-border/40 hover:border-primary/20"
                  >
                    <a href="https://www.linkedin.com/in/soubhagya-srivastava-611408267/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
                      <Linkedin className="h-5 w-5 text-primary" />
                      <div className="text-left">
                        <div className="font-medium">LinkedIn</div>
                        <div className="text-sm text-muted-foreground">Professional Network</div>
                      </div>
                    </a>
                  </Button>
                  
                  <Button
                    variant="outline"
                    asChild
                    className="w-full justify-start hover:bg-primary/10 border-border/40 hover:border-primary/20"
                  >
                    <a href="https://github.com/shubh-soubhagya" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
                      <Github className="h-5 w-5 text-primary" />
                      <div className="text-left">
                        <div className="font-medium">GitHub</div>
                        <div className="text-sm text-muted-foreground">Open Source Contributions</div>
                      </div>
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Ways to Connect Section */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How Can We Help?
            </h2>
            <p className="text-xl text-muted-foreground">
              Different ways to get in touch based on your needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center hover:shadow-card-glow transition-all duration-300 border-border/40 hover:border-primary/20 animate-fade-in">
              <CardHeader>
                <MessageCircle className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-lg">General Questions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Have questions about PrashnaAI features or functionality?
                </p>
                <Button variant="outline" asChild className="w-full">
                  <a href="mailto:soubhagyasrivastava240@gmail.com?subject=General Question about PrashnaAI">
                    Send Email
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-card-glow transition-all duration-300 border-border/40 hover:border-primary/20 animate-fade-in delay-100">
              <CardHeader>
                <Code className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-lg">Technical Issues</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Found a bug or experiencing technical difficulties?
                </p>
                <Button variant="outline" asChild className="w-full">
                  <a href="https://github.com/shubh-soubhagya/PrashnaAI-web/issues" target="_blank" rel="noopener noreferrer">
                    Report Issue
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-card-glow transition-all duration-300 border-border/40 hover:border-primary/20 animate-fade-in delay-200">
              <CardHeader>
                <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-lg">Collaboration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Interested in collaborating or contributing to the project?
                </p>
                <Button variant="outline" asChild className="w-full">
                  <a href="https://www.linkedin.com/in/soubhagya-srivastava-611408267/" target="_blank" rel="noopener noreferrer">
                    Connect on LinkedIn
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Open Source Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <Card className="border-border/40 animate-fade-in">
              <CardHeader>
                <Coffee className="h-16 w-16 text-primary mx-auto mb-4" />
                <CardTitle className="text-2xl">Open Source & Community</CardTitle>
                <CardDescription className="text-lg">
                  PrashnaAI is built with transparency and community collaboration in mind
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  This project is open source and welcomes contributions from the community. 
                  Whether you're reporting bugs, suggesting features, or contributing code, 
                  your involvement helps make PrashnaAI better for everyone.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    variant="outline"
                    size="lg"
                    asChild
                    className="hover:bg-primary/10"
                  >
                    <a
                      href="https://github.com/soubhagya-srivastava/prashnaai"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <Github className="h-5 w-5" />
                      View Source Code
                    </a>
                  </Button>
                  <Button
                    size="lg"
                    asChild
                    className="bg-hero-gradient hover:opacity-90 text-white"
                  >
                    <a
                      href="https://github.com/soubhagya-srivastava/prashnaai"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <Star className="h-5 w-5" />
                      Star on GitHub
                      <ArrowRight className="h-5 w-5" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Try PrashnaAI now and experience the future of intelligent web content interaction
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
                Start Your Free Chat
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

export default Contact
