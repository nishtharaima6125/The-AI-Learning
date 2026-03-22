// import { Copy, Check, Sparkles, ExternalLink, ArrowRight, Zap } from 'lucide-react';
// import { motion } from 'framer-motion';
// import { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { collection, getDocs } from 'firebase/firestore';
// import { db } from '../../firebase';

// interface PromptItem {
//   id: string;
//   title?: string;
//   prompt: string;
//   category?: string;
// }

// const DEFAULT_CATEGORIES = [
//   {
//     title: 'YouWare Prompts',
//     gradient: 'from-cyan-500 to-teal-500',
//     prompts: [
//       { id: 'yw-3', title: 'Component Library', prompt: 'Create a reusable component library with [components list] using React, TypeScript, and Tailwind CSS.' },
//     ],
//   },
//   {
//     title: 'AI Tools Prompts',
//     gradient: 'from-teal-500 to-emerald-500',
//     prompts: [
//       { id: 'ai-3', title: 'Technical Documentation', prompt: 'Create comprehensive technical documentation for [project/feature] including setup instructions and API reference.' },
//     ],
//   },
//   {
//     title: 'Productivity Prompts',
//     gradient: 'from-blue-500 to-cyan-500',
//     prompts: [
//       { id: 'prod-3', title: 'Task Breakdown', prompt: 'Break down [large project/goal] into smaller, actionable tasks with estimated time and priority.' },
//     ],
//   },
// ];

// const PromptsSection = () => {
//   const [copiedId, setCopiedId] = useState<string | null>(null);
//   const [promptCategories, setPromptCategories] = useState(DEFAULT_CATEGORIES);
//   const [totalCount, setTotalCount] = useState(0);
//   const navigate = useNavigate();

//   useEffect(() => {
//     let mounted = true;
//     async function fetchPrompts() {
//       try {
//         const snapshot = await getDocs(collection(db, 'prompts'));
//         if (!mounted) return;
//         const docs = snapshot.docs;
//         setTotalCount(docs.length);
//         if (docs.length === 0) return;
//         const byCategory: Record<string, PromptItem[]> = {};
//         docs.forEach((doc) => {
//           const d = doc.data();
//           const cat = d.category || 'General';
//           if (!byCategory[cat]) byCategory[cat] = [];
//           byCategory[cat].push({
//             id: doc.id,
//             title: d.title || `Prompt ${doc.id}`,
//             prompt: d.prompt || '',
//             category: cat,
//           });
//         });
//         const gradients: Record<string, string> = {
//           'YouWare Prompts': 'from-cyan-500 to-teal-500',
//           'AI Tools Prompts': 'from-teal-500 to-emerald-500',
//           'Productivity Prompts': 'from-blue-500 to-cyan-500',
//           'General': 'from-purple-500 to-pink-500',
//         };
//         setPromptCategories(
//           Object.entries(byCategory).map(([title, prompts]) => ({
//             title,
//             gradient: gradients[title] || 'from-gray-500 to-gray-600',
//             prompts: prompts.map(p => ({
//               id: p.id,
//               title: p.title || `Prompt ${p.id}`,
//               prompt: p.prompt,
//             })),
//           }))
//         );
//       } catch (e) {
//         console.error('PromptsSection fetch error:', e);
//       }
//     }
//     fetchPrompts();
//     return () => { mounted = false; };
//   }, []);

//   const copyToClipboard = (prompt: string, id: string) => {
//     navigator.clipboard.writeText(prompt);
//     setCopiedId(id);
//     setTimeout(() => setCopiedId(null), 2000);
//   };

//   return (
//     <section id="prompts" className="py-24 bg-gradient-to-b from-slate-950 via-cyan-950/10 to-slate-950 relative overflow-hidden">
//       {/* Grid Background */}
//       <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-16"
//         >
//           <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 px-6 py-2 rounded-full mb-6 font-semibold">
//             <Sparkles size={20} />
//             Free Resources
//           </div>
//           <h2 className="text-5xl sm:text-6xl font-black mb-6">
//             <span className="text-white">Prompt </span>
//             <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
//               Library
//             </span>
//           </h2>
//           <p className="text-xl text-slate-400 max-w-2xl mx-auto">
//             Ready-to-use prompts for AI tools, productivity, and development
//           </p>
//         </motion.div>

