import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const [isDarkMode, setIsDarkMode] = useState(true);

  const appClass = isDarkMode ? "App light" : "App dark";

  const toggleDarkMode = () => {
    setIsDarkMode((currVal) => !currVal);
  } 

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={toggleDarkMode} >{isDarkMode ? 'Dark Mode' : 'Light Mode'}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
