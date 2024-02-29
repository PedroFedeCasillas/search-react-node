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
        console.log("in App component: ", data);
        
        if (data.length > 0) {
          setProducts(data);
        } else {
          // Muestra un alert si no hay productos
          alert('No se cargaron productos desde el backend.');
        }
      } catch (error) {
        // Muestra un alert si hay un error en la solicitud
        alert('Error al cargar productos desde el backend.');
        console.error('Error en la solicitud:', error);
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