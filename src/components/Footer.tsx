import { Youtube, Instagram, Twitter, Linkedin, Heart } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Youtube, href: 'https://youtube.com/@theailearning', label: 'YouTube' },
    { icon: Instagram, href: 'https://www.instagram.com/theailearning/', label: 'Instagram' },
    { icon: Twitter, href: 'https://x.com/theailearning', label: 'Twitter' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/the-ai-learning-b75a44396/', label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center space-y-8">
          {/* Logo */}
          <div className="text-center">
            <div className="text-3xl font-black mb-2">
              <span className="text-white">The AI </span>
              <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
                Learning
              </span>
            </div>
            <p className="text-slate-400 text-sm">
              Empowering creators with AI knowledge
            </p>
          </div>

          {/* Social Links */}
          <div className="flex space-x-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-4 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/50 shadow-lg transition-all duration-300 hover:scale-110"
                aria-label={social.label}
              >
                <social.icon size={24} />
              </a>
            ))}
          </div>

          {/* Divider */}
          <div className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent"></div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-slate-400 text-sm flex items-center gap-2 justify-center">
              Made with <Heart size={16} className="text-cyan-400 fill-cyan-400" /> by The AI Learning
            </p>
            <p className="text-slate-500 text-xs mt-2">
              © {new Date().getFullYear()} The AI Learning. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
