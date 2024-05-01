import "./shopPage.css";
import { ShopContextProvider } from "../../components/shopContextProvider/ShopContextProvider";
import CardList from "../../components/cardList/CardList";

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
