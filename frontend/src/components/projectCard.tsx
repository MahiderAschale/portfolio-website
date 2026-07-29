import { ExternalLink, Code2 } from 'lucide-react'

interface ProjectCardProps {
  project: {
    id: number
    title: string
    description: string
    image: string
    tags: string[]
    links: {
      live: string
      github: string
    }
  }
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group rounded-2xl overflow-hidden border border-border bg-card hover:border-primary/60 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 transition-all duration-300">
      {/* Image Container */}
      <div className="relative overflow-hidden h-52 bg-muted">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />

        {/* Overlay links on hover */}
        <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <a
            href={project.links.live}
            className="px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
          >
            Live Demo
          </a>
          <a
            href={project.links.github}
            className="px-4 py-2 rounded-lg bg-card text-foreground text-sm font-medium border border-border hover:bg-muted transition-colors"
          >
            Code
          </a>
        </div>
      </div>

      {/* Content Container */}
      <div className="p-6 space-y-4">
        <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
          {project.title}
        </h3>

        <p className="text-sm text-muted-foreground leading-relaxed">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 pt-1">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary font-medium group-hover:bg-primary/15 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links (always visible on mobile / as fallback) */}
        <div className="flex gap-4 pt-4 border-t border-border">
          <a
            href={project.links.live}
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors font-medium"
          >
            Live Demo
            <ExternalLink size={15} />
          </a>
          <a
            href={project.links.github}
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors font-medium"
          >
            Code
            <Code2 size={15} />
          </a>
        </div>
      </div>
    </div>
  )
}