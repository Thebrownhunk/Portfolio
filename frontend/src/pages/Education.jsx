import { motion } from 'framer-motion';

const education = [
  {
    year: '2024 – 2026',
    degree: 'MCA – Master of Computer Applications',
    institution: 'Srusti Academy of Management and Technology, Bhubaneswar',
    description: 'Specialization in Software Engineering & MERN stack Development. Worked on multiple full-stack projects using Node.js, React.js and MongoDB.',
    badge: 'CGPA: 8.5 / 10',
    icon: '🎓',
  },
  {
    year: '2021 – 2024',
    degree: 'B.Sc – Bachelor of  Science in Information Tecnology & Management',
    institution: "BJB Autonomous College, Bhubaneswar",
    description: 'Strong foundation in Data Structures, Operating Systems, DBMS, and Web Technologies. Developed multiple full-stack academic projects.',
    badge: 'Score: 60.83%',
    icon: '🏛️',
  },
  {
    year: '2021',
    degree: 'CHSE – Science Stream (12th)',
    institution: 'Gurukul HS School of Science, Sambalpur',
    description: 'Completed senior secondary with Mathematics, Physics, Chemistry and  Information Technology.',
    badge: 'Score: 72.83%',
    icon: '📚',
  },
];

export default function Education() {
  return (
    <main className="min-h-screen pt-24 pb-16 px-6 max-w-6xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <p className="font-mono text-xs text-[#18d26e] tracking-widest uppercase mb-3">// 02. education</p>
        <h1 className="text-5xl font-bold mb-2">My <span className="text-[#18d26e]">Journey</span></h1>
      </motion.div>

      <div className="relative mt-14 pl-8 md:pl-12">
        {/* Timeline line */}
        <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-[#18d26e] via-[#18d26e]/30 to-transparent" />

        {education.map((item, i) => (
          <motion.div key={i} className="relative mb-10 last:mb-0"
            initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.15 }} viewport={{ once: true }}>

            {/* Dot */}
            <div className="absolute -left-8 md:-left-12 top-6 w-4 h-4 rounded-full bg-[#18d26e]
              shadow-[0_0_20px_rgba(24,210,110,0.5)] border-2 border-black" />

            {/* Card */}
            <div className="group relative bg-[#0d0d0d] border border-[#18d26e]/12 rounded-2xl p-7 overflow-hidden
              hover:border-[#18d26e]/35 hover:shadow-[0_8px_40px_rgba(24,210,110,0.07)] hover:-translate-y-1 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-[#18d26e]/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="flex items-start justify-between flex-wrap gap-3 mb-3">
                  <div>
                    <p className="font-mono text-xs text-[#18d26e] tracking-[2px] mb-2">{item.year}</p>
                    <h3 className="text-xl font-bold mb-1">{item.degree}</h3>
                    <p className="text-white/50 text-sm">{item.institution}</p>
                  </div>
                  <span className="text-3xl">{item.icon}</span>
                </div>
                <p className="text-white/40 text-sm leading-6 mt-3">{item.description}</p>
                <span className="inline-block mt-4 px-3 py-1 bg-[#18d26e]/10 border border-[#18d26e]/20
                  rounded text-xs font-mono text-[#18d26e]">
                  {item.badge}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
