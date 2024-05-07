import { useNavigate } from "react-router-dom";
import "./navigation.css";

const Navigation = () => {
  const navigate = useNavigate();
  function handleHomeButtonClick() {
    navigate("/");
  }
  return (
    <nav className="navigation">
      <div className="logo-div">
        <a href="" className="logo-text" onClick={handleHomeButtonClick}>
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
  function handleNavigationButtonClick() {
    navigate(path);
  }
  return (
    <a
      href=""
      onClick={handleNavigationButtonClick}
      className="navigation-link"
    >
      {name}
    </a>
  );
};

export default Navigation;
