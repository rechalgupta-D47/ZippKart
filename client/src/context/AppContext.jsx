// This context file is used for global state management
// Created context using createContext hook
import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext();

// This function will return contextProvider tag
export const AppContextProvider = ({children})=>{

    const navigate = useNavigate();
    const [user,setUser] = useState(false);
    const [isSeller,setIsSeller] = useState(false);
    const [showUserLogin,setShowUserLogin] = useState(false);

    const value = {navigate, user, setUser, setIsSeller, isSeller, showUserLogin, setShowUserLogin}  // we will this object
    // here we can pass any variable or functions that can be accessed in any component
    return <AppContext.Provider value={value}>   
        {children}
    </AppContext.Provider>
}
// to access the above AppContext we have to export it from the file
export const useAppContext = ()=>{
    return useContext(AppContext)
}

// We can simply use this useAppContext in any component and can access this data stored in the above value object