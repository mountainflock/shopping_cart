import "./navigation.css";
import { useNavigate } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="navigation">
      <ul className="navigation-bar">
        <li className="navigation-item">
          <NavigationButton name="Home" path="/" />
        </li>
        <li className="navigation-item">
          <NavigationButton name="Shop" path="/ShopPage" />
        </li>
      </ul>
    </nav>
  );
};

const NavigationButton = ({ name, path }) => {
  const navigate = useNavigate();
  function handleClick() {
    navigate(path);
  }
  return (
    <button onClick={handleClick} className="navigation-item">
      {name}
    </button>
  );
};

export default Navigation;
