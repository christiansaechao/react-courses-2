import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { updateUser } from "./features/user/userSlice";

function App() {
  const { name, email, hobby } = useSelector((state) => state.user);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    hobby: "",
  });

  const handleFormChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(updateUser(formData));
  };

  const dispatch = useDispatch();

  const [fruit, setFruit] = useState(["apple", "banana", "orange"]);

  function ReturnFruitComponet = (fruit) => <Component />

  return (
    <>
      <form onSubmit={onSubmitHandler} onChange={handleFormChange}>
        <input name="name" type="text" placeholder="username" />
        <input name="email" type="text" placeholder="email" />
        <input name="hobby" type="text" placeholder="hobby" />
        <button type="submit">Update User</button>
      </form>
      {name} {email} {hobby}

      {fruit.map((fruit) => )}

      {fruit.map((fruit) => ReturnFruitComponet(fruit))}

      {fruit.map((fruit) => (
        <>
          <Component /> 
          <SecondComponent />
        </>
      ))}
    </>
  );
}

export default App;
