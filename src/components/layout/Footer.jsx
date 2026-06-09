import { FaGithub, FaLinkedin, FaHackerrank } from 'react-icons/fa'
import { SiExercism } from 'react-icons/si'

const socials = [
  { icon: FaGithub,    href: 'https://github.com/KaineBinch',              label: 'GitHub' },
  { icon: FaLinkedin,  href: 'https://linkedin.com/in/kainebinch',          label: 'LinkedIn' },
  { icon: FaHackerrank,href: 'https://hackerrank.com/profile/kainebinch',   label: 'HackerRank' },
  { icon: SiExercism,  href: 'https://exercism.org/profiles/KaineBinch',    label: 'Exercism' },
]

const Footer = () => (
  <footer className="border-t border-white/10 py-10">
    <div className="max-w-container mx-auto px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
      <p className="text-text-2 text-sm">
        &copy; {new Date().getFullYear()} Kaine Binch. All rights reserved.
      </p>
      <div className="flex items-center gap-5">
        {socials.map(({ icon: Icon, href, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="text-text-2 hover:text-primary transition-colors duration-200"
          >
            <Icon size={20} />
          </a>
        ))}
      </div>
    </div>
  </footer>
)

export default Footer
