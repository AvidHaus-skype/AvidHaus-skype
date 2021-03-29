import MainWindow from "./Components/MainWindow/MainWindow";
import "./App.css";
import Login from "./Components/Login/Login";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const data = useSelector((state) => {
    return state;
  });
  const dispatch = useDispatch();

  // const [user, setUser] = useState(true);
  return <div className="App">{data.user ? <MainWindow /> : <Login />}</div>;
}

export default App;
