import { Github, Linkedin, Mail, Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-secondary/40 border-t border-border/40">
      <div className="container mx-auto px-4 lg:px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-hero-gradient rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">P</span>
              </div>
              <span className="text-xl font-bold gradient-text">PrashnaAI</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Transform any website into an intelligent conversation. 
              Get instant insights powered by advanced AI.
            </p>
          </div>

          {/* Product */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Product</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/features" className="text-muted-foreground hover:text-primary smooth-transition">Features</a></li>
              <li><a href="https://prashna-web.onrender.com/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary smooth-transition">Try Now</a></li>
              <li><a href="/about" className="text-muted-foreground hover:text-primary smooth-transition">About</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="https://github.com/soubhagya-srivastava/prashnaai" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary smooth-transition">Documentation</a></li>
              <li><a href="https://github.com/soubhagya-srivastava/prashnaai/issues" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary smooth-transition">Support</a></li>
              <li><a href="/contact" className="text-muted-foreground hover:text-primary smooth-transition">Contact</a></li>
            </ul>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Connect</h3>
            <div className="flex space-x-3">
              <a
                href="https://github.com/soubhagya-srivastava/prashnaai"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-secondary hover:bg-primary/10 rounded-md flex items-center justify-center smooth-transition group"
              >
                <Github className="h-4 w-4 text-muted-foreground group-hover:text-primary" />
              </a>
              <a
                href="mailto:soubhagyasrivastava240@gmail.com"
                className="w-9 h-9 bg-secondary hover:bg-primary/10 rounded-md flex items-center justify-center smooth-transition group"
              >
                <Mail className="h-4 w-4 text-muted-foreground group-hover:text-primary" />
              </a>
              <a
                href="https://linkedin.com/in/soubhagya-srivastava"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-secondary hover:bg-primary/10 rounded-md flex items-center justify-center smooth-transition group"
              >
                <Linkedin className="h-4 w-4 text-muted-foreground group-hover:text-primary" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border/40 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 PrashnaAI. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Made with <Heart className="h-4 w-4 text-red-500" /> by Soubhagya Srivastava
          </p>
        </div>
      </div>
    </footer>
  )
}