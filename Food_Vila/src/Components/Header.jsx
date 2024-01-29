import { Link } from "react-router-dom";
const Title = () => (
  <a href="/">
    <img
      className="logo"
      src="https://graphicsfamily.com/wp-content/uploads/edd/2021/06/Food-Logo-Design-1-2048x1152.jpg"
      alt="Food Fire Logo"
    />
  </a>
);

const Header = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
          <li>
            <i className="fa-solid fa-cart-shopping"></i>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
