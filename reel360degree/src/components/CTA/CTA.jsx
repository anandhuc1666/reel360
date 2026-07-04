import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-[#0a0a0a] py-28 px-6">
      {/* Background Glow */}
      <div className="absolute -top-20 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-white/10 blur-[120px]" />

      <div className="relative mx-auto max-w-5xl text-center">

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="uppercase tracking-[6px] text-gray-400"
        >
          Let's Work Together
        </motion.p>

        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-6 text-5xl font-black leading-tight md:text-7xl"
        >
          READY TO MAKE
          <br />
          YOUR BRAND
          <br />
          STAND OUT?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-gray-400"
        >
          From cinematic brand films to viral social media reels,
          Reel 360 Degree helps businesses create content that
          captures attention and drives real results.
        </motion.p>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <button className="group inline-flex items-center gap-3 rounded-full bg-white px-10 py-5 text-lg font-semibold text-black transition duration-300 hover:scale-105">
            Start Your Project
            <FaArrowRight className="transition group-hover:translate-x-1" />
          </button>
        </motion.div>

      </div>
    </section>
  );
}