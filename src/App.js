// 구글 OAuthProvider 제거한 코드
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { UserProvider } from "./UserContext";
import LoginPage from "./member/LoginPage";
import MainPage from "./MainPage";
import NaverRedirect from "./member/NaverRedirect";

function App() {
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/authnaver" element={<NaverRedirect />} />
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
