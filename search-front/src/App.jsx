import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import ProductDetail from "./components/ProductDetail";
import { useEffect, useState } from "react";

import axios from "axios";

const API_URL = "http://localhost:3001/api/products"

function App() {
  const [products, setProducts] = useState([]);

  //todo: get a back de products
  // useEffect(() => {
  //   async function initProducts() {
  //     const { data } = await axios.get(`${API_URL}/`);
  //     console.log("in App component: ", data);
  //     if (data.length > 0) setProducts(data);
  //   }
  //   initProducts();
  // }, []);

  useEffect(() => {
    async function initProducts() {
      try {
        const { data } = await axios.get(`${API_URL}/`);
        if (data.length > 0) setProducts(data);
      } catch (error) {
        //alert("No se cargaron productos desde el backend.");
        console.error(error);
      }
    }
    initProducts();
  }, []);


  return (
    <>
      <Routes>
        <Route path="/" element={<Home products={products}></Home>}></Route>
        <Route
          path="/detail/:id"
          element={<ProductDetail></ProductDetail>}
        ></Route>
      </Routes>
    </>
  );
}

export default App;