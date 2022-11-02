import "./App.css";
import React, { useState, useContext } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Counter from "./learn-useState/Counter";
import Effect from "./learn-useEffect/Index";
import Context, { themes, ThemeContext } from "./learn-useContext/Index";

function App() {
  const [theme, setTheme] = useState(themes.dark);
  const changeTheme = () => {
    if (theme.id === themes.light.id) {
      setTheme(themes.dark);
    } else {
      setTheme(themes.light);
    }
  };
  return (
    <Router>
      <ThemeContext.Provider value={{ theme, changeTheme }}>
        <div className="App-header">
          <nav className="NavBar">
            <ul className="ul">
              <li className="li">
                <Link to="/">Use State</Link>
              </li>
              <li className="li">
                <Link to="/effect"> Use Effect</Link>
              </li>
              <li className="li">
                <Link to="/context"> Use Context</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/" exact element={<Counter />} />
            <Route path="/effect" exact element={<Effect />} />
            <Route path="/context" exact element={<Context />}></Route>
          </Routes>
        </div>
      </ThemeContext.Provider>
    </Router>
  );
}

export default App;
