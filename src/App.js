import MainWindow from "./Components/MainWindow/MainWindow";
import "./App.css";
import Login from "./Components/Login/Login";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Auth } from "../src/Redux/Action";
import { useHistory } from "react-router-dom";

function App() {
  const history = useHistory();
  useEffect(() => {
    history.push("/");
  }, []);
  const data = useSelector((state) => {
    return state;
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(Auth(JSON.parse(localStorage.getItem("user"))));
  }, []);

  return <div className="App">{data.Auth ? <MainWindow /> : <Login />}</div>;
}

export default App;
