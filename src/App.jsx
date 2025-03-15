import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import WelcomeMessage from "./components/WelcomeMessage";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import UserProfile from "./components/UserProfile";
import Counter from "./components/Counter";
import ProfilePage from "./components/ProfilePage";
/* import UserContext from "./UserContext";
 */ import UserContext from "./components/UserContext";

function App() {
  const [count, setCount] = useState(0);
  const userData = { name: "Alice", email: "alice@example.com" };

  return (
    <>
      <div className="welcome-section">
        <WelcomeMessage />
      </div>

      <div className="main-content">
        <Header />
        <MainContent />
        <UserProfile name="Alice" age={25} bio="Loves hiking and photography" />
        <Footer />
        <Counter /> {/* ✅ الحفاظ على Counter */}
        <UserContext.Provider value={userData}>
          <ProfilePage />
        </UserContext.Provider>
      </div>

      <div className="logos">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <div className="title-section">
        <h1>Vite + React</h1>
      </div>

      <div className="counter-section">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>

      <div className="learn-more">
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </div>
    </>
  );
}

export default App;
