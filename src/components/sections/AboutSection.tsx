import { motion } from 'framer-motion';
import { Sparkles, User, Briefcase, GraduationCap } from 'lucide-react';

// const AboutSection = () => {
//   const leadership = [
//     {
//       name: 'Dayanand Vishwakarma',
//       role: 'Founder',
//       icon: Briefcase,
//       image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
//       bio: 'With a background in chemical engineering, Dayanand transitioned into the world of technology driven by a deep interest in artificial intelligence and innovation. He founded The AI Learning to bridge the gap between traditional education and future-ready AI skills, making cutting-edge technology accessible to everyone.',
//       gradient: 'from-cyan-500 to-teal-500',
//     },
//     {
//       name: 'Nishtha Modi',
//       role: 'CEO & AI Engineer',
//       icon: GraduationCap,
//       image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
//       bio: 'Nishtha is a final-year AI engineering student with a strong passion for building intelligent systems and applied AI solutions. She leads the technical vision of The AI Learning, focusing on AI engineering, experimentation, and real-world implementation of emerging technologies.',
//       gradient: 'from-teal-500 to-emerald-500',
//     },
//   ];

//   return (
//     <section id="about" className="py-24 bg-gradient-to-b from-slate-950 via-cyan-950/10 to-slate-950 relative overflow-hidden">
//       {/* Grid Background */}
//       <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-16"
//         >
//           <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 px-6 py-2 rounded-full mb-6 font-semibold">
//             <Sparkles size={20} />
//             About Us
//           </div>
//           <h2 className="text-5xl sm:text-6xl font-black mb-6">
//             <span className="text-white">About </span>
//             <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
//               The AI Learning
//             </span>
//           </h2>
//         </motion.div>

//         {/* Mission Statement */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6, delay: 0.1 }}
//           className="mb-20"
//         >
//           <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 md:p-12 shadow-2xl">
//             <div className="max-w-4xl mx-auto">
//               <h3 className="text-3xl font-bold text-white mb-6">Our Mission</h3>
//               <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
//                 <p>
//                   <span className="text-cyan-400 font-semibold">The AI Learning</span> is an emerging AI-focused initiative built with a simple belief: artificial intelligence should be <span className="text-white font-semibold">understandable, accessible, and useful for everyone</span>.
//                 </p>
//                 <p>
//                   We are creating a learning-driven AI environment where students, creators, and innovators can explore modern AI tools, experiment with real-world use cases, and build practical solutions—<span className="text-white font-semibold">without needing a heavy technical background</span>.
//                 </p>
//                 <p>
//                   Through hands-on tutorials, honest tool reviews, and step-by-step guides, we help you discover how AI can transform your productivity, creativity, and business outcomes in today's rapidly evolving technological landscape.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </motion.div>

//         {/* Leadership Section */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6, delay: 0.2 }}
//           className="mb-12"
//         >
//           <h3 className="text-4xl font-bold text-center text-white mb-12">
//             Our <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">Leadership</span>
//           </h3>

//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//             {leadership.map((leader, index) => (
//               <motion.div
//                 key={leader.name}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
//                 className="group relative"
//               >
//                 <div className="relative bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300 shadow-xl">
//                   {/* Profile Image */}
//                   <div className="relative h-80 overflow-hidden">
//                     <img
//                       src={leader.image}
//                       alt={leader.name}
//                       className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent"></div>
                    
//                     {/* Floating Badge */}
//                     <div className={`absolute top-6 right-6 bg-gradient-to-r ${leader.gradient} text-white px-4 py-2 rounded-xl font-bold shadow-lg flex items-center gap-2`}>
//                       <leader.icon size={20} />
//                       {leader.role}
//                     </div>
//                   </div>

//                   {/* Content */}
//                   <div className="p-8">
//                     <h4 className="text-3xl font-black text-white mb-2">
//                       {leader.name}
//                     </h4>
//                     <p className={`text-lg font-semibold bg-gradient-to-r ${leader.gradient} bg-clip-text text-transparent mb-4`}>
//                       {leader.role}
//                     </p>
//                     <p className="text-slate-400 leading-relaxed">
//                       {leader.bio}
//                     </p>
//                   </div>

//                   {/* Decorative Corner */}
//                   <div className={`absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl ${leader.gradient} opacity-10 rounded-tl-full`}></div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>

//         {/* Core Values */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6, delay: 0.4 }}
//           className="mt-20"
//         >
//           <h3 className="text-3xl font-bold text-center text-white mb-12">
//             What We Stand For
//           </h3>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             {[
//               {
//                 title: 'Accessibility',
//                 description: 'Making AI education available to everyone, regardless of technical background',
//                 icon: '🌐',
//               },
//               {
//                 title: 'Practical Learning',
//                 description: 'Focus on real-world applications and hands-on experimentation',
//                 icon: '🎯',
//               },
//               {
//                 title: 'Innovation',
//                 description: 'Exploring emerging technologies and future-ready AI solutions',
//                 icon: '🚀',
//               },
//             ].map((value, index) => (
//               <motion.div
//                 key={value.title}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
//                 className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-300"
//               >
//                 <div className="text-4xl mb-4">{value.icon}</div>
//                 <h4 className="text-xl font-bold text-white mb-3">{value.title}</h4>
//                 <p className="text-slate-400">{value.description}</p>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default AboutSection;
// AboutSection.tsx
const AboutSection = () => {
  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-b from-slate-950 via-cyan-950/10 to-slate-950 relative overflow-hidden"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 px-6 py-2 rounded-full mb-6 font-semibold">
            About Us
          </div>
          <h2 className="text-5xl sm:text-6xl font-black mb-6 relative">
            <span className="text-white">About </span>
            <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
              The AI Learning
            </span>
          </h2>
        </div>

        {/* Mission Statement */}
        <div className="mb-20">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 md:p-12 shadow-2xl">
            <h3 className="text-3xl font-bold text-white mb-6">Our Mission</h3>
            <p className="text-lg text-slate-300 leading-relaxed">
              <span className="text-cyan-400 font-semibold">The AI Learning</span> is an emerging AI-focused initiative built with a simple belief: AI should be understandable, accessible, and useful for everyone.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
