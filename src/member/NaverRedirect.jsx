// NaverRedirect.jsx
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const NaverRedirect = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // URL에서 네이버 로그인 후 반환된 code 파라미터 추출
    const code = new URL(window.location.href).searchParams.get('code');

    if (code) {
      // 백엔드로 code를 전달하여 네이버 로그인 후 토큰을 가져오기
      axios.post(`${process.env.REACT_APP_API_BASE_URL}/api/member/naver/redirect`, { code })
        .then((response) => {
          // 로그인 성공 시, 사용자 정보 처리 및 리디렉션
          console.log('로그인 성공:', response.data);
          navigate('/');  // 예: 대시보드 페이지로 리디렉션
        })
        .catch((error) => {
          console.error('네이버 로그인 에러:', error);
        });
    }
  }, [navigate]);

  return (
    <div>로그인 중...</div>
  );
};

export default NaverRedirect;
