import { useContext } from 'react';
import { Offline, Online } from "react-detect-offline";
import { createHashRouter, RouterProvider } from "react-router-dom";
import Details from "../Details/Details";
import { AuthContext } from "../MediaContext/AuthStore";
import Profile from "../Profile/Profile";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import About from "./../About/About";
import Home from "./../Home/Home";
import Login from "./../Login/Login";
import MasterLayout from "./../MasterLayout/MasterLayout";
import Movies from "./../Movies/Movies";
import Notfound from "./../Notfound/Notfound";
import People from "./../People/People";
import Register from "./../Register/Register";
import Tvshows from "./../Tvshows/Tvshows";


function App() {

  // const [userData, setUserData] = useState(null)
  // let saveUserData=()=>{
  //   let encodedToken = localStorage.getItem('token');
  //   let decodedToken = jwtDecode(encodedToken);
  //   setUserData(decodedToken)
  //   console.log(userData)
    
  // }
  // let logout=()=>{
  //   localStorage.removeItem("token");
  //   setUserData(null);
  //   return <Navigate to={'login'}/>
  // }
  // useEffect(() => {
  //   if(localStorage.getItem('token')){
  //     saveUserData();
  //   }

  // }, [])
  const {userData,saveUserData,logout} = useContext(AuthContext)
  let routes = createHashRouter([
    {
      path: "/",element: <MasterLayout userData={userData} logout={logout}/>,errorElement:<Notfound/>,children:[
        { index:true, element: <ProtectedRoute> <Home /> </ProtectedRoute> },
        { path: "about", element:  <ProtectedRoute> <About/> </ProtectedRoute> },
        { path: "movies", element: <ProtectedRoute> <Movies /> </ProtectedRoute> },
        { path: "tvshows", element:  <ProtectedRoute> <Tvshows /> </ProtectedRoute> },
        { path: "details/:id/:mediaType", element:  <ProtectedRoute> <Details /> </ProtectedRoute> },
        { path: "register", element: <Register /> },
        { path: "profile", element: <ProtectedRoute> <Profile userData={userData} /> </ProtectedRoute> },
        { path: "people", element: <ProtectedRoute> <People /> </ProtectedRoute> },
        { path: "login", element: <Login saveUserData={saveUserData} /> },
      ],
    },
  ]);

  return (
    <>
    <div>
    <Online><RouterProvider router={routes} /></Online>
    <Offline>You're offline</Offline>
  </div>
    
      
   
    </>
  );
}

export default App;
