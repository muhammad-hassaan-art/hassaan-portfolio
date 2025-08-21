import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    title: "TrueWebsite",
    description:
      "Built comprehensive REST APIs integrated with React frontend for seamless data management and user experience.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-08-20%20at%2018.09.16-U8zrWO5Y2eEG0IJ4iNyFfbMLbKXoVi.png",
    technologies: ["Drupal", "REST API", "React", "PHP"],
    liveUrl: "https://truerefrigeration.co.uk/",
    category: "Drupal",
  },
  {
    title: "Mobile Health Map",
    description:
      "Developed custom WordPress plugins with Gravity Forms and Advanced Custom Fields integration for healthcare mapping.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-08-20%20at%2018.09.41-6RB6ksALCkQteQpgkCbH8VnD1feLH7.png",
    technologies: ["WordPress", "Gravity Forms", "ACF", "PHP"],
    liveUrl: "https://www.mobilehealthmap.org/",
    category: "WordPress",
  },
  {
    title: "Securance",
    description:
      "Created custom theme and modules for multilingual insurance website with advanced security features.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-08-20%20at%2018.10.11.png-YIN6xDxnHElDJKyfGWJn1usknUh8xI.jpeg",
    technologies: ["Drupal", "Multilingual", "Custom Modules", "Security"],
    liveUrl: "https://securance.com/",
    category: "Drupal",
  },
  {
    title: "Shumailas London",
    description:
      "Implemented UI fixes, SEO optimization, and custom plugin development for fashion e-commerce platform.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-08-20%20at%2018.10.36.png-fMrcnIWBGJSsHB6e64pOAqQGwI7JXU.jpeg",
    technologies: ["WordPress", "SEO", "Custom Plugins", "E-commerce"],
    liveUrl: "https://www.shumailas.com/",
    category: "WordPress",
  },
  {
    title: "SOC & Catcher Sites",
    description:
      "Managed complex Drupal site migrations, version upgrades, and ongoing maintenance for security operations.",
    image: "/security-operations-center-dashboard.png",
    technologies: ["Drupal", "Migration", "Maintenance", "Security"],
    liveUrl: "https://soc2.co.uk/",
    category: "Drupal",
  },
  {
    title: "IPTECHVIEW",
    description:
      "Developed custom Drupal themes and implemented decoupled architecture for enhanced performance.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-08-20%20at%2018.11.08.png-gN4pX9r4NJyLWsjBE1VxSDgZcbVyED.jpeg",
    technologies: ["Drupal", "Decoupled", "Custom Themes", "Performance"],
    liveUrl: "https://www.iptechview.com/",
    category: "Drupal",
  },
  {
    title: "WALQALUM",
    description:
      "Developed custom Drupal themes and implemented decoupled architecture for enhanced performance.",
    image:
      "/image.png",
    technologies: ["Drupal", "Decoupled", "Custom Themes", "Performance", "Multilingual"],
    liveUrl: "https://walqalum.com/",
    category: "Drupal",
  },
]

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="font-playfair text-4xl font-bold mb-4">My Projects</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A showcase of my work in Drupal and WordPress development, featuring custom
              solutions and innovative integrations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                <div className="relative overflow-hidden shrink-0">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary">{project.category}</Badge>
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="font-playfair">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>

                <CardContent className="flex flex-col justify-between h-full">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button size="sm" className="w-full">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
