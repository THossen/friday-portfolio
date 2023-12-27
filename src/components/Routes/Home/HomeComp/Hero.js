import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="bg-main text-secondary border-b-2 mb-10">
      <div className="container mx-auto py-16 px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Meet the Team</h1>
        <p className="text-xl text-center mb-10">
          We are excited to bring you Friday.
        </p>
        <div className="text-center">
          <Link
            to="/ShowCase"
            className="inline-block bg-gradient-to-r from-tertiary via-green-300 to-tertiary text-white text-lg font-bold px-6 py-3 rounded-3xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            Explore Features
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
