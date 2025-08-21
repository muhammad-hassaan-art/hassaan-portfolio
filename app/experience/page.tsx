import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin } from "lucide-react"

const experiences = [
  {
    company: "Walqalum",
    position: "Full Stack PHP Developer",
    period: "2023 - Present",
    location: "Lahore, Pakistan",
    description:
      "Leading Drupal and WordPress development projects with focus on REST API integrations, multilingual site development, and performance optimization.",
    achievements: [
      "Developed and maintained 5+ Drupal and WordPress websites with custom themes and plugins",
      "Implemented REST API integrations and decoupled architectures with React frontends",
      "Created multilingual and translation-ready websites with strong SEO optimization",
      "Performed complex Drupal migrations, version upgrades, and long-term maintenance",
      "Engineered scalable solutions improving site performance, security, and user experience",
      "Integrated Gravity Forms and Advanced Custom Fields (ACF) for dynamic WordPress workflows",
      "Delivered secure, enterprise-grade solutions for healthcare, insurance, and tech clients"
    ],
    technologies: ["Drupal 9/10", "WordPress", "PHP", "REST APIs", "React", "SEO"],
  },
  {
    company: "Kodex Tech",
    position: "Drupal Developer",
    period: "2022 - 2023",
    location: "Lahore, Pakistan",
    description:
      "Contributed to the development and maintenance of Drupal-based websites, focusing on custom modules, site migrations, and performance optimization.",
    achievements: [
      "Developed and customized Drupal modules to meet diverse client requirements",
      "Performed Drupal site migrations and major version upgrades with minimal downtime",
      "Improved website performance and security through optimization and best practices",
      "Implemented multilingual and translation-ready features for international clients",
      "Collaborated with cross-functional teams to deliver scalable and user-focused solutions",
    ],
    technologies: ["Drupal 9/10", "PHP", "JavaScript", "ReactJS", "Bootstrap", "MySQL"],
  }  
]

export default function ExperiencePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="font-playfair text-4xl font-bold mb-4">Professional Experience</h1>
            <p className="text-muted-foreground text-lg">
              My journey in web development and the impact I've made at each organization.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block"></div>

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="relative">
                  {/* Timeline dot */}
                  <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background hidden md:block"></div>

                  <Card className="md:ml-16 hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                        <div>
                          <CardTitle className="font-playfair text-xl">{exp.position}</CardTitle>
                          <CardDescription className="text-primary font-medium text-lg">{exp.company}</CardDescription>
                        </div>
                        <div className="flex flex-col sm:items-end gap-1">
                          <div className="flex items-center text-muted-foreground text-sm">
                            <Calendar className="h-4 w-4 mr-1" />
                            {exp.period}
                          </div>
                          <div className="flex items-center text-muted-foreground text-sm">
                            <MapPin className="h-4 w-4 mr-1" />
                            {exp.location}
                          </div>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent>
                      <p className="text-muted-foreground mb-4">{exp.description}</p>

                      <div className="mb-4">
                        <h4 className="font-semibold mb-2">Key Achievements:</h4>
                        <ul className="space-y-1">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="text-muted-foreground text-sm flex items-start">
                              <span className="text-primary mr-2">•</span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2">Technologies Used:</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <Badge key={tech} variant="secondary" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
