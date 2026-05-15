import useInView from "../hooks/useInView";
import { FaLinkedinIn, FaGithub, FaXTwitter } from "react-icons/fa6";

const Hero = () => {
  const { ref, visible } = useInView();

  return (
    <section
      id="home"
      className="bg-[#f8fafc] min-h-screen flex items-center pt-20 scroll-mt-24"
    >
      <div className="w-full px-8 md:px-24 lg:px-32 xl:px-44">
        <div
          ref={ref}
          className={`max-w-4xl transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-blue-600 font-medium tracking-wide uppercase text-sm mb-4">
            Frontend Engineer
          </p>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
            Building Fast,
            <br />
            Scalable React Applications
          </h1>

          <p className="mt-8 text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl">
            I design and develop modern, responsive, and performance-optimized
            web applications using React, TypeScript, Tailwind CSS, and scalable
            component architecture.
          </p>

          <div className="flex flex-wrap gap-4 mt-10">
            <a
              href="#projects"
              className="bg-blue-600 text-white px-7 py-3 rounded-full hover:bg-blue-700 transition duration-300"
            >
              View Projects
            </a>

            <a
              href="/cv"
              className="border border-gray-300 px-7 py-3 rounded-full hover:border-blue-600 hover:text-blue-600 transition duration-300"
            >
              View CV
            </a>
          </div>

          <div className="flex gap-4 mt-10">
            <a
              href="https://www.linkedin.com/in/okorafor-ibe-1b79192b7/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 border border-gray-300 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white hover:border-blue-600 transition duration-300"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="https://github.com/ibeO-GH"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 border border-gray-300 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white hover:border-blue-600 transition duration-300"
            >
              <FaGithub />
            </a>

            <a
              href="https://x.com/ibeO_X"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 border border-gray-300 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white hover:border-blue-600 transition duration-300"
            >
              <FaXTwitter />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
