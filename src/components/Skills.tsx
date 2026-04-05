import useInView from "../hooks/useInView";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import { SiTypescript, SiVercel, SiSlack } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import SkillCard from "./SkiillCard";

const Skills = () => {
  const { ref, visible } = useInView();
  return (
    <section
      id="skills"
      ref={ref}
      className={`bg-[#f8fafc] border-t border-gray-200 scroll-mt-24 py-24 transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="w-full px-8 md:px-24 lg:px-32 xl:px-44">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
          Skills & Tools
        </h2>
        <p className="text-gray-600 text-center mb-12">
          Technologies I use to build modern, responsive web applications.
        </p>
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-gray-700 mb-6 text-center">
            Frontend
          </h3>

          <div className="flex justify-center">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
              <SkillCard
                icon={<FaReact />}
                name="React"
                color="text-cyan-400"
              />
              <SkillCard
                icon={<SiTypescript />}
                name="TypeScript"
                color="text-blue-500"
              />
              <SkillCard
                icon={<FaJs />}
                name="JavaScript"
                color="text-yellow-400"
              />
              <SkillCard
                icon={<FaHtml5 />}
                name="HTML"
                color="text-orange-500"
              />
              <SkillCard
                icon={<FaCss3Alt />}
                name="CSS"
                color="text-blue-400"
              />
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-xl font-semibold text-gray-700 mb-6 text-center">
            Tools
          </h3>
          <div className="flex justify-center">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
              <SkillCard
                icon={<FaGitAlt />}
                name="Git"
                color="text-orange-600"
              />
              <SkillCard icon={<FaGithub />} name="GitHub" color="text-black" />
              <SkillCard
                icon={<VscVscode />}
                name="Vs Code"
                color="text-blue-500"
              />
              <SkillCard icon={<SiVercel />} name="Vercel" color="text-black" />
              <SkillCard
                icon={<SiSlack />}
                name="Slack"
                color="text-pink-500"
              />
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gry-700 mb-6 text-center">
            Currently Learning
          </h3>
          <div className="flex gap-4 flex-wrap justify-center">
            <span className="px-4 py-2 border border-gray-300 rounded-full text-sm text-gray-600">
              Next.js
            </span>
            <span className="px-4 py-2 border border-gray-300 rounded-full text-sm text-gray-600">
              Vue (Basics)
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
