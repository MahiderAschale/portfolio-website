'use client'

import { useEffect, useState } from 'react'
import { ArrowRight, Sparkles, Code2, Braces, Briefcase } from 'lucide-react'

const TYPING_WORDS = [
  'Modern Web Applications',
  'Scalable Products',
  'Beautiful Interfaces',
  'Performant Experiences',
]

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentWord = TYPING_WORDS[wordIndex]
    const typingSpeed = isDeleting ? 40 : 80
    const pauseTime = 1800

    let timeout: NodeJS.Timeout

    if (!isDeleting && displayText === currentWord) {
      
      timeout = setTimeout(() => setIsDeleting(true), pauseTime)
    } else if (isDeleting && displayText === '') {
      
      setIsDeleting(false)
      setWordIndex((prev) => (prev + 1) % TYPING_WORDS.length)
    } else {
      timeout = setTimeout(() => {
        setDisplayText((prev) =>
          isDeleting
            ? currentWord.slice(0, prev.length - 1)
            : currentWord.slice(0, prev.length + 1)
        )
      }, typingSpeed)
    }

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, wordIndex])

  return (
    <section className="relative pt-28 pb-24 px-6 overflow-hidden">
      
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse-soft" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_0.6fr] gap-10 lg:gap-12 items-center">
          
          {/* LEFT CONTENT  */}
          <div className="space-y-8 text-center lg:text-left">
            {/* Badge */}
            <div className="animate-on-load animate-fade-up delay-100 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium">
              <Sparkles size={16} className="animate-pulse" />
              Available for new projects
            </div>

            {/* Heading with typing effect */}
            <div className="space-y-5">
              <h1 className="animate-on-load animate-fade-up delay-200 text-4xl sm:text-5xl md:text-6xl font-bold text-foreground leading-[1.15] tracking-tight min-h-[2.4em] sm:min-h-[2.3em]">
                Software Engineer Building{' '}
                <span className="relative inline text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-500 to-primary bg-[length:200%_auto] animate-[gradient-shift_4s_ease_infinite]">
                  {displayText}
                  <span className="inline-block w-[3px] h-[0.9em] ml-1 bg-primary align-middle animate-blink" />
                </span>
              </h1>

              <p className="animate-on-load animate-fade-up delay-300 text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed">
                I craft fast, accessible, and beautiful digital experiences with React, Node.js, and modern web technologies.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="animate-on-load animate-fade-up delay-400 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#projects"
                className="group inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-primary text-primary-foreground rounded-xl font-medium shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
              >
                View My Work
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border border-border text-foreground rounded-xl font-medium hover:bg-muted hover:border-primary/40 transition-all duration-300"
              >
                Let&apos;s Talk
              </a>
            </div>

            {/* Stats */}
            <div className="animate-on-load animate-fade-up delay-500 pt-4 flex flex-wrap gap-x-8 gap-y-3 justify-center lg:justify-start text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-60"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
                </span>
                Available for Projects
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                10+ Projects Completed
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                Full-Stack Focus
              </div>
            </div>
          </div>

          {/*  RIGHT IMAGE AREA  */}
          <div className="relative animate-on-load animate-slide-in-right delay-300 flex justify-center lg:justify-end">
            
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[260px] h-[260px] md:w-[300px] md:h-[300px] rounded-full border border-primary/20 animate-float-slow" />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[220px] h-[220px] md:w-[250px] md:h-[250px] rounded-full border border-primary/10 animate-float" />
            </div>

            {/* Main photo container */}
            <div className="relative z-10 w-56 h-56 md:w-64 md:h-64 rounded-2xl overflow-hidden border border-border shadow-2xl shadow-primary/10 bg-card animate-scale-in delay-400">
              <img
                src="/me.jpg"
                alt="Portrait of the developer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            </div>

            {/* Floating tech badges with icons */}
            <div className="absolute -top-3 -left-2 md:left-0 z-20 animate-float">
              <div className="px-3 py-1.5 rounded-xl bg-card border border-border shadow-lg text-xs font-medium text-foreground flex items-center gap-1.5">
                <Code2 size={14} className="text-primary" />
                React & Node.js
              </div>
            </div>

            <div className="absolute -bottom-3 -right-1 md:right-2 z-20 animate-float-slow">
              <div className="px-3 py-1.5 rounded-xl bg-card border border-border shadow-lg text-xs font-medium text-foreground flex items-center gap-1.5">
                <Braces size={14} className="text-primary" />
                TypeScript
              </div>
            </div>

            <div className="absolute top-1/2 -right-4 md:-right-6 z-20 animate-float">
              <div className="px-2.5 py-1.5 rounded-xl bg-primary text-primary-foreground shadow-lg text-[11px] font-semibold tracking-wide flex items-center gap-1">
                <Briefcase size={12} />
                Open to Work
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}