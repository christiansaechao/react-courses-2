import { useEffect, useState } from "react";
import axios from "axios";

export const useGetUsers = (url) => {
  const [users, setUsers] = useState([]);

  // write function to make api call
  async function getUsers() {
    try {
      const { data } = await axios.get(url);
      console.log(data);
      setUsers(data.results);
    } catch (err) {
      throw new Error(err);
    }
  }

  useEffect(() => {
    getUsers();
  }, []);

  return users;
};
