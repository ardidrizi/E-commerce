// import ListAll from "./components/ListAll";
import Homepage from "./pages/HomePage";
import Navbar from "./components/navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Shop from "./pages/Shop";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </>
  );
}

export default App;
