import { createContext, useEffect, useState } from "react";
import { getTokenCookie } from "../Utils/auth/Token";
import jwtDecode from "jwt-decode";

export const AppContext = createContext();


export const AppProvider = ({children}) =>{
    const [auth, setAuth]= useState(null);

    useEffect(()=>{
        if(getTokenCookie){
            setAuth({
                token: getTokenCookie(),
                username: jwtDecode(getTokenCookie()).username
              })
        }
    },[])


    console.log('the auth'+auth);

    return(
        <AppContext.Provider value={{auth,setAuth}} >
            {children}
        </AppContext.Provider>
    )
}