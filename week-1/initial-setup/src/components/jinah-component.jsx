import React from "react";

export const JinahComponent = ({ name, age, height, hometown }) => {
  return (
    <div className="flex flex-col bg-gray-100 text-gray-800  rounded-sm justify-center items-start p-3 shadow">
      <div>
        <span className="font-semibold">Name:</span> {name}
      </div>
      <div>
        <span className="font-semibold">Age:</span> {age}
      </div>
      <div>
        <span className="font-semibold">Height:</span> {height}
      </div>
      <div>
        <span className="font-semibold">Hometown:</span> {hometown}
      </div>
    </div>
  );
};
