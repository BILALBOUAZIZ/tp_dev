import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AppNavBar from "./components/AppNavBar";
import ShoppingList from "./components/ShoppingList";
import { Container } from "reactstrap";

import ItemModel from "./components/ItemModal"

function App() {
  return (
    <div className="App">
      <AppNavBar />
      <Container>
        <ItemModel />
        <ShoppingList />
      </Container>
    </div>
  );
}

export default App;
