import { jwtDecode } from "jwt-decode";
import React, { createContext, useEffect, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const userData = localStorage.getItem("token");

        if (userData) {
            try {
                const decodedUser = jwtDecode(userData);
                setUser(decodedUser);
            } catch (error) {
                console.log("Invalid token", error);
                localStorage.removeItem("token");
            }
        }
    }, []);



    const logOut = () => {
        localStorage.removeItem("token");
        setUser(null);
        window.location.href = "/login";
    };

    return (
        <AuthContext.Provider value={{ user, setUser, logOut }}>
            {children}
        </AuthContext.Provider>
    );
};

export {AuthContext, AuthProvider};