//         {/* Featured Prompt Gallery Project */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="mb-20"
//         >
//           <div className="relative bg-gradient-to-br from-cyan-500/20 to-teal-500/20 backdrop-blur-xl border border-cyan-500/30 rounded-3xl p-8 md:p-12 shadow-2xl shadow-cyan-500/20 overflow-hidden">
//             {/* Decorative Elements */}
//             <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl"></div>
//             <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl"></div>

//             <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
//               {/* Left Content */}
//               <div>
//                 <div className="inline-flex items-center gap-2 bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 px-4 py-2 rounded-full mb-6 font-semibold text-sm">
//                   <Zap size={18} />
//                   Featured Project
//                 </div>
//                 <h3 className="text-4xl sm:text-5xl font-black text-white mb-4">
//                   Prompt Gallery
//                 </h3>
//                 <p className="text-xl text-slate-300 mb-8 leading-relaxed">
//                   Explore our complete collection of AI prompts. A comprehensive gallery featuring hundreds of curated prompts for ChatGPT, Claude, Midjourney, and more.
//                 </p>
//                 <div className="flex flex-col sm:flex-row gap-4">
//                   <button
//                     onClick={() => navigate('/prompts')}
//                     className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-teal-500 text-white rounded-xl font-bold text-lg shadow-2xl shadow-cyan-500/50 hover:shadow-cyan-500/80 transition-all duration-300 hover:scale-105"
//                   >
//                     <ExternalLink size={20} />
//                     Visit Prompt Gallery
//                     <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
//                   </button>
//                   <button 
//                     onClick={() => navigate('/prompts')}
//                     className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white rounded-xl font-bold text-lg hover:bg-white/20 transition-all duration-300"
//                   >
//                     <Sparkles size={20} />
//                     Learn More
//                   </button>
//                 </div>
//               </div>

//               {/* Right Visual */}
//               <div className="relative">
//                 <div className="bg-slate-900/80 backdrop-blur-sm border border-cyan-500/30 rounded-2xl p-6 shadow-2xl">
//                   <div className="space-y-4">
//                     <div className="flex items-center justify-between">
//                       <span className="text-slate-400 text-sm">Total Prompts</span>
//                       <span className="text-3xl font-black text-cyan-400">{totalCount > 0 ? totalCount : '500+'}</span>
//                     </div>
//                     <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
//                       <motion.div
//                         initial={{ width: 0 }}
//                         whileInView={{ width: '100%' }}
//                         viewport={{ once: true }}
//                         transition={{ duration: 1.5 }}
//                         className="h-full bg-gradient-to-r from-cyan-400 to-teal-400"
//                       />
//                     </div>
//                     <div className="grid grid-cols-2 gap-4 mt-6">
//                       <div className="bg-slate-800/50 rounded-xl p-4">
//                         <div className="text-2xl font-black text-teal-400 mb-1">150+</div>
//                         <div className="text-slate-400 text-sm">ChatGPT</div>
//                       </div>
//                       <div className="bg-slate-800/50 rounded-xl p-4">
//                         <div className="text-2xl font-black text-emerald-400 mb-1">100+</div>
//                         <div className="text-slate-400 text-sm">Midjourney</div>
//                       </div>
//                       <div className="bg-slate-800/50 rounded-xl p-4">
//                         <div className="text-2xl font-black text-cyan-400 mb-1">120+</div>
//                         <div className="text-slate-400 text-sm">Claude</div>
//                       </div>
//                       <div className="bg-slate-800/50 rounded-xl p-4">
//                         <div className="text-2xl font-black text-blue-400 mb-1">130+</div>
//                         <div className="text-slate-400 text-sm">Others</div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 {/* Floating Badge */}
//                 <motion.div
//                   animate={{ y: [-10, 10, -10] }}
//                   transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
//                   className="absolute -top-4 -right-4 bg-gradient-to-br from-cyan-400 to-teal-400 text-white px-6 py-3 rounded-2xl shadow-2xl shadow-cyan-500/50 font-bold"
//                 >
//                   ⚡ New
//                 </motion.div>
//               </div>
//             </div>
//           </div>
//         </motion.div>

