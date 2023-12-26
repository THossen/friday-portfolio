import React from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "./Logo";

const Navbar = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;
  const logoColorClass = isActive("/Home") ? "text-tertiary" : "text-white hover:text-tertiary";

  return (
    <nav className="bg-secondary shadow-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-full">
        <div className="flex justify-between h-16">
          <Link to="/Home" className="flex items-center">
            <Logo colorClass={logoColorClass} />
          </Link>
          <div className="flex items-center">
            <Link
              to="/Home"
              className={`px-3 py-2 rounded-md text-2xl font-extrabold duration-200 ${
                isActive("/Home") ? "text-tertiary" : "text-white hover:text-tertiary"
              }`}
            >
              Team
            </Link>
            <Link
              to="/ShowCase"
              className={`px-3 py-2 rounded-md text-2xl font-extrabold duration-200 ${
                isActive("/ShowCase") ? "text-tertiary" : "text-white hover:text-tertiary"
              }`}
            >
              Project
            </Link>
            <Link
              to="/Contact"
              className={`px-3 py-2 rounded-md text-2xl font-extrabold duration-200 ${
                isActive("/Contact") ? "text-tertiary" : "text-white hover:text-tertiary"
              }`}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;