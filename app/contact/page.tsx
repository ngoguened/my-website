import { NavigationMenu } from "@/components/navigation-menu"
import { Phone, Mail } from "lucide-react"

export default function Contact() {
  return (
    <div className="min-h-screen bg-background">
      <NavigationMenu />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">Contact</h1>
        
        <div className="max-w-2xl mx-auto space-y-8">
          <section className="bg-card rounded-lg p-6 shadow-md">
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <Phone className="mr-2" />
              Phone
            </h2>
            <p className="mb-4">(+1) 9736502912</p>

          </section>

          <section className="bg-card rounded-lg p-6 shadow-md">
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <Mail className="mr-2" />
              Email
            </h2>
            <p className="mb-4">n.goguen.compagnoni@gmail.com</p>
          </section>
        </div>
      </main>
    </div>
  )
}