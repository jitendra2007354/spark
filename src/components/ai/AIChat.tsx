import { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import { motion, AnimatePresence } from 'motion/react';
import { X, Send, Bot, User, Sparkles } from 'lucide-react';

const SPARK_CONTEXT = `
You are Sparkey, the Spark AI Assistant. Your job is to help users understand Spark.
Spark is an easy app-based ride marketplace that came from "City Car Ajmer".

We have two simple apps:
1. Spark Connect: For people who need a ride. You can ask for a ride and choose the best price.
2. Spark Partner: For drivers. They get to keep 100% of their money and can offer fair prices.

Our goal:
1. Make ride apps fair in India.
2. We don't take a big part of the money from drivers.
3. Drivers and customers talk directly to agree on a price.
4. Help drivers earn more and help customers save more.
5. We are expanding all over India.

Key things to talk about:
- We used to be City Car Ajmer, and now we are Spark.
- Founded by Amar Singh Chauhan, who wanted to help drivers stay happy and keep their earnings.
- 0% Commission from rides.
- We are a fair ride marketplace, not a traditional app.
- Simple for everyone to use.
- If users need help with downloads, they should go to the "Sponsors" page.
- You can find our official numbers on the Home and About pages.
- Always be Sparkey. Be friendly and very helpful.
`;

export const AIChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'bot'; text: string }[]>(() => {
    const saved = localStorage.getItem('sparkey_chat_history');
    return saved ? JSON.parse(saved) : [
      { role: 'bot', text: 'Hi! I am Sparkey, your AI assistant. How can I help you today?' }
    ];
  });
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    localStorage.setItem('sparkey_chat_history', JSON.stringify(messages));
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    const newMessages = [...messages, { role: 'user', text: userMsg }];
    setMessages(newMessages as { role: 'user' | 'bot'; text: string }[]);
    setInput('');
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: newMessages.map(m => ({
          role: m.role === 'user' ? 'user' : 'model',
          parts: [{ text: m.text }]
        })),
        config: {
          systemInstruction: SPARK_CONTEXT,
        },
      });

      const botText = response.text || "I'm sorry, I couldn't process that. Please try again.";
      setMessages(prev => [...prev, { role: 'bot', text: botText }]);
    } catch (error) {
      console.error("AI Chat Error:", error);
      setMessages(prev => [...prev, { role: 'bot', text: "Service temporarily unavailable. Please contact us via the contact page." }]);
    } finally {
      setIsLoading(false);
    }
  };

  const clearChat = () => {
    const defaultMsg = [{ role: 'bot', text: 'Hi! I am Sparkey, your AI assistant. How can I help you today?' }];
    setMessages(defaultMsg as { role: 'user' | 'bot'; text: string }[]);
    localStorage.removeItem('sparkey_chat_history');
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.98 }}
            className="fixed inset-0 z-[200] bg-white dark:bg-black flex flex-col md:inset-2 md:rounded-[2rem] md:shadow-[0_40px_100px_-20px_rgba(0,0,0,0.3)] md:border md:border-slate-100 md:dark:border-slate-800 overflow-hidden shadow-2xl transition-all"
          >
            {/* Header */}
            <div className="px-4 py-3 md:px-10 md:py-4 bg-brand text-white flex justify-between items-center shadow-xl relative z-30">
              <div className="flex items-center space-x-3">
                <motion.div 
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ repeat: Infinity, duration: 5 }}
                  className="w-8 h-8 md:w-11 md:h-11 bg-white/20 rounded-lg md:rounded-xl flex items-center justify-center backdrop-blur-xl"
                >
                   <Sparkles className="w-4 h-4 md:w-6 md:h-6" />
                </motion.div>
                <div>
                   <span className="text-base md:text-xl font-black uppercase italic tracking-tighter leading-none block">Sparkey AI</span>
                   <span className="text-[7px] md:text-[9px] font-bold uppercase tracking-[0.3em] opacity-60">Helpful Friend</span>
                </div>
              </div>
              <div className="flex items-center space-x-2 md:space-x-4">
                <button 
                  onClick={clearChat}
                  className="px-3 py-1 md:px-5 md:py-2 bg-white/10 hover:bg-white/25 rounded-lg text-[8px] md:text-[10px] font-black uppercase tracking-widest transition-all"
                >
                  Reset
                </button>
                <button 
                  onClick={() => setIsOpen(false)} 
                  className="hover:bg-white/15 p-1.5 md:p-2 rounded-lg transition-all"
                >
                  <X className="w-5 h-5 md:w-7 md:h-7" />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div 
              ref={scrollRef} 
              className="flex-1 overflow-y-auto px-4 py-4 md:px-12 md:py-8 space-y-4 md:space-y-6 scroll-smooth bg-slate-50/20 dark:bg-slate-950/20"
            >
              <div className="max-w-full mx-auto space-y-4 md:space-y-8">
                {messages.map((m, i) => (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    key={i} 
                    className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`relative max-w-[95%] md:max-w-[85%] p-3 md:p-6 rounded-2xl md:rounded-[2rem] flex items-start space-x-3 md:space-x-4 border shadow-sm transition-all ${
                      m.role === 'user' 
                      ? 'bg-brand text-white border-brand shadow-brand/10 rounded-tr-none' 
                      : 'bg-white dark:bg-slate-900/90 text-slate-800 dark:text-slate-200 border-slate-100 dark:border-slate-800 rounded-tl-none'
                    }`}>
                      <div className={`hidden md:block flex-shrink-0 mt-1 p-2 rounded-xl ${m.role === 'user' ? 'bg-white/10' : 'bg-slate-100 dark:bg-slate-800'}`}>
                        {m.role === 'bot' ? <Bot className="w-4 h-4" /> : <User className="w-4 h-4" />}
                      </div>
                      <div className="flex-1">
                        <p className="text-sm md:text-lg font-medium leading-relaxed italic">
                          {m.text}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="bg-white/80 dark:bg-slate-900 p-3 md:p-5 rounded-xl md:rounded-2xl flex items-center space-x-2 shadow-sm border border-slate-100 dark:border-slate-800">
                      <div className="flex space-x-1.5">
                        <div className="w-1.5 h-1.5 bg-brand rounded-full animate-bounce [animation-duration:0.8s]" />
                        <div className="w-1.5 h-1.5 bg-brand rounded-full animate-bounce [animation-duration:0.8s] [animation-delay:0.1s]" />
                        <div className="w-1.5 h-1.5 bg-brand rounded-full animate-bounce [animation-duration:0.8s] [animation-delay:0.2s]" />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Input Overlay */}
            <div className="px-4 py-4 md:px-12 md:py-6 border-t border-slate-100 dark:border-slate-800 bg-white dark:bg-black relative z-30">
              <div className="max-w-full mx-auto relative group">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Type your message..."
                  className="w-full bg-slate-50 dark:bg-slate-900/50 px-5 md:px-8 py-3 md:py-5 rounded-xl md:rounded-2xl text-sm md:text-lg font-medium focus:outline-none focus:ring-4 focus:ring-brand/10 border border-slate-200 dark:border-slate-800 dark:text-white transition-all pr-14 md:pr-20"
                />
                <button 
                  onClick={handleSend}
                  disabled={isLoading}
                  className="absolute right-1.5 md:right-2 top-1/2 -translate-y-1/2 bg-brand text-white p-2 md:p-3.5 rounded-lg md:rounded-xl hover:shadow-brand-glow disabled:opacity-50 transition-all flex items-center justify-center shadow-md"
                >
                  <Send className="w-4 h-4 md:w-6 md:h-6" />
                </button>
              </div>
              <div className="flex justify-between items-center mt-2 px-2 opacity-30">
                <span className="text-[7px] md:text-[9px] font-black text-slate-400 uppercase tracking-[0.3em]">SECURE CHANNEL</span>
                <div className="flex items-center space-x-1">
                  <div className="w-1 h-1 bg-green-500 rounded-full" />
                  <span className="text-[7px] md:text-[9px] font-black text-slate-400 uppercase tracking-[0.2em]">LIVE</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[100]">
        <motion.button
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(!isOpen)}
          className="w-16 h-16 md:w-20 md:h-20 bg-brand text-white rounded-2xl md:rounded-[2rem] flex items-center justify-center shadow-2xl shadow-brand/40 z-50 relative border-2 md:border-4 border-white dark:border-slate-900 group"
        >
          <Sparkles className="w-8 h-8 md:w-10 md:h-10 fill-white animate-pulse" />
          <div className="absolute -top-1 -right-1 md:-top-2 md:-right-2 w-4 h-4 md:w-6 md:h-6 bg-red-500 border-2 md:border-4 border-white dark:border-slate-900 rounded-full animate-bounce" />
          <div className="hidden md:block absolute bottom-full right-0 mb-4 px-4 py-2 bg-slate-900 text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-xl opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all pointer-events-none whitespace-nowrap">
            Talk to Sparkey
          </div>
        </motion.button>
      </div>
    </>
  );
};
