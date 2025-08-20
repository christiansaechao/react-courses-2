import { useState } from "react";
import { UserContext } from "../contexts/UserContext";

export const UserProvider = ({ children, defaultUser }) => {
    const [user, setUser] = useState(defaultUser || { name: "Guest" });

    return (
        <UserContext.Provider value={{ user }}>
        {children}
        </UserContext.Provider>
    )
}