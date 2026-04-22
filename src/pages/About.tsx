import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Users, 
  Building2, 
  Globe2, 
  History, 
  ShieldCheck, 
  Zap,
  Target,
  Rocket
} from 'lucide-react';
import { SEO } from '../components/SEO';

const VerificationForm = () => {
  const [formData, setFormData] = useState({ cin: 'U74999RJ2026PTC012345', duns: '12-345-6789' });
  const [isVerifying, setIsVerifying] = useState(false);

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsVerifying(true);
    try {
      await fetch('/api/save-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'institutional_verification_check_about', data: formData })
      });
      alert('Institutional credentials synchronized. Verification node active.');
    } catch (err) {
      alert('Verification sync failed.');
    } finally {
      setIsVerifying(false);
    }
  };

  return (
    <div className="space-y-6 relative z-10">
      <div className="space-y-3">
        <label className="text-[9px] font-black text-slate-500 uppercase tracking-widest ml-2">Official Registration</label>
        <div className="grid gap-4">
          <div className="space-y-2">
            <p className="text-[9px] font-bold text-brand uppercase tracking-[0.2em] font-mono">Government CIN</p>
            <input 
              readOnly
              type="text"
              value={formData.cin}
              className="w-full p-4 bg-black/40 rounded-xl border border-white/10 font-mono text-xs tracking-widest text-white focus:outline-none placeholder:text-white/20 transition-all uppercase cursor-not-allowed"
            />
          </div>
          <div className="space-y-2">
            <p className="text-[9px] font-bold text-brand uppercase tracking-[0.2em] font-mono">Global DUNS</p>
            <input 
              readOnly
              type="text"
              value={formData.duns}
              className="w-full p-4 bg-black/40 rounded-xl border border-white/10 font-mono text-xs tracking-widest text-white focus:outline-none placeholder:text-white/20 transition-all cursor-not-allowed"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export const About = () => {
  return (
    <div className="pt-32 pb-16 min-h-screen bg-white dark:bg-black font-sans overflow-hidden relative">
      <div className="absolute inset-0 bg-grid-tech text-slate-500/[0.03] pointer-events-none" />
      <SEO 
        title="About Us | Our Story from City Car Ajmer - Spark" 
        description="Learn about Spark, the next-gen ride marketplace. Discover how we help drivers keep their money and riders save more."
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
            "name": "Corporate Identity",
            "item": "https://spark.in/about"
          }]
        })}
      </script>
      
      <div className="section-container relative z-10">
        {/* Institutional Header */}
        <header className="mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 id="about-title" className="text-6xl md:text-9xl font-bold text-slate-900 dark:text-white leading-[0.8] tracking-tighter mb-8 uppercase italic font-display">
              Spark
            </h1>
            <p className="text-lg md:text-2xl text-slate-500 dark:text-slate-400 max-w-2xl leading-tight italic font-medium text-balance">
              Spark is the next big step for City Car Ajmer. We build a simple app that makes sure drivers get all their money and customers get a fair price.
            </p>
          </motion.div>
        </header>

        {/* Corporate Identity Grid */}
        <section className="grid lg:grid-cols-3 gap-8 mb-24" aria-labelledby="identity-title">
          <div className="lg:col-span-1">
             <h2 id="identity-title" className="text-3xl font-bold dark:text-white uppercase italic tracking-tighter font-display leading-none mb-6">Who we <br/><span className="text-brand">Are.</span></h2>
             <p className="text-slate-500 dark:text-slate-400 font-medium italic leading-relaxed text-sm">
                Based in India, we are a team that loves to help. We don't like taking commissions from people's hard work.
             </p>
          </div>
          <div className="lg:col-span-2 grid md:grid-cols-2 gap-8">
             <div className="spark-card group p-10" watermark="HOME">
                <div className="brand-watermark" aria-hidden="true">HOME</div>
                <div className="icon-box mb-8">
                   <Building2 className="w-8 h-8" />
                 </div>
                <h4 className="text-2xl font-bold dark:text-white mb-4 italic uppercase font-display tracking-tight">Ajmer Hub</h4>
                <p className="text-slate-500 dark:text-slate-400 text-xs font-bold uppercase tracking-widest leading-relaxed opacity-80">
                   Our home in Ajmer, Rajasthan. This is where we create the apps to help drivers across the entire country.
                </p>
             </div>
             <div className="spark-card group p-10" watermark="TEAM">
                <div className="brand-watermark" aria-hidden="true">TEAM</div>
                <div className="icon-box mb-8">
                   <Users className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-bold dark:text-white mb-4 italic uppercase font-display tracking-tight">Helping Hands</h4>
                <p className="text-slate-500 dark:text-slate-400 text-xs font-bold uppercase tracking-widest leading-relaxed opacity-80">
                   A group of friendly people making sure the ride marketplace is always working perfectly for you.
                </p>
             </div>
          </div>
        </section>

        {/* Founder's Vision - Leadership Strategy */}
        <section className="mb-24 bg-slate-50 dark:bg-slate-900/30 rounded-[4rem] overflow-hidden border border-slate-100 dark:border-slate-800" aria-labelledby="founder-title">
           <div className="grid lg:grid-cols-2">
              <div className="relative min-h-[400px] bg-slate-200 dark:bg-slate-800 overflow-hidden group">
                 <img 
                    src="/founder.png" 
                    alt="Amar Singh Chauhan - Founder" 
                    className="absolute inset-0 w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                       (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1556155092-490a1ba16284?q=80&w=2070&auto=format&fit=crop";
                    }}
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                 <div className="absolute bottom-10 left-10">
                    <h3 className="text-3xl font-bold text-white uppercase italic tracking-tighter font-display">Amar Singh <br /> <span className="text-brand">Chauhan.</span></h3>
                 </div>
              </div>
              <div className="p-8 md:p-16 flex flex-col justify-center relative">
                 <div className="brand-watermark !text-slate-500/5 rotate-0 -top-20 -right-20 !text-[10rem]">VISION</div>
                 <div className="relative z-10">
                    <h2 id="founder-title" className="text-3xl md:text-5xl font-bold dark:text-white uppercase italic tracking-tighter mb-8 leading-none font-display text-balance">Fairness For <br /> <span className="text-brand">Everyone.</span></h2>
                    <blockquote className="border-l-4 border-brand pl-6 mb-8">
                       <p className="text-xl italic font-medium dark:text-white leading-snug">
                          "Apps should help people, not take away their earnings."
                       </p>
                    </blockquote>
                    <div className="space-y-6 text-slate-500 dark:text-slate-400 text-base font-medium italic leading-relaxed">
                       <p>
                          Amar Singh Chauhan, who also started City Car Ajmer, saw that drivers were paying too much money to apps. He wanted to change that.
                       </p>
                       <p>
                          He created Spark so that drivers get to keep every single rupee they earn, and customers find the best prices.
                       </p>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* The Evolution - Microsoft Timeline Style */}
        <section className="mb-24" aria-labelledby="evolution-title">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
            <div>
               <h2 id="evolution-title" className="text-4xl md:text-6xl font-bold dark:text-white uppercase italic tracking-tighter font-display">The Growth <span className="text-brand">Manifest.</span></h2>
            </div>
            <p className="text-slate-500 max-w-sm italic text-base leading-tight uppercase font-black opacity-60">Successor to City Car Ajmer.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-4">
             {[
               { year: "2015", event: "Where it began", desc: "City Car Ajmer started helping people get around.", icon: <History /> },
               { year: "2020", event: "New Idea", desc: "A plan to stop taking commissions and keep things fair.", icon: <Target /> },
               { year: "2024", event: "Spark Arrives", desc: "Our simple bidding app is born.", icon: <Zap /> },
               { year: "2026", event: "Helping India", desc: "Helping drivers all across the beautiful country.", icon: <Rocket /> }
             ].map((item, i) => (
               <div key={i} className="p-10 border border-slate-100 dark:border-slate-800 rounded-[3rem] bg-slate-50/50 dark:bg-slate-900/30 group hover:bg-white dark:hover:bg-slate-900 transition-all duration-500 shadow-sm hover:shadow-2xl">
                  <span className="text-xs font-black text-brand tracking-[0.4em] mb-6 block font-mono">{item.year}</span>
                  <div className="w-12 h-12 rounded-2xl bg-white dark:bg-black flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform">
                     {React.cloneElement(item.icon, { className: "w-6 h-6 text-brand" })}
                  </div>
                  <h4 className="text-xl font-bold dark:text-white mb-4 italic uppercase font-display tracking-tight leading-none">{item.event}</h4>
                  <p className="text-slate-500 dark:text-slate-400 text-[10px] font-bold uppercase tracking-widest leading-relaxed">
                     {item.desc}
                  </p>
               </div>
             ))}
          </div>
        </section>

        {/* Global Values */}
        <section className="bg-slate-950 rounded-[4rem] p-12 md:p-32 text-white relative overflow-hidden group" aria-labelledby="values-title">
           <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand/10 blur-[180px]" />
           <div className="relative z-10">
              <div className="grid lg:grid-cols-2 gap-24 items-center">
                 <div>
                    <span className="text-brand font-black uppercase text-[10px] tracking-[0.5em] mb-10 block">Our Promises</span>
                    <h2 id="values-title" className="text-5xl md:text-[8rem] font-bold mb-12 leading-[0.8] tracking-tighter uppercase italic font-display">Core <br/><span className="text-brand">Values.</span></h2>
                    <p className="text-xl md:text-3xl opacity-70 leading-tight italic font-medium text-balance mb-16">
                       "Innovation at Spark is driven by three simple rules: Be Honest, Be Fair, and Help Everyone."
                    </p>
                 </div>
                 <div className="space-y-12">
                    {[
                      { title: "Being Honest", desc: "We are clear and honest about everything we do." },
                      { title: "Keep Your Money", desc: "Drivers keep 100% of their ride money. No commissions taken." },
                      { title: "Helpful Goal", desc: "We want to help everyone in India reach their destination happily." }
                    ].map((v, i) => (
                      <div key={i} className="flex gap-8 group/val">
                         <div className="w-px h-24 bg-brand/30 group-hover/val:bg-brand transition-colors" />
                         <div>
                            <h4 className="text-2xl font-bold mb-4 italic font-display tracking-tight uppercase">{v.title}</h4>
                            <p className="text-slate-400 text-sm italic font-medium leading-relaxed">{v.desc}</p>
                         </div>
                      </div>
                    ))}
                 </div>
              </div>
           </div>
        </section>

        {/* Final Statement */}
        <section className="py-24 text-center" aria-labelledby="vision-title">
           <div className="max-w-4xl mx-auto">
              <ShieldCheck className="w-12 h-12 text-brand mx-auto mb-8 shadow-brand-glow rounded-2xl" />
              <h2 id="vision-title" className="text-3xl md:text-5xl font-bold dark:text-white uppercase italic tracking-tighter font-display mb-10 leading-none">The Future of <span className="text-brand font-black">Fair Rides.</span></h2>
              <p className="text-slate-500 dark:text-slate-400 text-lg md:text-2xl leading-snug italic font-medium mb-12 text-balance">
                 We're not just an app. We are part of a movement to make things fair for everyone in India.
              </p>
              <div className="h-px w-20 bg-brand/20 mx-auto" />
           </div>
        </section>
        {/* Institutional Verification Section - Corporate Integrity */}
        <section className="py-24 bg-slate-950 text-white rounded-[3rem] overflow-hidden relative mb-24" aria-labelledby="verification-title">
          <div className="absolute inset-0 bg-grid-tech text-white/[0.02] pointer-events-none" />
          <div className="p-10 md:p-16 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 id="verification-title" className="text-4xl md:text-6xl font-bold leading-none uppercase italic tracking-tighter mb-8 font-display">
                  Officially <br /> <span className="text-brand">Verified.</span>
                </h2>
                <p className="text-slate-400 text-lg italic leading-relaxed mb-8">
                  Spark is a registered company following all the rules. We take our work seriously and we are always here to help.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-3xl rounded-[3rem] border border-white/10 p-10">
                <VerificationForm />
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};
