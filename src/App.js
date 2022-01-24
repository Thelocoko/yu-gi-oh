import React from "react";
//Cambiar entre vistas
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
//Redux
import { Provider } from "react-redux";
import Store from "./redux/index";
import Navbar from "./components/Navbar";
import Home from "./pages/CardInfo";
import Cards from "./pages/Cards";

function App() {
  return (
    <Provider store={Store}>
      <Router>
        <Navbar brand="Yu Gi Oh en react" />
        <Routes>
          <Route exact path="/lista" element={<Cards />} />
          <Route exact path="/carta/:id" element={<Home />} />
          <Route exact path="*" element={<Navigate replace to="/lista" />} />
        </Routes>
      </Router>
    </Provider>
  );
}
export default App;
