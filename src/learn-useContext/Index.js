import React, { useState, useContext } from "react";
import "./Index.css";

export const themes = {
  light: {
    id: 1,
    foreground: "#000000",
    background: "#eeeeee",
  },
  dark: {
    id: 2,
    foreground: "#ffffff",
    background: "#222222",
  },
};
export const ThemeContext = React.createContext(themes.light);
export default function Index() {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className="Main"
      style={{ background: theme.background, color: theme.foreground }}
    >
      <p className="Text">Theme by useContext</p>
      <p>KELOMPOK21</p>
      <ThemedButton />
    </div>
  );
}
function ThemedButton() {
  const { theme, changeTheme } = useContext(ThemeContext);
  return (
    <button
      className="Button"
      style={{ background: theme.background, color: theme.foreground }}
      onClick={changeTheme}
    >
      i am styled by theme context!
    </button>
  );
}
