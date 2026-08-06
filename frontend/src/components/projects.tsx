import { ExternalLink } from 'lucide-react'
import ProjectCard from './projectCard'

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Full-Stack E-Commerce Web Application',
      description: 'a full-stack e-commerce platform that enables customers to browse products, search by category, manage their shopping cart, and place orders through a responsive and user-friendly interface. The application includes an admin dashboard for managing products, categories,  and customer orders, providing an efficient solution for online store management.',
      image: '/e-commerce.jpg ',
      tags: ['Node.js', 'React', 'prisma', 'PostgreSQL', 'Tailwindcss','TypeScript'],
      links: {
        live: '#',
        github: 'https://github.com/MahiderAschale/E-Commerce-Web-Application.git'
    },
    },
    {
      id: 2,
      title: 'Debre Markos University Management Position Election Portal',
      description: 'Designed and developed a digital election platform to replace traditional paper-based voting for DMU  management elections. The system improves election transparency, reduces manual effort, prevents duplicate voting, and provides administrators with real-time election management and result tracking through a secure web application.',
       image: '/evote.jpg',
      tags: ['React','postgress', 'Node.js', 'prisma', 'TypeScript','Jitsi Meet API'],
      links: {
        live: 'https://dmu-election-portal.vercel.app/',
        github: 'https://github.com/MahiderAschale/DMU-election-portal.git',
      },
    },
    {
      id: 3,
      title: 'Zemenay PPT and DOC to PDF Converter Website',
      description: 'Built a web-based document conversion tool that allows users to convert Word and PowerPoint files into PDF format through a fast and intuitive interface.',
      image: '/pdf converter.jpg',
      tags: ['Next.js', 'Tailwindcss', 'TypeScript', 'React'],
      links: {
        live: 'https://zemnaye-pdf-converter-two.vercel.app',
        github: 'https://github.com/Mahider-Aschale/zemnaye-pdf-converter',
      },
    },
    
  ]

  return (
    <section id="projects" className="relative py-20 px-6 bg-muted/30 overflow-hidden">
      {/* Soft background blob */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse-soft" />
      </div>

      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="space-y-4 mb-16">
          <p className="animate-on-load animate-fade-up delay-100 text-sm text-muted-foreground uppercase tracking-wider">
            My Work
          </p>
          <h2 className="animate-on-load animate-fade-up delay-200 text-4xl md:text-5xl font-bold text-foreground">
            Projects
          </h2>
          <p className="animate-on-load animate-fade-up delay-300 text-lg text-muted-foreground max-w-2xl">
          A selection of projects that showcase my experience in full-stack development, focusing on building responsive, scalable, and user-friendly web applications with modern technologies.
             </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="animate-on-load animate-fade-up"
              style={{ animationDelay: `${400 + index * 120}ms` }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="animate-on-load animate-fade-up delay-700 text-center pt-8">
          <p className="text-muted-foreground mb-4">Want to see more?</p>
          <a
            href="https://github.com/MahiderAschale"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2.5 border border-border text-foreground rounded-lg hover:bg-muted hover:border-primary/40 hover:scale-[1.02] transition-all duration-300 font-medium"
          >
            Visit GitHub
            <ExternalLink size={18} />
          </a>
        </div>
      </div>
    </section>
  )
}