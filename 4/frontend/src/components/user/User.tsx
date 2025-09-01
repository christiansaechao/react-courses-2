import React from "react";

interface UserProps {
  fullname: string | undefined;
  age: number | undefined;
}

function User({ fullname, age }: UserProps) {
  return (
    <div>
      <p>Name: {fullname}</p>
      <p>Age: {age}</p>
    </div>
  );
}

export default User;
