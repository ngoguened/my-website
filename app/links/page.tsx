import { NavigationMenu } from "@/components/navigation-menu"
import { Github, Linkedin, FileDown } from "lucide-react"
import Link from "next/link"

export default function Links() {
  return (
    <div className="min-h-screen bg-background">
      <NavigationMenu />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">Links</h1>
        
        <div className="max-w-2xl mx-auto space-y-8">
          <section className="bg-card rounded-lg p-6 shadow-md">
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <Github className="mr-2" />
              GitHub
            </h2>
            <p className="mb-4">Check out my projects and contributions on GitHub:</p>
            <Link 
              href="https://github.com/ngoguened" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              github.com/ngoguened
            </Link>
          </section>

          <section className="bg-card rounded-lg p-6 shadow-md">
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <Linkedin className="mr-2" />
              LinkedIn
            </h2>
            <p className="mb-4">Connect with me on LinkedIn:</p>
            <Link 
              href="https://www.linkedin.com/in/nicholas-goguen-compagnoni" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              linkedin.com/in/nicholas-goguen-compagnoni
            </Link>
          </section>

          <section className="bg-card rounded-lg p-6 shadow-md">
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <FileDown className="mr-2" />
              Resume
            </h2>
            <a 
              href="Nicholas_Goguen-Compagnoni_Resume.pdf"
              download="Nicholas_Goguen-Compagnoni_Resume.pdf"
              className="inline-flex items-center px-4 py-2 bg-primary text-primary-foreground rounded hover:bg-primary/90 transition-colors"
            >
              Download Resume
              <FileDown className="ml-2 h-4 w-4" />
            </a>
          </section>
        </div>
      </main>
    </div>
  )
}
