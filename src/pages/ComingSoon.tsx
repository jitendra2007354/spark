import React from 'react';
import { motion } from 'motion/react';
import { Rocket, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const ComingSoon = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-black flex items-center justify-center p-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-tech text-slate-500/[0.03] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand/5 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="relative z-10 text-center max-w-2xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="w-24 h-24 bg-brand/10 rounded-[2rem] flex items-center justify-center text-brand mx-auto mb-10 shadow-inner">
            <Rocket className="w-12 h-12" />
          </div>
          
          <span className="text-brand font-black uppercase text-[10px] tracking-[0.5em] mb-4 block">Deployment in Progress</span>
          <h1 className="text-6xl md:text-8xl font-black text-slate-900 dark:text-white leading-none tracking-tighter uppercase italic mb-8 font-display">
            Coming <br /> <span className="text-brand">Soon.</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-500 dark:text-slate-400 mb-12 italic font-medium leading-relaxed font-sans">
            Our high-performance mobile nodes are currently undergoing final protocol optimization. The Spark Connect and Spark Partner apps will be available for download shortly.
          </p>
          
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <Link 
              to="/" 
              className="flex items-center justify-center gap-3 px-10 py-6 bg-slate-900 dark:bg-white text-white dark:text-black rounded-3xl font-black uppercase text-[10px] tracking-widest hover:scale-105 transition-all"
            >
              <ArrowLeft className="w-4 h-4" /> Return to HQ
            </Link>
            <a 
              href="mailto:help@spark.in" 
              className="px-10 py-6 border border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 rounded-3xl font-black uppercase text-[10px] tracking-widest hover:border-brand transition-all"
            >
              Contact Support
            </a>
          </div>
        </motion.div>
        
        <div className="mt-24 pt-12 border-t border-slate-100 dark:border-slate-900 flex justify-center gap-12 grayscale opacity-30">
          <div className="flex flex-col items-center">
             <span className="text-[8px] font-black uppercase tracking-tighter">Android</span>
             <span className="text-lg font-black italic font-display">v1.0.0-beta</span>
          </div>
          <div className="flex flex-col items-center">
             <span className="text-[8px] font-black uppercase tracking-tighter">iOS</span>
             <span className="text-lg font-black italic font-display">v1.0.0-beta</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
