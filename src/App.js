import logo from "./logo.svg";
import "./App.css";
import Home from "./Pages/Home";
import { Route, Routes } from "react-router-dom";
import Loader from "./Pages/loaderPage/Loader";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Loader />} />
        <Route path="/Home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
