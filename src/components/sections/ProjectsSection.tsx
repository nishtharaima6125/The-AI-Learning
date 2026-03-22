import { Calendar, Loader, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'AI Agency Automation Suite',
      status: 'In Progress',
      statusColor: 'bg-blue-500',
      description: 'Building a complete automation suite for AI agencies including client onboarding, project management, and reporting dashboards.',
      month: 'May 2026',
      progress: 65,
    },
    {
      title: 'Prompt Engineering Masterclass',
      status: 'Coming Soon',
      statusColor: 'bg-purple-500',
      description: 'Comprehensive video series covering advanced prompt engineering techniques for GPT-4, Claude, and other LLMs.',
      month: 'June 2026',
      progress: 30,
    },
    {
      title: 'AI Tools Comparison Platform',
      status: 'Coming Soon',
      statusColor: 'bg-green-500',
      description: 'Interactive platform comparing features, pricing, and performance of 100+ AI tools across different categories.',
      month: 'July 2026',
      progress: 15,
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-slate-950 via-cyan-950/10 to-slate-950 relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full mb-4">
            <Sparkles size={20} />
            <span className="font-semibold">What's Next</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Upcoming Projects
          </h2>
          <p className="text-xl text-slate-400">
            Exciting new content and tools in development
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-slate-900/60 border border-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-2 overflow-hidden"
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                  backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)',
                  backgroundSize: '20px 20px'
                }}></div>
              </div>

              {/* Status Badge */}
              <div className="relative flex items-center gap-2 mb-4">
                <span className={`${project.statusColor} text-white px-4 py-1.5 rounded-full text-sm font-semibold flex items-center gap-2`}>
                  {project.status === 'In Progress' ? <Loader className="animate-spin" size={14} /> : <Sparkles size={14} />}
                  {project.status}
                </span>
              </div>

              {/* Content */}
              <h3 className="relative text-2xl font-bold text-white mb-3">
                {project.title}
              </h3>
              <p className="relative text-slate-400 mb-6 leading-relaxed">
                {project.description}
              </p>

              {/* Progress Bar */}
              <div className="relative mb-4">
                <div className="w-full bg-slate-700 rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${project.progress}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className={`${project.statusColor} h-2 rounded-full`}
                  ></motion.div>
                </div>
                <span className="text-sm text-slate-400 mt-2 inline-block">{project.progress}% Complete</span>
              </div>

              {/* Date */}
              <div className="relative flex items-center gap-2 text-slate-400">
                <Calendar size={18} />
                <span className="font-medium">{project.month}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
