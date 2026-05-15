type ProjectProps = {
  title: string;
  description: string;
  image: string;
  demo: string;
  github?: string;
  frontend?: string;
  backend?: string;
  api?: string;
  tech: string[];
  featured?: boolean;
};

const ProjectCard = ({
  title,
  description,
  image,
  demo,
  github,
  frontend,
  backend,
  api,
  tech,
  featured,
}: ProjectProps) => {
  return (
    <div
      className={`group bg-white border border-gray-200 rounded-3xl overflow-hidden transition duration-300 hover:-translate-y-1 hover:shadow-2xl ${
        featured ? "lg:col-span-2" : ""
      }`}
    >
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className={`w-full object-cover transition duration-500 group-hover:scale-105 ${
            featured ? "h-[420px]" : "h-64"
          }`}
        />

        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-gray-900 px-6 py-3 rounded-full font-medium hover:bg-blue-600 hover:text-white transition duration-300"
          >
            View Live Project
          </a>
        </div>
      </div>

      <div className="p-8">
        <div className="flex flex-wrap gap-2 mb-5">
          {tech.map((item, index) => (
            <span
              key={index}
              className="text-xs px-3 py-1 rounded-full bg-gray-100 text-gray-600"
            >
              {item}
            </span>
          ))}
        </div>

        <h3 className="text-2xl font-bold text-gray-900 leading-snug">
          {title}
        </h3>

        <p className="text-gray-600 mt-4 leading-relaxed">{description}</p>

        <div className="flex flex-wrap gap-3 mt-8">
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-blue-700 transition duration-300"
          >
            Live Demo
          </a>

          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-300 px-5 py-2 rounded-full text-sm font-medium hover:border-blue-600 hover:text-blue-600 transition duration-300"
            >
              GitHub
            </a>
          )}

          {frontend && (
            <a
              href={frontend}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-300 px-5 py-2 rounded-full text-sm font-medium hover:border-blue-600 hover:text-blue-600 transition duration-300"
            >
              Frontend
            </a>
          )}

          {backend && (
            <a
              href={backend}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-300 px-5 py-2 rounded-full text-sm font-medium hover:border-blue-600 hover:text-blue-600 transition duration-300"
            >
              Backend
            </a>
          )}

          {api && (
            <a
              href={api}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-300 px-5 py-2 rounded-full text-sm font-medium hover:border-blue-600 hover:text-blue-600 transition duration-300"
            >
              API
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
