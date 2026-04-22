import { motion } from 'motion/react';
import { Download, Newspaper, Megaphone, Users, Mail, ArrowRight, ExternalLink, Image as ImageIcon, FileText, Camera } from 'lucide-react';
import { SEO } from '../components/SEO';

const PressRelease = ({ date, title, category }: { date: string, title: string, category: string }) => (
  <div className="group p-10 glass-card rounded-[2.5rem] border border-slate-100 dark:border-slate-800 transition-all hover:border-brand hover:translate-y-[-4px]">
    <div className="flex items-center gap-4 mb-6">
      <span className="text-[10px] font-black text-brand uppercase tracking-[0.4em]">{category}</span>
      <div className="h-px w-8 bg-slate-200 dark:bg-slate-800" />
      <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em]">{date}</span>
    </div>
    <h3 className="text-2xl font-bold dark:text-white mb-8 group-hover:text-brand transition-colors leading-tight italic font-display uppercase tracking-tight">
      {title}
    </h3>
    <button className="flex items-center text-slate-400 group-hover:text-brand font-black text-[10px] uppercase tracking-[0.4em] transition-all">
      Read More <ArrowRight className="w-4 h-4 ml-2 group-hover:ml-4 transition-all" />
    </button>
  </div>
);

const AssetCard = ({ icon: Icon, title, format, size }: { icon: any, title: string, format: string, size: string }) => (
  <div className="p-8 bg-slate-50 dark:bg-slate-900/50 rounded-3xl border border-slate-100 dark:border-slate-800 flex flex-col items-center text-center group">
    <div className="w-16 h-16 bg-white dark:bg-slate-800 rounded-2xl flex items-center justify-center text-brand mb-6 shadow-sm border border-slate-100 dark:border-slate-700 transition-transform group-hover:scale-110">
      <Icon className="w-8 h-8" />
    </div>
    <h4 className="font-bold dark:text-white mb-2 uppercase tracking-tight italic">{title}</h4>
    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-6">{format} • {size}</p>
    <button className="w-full py-4 bg-white dark:bg-slate-800 rounded-2xl flex items-center justify-center gap-3 text-[10px] font-black uppercase tracking-[0.3em] dark:text-white border border-slate-100 dark:border-slate-700 hover:bg-brand hover:text-white hover:border-brand transition-all">
      <Download className="w-4 h-4" /> Download
    </button>
  </div>
);

export const Newsroom = () => {
  return (
    <div className="pt-32 pb-16 min-h-screen bg-white dark:bg-black font-sans relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-tech text-slate-500/[0.03] pointer-events-none" />
      <SEO 
        title="Newsroom | Latest Updates - Spark" 
        description="Official Spark news and stories. Stay updated with our journey to help everyone."
      />

      <div className="section-container relative z-10">
        {/* Header */}
        <header className="mb-16 grid lg:grid-cols-2 gap-12 items-end">
          <div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
               <h1 id="newsroom-title" className="text-4xl md:text-7xl font-black text-slate-900 dark:text-white leading-[0.85] tracking-tighter uppercase italic font-display">
                  Latest <br />
                  <span className="text-brand">News.</span>
               </h1>
            </motion.div>
          </div>
          <div className="pb-2">
             <p className="text-lg md:text-xl text-slate-500 dark:text-slate-400 max-w-xl leading-relaxed italic font-medium text-balance">
                All the latest news and stories about how Spark is helping people across India.
             </p>
          </div>
        </header>

        {/* Press Releases */}
        <section className="mb-24" aria-labelledby="releases-title">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h3 className="text-3xl font-bold dark:text-white italic uppercase font-display tracking-tighter">Previous Stories.</h3>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            <PressRelease 
              category="News"
              date="April 15, 2026"
              title="Spark is coming to even more cities very soon!"
            />
            <PressRelease 
              category="App"
              date="April 02, 2026"
              title="A brand new update that makes bidding even easier!"
            />
          </div>
        </section>

        {/* Media Kit */}
        <section className="mb-24 bg-slate-950 rounded-[3rem] p-10 md:p-16 text-white relative overflow-hidden" aria-labelledby="media-kit-title">
          <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
          <div className="relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 mb-12">
               <div>
                  <h3 className="text-3xl md:text-5xl font-bold italic uppercase font-display tracking-tighter leading-[0.9] mb-8">Photos and <br /> Logos.</h3>
                  <button className="flex items-center gap-4 text-brand font-black text-xs uppercase tracking-[0.4em] hover:gap-6 transition-all">
                     Download All Here <ArrowRight className="w-4 h-4" />
                  </button>
               </div>
               <div className="grid grid-cols-2 gap-4">
                  <AssetCard icon={ImageIcon} title="Logos" format="SVG, PNG" size="4.2 MB" />
                  <AssetCard icon={Camera} title="HQ Photos" format="4K JPG" size="18.5 MB" />
               </div>
            </div>
          </div>
        </section>

        {/* Media Contacts */}
        <section className="text-center" aria-labelledby="contact-title">
          <div className="max-w-xl mx-auto">
             <Megaphone className="w-12 h-12 text-brand mx-auto mb-8" />
             <h2 id="contact-title" className="text-2xl md:text-4xl font-black mb-6 italic uppercase font-display tracking-tight dark:text-white leading-none">Media Contact.</h2>
             <p className="text-slate-500 dark:text-slate-400 text-base mb-10 italic font-medium">
                If you are a reporter or want to talk to us about news, please send us an email.
             </p>
             <div className="flex flex-col md:flex-row gap-6 justify-center">
                <a href="mailto:press@spark.in" className="flex flex-col items-center p-6 glass-card rounded-2xl border border-slate-100 dark:border-slate-800 transition-all hover:border-brand">
                   <Mail className="w-6 h-6 text-brand mb-2" />
                   <span className="font-bold dark:text-white uppercase tracking-widest text-[10px] italic">press@spark.in</span>
                </a>
             </div>
          </div>
        </section>
      </div>
    </div>
  );
};
