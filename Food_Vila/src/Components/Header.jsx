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
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>
            <i className="fa-solid fa-cart-shopping"></i>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
