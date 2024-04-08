import { useState, useContext } from "react";
import "./card.css";
import ProductInput from "./ProductInput";
import { ShopContext } from "./ShopContextProvider";

const Card = ({ id, title, image, price }) => {
  const { addProductToShoppingCart } = useContext(ShopContext);
  const [quantity, setQuantity] = useState(1);

  const handleAddToCartButtonClick = (e) => {
    e.preventDefault();
    const newProduct = { id, title, image, price, quantity: quantity };
    addProductToShoppingCart(newProduct, quantity);
  };

  const handleIncreaseButtonClick = (e) => {
    e.preventDefault();
    if (isNaN(quantity)) {
      setQuantity(1);
      console.log(quantity);
    }
    setQuantity(quantity + 1);
  };

  const handleDecreaseButtonClick = (e) => {
    e.preventDefault();
    if (quantity === 1) return;
    setQuantity(quantity - 1);
  };

  const handleQuantityChange = (e) => {
    if (isNaN(e.target.value)) setQuantity(0);
    setQuantity(parseInt(e.target.value));
  };

  return (
    <div className="card">
      <div className="image-div">
        <img src={image} alt="product image" className="card-image" />
      </div>
      <div className="card-title">{title}</div>
      <div className="price-div">${price}</div>
      <div className="input-plus-button">
        <ProductInput
          id={id}
          quantity={quantity}
          handleIncreaseButtonClick={handleIncreaseButtonClick}
          handleDecreaseButtonClick={handleDecreaseButtonClick}
          handleQuantityChange={handleQuantityChange}
        />
        <div>
          <button
            className="add-to-cart-button"
            onClick={handleAddToCartButtonClick}
          >
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
