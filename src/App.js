// 구글 OAuthProvider 제거한 코드
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./member/LoginPage";
import MainPage from "./MainPage";

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </Router>
  );
}

export default App;
