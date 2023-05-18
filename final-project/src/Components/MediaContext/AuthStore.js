import axios from "axios";
import { createContext, useEffect, useState } from "react";
import jwtDecode from "jwt-decode";
import { Navigate } from "react-router-dom";

export let AuthContext = createContext(null);

export default function AuthContextProvider(props){

    let [userData, setUserData] = useState(null);

    let saveUserData=()=>{
          let encodedToken = localStorage.getItem('token');
          let decodedToken = jwtDecode(encodedToken);
          setUserData(decodedToken)
          console.log(userData)
    }
    let logout=()=>{
          localStorage.removeItem("token");
          setUserData(null);
          return <Navigate to={'login'}/>
        }
 useEffect(() => {
    if(localStorage.getItem('token')){
      saveUserData();
    }

  }, [])
    return <AuthContext.Provider value ={{userData,saveUserData,logout}}>
        {props.children}
    </AuthContext.Provider>

}