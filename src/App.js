import { useState } from "react";
import Navbar from "./component/Navbar";
import { Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import PrivateRoute from "./component/PrivateRoute";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="w-screen h-screen bg-richBlack-900 flex flex-col">
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedin={setIsLoggedIn} />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
            </>
          }
        />
        <Route
          path="/login"
          element={
            <>
              <Login setIsLoggedIn={setIsLoggedIn} />
            </>
          }
        />
        <Route
          path="/signup"
          element={<Signup setIsLoggedIn={setIsLoggedIn} />}
        ></Route>

        <Route
          path="/dashboard"
          element={
            <PrivateRoute isLoggedIn={isLoggedIn}>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="*"
          element={
            <div className="text-richBlack-5 text-center">
              Error 404 Page Not Found
            </div>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
