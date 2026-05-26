import ProjectCard from "../components/ProjectCard";

import project1 from "../assets/TaskForge.png";
import project2 from "../assets/veloraEcommerce.png";
import project3 from "../assets/financeDashb.png";
import project4 from "../assets/devfind.png";

const projects = [
  {
    title: "TaskForge — Full-Stack Task Management Platform",
    description:
      "A production-focused full-stack task management platform built with scalable frontend architecture, persistent task workflows, REST API integration, and multi-framework implementations across React, Next.js, and Vue.",

    challenge:
      "Designed a scalable task management system capable of handling persistent state, drag-and-drop interactions, dynamic filtering, and async API workflows while maintaining responsive performance and clean UI consistency across devices.",

    architecture:
      "Implemented reusable component-driven architecture with separated UI, state management, and API layers to improve maintainability, scalability, and future feature expansion across multiple frontend frameworks.",

    performance:
      "Optimized rendering performance using React Query caching, lazy loading, memoization strategies, efficient state updates, and reduced unnecessary component re-renders for smoother user interactions.",

    engineering: [
      "Built reusable UI systems for scalable feature expansion",
      "Integrated REST APIs with structured async handling",
      "Implemented persistent task storage and synchronization",
      "Designed responsive layouts for cross-device consistency",
      "Improved maintainability using modular component architecture",
      "Applied scalable frontend engineering practices across React, Next.js, and Vue implementations",
    ],

    image: project1,
    demo: "https://taskforge-eta.vercel.app/",
    github: "https://github.com/ibeO-GH/taskforge",
    frontend: "https://github.com/ibeO-GH/taskforge-react",
    backend: "https://github.com/ibeO-GH/taskforge-backend",
    api: "https://taskforge-api-z21d.onrender.com",

    tech: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "MongoDB",
      "React Query",
      "Tailwind CSS",
    ],

    featured: true,
  },
  {
    title: "Velora — E-Commerce Web Application",
    description:
      "A performance-focused e-commerce frontend with dynamic product filtering, persistent cart state, responsive UI architecture, and reusable component systems built for scalable user experiences.",
    image: project2,
    demo: "https://velora-ecommerce-delta.vercel.app/",
    github: "https://github.com/ibeO-GH/Velora-ecommerce",
    tech: ["React", "TypeScript", "Tailwind CSS", "Context API"],
  },
  {
    title: "Finance Dashboard — Data Visualization Interface",
    description:
      "An interactive finance dashboard featuring responsive layouts, structured analytics UI, dynamic data visualization, and modern dashboard design patterns.",
    image: project3,
    demo: "https://finance-dashboard-six-woad.vercel.app/",
    github: "https://github.com/ibeO-GH/Finance-Dashboard",
    tech: ["React", "TypeScript", "Recharts", "Tailwind CSS"],
  },
  {
    title: "DevFinder — GitHub Explorer",
    description:
      "A responsive GitHub profile explorer integrating real-time API data, async state management, loading states, error handling, and optimized search functionality.",
    image: project4,
    demo: "https://dev-finder-app-taupe.vercel.app/",
    github: "https://github.com/ibeO-GH/DevFinder-App",
    tech: ["React", "TypeScript", "GitHub API", "Tailwind CSS"],
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-[#f8fafc] dark:bg-[#020617] border-t border-gray-200 dark:border-gray-800  scroll-mt-24 py-24"
    >
      <div className="w-full px-8 md:px-24 lg:px-32 xl:px-44">
        <div className="max-w-4xl mb-16">
          <p className="text-blue-600 font-semibold tracking-[0.22em] uppercase text-[15px] mb-5">
            Projects
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
            Selected Work & Engineering Projects
          </h2>

          <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            A collection of frontend and full-stack applications focused on
            performance, scalability, responsive UI systems, and
            production-ready user experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
