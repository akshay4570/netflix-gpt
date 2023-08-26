import React from "react";

const Footer = () => {
  const listDetails = [
    "FAQ",
    "Help Center",
    "Terms of Use",
    "Privacy",
    "Cookie Preference",
    "Corporate Information",
  ];
  return (
    <div className="text-white">
      <div className="px-20 py-2 m-2">
        <p>Questions? Call 000-800-919-1694</p>
        <div className="py-2 my-2 flex justify-between">
          {listDetails.map((content, index) => (
            <p key={index}>{content}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
