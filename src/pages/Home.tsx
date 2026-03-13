import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      window.scrollTo({
        top: (element as HTMLElement).offsetTop - 80,
        behavior: 'smooth',
      });
      window.history.pushState(null, '', '#projects');
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Aesthetic animated background layer */}
      <div className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] bg-ink/[0.03] blur-[100px] rounded-full animate-pulse" style={{ animationDuration: '8s' }} />
      <div className="absolute bottom-[-20%] right-[-10%] w-[40vw] h-[40vw] bg-ink/[0.04] blur-[120px] rounded-full animate-pulse" style={{ animationDuration: '10s', animationDelay: '2s' }} />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-5xl"
        >
          <h1 className="text-[15vw] sm:text-[12vw] md:text-8xl lg:text-9xl leading-[0.9] font-light tracking-tighter mb-8">
            <span className="bg-clip-text text-transparent bg-gradient-to-br from-ink via-ink/80 to-ink/40">Creative</span><br />
            <span className="italic text-ink/40">Developer</span>.
          </h1>

          <div className="grid md:grid-cols-2 gap-12 md:gap-24 mt-16 md:mt-24 items-start">
            <motion.p
              className="text-lg md:text-xl leading-relaxed text-ink/80 max-w-md font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              Hi, I'm Rohit. A computer science student crafting refined digital experiences. Passionate about minimalism, motion, and building scalable software.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-8 items-start sm:items-center font-medium tracking-widest text-xs uppercase"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <a
                href="Resume.pdf"
                className="relative inline-flex items-center justify-center px-8 py-4 bg-ink text-paper rounded-full transition-transform hover:scale-105 duration-500 ease-out"
              >
                Download Résumé
              </a>

              <button
                onClick={scrollToProjects}
                className="group relative inline-flex items-center gap-2 hover:opacity-60 transition-opacity duration-300"
              >
                Selected Work
                <ArrowRight size={16} strokeWidth={1.5} className="group-hover:translate-x-2 transition-transform duration-500 ease-out" />
              </button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
