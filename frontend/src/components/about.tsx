import { CheckCircle, Sparkles } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="relative py-20 px-6 bg-muted/30 overflow-hidden">
      {/* Soft background blob */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse-soft" />
      </div>

      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="animate-on-load animate-fade-up delay-100 text-sm text-muted-foreground uppercase tracking-wider">
                About Me
              </p>
              <h2 className="animate-on-load animate-fade-up delay-200 text-4xl md:text-5xl font-bold text-foreground">
                Building Digital Solutions 
                              </h2>
            </div>

            <p className="animate-on-load animate-fade-up delay-300 text-lg text-muted-foreground leading-relaxed">
             Hi, I am  Mahider Aschale Mihertu, a Software Engineering graduate who  building modern web applications that are both functional and intuitive. I have experience developing full-stack projects using technologies like React, Next.js, TypeScript, PostgreSQL, and Prisma. I am passionate about learning new technologies, improving my problem-solving skills, and creating software that makes a meaningful impact. </p>

            <div className="space-y-3">
              {[
                'Full-stack development with React, Next.js, TypeScript, and Node.js',
                'Creating responsive, accessible, and user-focused interfaces',
                'Building secure backend systems with PostgreSQL and Prisma',
                'Continuously learning cloud technologies, AI, and modern development practices',
                'Strong collaborator with a passion for solving real-world problems',
              ].map((point, index) => (
                <div
                  key={point}
                  className={`animate-on-load animate-fade-up flex items-start gap-3`}
                  style={{ animationDelay: `${400 + index * 80}ms` }}
                >
                  <CheckCircle size={20} className="text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-muted-foreground">{point}</p>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="animate-on-load animate-fade-up delay-700 inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 font-medium shadow-lg shadow-primary/20"
            >
              Start a Project
            </a>
          </div>

          {/* Right Visual */}
          <div className="relative animate-on-load animate-slide-in-right delay-300">
            <div className="relative h-96 rounded-2xl overflow-hidden border border-border bg-card shadow-xl shadow-primary/5 animate-scale-in delay-400">
              <img
                src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=600&fit=crop"
                alt="Developer working"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 p-5 rounded-xl bg-card border border-border shadow-xl animate-float">
              <div className="flex items-center gap-2 mb-1">
                <Sparkles size={16} className="text-primary" />
                <p className="text-sm text-muted-foreground">Currently</p>
              </div>
              <p className="font-bold text-foreground">Growing as a Full-Stack Software Engineer</p>
            </div>

            {/* Extra floating badge */}
            <div className="absolute -top-4 -right-2 px-4 py-2 rounded-xl bg-primary text-primary-foreground text-sm font-medium shadow-lg animate-float-slow">
            Software Engineering Graduate
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}