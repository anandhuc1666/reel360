import { motion } from "framer-motion";
import { FaPlay } from "react-icons/fa";

const portfolio = [
  {
    title: "Restaurant Promotion",
    category: "Brand Reel",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=900&q=80",
  },
  {
    title: "Product Commercial",
    category: "Product Shoot",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=900&q=80",
  },
  {
    title: "Fashion Campaign",
    category: "Commercial",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=900&q=80",
  },
  {
    title: "Corporate Branding",
    category: "Business Video",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900&q=80",
  },
];

export default function Portfolio() {
  return (
    <section className="bg-black py-24 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="uppercase tracking-[6px] text-center text-gray-400"
        >
          Featured Projects
        </motion.p>

        <motion.h2
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-5xl font-black mt-4"
        >
          Our Latest Work
        </motion.h2>

        <p className="text-center text-gray-400 mt-6 max-w-3xl mx-auto">
          Every project is crafted with creativity, storytelling, and cinematic
          quality to help brands capture attention.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mt-16">
          {portfolio.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              className="group relative overflow-hidden rounded-3xl"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-[420px] w-full object-cover duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-black/55 group-hover:bg-black/70 duration-300"></div>

              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">

                <div className="bg-white text-black p-5 rounded-full mb-6 group-hover:scale-110 duration-300">
                  <FaPlay />
                </div>

                <p className="uppercase tracking-widest text-gray-300 text-sm">
                  {item.category}
                </p>

                <h3 className="mt-3 text-3xl font-bold">
                  {item.title}
                </h3>
              </div>

            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mt-16">
          <button className="rounded-full border border-white px-8 py-4 hover:bg-white hover:text-black duration-300">
            View All Projects
          </button>
        </div>

      </div>
    </section>
  );
}