import { motion } from 'motion/react';
import { Target, TrendingUp, Users, Heart, Award, ShieldCheck, Zap, Globe, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

import { SEO } from '../components/SEO';

export const Mission = () => {
  return (
    <div className="pt-48 pb-24 min-h-screen bg-white dark:bg-black font-sans overflow-hidden relative">
      <div className="absolute inset-0 bg-grid-tech text-slate-500/[0.03] pointer-events-none" />
      <SEO 
        title="Our Mission | Making Things Fair - Spark" 
        description="The Spark Mission: Making rides fair for everyone in India. We help drivers keep their hard-earned money."
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
            "name": "Our Mission",
            "item": "https://spark.in/mission"
          }]
        })}
      </script>
      <div className="section-container relative z-10">
        <header className="text-center mb-32">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-[10px] font-black text-brand uppercase tracking-[0.6em] mb-10 block font-mono">Our Promise</span>
            <h1 id="mission-title" className="text-6xl md:text-[9rem] font-bold text-slate-900 dark:text-white leading-[0.8] tracking-tighter mb-16 uppercase italic font-display">
              Freedom <br />
              <span className="text-brand">to Earn.</span>
            </h1>
            <p className="text-xl md:text-3xl text-slate-500 dark:text-slate-400 max-w-4xl mx-auto leading-tight italic font-medium text-balance">
              "We believe getting around should be fair for everyone. We are building a simple app where drivers keep 100% of the money they earn, and customers get the best prices directly."
            </p>
          </motion.div>
        </header>

        <section className="grid lg:grid-cols-2 gap-24 items-center mb-48" aria-labelledby="replacement-title">
           <div className="relative">
              <div className="absolute -inset-10 bg-brand/10 rounded-[5rem] blur-[100px] pointer-events-none" />
              <div className="aspect-square bg-slate-50 dark:bg-slate-900/50 rounded-[4rem] flex items-center justify-center p-12 md:p-16 border border-slate-100 dark:border-slate-800 shadow-premium relative overflow-hidden group/stage">
                 <div className="brand-watermark !text-[12rem] -bottom-10 -right-10 opacity-20" aria-hidden="true">SPR-K</div>
                 <div className="grid grid-cols-2 gap-8 md:gap-10 w-full relative z-10 font-display">
                    <div className="bg-white dark:bg-black p-8 md:p-12 rounded-[2rem] shadow-2xl flex flex-col items-center group/stat transition-all hover:-translate-y-2 hover:shadow-brand-glow">
                       <span className="text-5xl md:text-7xl font-bold text-brand mb-4 tracking-tighter italic">0%</span>
                       <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em] text-center">Commission Taken</span>
                    </div>
                    <div className="bg-slate-950 p-8 md:p-12 rounded-[2rem] shadow-2xl flex flex-col items-center translate-y-12 md:translate-y-16 group/stat transition-all hover:-translate-y-2 hover:shadow-white/10">
                       <span className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tighter italic">Always</span>
                       <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.4em] text-center">Support</span>
                    </div>
                    <div className="bg-white dark:bg-black p-8 md:p-12 rounded-[2rem] shadow-2xl flex flex-col items-center group/stat transition-all hover:-translate-y-2 hover:shadow-brand-glow">
                       <span className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white mb-4 tracking-tighter italic">Direct</span>
                       <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em] text-center">Bidding</span>
                    </div>
                    <div className="bg-brand p-8 md:p-12 rounded-[2rem] shadow-2xl flex flex-col items-center translate-y-12 md:translate-y-16 group/stat transition-all hover:-translate-y-2 hover:shadow-brand-glow">
                       <span className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tighter italic">24/7</span>
                       <span className="text-[10px] font-black text-white/50 uppercase tracking-[0.4em] text-center">Online</span>
                    </div>
                 </div>
              </div>
           </div>
           <div>
               <h2 id="replacement-title" className="text-5xl md:text-7xl font-bold dark:text-white mb-12 leading-[0.9] tracking-tighter uppercase italic font-display">Making Things <br /> <span className="text-brand">Fair.</span></h2>
              <div className="space-y-6">
                 <div className="spark-card group" watermark="HELP">
                    <div className="brand-watermark" aria-hidden="true">HELP</div>
                    <div className="flex items-start gap-8">
                       <div className="icon-box flex-shrink-0">
                          <Heart className="w-8 h-8" />
                       </div>
                       <div>
                          <h4 className="text-2xl font-bold dark:text-white mb-4 italic uppercase font-display tracking-tight leading-none">Helping India</h4>
                          <p className="text-slate-500 dark:text-slate-400 text-base leading-relaxed font-medium italic">
                             We built this app to help every driver and rider in India. We want to show that technology can be a friendly helping hand, not something that takes your money away.
                          </p>
                       </div>
                    </div>
                 </div>
                 <div className="spark-card group" watermark="SAFE">
                    <div className="brand-watermark" aria-hidden="true">SAFE</div>
                    <div className="flex items-start gap-8">
                       <div className="icon-box flex-shrink-0">
                          <ShieldCheck className="w-8 h-8" />
                       </div>
                       <div>
                          <h4 className="text-2xl font-bold dark:text-white mb-4 italic uppercase font-display tracking-tight leading-none">Building the Future</h4>
                          <p className="text-slate-500 dark:text-slate-400 text-base leading-relaxed font-medium italic">
                             Spark is a team work. We don't want to be a big boss. We want to help everyone grow together and make sure the future of rides in India is safe and happy for everyone.
                          </p>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        <section className="bg-slate-950 rounded-[3rem] md:rounded-[5rem] p-10 md:p-24 text-white relative overflow-hidden group border border-white/5 shadow-2xl" aria-labelledby="legacy-title">
           <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand/10 blur-[150px] transition-transform group-hover:scale-110" />
           <div className="relative z-10 max-w-5xl">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-brand/10 rounded-3xl flex items-center justify-center mb-12">
                <Zap className="w-8 h-8 md:w-10 md:h-10 text-brand" />
              </div>
              <h2 id="legacy-title" className="text-5xl md:text-[7rem] font-bold mb-12 leading-[0.85] tracking-tighter uppercase italic font-display">Our Roots in <br /> <span className="text-brand">Ajmer.</span></h2>
              <p className="text-xl md:text-3xl opacity-80 leading-tight mb-16 font-medium italic text-balance">
                We started with City Car Ajmer and learned how to help people for over 10 years. Spark is how we take those lessons and help all of India.
              </p>
              <Link to="/contact" className="px-14 py-6 bg-brand text-white rounded-2xl font-black uppercase tracking-widest text-xs hover:shadow-brand-glow hover:-translate-y-1 transition-all inline-block shadow-lg">Join Us</Link>
           </div>
        </section>
      </div>
    </div>
  );
};
