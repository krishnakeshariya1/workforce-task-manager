import { Children, createContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    useEffect(() => {
        const loggedUser = JSON.parse(localStorage.getItem("loggedUser"))

        if (loggedUser) setUser(loggedUser);
    }, [])

    const login = (email, password) => {
        if (email === "" || password === "") return;

        const usersData = getData();

        const foundUser = usersData.find((user) => {
            return user.email === email && user.password === password;
        })

        if (foundUser) {
            localStorage.setItem("loggedUser", JSON.stringify(foundUser));
            setUser(foundUser);
            return foundUser;
        }
        return null
    }

    const logOut = () => {
        localStorage.removeItem("loggedInUser");
        setUser(null);
    }

    return (
        <AuthContext.Provider value={{user,logOut, login}}>
            {children}
        </AuthContext.Provider>
    )
}