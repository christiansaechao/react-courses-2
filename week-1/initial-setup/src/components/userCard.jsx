import React from "react";
import userData from "./userData.js";
/**
 * Username
 * First name
 * Last name
 * Age
 * Height
 * Occupation
 */

// <div>
//   <h1>User: {userName}</h1>
//   <ul>
//     <li>
//       Name: {first} {last}
//     </li>
//     <li>Age: {age}</li>
//     <li>Height: {height}</li>
//     <li>Job: {job}</li>
//   </ul>
// </div>

function UserCard() {
  return userData.map((user) => (
    <div key={user.userName}>
      <h3>User: {user.userName}</h3>
      <ul>
        <li>
          Name: {user.first} {user.last}
        </li>
        <li>Age: {user.age}</li>
        <li>Height: {user.height}</li>
        <li>Job: {user.job}</li>
      </ul>
    </div>
  ));
}

export default UserCard;
