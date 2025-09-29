import React from "react";
import { Home, User, Code, Folder, FileText, Mail } from "lucide-react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const navItems = [
    { name: "Home", icon: <Home size={18} /> },
    { name: "About", icon: <User size={18} /> },
    { name: "Projects", icon: <Code size={18} /> },
    { name: "Codes", icon: <Folder size={18} /> },
    { name: "Assets", icon: <FileText size={18} /> },
    { name: "Contact", icon: <Mail size={18} /> },
  ];

  return (
    <div className="w-16 sm:w-64 h-screen text-white flex flex-col p-2 sm:p-4 overflow-hidden">
      <nav className="flex flex-col gap-4 sm:gap-4">
        {navItems.map((item, index) => (
          <NavLink
            to={`/${item.name.toLowerCase()}`}
            key={index}
            className={({ isActive }) =>
              `flex items-center ml-3 sm:ml-0 gap-3 p-2 sm:p-3 rounded-lg transition-colors duration-300
              ${isActive ? "bg-purple-600" : "hover:bg-gray-800"}`
            }
          >
            {item.icon}
            {/* Show text only on sm and above */}
            <span className="hidden sm:block whitespace-nowrap">{item.name}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;