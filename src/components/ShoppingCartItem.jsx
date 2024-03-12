import { useContext } from "react";
import { ShopContext } from "./ShopContextProvider";

const ShoppingCartItem = ({ id, title, price, quantity }) => {
  const { removeProductFromShoppingCart } = useContext(ShopContext);

  const handleDeleteProductButtonClick = () => {
    removeProductFromShoppingCart(id);
  };

  return (
    <div className="shopping-cart-item">
      <p>{title}</p>
      <p>amount: {quantity}</p>
      <p>price: ${price}</p>
      <button
        className="delete-product-button"
        onClick={() => handleDeleteProductButtonClick(id)}
      >
        <span className="material-symbols-rounded">delete</span>
      </button>
    </div>
  );
};

export default ShoppingCartItem;
