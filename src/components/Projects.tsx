import ProjectCard from "../components/ProjectCard";
import project1 from "../assets/veloraEcommerce.png";
import project2 from "../assets/taskflow.png";
import project3 from "../assets/devfind.png";

const projects = [
  {
    title: "Velora – Modern E-commerce Frontend",
    description:
      "Modern e-commerce frontend with dynamic product detail pages with gallery, cart system with quantity control, persistent state (localStorage), and Responsive UI + animations.",
    image: project1,
    demo: "https://velora-ecommerce-delta.vercel.app/",
    github: "https://github.com/ibeO-GH/Velora-ecommerce",
    tech: ["React", "TypeScript", "Tailwind", "Context API"],
  },
  {
    title: "TaskFlow - Drag & Drop Task Manager",
    description:
      "A modern task management app featuring drag-and-drop functionality, task state transitions, and interactive UI for managing workflows efficiently.",
    image: project2,
    demo: "https://taskflow-dnd.vercel.app/",
    github: "https://github.com/ibeO-GH/taskflow-dnd",
    tech: ["React", "TypeScript", "Tailwind", "dnd-kit"],
  },
  {
    title: "DevFinder - GitHub Explorer",
    description:
      "A modern GitHub user search application that fetches real-time data, displays developer profiles, repositories, and handles loading, error, and empty states with a polished UI.",
    image: project3,
    demo: "https://dev-finder-app-taupe.vercel.app/",
    github: "https://github.com/ibeO-GH/DevFinder-App",
    tech: ["React", "TypeScript", "Tailwind", "GitHub API"],
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-[#eef2f7] border-t border-gray-200 scroll-mt-24 py-24"
    >
      <div className="w-full px-8 md:px-24 lg:px-32 xl:px-44">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
          Projects
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          A selection of projects showcasing my ability to build responsive,
          user-focused applications using modern web technologies.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
