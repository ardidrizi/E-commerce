// import ListAll from "./components/ListAll";
import Homepage from "./pages/HomePage";
import Navbar from "./components/navbar/Navbar";
import Categories from "./pages/Categories";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Shop from "./pages/Shop";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
