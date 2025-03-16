import { Link } from "react-router-dom";

function Navbar() {
  return (
    style={{
        backgroundColor: "#3498db",
        display: "flex",
        justifyContent: "space-between",
        padding: "10px",
        background: "#ddd",
      }}
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
