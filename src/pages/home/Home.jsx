import { useNavigate } from "react-router-dom";
import mainPic from "../../assets/mainPic.jpg";
import "./home.css";

const Home = () => {
  const navigate = useNavigate();
  function navigateToShopPage() {
    navigate("/ShopPage");
  }
  return (
    <div className="home">
      <div className="home-image-div">
        <img
          src={mainPic}
          alt=""
          onClick={navigateToShopPage}
          className="main-image"
        />
      </div>
    </div>
  );
};

export default Home;
