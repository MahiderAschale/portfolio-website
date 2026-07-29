export default function Skills() {
    const skillCategories = [
      {
        category: 'Frontend',
        skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS',  'Responsive Design'],
      },
      {
        category: 'Backend',
        skills: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'Supabase', 'REST APIs'],
      },
      {
        category: 'Tools & Platforms',
        skills: ['Git', 'Docker', 'Vercel', 'GitHub', 'Figma', ,'Render'],
      },
      {
        category: 'Other',
        skills: ['Web Performance', 'SEO Optimization', 'Testing (Jest)', 'Agile', 'UI/UX Principles', 'Problem Solving'],
      },
    ]
  
    return (
      <section id="skills" className="py-20 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="space-y-4 mb-16">
            <p className="text-sm text-muted-foreground uppercase tracking-wider">Technical Expertise</p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">Skills & Technologies</h2>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillCategories.map((category) => (
              <div key={category.category} className="space-y-4">
                <h3 className="text-xl font-bold text-foreground">{category.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium hover:bg-primary/20 transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
  
          {/* Additional Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: 'Projects Completed', value: '10+' },
              { label: 'Technologies', value: '15+' },
            ].map((stat) => (
              <div key={stat.label} className="text-center p-6 rounded-lg border border-border bg-card hover:border-primary transition-colors">
                <p className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  