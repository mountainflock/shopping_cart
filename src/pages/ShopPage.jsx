import { useEffect, useState } from "react";
// import { createContext } from "react";

import "./shopPage.css";
import Card from "../components/Card";
import ShoppingCart from "../components/ShoppingCart";

const ShopPage = () => {
  const [products, setProducts] = useState([]);
  const [shoppingCart, setShoppingCart] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/jewelery")
      .then((response) => response.json())
      .then((products) => {
        setProducts(products);
      });
  }, []);

  //   const ShopContext = createContext({
  //     products: [],
  //     cartItems: [],
  //     addToCart: () => {},
  //   });

  const addProductToShoppingCart = (product) => {
    setShoppingCart([...shoppingCart, product]);
  };

  const removeProductFromShoppingCart = (id) => {
    setShoppingCart(shoppingCart.filter((product) => product.id !== id));
  };

  const clearShoppingCart = () => {
    setShoppingCart([]);
  };

  return (
    <div className="card-list">
      {products.map((product) => (
        <Card
          key={product.id}
          id={product.id}
          title={product.title}
          image={product.image}
          price={product.price}
          removeProductFromShoppingCart={removeProductFromShoppingCart}
          handleAddToCart={addProductToShoppingCart}
          shoppingCart={shoppingCart}
        />
      ))}
      {shoppingCart.length > 0 && (
        <ShoppingCart
          shoppingCart={shoppingCart}
          handleDeleteProductButtonClick={removeProductFromShoppingCart}
          clearShoppingCart={clearShoppingCart}
        />
      )}
    </div>
  );
};

export default ShopPage;
