import React, { useState } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import NaverLogin from "react-naver-login";

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log(`Email: ${email}, Password: ${password}`);
  };

  const handleGoogleSuccess = (response) => {
    console.log('Google login successful:', response);
  };

  const handleGoogleError = () => {
    console.error('Google login failed');
  };

  const handleNaverLoginSuccess = (response) => {
    console.log('Naver login successful:', response);
  };

  const handleNaverLoginError = (error) => {
    console.error('Naver login failed:', error);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <h2 className="text-2xl font-bold mb-4">Login Page</h2>
      
      {/* 이메일/비밀번호 로그인 */}
      <form className="w-full max-w-sm bg-white p-6 shadow rounded-lg" onSubmit={handleLoginSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input
            type="email"
            className="w-full p-2 border rounded-md"
            placeholder="Enter your email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
          <input
            type="password"
            className="w-full p-2 border rounded-md"
            placeholder="Enter your password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        >
          Login
        </button>
      </form>

      <div className="mt-6 w-full max-w-sm">
        <h3 className="text-center text-sm font-semibold mb-4">Or login with:</h3>
        <div className="flex flex-col gap-3">
          {/* Google 로그인 */}
          <GoogleLogin
            onSuccess={handleGoogleSuccess}
            onError={handleGoogleError}
          />

          {/* Naver 로그인 */}
          <NaverLogin
            clientId={process.env.REACT_APP_NAVER_CLIENT_ID}
            callbackUrl={process.env.REACT_APP_NAVER_CALLBACK_URL}
            onSuccess={handleNaverLoginSuccess}
            onFailure={handleNaverLoginError}
            render={(props) => (
              <button
                className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700"
                onClick={props.onClick}
              >
                Login with Naver
              </button>
            )}
          />
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
