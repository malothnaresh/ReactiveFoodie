import React from "react";
import "./App.scss";
import FoodieProvider from "./Components/FoodieContext";

import AppRouter from "./Router/AppRouter";

function App() {
  return (
    <FoodieProvider>
      <AppRouter />
    </FoodieProvider>
  );
}

export default App;
