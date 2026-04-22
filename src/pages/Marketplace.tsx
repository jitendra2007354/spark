import { motion } from 'motion/react';
import { ArrowRightLeft, CreditCard, Smartphone, ShieldCheck, TrendingUp, Users, Zap, CheckCircle2, X, Globe } from 'lucide-react';

import { SEO } from '../components/SEO';

export const Marketplace = () => {
  return (
    <div className="pt-48 pb-24 min-h-screen bg-white dark:bg-black overflow-hidden relative font-sans">
      <div className="absolute inset-0 bg-grid-tech text-slate-500/[0.03] pointer-events-none" />
      <SEO 
        title="Fair Bidding Marketplace | How it Works - Spark India" 
        description="Explore the Spark bidding system. A fair, direct ride marketplace in India where drivers keep 100% of the money. Successor to City Car Ajmer."
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
            "name": "Marketplace Protocol",
            "item": "https://spark.in/marketplace"
          }]
        })}
      </script>
      <div className="section-container relative z-10">
        <header className="mb-24 text-center md:text-left">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-[10px] font-black text-brand uppercase tracking-[0.6em] mb-10 block font-mono bg-brand/10 w-fit px-3 py-1 rounded-full mx-auto md:mx-0">How Spark Works</span>
            <h1 id="landing-title" className="text-6xl md:text-[8rem] font-bold text-slate-900 dark:text-white leading-[0.8] tracking-tighter mb-16 uppercase italic font-display">
              The Bidding <br />
              <span className="text-brand">Marketplace.</span>
            </h1>
            <p className="text-xl md:text-3xl text-slate-500 dark:text-slate-400 max-w-4xl leading-tight italic font-medium text-balance">
              Spark is building a fair ride marketplace for all of India. By letting people talk directly and agree on a price, we make sure everyone is happy and nobody has to pay hidden fees.
            </p>
          </motion.div>
        </header>

        <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
          <section className="space-y-10" aria-label="Core Marketplace Features">
            <div className="spark-card group" watermark="SYNC">
              <div className="brand-watermark" aria-hidden="true">SYNC</div>
              <div className="flex gap-10 items-start">
                <div className="icon-box flex-shrink-0">
                  <ArrowRightLeft className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold dark:text-white mb-4 italic uppercase tracking-tighter font-display leading-none">Fast and Direct</h3>
                  <p className="text-slate-500 dark:text-slate-400 leading-snug text-lg italic font-medium">
                    Our system lets you talk directly to drivers or riders in real-time. There are no middle-men or complicated rules, just simple conversations that happen in a split second.
                  </p>
                </div>
              </div>
            </div>
            <div className="spark-card group" watermark="SAVE">
              <div className="brand-watermark" aria-hidden="true">SAVE</div>
              <div className="flex gap-10 items-start">
                <div className="icon-box flex-shrink-0">
                  <CreditCard className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold dark:text-white mb-4 italic uppercase tracking-tighter font-display leading-none">Keep All Your Money</h3>
                  <p className="text-slate-500 dark:text-slate-400 leading-snug text-lg italic font-medium">
                    We only take a small, simple daily fee. This means drivers get to keep 100% of the money from the ride. This is much better than old apps that take a big chunk of your hard work.
                  </p>
                </div>
              </div>
            </div>
          </section>
          
          <div className="relative">
             <div className="absolute -inset-10 bg-brand/20 rounded-[4rem] blur-[80px] pointer-events-none opacity-50" />
             <div className="relative spark-card group/mock">
                <div className="brand-watermark !text-8xl !-bottom-8 !-right-8 group-hover/mock:text-brand transition-colors">PROTO</div>
                <div className="space-y-6 relative z-10">
                   <div className="flex justify-between items-center bg-white dark:bg-black p-8 rounded-[2rem] border border-slate-100 dark:border-slate-800 shadow-xl transition-transform hover:scale-[1.02] cursor-default group/item">
                      <div className="flex items-center gap-6">
                         <div className="w-14 h-14 bg-brand rounded-2xl flex items-center justify-center font-black text-white shadow-lg group-hover/item:rotate-12 transition-transform">R</div>
                         <div>
                            <p className="text-lg font-bold dark:text-white italic uppercase font-display leading-tight">Rahul S.</p>
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest font-mono">AJM_SOUTH • 4.9★</p>
                         </div>
                      </div>
                      <div className="text-right">
                         <p className="text-brand font-black text-3xl italic tracking-tighter">₹120</p>
                         <button className="text-[9px] bg-brand text-white px-6 py-2.5 rounded-full uppercase font-black tracking-widest mt-3 hover:shadow-brand-glow hover:scale-105 transition-all">Select</button>
                      </div>
                   </div>
                   <div className="flex justify-between items-center bg-white dark:bg-black p-8 rounded-[2rem] border border-brand/40 shadow-2xl scale-105 relative z-10 transition-transform hover:scale-[1.07] cursor-default group/item">
                      <div className="flex items-center gap-6">
                         <div className="w-14 h-14 bg-slate-900 dark:bg-slate-700 rounded-2xl flex items-center justify-center font-black text-white shadow-lg group-hover/item:rotate-12 transition-transform">A</div>
                         <div>
                            <p className="text-lg font-bold dark:text-white italic uppercase font-display leading-tight">Amit K.</p>
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest font-mono">AJM_CENTER • 4.8★</p>
                         </div>
                      </div>
                      <div className="text-right">
                         <p className="text-brand font-black text-3xl italic tracking-tighter">₹145</p>
                         <button className="text-[9px] bg-brand text-white px-6 py-2.5 rounded-full uppercase font-black tracking-widest mt-3 hover:shadow-brand-glow hover:scale-105 transition-all">Select</button>
                      </div>
                   </div>
                   <p className="text-center text-[10px] text-slate-400 uppercase tracking-[0.8em] font-black pt-10 opacity-40">Direct Real-time Bidding</p>
                </div>
             </div>
          </div>
        </div>

        <section className="py-48 bg-slate-50 dark:bg-slate-950 rounded-[4rem] border border-slate-100 dark:border-slate-800 px-8 md:px-24 mb-32 shadow-xl relative overflow-hidden group" aria-labelledby="vs-title">
           <div className="brand-watermark !text-[15rem] -top-20 -left-20 opacity-10 group-hover:text-brand transition-colors" aria-hidden="true">VERSUS</div>
           <div className="max-w-5xl mx-auto relative z-10">
              <div className="text-center mb-24">
                 <h2 id="vs-title" className="text-4xl md:text-7xl font-bold dark:text-white mb-6 italic uppercase tracking-tighter font-display leading-[0.8]">Old Apps vs <br /><span className="text-brand">Spark.</span></h2>
                 <p className="text-brand text-[10px] font-black italic uppercase tracking-[0.5em] bg-brand/5 inline-block px-6 py-2 rounded-full border border-brand/10">A Fairer Way to Move</p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-20">
                 <div className="space-y-10">
                    <h4 className="text-[10px] font-black uppercase tracking-[0.6em] text-slate-400 mb-12 border-b border-slate-100 dark:border-slate-900 pb-4">Extractive Old Ways</h4>
                    <div className="space-y-8">
                       {[
                         "Prices set by machines",
                         "Apps take 30% of your money",
                         "Unfair penalties for drivers",
                         "Rigid and hard rules"
                       ].map((item, i) => (
                         <div key={i} className="flex items-center gap-6 group/item">
                            <div className="w-12 h-12 rounded-2xl bg-red-500/5 text-red-500 flex items-center justify-center flex-shrink-0 group-hover/item:bg-red-500 group-hover/item:text-white transition-all duration-300">
                               <X className="w-6 h-6" />
                            </div>
                            <span className="text-slate-500 font-bold italic uppercase text-xs tracking-[0.2em] opacity-80 group-hover/item:opacity-100 transition-opacity">{item}</span>
                         </div>
                       ))}
                    </div>
                 </div>
                 <div className="space-y-10">
                    <h4 className="text-[10px] font-black uppercase tracking-[0.6em] text-brand mb-12 border-b border-brand/10 pb-4">Spark Marketplace</h4>
                    <div className="space-y-8">
                       {[
                         "You agree on the price",
                         "Small daily fee only",
                         "Fair results for everyone",
                         "100% Freedom to choose"
                       ].map((item, i) => (
                         <div key={i} className="flex items-center gap-6 group/item">
                            <div className="w-12 h-12 rounded-2xl bg-brand/10 text-brand flex-shrink-0 flex items-center justify-center group-hover/item:bg-brand group-hover/item:text-white transition-all duration-300 shadow-brand-glow">
                               <CheckCircle2 className="w-6 h-6" />
                            </div>
                            <span className="dark:text-white font-black italic uppercase text-xs tracking-[0.2em] group-hover/item:text-brand transition-colors">{item}</span>
                         </div>
                       ))}
                    </div>
                 </div>
              </div>
           </div>
                </section>

        {/* Detailed Economics - Microsoft Enterprise Deck Style */}
        <section className="py-32 grid lg:grid-cols-3 gap-10" aria-labelledby="economics-title">
           <div className="spark-card group" watermark="FAIR">
              <div className="brand-watermark" aria-hidden="true">FAIR</div>
              <h4 id="economics-title" className="text-[10px] font-black text-brand uppercase tracking-[0.6em] mb-10 block">How We Stay Fair</h4>
              <h3 className="text-3xl font-bold dark:text-white italic uppercase tracking-tighter mb-8 font-display leading-[0.9]">Helping <br/> India Grow.</h3>
              <p className="text-slate-500 dark:text-slate-400 text-base leading-snug mb-16 font-medium italic">
                Spark uses a simple system where everyone contributes a little bit to keep the app running. This keeps everything fair and means nobody has to deal with hidden costs. This way, we can help people in cities all over India reach their destination while keeping the system fast and easy to use.
              </p>
              <div className="h-px bg-slate-100 dark:bg-slate-800 mb-10" />
              <div className="flex justify-between items-center text-[10px] font-black text-slate-400 uppercase tracking-[0.5em]">
                 <span>System Style</span>
                 <span className="text-brand">Self-Sustaining Help</span>
              </div>
           </div>
           <div className="lg:col-span-2 spark-card !p-0 bg-slate-900 border-none group overflow-hidden" aria-labelledby="cloud-title">
              <div className="absolute top-0 left-0 w-full h-full bg-[url('https://picsum.photos/seed/tech/1200/600')] bg-cover opacity-[0.05] grayscale transition-opacity group-hover:opacity-10" />
              <div className="brand-watermark !text-white/5 !text-[15rem] -bottom-20 -right-20" aria-hidden="true">INFRA</div>
              <div className="relative z-10 flex flex-col xl:flex-row gap-16 h-full items-stretch p-12">
                 <div className="flex-1 flex flex-col justify-center">
                    <h4 className="text-[10px] font-black text-brand uppercase tracking-[0.6em] mb-10">Fast Technology</h4>
                    <h3 id="cloud-title" className="text-4xl lg:text-7xl font-bold italic uppercase tracking-tighter mb-10 font-display leading-[0.9] text-white">Smart & Fast <br/> Tech Hubs.</h3>
                    <p className="text-slate-300 text-lg leading-relaxed italic mb-12 font-medium max-w-2xl">
                       Our technology is spread all over India to make sure the app is super fast. This smart design means that when you bid, it happens almost instantly, no matter how many people are using the app. This makes sure everything feels smooth and works every time.
                    </p>
                    <div className="flex flex-wrap gap-12">
                       <div className="flex items-center gap-6 group/item">
                          <div className="icon-box bg-white/5 text-brand shadow-none scale-75">
                             <Zap className="group-hover/item:animate-pulse" />
                          </div>
                          <span className="text-[10px] font-black uppercase tracking-[0.5em] text-white/70">Super Fast</span>
                       </div>
                       <div className="flex items-center gap-6 group/item">
                          <div className="icon-box bg-white/5 text-brand shadow-none scale-75">
                             <Globe className="group-hover/item:rotate-12 transition-transform" />
                          </div>
                          <span className="text-[10px] font-black uppercase tracking-[0.5em] text-white/70">Works All Over India</span>
                       </div>
                    </div>
                 </div>
                 <div className="w-full xl:w-80 bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] p-10 flex flex-col justify-between self-stretch shadow-2xl">
                    <div className="brand-watermark !text-4xl !top-4 !right-4 text-white/5 opacity-100">DATA</div>
                    <div className="space-y-8 relative z-10">
                       <div className="flex justify-between text-[10px] font-black uppercase tracking-[0.6em] text-white/50">
                          <span>App Status</span>
                          <span className="text-brand">Active</span>
                       </div>
                       <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                          <motion.div 
                            initial={{ width: "30%" }}
                            animate={{ width: "75%" }}
                            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                            className="h-full bg-brand shadow-brand-glow"
                          />
                       </div>
                    </div>
                    <div className="text-center font-mono text-[10px] text-brand uppercase tracking-[0.4em] mt-12 bg-white/5 py-4 rounded-2xl border border-white/5 relative z-10">ID: SPARK_INDIA_DATA_01</div>
                 </div>
              </div>
           </div>
        </section>
      </div>
    </div>
  );
};
