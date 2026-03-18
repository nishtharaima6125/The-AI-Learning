import { Play, Eye, TrendingUp, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const VideosSection = () => {
  const videos = [
    {
      id: 'vKGvB_D5nKg',
      url: 'https://youtu.be/vKGvB_D5nKg?si=kHCKZyzDjinIu9kA',
      title: 'AI Tools Masterclass',
      description: 'Complete guide to the most powerful AI tools transforming productivity in 2024.',
      color: 'from-cyan-500 to-blue-500',
    },
    {
      id: 'ck8BKtz7Q5g',
      url: 'https://youtu.be/ck8BKtz7Q5g?si=tdT7_cKglGbTYxzV',
      title: 'ChatGPT Advanced Techniques',
      description: 'Unlock the full potential of ChatGPT with these advanced prompting strategies.',
      color: 'from-teal-500 to-emerald-500',
    },
    {
      id: '1-E7fvhbIwM',
      url: 'https://youtu.be/1-E7fvhbIwM?si=NHos_3Adi_cm3y5n',
      title: 'Building with AI APIs',
      description: 'Step-by-step tutorial on integrating AI APIs into your applications.',
      color: 'from-emerald-500 to-green-500',
    },
    {
      id: 'vRqwWknZHnY',
      url: 'https://youtu.be/vRqwWknZHnY?si=c46R10ium0pwmDuT',
      title: 'Automation Workflows',
      description: 'Create powerful automation workflows that save hours of manual work.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      id: '3-iNwN2sSDQ',
      url: 'https://youtu.be/3-iNwN2sSDQ?si=cp-TjnO93nZipdSM',
      title: 'AI for Developers',
      description: 'Essential AI tools and techniques every developer should know in 2024.',
      color: 'from-cyan-500 to-teal-500',
    },
    {
      id: 'UIBTtZovx0c',
      url: 'https://youtu.be/UIBTtZovx0c?si=wXdwCcyTsETyoobt',
      title: 'Latest AI Innovations',
      description: 'Explore the newest breakthroughs and innovations in artificial intelligence.',
      color: 'from-teal-500 to-cyan-500',
    },
  ];

  return (
    <section id="videos" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.05)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 px-6 py-2 rounded-full mb-6 font-semibold">
            <TrendingUp size={20} />
            Most Popular Content
          </div>
          <h2 className="text-5xl sm:text-6xl font-black mb-4">
            <span className="text-white">Featured </span>
            <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
              Tutorials
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Watch our most popular videos and master AI tools step by step
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300 hover:-translate-y-2">
                {/* Thumbnail */}
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      e.currentTarget.src = `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`;
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent"></div>
                  
                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className={`w-20 h-20 bg-gradient-to-br ${video.color} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-2xl`}>
                      <Play fill="white" className="text-white ml-1" size={32} />
                    </div>
                  </div>
                  
                  {/* Badge */}
                  <div className="absolute top-4 right-4 bg-slate-950/80 backdrop-blur-sm border border-cyan-500/30 px-3 py-1.5 rounded-full flex items-center gap-2 text-cyan-400 text-sm font-semibold">
                    <Eye size={16} />
                    Popular
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-cyan-400 transition-colors">
                    {video.title}
                  </h3>
                  <p className="text-slate-400 mb-6 line-clamp-2 text-sm">
                    {video.description}
                  </p>
                  <a
                    href={video.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${video.color} text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105`}
                  >
                    <ExternalLink size={18} />
                    Watch Now
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideosSection;
