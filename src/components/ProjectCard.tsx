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
}: ProjectProps) => {
  return (
    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300">
      <div className="relative group">
        <img src={image} alt={title} className="w-full h-48 object-cover" />

        <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center transition duration-300 px-4">
          {/* Main CTA */}
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white border px-4 py-2 rounded hover:bg-blue-600 transition mb-4"
          >
            Live Demo
          </a>

          <div className="flex flex-wrap justify-center gap-2 w-full max-w-[220px]">
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-white border border-gray-400 px-0.5 py-1.5 rounded hover:bg-gray-700 transition"
              >
                Code
              </a>
            )}

            {frontend && (
              <a
                href={frontend}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-white border border-gray-400 px-0.5 py-1.5 rounded hover:bg-gray-700 transition"
              >
                Frontend
              </a>
            )}

            {backend && (
              <a
                href={backend}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-white border border-gray-400 px-0.5 py-1.5 rounded hover:bg-gray-700 transition"
              >
                Backend
              </a>
            )}

            {api && (
              <a
                href={api}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-white border border-gray-400 px-0.5 py-1.5 rounded hover:bg-gray-700 transition"
              >
                API
              </a>
            )}
          </div>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <p className="text-sm text-gray-600 mt-1">{description}</p>
        <div className="flex flex-wrap gap-2 mt-3">
          {tech.map((item, index) => (
            <span
              key={index}
              className="text-xs border border-gray-300 px-2 py-1 rounded text-gray-600"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
