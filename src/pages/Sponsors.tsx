import { motion, AnimatePresence } from 'motion/react';
import React, { useState } from 'react';
import { 
  CheckCircle2, 
  Send, 
  ShieldCheck, 
  Smartphone,
  Download,
  Lock,
  FileCode2,
  Apple,
  User,
  X
} from 'lucide-react';

import { SEO } from '../components/SEO';

export const Sponsors = () => {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState(false);
  const [showDownloadPrompt, setShowDownloadPrompt] = useState(false);
  const [downloadPassword, setDownloadPassword] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const resp = await fetch('/api/verify-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password })
      });
      const data = await resp.json();
      if (data.success) {
        setIsAuthenticated(true);
        setError(false);
      } else {
        setError(true);
      }
    } catch (err) {
      setError(true);
    }
  };

  const handleDownload = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const resp = await fetch('/api/verify-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password: downloadPassword })
      });
      const data = await resp.json();
      if (data.success) {
        alert("Download initializing...");
        setShowDownloadPrompt(false);
        setDownloadPassword('');
      } else {
        alert("Invalid verification key. Download aborted.");
      }
    } catch (err) {
      alert("Verification failed.");
    }
  };

  return (
    <div className="pt-32 pb-16 min-h-screen bg-white dark:bg-black font-sans relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-tech text-slate-500/[0.03] pointer-events-none" />
      <SEO 
        title="Partners & Downloads | Spark" 
        description="Special area for Spark partners. Secure access to apps and helpful tools."
      />
      <div className="section-container relative z-10">
        <header className="text-center mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-brand font-black uppercase text-[10px] tracking-[0.5em] mb-8 block font-mono">Secure Access</span>
            <h1 id="sponsors-title" className="text-6xl md:text-[9rem] font-bold text-slate-900 dark:text-white leading-[0.85] tracking-tighter uppercase italic mb-16 font-display">
              Partners <br /> <span className="text-brand">Area.</span>
            </h1>
            <p className="text-xl md:text-3xl text-slate-500 dark:text-slate-400 max-w-4xl mx-auto leading-tight italic font-medium text-balance mb-8">
              This area is for our special partners. Please log in to see exclusive tools and downloads.
            </p>
            <p className="text-[10px] font-black text-brand uppercase tracking-[0.5em] font-mono">Contact us: sponsor@spark.in</p>
          </motion.div>
        </header>

        <div className="max-w-3xl mx-auto mb-48">
          {!isAuthenticated ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-slate-50 dark:bg-slate-900/40 p-12 md:p-16 rounded-[4rem] border border-slate-100 dark:border-slate-800 shadow-2xl text-center backdrop-blur-xl"
            >
              <div className="w-24 h-24 bg-brand/10 rounded-[2rem] flex items-center justify-center text-brand mx-auto mb-12 shadow-inner">
                <Lock className="w-12 h-12" />
              </div>
              <h3 className="text-3xl font-black dark:text-white uppercase italic tracking-tighter mb-12 font-display">Sign In</h3>
              <form onSubmit={handleLogin} className="space-y-8">
                <input 
                  type="password" 
                  placeholder="Enter Access Key" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={`w-full bg-white dark:bg-black p-8 rounded-3xl focus:outline-none focus:ring-4 focus:ring-brand/20 border text-center font-black tracking-[0.5em] transition-all text-xl ${error ? 'border-red-500' : 'border-slate-100 dark:border-slate-800 shadow-sm'}`}
                />
                {error && <p className="text-red-500 text-[10px] font-black uppercase tracking-[0.3em] animate-pulse">Wait! That's the wrong key.</p>}
                <button 
                  type="submit"
                  className="w-full py-8 bg-brand text-white rounded-3xl font-black uppercase tracking-[0.3em] text-[12px] hover:shadow-brand-glow hover:-translate-y-1 transition-all active:scale-95"
                >
                  Log In
                </button>
              </form>
              <p className="mt-12 text-[10px] text-slate-400 font-black uppercase tracking-[0.4em] italic opacity-50">
                Secure Session • Ajmer Hub
              </p>
            </motion.div>
          ) : (
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-slate-50 dark:bg-slate-900/40 p-12 md:p-16 rounded-[4rem] border border-brand/20 shadow-brand-glow backdrop-blur-xl relative"
            >
              <div className="flex items-center justify-between mb-16 border-b border-white/10 pb-12">
                <div className="flex items-center gap-8">
                  <div className="w-20 h-20 bg-brand/10 text-brand rounded-3xl flex items-center justify-center shadow-inner">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-black dark:text-white uppercase italic tracking-tighter font-display">You're in!</h3>
                    <p className="text-[10px] text-brand font-black uppercase tracking-[0.5em]">Partner Access Granted</p>
                  </div>
                </div>
                <button onClick={() => setIsAuthenticated(false)} className="px-6 py-3 bg-white/5 rounded-xl text-[10px] font-black text-slate-400 uppercase tracking-widest hover:text-brand transition-colors border border-white/5">Log Out</button>
              </div>

              <div className="space-y-8">
                {[
                  { name: "Sponsor Dashboard", platform: "Windows x64", icon: <FileCode2 />, bg: "bg-blue-500/10", text: "text-blue-500" },
                  { name: "Admin App", platform: "MacOS Silicon", icon: <Apple />, bg: "bg-slate-900 text-white dark:bg-slate-800", text: "text-white" }
                ].map((app, i) => (
                  <div key={i} className="p-10 bg-white dark:bg-black rounded-[3rem] flex items-center justify-between group hover:border-brand/40 transition-all border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-2xl">
                    <div className="flex items-center gap-8">
                      <div className={`w-16 h-16 ${app.bg} ${app.text} rounded-2xl flex items-center justify-center shadow-lg transition-transform group-hover:scale-110`}>
                        {app.icon}
                      </div>
                      <div>
                        <span className="block font-black dark:text-white uppercase italic tracking-tight font-display text-2xl">{app.name}</span>
                        <span className="text-[10px] text-slate-400 font-black uppercase tracking-[0.4em] font-mono">v2.4.0 • {app.platform}</span>
                      </div>
                    </div>
                    <button 
                      onClick={() => setShowDownloadPrompt(true)}
                      className="p-6 bg-slate-50 dark:bg-slate-900 rounded-2xl shadow-inner text-slate-400 hover:text-brand transition-all hover:bg-brand/10"
                    >
                      <Download className="w-8 h-8" />
                    </button>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </div>

        {/* Download Verification Overlay */}
        <AnimatePresence>
          {showDownloadPrompt && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[300] bg-black/90 backdrop-blur-2xl flex items-center justify-center p-6"
            >
              <motion.div 
                initial={{ scale: 0.9, y: 30 }}
                animate={{ scale: 1, y: 0 }}
                className="max-w-md w-full bg-slate-900 p-12 rounded-[3.5rem] border border-white/10 shadow-2xl relative"
              >
                <button onClick={() => setShowDownloadPrompt(false)} className="absolute top-8 right-8 text-white/40 hover:text-white">
                  <X className="w-8 h-8" />
                </button>
                <div className="text-center">
                  <div className="w-20 h-20 bg-brand/20 rounded-3xl flex items-center justify-center text-brand mx-auto mb-10">
                    <ShieldCheck className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-black text-white uppercase italic tracking-tighter mb-4 font-display">Download Authentication</h3>
                  <p className="text-slate-400 text-sm italic mb-10">Verification required to initiate secure binary transfer.</p>
                  
                  <form onSubmit={handleDownload} className="space-y-6">
                    <input 
                      type="password" 
                      placeholder="Verify Key to Start" 
                      value={downloadPassword}
                      onChange={(e) => setDownloadPassword(e.target.value)}
                      className="w-full bg-black/50 p-6 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand/50 border border-white/10 text-center font-black tracking-[0.5em] text-white transition-all"
                    />
                    <button className="w-full py-6 bg-brand text-white rounded-2xl font-black uppercase tracking-[0.3em] text-[10px] hover:shadow-brand-glow transition-all">
                      Confirm & Download
                    </button>
                  </form>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <section className="bg-slate-50 dark:bg-slate-950/50 rounded-[4rem] md:rounded-[6rem] p-12 md:p-32 border border-slate-100 dark:border-slate-900 shadow-xl overflow-hidden relative">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand/5 blur-[150px] pointer-events-none" />
          <div className="grid lg:grid-cols-2 gap-24 relative z-10 items-center">
            <div>
               <h2 className="text-5xl md:text-8xl font-black mb-12 leading-[0.8] tracking-tighter uppercase italic font-display">Work with <br /> <span className="text-brand">Us.</span></h2>
              <p className="text-slate-500 dark:text-slate-400 mb-16 text-2xl leading-relaxed italic font-medium">
                "We are always looking for friends and partners who want to help us make rides better for everyone."
              </p>
              <div className="grid grid-cols-2 gap-12">
                <div className="flex flex-col">
                  <span className="text-6xl font-black text-slate-900 dark:text-white font-display tracking-tight italic">100%</span>
                  <span className="text-[10px] uppercase font-black text-brand tracking-[0.4em] mt-4">Honest</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-6xl font-black text-slate-900 dark:text-white font-display tracking-tight italic">Global</span>
                  <span className="text-[10px] uppercase font-black text-brand tracking-[0.4em] mt-4">Reach</span>
                </div>
              </div>
            </div>
            <div className="p-12 md:p-16 bg-white dark:bg-black rounded-[4rem] border border-slate-100 dark:border-slate-800 shadow-2xl relative">
               <InstitutionalForm />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

const InstitutionalForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', intent: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await fetch('/api/save-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'institutional_inquiry', data: formData })
      });
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', intent: '' });
    } catch (err) {
      alert('Could not send message.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-10 group/form">
      <div className="space-y-4">
        <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 ml-4">Organization Name</label>
        <input 
          required
          type="text" 
          placeholder="Name of your company" 
          value={formData.name}
          onChange={e => setFormData({...formData, name: e.target.value})}
          className="w-full bg-slate-50 dark:bg-slate-900/50 p-6 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand/30 border border-slate-100 dark:border-slate-800 font-bold dark:text-white transition-all text-lg italic" 
        />
      </div>
      <div className="space-y-4">
        <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 ml-4">Email Address</label>
        <input 
          required
          type="email" 
          placeholder="Your work email" 
          value={formData.email}
          onChange={e => setFormData({...formData, email: e.target.value})}
          className="w-full bg-slate-50 dark:bg-slate-900/50 p-6 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand/30 border border-slate-100 dark:border-slate-800 font-bold dark:text-white transition-all text-lg italic" 
        />
      </div>
      <div className="space-y-4">
        <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 ml-4">Tell us more</label>
        <textarea 
          required
          rows={4} 
          placeholder="How can we help each other?" 
          value={formData.intent}
          onChange={e => setFormData({...formData, intent: e.target.value})}
          className="w-full bg-slate-50 dark:bg-slate-900/50 p-6 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand/30 border border-slate-100 dark:border-slate-800 font-bold dark:text-white transition-all text-lg italic" 
        />
      </div>
      <button 
        disabled={isSubmitting}
        className="w-full py-8 bg-brand text-white rounded-[2.5rem] font-black uppercase tracking-[0.4em] text-[12px] shadow-brand-glow flex items-center justify-center group hover:scale-[1.02] transition-all disabled:opacity-50"
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
        <Send className="ml-4 w-5 h-5 group-hover:translate-x-2 transition-transform" />
      </button>
    </form>
  );
};
