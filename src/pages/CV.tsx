const CV = () => {
  return (
    <section className="bg=[#eef2f7] min-h-screen py-20 px-6 md:px-12">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl p-8 md:p-12 space-y-10">
        <div className="text-center border-b pb-6">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            Okorafor Ibe
          </h1>
          <p className="text-gray-600 mt-2">Frontend Engineer</p>
          <div className="flex flex-wrap justify-center gap-4 mt-4 text-sm text-gray-500">
            <span>• ibe.okorafor@gmail.com</span>
            <span>• 08138841658</span>
            <a
              href="https://ibe-portfolio-tau.vercel.app/"
              target="_blank"
              className="hover:text-black"
            >
              • Portfolio
            </a>
            <a
              href="https://github.com/ibeO-GH"
              target="_blank"
              className="hover:text-black"
            >
              • GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/okorafor-ibe-1b79192b7/"
              target="_blank"
              className="hover:text-black"
            >
              • LinkedIn
            </a>
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-gray-900 mb-3">Profile</h2>
          <p className="text-gray-600 leading-relaxed">
            Frontend Engineer specializing in React and TypeScript, with
            hands-on experience building real-world applications including
            e-commerce platforms, dashboards, and interactive tools. Strong
            focus on performance, scalability, and user experience.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-gray-900 mb-3">
            Tech Stack
          </h2>
          <div className="flex flex-wrap gap-2">
            {[
              "React",
              "TypeScript",
              "JavaScript",
              "Tailwind CSS",
              "Context API",
              "React Router",
              "Git",
              "API Integration",
            ].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-gray-900 mb-3">
            Experience
          </h2>
          <div className="bg-gray-50 p-5 rounded-xl">
            <h3 className="font-semibold text-gray-900">
              Frontend Engineer - Personal Projects
            </h3>
            <p className="text-sm text-gray-500 mb-3">2025 - Present</p>

            <ul className="list-disc pl-5 text-grayy-600 space-y-2 text-sm">
              <li>
                Built and deployed multiple production-ready web applications
              </li>
              <li>Implemented state management and routing systems</li>
              <li>Designed scalable component-based architectures</li>
              <li>Developed responsive and performance-optimized UIs</li>
            </ul>
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-gray-900 mb-3">Projects</h2>
          <div className="space-y-6">
            <div className="border rounded-xl p-5 hover:shadow-md transition">
              <h3 className="font-semibold text-gray-900">
                Velora - E-commerce Frontend
              </h3>
              <p className="text-sm text-gray-500 mb-2">
                React • TypeScript • Tailwind
              </p>
              <p className="text-sm text-gray-600 mb-3">
                Built a full e-commerce frontend with product pages, cart
                system, and persistent state.
              </p>

              <div className="flex gap-4 text-sm">
                <a
                  href="https://velora-ecommerce-delta.vercel.app/"
                  target="_blank"
                  className="text-black font-medium hover:underline"
                >
                  Live
                </a>
                <a
                  href="https://github.com/ibeO-GH/Velora-ecommerce"
                  target="_blank"
                  className="text-gray-600 hover:underline"
                >
                  Github
                </a>
              </div>
            </div>

            <div className="border rounded-xl p-5 hover:shadow-md transition">
              <h3 className="font-semibold text-gray-900">Finance Dashboard</h3>
              <p className="text-sm text-gray-500 mb-2">
                React • TypeScript • Tailwind
              </p>

              <p className="text-sm text-gray-600 mb-3">
                Responsive dashboard for tracking income and expenses with clean
                UI.
              </p>

              <div className="flex gap-4 text-sm">
                <a
                  href="https://finance-dashboard-six-woad.vercel.app/"
                  target="_blank"
                  className="hover:underline"
                >
                  Live
                </a>
                <a
                  href="https://github.com/ibeO-GH/Finance-Dashboard"
                  target="_blank"
                  className="hover:underline"
                >
                  Github
                </a>
              </div>
            </div>

            <div className="border rounded-xl p-5 hover:shadow-md transition">
              <h3 className="font-semibold text-gray-900">
                TaskFlow — Task Manager
              </h3>
              <p className="text-sm text-gray-500 mb-2">
                React • TypeScript • dnd-kit
              </p>

              <p className="text-sm text-gray-600 mb-3">
                Drag-and-drop task manager with dynamic UI interactions.
              </p>

              <div className="flex gap-4 text-sm">
                <a
                  href="https://taskflow-dnd.vercel.app/"
                  target="_blank"
                  className="hover:underline"
                >
                  Live
                </a>
                <a
                  href="https://github.com/ibeO-GH/taskflow-dnd"
                  target="_blank"
                  className="hover:underline"
                >
                  Github
                </a>
              </div>
            </div>

            <div className="border rounded-xl p-5 hover:shadow-md transition">
              <h3 className="font-semibold text-gray-900">
                DevFinder — GitHub Explorer
              </h3>
              <p className="text-sm text-gray-500 mb-2">
                React • TypeScript • API
              </p>

              <p className="text-sm text-gray-600 mb-3">
                Fetches and displays GitHub user data with clean UI states.
              </p>

              <div className="flex gap-4 text-sm">
                <a
                  href="https://dev-finder-app-taupe.vercel.app/"
                  target="_blank"
                  className="hover:underline"
                >
                  Live
                </a>
                <a
                  href="https://github.com/ibeO-GH/DevFinder-App"
                  target="_blank"
                  className="hover:underline"
                >
                  Github
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center text-sm text-gray-400 pt-6 border-t">
          &copy; {new Date().getFullYear()} Okorafor Ibe
        </div>
      </div>
    </section>
  );
};

export default CV;
