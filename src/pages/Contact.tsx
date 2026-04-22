import { motion } from 'motion/react';
import { Mail, MapPin, Smartphone, Clock, Globe, MessageSquare, Megaphone } from 'lucide-react';

import { SEO } from '../components/SEO';

export const Contact = () => {
  return (
    <div className="pt-32 pb-16 min-h-screen bg-white dark:bg-black font-sans relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-tech text-slate-500/[0.03] pointer-events-none" />
      <SEO 
        title="Contact Us | Spark Support" 
        description="Connect with Spark. We are here to help you with our ride marketplace in India."
        keywords="ride marketplace india, spark contact, cab service india support"
      />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <header className="mb-12">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 id="contact-title" className="text-4xl md:text-7xl font-black text-slate-900 dark:text-white mb-4 uppercase tracking-tighter italic font-display leading-none">Talk <br /> with <span className="text-brand underline decoration-slate-200 underline-offset-8">Spark.</span></h1>
            <p className="text-slate-500 dark:text-slate-400 text-lg max-w-xl font-medium leading-tight italic">
              We are easy to reach and always happy to help! Whether you need a ride or have a question, just let us know.
            </p>
          </motion.div>
        </header>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
            <section className="grid gap-4" aria-label="Contact Channels">
              <div className="grid md:grid-cols-2 gap-4">
                 <div className="p-8 bg-slate-50 dark:bg-slate-900 rounded-[2rem] border border-slate-100 dark:border-slate-800">
                    <Mail className="text-brand w-8 h-8 mb-4" />
                    <h4 className="font-black text-slate-400 text-[9px] uppercase tracking-[0.2em] mb-1">Helpful Mail</h4>
                    <p className="font-bold dark:text-white text-sm">help@spark.in</p>
                 </div>
                 <div className="p-8 bg-slate-50 dark:bg-slate-900 rounded-[2rem] border border-slate-100 dark:border-slate-800">
                    <Smartphone className="text-brand w-8 h-8 mb-4" />
                    <h4 className="font-black text-slate-400 text-[9px] uppercase tracking-[0.2em] mb-1">Call Us</h4>
                    <p className="font-bold dark:text-white text-sm">+91 145-SPARK-MOB</p>
                 </div>
                 <div className="p-8 bg-slate-50 dark:bg-slate-900 rounded-[2rem] border border-slate-100 dark:border-slate-800">
                    <Megaphone className="text-brand w-8 h-8 mb-4" />
                    <h4 className="font-black text-slate-400 text-[9px] uppercase tracking-[0.2em] mb-1">News</h4>
                    <p className="font-bold dark:text-white text-sm">press@spark.in</p>
                 </div>
              </div>
              <div className="p-8 bg-slate-900 rounded-[2.5rem] text-white flex flex-col md:flex-row items-center gap-8">
                 <div className="w-full md:w-1/2">
                    <h4 className="font-black text-brand text-[9px] uppercase tracking-[0.2em] mb-2">Ajmer Hub</h4>
                    <p className="text-xl font-bold mb-2">Ajmer Hub</p>
                    <p className="text-slate-400 text-xs leading-relaxed">
                       Rajasthan, India
                    </p>
                 </div>
                 <div className="w-full md:w-1/2 aspect-square bg-white/5 rounded-2xl flex items-center justify-center p-6">
                    <MapPin className="text-brand w-12 h-12 opacity-20" />
                 </div>
              </div>
           </section>

            <section className="bg-white dark:bg-slate-900 p-8 md:p-12 rounded-[3rem] shadow-2xl border border-slate-100 dark:border-slate-800" aria-labelledby="form-title">
               <h2 id="form-title" className="text-2xl font-bold dark:text-white mb-6 italic uppercase tracking-tighter font-display">Send a Message</h2>
               <form 
                 className="space-y-4"
                 onSubmit={async (e) => {
                   e.preventDefault();
                   const form = e.currentTarget;
                   const formData = new FormData(form);
                   const data = Object.fromEntries(formData.entries());
                   
                   try {
                     const btn = form.querySelector('button');
                     if (btn) {
                       btn.disabled = true;
                       btn.innerText = 'Sending...';
                     }
                     
                     const res = await fetch('/api/save-form', {
                       method: 'POST',
                       headers: { 'Content-Type': 'application/json' },
                       body: JSON.stringify({ type: 'contact_message', data })
                     });
                     
                     const result = await res.json();
                     if (result.success) {
                       alert('Message received! We will get back to you soon.');
                       form.reset();
                     } else {
                       alert('Error: ' + (result.message || 'Failed to send'));
                     }
                   } catch (err) {
                     alert('Network error. Please try again.');
                   } finally {
                     const btn = form.querySelector('button');
                     if (btn) {
                       btn.disabled = false;
                       btn.innerHTML = `
                         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-message-square w-6 h-6"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                         <span>Send Message</span>
                       `;
                     }
                   }
                 }}
               >
                  <div className="space-y-3">
                     <input name="name" required type="text" placeholder="Your Name" className="w-full bg-slate-50 dark:bg-slate-800 p-4 rounded-xl border-none outline-none focus:ring-1 focus:ring-brand dark:text-white text-sm" />
                     <input name="email" required type="email" placeholder="Email Address" className="w-full bg-slate-50 dark:bg-slate-800 p-4 rounded-xl border-none outline-none focus:ring-1 focus:ring-brand dark:text-white text-sm" />
                     <textarea name="message" required rows={3} placeholder="Your Message" className="w-full bg-slate-50 dark:bg-slate-800 p-4 rounded-xl border-none outline-none focus:ring-1 focus:ring-brand dark:text-white text-sm" />
                  </div>
                  <button type="submit" className="w-full py-5 bg-brand text-white rounded-2xl font-black text-lg shadow-xl shadow-brand/10 hover:bg-brand-hover transition-all flex items-center justify-center space-x-3 disabled:opacity-50">
                     <MessageSquare className="w-6 h-6" />
                     <span>Send Message</span>
                  </button>
               </form>
            </section>
        </div>
      </div>
    </div>
  );
};
