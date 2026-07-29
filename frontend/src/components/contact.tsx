'use client'

import { Mail, Code2, MessageSquare, Share2 } from 'lucide-react'
import { useState } from 'react'
import emailjs from '@emailjs/browser'

const IconMap = {
  Github: Code2,
  Linkedin: MessageSquare,
  Twitter: Share2,
  Mail: Mail,
}
export default function Contact() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {

    const { name, value } = e.target

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Mahider Ashale Mihertu',
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )


      setSubmitted(true)
      setFormData({
        name: '',
        email: '',
        message: '',
      })
     setTimeout(() => {
        setSubmitted(false)
      }, 3000)
    } catch (error) {
      alert(
        "Failed to send message. Please try again."
      )
    } finally {
      setLoading(false)
    }
  }

 const socialLinks = [
    {
      icon: 'Github',
      href: 'https://github.com/MahiderAschale',
      label: 'GitHub'
    },
    {
      icon: 'Linkedin',
      href: 'https://www.linkedin.com/in/mahider-aschale-b56a0b32b?utm_source=share_via&utm_content=profile&utm_medium=member_android',
      label: 'LinkedIn'
    },

  ]



  return (

    <section 
      id="contact" 
      className="relative py-20 px-6 overflow-hidden"
    >
      {/* Soft background blob */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse-soft" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-float-slow" />
      </div>

      <div className="mx-auto max-w-4xl">


     
        <div className="space-y-4 mb-16 text-center">

          <p className="animate-on-load animate-fade-up delay-100 text-sm text-muted-foreground uppercase tracking-wider">
            Get In Touch
          </p>

          <h2 className="animate-on-load animate-fade-up delay-200 text-4xl md:text-5xl font-bold text-foreground">
            Let&apos;s Work Together
          </h2>

          <p className="animate-on-load animate-fade-up delay-300 text-lg text-muted-foreground max-w-2xl mx-auto">
            Have an exciting project in mind? I&apos;d love to hear about it.
            Feel free to reach out through the form below or via my social channels.
          </p>

        </div>




        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">


          {/* Contact Form */}

          <div className="animate-on-load animate-fade-up delay-400 space-y-6">

            <h3 className="text-2xl font-bold text-foreground">
              Send me a message
            </h3>



            <form 
              onSubmit={handleSubmit}
              className="space-y-4"
            >


              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your name"
                className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
              />



              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Your email"
                className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
              />



              <textarea

                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder="Tell me about your project..."

                className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 resize-none"

              />



              <button

                type="submit"

                disabled={loading}

                className="w-full px-6 py-3.5 bg-primary text-primary-foreground rounded-xl hover:opacity-90 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 font-medium shadow-lg shadow-primary/20 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"

              >

                {
                  loading
                  ? "Sending..."
                  : submitted
                  ? "✓ Message Sent!"
                  : "Send Message"
                }

              </button>



            </form>

          </div>





          {/* Contact Info */}

          <div className="animate-on-load animate-slide-in-right delay-400 space-y-8">


            <div className="space-y-4">

              <h3 className="text-2xl font-bold text-foreground">
                Other Ways to Connect
              </h3>

              <p className="text-muted-foreground">
                Whether you have a question or want to collaborate,
                feel free to reach out through any channel below.
              </p>

            </div>





            {/* Social Links */}

            <div className="space-y-3">

              {
                socialLinks.map((link)=>{

                  const Icon =
                    IconMap[
                      link.icon as keyof typeof IconMap
                    ]


                  return (

                    <a

                      key={link.label}

                      href={link.href}

                      target="_blank"

                      rel="noopener noreferrer"

                      className="flex items-center gap-3 p-4 rounded-xl border border-border bg-card hover:border-primary hover:bg-muted/50 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 group"

                    >

                      <Icon
                        size={24}
                        className="text-primary group-hover:scale-110 transition-transform duration-300"
                      />


                      <div>

                        <p className="font-medium text-foreground">
                          {link.label}
                        </p>

                        <p className="text-sm text-muted-foreground">
                          Get in touch with me
                        </p>

                      </div>


                    </a>

                  )

                })
              }

            </div>





            {/* Response Time */}

            <div className="p-6 rounded-xl bg-primary/5 border border-primary/20 hover:border-primary/40 transition-colors duration-300">

              <p className="text-sm font-medium text-primary mb-2">
                Response Time
              </p>

              <p className="text-foreground font-semibold">
                24 hours average
              </p>

              <p className="text-xs text-muted-foreground mt-1">
                I aim to respond to all inquiries quickly
              </p>

            </div>


          </div>


        </div>


      </div>


    </section>

  )

}