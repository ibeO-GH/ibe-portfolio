import useInView from "../hooks/useInView";

const strengths = [
  {
    title: "Frontend Architecture",
    description:
      "Building scalable, reusable component systems with clean structure and maintainable code.",
  },
  {
    title: "Performance Optimization",
    description:
      "Improving application speed and user experience through lazy loading, efficient rendering, and optimized state management.",
  },
  {
    title: "Responsive UI Development",
    description:
      "Creating responsive interfaces that deliver consistent experiences across mobile, tablet, and desktop devices.",
  },
  {
    title: "API Integration",
    description:
      "Integrating REST APIs with proper async handling, loading states, validation, and error management.",
  },
];

const About = () => {
  const { ref, visible } = useInView();

  return (
    <section
      id="about"
      className="bg-[#eef2f7] border-t border-gray-200 py-24 scroll-mt-24"
    >
      <div
        ref={ref}
        className={`w-full px-8 md:px-24 lg:px-32 xl:px-44 transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-6xl">
          <p className="text-blue-600 font-medium tracking-wide uppercase text-sm mb-4">
            About
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight max-w-3xl">
            Frontend Engineer Focused on Building Modern Web Applications
          </h2>

          <p className="mt-8 text-lg text-gray-600 leading-relaxed max-w-4xl">
            I specialize in building responsive, accessible, and
            performance-focused web applications using React, TypeScript, and
            modern frontend technologies. My approach combines clean UI
            implementation, scalable component architecture, and strong product
            thinking to create polished user experiences.
          </p>

          <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-4xl">
            I enjoy transforming complex ideas into intuitive interfaces while
            maintaining performance, scalability, and maintainable code
            structure across projects.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
            {strengths.map((item) => (
              <div
                key={item.title}
                className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition duration-300"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <a
              href="/cv"
              className="inline-flex border border-blue-600 text-blue-600 px-7 py-3 rounded-full hover:bg-blue-600 hover:text-white transition duration-300"
            >
              View CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
