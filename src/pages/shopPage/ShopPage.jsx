import { ShopContextProvider } from "../../components/shopContextProvider/ShopContextProvider";
import CardList from "../../components/cardList/CardList";

const ShopPage = () => {
  return (
    <div>
      <ShopContextProvider>
        <CardList />
      </ShopContextProvider>
    </div>
  );
};

export default ShopPage;
