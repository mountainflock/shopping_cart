import { useEffect, useState, createContext } from "react";

export const ShopContext = createContext({
  products: [],
  shoppingCart: [],
  addProductToShoppingCart: () => {},
  removeProductFromShoppingCart: () => {},
  clearShoppingCart: () => {},
});

export const ShopContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [shoppingCart, setShoppingCart] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/jewelery")
      .then((response) => response.json())
      .then((products) => {
        setProducts(products);
      });
  }, []);

  const addProductToShoppingCart = (newProductId, newQuantity) => {
    const productIndex = shoppingCart.findIndex(
      ({ productId }) => productId.id === newProductId.id
    );
    if (productIndex !== -1) {
      const firstPart = shoppingCart.slice(0, productIndex);
      const secondPart = shoppingCart.slice(productIndex + 1);
      const product = shoppingCart[productIndex];
      const updatedProduct = {
        ...product,
        quantity: product.quantity + newQuantity,
      };
      setShoppingCart([...firstPart, updatedProduct, ...secondPart]);
    } else {
      setShoppingCart([
        ...shoppingCart,
        { productId: newProductId, quantity: newQuantity },
      ]);
    }
  };

  const removeProductFromShoppingCart = (id) => {
    setShoppingCart(
      shoppingCart.filter((product) => product.productId.id !== id)
    );
  };

  const clearShoppingCart = () => {
    setShoppingCart([]);
  };

  return (
    <ShopContext.Provider
      value={{
        products,
        shoppingCart,
        addProductToShoppingCart,
        removeProductFromShoppingCart,
        clearShoppingCart,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};
