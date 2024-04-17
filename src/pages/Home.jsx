import "./home.css";
import mainPic from "../assets/mainPic.jpg";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/ShopPage");
  }

  return (
    <div className="home">
      <div className="logo-text">BASE </div>
      <div className="home-text">plain jewelery</div>
      <div className="shop-now-button">
        <a href="" onClick={handleClick}>
          SHOP NOW
        </a>
      </div>
      <img src={mainPic} alt="" className="main-image" />
    </div>
  );
};

export default Home;
