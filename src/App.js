import MainWindow from "./Components/MainWindow/MainWindow";
import "./App.css";
import Login from "./Components/Login/Login";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Auth } from '../src/Redux/Action'

function App() {
  const data = useSelector((state) => {
    return state;
  });
 const dispatch = useDispatch();
                // console.log(data.groupChat)
  // const auth= ;

    useEffect(()=>{
      {dispatch(Auth(JSON.parse(localStorage.getItem("user"))))}
    },[])
    // console.log('complete group data',data.Auth.message)
    return( 
            <div className="App">
              {data.Auth? <MainWindow /> : <Login />}
            </div>
         )
}

export default App;
