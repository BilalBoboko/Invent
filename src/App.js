import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/login/login";
import Dashboard from "./Pages/FloorPage/FloorPage"; // пример защищённой страницы
import Home from "./Pages/HomePage/HomePage"; // ещё одна страница

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);


  const handleLogin = (username, password) => {
    if (username && password === "1234") {
      setIsAuthenticated(true);
    } else {
      alert("Неправильный логин или пароль!");
    }
  };

  return (
    <Router>
      <Routes>
        {/* Страница входа */}
        <Route
          path="/"
          element={
            isAuthenticated ? (
              <Navigate to="/Home" replace />
            ) : (
              <Login onLogin={handleLogin} />
            )
          }
        />

        {/* Защищённые маршруты */}
        <Route
          path="/dashboard"
          element={
            isAuthenticated ? <Dashboard /> : <Navigate to="/" replace />
          }
        />
        <Route
          path="/home"
          element={
            isAuthenticated ? <Home /> : <Navigate to="/" replace />
          }
        />

        {/* Маршрут для неизвестных страниц */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
};

export default App;
