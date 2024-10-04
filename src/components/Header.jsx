import { useState } from "react";
import logo from "../assets/ourwedding.png";
import { Link } from "react-router-dom";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="flex fixed z-50 left-0 right-0 top-0 bg-white px-6 lg:px-20 py-3 items-center justify-between">
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="w-10 lg:w-12 mr-2 lg:mr-3" />
        <h1 className="text-primary text-lg lg:text-xl font-thin">OurWedding</h1>
      </div>
      <nav>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-black text-2xl focus:outline-none"
          >
            ☰
          </button>
        </div>
        <ul className={`flex ${isOpen ? 'flex-col absolute top-16 left-0 w-full bg-white shadow-lg' : 'hidden'} md:flex  md:gap-x-10 items-center`}>
          <li className="text-black text-sm md:text-lg hover:text-pink-600 font-thin mb-4 md:mb-0">
            <Link to="/" onClick={toggleMenu}>Home</Link>
          </li>
          <li className="text-black text-sm md:text-lg hover:text-pink-600 font-thin mb-4 md:mb-0">
            <Link to="/" onClick={toggleMenu}>About</Link>
          </li>
          <li className="text-black text-sm md:text-lg hover:text-pink-600 font-thin mb-4 md:mb-0">
            <Link to="/" onClick={toggleMenu}>FAQ</Link>
          </li>
          <li className="border border-primary rounded-2xl px-5 py-1 text-sm md:text-lg text-primary hover:text-pink-600 font-thin mb-4 md:mb-0">
            <Link to="/" onClick={toggleMenu}>Collection</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
