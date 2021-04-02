import MainWindow from "./Components/MainWindow/MainWindow";
import "./App.css";
import Login from "./Components/Login/Login";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Auth } from "../src/Redux/Action";
import { BrowserRouter, Route, Switch } from "react-router-dom";
function App() {
  const data = useSelector((state) => {
    return state;
  });
  const dispatch = useDispatch();
  // const auth= ;

  useEffect(() => {
    {
      dispatch(Auth(JSON.parse(localStorage.getItem("user"))));
    }
  }, []);
  // console.log('complete auth data',data.Auth.message)
  return (
    <div className="App">
      {data.Auth ? (
        <BrowserRouter>
          <MainWindow />
        </BrowserRouter>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
