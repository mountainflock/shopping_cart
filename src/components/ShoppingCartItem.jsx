import { useContext } from "react";
import { ShopContext } from "./ShopContextProvider";
import "./shoppingCartItem.css";

const ShoppingCartItem = ({ id, title, price, quantity }) => {
  const { removeProductFromShoppingCart } = useContext(ShopContext);

  return (
    <div className="shopping-cart-item">
      <p className="shopping-cart-item-title">{title}</p>
      <p>price: ${price}</p>
      <p>amount: {quantity}</p>

      <p>
        sum: ${price * quantity}
        <button
          className="delete-product-button"
          onClick={() => removeProductFromShoppingCart(id)}
        >
          <span className="material-symbols-rounded">delete</span>
        </button>
      </p>
    </div>
  );
};

export default ShoppingCartItem;
