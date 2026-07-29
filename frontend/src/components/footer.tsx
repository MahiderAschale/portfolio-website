export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = [
    { label: 'Home', href: '#' },
    { label: 'Work', href: '#projects' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ]

  const socialLinks = [
    { label: 'GitHub', href: 'https://github.com/MahiderAschale' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/mahider-aschale-b56a0b32b?utm_source=share_via&utm_content=profile&utm_medium=member_android' },
      ]

  return (
    <footer className="relative border-t border-border/40 bg-muted/30 py-14 px-6 overflow-hidden">
      {/* Soft background blob */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-40 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div className="space-y-3">
            <a
              href="#"
              className="text-xl font-bold text-foreground hover:text-primary transition-colors duration-300"
            >
              Thank you  for visiting my portfolio
            </a>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Mahider Aschale Mihretu
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <p className="text-sm font-semibold text-foreground mb-4">
              Quick Links
            </p>
            <nav className="flex flex-col gap-2.5">
              {footerLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-primary hover:translate-x-1 transition-all duration-300 w-fit"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Social Links */}
          <div>
            <p className="text-sm font-semibold text-foreground mb-4">
              Follow
            </p>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-primary px-3 py-1.5 rounded-lg border border-transparent hover:border-primary/30 hover:bg-primary/5 transition-all duration-300"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border/40 pt-8">
          <p className="text-xs text-muted-foreground text-center">
            © {currentYear} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}