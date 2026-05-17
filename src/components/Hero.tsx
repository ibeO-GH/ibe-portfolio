import useInView from "../hooks/useInView";
import { FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

const Hero = () => {
  const { ref, visible } = useInView();

  return (
    <section
      id="home"
      className="relative bg-[#f8fafc] dark:bg-[#020617] min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(37,99,235,0.08),transparent_35%)]" />

      <div
        ref={ref}
        className={`relative z-10 w-full px-8 md:px-24 lg:px-32 xl:px-44 transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-5xl pt-28 md:pt-20">
          {/* Availability */}
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-blue-200 bg-blue-50 text-blue-700 text-sm font-medium">
            <div className="w-2.5 h-2.5 rounded-full bg-blue-600 animate-pulse" />
            Open to Frontend Engineering Opportunities
          </div>

          {/* Main Heading */}
          <h1 className="mt-10 text-5xl sm:text-6xl md:text-7xl font-bold text-gray-900 dark:text-white leading-[1.05] tracking-tight max-w-5xl">
            Building Modern,
            <br />
            Scalable Web Experiences
          </h1>

          {/* Subtitle */}
          <div className="mt-8">
            <p className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white">
              Frontend Engineer
            </p>

            <p className="mt-5 text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl">
              Specialising in React, TypeScript, and performance-focused web
              applications with strong emphasis on scalable architecture,
              responsive systems, and polished product experiences.
            </p>
          </div>
          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mt-12">
            <a
              href="#projects"
              className="bg-blue-600 text-white px-7 py-3.5 rounded-full font-medium hover:bg-blue-700 transition duration-300"
            >
              View Projects
            </a>

            <a
              href="/cv"
              className="border border-gray-300 px-7 py-3.5 rounded-full font-medium hover:border-blue-600 hover:text-blue-600 transition duration-300"
            >
              View CV
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-5 mt-14">
            <a
              href="https://github.com/ibeO-GH"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center text-gray-700 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition duration-300"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/okorafor-ibe-1b79192b7/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center text-gray-700 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition duration-300"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="https://x.com/ibeO_X"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center text-gray-700 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition duration-300"
            >
              <FaXTwitter />
            </a>
          </div>

          {/* Bottom Meta */}
          <div className="mt-16 flex flex-wrap gap-8 text-sm text-gray-500">
            <div>
              <span className="font-semibold text-gray-900">Frontend:</span>{" "}
              React · TypeScript · Tailwind
            </div>

            <div>
              <span className="font-semibold text-gray-900">Backend:</span>{" "}
              Node.js · Express · MongoDB
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
