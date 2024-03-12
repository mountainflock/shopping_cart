import "./shopPage.css";
import { ShopContextProvider } from "../components/ShopContextProvider";
import CardList from "../components/CardList";

const ShopPage = () => {
  return (
    <div className="shop-page">
      <ShopContextProvider>
        <CardList />
      </ShopContextProvider>
    </div>
  );
};

export default ShopPage;
