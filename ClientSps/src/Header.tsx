import { Link } from "react-router-dom";
import "./App.css";

function Header() {
  console.log("✅ Header is rendered");

  return (
    <header className="header">
      <div className="header-left">
        <span>ಸಂಘ ಪೂರಕ ಸಾಧನ</span>
      </div>
      <nav className="navbar">
        <Link to="/">HOME</Link>
        <Link to="/about">ABOUT</Link>
        <Link to="/contact">CONTACT</Link>
      </nav>
    </header>
  );
}

export default Header;
