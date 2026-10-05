import "../assets/style/app.css";
import "../assets/style/cart.css";
import "../assets/style/product.css";
import "../assets/style/productList.css";
import ProductZone from "./productZone.jsx";
import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
import products from "../data/products.js";
import Product from "./product.jsx";
import Panier from "./panier.jsx";

const App = () => {

  const [items, setItems] = useState([]);
  const [filterText, setFilterText] = useState("");

  const filteredProducts = items.filter(item => 
    item.name.toLowerCase().includes(filterText.toLowerCase())
  );

  useEffect(() => {
    const data = products.map(p => ({ ...p, qtyInCart: 0 }));
    setItems(data);
  }, []);

  const addToCart = (productId) => {
    setItems(prevItems => prevItems.map(item => {
      if (item.id === productId && item.stock > 0) {
        return { 
          ...item, 
          stock: item.stock - 1, 
          qtyInCart: item.qtyInCart + 1 
        };
      }
      return item;
    }));
  };

  const updateQuantity = (productId, delta) => {
    setItems(prevItems => prevItems.map(item => {
      if (item.id === productId) {
        if (delta > 0 && item.stock > 0) {
          return { ...item, stock: item.stock - 1, qtyInCart: item.qtyInCart + 1 };
        }
        if (delta < 0 && item.qtyInCart > 0) {
          return { ...item, stock: item.stock + 1, qtyInCart: item.qtyInCart - 1 };
        }
      }
      return item;
    }));
  };

  const removeItem = (productId) => {
    setItems(prevItems => prevItems.map(item => {
      if (item.id === productId) {
        return { ...item, stock: item.stock + item.qtyInCart, qtyInCart: 0 };
      }
      return item;
    }));
  };

const handleCartQuantityChange = (productId, newQty) => {
  setItems(prevItems => prevItems.map(item => {
    if (item.id === productId) {
      const totalInitialStock = item.stock + item.qtyInCart;
      const validatedQty = Math.max(0, Math.min(newQty, totalInitialStock));
      
      return {
        ...item,
        qtyInCart: validatedQty,
        stock: totalInitialStock - validatedQty
      };
    }
    return item;
  }));
};

  return (
    <div>
      <div className="productList" >
        <h4>Boutique</h4>
        <input type="text" 
        className="filter"
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
        />
        <ProductZone
          onAddToCart={addToCart}
          products={filteredProducts}
        />
      </div>
        <Panier
          items={items.filter(i => i.qtyInCart > 0)}
          onUpdateQty={updateQuantity}
          onRemove={removeItem}
          onQtyChange={handleCartQuantityChange}
        />
    </div>
  );
}
export default App;
