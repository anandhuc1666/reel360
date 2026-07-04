import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-black py-28 px-6 lg:px-10"
    >
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="uppercase tracking-[6px] text-gray-400">
            Contact Us
          </p>

          <h2 className="text-5xl md:text-6xl font-black mt-4">
            Let's Create Something Amazing
          </h2>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto leading-8">
            Ready to grow your brand with cinematic videos and creative content?
            We'd love to hear about your project.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mt-20">

          {/* Contact Info */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-10">

            <h3 className="text-3xl font-bold mb-8">
              Get In Touch
            </h3>

            <div className="space-y-8">

              <div className="flex gap-5">
                <FaPhoneAlt className="text-2xl mt-1" />
                <div>
                  <h4 className="font-semibold">Phone</h4>
                  <p className="text-gray-400">
                    +91 8838065455
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <FaEnvelope className="text-2xl mt-1" />
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <p className="text-gray-400">
                    daviddaison0077@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <FaMapMarkerAlt className="text-2xl mt-1" />
                <div>
                  <h4 className="font-semibold">Location</h4>
                  <p className="text-gray-400">
                    Kochi, Kerala
                  </p>
                </div>
              </div>

            </div>

            <div className="flex gap-5 mt-12">

              <a
                href="https://www.instagram.com/reel360degrees?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                className="h-14 w-14 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition"
              >
                <FaInstagram />
              </a>

              <a
                href="https://www.youtube.com/@reel360degree"
                target="_blank"
                rel="noreferrer"
                className="h-14 w-14 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition"
              >
                <FaYoutube />
              </a>

            </div>

          </div>

          {/* Contact Form */}
          <form className="rounded-3xl border border-white/10 bg-white/5 p-10 space-y-6">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full rounded-xl bg-black border border-white/10 p-4 outline-none"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full rounded-xl bg-black border border-white/10 p-4 outline-none"
            />

            <input
              type="text"
              placeholder="Phone Number"
              className="w-full rounded-xl bg-black border border-white/10 p-4 outline-none"
            />

            <textarea
              rows="6"
              placeholder="Tell us about your project..."
              className="w-full rounded-xl bg-black border border-white/10 p-4 outline-none resize-none"
            />

            <button
              type="submit"
              className="w-full rounded-xl bg-white py-4 text-black font-bold hover:scale-[1.02] transition"
            >
              Send Message
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}