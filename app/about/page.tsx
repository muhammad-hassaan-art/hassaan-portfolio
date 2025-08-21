import { Navigation } from "@/components/navigation"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const skills = [
  "Drupal 9/10",
  "WordPress",
  "PHP",
  "HTML",
  "CSS",
  "JavaScript",
  "jQuery",
  "Bootstrap",
  "ReactJS",
  "REST APIs",
  "MySQL",
  "Git",
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-playfair text-4xl font-bold text-center mb-12">About Me</h1>

          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-6">
              <Card className="p-6">
                <h2 className="font-playfair text-2xl font-semibold mb-4">Professional Profile</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  I am an innovative and detail-oriented Full Stack PHP Developer with a passion for creating scalable
                  web solutions that enhance user experience. With over 3 years of experience in Drupal and WordPress
                  development, I specialize in building robust, maintainable applications that solve real-world
                  problems.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  My expertise lies in developing custom themes, plugins, and modules while integrating modern frontend
                  technologies with powerful backend systems. I have a proven track record of delivering high-quality
                  solutions that improve performance, user engagement, and business outcomes.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  I am committed to staying current with the latest web technologies and best practices, ensuring that
                  every project I work on leverages the most effective tools and methodologies available.
                </p>
              </Card>

              <Card className="p-6">
                <h2 className="font-playfair text-2xl font-semibold mb-4">What I Do</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-primary mb-2">Drupal Development</h3>
                    <p className="text-muted-foreground text-sm">
                      Custom module development, theme creation, site building, and API integrations
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-2">WordPress Development</h3>
                    <p className="text-muted-foreground text-sm">
                      Plugin development, theme customization, and performance optimization
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-2">Frontend Development</h3>
                    <p className="text-muted-foreground text-sm">
                      Responsive design, JavaScript applications, and modern UI/UX implementation
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-2">API Development</h3>
                    <p className="text-muted-foreground text-sm">
                      RESTful API design, third-party integrations, and data management
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="p-6">
                <h2 className="font-playfair text-2xl font-semibold mb-4">Tech Stack</h2>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>

              <Card className="p-6">
                <h2 className="font-playfair text-2xl font-semibold mb-4">Core Values</h2>
                <div className="space-y-3">
                  <div>
                    <h3 className="font-semibold text-primary">Innovation</h3>
                    <p className="text-muted-foreground text-sm">Always exploring new technologies and approaches</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary">Quality</h3>
                    <p className="text-muted-foreground text-sm">Delivering clean, maintainable, and scalable code</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary">Collaboration</h3>
                    <p className="text-muted-foreground text-sm">Working closely with teams to achieve common goals</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
