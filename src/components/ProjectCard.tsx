type ProjectProps = {
  title: string;
  description: string;
  challenge?: string;
  architecture?: string;
  performance?: string;
  engineering?: string[];
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
  challenge,
  architecture,
  performance,
  engineering,
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
      className={`group bg-white dark:bg-[#0f172a] border border-gray-200 dark:border-white/10 rounded-[28px] overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:border-blue-500/30 hover:shadow-2xl ${
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

        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
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
              className="text-xs px-3 py-1.5 rounded-full bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-600 dark:text-gray-300"
            >
              {item}
            </span>
          ))}
        </div>

        <h3 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white leading-snug">
          {title}
        </h3>

        <p className="text-gray-600 dark:text-gray-300 mt-4 leading-relaxed">
          {description}
        </p>
        {featured && (
          <div className="mt-8 space-y-6">
            {challenge && (
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600 mb-2">
                  Engineering Challenge
                </h4>

                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {challenge}
                </p>
              </div>
            )}

            {architecture && (
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600 mb-2">
                  Architecture
                </h4>

                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {architecture}
                </p>
              </div>
            )}

            {performance && (
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600 mb-2">
                  Performance & Optimization
                </h4>

                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {performance}
                </p>
              </div>
            )}

            {engineering && (
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600 mb-4">
                  Engineering Highlights
                </h4>

                <div className="grid md:grid-cols-2 gap-3">
                  {engineering.map((item, index) => (
                    <div
                      key={index}
                      className="bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl px-4 py-4 text-sm text-gray-700 dark:text-gray-300"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

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
              className="border border-gray-300 dark:border-white/10 px-5 py-2 rounded-full text-sm font-medium hover:border-blue-600 hover:text-blue-600 transition duration-300"
            >
              GitHub
            </a>
          )}

          {frontend && (
            <a
              href={frontend}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-300 dark:border-white/10 px-5 py-2 rounded-full text-sm font-medium hover:border-blue-600 hover:text-blue-600 transition duration-300"
            >
              Frontend
            </a>
          )}

          {backend && (
            <a
              href={backend}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-300 dark:border-white/10 px-5 py-2 rounded-full text-sm font-medium hover:border-blue-600 hover:text-blue-600 transition duration-300"
            >
              Backend
            </a>
          )}

          {api && (
            <a
              href={api}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-300 dark:border-white/10 px-5 py-2 rounded-full text-sm font-medium hover:border-blue-600 hover:text-blue-600 transition duration-300"
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
