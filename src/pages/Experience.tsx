import { motion } from 'framer-motion';

const experiences = [
  {
    title: 'Python Developer Intern',
    organization: 'Cybernaut EduTech',
    type: 'Internship',
    year: '2025',
    description: 'Preprocessed datasets using Pandas & NumPy, trained ML models using Scikit-learn, and evaluated performance using accuracy and regression metrics.',
  },
  {
    title: 'Project Developer',
    organization: 'College Projects',
    type: 'Project',
    year: '2023-2024',
    description: 'Real-Time AI based SignLanguage Translator with OpenCV and Tensorflow',
  },
  {
    title: 'Hackathon Participant',
    organization: 'Various Events',
    type: 'Competition',
    year: '2023-2024',
    description: 'Participated in various hackathons and developed innovative solutions to real-world problems.',
  },
];

export default function Experience() {
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
          Experience<span className="italic text-ink/40">.</span>
        </h2>

        <div className="space-y-16">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group border-t border-ink/10 pt-8 mt-8 first:mt-0 first:border-0 first:pt-0"
            >
              <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-4 gap-4">
                <h3 className="text-2xl md:text-3xl font-display tracking-tight group-hover:italic transition-all duration-300">
                  {exp.title}
                </h3>
                <span className="font-medium text-ink/40 tracking-widest text-xs uppercase">
                  {exp.year}
                </span>
              </div>

              <div className="flex items-center gap-4 text-sm font-medium uppercase tracking-widest text-ink/60 mb-6">
                <span>{exp.organization}</span>
                <span className="w-1 h-1 bg-ink/20 rounded-full" />
                <span>{exp.type}</span>
              </div>

              <p className="text-lg text-ink/80 leading-relaxed font-light max-w-2xl">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
