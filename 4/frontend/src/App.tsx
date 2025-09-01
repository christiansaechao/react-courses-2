import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import "./App.css";
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";
import User from "@/components/user/User";
import axios from "axios";
import type { AxiosResponse } from "axios";

export interface UserDataProps {
  fullname: string;
  firstname: string;
  lastname: string;
  age: number;
  createdAt: string;
  updatedAt: string;
}

interface UsersProps {
  data: UserDataProps[];
}

function App() {
  const [users, setUsers] = useState<UserDataProps[] | null>(null);

  const ToastFunc = () => {
    toast("Success!", {
      description: "A new user has been added to the database!",
      action: {
        label: "Undo",
        onClick: () => toast.error("You tried to undo the action!"),
      },
      duration: 2000,
    });
  };

  const GetUser = async () => {
    try {
      const { data }: AxiosResponse<UsersProps> = await axios.get(
        "http://localhost:5000/users"
      );
      setUsers(data.data);
    } catch (err: unknown) {
      if (err instanceof Error) {
        throw new Error(err.message);
      } else {
        throw new Error("An unknown error occurred");
      }
    }
  };

  return (
    <>
      <Button size="lg" variant="default" onClick={GetUser}>
        Hello
      </Button>
      <Toaster />
      {users &&
        users.map((user) => <User fullname={user?.fullname} age={user?.age} />)}
    </>
  );
}

export default App;
