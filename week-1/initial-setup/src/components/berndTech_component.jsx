import React from "react";

export const BerndTechComponent = ({ name, age, location }) => {
  return (
    <div>
      Our first student is called {name}. He is {age} years old and resides in
      {location}.
    </div>
  );
};
