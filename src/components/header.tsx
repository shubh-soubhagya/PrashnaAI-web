import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "./theme-toggle"
import { Menu, X, Github, Star } from "lucide-react"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navigationItems = [
    { name: "Features", href: "#features" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <header className="fixed top-0 w-full z-50 glass-surface border-b border-border/40">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-hero-gradient rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">P</span>
            </div>
            <span className="text-xl font-bold gradient-text">PrashnaAI</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-muted-foreground hover:text-primary smooth-transition"
              >
                {item.name}
              </a>
            ))}
            <Button
              variant="outline"
              size="sm"
              asChild
              className="hover:bg-primary hover:text-primary-foreground"
            >
              <a
                href="https://github.com/prashnaai/prashnaai"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Star className="h-4 w-4" />
                Rate us on GitHub
              </a>
            </Button>
            <ThemeToggle />
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border/40">
            <nav className="flex flex-col space-y-4">
              {navigationItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-muted-foreground hover:text-primary smooth-transition"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <Button
                variant="outline"
                size="sm"
                asChild
                className="self-start"
              >
                <a
                  href="https://github.com/prashnaai/prashnaai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Star className="h-4 w-4" />
                  Rate us on GitHub
                </a>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}