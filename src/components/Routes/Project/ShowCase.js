import React from "react";
import Headline from "./ShowcaseComp.js/Headline";
import FeatureCard from "./ShowcaseComp.js/FeatureCard";

const ShowCase = () => {
  return (
    <div>
      <Headline />
      <div className="bg-gradient-to-b from-main via-indigo-100 to-main py-4 px-8">
        <FeatureCard />
      </div>
    </div>
  );
};

export default ShowCase;
