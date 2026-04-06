import ProjectCard from "../components/ProjectCard";
import project1 from "../assets/financeDashb.png";
import project2 from "../assets/veloraEcommerce.png";
import project3 from "../assets/taskflow.png";
import project4 from "../assets/devfind.png";
import project5 from "../assets/healthguard.png";
import project6 from "../assets/burgerD.png";
import project7 from "../assets/weatherApp.png";
import project8 from "../assets/neonlogist.png";
import project9 from "../assets/NeonTaste.png";
import project10 from "../assets/Tic_Tac_Toe.png";
import project11 from "../assets/ToDoList.png";
import project12 from "../assets/neonexcellence.png";

const projects = [
  {
    title: "Finance Dashboard",
    description:
      "A clean and responsive finance dashboard for tracking income and expenses, designed with a focus on simplicity, usability, and real-time updates.",
    image: project1,
    demo: "https://finance-dashboard-six-woad.vercel.app/",
    github: "https://github.com/ibeO-GH/Finance-Dashboard",
    tech: ["React", "TypeScript", "Tailwind"],
  },
  {
    title: "Velora – Modern E-commerce Frontend",
    description:
      "Modern e-commerce frontend with dynamic product detail pages with gallery, cart system with quantity control, persistent state (localStorage), and Responsive UI + animations.",
    image: project2,
    demo: "https://velora-ecommerce-delta.vercel.app/",
    github: "https://github.com/ibeO-GH/Velora-ecommerce",
    tech: ["React", "TypeScript", "Tailwwind", "Context API"],
  },
  {
    title: "TaskFlow - Drag & Drop Task Manager",
    description:
      "A modern task management app featuring drag-and-drop functionality, task state transitions, and interactive UI for managing workflows efficiently.",
    image: project3,
    demo: "https://taskflow-dnd.vercel.app/",
    github: "https://github.com/ibeO-GH/taskflow-dnd",
    tech: ["React", "TpeScript", "Tailwind", "dnd-kit"],
  },
  {
    title: "DevFinder - GitHub Explorer",
    description:
      "A modern GitHub user search application that fetches real-time data, displays developer profiles, repositories, and handles loading, error, and empty states with a polished UI.",
    image: project4,
    demo: "https://dev-finder-app-taupe.vercel.app/",
    github: "https://github.com/ibeO-GH/DevFinder-App",
    tech: ["React", "TypeScript", "Tailwind", "GitHub API"],
  },
  {
    title: "HealthCare Website",
    description: "Responsive landing page for a healthcare service",
    image: project5,
    demo: "https://health-guard-rho.vercel.app",
    github: "https://github.com/ibeO-GH/HealthGuard",
    tech: ["HTML", "JavaScript", "CSS"],
  },
  {
    title: "Burger Builder",
    description: "Interactive burger builder with drag-and-drop",
    image: project6,
    demo: "https://ibeo-gh.github.io/Burger-Delight/",
    github: "https://github.com/ibeO-GH/Burger-Delight",
    tech: ["HTML", "JavaScript", "CSS"],
  },
  {
    title: "Weather App",
    description: "Real-time weather data using OpenWeatherMap API",
    image: project7,
    demo: "https://ibeo-gh.github.io/PRODIGY_WD_05/",
    github: "https://github.com/ibeO-GH/PRODIGY_WD_05",
    tech: ["HTML", "JavaScript", "CSS"],
  },
  {
    title: "NeonLogist",
    description: "Logistics company website with modern design",
    image: project8,
    demo: "https://ibeo-gh.github.io/Neon-Logistics/",
    github: "https://github.com/ibeO-GH/Neon-Logistics",
    tech: ["HTML", "JavaScript", "CSS"],
  },
  {
    title: "NeonTaste",
    description: "Food delivery service landing page",
    image: project9,
    demo: "https://ibeo-gh.github.io/PRODIGY_WD_01/",
    github: "https://github.com/ibeO-GH/PRODIGY_WD_01",
    tech: ["HTML", "JavaScript", "CSS"],
  },
  {
    title: "Tic Tac Toe",
    description: "Classic tic tac toe game with two-player mode",
    image: project10,
    demo: "https://ibeo-gh.github.io/PRODIGY_WD_03/",
    github: "https://github.com/ibeO-GH/PRODIGY_WD_03",
    tech: ["HTML", "JavaScript", "CSS"],
  },
  {
    title: "ToDo App",
    description: "Task management app with full CRUD functionality",
    image: project11,
    demo: "https://ibeo-gh.github.io/TODO-List-Project/",
    github: "https://github.com/ibeO-GH/TODO-List-Project",
    tech: ["HTML", "JavaScript", "CSS"],
  },
  {
    title: "School Website",
    description: "Multi-section school platform with modern UI",
    image: project12,
    demo: "https://ibeo-gh.github.io/Neon-Excellence/",
    github: "https://github.com/ibeO-GH/Neon-Excellence",
    tech: ["HTML", "JavaScript", "CSS"],
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
          A selection of projects showcasing my ability to build respoonsive,
          user-focused applications using modern web technoloogies.
        </p>
        <div className="grid grrid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
