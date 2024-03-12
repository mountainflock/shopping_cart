import { useContext } from "react";
import { ShopContext } from "./ShopContextProvider";
import ShoppingCartItem from "./ShoppingCartItem";

const ShoppingCart = () => {
  const { shoppingCart, clearShoppingCart } = useContext(ShopContext);
  console.log(shoppingCart);
  return (
    <div className="shopping-cart">
      <div className="shopping-cart-title">Shopping Cart</div>
      {shoppingCart.map((product, i) => (
        <ShoppingCartItem
          key={i}
          title={product.productId.title}
          quantity={product.productId.quantity}
          price={product.productId.price}
        />
      ))}

      <div className="total-price-div">
        Total: ${""}
        {shoppingCart.reduce((sum, value) => {
          return sum + value.productId.price;
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
