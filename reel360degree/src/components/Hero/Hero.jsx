import { motion } from "framer-motion";
import { FaArrowRight, FaPlay } from "react-icons/fa";

import heroVideo from "../../assets/videos/hero.mp4";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-black">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center justify-between px-6 pt-24 lg:flex-row lg:px-10">
        {/* Left Side */}
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 uppercase tracking-[6px] text-gray-400"
          >
            Reel 360 Degree
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 70 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-black leading-tight text-white md:text-7xl lg:text-8xl"
          >
            CREATE
            <br />
            CONTENT
            <br />
            <span className="text-gray-300">
              THAT MAKES
              <br />
              PEOPLE
            </span>
            <br />
            STOP SCROLLING.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: .5 }}
            className="mt-8 max-w-xl text-lg leading-8 text-gray-300"
          >
            We produce cinematic videos, viral reels and premium visual
            storytelling that helps brands grow across Instagram, YouTube,
            Facebook and beyond.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: .8 }}
            className="mt-10 flex flex-wrap gap-5"
          >
            <button className="flex items-center gap-3 rounded-full bg-white px-8 py-4 font-semibold text-black transition hover:scale-105">
              <FaPlay />
              View Our Work
            </button>

            <button className="flex items-center gap-3 rounded-full border border-white px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-black">
              Start Your Project
              <FaArrowRight />
            </button>
          </motion.div>
        </div>

        {/* Right Side */}
        <div className="mt-16 flex h-[450px] w-full items-center justify-center lg:mt-0 lg:w-1/2">
          <div className="flex h-80 w-80 items-center justify-center rounded-full border border-white/20 bg-white/5 backdrop-blur-md">
            <p className="text-center text-gray-400">
              3D Camera
              <br />
              Coming Next
            </p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="h-12 w-7 rounded-full border border-white flex justify-center"
        >
          <div className="mt-2 h-3 w-1 rounded-full bg-white"></div>
        </motion.div>
      </div>
    </section>
  );
}