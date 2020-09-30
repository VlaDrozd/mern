import React from "react";
import "materialize-css";
import { BrowserRouter as Router } from "react-router-dom";
import { useRoutes } from "./routes";
import { AuthContext } from "./context/AuthContext";
import { useAuth } from './hooks/auth.hook';
import { Navbar } from "./components/Navbar/Navbar";

function App() {
  const auth = useAuth();

  console.log(auth);

  const routes = useRoutes(auth.isAuth);

  return (
    <AuthContext.Provider value={auth}>
      <Router>
        {auth.isAuth && <Navbar />}
        <div className="container">{routes}</div>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
