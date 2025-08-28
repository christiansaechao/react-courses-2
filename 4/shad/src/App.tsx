import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import "./App.css";
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";
import User from "@/components/user/User";
import axios from "axios";
import type { AxiosResponse } from "axios";

export interface UserDataProps {
  name: {
    first: string;
    last: string;
  };
  email: string;
  dob: {
    date: string;
    age: number;
  };
}

interface RandomUserProps {
  results: Array<UserDataProps>;
}

function App() {
  const [count, setCount] = useState(0);

  function sum(num: number, num2: number): void {
    setCount(num + num2);
  }

  const RemoveFromCart = () => {
    toast.error("Removed from cart");
  };

  const ToastFunc = () => {
    toast("Hello World!", {
      description: "This is a toast notification",
      action: {
        label: "Undo",
        onClick: () => RemoveFromCart(),
      },
      duration: 2000,
    });
  };

  const [user, setUser] = useState<UserDataProps | null>(null);

  // "https://randomuser.me/api/"

  const GetUser = async () => {
    try {
      const { data }: AxiosResponse<RandomUserProps> = await axios.get(
        "https://randomuser.me/api/"
      );
      setUser(data.results[0]);
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

      <User name={user?.name.first} age={user?.dob.age} email={user?.email} />
    </>
  );
}

export default App;