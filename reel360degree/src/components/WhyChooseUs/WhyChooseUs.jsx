import { motion } from "framer-motion";
import {
  FaRocket,
  FaVideo,
  FaLightbulb,
  FaClock,
  FaUsers,
  FaChartLine,
} from "react-icons/fa";

const features = [
  {
    icon: <FaRocket size={40} />,
    title: "Strategy First",
    text: "Every project starts with a clear strategy focused on achieving your business goals.",
  },
  {
    icon: <FaVideo size={40} />,
    title: "Cinematic Quality",
    text: "Premium video production with professional shooting, editing and storytelling.",
  },
  {
    icon: <FaLightbulb size={40} />,
    title: "Creative Ideas",
    text: "Fresh concepts and engaging content designed to make your brand stand out.",
  },
  {
    icon: <FaChartLine size={40} />,
    title: "Growth Focused",
    text: "We create content that increases engagement, visibility and customer trust.",
  },
  {
    icon: <FaClock size={40} />,
    title: "On-Time Delivery",
    text: "Fast turnaround without compromising quality or creativity.",
  },
  {
    icon: <FaUsers size={40} />,
    title: "Dedicated Support",
    text: "We work closely with you from planning to final delivery and beyond.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-black py-28 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="uppercase tracking-[6px] text-center text-gray-400"
        >
          Why Choose Us
        </motion.p>

        <motion.h2
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-5xl md:text-6xl font-black mt-4"
        >
          We Create Content
          <br />
          That Gets Results
        </motion.h2>

        <p className="text-center text-gray-400 mt-6 max-w-3xl mx-auto leading-8">
          At Reel 360 Degree, we combine creativity, strategy and
          cinematic production to help brands grow in today's digital world.
        </p>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mt-16">

          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ y: 60, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
            >
              <div className="mb-6 text-white">
                {item.icon}
              </div>

              <h3 className="text-2xl font-bold">
                {item.title}
              </h3>

              <p className="mt-5 text-gray-400 leading-8">
                {item.text}
              </p>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}