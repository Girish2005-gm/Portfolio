"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    logo: "/neuronote-logo.svg",
    title: "Neuronote – Second Brain App",
    description:
      "A full-stack productivity app to manage notes, videos, tweets, links, and documents using a Notion-style interface and JWT-secured public sharing.",
    image: "/neuronote.png",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "TypeScript"],
    demoUrl: "https://neuronote-all-in-one-productivity-a.vercel.app/",
    githubUrl: "https://github.com/Girish2005-gm/Neuronote-All-in-one-productivity-app",
    features: [
      "Notion-style dashboard with embedded content previews",
      "JWT-based auth and dynamic public sharing routes",
      "Responsive and minimal design layout",
    ],
  },
  {
    logo: "/kanbanflow-logo.svg",
    title: "KanbanFlow – Task Manager",
    description:
      "A Kanban-style productivity app to manage tasks with drag-and-drop boards, real-time updates, and Firebase-backed authentication.",
    image: "/kanbanflow.png",
    tags: ["React.js", "Tailwind CSS", "Firebase", "React Router", "@hello-pangea/dnd"],
    demoUrl: "https://kanban-tau-seven.vercel.app/",
    githubUrl: "https://github.com/Girish2005-gm/Kanban",
    features: [
      "Drag-and-drop lists and tasks with quick view",
      "Search and filter by tags or task names",
      "Firebase Auth and Firestore integration for real-time sync",
    ],
  },
  {
    logo: "/foodapp-logo.svg",
    title: "Food App – Order & Cart",
    description:
      "A modern food ordering app with Redux-powered cart, category filtering, and responsive UI built with Tailwind.",
    image: "/foodapp.png",
    tags: ["React.js", "Tailwind CSS", "Redux Toolkit", "Context API"],
    demoUrl: "https://girish-food-app.netlify.app/",
    githubUrl: "https://github.com/Girish2005-gm/Food-App",
    features: [
      "Sliding cart with add/remove functionality and total calculation",
      "Category filter and search features",
      "Used Redux Toolkit and Context API for state management",
    ],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-10">Projects</h2>

        <div className="grid gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="grid md:grid-cols-2 gap-6 border rounded-xl overflow-hidden group"
            >
              <div className="overflow-hidden relative h-[300px] md:h-full border-b md:border-b-0 md:border-r">
                <div className="absolute inset-0 overflow-y-auto scrollbar-hide">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={800}
                    height={1200}
                    className="w-full object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className="text-muted-foreground">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <Badge key={idx} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold">Key Features:</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="text-sm">
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-3 pt-2">
                  <Button size="sm">
                    <Link
                      href={project.demoUrl}
                      className="flex items-center"
                      target="_blank"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" /> Live
                    </Link>
                  </Button>
                  {
                    project.githubUrl && (
                      <Button size="sm" variant="outline">
                        <Link
                          href={project.githubUrl}
                          className="flex items-center"
                          target="_blank"
                        >
                          <Github className="mr-2 h-4 w-4" /> Code
                        </Link>
                      </Button>
                    )
                  }
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}