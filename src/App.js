import MainWindow from "./Components/MainWindow/MainWindow";
import "./App.css";
import Login from "./Components/Login/Login";
import { useState } from "react";
function App() {
  const [user, setUser] = useState(false);
  return <div className="App">{user ? <MainWindow /> : <Login />}</div>;
}

export default App;
