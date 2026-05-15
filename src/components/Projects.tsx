import ProjectCard from "../components/ProjectCard";

import project1 from "../assets/TaskForge.png";
import project2 from "../assets/veloraEcommerce.png";
import project3 from "../assets/financeDashb.png";
import project4 from "../assets/devfind.png";

const projects = [
  {
    title: "TaskForge — Full-Stack Task Management Platform",
    description:
      "A scalable full-stack productivity platform featuring persistent task management, REST API integration, reusable frontend architecture, and multi-framework implementations across React, Next.js, and Vue.",
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
    title: "Velora — Modern E-Commerce Frontend",
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
      className="bg-[#f8fafc] border-t border-gray-200 scroll-mt-24 py-24"
    >
      <div className="w-full px-8 md:px-24 lg:px-32 xl:px-44">
        <div className="max-w-4xl mb-16">
          <p className="text-blue-600 font-medium tracking-wide uppercase text-md mb-4">
            Projects
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Selected Work & Engineering Projects
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
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
