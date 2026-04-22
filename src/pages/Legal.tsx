import { motion } from 'motion/react';
import { Shield, FileText, Lock, Globe, Scale, AlertTriangle, Phone, ExternalLink, ChevronRight, BookOpen, Mail } from 'lucide-react';
import { SEO } from '../components/SEO';

const LegalCategory = ({ title, desc, icon: Icon, links }: { title: string, desc: string, icon: any, links: string[] }) => (
  <div className="p-12 glass-card rounded-[3rem] border border-slate-100 dark:border-slate-800 transition-all hover:border-brand">
    <div className="w-16 h-16 bg-white dark:bg-slate-900 rounded-2xl flex items-center justify-center text-brand mb-10 shadow-sm border border-slate-100 dark:border-slate-800">
      <Icon className="w-8 h-8" />
    </div>
    <h3 className="text-2xl font-bold dark:text-white mb-6 italic uppercase font-display tracking-tight leading-none">{title}</h3>
    <p className="text-slate-500 dark:text-slate-400 text-base leading-relaxed italic font-medium mb-10">{desc}</p>
    <div className="space-y-4">
      {links.map((link, i) => (
        <a key={i} href="#" className="flex items-center justify-between group p-4 border-b border-slate-100 dark:border-slate-900 last:border-0 hover:bg-slate-50 dark:hover:bg-slate-900/50 rounded-xl transition-all">
          <span className="text-[10px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-widest group-hover:text-brand">{link}</span>
          <ExternalLink className="w-4 h-4 text-slate-300 dark:text-slate-700 group-hover:text-brand" />
        </a>
      ))}
    </div>
  </div>
);

export const Legal = () => {
  return (
    <div className="pt-32 pb-16 min-h-screen bg-slate-50 dark:bg-black font-sans relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-tech text-slate-500/[0.03] pointer-events-none" />
      <div className="section-container relative z-10">
      <SEO 
        title="Legal | Governance & Compliance - Spark" 
        description="Access legal documentation for Spark, successor to City Car Ajmer. Terms, privacy, and ethics rules."
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <header className="mb-16 flex flex-col md:flex-row justify-between items-end gap-12">
          <div className="max-w-2xl">
            <motion.div initial={{ opacity: 0, scale: 0.95 }}>
               <h1 id="legal-title" className="text-4xl md:text-7xl font-black text-slate-900 dark:text-white leading-[0.85] tracking-tighter uppercase italic font-display">
                  Legal <br />
                  <span className="text-brand">Repository.</span>
               </h1>
            </motion.div>
          </div>
          <div className="flex-1">
             <p className="text-lg text-slate-500 dark:text-slate-400 leading-relaxed italic font-medium">
                The legal framework governing the Spark platform. We prioritize total transparency and national compliance.
             </p>
          </div>
        </header>

        {/* Legal Grid */}
        <div className="grid lg:grid-cols-2 gap-6 mb-24">
           <LegalCategory 
             title="General Terms" 
             icon={FileText} 
             desc="The master governing documents for all Spark participants."
             links={["Global Terms of Service", "Marketplace Bidding Rules", "Driver Participation", "Disclosure"]}
           />
           <LegalCategory 
             title="Privacy & Data" 
             icon={Lock} 
             desc="Our commitment to data sovereignty and institutional privacy standards."
             links={["Privacy Manifesto", "Cookie Architecture", "DPA", "Erasure Request"]}
           />
           <LegalCategory 
             title="Compliance Ops" 
             icon={Scale} 
             desc="Governing frameworks for ethical conduct and anti-corruption."
             links={["Ethics & Conduct", "Anti-Bribery Rules", "Supplier Code", "Certificates"]}
           />
           <LegalCategory 
             title="National T&Cs" 
             icon={Globe} 
             desc="Localized legal documentation specific to India."
             links={["India Rules", "National Compliance", "Bidding Rules", "Tax Compliance"]}
           />
        </div>

        {/* Ethics Hotline */}
        <section className="mb-24" aria-labelledby="hotline-title">
           <div className="bg-white dark:bg-slate-950 p-10 md:p-16 rounded-[3rem] border border-slate-100 dark:border-slate-800 relative z-10">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                 <div>
                    <h3 className="text-3xl md:text-5xl font-bold dark:text-white italic uppercase font-display tracking-tighter leading-[0.9] mb-8">Integrity & <br /> Compliance.</h3>
                    <p className="text-slate-500 dark:text-slate-400 text-base leading-relaxed italic font-medium">
                       We maintain zero tolerance for unethical behavior. Our reporting infrastructure allows anonymous disclosure.
                    </p>
                 </div>
                 <div className="space-y-4">
                    <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 flex items-center justify-between group cursor-pointer hover:border-brand">
                       <div className="flex items-center gap-4">
                          <div className="w-10 h-10 bg-white dark:bg-slate-800 rounded-xl flex items-center justify-center text-red-500 shadow-sm">
                             <Phone className="w-5 h-5" />
                          </div>
                          <div>
                             <h4 className="font-bold dark:text-white uppercase tracking-tight italic text-sm">Ethics Hotline</h4>
                          </div>
                       </div>
                       <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-brand" />
                    </div>
                    <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 flex items-center justify-between group cursor-pointer hover:border-brand">
                       <div className="flex items-center gap-4">
                          <div className="w-10 h-10 bg-white dark:bg-slate-800 rounded-xl flex items-center justify-center text-brand shadow-sm">
                             <Mail className="w-5 h-5" />
                          </div>
                          <div>
                             <h4 className="font-bold dark:text-white uppercase tracking-tight italic text-sm">Compliance Report</h4>
                             <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">help@spark.in</p>
                          </div>
                       </div>
                       <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-brand" />
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* Disclaimer */}
        <section className="text-center font-mono opacity-40">
           <p className="text-[10px] uppercase tracking-[0.2em] max-w-2xl mx-auto dark:text-slate-400 leading-relaxed">
              Information provided is for transparency. All actions are governed by regional agreements. Spark is the successor to City Car Ajmer.
           </p>
        </section>
      </div>
    </div>
  </div>
  );
};
