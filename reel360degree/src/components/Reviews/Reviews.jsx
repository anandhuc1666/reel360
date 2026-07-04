import { motion } from "framer-motion";
import { FaStar, FaQuoteLeft } from "react-icons/fa";

const reviews = [
  {
    name: "Michael Johnson",
    company: "Business Owner",
    review:
      "Working with Reel360Degree has made a huge difference to our online performance. Their creative video production and digital marketing helped us reach more customers and improve our brand visibility. Highly recommended!",
  },
  {
    name: "Sarah Williams",
    company: "Marketing Manager",
    review:
      "Reel360Degree exceeded our expectations. Their team understood our business, created stunning reels, and delivered content that increased engagement and generated quality leads.",
  },
  {
    name: "David Thomas",
    company: "Entrepreneur",
    review:
      "Professional, creative and easy to work with. Their cinematic videos and social media strategy helped our business stand out online. We are extremely happy with the results.",
  },
];

export default function Reviews() {
  return (
    <section className="bg-black py-24 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="uppercase tracking-[5px] text-gray-400 text-center"
        >
          Testimonials
        </motion.p>

        <motion.h2
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-5xl font-black text-center mt-4"
        >
          What Our Clients Say
        </motion.h2>

        <div className="grid lg:grid-cols-3 gap-8 mt-16">
          {reviews.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8"
            >
              <FaQuoteLeft className="text-4xl text-gray-500 mb-6" />

              <div className="flex text-yellow-400 gap-1 mb-6">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>

              <p className="leading-8 text-gray-300">
                {item.review}
              </p>

              <div className="mt-8 flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-white text-black flex items-center justify-center font-bold text-xl">
                  {item.name.charAt(0)}
                </div>

                <div>
                  <h3 className="font-bold text-lg">
                    {item.name}
                  </h3>

                  <p className="text-gray-400 text-sm">
                    {item.company}
                  </p>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}