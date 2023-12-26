import React from "react";

const teamContacts = [
  {
    name: "Kennette James Basco",
    email: "kmaddela@nyit.edu",
    emailSecond: "N/A",
    role: "Project Lead",
  },
  {
    name: "Tanvir Hossen",
    email: "thossen@nyit.edu",
    emailSecond: "tan.hossen.1@gmail.com",
    role: "Co-Developer",
  },
  {
    name: "Ethan Medina",
    email: "emedin04@nyit.edu",
    emailSecond: "emedina96037@gmail.com",
    role: "Co-Developer",
  },
  {
    name: "Jil Dhami",
    email: "jdhami@nyit.edu",
    emailSecond: "jildhami@gmail.com",
    role: "Co-Developer",
  },
];

const ContactUs = () => {
  return (
    <div className="bg-main min-h-screen p-10">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-secondary mb-3">
          Contact Our Team
        </h1>
        <p className="text-xl text-gray-700">
          Reach out to us for inquiries.
        </p>
      </div>
      <div className="flex flex-wrap justify-center items-center">
        {teamContacts.map((member, index) => (
          <div
            key={index}
            className="m-4 bg-white shadow-lg rounded-lg overflow-hidden w-80"
          >
            <div className="px-6 py-4">
              <div className="font-bold text-xl">{member.name}</div>
              <p className="text-gray-800 text-base border-b-2 border-b-tertiary">{member.role}</p>
              <div className="text-sm text-gray-600 mt-2 mb-1 underline">
                Email:
              </div>
              <a
                href={`mailto:${member.email}`}
                className="block text-indigo-600 hover:text-indigo-800"
              >
                {member.email}
              </a>
              <div className="text-sm text-gray-600 mt-2 mb-1 underline">
                Secondary Email:
              </div>
              <a
                href={`mailto:${member.emailSecond}`}
                className="block text-indigo-600 hover:text-indigo-800"
              >
                {member.emailSecond}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactUs;
