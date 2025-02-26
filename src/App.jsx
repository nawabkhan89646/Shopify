import "./App.css";
import Logins from "./Components/Login/Logins";
import Home from "./Components/Home/Home";
import Contact from "./Components/Contact/Contact";
import Products from "./Components/Products/Products";
import Users from "./Components/Users/Users";
import ProductCard from "./Components/ProductCard/ProductCard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<Logins/>} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/Products/:id" element={<ProductCard />} />
          <Route path="/Users" element={<Users />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
