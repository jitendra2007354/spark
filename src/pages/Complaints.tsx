import { motion } from 'motion/react';
import { MessageSquareWarning, ShieldCheck, Mail, Smartphone, History, CheckCircle2, Send } from 'lucide-react';

import { SEO } from '../components/SEO';

export const Complaints = () => {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-slate-50 dark:bg-black font-sans">
      <SEO 
        title="Grievance Portal" 
        description="Spark operates on transparency. Submit a formal complaint regarding price disputes, driver behavior, or technical issues through our secure portal."
      />
      <div className="max-w-7xl mx-auto px-6">
        <header className="text-center mb-20">
          <motion.div initial={{ opacity: 0, scale: 0.9 }}>
            <span className="text-sm font-bold text-brand uppercase tracking-widest block mb-4">Accountability Central</span>
            <h1 id="complaints-title" className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-6 uppercase italic font-display">Grievance <span className="text-brand">Portal.</span></h1>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed italic font-medium">
              Spark operates on transparency. If you have an issue with a ride, a bid, or a technical glitch, we are here to resolve it within 24 hours.
            </p>
          </motion.div>
        </header>

        <div className="grid lg:grid-cols-12 gap-12">
           <aside className="lg:col-span-4 space-y-6" aria-label="Support Information">
              <div className="p-8 bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm">
                 <h3 className="font-bold text-xl mb-4 dark:text-white flex items-center space-x-2 italic font-display">
                    <ShieldCheck className="text-brand w-5 h-5" />
                    <span>Resolution Map</span>
                 </h3>
                 <div className="space-y-6 relative ml-2">
                    <div className="flex space-x-4">
                       <div className="w-1 h-20 bg-brand absolute left-[-4px] top-4 opacity-20" />
                       <div className="w-4 h-4 rounded-full bg-brand relative z-10 mt-1" />
                       <div>
                          <p className="text-xs font-bold text-slate-400 uppercase">Step 1</p>
                          <p className="font-bold text-sm dark:text-slate-200">Issue Lodged</p>
                       </div>
                    </div>
                    <div className="flex space-x-4">
                       <div className="w-4 h-4 rounded-full bg-brand relative z-10 mt-1" />
                       <div>
                          <p className="text-xs font-bold text-slate-400 uppercase">Step 2</p>
                          <p className="font-bold text-sm dark:text-slate-200">Assigned to Node Manager</p>
                       </div>
                    </div>
                    <div className="flex space-x-4">
                       <div className="w-4 h-4 rounded-full bg-slate-300 dark:bg-slate-700 relative z-10 mt-1" />
                       <div>
                          <p className="text-xs font-bold text-slate-400 uppercase">Step 3</p>
                          <p className="font-bold text-sm dark:text-slate-200">Resolution & Escrow Adjustment</p>
                       </div>
                    </div>
                 </div>
              </div>

              <div className="p-8 bg-brand text-white rounded-3xl shadow-xl shadow-brand/20">
                 <Smartphone className="w-10 h-10 mb-6" />
                 <h4 className="text-xl font-bold mb-2 tracking-tight">App Support</h4>
                 <p className="text-white/70 text-sm mb-6">Need instant help? Use the Help section within the Spark App for 24/7 live assistance.</p>
                 <button className="w-full py-3 bg-black text-white rounded-xl text-xs font-bold uppercase tracking-widest">Open Mobile Support</button>
              </div>
           </aside>

            <div className="lg:col-span-8">
               <div className="bg-white dark:bg-slate-900 p-8 md:p-12 rounded-[3.5rem] shadow-2xl border border-slate-100 dark:border-slate-800">
                  <div className="flex items-center space-x-4 mb-10">
                     <MessageSquareWarning className="text-brand w-10 h-10" />
                     <h2 className="text-3xl font-bold dark:text-white">Submit a Formal Complaint</h2>
                  </div>
                  <form 
                    className="space-y-6"
                    onSubmit={async (e) => {
                      e.preventDefault();
                      const form = e.currentTarget;
                      const formData = new FormData(form);
                      const data = Object.fromEntries(formData.entries());
                      
                      try {
                        const btn = form.querySelector('button');
                        if (btn) {
                          btn.disabled = true;
                          btn.innerText = 'Lodging...';
                        }
                        
                        const res = await fetch('/api/save-form', {
                          method: 'POST',
                          headers: { 'Content-Type': 'application/json' },
                          body: JSON.stringify({ type: 'complaint_grievance', data })
                        });
                        
                        const result = await res.json();
                        if (result.success) {
                          alert('Grievance logged successfully. Reference ID: ' + (data.rideId || 'GEN-' + Math.random().toString(36).substr(2, 5).toUpperCase()));
                          form.reset();
                        } else {
                          alert('Error: ' + (result.message || 'Failed to lodge complaint'));
                        }
                      } catch (err) {
                        alert('Network error. Please try again.');
                      } finally {
                        const btn = form.querySelector('button');
                        if (btn) {
                          btn.disabled = false;
                          btn.innerHTML = `
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-send w-6 h-6"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                            <span>Lodge Secure Complaint</span>
                          `;
                        }
                      }
                    }}
                  >
                     <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                           <label className="text-[10px] font-black uppercase text-slate-400 ml-4 tracking-widest">Full Name</label>
                           <input name="name" required type="text" className="w-full bg-slate-50 dark:bg-slate-800 p-5 rounded-2xl focus:ring-1 focus:ring-brand outline-none border-none dark:text-white" placeholder="Arjun Sharma" />
                        </div>
                        <div className="space-y-2">
                           <label className="text-[10px] font-black uppercase text-slate-400 ml-4 tracking-widest">Mobile Number</label>
                           <input name="phone" required type="tel" className="w-full bg-slate-50 dark:bg-slate-800 p-5 rounded-2xl focus:ring-1 focus:ring-brand outline-none border-none dark:text-white" placeholder="+91 99XXXXXXX" />
                        </div>
                     </div>
                     <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                           <label className="text-[10px] font-black uppercase text-slate-400 ml-4 tracking-widest">Ride ID / Reference</label>
                           <input name="rideId" type="text" className="w-full bg-slate-50 dark:bg-slate-800 p-5 rounded-2xl focus:ring-1 focus:ring-brand outline-none border-none dark:text-white" placeholder="SPD-102938" />
                        </div>
                        <div className="space-y-2">
                           <label className="text-[10px] font-black uppercase text-slate-400 ml-4 tracking-widest">Complaint Type</label>
                           <select name="category" required className="w-full bg-slate-50 dark:bg-slate-800 p-5 rounded-2xl outline-none border-none dark:text-white appearance-none">
                              <option value="">Select Category</option>
                              <option>Pricing Dispute</option>
                              <option>Driver Behavior</option>
                              <option>Technical Error</option>
                              <option>Vehicle Maintenance</option>
                           </select>
                        </div>
                     </div>
                     <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase text-slate-400 ml-4 tracking-widest">Incident Details</label>
                        <textarea name="details" required rows={5} className="w-full bg-slate-50 dark:bg-slate-800 p-5 rounded-2xl focus:ring-1 focus:ring-brand outline-none border-none dark:text-white" placeholder="Please provide specific details about the issue..." />
                     </div>
                     <button type="submit" className="w-full py-6 bg-slate-900 dark:bg-brand text-white rounded-3xl font-black text-lg shadow-2xl hover:brightness-110 transition-all flex items-center justify-center space-x-3 disabled:opacity-50">
                        <Send className="w-6 h-6" />
                        <span>Lodge Secure Complaint</span>
                     </button>
                     <p className="text-center text-[10px] text-slate-400 font-bold">Encrypted & Permanently Logged for Quality Assurance</p>
                  </form>
               </div>
            </div>
        </div>
      </div>
    </div>
  );
};
