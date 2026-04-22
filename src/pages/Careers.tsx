import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Briefcase, Zap, Globe, Cpu, Users, Heart, ArrowRight, CheckCircle2, Search, X, Send, User } from 'lucide-react';

import { SEO } from '../components/SEO';

const JobCard = ({ title, location, type, team, onApply }: { title: string, location: string, type: string, team: string, onApply: (job: string) => void }) => (
  <div className="group p-8 glass-card rounded-[2.5rem] border border-slate-100 dark:border-slate-800 transition-all hover:border-brand hover:translate-y-[-4px]">
    <div className="flex justify-between items-start mb-6">
      <span className="px-3 py-1 bg-brand/10 text-brand rounded-full text-[10px] font-bold uppercase tracking-widest">{team}</span>
      <span className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">{type}</span>
    </div>
    <h3 className="text-xl font-bold dark:text-white mb-2">{title}</h3>
    <div className="flex items-center text-slate-500 text-sm mb-8">
      <Globe className="w-4 h-4 mr-2 text-brand" /> {location}
    </div>
    <button 
      onClick={() => onApply(title)}
      className="flex items-center text-brand font-black text-xs uppercase tracking-widest group-hover:gap-2 transition-all"
    >
      Apply Now <ArrowRight className="w-4 h-4 transition-all" />
    </button>
  </div>
);

