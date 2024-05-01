import { useContext } from "react";
import { ShopContext } from "../shopContextProvider/ShopContextProvider";
import Card from "../../components/card/Card";
import ShoppingCart from "../../components/shoppingCart/ShoppingCart";

const CardList = () => {
  const { products, shoppingCart } = useContext(ShopContext);
  return (
    <div className="card-list">
      {products.map((product) => (
        <Card
          key={product.id}
          id={product.id}
          title={product.title}
          image={product.image}
          price={product.price}
        />
      ))}
      {shoppingCart.length > 0 && <ShoppingCart />}
    </div>
  );
};

export default CardList;
