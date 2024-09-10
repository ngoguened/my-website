import { Button } from "@/components/ui/button"
import { NavigationMenu } from "@/components/navigation-menu"
import { Github, Linkedin, FileDown, Phone, Mail } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <NavigationMenu />
      <div className="container mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
        <main className="lg:w-3/4">
          <section className="mb-12 text-center lg:text-left">
          <h1 className="text-4xl font-bold mb-2">Nicholas Goguen-Compagnoni</h1>
            <p className="text-xl text-muted-foreground">Recent biotechnology and computer science graduate</p>
          </section>

          <section className="max-w-2xl">
            <h2 className="text-2xl font-semibold mb-4">About Me</h2>
            <p className="mb-4">
          I am a recent graduate from the University of Edinburgh, holding a BSc in Biotechnology 
          and Computer Science. My passion lies in solving real-world problems through software 
          engineering. 
          </p>
          <p className="mb-4">
          I love learning new things, in fact, I made this website to learn about React, Next.js
          and shadcn/ui. Outside of academics, I’m an avid foil fencer and served as Vice President 
          of my varsity team, helping to build a strong, engaged community.
          </p>
          <p>
            Feel free to get in touch if you're interested in anything you see here!
          </p>
          </section>
        </main>

        <aside className="lg:w-1/4 space-y-6">
        <div className="bg-card rounded-lg p-6 shadow-md">
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
          </div>

          <div className="bg-card rounded-lg p-6 shadow-md">
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
          </div>

          <div className="bg-card rounded-lg p-6 shadow-md">
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
          </div>
        </aside>
      </div>

      <footer className="bg-card shadow-md mt-8">
        <div className="container mx-auto px-4 py-6 flex flex-col sm:flex-row justify-between items-center">
          <div className="flex items-center mb-4 sm:mb-0">
            <Phone className="mr-2" />
            <a href="tel:(+1) 9736502912" className="text-primary hover:underline">
              (+1) 9736502912
            </a>
          </div>
          <div className="flex items-center">
            <Mail className="mr-2" />
            <a href="mailto:n.goguen.compagnoni@gmail.com" className="text-primary hover:underline">
            n.goguen.compagnoni@gmail.com
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}