export const Careers = () => {
  const [selectedJob, setSelectedJob] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    data.jobTitle = selectedJob || 'Unknown';

    try {
      const res = await fetch('/api/save-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'job_application', data })
      });
      const result = await res.json();
      if (result.success) {
        alert(`Application for ${selectedJob} sent successfully! We will contact you soon.`);
        setSelectedJob(null);
      } else {
        alert('Failed to send application.');
      }
    } catch (err) {
      alert('Network error.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-48 pb-24 min-h-screen bg-white dark:bg-black font-sans relative overflow-hidden">
      <AnimatePresence>
        {selectedJob && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }}
              onClick={() => setSelectedJob(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm" 
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-xl bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-2xl overflow-hidden"
            >
              <div className="p-8 md:p-12">
                <div className="flex justify-between items-center mb-8">
                  <div>
                    <h2 className="text-2xl font-black dark:text-white uppercase italic tracking-tighter font-display leading-none">Apply for</h2>
                    <p className="text-brand font-bold text-lg mt-1">{selectedJob}</p>
                  </div>
                  <button onClick={() => setSelectedJob(null)} className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-all">
                    <X className="w-6 h-6 dark:text-white" />
                  </button>
                </div>

                <form className="space-y-4" onSubmit={handleSubmit}>
                   <div className="space-y-3">
                      <div className="relative">
                        <User className="absolute left-4 top-4 w-5 h-5 text-slate-400" />
                        <input name="name" required type="text" placeholder="Full Name" className="w-full bg-slate-50 dark:bg-slate-800 p-4 pl-12 rounded-xl border-none outline-none focus:ring-1 focus:ring-brand dark:text-white text-sm" />
                      </div>
                      <div className="relative">
                        <Globe className="absolute left-4 top-4 w-5 h-5 text-slate-400" />
                        <input name="email" required type="email" placeholder="Email Address" className="w-full bg-slate-50 dark:bg-slate-800 p-4 pl-12 rounded-xl border-none outline-none focus:ring-1 focus:ring-brand dark:text-white text-sm" />
                      </div>
                      <div className="relative">
                        <Briefcase className="absolute left-4 top-4 w-5 h-5 text-slate-400" />
                        <input name="portfolio" type="url" placeholder="Portfolio / LinkedIn (URL)" className="w-full bg-slate-50 dark:bg-slate-800 p-4 pl-12 rounded-xl border-none outline-none focus:ring-1 focus:ring-brand dark:text-white text-sm" />
                      </div>
                      <textarea name="pitch" required rows={3} placeholder="Tell us why you are the best fit for Spark..." className="w-full bg-slate-50 dark:bg-slate-800 p-4 rounded-xl border-none outline-none focus:ring-1 focus:ring-brand dark:text-white text-sm" />
                   </div>
                   <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full py-5 bg-brand text-white rounded-2xl font-black text-lg shadow-xl shadow-brand/10 hover:brightness-110 transition-all flex items-center justify-center space-x-3 disabled:opacity-50"
                  >
                     <Send className="w-5 h-5" />
                     <span>{isSubmitting ? 'Sending...' : 'Submit Application'}</span>
                   </button>
                </form>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <div className="absolute inset-0 bg-grid-tech text-slate-500/[0.03] pointer-events-none" />
      <SEO 
        title="Engineering Careers | Join the Protocol Development Team - Spark" 
        description="Join the team architecting India's fair mobility infrastructure in Rajasthan. Explore engineering and leadership opportunities at the successor to City Car Ajmer."
      />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [{
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://spark.in"
          }, {
            "@type": "ListItem",
            "position": 2,
            "name": "Careers & Culture",
            "item": "https://spark.in/careers"
          }]
        })}
      </script>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <header className="text-center mb-32">
          <motion.div initial={{ opacity: 0, scale: 0.9 }}>
            <h1 id="careers-title" className="text-5xl md:text-9xl font-black text-slate-900 dark:text-white leading-[0.85] tracking-tighter mb-12 uppercase italic font-display">
              Build the<br />
              <span className="text-brand">Future.</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto mb-16 leading-relaxed italic font-medium text-balance">
              We are not just building an application; we are architecting the foundational digital backbone of Indian urban mobility. Join our mission as we systematically scale our zero-commission marketplace infrastructure from the heritage heart of Ajmer to every major urban hub in the nation.
            </p>
            <div className="relative max-w-xl mx-auto">
               <input type="text" placeholder="Search roles: 'Engineer', 'Design', 'Ops'..." className="w-full bg-white dark:bg-slate-900 p-6 rounded-3xl shadow-2xl border-none outline-none focus:ring-2 focus:ring-brand dark:text-white" />
               <button className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-brand text-white rounded-2xl">
                  <Search className="w-6 h-6" />
               </button>
            </div>
          </motion.div>
        </header>

        {/* Culture & Benefits */}
        <section className="grid lg:grid-cols-2 gap-24 items-center mb-32" aria-labelledby="culture-title">
           <div>
              <h2 id="culture-title" className="text-3xl md:text-5xl font-black mb-8 leading-tight tracking-tight dark:text-white italic uppercase font-display">Our High-Energy <br /> <span className="text-brand">Ecosystem.</span></h2>
              <ul className="space-y-6">
                 {[
                   { icon: <Cpu />, title: "Deep Tech Culture", desc: "Work on bleeding-edge cloud infrastructure, distributed marketplace matching logic, and low-latency synchronization protocols for elite performance." },
                   { icon: <Zap />, title: "Rapid Growth", desc: "Be part of a successor story that is scaling 40% month-over-month." },
                   { icon: <Heart />, title: "Social Impact", desc: "Directly increase driver earnings and improve city accessibility." }
                 ].map((item, i) => (
                   <li key={i} className="flex gap-6 items-start">
                      <div className="w-12 h-12 bg-white dark:bg-slate-900 rounded-2xl flex items-center justify-center text-brand flex-shrink-0 shadow-sm border border-slate-100 dark:border-slate-800">
                         {item.icon}
                      </div>
                      <div>
                         <h4 className="font-bold text-lg dark:text-white mb-1">{item.title}</h4>
                         <p className="text-slate-500 text-sm">{item.desc}</p>
                      </div>
                   </li>
                 ))}
              </ul>
           </div>
           <div className="bg-slate-900 rounded-[3rem] p-12 text-white relative flex flex-col justify-between aspect-square">
              <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
              <div className="relative z-10 flex flex-col h-full">
                 <div className="mb-auto">
                    <span className="text-xs font-black text-brand uppercase tracking-[0.4em] mb-4 block">Benefits</span>
                    <h3 className="text-3xl font-bold mb-8 italic">World-class <br /> Compensation.</h3>
                    <div className="grid grid-cols-2 gap-6 mb-12">
                       <p className="text-slate-400 text-xs flex items-center gap-2"><CheckCircle2 className="w-3 h-3 text-brand" /> Remote-First Options</p>
                       <p className="text-slate-400 text-xs flex items-center gap-2"><CheckCircle2 className="w-3 h-3 text-brand" /> Equity Stakes (ESOPs)</p>
                       <p className="text-slate-400 text-xs flex items-center gap-2"><CheckCircle2 className="w-3 h-3 text-brand" /> Comprehensive Health</p>
                       <p className="text-slate-400 text-xs flex items-center gap-2"><CheckCircle2 className="w-3 h-3 text-brand" /> Learning Allowances</p>
                    </div>
                 </div>
                 <div className="relative">
                    <div className="p-6 bg-white/5 border border-white/10 rounded-3xl">
                       <p className="text-lg font-bold">"At Spark, your code directly impacts the lives of thousands of drivers every day."</p>
                       <p className="text-xs text-brand font-bold mt-4">— Head of Technology</p>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* Engineering Excellence */}
        <section className="py-32 border-y border-slate-100 dark:border-slate-800 mb-32" aria-labelledby="manifesto-title">
           <div className="text-center mb-24">
              <span className="text-brand font-black uppercase text-[10px] tracking-[0.5em] mb-4 block">Our Standard</span>
              <h2 id="manifesto-title" className="text-4xl md:text-6xl font-black dark:text-white uppercase italic tracking-tighter font-display">Engineering <span className="text-brand">Manifesto.</span></h2>
           </div>
           <div className="grid md:grid-cols-4 gap-8">
              {[
                { title: "Ownership", desc: "You ship it, you own it. Every engineer is a product architect." },
                { title: "Scalability", desc: "We build for the next 100 million users, not just the next 100." },
                { title: "Velocity", desc: "We move fast, break algorithms, and rebuild better ones." },
                { title: "Empathy", desc: "Technology serves the driver. If it's hard for them, it's failed." }
              ].map((item, i) => (
                <div key={i} className="p-8 bg-slate-100 dark:bg-slate-900/50 rounded-3xl text-center">
                   <h4 className="text-lg font-black dark:text-white mb-4 italic uppercase tracking-tighter">{item.title}</h4>
                   <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
           </div>
        </section>

        {/* Hiring Protocol */}
        <section className="mb-32" aria-labelledby="hiring-title">
           <div className="bg-slate-950 p-12 md:p-24 rounded-[4rem] text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-brand/10 blur-[130px]" />
              <div className="relative z-10">
                 <h2 id="hiring-title" className="text-4xl md:text-7xl font-black mb-16 leading-[0.85] tracking-tighter uppercase italic font-display">The Hiring <br /> <span className="text-brand">Protocol.</span></h2>
                 <div className="grid md:grid-cols-4 gap-4 relative">
                    {[
                      { step: "01", title: "Discovery Call", desc: "A 30-min deep dive into your mission and our vision." },
                      { step: "02", title: "Technical Dive", desc: "Live system design or marketplace model challenge." },
                      { step: "03", title: "Cultural Sync", desc: "Interaction with the founders and growth teams." },
                      { step: "04", title: "Execution Plan", desc: "Defined roadmap and offer initialization." }
                    ].map((s, i) => (
                      <div key={i} className="group p-8 bg-white/5 border border-white/10 rounded-3xl hover:bg-white/10 transition-all">
                         <span className="text-4xl font-black text-brand mb-8 block font-mono">{s.step}</span>
                         <h4 className="font-bold text-lg mb-4">{s.title}</h4>
                         <p className="text-slate-400 text-sm">{s.desc}</p>
                      </div>
                    ))}
                 </div>
              </div>
           </div>
        </section>

        {/* Job Listings */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
           <JobCard title="Lead Backend Architect" location="Ajmer / Remote" type="Full-time" team="Engineering" onApply={setSelectedJob} />
           <JobCard title="Marketplace Product Manager" location="Jaipur" type="Full-time" team="Product" onApply={setSelectedJob} />
           <JobCard title="Operations Lead (Rajasthan)" location="Ajmer" type="Full-time" team="Operations" onApply={setSelectedJob} />
           <JobCard title="Senior Frontend Engineer" location="Remote" type="Full-time" team="Engineering" onApply={setSelectedJob} />
           <JobCard title="Data Scientist (Bidding Systems)" location="Jaipur / Remote" type="Contract" team="Engineering" onApply={setSelectedJob} />
           <JobCard title="Growth Lead" location="Ajmer" type="Full-time" team="Marketing" onApply={setSelectedJob} />
        </div>
      </div>
    </div>
  );
};
