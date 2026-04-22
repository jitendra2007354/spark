import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Download, 
  ChevronRight, 
  Zap, 
  Globe, 
  Target, 
  TrendingUp, 
  Users, 
  User,
  ArrowRightLeft, 
  CreditCard, 
  Smartphone, 
  Handshake,
  ShieldCheck,
  Star,
  Activity,
  History,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

import { SEO } from '../components/SEO';

const BentoCard = ({ children, className, watermark }: { children: React.ReactNode, className?: string, watermark?: string }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className={`spark-card group flex flex-col ${className}`}
  >
    {watermark && <div className="brand-watermark" aria-hidden="true">{watermark}</div>}
    <div className="relative z-10 flex-1 flex flex-col">
      {children}
    </div>
  </motion.div>
);

const VerificationForm = () => {
  const [formData, setFormData] = useState({ cin: 'UDYAM-RJ-01-0154571', duns: '772338952' });
  const [isVerifying, setIsVerifying] = useState(false);

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsVerifying(true);
    try {
      const res = await fetch('/api/save-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'institutional_verification_check', data: formData })
      });
      const result = await res.json();
      if (result.success) {
        alert('Institutional credentials synchronized. Verification node active.');
      } else {
        alert('Verification node synchronization failed.');
      }
    } catch (err) {
      alert('Network protocol error.');
    } finally {
      setIsVerifying(false);
    }
  };

  return (
    <form onSubmit={handleVerify} className="space-y-6 relative z-10">
      <div className="space-y-3">
        <label className="text-[9px] font-black text-slate-500 uppercase tracking-widest ml-2">Official Registration</label>
        <div className="grid gap-4">
          <div className="space-y-2">
            <p className="text-[9px] font-bold text-brand uppercase tracking-[0.2em] font-mono">Government CIN</p>
            <input 
              type="text"
              value={formData.cin}
              onChange={(e) => setFormData({ ...formData, cin: e.target.value })}
              className="w-full p-4 bg-black/40 rounded-xl border border-white/10 font-mono text-xs tracking-widest text-white focus:outline-none focus:ring-1 focus:ring-brand transition-all uppercase"
            />
          </div>
          <div className="space-y-2">
            <p className="text-[9px] font-bold text-brand uppercase tracking-[0.2em] font-mono">Global DUNS</p>
            <input 
              type="text"
              value={formData.duns}
              onChange={(e) => setFormData({ ...formData, duns: e.target.value })}
              className="w-full p-4 bg-black/40 rounded-xl border border-white/10 font-mono text-xs tracking-widest text-white focus:outline-none focus:ring-1 focus:ring-brand transition-all"
            />
          </div>
        </div>
      </div>
      <button 
        type="submit"
        disabled={isVerifying}
        className="w-full py-4 bg-brand text-white rounded-xl font-black uppercase text-[10px] tracking-[0.2em] shadow-lg hover:shadow-brand-glow transition-all active:scale-95 disabled:opacity-50 flex items-center justify-center gap-3"
      >
        <ShieldCheck className="w-4 h-4" />
        {isVerifying ? 'Synchronizing...' : 'Synchronize Node'}
      </button>
    </form>
  );
};

