import useInView from "../hooks/useInView";
import { FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { FiMail } from "react-icons/fi";

const Contact = () => {
  const { ref, visible } = useInView();

  return (
    <section
      id="contact"
      className="bg-[#f8fafc] dark:bg-[#020617] border-t border-gray-200 py-24 scroll-mt-24"
    >
      <div
        ref={ref}
        className={`w-full px-8 md:px-24 lg:px-32 xl:px-44 transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-5xl">
          <p className="text-blue-600 font-medium tracking-wide uppercase text-md mb-4">
            Contact
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Let’s Build Something Meaningful
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-3xl">
            I’m currently open to frontend engineering opportunities,
            collaborations, and product-focused projects. Whether you’re
            building a startup, scaling a platform, or looking for a frontend
            engineer to contribute to your team, I’d be glad to connect.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mt-16">
            <div className="bg-white border border-gray-200 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Contact Information
              </h3>

              <div className="space-y-5">
                <a
                  href="mailto:ibe.okorafor@gmail.com"
                  className="flex items-center gap-4 text-gray-600 hover:text-blue-600 transition duration-300"
                >
                  <div className="w-11 h-11 rounded-full border border-gray-300 flex items-center justify-center">
                    <FiMail />
                  </div>

                  <span>ibe.okorafor@gmail.com</span>
                </a>

                <div className="flex gap-4 pt-4">
                  <a
                    href="https://github.com/ibeO-GH"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 border border-gray-300 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white hover:border-blue-600 transition duration-300"
                  >
                    <FaGithub />
                  </a>

                  <a
                    href="https://www.linkedin.com/in/okorafor-ibe-1b79192b7/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 border border-gray-300 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white hover:border-blue-600 transition duration-300"
                  >
                    <FaLinkedinIn />
                  </a>

                  <a
                    href="https://x.com/ibeO_X"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 border border-gray-300 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white hover:border-blue-600 transition duration-300"
                  >
                    <FaXTwitter />
                  </a>
                </div>
              </div>
            </div>

            <form className="bg-white border border-gray-200 rounded-2xl p-8 space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-600 transition duration-300"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-600 transition duration-300"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>

                <textarea
                  rows={6}
                  placeholder="Tell me about your project or opportunity"
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-600 transition duration-300 resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="pt-16 text-sm text-gray-500">
            © {new Date().getFullYear()} Okorafor Ibe. All rights reserved.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
