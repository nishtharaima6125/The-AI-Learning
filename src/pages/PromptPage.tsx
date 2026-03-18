import { Copy, Check, ArrowLeft, Search, Image } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';

interface Prompt {
  id: string;
  prompt: string;
  image?: string;
  title?: string;
  category?: string;
  createdAt?: any;
}

const PromptPage = () => {
  const navigate = useNavigate();
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [prompts, setPrompts] = useState<Prompt[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch prompts from Firebase (simple getDocs to avoid rules/index issues)
  useEffect(() => {
    async function fetchPrompts() {
      try {
        const snapshot = await getDocs(collection(db, "prompts"));
        if (snapshot.empty) {
          setPrompts([]);
          setLoading(false);
          return;
        }
        const promptsData: Prompt[] = snapshot.docs.map((doc) => {
          const data = doc.data();
          return {
            id: doc.id,
            prompt: data.prompt || "",
            image: data.image || "",
            title: data.title || `Prompt ${doc.id}`,
            category: data.category || "General",
            createdAt: data.createdAt,
          };
        });
        promptsData.sort((a, b) => {
          if (!a.createdAt && !b.createdAt) return 0;
          if (!a.createdAt) return 1;
          if (!b.createdAt) return -1;
          const aTime = a.createdAt?.toDate?.()?.getTime() || 0;
          const bTime = b.createdAt?.toDate?.()?.getTime() || 0;
          return bTime - aTime;
        });
        setPrompts(promptsData);
      } catch (error) {
        console.error("Error fetching prompts:", error);
        setPrompts([]);
      } finally {
        setLoading(false);
      }
    }
    fetchPrompts();
  }, []);

  // Group prompts by category
  const getCategoryGradient = (category: string) => {
    const gradients: { [key: string]: string } = {
      'YouWare Prompts': 'from-cyan-500 to-teal-500',
      'AI Tools Prompts': 'from-teal-500 to-emerald-500',
      'Productivity Prompts': 'from-blue-500 to-cyan-500',
      'General': 'from-purple-500 to-pink-500',
    };
    return gradients[category] || 'from-gray-500 to-gray-600';
  };

  const groupedPrompts = prompts.reduce((acc, prompt) => {
    const category = prompt.category || 'General';
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(prompt);
    return acc;
  }, {} as { [key: string]: Prompt[] });

  const promptCategories = Object.keys(groupedPrompts).map(category => ({
    title: category,
    gradient: getCategoryGradient(category),
    prompts: groupedPrompts[category],
  }));

  const copyToClipboard = (prompt: string, id: string) => {
    navigator.clipboard.writeText(prompt);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const allPrompts = promptCategories.flatMap(category => 
    category.prompts.map(prompt => ({ ...prompt, category: category.title, gradient: category.gradient }))
  );

  const filteredPrompts = searchQuery
    ? allPrompts.filter(
        (prompt) =>
          (prompt.title || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
          prompt.prompt.toLowerCase().includes(searchQuery.toLowerCase()) ||
          (prompt.category || '').toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  return (
    <div className="min-h-screen pt-16 pb-20 bg-slate-950">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 mb-6 transition-colors"
          >
            <ArrowLeft size={20} />
            Back to Home
          </button>
          <h1 className="text-6xl font-black mb-4">
            <span className="text-white">Prompt </span>
            <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
              Library
            </span>
          </h1>
          <p className="text-xl text-slate-400">
            Discover and copy ready-to-use AI prompts for productivity and development
          </p>
          {loading && (
            <p className="text-slate-500 mt-2">Loading prompts...</p>
          )}
          {!loading && prompts.length === 0 && (
            <p className="text-slate-500 mt-2">No prompts available yet. Add prompts from admin dashboard.</p>
          )}
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12"
        >
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
            <input
              type="text"
              placeholder="Search prompts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-2xl border-2 border-slate-800 bg-slate-900 text-white focus:border-cyan-500 focus:outline-none transition-colors"
            />
          </div>
          {searchQuery && (
            <p className="mt-4 text-center text-slate-400">
              Found {filteredPrompts.length} result{filteredPrompts.length !== 1 ? 's' : ''}
            </p>
          )}
        </motion.div>

        {/* Display Search Results or All Categories */}
        {loading ? (
          <div className="text-center py-20">
            <p className="text-2xl text-slate-400">Loading prompts...</p>
          </div>
        ) : prompts.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-2xl text-slate-400 mb-4">No prompts available yet.</p>
            <p className="text-slate-500">Add prompts from the admin dashboard to see them here.</p>
          </div>
        ) : searchQuery ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPrompts.map((prompt, index) => (
              <motion.div
                key={prompt.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-1 shadow-lg"
              >
                {/* Image Section */}
                <div className="relative h-48 overflow-hidden">
                  {prompt.image ? (
                    <img
                      src={prompt.image}
                      alt={prompt.title || 'Prompt'}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
                      <Image className="text-slate-600" size={40} />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
                  <div className={`absolute top-4 left-4 text-xs font-semibold bg-gradient-to-r ${prompt.gradient} px-3 py-1.5 rounded-full text-white shadow-lg`}>
                    {prompt.category}
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6">
                  <h4 className="text-xl font-bold text-white mb-3">
                    {prompt.title || 'Untitled Prompt'}
                  </h4>
                  <p className="text-slate-400 mb-4 line-clamp-3 text-sm leading-relaxed">
                    {prompt.prompt}
                  </p>
                  <button
                    onClick={() => copyToClipboard(prompt.prompt, prompt.id)}
                    className={`w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-semibold transition-all duration-300 ${
                      copiedId === prompt.id
                        ? 'bg-green-600 text-white'
                        : `bg-gradient-to-r ${prompt.gradient} text-white hover:shadow-lg hover:shadow-cyan-500/50 hover:scale-105`
                    }`}
                  >
                    {copiedId === prompt.id ? (
                      <>
                        <Check size={18} />
                        Copied!
                      </>
                    ) : (
                      <>
                        <Copy size={18} />
                        Copy Prompt
                      </>
                    )}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        ) : promptCategories.length > 0 ? (
          <div className="space-y-12">
            {promptCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + categoryIndex * 0.1 }}
              >
                <h3 className={`text-3xl font-bold bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent mb-6`}>
                  {category.title}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.prompts.map((prompt, promptIndex) => (
                    <motion.div
                      key={prompt.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: promptIndex * 0.1 }}
                      className="group bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-1 shadow-lg"
                    >
                      {/* Image Section */}
                      <div className="relative h-48 overflow-hidden">
                        {prompt.image ? (
                          <img
                            src={prompt.image}
                            alt={prompt.title || 'Prompt'}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        ) : (
                          <div className="w-full h-full bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
                            <Image className="text-slate-600" size={40} />
                          </div>
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
                        <div className="absolute top-4 right-4 p-2 bg-slate-900/80 backdrop-blur-sm rounded-lg">
                          <Image className="text-cyan-400" size={20} />
                        </div>
                      </div>

                      {/* Content Section */}
                      <div className="p-6">
                        <h4 className="text-xl font-bold text-white mb-3">
                          {prompt.title || 'Untitled Prompt'}
                        </h4>
                        <p className="text-slate-400 mb-4 line-clamp-3 text-sm leading-relaxed">
                          {prompt.prompt}
                        </p>
                        <button
                          onClick={() => copyToClipboard(prompt.prompt, prompt.id)}
                          className={`w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-semibold transition-all duration-300 ${
                            copiedId === prompt.id
                              ? 'bg-green-600 text-white'
                              : `bg-gradient-to-r ${category.gradient} text-white hover:shadow-lg hover:shadow-cyan-500/50 hover:scale-105`
                          }`}
                        >
                          {copiedId === prompt.id ? (
                            <>
                              <Check size={18} />
                              Copied!
                            </>
                          ) : (
                            <>
                              <Copy size={18} />
                              Copy Prompt
                            </>
                          )}
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-2xl text-slate-400">No prompts found.</p>
          </div>
        )}

        {filteredPrompts.length === 0 && searchQuery && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-2xl text-slate-400">
              No prompts found matching your search.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default PromptPage;
