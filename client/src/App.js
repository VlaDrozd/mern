import React from "react";
import "materialize-css";
import { BrowserRouter as Router } from "react-router-dom";
import { useRoutes } from "./routes";
import { AuthContext } from "./context/AuthContext";
import { useAuth } from './hooks/auth.hook';
import { Navbar } from "./components/Navbar/Navbar";
import { Loader } from './components/Loader/Loader';

function App() {
  const auth = useAuth();

  const routes = useRoutes(auth.isAuth);

  if(!auth.isReady) {
    return <Loader />
  }

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
