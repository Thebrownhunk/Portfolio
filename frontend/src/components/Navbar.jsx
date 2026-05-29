import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const links = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/education', label: 'Education' },
  { path: '/projects', label: 'Projects' },
  { path: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
      ${scrolled ? 'py-3 bg-black/90 backdrop-blur-xl border-b border-[#18d26e]/10' : 'py-5 bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="font-mono text-lg font-bold text-[#18d26e] tracking-widest">
          &lt;<span className="text-white">AK</span>/&gt;
        </Link>
        <ul className="hidden md:flex gap-1">
          {links.map(l => (
            <li key={l.path}>
              <Link to={l.path}
                className={`px-4 py-2 rounded-md text-xs tracking-widest uppercase font-medium transition-all
                  ${pathname === l.path
                    ? 'text-[#18d26e] border border-[#18d26e]/20 bg-[#18d26e]/10'
                    : 'text-white/50 hover:text-[#18d26e] hover:bg-[#18d26e]/8'}`}>
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
        <button className="md:hidden flex flex-col gap-1.5 p-1" onClick={() => setOpen(o => !o)}>
          <span className={`w-6 h-0.5 bg-[#18d26e] transition-all ${open ? 'rotate-45 translate-y-2' : ''}`}/>
          <span className={`w-6 h-0.5 bg-[#18d26e] transition-all ${open ? 'opacity-0' : ''}`}/>
          <span className={`w-6 h-0.5 bg-[#18d26e] transition-all ${open ? '-rotate-45 -translate-y-2' : ''}`}/>
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-black/97 border-b border-[#18d26e]/10 px-4 py-3">
          {links.map(l => (
            <Link key={l.path} to={l.path}
              onClick={() => setOpen(false)}
              className={`block px-4 py-3 rounded-lg text-sm tracking-wider uppercase mb-1 transition-all
                ${pathname === l.path ? 'text-[#18d26e] bg-[#18d26e]/10' : 'text-white/50 hover:text-[#18d26e]'}`}>
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
