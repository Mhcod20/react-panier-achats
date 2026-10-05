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
import poubelleImgSrc from '../assets/images/poubelle.jpg';
import panierImgSrc from '../assets/images/panier.jpg';

const Panier = props => {

    const totalPrix = props.items.reduce((acc, item) => acc + (item.price * item.qtyInCart), 0);
    const totalPoids = props.items.reduce((acc, item) => acc + (item.weight * item.qtyInCart), 0);



    return (
        <div className="cart">
            <h4>Panier</h4>
            <div className="weight"> poids total {totalPoids}</div>

            <div className="productsZone">
                {props.items.map(item => (
                    <div key={item.id} className="product">
                        <div className="info">
                            <div className="name">{item.name}</div>
                        </div>
                        <div className="imageProduit">
                            <img src={item.image} alt={item.description} />
                        </div>
                        {/* Gestion des quantités */}
                        <div className="stock">
                            <input 
                                type="number" 
                                value={item.qtyInCart} 
                                min="0"
                                max={item.stock + item.qtyInCart}
                                onChange={(e) => props.onQtyChange(item.id, parseInt(e.target.value) || 0)}
                            />
                        </div>
                        <img 
                            className="button" 
                            src={poubelleImgSrc} 
                            alt="Retirer" 
                            onClick={() => props.onRemove(item.id)}
                        />
                    </div>
                ))}
            </div>

            <div className="total">
                <div>total commande : {totalPrix}</div>
            </div>
        </div>
    );
}
export default Panier;