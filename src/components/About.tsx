import useInView from "../hooks/useInView";
import about from "../assets/ibe-about.jpg";

const About = () => {
  const { ref, visible } = useInView();
  return (
    <section
      id="about"
      className="bg-[#eef2f7] border-t border-gray-200 py-24 scroll-mt-24"
    >
      <div className="w-full px-8 md:px-24 lg:px-32 xl:px-44 flex flex-col md:flex-row items-center gap-16">
        <div
          ref={ref}
          className={`flex-1 flex justify-start transition-all duration-700 ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
        >
          <div className="w-80 h-96 md:w-[380px] md:h-[460px] rounded-xl overflow-hidden shadow-xl border border-blue-200/20">
            <img
              src={about}
              alt="About"
              className="w-full h-full object-cover hover:scale-105 transition duration-500"
            />
          </div>
        </div>

        <div
          ref={ref}
          className={`flex-1 text-center md:text-left transition-all duration-700 ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-lg text-gray-600 mb-4">
            I’m a frontend engineer focused on building clean, responsive, and
            user-friendly web applications.
          </p>
          <ul className="space-y-3 text-gray-600">
            <li>• Strong foundation in HTML, CSS, and JavaScript</li>
            <li>• Experience building responsive apps with React</li>
            <li>• Focus on clean UI and smooth user experience</li>
            <li>• Passionate about continuous learning and growth</li>
          </ul>
          <button className="mt-6 border border-blue-600 px-6 py-2 rounded-full hover:bg-blue-700 hover:text-white transition">
            Download CV
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
