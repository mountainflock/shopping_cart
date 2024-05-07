import "./productInput.css";

const ProductInput = ({
  quantity,
  handleDecreaseButtonClick,
  handleIncreaseButtonClick,
  handleQuantityChange,
}) => {
  return (
    <div>
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
