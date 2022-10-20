import React from "react";

import "./App.css";
// import LoginForm from "./components/LoginForm";
// import RegisterForm from "./components/RegisterForm";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

import { useLoginContext } from "./contexts/LoginContext/LoginContext";

import BoardApp from "./pages/BoardApp";
import { BoardProvider } from "./contexts/BoardContext/BoardContext";

function App() {
  const { isLoggedIn } = useLoginContext();

  return (
    <div className="App">
      {!isLoggedIn ? (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
        </BrowserRouter>
      ) : (
        <BoardProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<BoardApp />} />
            </Routes>
          </BrowserRouter>
        </BoardProvider>
      )}
    </div>
  );
}

export default App;
