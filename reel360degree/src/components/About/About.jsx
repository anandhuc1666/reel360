import { motion } from "framer-motion";
import {
  FaCheckCircle,
  FaBullseye,
  FaEye,
} from "react-icons/fa";

export default function About() {
  return (
    <section
      id="about"
      className="bg-[#050505] py-28 px-6 lg:px-10"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* Left Side */}
        <motion.div
          initial={{ x: -80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
          className="relative"
        >
          <img
            src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=1000&q=80"
            alt="Reel360Degree"
            className="rounded-3xl object-cover h-[650px] w-full"
          />

          <div className="absolute bottom-8 left-8 rounded-2xl bg-black/80 backdrop-blur-md border border-white/10 p-6">
            <h3 className="text-4xl font-black">
              250+
            </h3>

            <p className="text-gray-300 mt-2">
              Successful Projects
            </p>
          </div>
        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ x: 80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
        >

          <p className="uppercase tracking-[6px] text-gray-400">
            About Us
          </p>

          <h2 className="text-5xl md:text-6xl font-black mt-4 leading-tight">
            We Don't Just
            <br />
            Shoot Videos.
            <br />
            <span className="text-gray-300">
              We Build Brands.
            </span>
          </h2>

          <p className="mt-8 text-gray-400 leading-8">
            Reel 360 Degree is a creative digital studio helping
            businesses grow through cinematic video production,
            branding and social media content that connects,
            inspires and converts audiences into customers.
          </p>

          <div className="space-y-8 mt-10">

            <div className="flex gap-5">
              <FaBullseye className="text-3xl mt-1" />

              <div>
                <h3 className="text-2xl font-bold">
                  Our Mission
                </h3>

                <p className="text-gray-400 mt-2">
                  Helping businesses communicate creatively
                  through powerful visual storytelling.
                </p>
              </div>
            </div>

            <div className="flex gap-5">
              <FaEye className="text-3xl mt-1" />

              <div>
                <h3 className="text-2xl font-bold">
                  Our Vision
                </h3>

                <p className="text-gray-400 mt-2">
                  To become one of India's most trusted creative
                  partners for digital brands.
                </p>
              </div>
            </div>

          </div>

          <div className="grid sm:grid-cols-2 gap-5 mt-12">

            {[
              "Cinematic Quality",
              "Creative Storytelling",
              "Fast Delivery",
              "Platform Optimized",
              "Experienced Team",
              "Premium Editing",
            ].map((item, index) => (

              <div
                key={index}
                className="flex items-center gap-3"
              >
                <FaCheckCircle className="text-green-400" />

                <span>{item}</span>
              </div>

            ))}

          </div>

          <button className="mt-12 rounded-full bg-white px-8 py-4 text-black font-bold hover:scale-105 duration-300">
            Learn More
          </button>

        </motion.div>

      </div>
    </section>
  );
}