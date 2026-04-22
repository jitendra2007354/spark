import React from 'react';
import { motion } from 'motion/react';
import { Shield, Lock, Eye, FileText, ChevronRight } from 'lucide-react';
import { SEO } from '../components/SEO';

const Privacy = () => {
  return (
    <div className="pt-48 pb-48 min-h-screen bg-white dark:bg-black font-sans relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-tech text-slate-500/[0.03] pointer-events-none" />
      <SEO 
        title="Privacy Protocol | Data Governance - Spark" 
        description="Our commitment to data sovereignty and privacy. Learn how Spark protects institutional and user data within our decentralized protocol."
      />
      
      <div className="section-container relative z-10">
        <header className="text-center mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-brand font-black uppercase text-[10px] tracking-[0.5em] mb-8 block font-mono">Data Sovereignty Protocol</span>
            <h1 className="text-6xl md:text-[9.5rem] font-bold text-slate-900 dark:text-white leading-[0.85] tracking-tighter uppercase italic mb-16 font-display">
              Privacy <br /> <span className="text-brand">Node.</span>
            </h1>
            <p className="text-xl md:text-3xl text-slate-500 dark:text-slate-400 max-w-4xl mx-auto leading-tight italic font-medium text-balance">
              At Spark, privacy is an architectural imperative. We are committed to absolute data transparency and user sovereignty within our decentralized mobility mesh.
            </p>
          </motion.div>
        </header>

        <div className="max-w-4xl mx-auto space-y-24">
          <section className="space-y-12">
            <div className="flex items-center gap-6 mb-12">
              <div className="w-16 h-16 bg-brand/10 rounded-2xl flex items-center justify-center text-brand">
                <Shield className="w-8 h-8" />
              </div>
              <h2 className="text-3xl font-black dark:text-white uppercase italic tracking-tighter font-display">Data Collection Philosophy</h2>
            </div>
            
            <div className="grid gap-8">
              {[
                { 
                  title: "Minimal Extraction", 
                  content: "We only collect data strictly necessary for protocol synchronization and ride execution. We do not engage in behavioral scraping or shadow profiling." 
                },
                { 
                  title: "Real-time Telemetry", 
                  content: "Location data is processed in real-time for matching nodes and is purged or anonymized following successful session completion unless required for regulatory compliance." 
                },
                { 
                  title: "Institutional Assets", 
                  content: "Corporate verification data (CIN/DUNS) is stored on secured, encrypted nodes to maintain institutional integrity within the Spark ecosystem." 
                }
              ].map((item, i) => (
                <div key={i} className="p-10 bg-slate-50 dark:bg-slate-900/40 rounded-[3rem] border border-slate-100 dark:border-slate-800">
                  <h3 className="text-xl font-black text-brand uppercase italic tracking-tight font-display mb-4">{item.title}</h3>
                  <p className="text-slate-500 dark:text-slate-400 font-medium italic leading-relaxed">{item.content}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-12 p-12 md:p-24 bg-slate-950 rounded-[4rem] text-white relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-80 h-80 bg-brand/10 blur-[100px] pointer-events-none" />
            <div className="relative z-10">
              <div className="flex items-center gap-6 mb-12">
                <Lock className="w-10 h-10 text-brand" />
                <h2 className="text-4xl font-black uppercase italic tracking-tighter font-display">User Rights</h2>
              </div>
              
              <div className="space-y-10">
                <div className="flex gap-8 group/item">
                  <div className="w-px h-20 bg-brand/20 group-hover/item:bg-brand transition-colors" />
                  <div>
                    <h4 className="text-xl font-bold mb-3 italic font-display uppercase">Data Sovereignty</h4>
                    <p className="text-slate-400 text-sm italic font-medium leading-relaxed">You retain full ownership of your data profile. Requesting total node deletion is a standard feature of the Spark protocol.</p>
                  </div>
                </div>
                <div className="flex gap-8 group/item">
                  <div className="w-px h-20 bg-brand/20 group-hover/item:bg-brand transition-colors" />
                  <div>
                    <h4 className="text-xl font-bold mb-3 italic font-display uppercase">Audit Transparency</h4>
                    <p className="text-slate-400 text-sm italic font-medium leading-relaxed">Users can request an audit log of all data interactions associated with their identity within the marketplace.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="text-center bg-slate-50 dark:bg-slate-900/20 p-16 rounded-[4rem] border border-dashed border-slate-200 dark:border-slate-800">
            <FileText className="w-12 h-12 text-slate-300 mx-auto mb-8" />
            <h3 className="text-2xl font-black dark:text-white uppercase italic tracking-tighter mb-6 font-display">Full Legal Protocol</h3>
            <p className="text-slate-500 mb-10 text-sm font-medium italic italic">For the exhaustive legal draft of our data governance policies, please contact our compliance node.</p>
            <a 
              href="mailto:help@spark.in" 
              className="inline-flex items-center gap-3 px-10 py-5 bg-brand text-white rounded-2xl font-black uppercase tracking-[0.3em] text-[10px] hover:shadow-brand-glow transition-all"
            >
              Contact Compliance <ChevronRight className="w-4 h-4" />
            </a>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
