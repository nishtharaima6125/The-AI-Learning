import { BookOpen, Wrench, Video, Globe, Zap, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

const FeaturesSection = () => {
  const features = [
    {
      icon: BookOpen,
      title: 'Easy AI Tutorials',
      description: 'Step-by-step guides that make complex AI concepts simple and accessible for everyone.',
      color: 'cyan',
    },
    {
      icon: Wrench,
      title: 'Tool Reviews',
      description: 'In-depth analysis and honest reviews of the latest AI tools and platforms.',
      color: 'teal',
    },
    {
      icon: Video,
      title: 'Real-World Demos',
      description: 'Practical demonstrations showing AI tools in action solving real problems.',
      color: 'emerald',
    },
    {
      icon: Globe,
      title: 'Website Building',
      description: 'Learn how to create stunning websites using AI-powered tools and no-code platforms.',
      color: 'blue',
    },
    {
      icon: Zap,
      title: 'Productivity + Automation',
      description: 'Automate repetitive tasks and boost your productivity with smart AI workflows.',
      color: 'cyan',
    },
    {
      icon: TrendingUp,
      title: 'Trending Tech Updates',
      description: 'Stay ahead with the latest news, trends, and breakthroughs in AI and technology.',
      color: 'teal',
    },
  ];

  return (
    <section id="features" className="py-24 bg-gradient-to-b from-slate-950 via-cyan-950/10 to-slate-950 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl sm:text-6xl font-black mb-6">
            <span className="text-white">What You'll </span>
            <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
              Discover
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Comprehensive content covering everything you need to excel in AI and technology
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300 h-full">
                {/* Icon */}
                <div className={`w-14 h-14 bg-gradient-to-br from-${feature.color}-500 to-${feature.color}-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg shadow-${feature.color}-500/50`}>
                  <feature.icon className="text-white" size={28} />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover Glow Effect */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br from-${feature.color}-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
