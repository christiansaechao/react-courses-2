import React from "react";
import type { UserDataProps } from "@/App";

interface UserProps {
  name: string | undefined;
  age: number | undefined;
  email: string | undefined;
}

function User({ name, age, email }: UserProps) {
  return (
    <div>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Email: {email}</p>
    </div>
  );
}

export default User;
