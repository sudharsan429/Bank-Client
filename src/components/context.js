import { createContext, useState } from "react";
const UserContext = createContext();
export const UserProvider = ({ children }) => {
    const [users, setUsers] = useState([
        {
            name: "Yuvasri",
            email: "yyuvasri10@gmail.com",
            phoneno:1234567890,
            password: "yuvi#123",
            amount: 1000
        }
    ]);
    return (
        <UserContext.Provider value={{ users, setUsers }}>
            {children}
        </UserContext.Provider>
    );
};
export default UserContext;