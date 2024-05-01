import { useState, useContext } from "react";
import "./card.css";
import ProductInput from "../productInput/ProductInput";
import { ShopContext } from "../../components/shopContextProvider/ShopContextProvider";

const Card = ({ id, title, image, price }) => {
  const { addProductToShoppingCart } = useContext(ShopContext);
  const [quantity, setQuantity] = useState(1);

  const handleAddToCartButtonClick = (e) => {
    e.preventDefault();
    const newProduct = { id, title, image, price, quantity };
    addProductToShoppingCart(newProduct, quantity);
  };

  const handleIncreaseButtonClick = (e) => {
    e.preventDefault();
    const parsedQuantity = parseInt(quantity);
    if (isNaN(parsedQuantity)) {
      setQuantity(1);
    } else {
      setQuantity(parsedQuantity + 1);
    }
  };

  const handleDecreaseButtonClick = (e) => {
    e.preventDefault();
    const parsedQuantity = parseInt(quantity);
    if (isNaN(parsedQuantity)) {
      setQuantity(1);
    } else if (parsedQuantity === 1) {
      return;
    } else {
      setQuantity(parsedQuantity - 1);
    }
  };

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  return (
    <div className="card">
      <div className="image-div">
        <img src={image} alt="product image" className="card-image" />
      </div>
      <div className="card-title">{title}</div>
      <div className="price-div">${price}</div>
      <div className="quantity-input-div">
        <ProductInput
          id={id}
          quantity={quantity}
          handleIncreaseButtonClick={handleIncreaseButtonClick}
          handleDecreaseButtonClick={handleDecreaseButtonClick}
          handleQuantityChange={handleQuantityChange}
        />
      </div>
      <div className="add-to-cart-button-div">
        {quantity < 1 ? (
          <button
            className="add-to-cart-button-disabled"
            onClick={handleAddToCartButtonClick}
            disabled={true}
          >
            ADD TO CART
          </button>
        ) : (
          <button
            className="add-to-cart-button"
            onClick={handleAddToCartButtonClick}
            disabled={false}
          >
            ADD TO CART
          </button>
        )}
      </div>
    </div>
  );
};

export default Card;
