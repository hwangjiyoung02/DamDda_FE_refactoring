import React from 'react';
import './LoginPage.css'; // 스타일 파일 임포트

const LoginPage = () => {
  const backendBaseUrl = process.env.REACT_APP_API_BASE_URL;

  // 구글 OAuth 요청
  const handleGoogleLogin = () => {
    window.location.href = `${backendBaseUrl}/oauth2/authorization/google`;
  };

  // 네이버 OAuth 요청
  const handleNaverLogin = () => {
    window.location.href = `${backendBaseUrl}/oauth2/authorization/naver`;
  };

  return (
    <div className="login-container">
      <h1>임대주택 가격 서비스</h1>
      <form className="login-form">
        <div className="form-group">
          <label htmlFor="username">아이디</label>
          <input
            type="text"
            id="username"
            placeholder="아이디를 입력해주세요"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">비밀번호</label>
          <input
            type="password"
            id="password"
            placeholder="비밀번호를 입력해주세요"
          />
        </div>
        <button type="submit" className="login-button">로그인</button>
      </form>
      <div className="signup-sns">
        <button className="signup-button">최담가입</button>
        <div className="sns-login">
          <span>SNS 로그인</span>
          <button onClick={handleGoogleLogin} className="sns-button google">
            구글로 로그인
          </button>
          <button onClick={handleNaverLogin} className="sns-button naver">
            네이버로 로그인
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
