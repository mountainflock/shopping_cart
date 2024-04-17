import "./navigation.css";
import { useNavigate } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="navigation">
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
