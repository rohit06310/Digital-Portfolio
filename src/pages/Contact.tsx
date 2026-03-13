import { motion } from 'framer-motion';

const socialLinks = [
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/rohit-k-a980a8391' },
  { name: 'GitHub', url: 'https://github.com/rohit06310' },
  { name: 'LeetCode', url: 'https://leetcode.com/u/Rohitvishal/' },
];

export default function Contact() {
  return (
    <div className="bg-ink text-paper py-32 mt-32 relative overflow-hidden w-full">
      <div className="px-6 lg:px-12 max-w-7xl mx-auto flex flex-col gap-16 lg:gap-32">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-16">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-6xl md:text-8xl lg:text-[10rem] font-light tracking-tighter mb-4 lg:mb-8 leading-[0.85] max-w-3xl">
              <span className="italic">Get In</span><br />
              Touch.
            </h2>
            <a href="mailto:rohitk06102005@gmail.com" className="text-xl md:text-3xl font-display underline decoration-1 underline-offset-[12px] hover:text-white/50 transition-colors">
              rohitk2005@gmail.com
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="flex flex-col gap-6 font-medium uppercase tracking-widest text-sm"
          >
            {socialLinks.map((link) => (
              <a key={link.name} href={link.url} className="hover:opacity-50 transition-opacity md:text-right hover:italic">
                {link.name}
              </a>
            ))}
          </motion.div>

        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="pt-8 border-t border-paper/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium uppercase tracking-widest text-paper/40"
        >
          <p>© {new Date().getFullYear()} Rohit. All rights reserved.</p>
          <p>Defined by restraint.</p>
        </motion.div>
      </div>
    </div>
  );
}
