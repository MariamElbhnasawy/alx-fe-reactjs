function Navbar() {
  return (
    <nav style={{ backgroundColor: "blue", display: "flex", justifyContent: "space-between" }}>
      <h1>My Navbar</h1>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

export default Navbar;
