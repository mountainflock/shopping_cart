import "./home.css";
import mainPic from "../assets/mainPic.jpg";

const Home = () => {
  return (
    <div className="home">
      <div className="logo-text">BASE </div>
      <div className="home-text">plain jewelery</div>
      <img src={mainPic} alt="" className="main-image" />
    </div>
  );
};

export default Home;
