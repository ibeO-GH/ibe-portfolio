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

        <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center transition duration-300 space-y-2">
          <a
            href={demo}
            target="_blank"
            className="text-white border px-4 py-2 rounded hover:bg-blue-600 transition"
          >
            Live Demo
          </a>

          {github && (
            <a href={github} target="_blank" className="text-white underline">
              Github
            </a>
          )}
          {frontend && (
            <a href={frontend} target="_blank" className="text-white underline">
              Frontend
            </a>
          )}
          {backend && (
            <a href={backend} target="_blank" className="text-white underline">
              Backend
            </a>
          )}
          {api && (
            <a href={api} target="_blank" className="text-white underline">
              API
            </a>
          )}
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
