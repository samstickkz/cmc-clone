import "./navbar.css";
// import logo from "../../../assets/logo.jpeg";

const Navbar = () => {
  return (
    <div className="navbar">
      <small className="logo">Samuel</small>
      <ul>
        <li>home</li>
        <li>Features</li> <li>pricing</li> <li>About</li>
      </ul>
      <div className="nav-right">
        <select>
          <option value="usd">NGN</option>
          <option value="usd">USD</option> <option value="usd">USD</option>{" "}
          <option value="usd">USD</option> <option value="usd">USD</option>
        </select>
        <button>Sign up</button>
      </div>
    </div>
  );
};

export default Navbar;
