import React,{ createContext, useState } from "react";

export const context = createContext()

export const ContextProvider = props =>{
    const[userData,setUserData] = useState({})
    const[repos,setRepos] = useState({})
    const[followers,setFollowers] = useState({})
    const[following,setFollowing] = useState({})
    const[searchedValue,setSearchedValue] = useState("");

    return(
        <context.Provider value={{
            userData,
            repos,
            followers,
            following,
            searchedValue,
            setUserData,
            setRepos,
            setFollowers,
            setFollowing,
            setSearchedValue
        }}>
            {props.children}
        </context.Provider>
    )
}