export const Home = () => {
  return (
    <div className="bg-white dark:bg-black overflow-hidden font-sans">
      <SEO 
        title="Spark | Founded by Amar Singh Chauhan - Ride Marketplace in India" 
        description="Spark is a simple ride marketplace for everyone in India. Drivers keep all their money, and customers get the best prices through fair bidding. No commissions, just help."
        keywords="ride marketplace, spark app, easy cab india, no commission ride, best ride in india, ride sharing india, spark ride, ride founder"
      />

      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Corporation",
          "name": "Spark",
          "founder": {
            "@type": "Person",
            "name": "Amar Singh Chauhan"
          },
          "alternateName": ["City Car Ajmer", "Spark"],
          "url": "https://spark.in",
          "logo": "https://spark.in/logo.png",
          "description": "Spark is an easy-to-use ride marketplace where drivers and customers talk directly. We don't take commissions and we protect your privacy.",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Ajmer",
            "addressRegion": "Rajasthan",
            "addressCountry": "IN"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "email": "help@spark.in",
            "contactType": "Support"
          },
          "knowsAbout": ["Ride sharing", "Bidding systems", "India transportation", "Ride Marketplace in India"]
        })}
      </script>

      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Why is Spark the best ride marketplace in India?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Because we don't take commissions from drivers! Customers offer a price, and drivers can accept or give a better one. Everyone wins."
              }
            },
            {
              "@type": "Question",
              "name": "What is the Spark app?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Spark is an app that helps you find a ride easily through our marketplace. We act as a bridge between you and the driver."
              }
            }
          ]
        })}
      </script>

      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [{
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://spark.in"
          }]
        })}
      </script>

      {/* Visionary Hero Section - Tesla Aesthetic */}
      <section className="relative min-h-[70vh] flex items-center justify-center pt-20 pb-24 overflow-hidden" aria-labelledby="hero-title">
         <div className="absolute inset-0 bg-grid-tech text-slate-500/[0.03] [mask-image:radial-gradient(ellipse_at_center,black_60%,transparent_100%)] pointer-events-none" />
         <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-[10%] -right-[10%] w-[120%] h-[120%] bg-radial-gradient from-brand/20 via-transparent to-transparent opacity-50 blur-[120px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[100vh] bg-[url('https://picsum.photos/seed/mobility/1920/1080?blur=10')] bg-cover bg-center opacity-10 dark:opacity-20 grayscale" />
        </div>

        <div className="section-container relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex justify-center mb-6">
              <span className="inline-flex items-center px-4 py-1 bg-slate-900 dark:bg-white text-white dark:text-black rounded-full text-[9px] font-black tracking-[0.2em] uppercase transition-transform hover:scale-105 cursor-default shadow-xl">
                Successor to City Car Ajmer
              </span>
            </div>
            <h1 id="hero-title" className="text-6xl md:text-9xl font-bold text-slate-900 dark:text-white leading-[0.85] mb-8 tracking-tighter uppercase font-display italic">
              Spark
            </h1>
            <p className="text-lg md:text-2xl text-slate-500 dark:text-slate-400 mb-12 leading-tight max-w-3xl mx-auto font-medium text-balance italic">
               We are a ride marketplace app that helps drivers and customers connect directly. We don't take any commissions and we don't control the prices—you do!
            </p>
            
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                 <Link to="/model" className="px-10 py-5 bg-brand text-white rounded-2xl font-black uppercase tracking-[0.1em] text-[9px] hover:shadow-brand-glow hover:-translate-y-1 transition-all flex items-center gap-2">
                   Explore Platform <ChevronRight className="w-3 h-3" />
                 </Link>
                 <div className="flex gap-4 items-center border-l border-slate-200 dark:border-slate-800 pl-6 ml-1">
                    <motion.button aria-label="Download on Play Store" whileHover={{ y: -4 }} className="group relative overflow-hidden px-6 py-4 bg-black text-white rounded-xl font-bold flex items-center shadow-xl transition-all border border-white/10 active:scale-95">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Get Spark on Google Play Store" className="h-6" referrerPolicy="no-referrer" />
                      <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </motion.button>
                    <motion.button aria-label="Download on App Store" whileHover={{ y: -4 }} className="group relative overflow-hidden px-6 py-4 bg-black text-white rounded-xl font-bold flex items-center shadow-xl transition-all border border-white/10 active:scale-95">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="Download Spark on Apple App Store" className="h-6 invert" referrerPolicy="no-referrer" />
                      <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </motion.button>
                </div>
            </div>

            <div className="mt-32 flex flex-wrap justify-center items-center gap-12 text-[10px] font-black tracking-[0.5em] text-slate-400 dark:text-slate-600 uppercase">
               <span className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-brand rounded-full" /> Scalable</span>
               <span className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-brand rounded-full" /> Zero Commission</span>
               <span className="flex items-center gap-3"><div className="w-1.5 h-1.5 bg-brand rounded-full" /> Regional First</span>
            </div>
          </motion.div>
        </div>
      </section>



      {/* App Ecosystem Section */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900/40 relative overflow-hidden" aria-labelledby="apps-title">
        <div className="section-container relative z-10">
          <div className="text-center mb-16">
            <h2 id="apps-title" className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white uppercase italic tracking-tighter font-display text-balance leading-none">Two Simple Apps. <br /><span className="text-brand">One Happy Journey.</span></h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Spark Connect */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="p-8 md:p-10 bg-white dark:bg-black rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-xl relative overflow-hidden group"
            >
              <div className="brand-watermark !text-slate-500/5 rotate-0 -bottom-10 -right-10 !text-[8rem]">USER</div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-brand/10 rounded-2xl flex items-center justify-center text-brand mb-8 group-hover:rotate-6 transition-transform">
                  <User className="w-8 h-8" />
                </div>
                <h3 className="text-3xl font-black dark:text-white mb-4 uppercase italic tracking-tighter font-display">Spark <span className="text-brand">User App.</span></h3>
                <p className="text-slate-500 dark:text-slate-400 text-base leading-relaxed italic font-medium mb-8">
                  The easy app for riders. Tell us where you want to go and what you want to pay. Drivers will see your offer and can say 'Yes' or offer their best price.
                </p>
                <div className="space-y-6">
                  <div className="flex items-center gap-3 text-[9px] font-black uppercase tracking-widest text-slate-400 mb-6 font-mono">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand" /> Easy & Quick
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <Link to="/coming-soon" className="flex items-center gap-3 px-6 py-4 bg-black text-white rounded-xl border border-white/10 hover:border-brand transition-all group/btn">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Play Store" className="h-5" referrerPolicy="no-referrer" />
                      <span className="text-[7px] font-black uppercase tracking-widest text-white/40 group-hover/btn:text-white transition-colors">Android</span>
                    </Link>
                    <Link to="/coming-soon" className="flex items-center gap-3 px-6 py-4 bg-black text-white rounded-xl border border-white/10 hover:border-brand transition-all group/btn">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" className="h-5 invert" referrerPolicy="no-referrer" />
                      <span className="text-[7px] font-black uppercase tracking-widest text-white/40 group-hover/btn:text-white transition-colors">iOS</span>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Spark Partner */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="p-8 md:p-10 bg-white dark:bg-black rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-xl relative overflow-hidden group"
            >
              <div className="brand-watermark !text-slate-500/5 rotate-0 -bottom-10 -right-10 !text-[8rem]">DRIVER</div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-brand/10 rounded-2xl flex items-center justify-center text-brand mb-8 group-hover:-rotate-6 transition-transform">
                  <Smartphone className="w-8 h-8" />
                </div>
                <h3 className="text-3xl font-black mb-4 uppercase italic tracking-tighter font-display text-slate-900 dark:text-white">Spark <span className="text-brand">Driver App.</span></h3>
                <p className="text-slate-500 dark:text-slate-400 text-base leading-relaxed italic font-medium mb-8">
                  The app for our driver-partners. We are not an aggregator; we are your tool. You keep 100% of your earnings. No hidden commissions, ever.
                </p>
                <div className="space-y-6">
                  <div className="flex items-center gap-3 text-[9px] font-black uppercase tracking-widest text-slate-400 mb-6 font-mono">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand" /> High Earnings
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <Link to="/coming-soon" className="flex items-center gap-3 px-6 py-4 bg-black text-white rounded-xl border border-white/10 hover:border-brand transition-all group/btn">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Play Store" className="h-5" referrerPolicy="no-referrer" />
                      <span className="text-[7px] font-black uppercase tracking-widest text-white/40 group-hover/btn:text-white transition-colors">Android</span>
                    </Link>
                    <Link to="/coming-soon" className="flex items-center gap-3 px-6 py-4 bg-black text-white rounded-xl border border-white/10 hover:border-brand transition-all group/btn">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" className="h-5 invert" referrerPolicy="no-referrer" />
                      <span className="text-[7px] font-black uppercase tracking-widest text-white/40 group-hover/btn:text-white transition-colors">iOS</span>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Marketplace Infrastructure - Microsoft Style */}
      <section className="py-24 bg-white dark:bg-black relative overflow-hidden" aria-labelledby="marketplace-title">
         <div className="absolute inset-0 bg-grid-tech text-slate-500/[0.03] pointer-events-none opacity-50" />
         <div className="section-container relative z-10">
            <div className="text-center mb-16">
               <h2 id="marketplace-title" className="text-3xl md:text-5xl font-bold dark:text-white uppercase italic tracking-tighter font-display text-balance leading-none">Built for the <span className="text-brand">Direct Economy.</span></h2>
            </div>
            
            <div className="grid md:grid-cols-12 gap-6 pb-6">
               <BentoCard className="md:col-span-8 p-6 md:p-10" watermark="FAIR">
                  <div className="flex flex-col md:flex-row gap-8 items-start">
                     <div className="flex-1">
                        <div className="icon-box !w-12 !h-12 mb-6">
                           <ArrowRightLeft className="w-6 h-6" />
                        </div>
                        <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-4 uppercase leading-[0.9] tracking-tighter font-display italic">Fare <br /> Bidding.</h3>
                        <p className="text-slate-500 text-base leading-snug mb-8 italic font-medium">
                          Customers offer a price, and drivers can accept it or send a counter-offer. You talk directly and agree on a price that's fair for both!
                        </p>
                        <Link to="/model" className="inline-flex items-center text-brand font-black uppercase text-[9px] tracking-[0.2em] group">
                          How it works <ArrowRight className="ml-1 w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                     </div>
                     <div className="flex-1 w-full bg-white dark:bg-black rounded-3xl p-6 border border-slate-100 dark:border-slate-800 shadow-lg">
                        <div className="space-y-4">
                           <div className="flex justify-between items-center p-4 bg-brand/5 border border-brand/20 rounded-xl">
                              <span className="font-bold text-[8px] uppercase tracking-widest opacity-60">User Offer</span>
                              <span className="text-brand font-black italic text-lg">₹100.00</span>
                           </div>
                           <div className="flex justify-between items-center p-4">
                              <span className="font-bold text-[8px] uppercase tracking-widest text-slate-400">Driver Counter</span>
                              <span className="font-black italic text-lg text-slate-600">₹120.00</span>
                           </div>
                        </div>
                     </div>
                  </div>
               </BentoCard>
               <BentoCard className="md:col-span-4 p-6 md:p-10 bg-brand border-none" watermark="HELP">
                  <div className="icon-box !w-12 !h-12 bg-white/20 text-white mb-8">
                    <Handshake className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-4 italic font-display tracking-tighter uppercase leading-[0.9]">We Help <br/> Everyone.</h3>
                    <p className="text-white/90 text-sm leading-relaxed italic font-medium">
                      Our goal is simple: help drivers earn more and help riders save more. No big company in the middle, just a helping hand.
                    </p>
                  </div>
               </BentoCard>
            </div>
            
            <div className="grid md:grid-cols-12 gap-6">
               <BentoCard className="md:col-span-4 p-6 md:p-10 bg-slate-900 border-none" watermark="PRIV">
                  <div className="icon-box !w-12 !h-12 bg-brand/10 text-brand mb-8">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4 italic font-display uppercase tracking-tighter leading-[0.9]">Total <br/> Privacy.</h3>
                  <p className="text-slate-400 text-sm mb-8 italic font-medium">
                    We do not record your calls and we do not read your chats. Your conversations are private to you.
                  </p>
                  <Link to="/safety" className="text-[9px] font-black uppercase tracking-[0.2em] text-brand flex items-center group">
                    Privacy Policy <ArrowRight className="ml-1 w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </Link>
               </BentoCard>
               <BentoCard className="md:col-span-8 p-6 md:p-10" watermark="ZERO">
                  <div className="flex flex-col md:flex-row gap-12 items-center">
                    <div className="flex-1">
                       <div className="icon-box !w-12 !h-12 mb-8">
                          <CreditCard className="w-6 h-6" />
                       </div>
                       <h3 className="text-3xl font-bold dark:text-white mb-4 uppercase italic font-display tracking-tight leading-[0.9]">No <br /> Commissions.</h3>
                       <p className="text-slate-500 leading-relaxed italic text-base font-medium">
                         Drivers keep 100% of the ride fare. We only take a small platform fee for 24 hours of access to help drivers connect with customers.
                       </p>
                    </div>
                    <div className="flex items-center gap-3">
                       <div className="p-10 bg-white dark:bg-black text-slate-900 dark:text-white rounded-[2rem] text-center border-2 border-brand/20 shadow-brand-glow relative overflow-hidden group/box">
                          <div className="absolute inset-0 bg-brand/5 opacity-0 group-hover/box:opacity-100 transition-opacity" />
                          <span className="text-6xl font-black font-display tracking-tighter italic relative z-10">₹0</span>
                          <p className="text-[8px] font-black uppercase mt-2 tracking-[0.3em] text-brand relative z-10">Commission taken</p>
                       </div>
                    </div>
                  </div>
               </BentoCard>
            </div>
         </div>
      </section>

      {/* Simple Tech Section */}
      <section className="py-24 bg-slate-50 dark:bg-slate-950 border-y border-slate-100 dark:border-slate-900" aria-labelledby="tech-title">
         <div className="section-container">
            <div className="text-center mb-16">
               <h2 id="tech-title" className="text-3xl md:text-5xl font-bold dark:text-white uppercase italic tracking-tighter font-display leading-none">Why use <span className="text-brand">Spark?</span></h2>
            </div>
            <div className="grid md:grid-cols-4 gap-8">
               {[
                 { title: "Fast Apps", desc: "Our apps are super quick so you can find a ride or a passenger in seconds.", icon: <Activity />, mark: "SPD" },
                 { title: "Everywhere", desc: "We are available across cities to make sure you're never stranded.", icon: <Globe />, mark: "MAP" },
                 { title: "Safe & Secure", desc: "We check every driver to make sure your journey is always safe.", icon: <ShieldCheck />, mark: "SFT" },
                 { title: "Fair Price", desc: "Bidding ensures you always pay or earn what is actually fair.", icon: <TrendingUp />, mark: "FAIR" }
               ].map((item, i) => (
                 <div key={i} className="spark-card group">
                    <div className="brand-watermark">{item.mark}</div>
                    <div className="icon-box mb-10">
                        {React.cloneElement(item.icon as React.ReactElement, { className: "w-8 h-8" })}
                    </div>
                    <h4 className="text-2xl font-bold dark:text-white mb-6 italic uppercase font-display tracking-tight leading-none">{item.title}</h4>
                    <p className="text-slate-500 text-xs leading-relaxed font-bold uppercase tracking-[0.2em] italic opacity-70 mb-4">{item.desc}</p>
                 </div>
               ))}
            </div>
         </div>
      </section>



      {/* Frequently Asked Questions */}
      <section className="py-24 bg-white dark:bg-black" aria-labelledby="faq-title">
         <div className="section-container max-w-4xl">
            <div className="text-center mb-16">
               <h2 id="faq-title" className="text-3xl md:text-5xl font-black dark:text-white uppercase italic tracking-tighter font-display leading-none">Questions & <br /> <span className="text-brand">Answers.</span></h2>
            </div>
            <div className="space-y-6">
               {[
                 { q: "How is Spark different?", a: "We don't set prices. You and the driver talk and agree on a price. It's like a digital marketplace where you are the boss." },
                 { q: "What is the Daily Pass for drivers?", a: "Instead of taking a part of every ride (commission), we only charge a small daily fee. This lets drivers keep all their hard-earned money." },
                 { q: "Is my privacy safe?", a: "Absolutely. We do not record your calls and we do not read your chats. Your business is yours alone." },
                 { q: "Where can I use Spark?", a: "We are currently helping people across India, making sure everyone gets a fair ride!" }
               ].map((item, i) => (
                 <div key={i} className="p-8 bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-[2.5rem]">
                    <h4 className="text-lg font-black dark:text-white mb-4 italic uppercase tracking-tight">{item.q}</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">{item.a}</p>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* Regional Growth Roadmap */}
      <section className="py-24 bg-slate-50 dark:bg-slate-950 border-y border-slate-100 dark:border-slate-900" aria-labelledby="roadmap-title">
         <div className="section-container">
            <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
               <div className="max-w-xl">
                  <h2 id="roadmap-title" className="text-4xl md:text-7xl font-black leading-[0.85] tracking-tighter uppercase italic dark:text-white font-display">Connecting <br /> <span className="text-brand">Bharat.</span></h2>
               </div>
               <p className="text-slate-500 max-w-xs italic text-base leading-tight uppercase font-black opacity-60">Systematic Deployment Strategy for 2026-2027.</p>
            </div>

            <div className="relative">
               <div className="absolute top-1/2 left-0 w-full h-px bg-slate-200 dark:bg-slate-800 hidden md:block" />
               <div className="grid md:grid-cols-4 gap-8 relative z-10">
                  {[
                    { phase: "01", title: "Heritage", date: "Q1 2026" },
                    { phase: "02", title: "Capital", date: "Q3 2026" },
                    { phase: "03", title: "Mesh", date: "Q1 2027" },
                    { phase: "04", title: "National", date: "Q3 2027" }
                  ].map((p, i) => (
                    <div key={i} className="group">
                       <div className="w-10 h-10 bg-white dark:bg-black border-2 border-brand rounded-full flex items-center justify-center text-[10px] font-black mb-6 group-hover:scale-110 transition-transform shadow-lg dark:text-white italic">
                          {p.phase}
                       </div>
                       <h4 className="text-xl font-black dark:text-white mb-2 italic uppercase tracking-tighter font-display">{p.title}</h4>
                       <span className="text-[9px] font-black text-brand uppercase tracking-widest">{p.date}</span>
                    </div>
                  ))}
               </div>
            </div>
         </div>
      </section>

      {/* Simple FAQ Layer */}
      <section className="py-24 bg-slate-50 dark:bg-slate-950" aria-labelledby="faq-institutional-title">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <header className="mb-16 text-center">
              <h2 id="faq-institutional-title" className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white uppercase italic tracking-tighter leading-none mb-8 font-display">
                Simple <span className="text-brand">Facts.</span>
              </h2>
              <p className="text-lg text-slate-500 italic font-medium leading-tight">Everything you need to know about Spark in simple words.</p>
            </header>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  q: "Is it easy to use?",
                  a: "Yes! It's just like any other app, but better because you get to choose your price."
                },
                {
                  q: "No Commissions?",
                  a: "Correct! We don't take a single rupee from the driver's ride fare. They keep it all."
                },
                {
                  q: "Are you an aggregator?",
                  a: "No, we are just a platform that connects people. We don't own any vehicles or control the drivers."
                },
                {
                  q: "Who started Spark?",
                  a: "Amar Singh Chauhan, the same person who started City Car Ajmer, to make ride marketplace services fairer for everyone."
                }
              ].map((item, i) => (
                 <div key={i} className="group p-8 glass-card rounded-[2.5rem] border border-slate-100 dark:border-slate-800 hover:border-brand transition-all">
                  <h3 className="text-xl font-black dark:text-white mb-4 uppercase italic tracking-tight font-display leading-[0.9]">{item.q}</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 font-medium leading-relaxed italic">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Call to Action */}
      <section className="py-20 bg-white dark:bg-black" aria-labelledby="cta-title">
         <div className="section-container">
            <div className="bg-brand p-12 md:p-24 rounded-[3rem] text-center text-white relative overflow-hidden group">
               <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity" />
               <div className="brand-watermark !text-black/10 !text-[10rem] -bottom-10 -right-10" aria-hidden="true">SPARK</div>
               <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-brand mx-auto mb-10 shadow-2xl group-hover:rotate-12 transition-transform duration-500">
                  <Zap className="w-8 h-8 fill-brand" />
               </div>
               <h2 id="cta-title" className="text-5xl md:text-8xl font-bold leading-[0.85] mb-12 uppercase tracking-tighter italic font-display relative z-10">Spark <br /> <span className="text-black">Nation.</span></h2>
               <div className="flex flex-wrap justify-center gap-6 relative z-10">
                  <Link to="/sponsors" className="px-10 py-5 bg-black text-white rounded-xl font-black uppercase tracking-[0.2em] text-[9px] hover:shadow-2xl hover:-translate-y-1 transition-all">Become a Sponsor</Link>
                  <Link to="/contact" className="px-10 py-5 bg-white text-brand rounded-xl font-black uppercase tracking-[0.2em] text-[9px] hover:shadow-2xl hover:-translate-y-1 transition-all">Protocol Inquiry</Link>
               </div>
            </div>
         </div>
      </section>
      {/* Institutional Verification Section - Corporate Integrity */}
      <section className="py-16 bg-slate-950 text-white overflow-hidden relative" aria-labelledby="verification-title">
        <div className="absolute inset-0 bg-grid-tech text-white/[0.02] pointer-events-none" />
        <div className="section-container relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 id="verification-title" className="text-4xl md:text-6xl font-bold leading-none uppercase italic tracking-tighter mb-8 font-display">
                  Official <br /> <span className="text-brand">Area.</span>
                </h2>
                <div className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-xl">
                  <ShieldCheck className="w-8 h-8 text-brand" />
                  <div>
                    <p className="text-[9px] font-black uppercase tracking-widest text-slate-500">Status</p>
                    <p className="text-xs font-bold uppercase tracking-tighter italic">Active & Verified</p>
                  </div>
                </div>
              </div>

              <div className="p-8 md:p-12 bg-white/5 backdrop-blur-3xl rounded-[3rem] border border-white/10 shadow-2xl relative">
                <VerificationForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Regional Search Data - SEO Extraction Layer */}
      <section className="py-10 bg-slate-50 dark:bg-slate-950 border-t border-slate-100 dark:border-slate-900" aria-label="Regional Search Context">
         <div className="section-container">
            <div className="max-w-5xl mx-auto opacity-40">
               <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-[9px] font-bold text-slate-400 uppercase tracking-widest leading-none text-center">
                  <span>Ride Marketplace India</span>
                  <span>Easy Cab India</span>
                  <span>Spark India</span>
                  <span>City Car Successor</span>
                  <span>Zero Commission India</span>
                  <span>Fair Help India</span>
                  <span>India Railway Rides</span>
                  <span>Airport Cab India</span>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
};

const BentoPlus = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <div className={`p-8 rounded-[3rem] ${className}`}>
    {children}
  </div>
);
