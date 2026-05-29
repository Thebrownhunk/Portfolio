import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const skills = [
  { name: 'React.js', pct: 50 },
  { name: 'Node.js', pct: 70 },
  { name: 'MongoDB', pct: 75 },
  { name: 'Express.js', pct: 40 },
  { name: 'JavaScript', pct: 90 },
  { name: 'Tailwind CSS', pct: 95 },
  { name: 'REST API Design', pct: 60 },
  { name: 'Git & GitHub', pct: 70 },
];

const techs = ['MongoDB','Express.js','React.js','Node.js','JavaScript','Tailwind CSS','Git & GitHub','REST APIs','java','PHP','Bootstrap'];

function SkillBar({ name, pct, index }) {
  const fillRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && fillRef.current) {
        fillRef.current.style.width = pct + '%';
      }
    }, { threshold: 0.3 });
    if (fillRef.current) observer.observe(fillRef.current.parentElement);
    return () => observer.disconnect();
  }, [pct]);

  return (
    <motion.div className="mb-5"
      initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.06 }} viewport={{ once: true }}>
      <div className="flex justify-between text-xs font-mono mb-2">
        <span className="text-white/60">{name}</span>
        <span className="text-[#18d26e]">{pct}%</span>
      </div>
      <div className="h-1 bg-white/5 rounded-full overflow-hidden">
        <div ref={fillRef}
          className="h-full bg-[#18d26e] rounded-full transition-all duration-[1400ms] ease-out"
          style={{ width: 0, boxShadow: '0 0 10px rgba(24,210,110,0.4)' }} />
      </div>
    </motion.div>
  );
}

export default function About() {
  return (
    <main className="min-h-screen pt-24 pb-16 px-6 max-w-6xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <p className="font-mono text-xs text-[#18d26e] tracking-widest uppercase mb-3">// 01. about</p>
        <h1 className="text-5xl font-bold mb-2">Who I <span className="text-[#18d26e]">Am</span></h1>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-16 mt-12">
        <div>
          {[
            <>Hey! I'm <span className="text-white font-medium">ANKIT KUMAR SAHU</span>, an MCA student and aspiring MERN Stack Developer. I am passionate about building modern, responsive, and user-friendly web applications. I have knowledge of MongoDB, Express.js, React.js, Node.js, JavaScript, HTML, CSS, and Git.</>,
            <>As a <span className="text-white font-medium">fresher</span> , I enjoy learning new technologies and improving my problem-solving skills through real-world projects. I have worked on projects like task management systems and responsive web applications that helped me strengthen my frontend and backend development skills.</>,
            <>I am currently looking for opportunities to grow as a Full Stack Developer and contribute to innovative projects while continuously learning and improving myself.</>,
          ].map((p, i) => (
            <motion.p key={i} className="text-white/50 text-[15px] leading-7 mb-4"
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }} viewport={{ once: true }}>
              {p}
            </motion.p>
          ))}

          <motion.div className="flex flex-wrap gap-2 mt-6"
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }} viewport={{ once: true }}>
            {techs.map(t => (
              <span key={t}
                className="px-3 py-1.5 text-xs font-mono text-[#18d26e] border border-[#18d26e]/15
                  bg-[#18d26e]/8 rounded-md hover:border-[#18d26e]/40 hover:shadow-[0_0_12px_rgba(24,210,110,0.15)]
                  transition-all cursor-default">
                {t}
              </span>
            ))}
          </motion.div>

          <motion.a href="/resume.pdf" download
            className="inline-flex items-center gap-2 mt-8 px-7 py-3 border border-[#18d26e] text-[#18d26e]
              font-semibold rounded-lg text-sm hover:bg-[#18d26e]/10 hover:shadow-[0_0_20px_rgba(24,210,110,0.15)]
              transition-all"
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }} viewport={{ once: true }}>
            ↓ Download Resume
          </motion.a>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-6">Technical Proficiency</h3>
          {skills.map((s, i) => <SkillBar key={s.name} {...s} index={i} />)}
        </div>
      </div>
    </main>
  );
}
