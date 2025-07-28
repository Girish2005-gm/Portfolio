"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"

const experiences = [
  {
    title: " ReactJS Developer Intern",
    company: "Celebal Technologies",
    period: "May 2025– July 2025",
    responsibilities: [
      "Built interactive and mobile-friendly UI components using ReactJS and Tailwind CSS for real-time dashboards and internal tools",
      "Integrated RESTful APIs to fetch and display dynamic data, enhancing user interaction and decision-making.",
      "Contributed to features, resolved UI bugs, and improved code quality through regular development cycles."
    ],
    skills: [
      "React",
      "Redux Toolkit",
      "Firebase",
      "FastAPI",
      "TypeScript",
      "Tailwind CSS",
      "UI/UX Design"
    ],
  },
  {
    title: " Frontend Development Intern",
    company: "Durbhasi Gurukulam",
    period: " June 2024– July 2024",
    responsibilities: [
      "Developed 5+ responsive pages using ReactJS and Tailwind CSS for the organization’s official website.",
      "Build and deployed scalable web application for various client ensuring optimal performance & security.",
      " Implemented core pages like Login, About Us Terms & Conditions, Refund Policy, and Forgot Password.",
      " Contributed to 2 live client projects and collaborated with 3 developers to enhance overall UI/UX and performance.",

    ],
    skills: ["HTML", "CSS", "Javascript", "React", "Git", "Github"],
  },
  // {
  //   title: "Web Developer",
  //   company: "Ministry of Electronics and Information Technology",
  //   period: "Mar 2024 – Jun 2024",
  //   responsibilities: [
  //     "Developed a CMS dashboard for eDeskshaam, enhancing UI/UX and improving user interaction",
  //     "Designed and implemented responsive 'Important Links' and 'Events' pages using React.js",
  //   ],
  //   skills: ["React", "JavaScript", "UI/UX", "Responsive Design"],
  // },
  // {
  //   title: "Web Developer",
  //   company: "Ministry of Electronics and Information Technology",
  //   period: "Mar 2023 – Dec 2023",
  //   responsibilities: [
  //     "Created four interactive educational games (Identify Fruits, Animals, Vehicles, Body Parts)",
  //     "Developed user-friendly homepage for educational games and collaborated with UX designers",
  //     "Worked closely with back-end developers to ensure seamless integration and cohesive user experience",
  //   ],
  //   skills: ["React", "JavaScript", "UI/UX", "Responsive Design"],
  // },
]

export default function Experience() {
  return (
    <section id="experience" className="py-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-10">Experience</h2>

        <div className="space-y-10">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="space-y-4"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                <div>
                  <h3 className="text-xl font-semibold">{exp.title}</h3>
                  <p className="text-muted-foreground">{exp.company}</p>
                </div>
                <p className="text-sm text-muted-foreground">{exp.period}</p>
              </div>

              <ul className="list-disc pl-5 space-y-2">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx} className="text-sm">
                    {resp}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill, idx) => (
                  <Badge key={idx} variant="outline">
                    {skill}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}