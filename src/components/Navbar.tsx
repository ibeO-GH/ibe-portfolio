import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

type NavbarProps = {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
};

const Navbar = ({ darkMode, setDarkMode }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/80 backdrop-blur-md border-b border-gray-200"
            : "bg-transparent"
        }`}
      >
        <div className="w-full px-8 md:px-24 lg:px-32 xl:px-44">
          <div className="h-20 flex items-center justify-between">
            {/* Logo */}
            <a
              href="#home"
              className="text-2xl font-bold tracking-tight text-gray-900"
            >
              Ibe<span className="text-blue-600">.</span>O
            </a>

            {/* Desktop Navigation */}
            <ul className="hidden md:flex items-center gap-10">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-600 hover:text-blue-600 transition duration-300 font-medium"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            <button
              onClick={() => setDarkMode(!darkMode)}
              className="w-11 h-11 rounded-full border border-gray-300 dark:border-gray-700 flex items-center justify-center hover:border-blue-600 transition duration-300"
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-4">
              <a
                href="/cv"
                className="border border-gray-300 px-5 py-2 rounded-full text-sm font-medium hover:border-blue-600 hover:text-blue-600 transition duration-300"
              >
                View CV
              </a>

              <a
                href="#contact"
                className="bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-blue-700 transition duration-300"
              >
                Contact
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden text-3xl text-gray-900"
            >
              {menuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed top-20 left-0 w-full bg-white border-t border-gray-200 z-40 transition-all duration-300 md:hidden ${
          menuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-5 pointer-events-none"
        }`}
      >
        <div className="flex flex-col px-8 py-8 gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-gray-700 text-lg font-medium hover:text-blue-600 transition duration-300"
            >
              {link.name}
            </a>
          ))}

          <div className="flex flex-col gap-4 pt-4">
            <a
              href="/cv"
              className="border border-gray-300 px-5 py-3 rounded-full text-center font-medium hover:border-blue-600 hover:text-blue-600 transition duration-300"
            >
              View CV
            </a>

            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="bg-blue-600 text-white px-5 py-3 rounded-full text-center font-medium hover:bg-blue-700 transition duration-300"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
