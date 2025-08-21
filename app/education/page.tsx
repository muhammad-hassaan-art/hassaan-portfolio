import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Award, Code } from "lucide-react"

export default function EducationPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="font-playfair text-4xl font-bold mb-4">Education</h1>
            <p className="text-muted-foreground text-lg">
              My academic background and the foundation of my technical expertise.
            </p>
          </div>

          <div className="space-y-8">
            {/* Degree */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="font-playfair text-xl">Bachelor of Science in Computer Science</CardTitle>
                    <CardDescription className="text-primary font-medium text-lg">
                      Virtual University of Pakistan
                    </CardDescription>
                    <div className="flex items-center gap-4 mt-2 text-muted-foreground">
                      <span>CGPA: 3.41</span>
                      <span>•</span>
                      <span>2018 - 2022</span>
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Comprehensive computer science education covering software engineering principles, data structures,
                  algorithms, database management, and web development technologies. Gained strong foundation in
                  programming languages and software development methodologies.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">Core Subjects:</h4>
                    <ul className="space-y-1 text-muted-foreground text-sm">
                      <li>• Data Structures & Algorithms</li>
                      <li>• Database Management Systems</li>
                      <li>• Software Engineering</li>
                      <li>• Web Development</li>
                      <li>• Object-Oriented Programming</li>
                      <li>• Computer Networks</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Programming Languages:</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">C++</Badge>
                      <Badge variant="secondary">Java</Badge>
                      <Badge variant="secondary">PHP</Badge>
                      <Badge variant="secondary">JavaScript</Badge>
                      <Badge variant="secondary">SQL</Badge>
                      <Badge variant="secondary">HTML/CSS</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Final Year Project */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Code className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="font-playfair text-xl">Final Year Project</CardTitle>
                    <CardDescription className="text-primary font-medium text-lg">
                      Online Doctor Appointment System
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Developed a comprehensive web-based healthcare management system that allows patients to book
                  appointments with doctors online, manage their medical records, and receive notifications. The system
                  includes separate dashboards for patients, doctors, and administrators.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">Key Features:</h4>
                    <ul className="space-y-1 text-muted-foreground text-sm">
                      <li>• Patient registration and profile management</li>
                      <li>• Doctor availability and scheduling system</li>
                      <li>• Appointment booking and management</li>
                      <li>• Medical records and history tracking</li>
                      <li>• Email notifications and reminders</li>
                      <li>• Admin dashboard for system management</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="secondary">PHP</Badge>
                      <Badge variant="secondary">MySQL</Badge>
                      <Badge variant="secondary">Bootstrap</Badge>
                      <Badge variant="secondary">JavaScript</Badge>
                      <Badge variant="secondary">HTML/CSS</Badge>
                    </div>

                    <div className="p-3 bg-muted/50 rounded-lg">
                      <div className="flex items-center gap-2 mb-1">
                        <Award className="h-4 w-4 text-primary" />
                        <span className="font-semibold text-sm">Project Grade</span>
                      </div>
                      <span className="text-primary font-medium">A+ (Excellent)</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Certifications */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="font-playfair text-xl">Continuous Learning</CardTitle>
                <CardDescription>
                  Committed to staying updated with the latest technologies and best practices
                </CardDescription>
              </CardHeader>

              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">Areas of Focus:</h4>
                    <ul className="space-y-1 text-muted-foreground text-sm">
                      <li>• Modern PHP frameworks and best practices</li>
                      <li>• Drupal 9/10 advanced development</li>
                      <li>• WordPress plugin and theme development</li>
                      <li>• REST API design and implementation</li>
                      <li>• Frontend frameworks (React, Vue.js)</li>
                      <li>• DevOps and deployment strategies</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Learning Resources:</h4>
                    <ul className="space-y-1 text-muted-foreground text-sm">
                      <li>• Official Drupal and WordPress documentation</li>
                      <li>• Online courses and tutorials</li>
                      <li>• Developer conferences and webinars</li>
                      <li>• Open source project contributions</li>
                      <li>• Technical blogs and community forums</li>
                      <li>• Hands-on project experimentation</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
