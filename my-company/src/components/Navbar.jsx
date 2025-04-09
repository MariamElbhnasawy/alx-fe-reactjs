import { Link } from "react-router-dom";

function Navbar() {
  return (
<<<<<<< HEAD
    <nav
      style={{
=======
    style={{
>>>>>>> 21e5df134ea0f6fed7b2b63d0eb45796cd7cc6e4
        backgroundColor: "#3498db",
        display: "flex",
        justifyContent: "space-between",
        padding: "10px",
        background: "#ddd",
      }}
<<<<<<< HEAD
    >
      <Link to="/" style={{ margin: "0 10px" }}>
=======
>>>>>>> 21e5df134ea0f6fed7b2b63d0eb45796cd7cc6e4
        Home
      </Link>
      <Link to="/about" style={{ margin: "0 10px" }}>
        About
      </Link>
      <Link to="/services" style={{ margin: "0 10px" }}>
        Services
      </Link>
      <Link to="/contact" style={{ margin: "0 10px" }}>
        Contact
      </Link>
    </nav>
  );
}

export default Navbar;
