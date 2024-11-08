import React, { useEffect, useState } from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import ProductList from "./page/ProductList";
import ProductAdd from "./page/ProductAdd";
import ProductEdit from "./page/ProductEdit";
import Homepage from "./page/Homepage";

const App = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    (async () => {
      const res = await axios.get(`  http://localhost:3000/products`);
      setProducts(res.data);
    })();
  }, []);
  const onRemove = async (id) => {
    await axios.delete(` http://localhost:3000/products/${id}`);
    setProducts(products.filter((item) => item.id !== id));
  };
  const onAdd = async (products) => {
    const res = await axios.post(`http://localhost:3000/products`, products);
    setProducts([...products, res.data]);
  };
  const onEdit = async (products) => {
    const res = await axios.put(
      `http://localhost:3000/products/${products.id}`,
      products
    );
    setProducts(
      products.map((item) => (item.id === res.data.id ? res.data : item))
    );
  };
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route
          path="/products"
          element={<ProductList products={products} onRemove={onRemove} />}
        />
        <Route path="/products/add" element={<ProductAdd onAdd={onAdd} />} />
        <Route
          path="/products/:id/edit"
          element={<ProductEdit onEdit={onEdit} />}
        />
      </Routes>
    </div>
  );
};

export default App;
