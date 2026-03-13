import { motion } from 'framer-motion';
import { ArrowUpRight, Github } from 'lucide-react';

const projects = [
  {
    title: 'AI Test Case Generator',
    description: 'An intelligent test case generation system powered by open-source LLM models (Ollama) and FAISS vector database for semantic search and context-aware test case creation.',
    image: 'https://imgs.search.brave.com/wOsNjwm9o-aRwWSgRNT3Dyt7lr1lb8NpNXud9Qy0Y4E/rs:fit:0:180:1:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMua3BtZy5jb20v/aXMvaW1hZ2Uva3Bt/Z2Nsb3VkL2FnZW50/aWMtYWktdGhlLWZ1/dHVyZS1vZi1hdXRv/bm9tb3VzLWludGVs/bGlnZW5jZS10aHVt/Ym5haWw6Y3E1ZGFt/LXdlYi0xOTc2LTg3/OD93aWQ9MzYwJmhl/aT0xNjA',
    github: 'https://github.com/rohit06310/AI-TestCase-Generator',
    demo: '#',
  },
  {
    title: 'OtakuReads',
    description: 'A platform for anime and manga enthusiasts to discover, track, and discuss their favorite series. Features personalized recommendations, community forums, and a seamless reading experience.',
    image: 'Home.png',
    github: 'https://github.com/rohit06310/OtakuReads',
    demo: '#',
  },
  {
    title: 'Digital Portfolio',
    description: 'Modern portfolio website showcasing projects and skills. Built with React, Tailwind CSS, and Framer Motion for smooth animations.',
    image: 'https://imgs.search.brave.com/5frq2rrxs6fDWzQ7qBhpw7xMQM8xwz7RpIJJMNs3o18/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9taXIt/czMtY2RuLWNmLmJl/aGFuY2UubmV0L3By/b2plY3RzLzQwNC9i/ZDM1MzIyMTc0MTA0/ODUuWTNKdmNDd3pN/all4TERJMU5URXNN/VFlzTUEuanBn',
    github: 'https://github.com/rohit06310/Digital-Portfolio',
    demo: '#',
  },
];

export default function Projects() {
  return (
    <div className="py-32 px-6 lg:px-12 max-w-7xl mx-auto border-t border-ink/10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="mb-24 md:mb-40"
      >
        <h2 className="text-5xl md:text-7xl font-light tracking-tighter">
          Selected <span className="italic text-ink/40">Work</span>.
        </h2>
      </motion.div>

      <div className="space-y-40">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="group grid lg:grid-cols-[1.5fr_1fr] gap-12 lg:gap-24 items-center"
          >
            <div className={`overflow-hidden bg-ink/5 ${index % 2 !== 0 ? 'lg:order-2' : ''}`}>
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.1, ease: [0.16, 1, 0.3, 1] }}
                src={project.image}
                alt={project.title}
                className="w-full aspect-[4/3] md:aspect-[16/9] object-cover filter grayscale group-hover:grayscale-0 transition-all duration-100 mix-blend-multiply"
              />
            </div>

            <div className={`flex flex-col justify-center ${index % 2 !== 0 ? 'lg:order-1 lg:text-right' : ''}`}>
              <h3 className="text-3xl md:text-5xl font-display tracking-tight mb-8 group-hover:italic transition-all duration-100">
                {project.title}
              </h3>

              <p className="text-lg text-ink/70 leading-relaxed font-light mb-12 lg:max-w-md">
                {project.description}
              </p>

              <div className={`flex items-center gap-8 text-sm font-medium uppercase tracking-widest text-ink/80 ${index % 2 !== 0 ? 'lg:justify-end' : ''}`}>
                <a href={project.github} className="flex items-center gap-2 hover:opacity-50 transition-opacity">
                  <Github size={16} strokeWidth={1.5} /> Code
                </a>
                
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
