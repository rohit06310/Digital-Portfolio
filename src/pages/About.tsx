import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="py-32 px-6 lg:px-12 max-w-7xl mx-auto border-t border-ink/10 mt-32">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="grid md:grid-cols-[1fr_2fr] gap-12 md:gap-24 items-start"
      >
        <h2 className="text-5xl md:text-7xl font-light tracking-tighter">
          About <span className="italic text-ink/40">Me</span>.
        </h2>

        <div className="space-y-10 text-xl md:text-3xl leading-snug font-light text-ink/90">
          <p className="text-lg md:text-xl text-ink/60 max-w-2xl font-medium tracking-wide">
            I'm <span className="font-medium">Rohit</span>, a 3rd year BE CSE student at{' '}
            <span className="italic">Sri Shakthi Institute of Engineering and Technology</span>.
            I focus on bridging the gap between elegant design and robust engineering.
          </p>

          <p className="text-lg md:text-xl text-ink/60 max-w-2xl font-medium tracking-wide">
            Passionate about AI, software architecture, and crafting user interfaces that feel intuitive and memorable. My approach is centered around creating <span className="italic font-display text-4xl">less, but better</span>.
          </p>

          <p className="text-lg md:text-xl text-ink/60 max-w-2xl font-medium tracking-wide">
            Currently refining my engineering skills while seeking out projects that challenge traditional aesthetics and demand technical excellence.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
