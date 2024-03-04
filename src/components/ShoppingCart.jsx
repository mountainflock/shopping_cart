import ProductInput from "./ProductInput";

const ShoppingCart = ({
  shoppingCart,
  handleDeleteProductButtonClick,
  handleIncreaseButtonClick,
  handleDecreaseButtonClick,
  handleQuantityChange,
  clearShoppingCart,
}) => {
  return (
    <div className="shopping-cart">
      <div className="shopping-cart-title">Shopping Cart</div>
      {shoppingCart.map((product, i) => (
        <ShoppingItem
          key={i}
          id={product.id}
          quantity={product.quantity}
          title={product.title}
          image={product.image}
          price={product.price}
          handleDeleteProductButtonClick={handleDeleteProductButtonClick}
          handleIncreaseButtonClick={handleIncreaseButtonClick}
          handleDecreaseButtonClick={handleDecreaseButtonClick}
          handleQuantityChange={handleQuantityChange}
          clearShoppingCart={clearShoppingCart}
        />
      ))}
      <div className="total-price-div">
        Total: ${""}
        {shoppingCart.reduce((sum, value) => {
          return sum + value.price;
        }, 0)}
      </div>
      <button className="delete-all-button" onClick={clearShoppingCart}>
        DELETE ALL
      </button>
      <button className="checkout-button">Checkout</button>
    </div>
  );
};

const ShoppingItem = ({
  id,
  title,
  // image,
  quantity,
  price,
  handleDeleteProductButtonClick,
  handleIncreaseButtonClick,
  handleDecreaseButtonClick,
  handleQuantityChange,
}) => {
  return (
    <div className="shopping-cart-item">
      <p>{title}</p>
      <div>{/* <img src={image} alt="product preview" /> */}</div>
      <p>amount: {quantity}</p>
      <p>price: ${price}</p>

      <div className="input-plus-delete-button">
        <ProductInput
          id={id}
          quantity={quantity}
          handleIncreaseButtonClick={handleIncreaseButtonClick}
          handleDecreaseButtonClick={handleDecreaseButtonClick}
          handleQuantityChange={handleQuantityChange}
        />
        <button
          className="delete-product-button"
          onClick={() => handleDeleteProductButtonClick(id)}
        >
          <span className="material-symbols-rounded">delete</span>
        </button>
      </div>
    </div>
  );
};

export default ShoppingCart;
