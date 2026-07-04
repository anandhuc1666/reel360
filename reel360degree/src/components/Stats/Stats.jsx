import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import {
  FaProjectDiagram,
  FaUsers,
  FaPlayCircle,
  FaAward,
} from "react-icons/fa";

const stats = [
  {
    icon: <FaProjectDiagram />,
    end: 250,
    suffix: "+",
    title: "Projects Completed",
  },
  {
    icon: <FaUsers />,
    end: 180,
    suffix: "+",
    title: "Happy Clients",
  },
  {
    icon: <FaPlayCircle />,
    end: 8,
    suffix: "M+",
    title: "Video Views",
  },
  {
    icon: <FaAward />,
    end: 98,
    suffix: "%",
    title: "Client Satisfaction",
  },
];

export default function Stats() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section
      ref={ref}
      className="bg-[#050505] py-24 px-6 lg:px-10"
    >
      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-black text-center">
          Our Impact
        </h2>

        <p className="text-center text-gray-400 mt-5 max-w-2xl mx-auto">
          We help businesses grow through creative videos,
          engaging reels and powerful visual storytelling.
        </p>

        <div className="grid gap-8 mt-16 sm:grid-cols-2 lg:grid-cols-4">

          {stats.map((item, index) => (
            <div
              key={index}
              className="rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-md hover:-translate-y-2 transition duration-300"
            >

              <div className="text-5xl text-white mb-6">
                {item.icon}
              </div>

              <h3 className="text-5xl font-black">
                {inView && (
                  <CountUp
                    end={item.end}
                    duration={3}
                  />
                )}
                {item.suffix}
              </h3>

              <p className="mt-4 text-gray-400">
                {item.title}
              </p>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}