import useInView from "../hooks/useInView";

const skillCategories = [
  {
    title: "Frontend Development",
    skills: [
      "React",
      "TypeScript",
      "JavaScript (ES6+)",
      "Tailwind CSS",
      "React Router",
      "Responsive Design",
      "Component Architecture",
    ],
  },
  {
    title: "State & Data Management",
    skills: [
      "Context API",
      "REST API Integration",
      "Async Data Handling",
      "Persistent State Management",
      "Local Storage",
      "React Query",
    ],
  },
  {
    title: "Performance & Optimization",
    skills: [
      "Code Splitting",
      "Lazy Loading",
      "Lighthouse Optimization",
      "Cross-Browser Compatibility",
      "Performance-Focused UI",
    ],
  },
  {
    title: "Tools & Workflow",
    skills: [
      "Git",
      "GitHub",
      "Postman",
      "Vercel",
      "Figma",
      "VS Code",
      "Agile Workflow",
    ],
  },
];

const Skills = () => {
  const { ref, visible } = useInView();

  return (
    <section
      id="skills"
      ref={ref}
      className={`bg-[#eef2f7] dark:bg-[#020617] border-t border-gray-200 dark:border-gray-800 py-24 scroll-mt-24 transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="w-full px-8 md:px-24 lg:px-32 xl:px-44">
        <div className="max-w-4xl mb-16">
          <p className="text-blue-600 font-medium tracking-wide uppercase text-md mb-4">
            Skills
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
            Technologies & Engineering Workflow
          </h2>

          <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            A focused frontend engineering stack centered around scalable React
            applications, responsive UI systems, API integration, and
            performance-oriented development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-white border border-gray-200 dark:border-gray-800 rounded-2xl p-8 hover:shadow-lg transition duration-300"
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-gray-100 rounded-full text-sm text-gray-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
