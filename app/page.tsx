import Link from "next/link"
import Image from "next/image"
import { ArrowRight, MapPin, Users, Sparkles, Globe, Calendar, MessageSquare } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Navigation */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Globe className="h-6 w-6 text-teal-600" />
            <span className="text-xl font-bold">MystLink</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#features" className="text-sm font-medium hover:text-teal-600 transition-colors">
              Features
            </Link>
            <Link href="#how-it-works" className="text-sm font-medium hover:text-teal-600 transition-colors">
              How It Works
            </Link>
            <Link href="#team" className="text-sm font-medium hover:text-teal-600 transition-colors">
              Our Team
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-teal-600 transition-colors">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="outline" className="hidden md:flex">
              Log in
            </Button>
            <Button className="bg-teal-600 hover:bg-teal-700">Get Started</Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-teal-50 to-white py-20 md:py-32">
          <div className="container flex flex-col items-center text-center">
            <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-10" />
            <h1 className="relative text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Explore the Unknown, <br />
              <span className="text-teal-600">Connect with the Unexpected</span>
            </h1>
            <p className="relative mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
              MystLink redefines travel experiences with AI-powered surprise itineraries and connections to locals who
              share your interests.
            </p>
            <div className="relative mt-10 flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-teal-600 hover:bg-teal-700">
                Plan Your Adventure
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </div>
            <div className="relative mt-16 w-full max-w-4xl overflow-hidden rounded-xl border shadow-xl">
              <Image
                src="/placeholder.svg?height=720&width=1280"
                width={1280}
                height={720}
                alt="MystLink App Interface"
                className="w-full"
                priority
              />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Revolutionizing Travel Experiences
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Discover how MystLink transforms the way you explore the world
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-card shadow-sm transition-all hover:shadow-md">
                <div className="rounded-full bg-teal-100 p-3 mb-4">
                  <Sparkles className="h-6 w-6 text-teal-600" />
                </div>
                <h3 className="text-xl font-bold">AI-Powered Itineraries</h3>
                <p className="mt-2 text-muted-foreground">
                  Our AI technology creates personalized surprise itineraries based on your interests, budget, and
                  travel dates.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-card shadow-sm transition-all hover:shadow-md">
                <div className="rounded-full bg-teal-100 p-3 mb-4">
                  <Users className="h-6 w-6 text-teal-600" />
                </div>
                <h3 className="text-xl font-bold">Local Friend Network</h3>
                <p className="mt-2 text-muted-foreground">
                  Connect with vetted locals who share your interests for authentic cultural immersion and insider
                  experiences.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-card shadow-sm transition-all hover:shadow-md">
                <div className="rounded-full bg-teal-100 p-3 mb-4">
                  <MapPin className="h-6 w-6 text-teal-600" />
                </div>
                <h3 className="text-xl font-bold">Authentic Experiences</h3>
                <p className="mt-2 text-muted-foreground">
                  Discover off-the-beaten-path locations and activities that typical tourists never experience.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-20 bg-slate-50">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">How MystLink Works</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Your journey to unexpected adventures in just a few simple steps
              </p>
            </div>
            <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
              <div className="relative flex flex-col items-center text-center">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-teal-600 text-white w-8 h-8 flex items-center justify-center font-bold">
                  1
                </div>
                <div className="rounded-full bg-white p-6 mb-4 shadow-md">
                  <Calendar className="h-10 w-10 text-teal-600" />
                </div>
                <h3 className="text-xl font-bold mt-4">Share Your Preferences</h3>
                <p className="mt-2 text-muted-foreground">
                  Tell us about your interests, budget, and travel dates through our intuitive app.
                </p>
              </div>
              <div className="relative flex flex-col items-center text-center">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-teal-600 text-white w-8 h-8 flex items-center justify-center font-bold">
                  2
                </div>
                <div className="rounded-full bg-white p-6 mb-4 shadow-md">
                  <Sparkles className="h-10 w-10 text-teal-600" />
                </div>
                <h3 className="text-xl font-bold mt-4">Receive Your Itinerary</h3>
                <p className="mt-2 text-muted-foreground">
                  Our AI generates a personalized surprise itinerary tailored specifically to you.
                </p>
              </div>
              <div className="relative flex flex-col items-center text-center">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-teal-600 text-white w-8 h-8 flex items-center justify-center font-bold">
                  3
                </div>
                <div className="rounded-full bg-white p-6 mb-4 shadow-md">
                  <MessageSquare className="h-10 w-10 text-teal-600" />
                </div>
                <h3 className="text-xl font-bold mt-4">Connect With Locals</h3>
                <p className="mt-2 text-muted-foreground">
                  Meet your matched local friend who will enhance your experience with insider knowledge.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section id="team" className="py-20">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Meet Our Team</h2>
              <p className="mt-4 text-lg text-muted-foreground">The passionate minds behind MystLink</p>
            </div>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
              {[
                { name: "Borja Martínez", role: "CEO", image: "/placeholder.svg?height=300&width=300" },
                { name: "Bianca Calero", role: "COO", image: "/placeholder.svg?height=300&width=300" },
                { name: "Diego Sainz-Pardo", role: "CTO", image: "/placeholder.svg?height=300&width=300" },
                {
                  name: "Danna Carrillo",
                  role: "Customer Support Director",
                  image: "/placeholder.svg?height=300&width=300",
                },
                {
                  name: "Hatim el Idrissi",
                  role: "Marketing Director",
                  image: "/placeholder.svg?height=300&width=300",
                },
                { name: "Pablo Pérez", role: "Finance Manager", image: "/placeholder.svg?height=300&width=300" },
              ].map((member, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                  <div className="relative h-32 w-32 overflow-hidden rounded-full">
                    <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                  </div>
                  <h3 className="mt-4 text-lg font-bold">{member.name}</h3>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-teal-50">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">What Travelers Say</h2>
              <p className="mt-4 text-lg text-muted-foreground">Hear from adventurers who have experienced MystLink</p>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {[
                {
                  quote:
                    "MystLink completely transformed my trip to Spain. The local friend they matched me with showed me places I would have never found on my own!",
                  author: "Sarah J., Digital Nomad",
                },
                {
                  quote:
                    "As someone who hates planning trips, MystLink was a game-changer. The AI itinerary was perfectly tailored to my interests and budget.",
                  author: "Miguel R., Adventure Seeker",
                },
                {
                  quote:
                    "Our family vacation was unforgettable thanks to MystLink. The kids loved the surprise element, and we loved the authentic local experiences.",
                  author: "The Williams Family",
                },
              ].map((testimonial, index) => (
                <div key={index} className="flex flex-col p-6 rounded-lg border bg-white shadow-sm">
                  <div className="flex-1">
                    <p className="italic text-muted-foreground">"{testimonial.quote}"</p>
                  </div>
                  <p className="mt-4 font-medium">{testimonial.author}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="py-20 bg-teal-600 text-white">
          <div className="container">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Ready for Your Next Adventure?</h2>
              <p className="mt-4 text-lg opacity-90">
                Join MystLink today and discover a new way to travel. Sign up for early access to our platform.
              </p>
              <form className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="rounded-md px-4 py-2 text-black w-full sm:w-auto sm:flex-1 max-w-md"
                  required
                />
                <Button className="bg-white text-teal-600 hover:bg-teal-50">Get Early Access</Button>
              </form>
              <p className="mt-4 text-sm opacity-75">
                We'll notify you when we launch in your area. No spam, we promise!
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-12 md:py-16">
        <div className="container flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-6 md:mb-0">
            <Globe className="h-6 w-6 text-teal-600" />
            <span className="text-xl font-bold">MystLink</span>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <p className="text-sm text-muted-foreground">© 2025 MystLink. All rights reserved.</p>
            <div className="flex gap-4">
              <Link href="#" className="text-sm text-muted-foreground hover:text-teal-600">
                Privacy Policy
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-teal-600">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
