import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import profilePic from '../assets/git.png';

const phrases = [
  'MERN Stack Developer',
  'Full-Stack Engineer',
];

function Typewriter() {
  const [text, setText] = useState('');
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = phrases[phraseIdx];
    let timeout;
    if (!deleting) {
      if (text.length < word.length) {
        timeout = setTimeout(() => setText(word.slice(0, text.length + 1)), 80);
      } else {
        timeout = setTimeout(() => setDeleting(true), 1800);
      }
    } else {
      if (text.length > 0) {
        timeout = setTimeout(() => setText(word.slice(0, text.length - 1)), 40);
      } else {
        setDeleting(false);
        setPhraseIdx(i => (i + 1) % phrases.length);
      }
    }
    return () => clearTimeout(timeout);
  }, [text, deleting, phraseIdx]);

  return (
    <span className="font-mono text-[#18d26e] text-lg md:text-xl">
      {text}<span className="animate-pulse">|</span>
    </span>
  );
}

const socials = [
  { label: 'Twitter', icon: '𝕏', href: '#' },
  { label: 'LinkedIn', icon: 'in', href: 'www.linkedin.com/in/ankit-ku-sahu' },
  { label: 'GitHub', icon: '⌥', href: 'https://github.com/Thebrownhunk' },
  { label: 'Email', icon: '✉', href: 'ankit3012sahu@gmail.com' },
];

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20 px-6">
      {/* Grid background */}
      <div className="absolute inset-0 pointer-events-none"
        style={{backgroundImage:'linear-gradient(rgba(24,210,110,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(24,210,110,0.04) 1px,transparent 1px)',backgroundSize:'40px 40px'}}/>
      {/* Glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none"
        style={{background:'radial-gradient(circle,rgba(24,210,110,0.07) 0%,transparent 70%)'}}/>

      <div className="relative z-10 max-w-4xl">
        <div className="flex flex-col md:flex-row md:items-start md:gap-12">
          <section className="flex-1 md:max-w-2xl">
            <motion.p initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} transition={{delay:.15}}
              className="font-mono text-sm text-[#18d26e] tracking-[3px] uppercase mb-4">
              // Hello, World!
            </motion.p>

            <motion.h1 initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:.3}}
              className="text-6xl md:text-8xl font-bold leading-none mb-4 tracking-tight">
              Ankit Ku.<br/>
              <span className="text-[#18d26e]">Sahu</span>
            </motion.h1>

            <motion.p initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} transition={{delay:.45}}
              className="text-white/50 text-lg mb-3">
              Full-Stack Engineer · Problem Solver · Code Craftsman
            </motion.p>

            <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:.6}} className="mb-6 h-8">
               <Typewriter />
            </motion.div>

            <motion.p initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} transition={{delay:.75}}
              className="text-white/45 text-base leading-7 max-w-xl mb-10">
              I build scalable, high-performance web applications using the MERN stack — turning complex
              problems into elegant digital experiences. Based in Bengaluru, shipping globally.
            </motion.p>
          </section>

          <section className="mt-10 md:mt-[40px] md:w-[360px] md:ml-auto md:mr-[-200px]">
            <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:.35}}
              className="overflow-hidden border-4 border-[#18d26e]/50 shadow-[0_25px_60px_rgba(24,210,110,0.18)]">
              <img src={profilePic} alt="Ankit Ku Sahu" className="w-full h-auto object-cover" />
            </motion.div>
          </section>
        </div>

         

         

        <motion.div initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} transition={{delay:.9}}
          className="flex flex-wrap gap-4 mb-12 mt-6">
          <Link to="/projects"
            className="px-8 py-3.5 bg-[#18d26e] text-black font-bold rounded-lg text-sm tracking-wide
              hover:shadow-[0_0_30px_rgba(24,210,110,0.35)] hover:-translate-y-0.5 transition-all">
            View Projects →
          </Link>
          <Link to="/contact"
            className="px-8 py-3.5 bg-transparent text-[#18d26e] font-semibold border border-[#18d26e]
              rounded-lg text-sm tracking-wide hover:bg-[#18d26e]/10 hover:-translate-y-0.5 transition-all">
            Contact Me
          </Link>
        </motion.div>

        <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1.05}}
          className="flex gap-4">
          {socials.map(s => (
            <a key={s.label} href={s.href} title={s.label}
              className="w-11 h-11 flex items-center justify-center border border-[#18d26e]/15 rounded-lg
                text-white/45 hover:border-[#18d26e] hover:text-[#18d26e] hover:bg-[#18d26e]/10
                hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(24,210,110,0.2)] transition-all">
              {s.icon}
            </a>
          ))}
        </motion.div>
      </div>

      <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1.2}}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2
          text-white/30 text-xs tracking-[3px] uppercase">
        <div className="w-px h-10 bg-gradient-to-b from-[#18d26e] to-transparent"/>
        scroll
      </motion.div>
    </main>
  );
}
