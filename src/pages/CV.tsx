const competencies = [
  "Component-Driven Architecture",
  "Performance Engineering & Optimisation",
  "Accessibility (WCAG Standards)",
  "REST API Integration",
  "Responsive UI Development",
  "Agile / Scrum Workflow",
  "State Management",
  "Code Reviews & Version Control",
  "UI/UX Precision",
];

const technicalSkills = [
  {
    category: "Languages",
    items: "TypeScript, JavaScript (ES6+)",
  },
  {
    category: "Frameworks",
    items: "React.js, React Router, Context API, React DnD, Recharts",
  },
  {
    category: "Styling",
    items:
      "Tailwind CSS, CSS Modules, Responsive Design, Cross-Browser Compatibility",
  },
  {
    category: "API & Data",
    items: "REST APIs, GitHub REST API, Async Data Handling, Error Management",
  },
  {
    category: "Performance",
    items:
      "Lazy Loading, Code Splitting, Lighthouse Optimisation, Core Web Vitals",
  },
  {
    category: "Tools",
    items: "Git, GitHub, Vercel, Postman, VS Code, Figma, Adobe XD",
  },
];

const projects = [
  {
    title: "TaskForge — Full-Stack Task Management Platform",
    points: [
      "Built a scalable task management platform featuring persistent task workflows, reusable frontend architecture, and REST API integration.",
      "Developed multiple frontend implementations across React, Next.js, and Vue to explore framework architecture patterns.",
      "Implemented robust async state handling, persistent storage, and production-ready UI systems.",
    ],
  },
  {
    title: "Velora — Modern E-Commerce Platform",
    points: [
      "Built a feature-rich e-commerce frontend with dynamic product filtering, persistent cart state, and reusable component systems.",
      "Optimised rendering performance and responsive layouts for seamless experiences across devices.",
      "Developed scalable UI architecture focused on maintainability and future feature expansion.",
    ],
  },
  {
    title: "Finance Dashboard — Interactive Data Visualisation Tool",
    points: [
      "Designed and developed a responsive financial analytics dashboard using Recharts and TypeScript.",
      "Implemented structured data presentation, dynamic filtering, and reusable dashboard UI patterns.",
      "Focused on usability, responsiveness, and clean visual hierarchy for data-heavy interfaces.",
    ],
  },
  {
    title: "DevFinder — GitHub Explorer",
    points: [
      "Integrated the GitHub REST API to display real-time developer profiles and repository data.",
      "Implemented loading states, error handling, and optimized search interactions.",
      "Built a polished, responsive interface focused on clean UX and async data reliability.",
    ],
  },
];

const CV = () => {
  return (
    <section className="bg-[#f5f7fb] min-h-screen py-16 px-6 md:px-12">
      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden">
        {/* Header */}
        <div className="px-8 md:px-14 py-14 border-b border-gray-200">
          <p className="text-blue-600 uppercase tracking-[0.2em] text-sm font-medium mb-5">
            Resume
          </p>

          <h1 className="text-5xl font-bold text-gray-900 leading-tight">
            Okorafor Ibe
          </h1>

          <p className="mt-4 text-2xl text-gray-600 font-medium">
            Frontend Engineer
          </p>

          <p className="mt-6 max-w-3xl text-lg text-gray-600 leading-relaxed">
            Frontend Engineer specialising in React and TypeScript with
            experience building scalable, responsive, and performance-focused
            web applications across e-commerce, productivity, and analytics
            platforms.
          </p>

          <div className="flex flex-wrap gap-4 mt-8 text-sm text-gray-600">
            <span>ibe.okorafor@gmail.com</span>
            <span>•</span>
            <span>Lagos, Nigeria</span>
            <span>•</span>
            <span>+234 813 884 1658</span>
          </div>

          <div className="flex flex-wrap gap-5 mt-6 text-sm">
            <a
              href="https://ibe-portfolio-tau.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Portfolio
            </a>

            <a
              href="https://github.com/ibeO-GH"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/okorafor-ibe-1b79192b7/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* Body */}
        <div className="px-8 md:px-14 py-14 space-y-16">
          {/* Professional Summary */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Professional Summary
            </h2>

            <p className="text-gray-600 leading-relaxed text-lg">
              Results-driven frontend engineer focused on building
              production-grade web applications with strong emphasis on
              scalability, performance optimisation, responsive UI systems, and
              maintainable frontend architecture. Experienced in transforming
              complex product requirements into polished user experiences using
              React, TypeScript, and modern frontend technologies.
            </p>
          </section>

          {/* Core Competencies */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Core Competencies
            </h2>

            <div className="flex flex-wrap gap-3">
              {competencies.map((item) => (
                <span
                  key={item}
                  className="px-4 py-2 rounded-full bg-gray-100 text-gray-700 text-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </section>

          {/* Technical Skills */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Technical Skills
            </h2>

            <div className="space-y-6">
              {technicalSkills.map((skill) => (
                <div
                  key={skill.category}
                  className="grid md:grid-cols-[220px_1fr] gap-4 border-b border-gray-100 pb-5"
                >
                  <h3 className="font-semibold text-gray-900">
                    {skill.category}
                  </h3>

                  <p className="text-gray-600 leading-relaxed">{skill.items}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Experience */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Professional Experience
            </h2>

            <div className="border border-gray-200 rounded-2xl p-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    Frontend Engineer — GSF Digital
                  </h3>

                  <p className="text-gray-500 mt-1">
                    Production-grade frontend development
                  </p>
                </div>

                <p className="text-sm text-gray-500">January 2025 — Present</p>
              </div>

              <ul className="mt-8 space-y-4 text-gray-600 leading-relaxed">
                <li>
                  • Engineered and deployed multiple production-ready web
                  applications using React, TypeScript, and Tailwind CSS.
                </li>

                <li>
                  • Designed scalable and reusable component-driven frontend
                  architectures focused on maintainability and consistency.
                </li>

                <li>
                  • Improved application performance through lazy loading, code
                  splitting, and optimized rendering strategies.
                </li>

                <li>
                  • Integrated REST APIs with structured async handling, loading
                  states, validation, and error management.
                </li>

                <li>
                  • Delivered responsive, cross-browser compatible user
                  interfaces aligned with modern UI/UX standards.
                </li>
              </ul>
            </div>
          </section>

          {/* Projects */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Selected Projects
            </h2>

            <div className="space-y-8">
              {projects.map((project) => (
                <div
                  key={project.title}
                  className="border border-gray-200 rounded-2xl p-8"
                >
                  <h3 className="text-xl font-semibold text-gray-900">
                    {project.title}
                  </h3>

                  <ul className="mt-5 space-y-3 text-gray-600 leading-relaxed">
                    {project.points.map((point) => (
                      <li key={point}>• {point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Education */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Education & Certifications
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Bachelor of Technology (B.Tech) — Computer Science
                </h3>

                <p className="text-gray-600 mt-2">
                  Federal University of Technology, Owerri (FUTO) — 2018–2022
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Diploma in Frontend Engineering
                </h3>

                <p className="text-gray-600 mt-2">
                  Vephla Institute — Advanced React, TypeScript, Responsive
                  Design & Accessibility
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Diploma in Frontend Engineering (Full-Stack JS)
                </h3>

                <p className="text-gray-600 mt-2">
                  AltSchool Africa — MERN Stack, Agile Development &
                  Collaboration
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default CV;
