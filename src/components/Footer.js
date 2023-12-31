import React from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "./Logo";

const Footer = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;
  const logoColorClass = isActive("/") ? "text-tertiary" : "text-white hover:text-tertiary";

  return (
    <footer className="bg-secondary text-white p-4">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:max-w-full">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <Logo colorClass={logoColorClass} />
          </Link>
          <div className="flex">
            <Link
              to="/Contact"
              className={`px-3 py-2 text-2xl font-extrabold duration-200 ${
                isActive("/Contact") ? "text-tertiary" : "text-white hover:text-tertiary"
              }`}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
