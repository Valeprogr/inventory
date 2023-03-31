import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ProductsList from "./pages/ProductsList";
import ProductInfo from "./pages/ProductInfo";
import NavBar from "./components/NavBar";
import DeleteProduct from "./pages/DeleteProduct";
import AddNewModel from "./pages/AddNewModel";
import NotFoud from "./pages/NotFoud";
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
          <Route path="/products/:itemArticle" element={<ProductInfo />} />
          <Route path="/products/delete/:itemArticle" element={<DeleteProduct />} />
          <Route path="/product/addNewModel" element={<AddNewModel />} />
          <Route path="*" element={<NotFoud/>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
