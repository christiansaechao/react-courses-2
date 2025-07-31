import React, { useState, useEffect } from "react";
import axios from "axios";

// ui components
import { UserCard } from "../components/UserCardComponent";

//https://randomuser.me/api/

const Users = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async (count) => {
    const abortController = new AbortController();

    try {
      const { data } = await axios.get(
        `https://randomuser.me/api/?results=${count}`,
        { signal: abortController.signal }
      );
      setUsers(data.results);
    } catch (err) {
      if (axios.isCancel(err)) {
        console.log("Fetch Cancelled");
      } else {
        console.error("Error fetching user:", err.message);
      }
    }
  };

  useEffect(() => {
    fetchUsers(10);
  }, []);

  return (
    <div className="flex flex-col gap-8">
      Users
      {users?.map((user, index) => {
        return <UserCard key={index} user={user} />;
      })}
    </div>
  );
};

export default Users;
