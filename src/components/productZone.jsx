
import "../assets/style/productList.css";
import Product from "./product.jsx";


const ProductZone = (props) => {
  const list = props.products.map( prod => <Product
                                /*key = {prod.id}*/
                                prod = {prod}
                                onAddToCart={props.onAddToCart}
                            /> 
  );

  return (
    <div className="productsZone">
      {list}
    </div>
  );
}
export default ProductZone;
