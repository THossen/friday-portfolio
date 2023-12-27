import React from "react";
import featureInfo from "./FeatureInfo";

const FeatureCard = () => {
  return (
    <div>
      {featureInfo.map(({ id, title, description, gifUrl }, index) => {
        const isEven = index % 2 === 0;
        return (
          <div
            key={id}
            className={`flex flex-wrap ${
              isEven ? "flex-row" : "flex-row-reverse"
            } my-8`}
          >
            <div className="w-full md:w-1/2">
              <img
                className="rounded overflow-hidden shadow-lg"
                src={gifUrl}
                alt=""
              />
            </div>
            <div className="w-full md:w-1/2 flex items-center bg-white rounded shadow-lg">
              <div className="px-4 py-2">
                <div className="font-bold text-xl mb-2">{title}</div>
                <p className="text-gray-700 text-base">{description}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FeatureCard;
