import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const API = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const FALLBACK = [
  { _id:1, emoji:'Comming Soon', title:'ShopNest – E-Commerce Platform', description:'Full-stack MERN e-commerce with Stripe payments, admin dashboard, and JWT auth.', category:'fullstack', tags:['React','Node.js','MongoDB','Stripe','Redux'], githubUrl:'#', liveUrl:'#' },
  { _id:2, emoji:'Comming Soon', title:'ChatFlow – Real-Time Chat', description:'Socket.IO messaging with rooms, media sharing, and end-to-end encryption.', category:'fullstack', tags:['React','Socket.IO','Node.js','MongoDB'], githubUrl:'#', liveUrl:'#' },
  { _id:3, emoji:'Comming Soon', title:'DevMetrics – API Analytics', description:'REST API analytics dashboard with rate limiting and API key management.', category:'backend', tags:['Node.js','Express','MongoDB','Chart.js'], githubUrl:'#', liveUrl:'#' },
  { _id:4, emoji:'Comming Soon', title:'DesignKit – Component Library', description:'50+ React components with dark mode, a11y, and Storybook documentation.', category:'frontend', tags:['React','Tailwind','Storybook','TypeScript'], githubUrl:'#', liveUrl:'#' },
  { _id:5, emoji:'Comming Soon', title:'TaskBoard – Project Manager', description:'Kanban boards with drag-and-drop, team collaboration, and analytics.', category:'fullstack', tags:['React','Node.js','MongoDB','DnD'], githubUrl:'#', liveUrl:'#' },
  { _id:6, emoji:'Comming Soon', title:'AuthGuard – Auth Microservice', description:'OAuth2 microservice with MFA, refresh tokens, and audit logging.', category:'backend', tags:['Node.js','JWT','OAuth2','Redis'], githubUrl:'#', liveUrl:'#' },
];

const CATS = ['all', 'fullstack', 'frontend', 'backend'];

export default function Projects() {
  const [projects, setProjects] = useState(FALLBACK);
  const [filter, setFilter] = useState('all');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API}/projects`)
      .then(r => r.json())
      .then(d => { if (d.success && d.data.length) setProjects(d.data); })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const filtered = filter === 'all' ? projects : projects.filter(p => p.category === filter);

  return (
    <main className="min-h-screen pt-24 pb-16 px-6 max-w-6xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <p className="font-mono text-xs text-[#18d26e] tracking-widest uppercase mb-3">// 03. projects</p>
        <h1 className="text-5xl font-bold mb-2">Featured <span className="text-[#18d26e]">Work</span></h1>
      </motion.div>
      <div className="flex gap-2 flex-wrap mt-10 mb-8">
        {CATS.map(c => (
          <button key={c} onClick={() => setFilter(c)}
            className={`px-5 py-2 rounded-lg text-sm font-medium transition-all
              ${filter === c ? 'border border-[#18d26e] text-[#18d26e] bg-[#18d26e]/10' : 'border border-white/10 text-white/40 hover:border-[#18d26e]/40 hover:text-[#18d26e]'}`}>
            {c === 'all' ? 'All Projects' : c.charAt(0).toUpperCase() + c.slice(1)}
          </button>
        ))}
      </div>
      <AnimatePresence mode="popLayout">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p, i) => (
            <motion.div key={p._id}
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }} transition={{ delay: i * 0.08 }}
              className="group bg-[#0d0d0d] border border-[#18d26e]/12 rounded-2xl overflow-hidden
                hover:border-[#18d26e]/35 hover:shadow-[0_0_40px_rgba(24,210,110,0.07),0_20px_40px_rgba(0,0,0,0.4)]
                transition-all duration-300 hover:-translate-y-1">
              <div className="h-44 flex items-center justify-center bg-[#111] text-5xl relative overflow-hidden">
                <span className="relative z-10 group-hover:scale-110 transition-transform duration-300">{p.emoji}</span>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0d0d0d]"/>
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {p.tags?.map(t => (
                    <span key={t} className="text-[10px] font-mono text-[#18d26e] px-2 py-0.5 border border-[#18d26e]/15 rounded">{t}</span>
                  ))}
                </div>
                <h3 className="font-bold text-base mb-2">{p.title}</h3>
                <p className="text-white/45 text-sm leading-6 mb-5">{p.description}</p>
                <div className="flex gap-3">
                  <a href={p.githubUrl || '#'} className="flex-1 py-2 text-center text-xs font-semibold rounded-lg bg-white/5 border border-white/10 hover:border-white/25 hover:bg-white/10 transition-all">⌥ GitHub</a>
                  <a href={p.liveUrl || '#'} className="flex-1 py-2 text-center text-xs font-semibold rounded-lg bg-[#18d26e] text-black hover:shadow-[0_0_20px_rgba(24,210,110,0.3)] transition-all">↗ Live Demo</a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </AnimatePresence>
    </main>
  );
}
