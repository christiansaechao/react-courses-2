import React from "react";

export const SecondBerndTechComponent = ({ name, hobby, day, time }) => {
  return (
    <div>
      {name}'s hobby is {hobby} and usually happens on {day} at {time}.
    </div>
  );
};
