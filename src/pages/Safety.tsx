import { motion } from 'motion/react';
import { ShieldAlert, ShieldCheck, Lock, Eye, Bell, PhoneCall, Heart, MapPin, CheckCircle2 } from 'lucide-react';

import { SEO } from '../components/SEO';

export const Safety = () => {
  return (
    <div className="pt-48 pb-24 min-h-screen bg-white dark:bg-black overflow-hidden relative font-sans">
      <div className="absolute inset-0 bg-grid-tech text-slate-500/[0.03] pointer-events-none" />
      <SEO 
        title="Safety Architecture | Protocol Verification Node - Spark Safety" 
        description="Our foundational infrastructure is built on absolute security. Discover Spark's Zero Trust identity node and real-time ride telemetry across Rajasthan hubs."
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
            "name": "Safety Center",
            "item": "https://spark.in/safety"
          }]
        })}
      </script>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <header className="text-center mb-32">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-[10px] font-black text-red-500 uppercase tracking-[0.6em] mb-8 block">Safety Architecture</span>
            <h1 id="safety-title" className="text-6xl md:text-[8rem] font-black text-slate-900 dark:text-white leading-[0.8] tracking-tighter mb-16 uppercase italic">
              Absolute <br />
              <span className="text-red-500">Security.</span>
            </h1>
            <p className="text-2xl md:text-3xl text-slate-600 dark:text-slate-400 max-w-4xl mx-auto leading-tight italic font-medium">
              "Safety is not merely a feature within our ecosystem; it is our foundational infrastructure. We architect every single mile to be protected by real-time intelligence and distributed verification nodes."
            </p>
          </motion.div>
        </header>

        <section className="grid lg:grid-cols-3 gap-10 mb-32" aria-label="Core Safety Protocols">
           {[
             { title: "Identity Rigor", icon: <Lock />, desc: "Every participant undergoes a multi-layer verification process, including government ID and biometric synchronization.", watermark: "ID" },
             { title: "Bidding Integrity", icon: <ShieldCheck />, desc: "Our marketplace algorithms flag abnormal bidding patterns to prevent fraud or price manipulation in real-time.", watermark: "MARK" },
             { title: "Real-time Ops", icon: <Eye />, desc: "Every ride is tracked via low-latency cloud nodes, providing instant geolocation for emergency response coordination.", watermark: "LIVE" }
           ].map((item, i) => (
             <div key={i} className="spark-card group" watermark={item.watermark}>
                <div className="brand-watermark" aria-hidden="true">{item.watermark}</div>
                <div className="icon-box !bg-red-500/10 !text-red-500 mb-10 group-hover:!bg-red-500 group-hover:!text-white transition-all">
                   {item.icon}
                </div>
                <h3 className="text-3xl font-black dark:text-white mb-6 italic uppercase tracking-tighter font-display leading-none">{item.title}</h3>
                <p className="text-slate-500 dark:text-slate-400 leading-snug text-lg italic font-medium">
                   {item.desc}
                </p>
             </div>
           ))}
        </section>

        {/* Feature Grid - Bento Style */}
        <div className="grid md:grid-cols-3 gap-10 mb-32" aria-labelledby="emergency-title">
           <div className="md:col-span-2 spark-card !bg-slate-900 !border-none text-white relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-96 h-96 bg-brand/10 blur-[150px] group-hover:bg-brand/20 transition-colors pointer-events-none" />
              <div className="brand-watermark !text-white/5 !text-[15rem] -bottom-20 -right-20" aria-hidden="true">EMRG</div>
              <div className="relative z-10 flex flex-col h-full justify-between p-4">
                 <div>
                    <h3 id="emergency-title" className="text-5xl font-black mb-8 flex items-center gap-6 italic uppercase tracking-tighter font-display">
                       <div className="icon-box !bg-brand !text-white !p-0 !w-14 !h-14 flex items-center justify-center shadow-brand-glow">
                          <PhoneCall className="w-6 h-6" />
                       </div> Emergency Hub
                    </h3>
                    <p className="text-slate-400 max-w-xl mb-16 leading-tight text-xl italic font-medium">
                       Our dedicated 24/7 Rapid Response Team monitors the network in real-time. At the press of an emergency button, local police services and medical responders are dispatched instantly with hyper-accurate geolocation data for immediate intervention.
                    </p>
                 </div>
                 <div className="grid grid-cols-2 gap-12 border-t border-white/5 pt-12">
                    <div className="flex flex-col gap-2">
                       <span className="text-5xl font-black text-brand tracking-tighter italic font-display leading-none">0.8s</span>
                       <span className="text-[10px] font-black uppercase text-slate-500 tracking-[0.5em] font-mono">Alert Latency</span>
                    </div>
                    <div className="flex flex-col gap-2">
                       <span className="text-5xl font-black text-brand tracking-tighter italic font-display leading-none">Active</span>
                       <span className="text-[10px] font-black uppercase text-slate-500 tracking-[0.5em] font-mono">State Readiness</span>
                    </div>
                 </div>
              </div>
           </div>
           <div className="spark-card !bg-brand !border-none text-white flex flex-col justify-end relative overflow-hidden group" aria-labelledby="pin-title">
              <div className="brand-watermark !text-black/5 !text-[15rem] -top-20 -left-20 group-hover:text-black/10 transition-colors" aria-hidden="true">PIN</div>
              <div className="relative z-10">
                 <div className="icon-box !bg-black/10 !text-black !shadow-none mb-12 !w-24 !h-24">
                    <Bell className="w-10 h-10 opacity-40 group-hover:opacity-100 transition-opacity" />
                 </div>
                 <h3 id="pin-title" className="text-4xl font-black mb-6 italic uppercase tracking-tighter text-black font-display leading-none">Safety Pin.</h3>
                 <p className="text-black/60 text-lg font-bold leading-snug uppercase tracking-tight italic">
                   Verified ride matching using 4-digit unique cryptographic codes for every single transaction.
                 </p>
              </div>
           </div>
        </div>

        {/* Localized Safety */}
        <section className="py-32 bg-slate-50 dark:bg-slate-950 rounded-[5rem] border border-slate-100 dark:border-slate-800 relative z-10 overflow-hidden" aria-labelledby="localized-title">
           <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand/5 blur-[150px] pointer-events-none" />
           <div className="section-container">
              <div className="grid lg:grid-cols-2 gap-24 items-center">
                 <div>
                    <h2 id="localized-title" className="text-5xl md:text-8xl font-black mb-12 leading-[0.8] tracking-tighter uppercase italic">Trust Built <br /> in <span className="text-brand underline decoration-8 underline-offset-8">Bharat.</span></h2>
                    <p className="text-slate-600 dark:text-slate-400 mb-12 text-2xl leading-tight font-medium italic">
                      "We foster trust by partnering directly with State Authorities and Local Police Departments to synchronize our emergency response protocols with established regional rescue infrastructure for maximum safety."
                    </p>
                    <div className="grid grid-cols-2 gap-12">
                       <div className="flex flex-col">
                          <span className="text-5xl font-black text-slate-900 dark:text-white tracking-tighter italic">100%</span>
                          <span className="text-[10px] uppercase font-black text-brand tracking-[0.4em]">Tracking Force</span>
                       </div>
                       <div className="flex flex-col">
                          <span className="text-5xl font-black text-slate-900 dark:text-white tracking-tighter italic">Govt.</span>
                          <span className="text-[10px] uppercase font-black text-brand tracking-[0.4em]">API Integrated</span>
                       </div>
                    </div>
                 </div>
                 <div className="relative aspect-square rounded-[4rem] overflow-hidden">
                    <img src="https://picsum.photos/seed/safety-corporate/1000/1000" alt="Safety Control Room" className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-1000" referrerPolicy="no-referrer" />
                    <div className="absolute inset-0 bg-brand/10 opacity-30 pointer-events-none" />
                 </div>
              </div>
           </div>
        </section>
      </div>
    </div>
  );
};
