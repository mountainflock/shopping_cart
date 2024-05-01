import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import Home from "./pages/home/Home";
import ShopPage from "./pages/shopPage/ShopPage";
import Navigation from "./components/navigation/Navigation";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ShopPage" element={<ShopPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
