import {
  FaInstagram,
  FaYoutube,
  FaFacebookF,
  FaArrowUp,
} from "react-icons/fa";
import image from "../../assets/Image/Untitled Design - 1.png"

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-[#030303] border-t border-white/10">

      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">

        <div className="grid gap-14 lg:grid-cols-4">

          {/* Logo */}
          <div>

            <img src={image} alt="Logo" className="h-20 w-auto" />

            <h2 className="text-3xl font-black">
              REEL
              <span className="text-gray-400">
                360°
              </span>
            </h2>

            <p className="text-gray-400 mt-6 leading-8">
              Reel 360 Degree is a creative studio helping brands
              grow through cinematic video production, branding,
              and powerful social media storytelling.
            </p>

          </div>

          {/* Links */}

          <div>

            <h3 className="font-bold text-xl mb-6">
              Quick Links
            </h3>

            <ul className="space-y-4 text-gray-400">

              <li><a href="#">Home</a></li>

              <li><a href="#about">About</a></li>

              <li><a href="#services">Services</a></li>

              <li><a href="#contact">Contact</a></li>

            </ul>

          </div>

          {/* Services */}

          <div>

            <h3 className="font-bold text-xl mb-6">
              Services
            </h3>

            <ul className="space-y-4 text-gray-400">

              <li>Video Production</li>

              <li>Instagram Reels</li>

              <li>Branding</li>

              <li>Digital Marketing</li>

              <li>Product Shoots</li>

            </ul>

          </div>

          {/* Social */}

          <div>

            <h3 className="font-bold text-xl mb-6">
              Follow Us
            </h3>

            <div className="flex gap-4">

              <a
                href="https://www.instagram.com/reel360degrees?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noreferrer"
                className="h-12 w-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition"
              >
                <FaInstagram />
              </a>

              <a
                href="https://www.youtube.com/@reel360degree"
                target="_blank"
                rel="noreferrer"
                className="h-12 w-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition"
              >
                <FaYoutube />
              </a>

              <a
                href="#"
                className="h-12 w-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition"
              >
                <FaFacebookF />
              </a>

            </div>

            <button
              onClick={scrollTop}
              className="mt-10 flex items-center gap-3 rounded-full border border-white/10 px-6 py-3 hover:bg-white hover:text-black transition"
            >
              <FaArrowUp />
              Back to Top
            </button>

          </div>

        </div>

      </div>

      <div className="border-t border-white/10">

        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-6 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-gray-500 text-sm">
            © {year} Reel 360 Degree. All Rights Reserved.
          </p>

          <p className="text-gray-500 text-sm">
            Designed & Developed with ❤️ by Reel 360 Degree
          </p>

        </div>

      </div>

    </footer>
  );
}