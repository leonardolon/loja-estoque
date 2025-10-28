import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./navigation/AppRoutes";
import { GlobalStyles } from "./styles/GlobalStyles";

const App: React.FC = () => {
  return (
    <Router>
      <GlobalStyles />
      <AppRoutes />
    </Router>
  );
};

export default App;
