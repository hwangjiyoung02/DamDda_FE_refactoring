import React from 'react';
import './LoginPage.css'; // 스타일 파일 임포트

const LoginPage = () => {
  // 구글 OAuth 리디렉션 URL
  const handleGoogleLogin = () => {
    const googleClientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;
    const redirectUri = process.env.REACT_APP_NAVER_CALLBACK_URL;  // Google의 리디렉션 URL도 동일하게 설정
    window.location.href = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${googleClientId}&redirect_uri=${redirectUri}&response_type=code&scope=email profile`;
  };

  // 네이버 OAuth 리디렉션 URL
  const handleNaverLogin = () => {
    const naverClientId = process.env.REACT_APP_NAVER_CLIENT_ID;
    const redirectUri = `${process.env.REACT_APP_API_BASE_URL}/authnaver`;  // 수정된 경로
    window.location.href = `https://nid.naver.com/oauth2.0/authorize?client_id=${naverClientId}&redirect_uri=${redirectUri}&response_type=code&state=YOUR_STATE`;
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
