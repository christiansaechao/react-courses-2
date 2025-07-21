import { useState } from "react";
import "./App.css";
import { FirstComponent, SecondComponent } from "./components/first-component";
import MartinsComponent from "./components/another-component";
import { BerndTechComponent } from "./components/berndTech_component.jsx";
import MartyComponent from "./components/marty-component.jsx";
import { SecondBerndTechComponent } from "./components/secondBerndTechComponent.jsx";

function App() {
  const users = [
    { name: "Bernd", age: 26, location: "Germany" },
    { name: "Marty", age: 26, location: "Germany" },
    { name: "Chris", age: 26, location: "Germany" },
  ];

  const people = [
    { name: "Alisha", hobby: "Tennis", day: "Thursdays", time: "18:30h" },
    { name: "Edward", hobby: "Wizardry", day: "Sundays", time: "13:00h" },
    { name: "Leonard", hobby: "Painting", day: "Mondays", time: "22:00h" },
  ];

  // marty create a list
  const objects = [
    {
      food: "cheyuktopap",
      animal: "zebra",
      mark: "nike",
    },
  ];

  // bernd creat your own list

  return (
    <>
      {users.map(({ name, age, location }) => {
        return <BerndTechComponent name={name} age={age} location={location} />;
      })}

      {people.map(({ name, hobby, day, time }) => {
        return (
          <SecondBerndTechComponent
            name={name}
            hobby={hobby}
            day={day}
            time={time}
          />
        );
      })}

      {objects.map(({ food, animal, mark }) => {
        return <MartyComponent food={food} animal={animal} mark={mark} />;
      })}
    </>
  );
}
export default App;
