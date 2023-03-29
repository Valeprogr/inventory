import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ProductsList from "./pages/ProductsList";
import ProductInfo from "./pages/ProductInfo";
import NavBar from "./components/NavBar";
function App() {
  
  return (
    <>
      <NavBar />
      <div className="">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<ProductsList />} />
          <Route path="/product" element={<ProductInfo />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
