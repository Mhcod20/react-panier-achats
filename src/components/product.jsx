import "../assets/style/product.css";
import "../assets/style/app.css";
import panierImgSrc from '../assets/images/panier.jpg';

const Product = props => {

    const id = props.prod.id;
    const name = props.prod.name;
    const description = props.prod.description;
    const weight = props.prod.weight;
    const image = props.prod.image;
    const qte = props.prod.stock;
    const price = props.prod.price;

    return (
        <div className="product">
            <div className="info">
                <div className="name">{name}</div>
                <div className="description">{description}</div>
                <div className="weight">{weight}</div>
            </div>
            <div className="imageProduit">
                <img src={image} alt={description} />
            </div>
            <div className="stock">
                qté {qte}
            </div>
            <div className="price">
                {price} 
            </div>
                <img 
                    className="button" 
                    src={panierImgSrc} 
                    alt="Ajouter au panier" 
                    onClick={() => props.onAddToCart(id)} 
                />
        </div>
    )
}
export default Product;