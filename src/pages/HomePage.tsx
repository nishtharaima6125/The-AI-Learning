// import HeroSection from '../components/sections/HeroSection';
// import VideosSection from '../components/sections/VideosSection';
// import FeaturesSection from '../components/sections/FeaturesSection';
// import ProjectsSection from '../components/sections/ProjectsSection';
// import BlogsSection from '../components/sections/BlogsSection';
// import PromptsSection from '../components/sections/PromptsSection';
// import AboutSection from '../components/sections/AboutSection';
// import ContactSection from '../components/sections/ContactSection';

// const HomePage = () => {
//   return (
//     <main>
//       <HeroSection />
//       <VideosSection />
//       <FeaturesSection />
//       <ProjectsSection />
//       <BlogsSection />
//       <PromptsSection />
//       <AboutSection />
//       <ContactSection />
//     </main>
//   );
// };

// export default HomePage;
import HeroSection from '../components/sections/HeroSection';
import VideosSection from '../components/sections/VideosSection';
import FeaturesSection from '../components/sections/FeaturesSection';
import ProjectsSection from '../components/sections/ProjectsSection';
import BlogsSection from '../components/sections/BlogsSection';
import PromptsSection from '../components/sections/PromptsSection';
import AboutSection from '../components/sections/AboutSection';
import ContactSection from '../components/sections/ContactSection';

const HomePage = () => {
  return (
    <main>
      <HeroSection />
      <VideosSection />
      <FeaturesSection />
      <ProjectsSection />
      <BlogsSection />
      <PromptsSection />

      {/* About Section with bottom margin */}
      <section className="py-24">
        <AboutSection />
      </section>

      {/* Contact Section with top margin to avoid overlap */}
      <section className="py-24 mt-20">
        <ContactSection />
      </section>
    </main>
  );
};

export default HomePage;
