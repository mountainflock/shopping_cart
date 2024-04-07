import { useContext } from "react";
import { ShopContext } from "./ShopContextProvider";
import ShoppingCartItem from "./ShoppingCartItem";
import "./shoppingCart.css";

const ShoppingCart = () => {
  const { shoppingCart, clearShoppingCart } = useContext(ShopContext);
  return (
    <div className="shopping-cart">
      <div className="shopping-cart-title">Shopping Cart</div>
      {shoppingCart.map((item, i) => (
        <ShoppingCartItem
          key={i}
          id={item.product.id}
          title={item.product.title}
          quantity={item.quantity}
          price={item.product.price}
        />
      ))}

      <div className="total-price-div">
        Total: ${""}
        {shoppingCart.reduce((sum, value) => {
          return parseFloat(
            (sum + value.product.price * value.quantity).toFixed(2)
          );
        }, 0)}
      </div>
      <button className="delete-all-button" onClick={clearShoppingCart}>
        DELETE ALL
      </button>
      <button className="checkout-button">Checkout</button>
    </div>
  );
};

export default ShoppingCart;
