import { useEffect, useState } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [menuOpen, setMenuOpen] = useState(false);

  const linkStyle =
    "cursor-pointer hover:text-blue-600 transition duration-300 px-2 py-1 text-gray-700";

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 flex justify-between items-center px-10 py-5 transition-all duration-300 ${scrolled ? "bg-white/80 backdrop-blur-md border-b border-gray-200" : "bg-transparent"}`}
      >
        {/* Logo */}
        <h1 className="text-2xl font-bold text-gray-900">Ibe.O</h1>

        {/* Links */}
        <ul className="hidden md:flex gap-10 text-lg font-medium list-none">
          <li className={linkStyle}>
            <a href="#home">Home</a>
          </li>
          <li className={linkStyle}>
            <a href="#about">About</a>
          </li>
          <li className={linkStyle}>
            <a href="#skills">Skills</a>
          </li>
          <li className={linkStyle}>
            <a href="#projects">Projects</a>
          </li>
          <li className={linkStyle}>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <div
          className="md:hidden cursor-pointer hover:text-blue-400 transition duration-300 text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </div>
      </nav>

      <ul
        className={`fixed top-[70px] left-0 w-full bg-white border-t border-gray-200 flex flex-col items-center gap-6 py-6 md:hidden z-40 text-lg font-medium transition-all duration-300 ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5 pointer-events-none"}`}
      >
        <li className={linkStyle} onClick={() => setMenuOpen(false)}>
          <a href="#home">Home</a>
        </li>
        <li className={linkStyle} onClick={() => setMenuOpen(false)}>
          <a href="#about">About</a>
        </li>
        <li className={linkStyle} onClick={() => setMenuOpen(false)}>
          <a href="#skills">Skills</a>
        </li>
        <li className={linkStyle} onClick={() => setMenuOpen(false)}>
          <a href="#projects">Projects</a>
        </li>
        <li className={linkStyle} onClick={() => setMenuOpen(false)}>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </>
  );
};

export default Navbar;
