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
  const auth= JSON.parse(localStorage.getItem("user"));

    useEffect(()=>{
      {dispatch(Auth(auth))}
    },[])
    // console.log(data.user.data)
    return( 
            <div className="App">
              {data.Auth? <MainWindow /> : <Login />}
            </div>
         )
}

export default App;
