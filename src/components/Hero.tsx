import profile from "../assets/ibe-profile.jpg";
import useInView from "../hooks/useInView";
import { FaLinkedinIn, FaGithub, FaXTwitter } from "react-icons/fa6";

const Hero = () => {
  const { ref, visible } = useInView();

  return (
    <section
      id="home"
      className="bg-[#f8fafc] min-h-screen flex items-center pt-18 scroll-mt-24"
    >
      <div className="w-full px-8 md:px-24 lg:px-32 xl:px-44 flex flex-col md:flex-row items-center justify-between gap-12 md:gap-20">
        <div
          ref={ref}
          className={`flex-1 text-center md:text-left transition-all duration-700 ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
        >
          <p className="text-gray-600 text-lg">Hello, I'm</p>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mt-2">
            Ibe Okorafor
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mt-3 text-gray-700">
            A Front-end Web Developer
          </h2>
          <p className="mt-4 text-gray-600 max-w-lg md:max-w-xl leading-relaxed">
            I am passionate about crafting visually engaging and responsive
            websites, ensuring seamless user experiences.
          </p>
          <div className="flex justify-center md:justify-start gap-4 mt-6">
            <a
              href="https://www.linkedin.com/in/okorafor-ibe-1b79192b7/"
              target="_blank"
              className="w-10 h-10 border rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-600 hover:text-white transition duration-300"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://github.com/ibeO-GH"
              target="_blank"
              className="w-10 h-10 border rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-600 hover:text-white transition duration-300"
            >
              <FaGithub />
            </a>
            <a
              href="https://x.com/ibeO_X"
              target="_blank"
              className="w-10 h-10 border rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-600 hover:text-white transition duration-300"
            >
              <FaXTwitter />
            </a>
          </div>
          <button className="mt-6 bg-blue-600 px-7 py-3 rounded-full text-white hover:bg-blue-700 hover:scale-105 transition duration-300">
            Contact Me
          </button>
        </div>

        <div
          ref={ref}
          className={`flex-1 flex justify-center md:justify-end mt-10 md:mt-0 transition-all duration-700 ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
        >
          <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-[420px] lg:h-[420px] rounded-full border-4 border-gray-200 shadow-xl flex items-center justify-center">
            <div className="w-full h-full rounded-full overflow-hidden">
              <img
                src={profile}
                alt="Profile"
                className="w-full h-full object-cover hover:scale-105 transition duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