//         {/* Existing Prompt Categories */}
//         <div className="space-y-12">
//           {promptCategories.map((category, categoryIndex) => (
//             <motion.div
//               key={category.title}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
//             >
//               <h3 className={`text-3xl font-bold bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent mb-6`}>
//                 {category.title}
//               </h3>
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                 {category.prompts.map((prompt: PromptItem, promptIndex: number) => (
//                   <motion.div
//                     key={prompt.id}
//                     initial={{ opacity: 0, y: 20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true }}
//                     transition={{ duration: 0.5, delay: promptIndex * 0.1 }}
//                     className="group bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-1 shadow-lg"
//                   >
//                     <h4 className="text-xl font-bold text-white mb-3">
//                       {prompt.title}
//                     </h4>
//                     <p className="text-slate-400 mb-4 line-clamp-4 text-sm leading-relaxed">
//                       {prompt.prompt}
//                     </p>
//                     <button
//                       onClick={() => copyToClipboard(prompt.prompt, prompt.id)}
//                       className={`w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-semibold transition-all duration-300 ${
//                         copiedId === prompt.id
//                           ? 'bg-green-600 text-white'
//                           : `bg-gradient-to-r ${category.gradient} text-white hover:shadow-lg hover:shadow-cyan-500/50 hover:scale-105`
//                       }`}
//                     >
//                       {copiedId === prompt.id ? (
//                         <>
//                           <Check size={18} />
//                           Copied!
//                         </>
//                       ) : (
//                         <>
//                           <Copy size={18} />
//                           Copy Prompt
//                         </>
//                       )}
//                     </button>
//                   </motion.div>
//                 ))}
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default PromptsSection;
import { Copy, Check, Sparkles, Image } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase';

interface PromptItem {
  id: string;
  title?: string;
  prompt: string;
  category?: string;
  image?: string;
  createdAt?: any;
}

const PromptsSection = () => {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [promptCategories, setPromptCategories] = useState<{ title: string; gradient: string; prompts: PromptItem[] }[]>([]);
  const [totalCount, setTotalCount] = useState(0);
  const [featuredPrompts, setFeaturedPrompts] = useState<PromptItem[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    let mounted = true;
    async function fetchPrompts() {
      try {
        const snapshot = await getDocs(collection(db, 'prompts'));
        if (!mounted) return;
        const docs = snapshot.docs;
        setTotalCount(docs.length);
        if (docs.length === 0) return;

        const byCategory: Record<string, PromptItem[]> = {};
        docs.forEach((doc) => {
          const d = doc.data();
          const cat = d.category || 'General';
          if (!byCategory[cat]) byCategory[cat] = [];
          byCategory[cat].push({
            id: doc.id,
            title: d.title || `Prompt ${doc.id}`,
            prompt: d.prompt || '',
            category: cat,
            image: d.image || '',
            createdAt: d.createdAt,
          });
        });

        const gradients: Record<string, string> = {
          'YouWare Prompts': 'from-cyan-500 to-teal-500',
          'AI Tools Prompts': 'from-teal-500 to-emerald-500',
          'Productivity Prompts': 'from-blue-500 to-cyan-500',
          'General': 'from-purple-500 to-pink-500',
        };

        setPromptCategories(
          Object.entries(byCategory).map(([title, prompts]) => ({
            title,
            gradient: gradients[title] || 'from-gray-500 to-gray-600',
            prompts: [...prompts].sort((a, b) => {
              const aTime = a.createdAt?.toDate?.()?.getTime?.() ?? 0;
              const bTime = b.createdAt?.toDate?.()?.getTime?.() ?? 0;
              return bTime - aTime;
            }),
          }))
        );

        // Extract top 3 most recent prompts for featured section
        const allPrompts = Object.values(byCategory).flat();
        const sortedPrompts = allPrompts.sort((a, b) => {
          const aTime = a.createdAt?.toDate?.()?.getTime?.() ?? 0;
          const bTime = b.createdAt?.toDate?.()?.getTime?.() ?? 0;
          return bTime - aTime;
        });
        setFeaturedPrompts(sortedPrompts.slice(0, 3));
      } catch (e) {
        console.error('PromptsSection fetch error:', e);
      }
    }
    fetchPrompts();
    return () => { mounted = false; };
  }, []);

  const copyToClipboard = (prompt: string, id: string) => {
    navigator.clipboard.writeText(prompt);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  // Filtered prompts for selected category
  const filteredCategories =
    selectedCategory === "All"
      ? promptCategories
      : promptCategories.filter((cat) => cat.title === selectedCategory);

  const formatPromptMeta = (prompt: PromptItem) => {
    const created = prompt.createdAt?.toDate?.();
    if (created instanceof Date && !Number.isNaN(created.getTime())) {
      return created.toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' });
    }
    return prompt.category || '';
  };

  const openPrompt = (prompt: PromptItem) => {
    const q = (prompt.title || prompt.prompt || '').trim();
    const params = new URLSearchParams();
    if (q) params.set('q', q);
    if (prompt.category) params.set('category', prompt.category);
    navigate(`/prompts?${params.toString()}`);
  };

  return (
    <section id="prompts" className="py-24 bg-gradient-to-b from-slate-950 via-cyan-950/10 to-slate-950 relative overflow-hidden">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 px-6 py-2 rounded-full mb-6 font-semibold">
            <Sparkles size={20} />
            Free Resources
          </div>
          <h2 className="text-5xl sm:text-6xl font-black mb-6">
            <span className="text-white">{isHomePage ? 'Featured ' : 'Prompt '}</span>
            <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
              {isHomePage ? 'Prompts' : 'Library'}
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Ready-to-use prompts for AI tools, productivity, and development
          </p>
          {isHomePage && (
            <p className="text-lg text-slate-500 max-w-xl mx-auto mt-4">
              Discover our top-rated and most recent AI prompts for maximum productivity
            </p>
          )}
        </motion.div>

        {/* Conditional Content Rendering */}
        {isHomePage ? (
          // Featured View for Homepage
          <>
            {/* Featured Prompts Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
            >
              {featuredPrompts.map((prompt, index) => {
                // Find the category gradient for this prompt
                const category = promptCategories.find(cat => 
                  cat.prompts.some(p => p.id === prompt.id)
                );
                const gradient = category?.gradient || 'from-gray-500 to-gray-600';
                
                return (
                  <motion.div
                    key={prompt.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    onClick={() => openPrompt(prompt)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') openPrompt(prompt);
                    }}
                    className="group cursor-pointer bg-slate-900/60 border border-slate-800 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-1 shadow-lg focus:outline-none focus:ring-2 focus:ring-cyan-500/40"
                  >
                    {/* Thumbnail */}
                    <div className="relative h-52 overflow-hidden">
                      {prompt.image ? (
                        <img
                          src={prompt.image}
                          alt={prompt.title || 'Prompt'}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          loading="lazy"
                        />
                      ) : (
                        <div className={`w-full h-full bg-gradient-to-br ${gradient} opacity-30`} />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

                      <div className="absolute top-4 left-4 inline-flex items-center gap-2">
                        {/* Featured Badge */}
                        <span className="inline-flex items-center gap-1 bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 px-3 py-1 rounded-full text-xs font-semibold">
                          <svg width="12" height="12" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                          </svg>
                          Featured
                        </span>
                        <span className={`text-xs font-semibold bg-slate-950/70 border border-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full text-slate-200`}>
                          {prompt.category || 'General'}
                        </span>
                      </div>

                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          copyToClipboard(prompt.prompt, prompt.id);
                        }}
                        className="absolute top-4 right-4 inline-flex items-center justify-center w-10 h-10 rounded-xl bg-slate-950/60 border border-white/10 backdrop-blur-sm text-slate-200 hover:text-white hover:bg-slate-950/80 transition-colors"
                        aria-label={copiedId === prompt.id ? 'Copied' : 'Copy prompt'}
                        title={copiedId === prompt.id ? 'Copied' : 'Copy prompt'}
                      >
                        {copiedId === prompt.id ? <Check size={18} /> : <Copy size={18} />}
                      </button>

                      {!prompt.image && (
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                          <Image className="text-slate-300/60" size={40} />
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-center justify-between gap-3 mb-3">
                        <p className="text-xs text-slate-400">
                          {formatPromptMeta(prompt)}
                        </p>
                      </div>
                      <h4 className="text-xl font-black text-white mb-2 leading-snug line-clamp-2">
                        {prompt.title || 'Untitled Prompt'}
                      </h4>
                      <p className="text-slate-400 line-clamp-3 text-sm leading-relaxed">
                        {prompt.prompt}
                      </p>
                      <div className="mt-5">
                        <span className="inline-flex items-center text-sm font-semibold text-cyan-400 group-hover:text-cyan-300 transition-colors">
                          Read prompt
                          <span className="ml-2 group-hover:translate-x-0.5 transition-transform">→</span>
                        </span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Call to Action Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <button
                onClick={() => navigate('/prompts')}
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-teal-500 text-white rounded-xl font-bold text-lg shadow-2xl shadow-cyan-500/50 hover:shadow-cyan-500/80 transition-all duration-300 hover:scale-105"
              >
                <span>View All Prompts</span>
                <svg className="group-hover:translate-x-1 transition-transform" width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
              </button>
            </motion.div>
          </>
        ) : (
          // Full View for Prompts Page
          <>
            {/* Category Tabs */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <button
                onClick={() => setSelectedCategory("All")}
                className={`px-6 py-2 rounded-full font-semibold ${
                  selectedCategory === "All" ? "bg-cyan-500 text-white" : "bg-slate-800 text-slate-300"
                }`}
              >
                All
              </button>
              {promptCategories.map((cat) => (
                <button
                  key={cat.title}
                  onClick={() => setSelectedCategory(cat.title)}
                  className={`px-6 py-2 rounded-full font-semibold ${
                    selectedCategory === cat.title ? "bg-cyan-500 text-white" : "bg-slate-800 text-slate-300"
                  }`}
                >
                  {cat.title}
                </button>
              ))}
            </div>

            {/* Prompt Categories */}
            <div className="space-y-12">
              {filteredCategories.map((category, categoryIndex) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                >
                  <h3 className={`text-3xl font-bold bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent mb-6`}>
                    {category.title}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {category.prompts.map((prompt: PromptItem, promptIndex: number) => (
                      <motion.div
                        key={prompt.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: promptIndex * 0.1 }}
                        onClick={() => openPrompt(prompt)}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' || e.key === ' ') openPrompt(prompt);
                        }}
                        className="group cursor-pointer bg-slate-900/60 border border-slate-800 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-1 shadow-lg focus:outline-none focus:ring-2 focus:ring-cyan-500/40"
                      >
                        {/* Thumbnail */}
                        <div className="relative h-52 overflow-hidden">
                          {prompt.image ? (
                            <img
                              src={prompt.image}
                              alt={prompt.title || 'Prompt'}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                              loading="lazy"
                            />
                          ) : (
                            <div className={`w-full h-full bg-gradient-to-br ${category.gradient} opacity-30`} />
                          )}
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

                          <div className="absolute top-4 left-4 inline-flex items-center gap-2">
                            <span className={`text-xs font-semibold bg-slate-950/70 border border-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full text-slate-200`}>
                              {prompt.category || category.title}
                            </span>
                          </div>

                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              copyToClipboard(prompt.prompt, prompt.id);
                            }}
                            className="absolute top-4 right-4 inline-flex items-center justify-center w-10 h-10 rounded-xl bg-slate-950/60 border border-white/10 backdrop-blur-sm text-slate-200 hover:text-white hover:bg-slate-950/80 transition-colors"
                            aria-label={copiedId === prompt.id ? 'Copied' : 'Copy prompt'}
                            title={copiedId === prompt.id ? 'Copied' : 'Copy prompt'}
                          >
                            {copiedId === prompt.id ? <Check size={18} /> : <Copy size={18} />}
                          </button>

                          {!prompt.image && (
                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                              <Image className="text-slate-300/60" size={40} />
                            </div>
                          )}
                        </div>

                        {/* Content */}
                        <div className="p-6">
                          <div className="flex items-center justify-between gap-3 mb-3">
                            <p className="text-xs text-slate-400">
                              {formatPromptMeta(prompt)}
                            </p>
                          </div>
                          <h4 className="text-xl font-black text-white mb-2 leading-snug line-clamp-2">
                            {prompt.title || 'Untitled Prompt'}
                          </h4>
                          <p className="text-slate-400 line-clamp-3 text-sm leading-relaxed">
                            {prompt.prompt}
                          </p>
                          <div className="mt-5">
                            <span className="inline-flex items-center text-sm font-semibold text-cyan-400 group-hover:text-cyan-300 transition-colors">
                              Read prompt
                              <span className="ml-2 group-hover:translate-x-0.5 transition-transform">→</span>
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default PromptsSection;
