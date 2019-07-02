import React from "react";
import "./App.scss";
import FoodieProvider from "./Components/FoodieContext";

import AppRouter from "./Router/AppRouter";

function App() {
  return (
    <FoodieProvider value={{ checkout: 0 }}>
      <AppRouter />
    </FoodieProvider>
  );
}

export default App;
