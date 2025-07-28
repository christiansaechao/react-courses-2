import React, { useState } from "react";

const Forms = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleFormChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
      <form onChange={handleFormChange}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" value={formData.name} />
        <label htmlFor="email">Email</label>
        <input type="email" id="email" value={formData.email} />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" value={formData.password} />
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          type="password"
          id="confirmPassword"
          value={formData.confirmPassword}
        />
        <button type="submit">Submit</button>
      </form>
  );
};

export default Forms;