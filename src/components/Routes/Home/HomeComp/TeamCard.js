import React from "react";
import teamInfo from "./TeamInfo";

const TeamCard = () => {
  return (
    <div className="flex flex-wrap justify-around">
      {teamInfo.map(({ id, name, role, bio, imageUrl }) => (
        <div
          key={id}
          className="max-w-md rounded-lg overflow-hidden shadow-lg m-4"
        >
          <img className="w-full" src={imageUrl} alt={`Image of ${name}`} />
          <div className="px-4 py-2">
            <div className="font-bold text-xl">{name}</div>
            <p className="text-gray-700 text-base font-semibold mb-2 border-b-2 border-b-tertiary">{role}</p>
            <p className="text-gray-700 text-base">{bio}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TeamCard;
