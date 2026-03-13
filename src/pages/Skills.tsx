import { motion } from 'framer-motion';

const skills = [
  'HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS',
  'Framer Motion', 'Node.js', 'Python', 'UI/UX Design', 'Problem Solving'
];

export default function Skills() {
  return (
    <div className="py-32 px-6 lg:px-12 max-w-7xl mx-auto border-t border-ink/10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="grid md:grid-cols-[1fr_2fr] gap-12 md:gap-24 items-start"
      >
        <h2 className="text-5xl md:text-7xl font-light tracking-tighter sticky top-32">
          Technical<br />
          <span className="italic text-ink/40">Skills.</span>
        </h2>

        <div className="flex flex-wrap gap-4 mt-4 md:mt-0">
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, filter: 'blur(10px)' }}
              whileInView={{ opacity: 1, filter: 'blur(0px)' }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.05 }}
              className="px-6 py-4 border border-ink/10 rounded-full text-base md:text-lg font-medium tracking-wide text-ink/80 hover:bg-ink hover:text-paper transition-colors duration-500 cursor-default"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
