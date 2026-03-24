import { Youtube, Mail, Sparkles, ArrowRight, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToVideos = () => {
    const element = document.getElementById('videos');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 bg-gradient-to-br from-slate-950 via-cyan-950 to-teal-950">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.1)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      
      {/* Animated Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.p
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/30 rounded-full blur-[100px]"
        />
        <motion.p
          animate={{
            scale: [1.3, 1, 1.3],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-500/30 rounded-full blur-[100px]"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.p
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            {/* Badge */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/30 backdrop-blur-sm px-5 py-2 rounded-full mb-8"
            >
              <Zap className="text-cyan-400" size={18} />
              <span className="text-cyan-100 font-medium text-sm">Transform Your AI Skills</span>
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6 leading-tight"
            >
              <span className="text-white dark:text-white">The AI</span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400 bg-clip-text text-transparent">
                Learning 
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-cyan-400 font-medium mb-6"
            >
             Your AI Skill Partner — Learn cutting-edge AI tools, automation workflows, and AI content creation. Build AI influencers, generate videos, and grow your brand with modern AI technologies
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <a
                href="https://youtube.com/@theailearning"
                target="_blank"
                rel="noopener noreferrer"
                className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-teal-500 text-white rounded-xl font-bold text-lg shadow-2xl shadow-cyan-500/50 hover:shadow-cyan-500/80 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3"
              >
                <Youtube size={24} />
                Start Learning
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </a>
              <button
                onClick={scrollToContact}
                className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white rounded-xl font-bold text-lg hover:bg-white/20 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3"
              >
                <Mail size={24} />
                Contact Us
              </button>
            </motion.p>

            {/* Stats */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-3 gap-6"
            >
              <div className="text-center lg:text-left">
                <div className="text-3xl font-black text-cyan-400">60K+</div>
                <div className="text-sm text-slate-400 mt-1">Subscribers</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-black text-teal-400">60+</div>
                <div className="text-sm text-slate-400 mt-1">Tutorials</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-black text-emerald-400">3M+</div>
                <div className="text-sm text-slate-400 mt-1">Views</div>
              </div>
            </motion.p>
          </motion.p>

          {/* Right Visual Element */}
          <motion.p
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              {/* Glowing Card */}
              <div className="relative bg-gradient-to-br from-cyan-500/20 to-teal-500/20 backdrop-blur-xl border border-cyan-500/30 rounded-3xl p-8 shadow-2xl shadow-cyan-500/20">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-teal-400 rounded-2xl flex items-center justify-center shadow-lg">
                      <Sparkles className="text-white" size={32} />
                    </div>
                    <div>
                      <div className="text-white font-bold text-xl">AI Mastery</div>
                      <div className="text-slate-400 text-sm">Learn & Grow Daily</div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    {[
                      { label: 'ChatGPT Mastery', progress: 95 },
                      { label: 'Automation Tools', progress: 88 },
                      { label: 'Prompt Engineering', progress: 92 },
                    ].map((skill, i) => (
                      <div key={i}>
                        <div className="flex justify-between text-sm mb-2">
                          <span className="text-slate-300">{skill.label}</span>
                          <span className="text-cyan-400 font-bold">{skill.progress}%</span>
                        </div>
                        <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                          <motion.p
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.progress}%` }}
                            transition={{ duration: 1.5, delay: 0.5 + i * 0.2 }}
                            className="h-full bg-gradient-to-r from-cyan-400 to-teal-400 rounded-full"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.p
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-cyan-400 to-teal-400 rounded-2xl shadow-2xl shadow-cyan-500/50 flex items-center justify-center"
              >
                <Zap className="text-white" size={40} />
              </motion.p>

              <motion.p
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-to-br from-teal-400 to-emerald-400 rounded-2xl shadow-2xl shadow-teal-500/50"
              />
            </div>
          </motion.p>
        </div>

        {/* Scroll Indicator */}
        <motion.button
          onClick={scrollToVideos}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
        >
          <div className="flex flex-col items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors">
            <span className="text-sm font-medium">Explore Content</span>
            <motion.p
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowRight className="rotate-90" size={24} />
            </motion.p>
          </div>
        </motion.button>
      </div>
    </section>
  );
};

export default HeroSection;
