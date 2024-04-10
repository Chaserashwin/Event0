import { createContext, useState } from 'react'
export const loginContext=createContext("");
// eslint-disable-next-line react/prop-types
const UserContext=({children})=> {
    const [logindata,setLogindata]=useState("");
    const [logingoogle,setLogingoogle]=useState("");
  return (
    <>
      <loginContext.Provider value={{logindata,setLogindata,logingoogle,setLogingoogle}}>
        {children}
      </loginContext.Provider>
      </>
  )
}

export default UserContext