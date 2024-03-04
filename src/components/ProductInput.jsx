const ProductInput = ({
  quantity,
  handleIncreaseButtonClick,
  handleDecreaseButtonClick,
  handleQuantityChange,
}) => {
  return (
    <div className="quantity-input">
      <button className="decrease-button" onClick={handleDecreaseButtonClick}>
        -
      </button>
      <input
        type="number"
        value={quantity}
        className="quantity"
        onChange={handleQuantityChange}
      ></input>
      <button className="increase-button" onClick={handleIncreaseButtonClick}>
        +
      </button>
    </div>
  );
};

export default ProductInput;
