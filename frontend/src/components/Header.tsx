import React from "react";
import { FaProjectDiagram, FaNewspaper, FaBullhorn } from "react-icons/fa";

const Header: React.FC = () => {
  return (
    <header className="w-full bg-white shadow-md px-8 py-4 flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <img src="/images/logo.png" alt="Logo" className="h-10 w-10 object-contain" />
        <span className="text-xl font-bold text-gray-800">Guardian</span>
      </div>

      {/* Center menu */}
      <nav className="flex items-center gap-6 mx-auto">
        {[
          { icon: <FaProjectDiagram size={20} />, text: "Proyectos" },
          { icon: <FaNewspaper size={20} />, text: "Noticias" },
          { icon: <FaBullhorn size={20} />, text: "Campañas" },
        ].map((item, index) => (
          <div key={index} className="relative group">
            <button className="flex items-center justify-center w-12 h-12 rounded-full bg-color4 text-white overflow-hidden relative">
              {item.icon}
              <span className="absolute left-0 top-0 h-full flex items-center justify-center pl-3 pr-2
                               text-gray-800 bg-white rounded-full transform scale-x-0 opacity-0 
                               group-hover:scale-x-100 group-hover:opacity-100 transition-all duration-300 origin-left">
                {item.text}
              </span>
            </button>
          </div>
        ))}
      </nav>

      {/* Right buttons */}
      <div className="flex items-center gap-4">
        <button className="px-6 py-2 rounded-full border border-color4 text-color4 font-semibold hover:bg-color4 hover:text-white transition-all duration-300">
          Iniciar sesión
        </button>
        <button className="px-6 py-2 rounded-full bg-color4 text-white font-semibold hover:bg-color1 transition-all duration-300">
          Crear cuenta
        </button>
      </div>
    </header>
  );
};

export default Header;
