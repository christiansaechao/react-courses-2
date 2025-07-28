import { useState } from "react";
import "./App.css";
import { NourComponent } from "./components/nour-component";
import { JinahComponent } from "./components/jinah-component";

/**
 * 1. create a component, that displays your name
 * 2. Import it into App.jsx
 * 3. Create an instance / call your component in the return statement.
 * @returns
 */

function App() {
  const People = [
    {
      name: "Nour",
      age: 26,
      height: "5'10",
      hometown: "USA",
    },
    {
      name: "Bob",
      age: 30,
      height: "6'10",
      hometown: "USA",
    },
    {
      name: "Amber",
      age: 28,
      height: "7'2",
      hometown: "USA",
    },
  ];

  const People2 = [
    { name: "John", age: "333", height: "4'8", hometown: "USA" },
    { name: "Doe", age: "21", height: "5'3", hometown: "North Korea" },
    { name: "Jinah", age: "222", height: "5'2", hometown: "Korea" },
  ];

  return (
    <div>
      <div className="flex flex-col gap-2">
        {People2.map(({ name, age, height, hometown }, index) => {
          return (
            <JinahComponent
              name={name}
              age={age}
              height={height}
              hometown={hometown}
              key={`jinahcomponent-${index}`}
            />
          );
        })}
      </div>
      <div className="text-red-500">
        ````````````````````````````````````````````````````````````
      </div>
      {People.map((person, index) => {
        return (
          <NourComponent
            name={person.name}
            age={person.age}
            height={person.height}
            hometown={person.hometown}
            key={index}
          />
        );
      })}
    </div>
  );
}
export default App;
