import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, ExternalLink, Download } from "lucide-react"
import Link from "next/link"
import { AnimatedName } from "@/components/animated-name"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section - Fixed spacing and added Three.js animation */}
      <section className="px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Text content */}
            <div className="animate-slide-in-left">
              <div className="mb-6">
                <span className="text-primary font-medium text-lg">Hello!</span>
              </div>
              <div className="mb-6">
                <AnimatedName />
              </div>
              <p className="text-xl sm:text-2xl text-muted-foreground font-medium mb-8 leading-relaxed">
                Innovative Full Stack PHP Developer | Drupal & WordPress Specialist
              </p>
              <p className="text-lg text-muted-foreground mb-10 max-w-lg leading-relaxed">
                Passionate about creating scalable solutions and improving user experiences with innovative,
                detail-oriented development approaches.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Button
                  size="lg"
                  className="group bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-medium"
                >
                  <Link href="/projects" className="flex items-center">
                    View Projects
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  className="group bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-medium"
                >
                  <Link href="/contact" className="flex items-center">
                    Contact Me
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>

              {/* Contact Info */}
              <div className="space-y-4">
                <h3 className="font-playfair text-2xl font-bold text-foreground mb-4">
                  Any type of question & Discussion.
                </h3>
                <p className="text-muted-foreground mb-4">Let's Talk</p>
                <div className="space-y-2">
                  <p className="text-primary font-medium text-lg">muhammadhassaanabrar1@gmail.com</p>
                  <p className="text-muted-foreground">Phone: +92 329 6599 434</p>
                  <p className="text-muted-foreground">LinkedIn: linkedin.com/in/muhammad-hassaan-abrar</p>
                </div>
              </div>
            </div>

            {/* Right side - Profile and Stats */}
            <div className="animate-slide-in-right">
              <div className="relative">

                {/* Stats Cards */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <Card className="p-6 bg-primary text-primary-foreground hover:scale-105 transition-transform duration-300">
                    <div className="text-center">
                      <div className="text-2xl font-bold mb-1">Drupal</div>
                      <div className="text-2xl font-bold mb-2">Development</div>
                      <div className="text-sm opacity-90 mb-2">Custom modules, themes & REST APIs</div>
                      <div className="text-lg font-semibold">5+ projects</div>
                    </div>
                  </Card>
                  <Card className="p-6 hover:scale-105 transition-transform duration-300">
                    <div className="text-center">
                      <div className="text-2xl font-bold mb-1 text-foreground">WordPress</div>
                      <div className="text-2xl font-bold mb-2 text-foreground">Solutions</div>
                      <div className="text-sm text-muted-foreground mb-2">Custom plugins & theme development</div>
                      <div className="text-lg font-semibold text-foreground">4+ projects</div>
                    </div>
                  </Card>
                  <Card className="p-6 hover:scale-105 transition-transform duration-300">
                    <div className="text-center">
                      <div className="text-2xl font-bold mb-1 text-foreground">Full Stack</div>
                      <div className="text-2xl font-bold mb-2 text-foreground">PHP</div>
                      <div className="text-sm text-muted-foreground mb-2">Complete web application development</div>
                      <div className="text-lg font-semibold text-foreground">5+ projects</div>
                    </div>
                  </Card>
                  <Card className="p-6 hover:scale-105 transition-transform duration-300">
                    <div className="text-center">
                      <div className="text-2xl font-bold mb-1 text-foreground">API</div>
                      <div className="text-2xl font-bold mb-2 text-foreground">Integration</div>
                      <div className="text-sm text-muted-foreground mb-2">REST APIs & third-party integrations</div>
                      <div className="text-lg font-semibold text-foreground">2+ projects</div>
                    </div>
                  </Card>
                </div>

                {/* Experience Card */}
                <Card className="p-6 mb-8 hover:scale-105 transition-transform duration-300">
                  <div className="text-right">
                    <div className="text-3xl font-bold text-foreground mb-2">3+ Years Of</div>
                    <div className="text-3xl font-bold text-foreground mb-4">Experience</div>
                    <div className="text-sm text-muted-foreground mb-4">
                      Specialized in Drupal & WordPress development with expertise in creating scalable, user-focused
                      web solutions.
                    </div>
                  </div>
                </Card>

                {/* Technology Logos */}
                <div className="flex justify-center space-x-8 opacity-60 mb-8">
                  <div className="text-2xl font-bold text-muted-foreground">PHP</div>
                  <div className="text-2xl font-bold text-muted-foreground">Drupal</div>
                  <div className="text-2xl font-bold text-muted-foreground">WP</div>
                  <div className="text-2xl font-bold text-muted-foreground">JS</div>
                  <div className="text-2xl font-bold text-muted-foreground">React</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-in-left">
              <h2 className="font-playfair text-4xl font-bold mb-8 text-foreground">About Me</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                I am an innovative Full Stack PHP Developer specializing in Drupal and WordPress development. With a
                detail-oriented approach and passion for scalable solutions, I focus on improving user experiences
                through modern web technologies.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center">
                  <span className="text-foreground font-medium">Name</span>
                  <span className="text-muted-foreground">Muhammad Hassaan Abrar</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-foreground font-medium">Email</span>
                  <span className="text-muted-foreground">muhammadhassaanabrar1@gmail.com</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-foreground font-medium">Education</span>
                  <span className="text-muted-foreground">BS Computer Science</span>
                </div>
              </div>
              <a href="/Muhammad_Hassaan_Abrar_CV.pdf" download>
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg">
                  <Download className="mr-2 h-4 w-4" />
                  Download CV
                </Button>
              </a>
            </div>

            <div className="animate-slide-in-right">
              {/* Skills Progress Bars */}
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-foreground font-medium">Drupal Development</span>
                    <span className="text-primary font-medium">95%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: "95%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-foreground font-medium">WordPress Development</span>
                    <span className="text-primary font-medium">90%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: "90%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-foreground font-medium">PHP & REST APIs</span>
                    <span className="text-primary font-medium">88%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: "88%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-foreground font-medium">React & JavaScript</span>
                    <span className="text-primary font-medium">85%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: "85%" }}></div>
                  </div>
                </div>
              </div>

              {/* Work Categories */}
              <div className="mt-12">
                <div className="flex flex-wrap gap-4">
                  <Button
                    variant="ghost"
                    className="bg-card hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  >
                    All
                  </Button>
                  <Button
                    variant="ghost"
                    className="hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  >
                    Drupal
                  </Button>
                  <Button
                    variant="ghost"
                    className="hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  >
                    WordPress
                  </Button>
                  <Button
                    variant="ghost"
                    className="hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  >
                    PHP APIs
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10+ Years Experience Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h2 className="font-playfair text-5xl font-bold text-foreground mb-8">3+ Years Of</h2>
          <h2 className="font-playfair text-5xl font-bold text-foreground mb-8">Experience</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Specialized in Drupal & WordPress development with expertise in creating scalable, user-focused web
            solutions.
          </p>
        </div>
      </section>

      {/* Latest Works Section - Updated with real project images */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl font-bold mb-4 text-foreground">Latest Works</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Here are some of my recent projects showcasing expertise in Drupal, WordPress, and full-stack PHP
              development
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Securance */}
            <Card className="overflow-hidden hover:scale-105 transition-all duration-300 hover:shadow-xl">
              <div className="aspect-video overflow-hidden">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-08-20%20at%2018.10.11.png-YIN6xDxnHElDJKyfGWJn1usknUh8xI.jpeg"
                  alt="Securance - Cybersecurity Platform"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-playfair text-xl font-semibold mb-2 text-foreground">Securance</h3>
                <p className="text-muted-foreground mb-4">
                  Cybersecurity platform with custom Drupal modules and multilingual support
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-primary font-medium">Drupal • Multilingual • Custom Modules</span>
                  <a
                    href="https://securance.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </Card>

            {/* Mobile Health Map */}
            {/* <Card className="overflow-hidden hover:scale-105 transition-all duration-300 hover:shadow-xl">
              <div className="aspect-video overflow-hidden">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-08-20%20at%2018.09.41-6RB6ksALCkQteQpgkCbH8VnD1feLH7.png"
                  alt="Mobile Health Map - Healthcare Platform"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-playfair text-xl font-semibold mb-2 text-foreground">Mobile Health Map</h3>
                <p className="text-muted-foreground mb-4">
                  Healthcare platform with custom WordPress plugins and advanced mapping features
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-primary font-medium">WordPress • PHP • Custom Plugins</span>
                  <a
                    href="https://www.mobilehealthmap.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </Card> */}

            {/* True Refrigeration */}
            <Card className="overflow-hidden hover:scale-105 transition-all duration-300 hover:shadow-xl">
              <div className="aspect-video overflow-hidden">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-08-20%20at%2018.09.16-U8zrWO5Y2eEG0IJ4iNyFfbMLbKXoVi.png"
                  alt="True Refrigeration - Industrial Website"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-playfair text-xl font-semibold mb-2 text-foreground">True Refrigeration</h3>
                <p className="text-muted-foreground mb-4">
                  Industrial refrigeration website with custom WordPress theme and product catalog
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-primary font-medium">WordPress • Custom Theme • E-commerce</span>
                  <a
                    href="https://truerefrigeration.co.uk/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </Card>

            {/* IPTechView */}
            <Card className="overflow-hidden hover:scale-105 transition-all duration-300 hover:shadow-xl">
              <div className="aspect-video overflow-hidden">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-08-20%20at%2018.11.08.png-gN4pX9r4NJyLWsjBE1VxSDgZcbVyED.jpeg"
                  alt="IPTechView - AI Surveillance Platform"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-playfair text-xl font-semibold mb-2 text-foreground">IPTechView</h3>
                <p className="text-muted-foreground mb-4">
                  AI-powered cloud video surveillance platform with advanced monitoring features
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-primary font-medium">Drupal • AI Integration • Cloud Platform</span>
                  <a
                    href="https://www.iptechview.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </Card>

            {/* Shumaila’s Clinics */}
            <Card className="overflow-hidden hover:scale-105 transition-all duration-300 hover:shadow-xl">
              <div className="aspect-video overflow-hidden">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-08-20%20at%2018.10.36.png-fMrcnIWBGJSsHB6e64pOAqQGwI7JXU.jpeg"
                  alt="Shumaila's Clinics - Medical Website"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-playfair text-xl font-semibold mb-2 text-foreground">Shumaila's Clinics</h3>
                <p className="text-muted-foreground mb-4">
                  Medical clinic website with appointment booking and patient management system
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-primary font-medium">WordPress • Booking System • Medical</span>
                  <a
                    href="https://www.shumailas.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </Card>

            {/* SOC2 (Assumed link for ISAE 3402 / SOC2-related project) */}
            <Card className="overflow-hidden hover:scale-105 transition-all duration-300 hover:shadow-xl">
              <div className="aspect-video overflow-hidden">
                <img
                  src="/security-operations-center-dashboard.png" // replace with actual if available
                  alt="SOC2 Platform - Compliance Website"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-playfair text-xl font-semibold mb-2 text-foreground">SOC2 Platform</h3>
                <p className="text-muted-foreground mb-4">
                  Compliance platform supporting ISAE 3402, BSI C5, and SOC2 certifications
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-primary font-medium">Compliance • ISAE 3402 • SOC2 • BSI C5</span>
                  <a
                    href="https://soc2.co.uk/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </Card>
          </div>
          <div className="text-center mt-12">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="hover:bg-primary hover:text-primary-foreground border-primary text-primary bg-transparent"
            >
              <Link href="/projects">View All Projects</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h2 className="font-playfair text-4xl font-bold mb-6 text-foreground">Ready to Start Your Project?</h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            Let's discuss how I can help bring your ideas to life with modern web technologies and creative solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="group bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3"
            >
              <Link href="/contact">
                Get In Touch
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="hover:bg-primary hover:text-primary-foreground border-primary text-primary px-8 py-3 bg-transparent"
            >
              <Link href="/projects">View My Work</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
