import { FaLinkedinIn, FaGithub, FaXTwitter } from "react-icons/fa6";
import { FiMail, FiPhone } from "react-icons/fi";
import useInView from "../hooks/useInView";

const Contact = () => {
  const { ref, visible } = useInView();

  return (
    <section
      id="contact"
      className="bg-[#f8fafc] border-t border-gray-200 scroll-mt-24 pt-24"
    >
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-8 md:px-24 lg:px-32 xl:px-44 transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
          Contact
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <form className="space-y-5">
            <div>
              <label className="block text-gray-700 mb-2">Full Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Email Address</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Subject</label>
              <input
                type="text"
                placeholder="Enter subject"
                className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Message</label>
              <textarea
                rows={5}
                placeholder="Enter your message"
                className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 py-3 rounded-lg text-white font-medium hover:bg-blue-700 hover:scale-[1.02] transition duration-300"
            >
              Send Message
            </button>
          </form>

          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-600">
              Get in Touch
            </h3>
            <p className="text-gray-600 leading-relaxed">
              I am a front-end developer dedicated to building clean,
              responsive, and user-friendly web applications. If you have a
              project, collaboration, or opportunity, feel free to reach out.
              I’ll get back to you as soon as possible.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-600">
                <FiPhone />

                <a
                  href="tel:+2348138841658"
                  className="hover:text-blue-600 transition"
                >
                  +234 813 884 1658
                </a>
              </div>
              <div className="flex items-center gap-3 text-gray-600">
                <FiMail />
                <a
                  href="mailto:ibe.okorafor@gmail.com"
                  className="hover:text-blue-600 transition"
                >
                  ibe.okorafor@gmail.com
                </a>
              </div>
            </div>

            <div className="flex gap-4 pt-2">
              <a
                href="https://www.linkedin.com/in/okorafor-ibe-1b79192b7/"
                target="_blank"
                className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-600 hover:text-white transition duration-300"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://github.com/ibeO-GH"
                target="_blank"
                className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-600 hover:text-white transition duration-300"
              >
                <FaGithub />
              </a>
              <a
                href="https://x.com/ibeO_X"
                target="_blank"
                className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-600 hover:text-white transition duration-300"
              >
                <FaXTwitter />
              </a>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-20 py-5 text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} All Rights Reserved - Developed by{" "}
          <span className="text-blue-600">Ibe Okorafor</span>
        </div>
      </div>
    </section>
  );
};

export default Contact;
