import { motion } from "framer-motion";
import {
  FaVideo,
  FaCamera,
  FaBullhorn,
  FaPalette,
  FaInstagram,
} from "react-icons/fa";

const services = [
  {
    icon: <FaVideo size={40} />,
    title: "Video Production",
    description:
      "Professional cinematic videos, promotional films, business profiles and brand storytelling.",
  },
  {
    icon: <FaInstagram size={40} />,
    title: "Social Media Reels",
    description:
      "High-performing Instagram Reels, YouTube Shorts and Facebook videos that increase engagement.",
  },
  {
    icon: <FaPalette size={40} />,
    title: "Branding",
    description:
      "Build a memorable visual identity with creative branding, logo concepts and storytelling.",
  },
  {
    icon: <FaBullhorn size={40} />,
    title: "Digital Marketing",
    description:
      "Content strategy, campaign planning and digital marketing support to grow your business.",
  },
  {
    icon: <FaCamera size={40} />,
    title: "Business & Product Shoots",
    description:
      "Premium photography and videography for products, offices, showrooms and commercial brands.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="bg-[#050505] py-24 px-6 lg:px-10"
    >
      <div className="max-w-7xl mx-auto">

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center uppercase tracking-[5px] text-gray-400"
        >
          What We Do
        </motion.p>

        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="mt-4 text-center text-4xl md:text-6xl font-black"
        >
          Our Services
        </motion.h2>

        <p className="mx-auto mt-6 max-w-3xl text-center text-gray-400 leading-8">
          We create premium visual content that helps businesses attract,
          engage and convert customers through powerful storytelling.
        </p>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{
                y: -10,
                transition: { duration: 0.3 },
              }}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md"
            >
              <div className="mb-6 text-white">
                {service.icon}
              </div>

              <h3 className="text-2xl font-bold">
                {service.title}
              </h3>

              <p className="mt-4 leading-7 text-gray-400">
                {service.description}
              </p>

              <button className="mt-8 text-white font-semibold hover:text-gray-300 transition">
                Learn More →
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}