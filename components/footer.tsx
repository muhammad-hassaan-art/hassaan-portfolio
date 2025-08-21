"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Phone, MapPin, Code, Database, Globe } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2 animate-slide-in-left">
            <h3 className="font-playfair font-bold text-2xl text-foreground mb-4">
              Hassaan<span className="text-primary">.</span>
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md leading-relaxed">
              Full Stack PHP Developer specializing in Drupal & WordPress development. Creating innovative web solutions
              with modern technologies and clean code.
            </p>
            <div className="flex items-center space-x-4 mb-6">
              <div className="flex items-center space-x-2 text-primary">
                <Code className="h-4 w-4" />
                <span className="text-sm font-medium">PHP & JavaScript</span>
              </div>
              <div className="flex items-center space-x-2 text-primary">
                <Database className="h-4 w-4" />
                <span className="text-sm font-medium">MySQL</span>
              </div>
              <div className="flex items-center space-x-2 text-primary">
                <Globe className="h-4 w-4" />
                <span className="text-sm font-medium">REST APIs</span>
              </div>
            </div>
            <div className="flex space-x-3">
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="hover:bg-primary/10 hover:text-primary transition-all duration-300"
              >
                <Link href="https://github.com/muhammad-hassaan-art" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </Link>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="hover:bg-primary/10 hover:text-primary transition-all duration-300"
              >
                <Link href="https://www.linkedin.com/in/muhammad-hassaan-abrar/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </Link>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="hover:bg-primary/10 hover:text-primary transition-all duration-300"
              >
                <Link href="mailto:muhammadhassaanabrar1@gmail.com">
                  <Mail className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-slide-up">
            <h4 className="font-semibold text-foreground mb-6 text-lg">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-muted-foreground hover:text-primary transition-all duration-300 flex items-center group"
                >
                  <span className="w-2 h-2 bg-primary rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  About Me
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-muted-foreground hover:text-primary transition-all duration-300 flex items-center group"
                >
                  <span className="w-2 h-2 bg-primary rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="/experience"
                  className="text-muted-foreground hover:text-primary transition-all duration-300 flex items-center group"
                >
                  <span className="w-2 h-2 bg-primary rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  Experience
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-muted-foreground hover:text-primary transition-all duration-300 flex items-center group"
                >
                  <span className="w-2 h-2 bg-primary rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="animate-slide-in-right">
            <h4 className="font-semibold text-foreground mb-6 text-lg">Let's Talk</h4>
            <div className="space-y-4">
              <div className="flex items-center text-muted-foreground hover:text-primary transition-colors duration-300 cursor-pointer">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mr-3 shrink-0">
                  <Mail className="h-4 w-4 text-primary" />
                </div>
                <span className="text-sm break-all">muhammadhassaanabrar1@gmail.com</span>
              </div>
              <div className="flex items-center text-muted-foreground hover:text-primary transition-colors duration-300 cursor-pointer">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mr-3">
                  <Phone className="h-4 w-4 text-primary" />
                </div>
                <span className="text-sm">+92 329 6599434</span>
              </div>
              <div className="flex items-center text-muted-foreground hover:text-primary transition-colors duration-300 cursor-pointer">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mr-3">
                  <MapPin className="h-4 w-4 text-primary" />
                </div>
                <span className="text-sm">Lahore, Pakistan</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Muhammad Hassaan Abrar. All rights reserved. Built with ❤️ and lots of ☕
          </p>
        </div>
      </div>
    </footer>
  )
}
