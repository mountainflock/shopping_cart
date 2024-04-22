import "./navigation.css";
import { useNavigate } from "react-router-dom";

const Navigation = () => {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/");
  }
  return (
    <nav className="navigation">
      <div className="logo-div">
        <a href="" className="logo-text" onClick={handleClick}>
          BASE{" "}
        </a>
        <div className="home-text">plain jewelery</div>
      </div>
      <div className="navigation-bar">
        <div className="navigation-item">
          <NavigationButton name="Home" path="/" />
        </div>
        <div className="navigation-item">
          <NavigationButton name="Shop" path="/ShopPage" />
        </div>
      </div>
    </nav>
  );
};

const NavigationButton = ({ name, path }) => {
  const navigate = useNavigate();
  function handleClick() {
    navigate(path);
  }
  return (
    <a href="" onClick={handleClick} className="navigation-item">
      {name}
    </a>
  );
};

export default Navigation;
