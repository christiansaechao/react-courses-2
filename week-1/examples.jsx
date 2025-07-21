// HelloUser.jsx
export const HelloUser = ({ name }) => {
  return <h1>Hello, {name}!</h1>;
};

// FavoriteColor.jsx
export const FavoriteColor = ({ color }) => {
  return <p>My favorite color is {color}.</p>;
};

// AgeDisplay.jsx
export const AgeDisplay = ({ age }) => {
  return <p>I am {age} years old.</p>;
};

// HobbyList.jsx
export const HobbyList = ({ hobbies }) => {
  return (
    <div>
      <h3>My Hobbies:</h3>
      <ul>
        {hobbies.map((hobby, idx) => (
          <li key={idx}>{hobby}</li>
        ))}
      </ul>
    </div>
  );
};

// CountrySelector.jsx
export const CountrySelector = ({ selectedCountry, countries }) => {
  return (
    <div>
      <p>Selected Country: {selectedCountry}</p>
      <p>Available Countries:</p>
      <ul>
        {countries.map((country, idx) => (
          <li key={idx}>{country}</li>
        ))}
      </ul>
    </div>
  );
};