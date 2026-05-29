import { useState } from 'react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';

const API = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = 'Valid email required';
    if (!form.message.trim()) e.message = 'Message is required';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    try {
      const res = await fetch(`${API}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) {
        toast.success('Message sent! I\'ll reply within 24 hours. 🚀');
        setForm({ name: '', email: '', message: '' });
      } else {
        toast.error(data.message || 'Something went wrong.');
      }
    } catch {
      toast.error('Server error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const field = (id, label, placeholder, type = 'input') => (
    <div className="mb-5">
      <label className="block text-xs uppercase tracking-widest text-white/40 mb-2 font-mono">{label}</label>
      {type === 'input' ? (
        <input id={id} type={id === 'email' ? 'email' : 'text'}
          value={form[id]} placeholder={placeholder}
          onChange={e => setForm(f => ({ ...f, [id]: e.target.value }))}
          className={`w-full bg-white/4 border rounded-lg px-4 py-3 text-white text-sm outline-none transition-all
            placeholder:text-white/20 focus:border-[#18d26e] focus:bg-[#18d26e]/5 focus:shadow-[0_0_0_3px_rgba(24,210,110,0.08)]
            ${errors[id] ? 'border-red-500' : 'border-white/8'}`} />
      ) : (
        <textarea id={id} value={form[id]} placeholder={placeholder} rows={5}
          onChange={e => setForm(f => ({ ...f, [id]: e.target.value }))}
          className={`w-full bg-white/4 border rounded-lg px-4 py-3 text-white text-sm outline-none transition-all resize-y
            placeholder:text-white/20 focus:border-[#18d26e] focus:bg-[#18d26e]/5 focus:shadow-[0_0_0_3px_rgba(24,210,110,0.08)]
            ${errors[id] ? 'border-red-500' : 'border-white/8'}`} />
      )}
      {errors[id] && <p className="text-red-400 text-xs mt-1">{errors[id]}</p>}
    </div>
  );

  return (
    <main className="min-h-screen pt-24 pb-16 px-6 max-w-6xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <p className="font-mono text-xs text-[#18d26e] tracking-widest uppercase mb-3">// 04. contact</p>
        <h1 className="text-5xl font-bold mb-2">Let's <span className="text-[#18d26e]">Connect</span></h1>
      </motion.div>
      <div className="grid md:grid-cols-[1fr_1.5fr] gap-16 mt-12">
        <div>
          <h3 className="text-xl font-semibold mb-3">Get In Touch</h3>
          <p className="text-white/50 text-sm leading-7 mb-8">Have a project or want to collaborate? My inbox is always open. I'll reply within 24 hours.</p>
          {[
            { icon: '✉', label: 'Email', val: 'ankit3012sahu@gmail.com' },
            { icon: '📍', label: 'Location', val: 'Bengaluru, India' },
            { icon: '⚡', label: 'Status', val: 'Open to Opportunities', green: true }
          ].map(item => (
            <div key={item.label} className="flex items-center gap-4 mb-5">
              <div className="w-11 h-11 flex items-center justify-center rounded-lg border border-[#18d26e]/15 bg-[#18d26e]/10 text-[#18d26e] text-lg shrink-0">{item.icon}</div>
              <div>
                <div className="text-white/40 text-xs">{item.label}</div>
                <div className={`text-sm font-medium ${item.green ? 'text-[#18d26e]' : 'text-white'}`}>{item.val}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-[#0d0d0d] border border-[#18d26e]/15 rounded-2xl p-9">
          <form onSubmit={handleSubmit}>
            {field('name', 'Name', 'John Doe')}
            {field('email', 'Email', 'john@example.com')}
            {field('message', 'Message', 'Tell me about your project...', 'textarea')}
            <button type="submit" disabled={loading}
              className="w-full py-3.5 bg-[#18d26e] text-black font-bold rounded-lg text-sm tracking-wide
                transition-all hover:shadow-[0_0_30px_rgba(24,210,110,0.3)] hover:-translate-y-0.5
                disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none">
              {loading ? 'Sending...' : 'Send Message →'}
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
