import { Link } from 'react-router-dom';

const socials = [
  { label: 'GitHub', icon: '⌥', href: 'https://github.com/Thebrownhunk' },
  { label: 'LinkedIn', icon: 'in', href: 'www.linkedin.com/in/ankit-ku-sahu' },
  { label: 'Twitter', icon: '✉', href: 'ankit3012sahu@gmail.com' },
];

const links = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/education', label: 'Education' },
  { path: '/projects', label: 'Projects' },
  { path: '/contact', label: 'Contact' },
];

export default function Footer() {
  return (
    <footer className="border-t border-[#18d26e]/10 mt-20">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <Link to="/" className="font-mono text-lg font-bold text-[#18d26e] tracking-widest">
            &lt;<span className="text-white">AK</span>/&gt;
          </Link>

          <nav className="flex flex-wrap justify-center gap-1">
            {links.map(l => (
              <Link key={l.path} to={l.path}
                className="px-3 py-1.5 text-xs uppercase tracking-widest text-white/40
                  hover:text-[#18d26e] transition-colors">
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex gap-3">
            {socials.map(s => (
              <a key={s.label} href={s.href} title={s.label}
                className="w-9 h-9 flex items-center justify-center rounded-lg border border-white/10
                  text-white/40 text-sm hover:border-[#18d26e]/40 hover:text-[#18d26e]
                  hover:bg-[#18d26e]/10 transition-all">
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/5 text-center">
          <p className="text-white/25 text-xs tracking-wide">
            © 2025 Ankit Kumar Sahu.All Rights Reserved | Privacy Policy.Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
}
