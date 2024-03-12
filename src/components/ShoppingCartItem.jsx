const ShoppingCartItem = ({ title, quantity, price }) => {
  return (
    <div className="shopping-cart-item">
      <p>{title}</p>
      <p>amount: {quantity}</p>
      <p>price: ${price}</p>
    </div>
  );
};

export default ShoppingCartItem;
