
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Portfolio from "./components/Portfolio/Portfolio";
import Services from "./components/Services/Services";
import About from "./components/About/About";
import Reviews from "./components/Reviews/Reviews";
import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs";
import CTA from "./components/CTA/CTA";
import Contact from "./components/Contact/Contact";
import "./index.css"; 
function App() {
  return (
    <div className="bg-[#050505] text-white">
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <Reviews />
      <About />
      <WhyChooseUs />
      <CTA />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;