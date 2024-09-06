import { Button } from "@/components/ui/button";
import { NavigationMenu } from "@/components/navigation-menu";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <NavigationMenu />
      <main className="container mx-auto px-4 py-8">
        <section className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-2">Nicholas Goguen-Compagnoni</h1>
          <p className="text-xl text-muted-foreground">Recent biotechnology and computer science graduate</p>
        </section>

        <section className="max-w-2xl mx-auto">
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
    </div>
  )
}
