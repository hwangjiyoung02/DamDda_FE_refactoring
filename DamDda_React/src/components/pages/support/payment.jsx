import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // useNavigate 훅을 import
import { loadTossPayments } from "@tosspayments/payment-sdk";
import axios from 'axios';
import './payment.css';

export function Payment() {
  const [orderInfo, setOrderInfo] = useState({
    name: '',
    phoneNumber: '',
    email: '',
  });

  const [shippingInfo, setShippingInfo] = useState({
    postalCode: '',
    address: '',
    extraAddress: '',
    detailAddress: '',
    request: '',
  });

  const [paymentMethod, setPaymentMethod] = useState(''); // 결제 수단 상태
  const [showCustomMessageInput, setShowCustomMessageInput] = useState(false); // 배송 메시지 입력 필드 상태
  const [customMessage, setCustomMessage] = useState(""); // 사용자 입력 배송 메시지

  // Dynamically load Daum Postcode script when the component mounts
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleOrderChange = (e) => {
    setOrderInfo({
      ...orderInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleShippingChange = (e) => {
    setShippingInfo({
      ...shippingInfo,
      [e.target.name]: e.target.value,
    });
  };

  // 결제 수단 변경 처리
  const handlePaymentChange = (e) => {
    setPaymentMethod(e.target.value); // 선택한 결제 수단 반영
  };

  const handleDeliveryMessageChange = (e) => {
    const selectedValue = e.target.value;
    if (selectedValue === "직접 입력") {
      setShowCustomMessageInput(true); // 직접 입력 필드 보이기
    } else {
      setShowCustomMessageInput(false); // 직접 입력 필드 숨기기
    }
  };

  const handleCustomMessageChange = (e) => {
    setCustomMessage(e.target.value); // 사용자 정의 메시지 반영
  };

  const navigate = useNavigate(); // useNavigate 훅을 사용하여 navigate 함수 생성

  const handleSubmit = async () => {
    if (paymentMethod === 'tossPay') {
      // Toss 결제창 호출
      const tossPayments = await loadTossPayments('test_ck_D5GePWvyJnrK0W0k6q8gLzN97Eoq'); // 클라이언트 키 설정
      tossPayments.requestPayment('카드', { // 결제 수단 선택
        amount: 33000, // 결제 금액
        orderId: '7_XR8395y-HtJQb7Wb55L', // 주문 ID
        orderName: '펀딩 결제', // 주문명
        customerName: orderInfo.name || '테스트 사용자', // 구매자 이름
        successUrl: "http://localhost:9000/toss/success", // Spring Boot 서버로 요청 (TossSuccess로 처리)
        failUrl: "http://localhost:9000/toss/fail", // 결제 실패 시 Spring Boot 서버에서 처리
      }).then(() => {
        // 결제 성공 시 리다이렉트
        navigate('/TossSuccess'); // React Router로 페이지 이동
      }).catch(function (error) {
        if (error.code === 'USER_CANCEL') {
          console.log('결제창이 닫혔습니다.');
        } else if (error.code === 'INVALID_CARD_COMPANY') {
          console.log('유효하지 않은 카드 코드입니다.');
        } else {
          console.error('결제 실패:', error);
        }
      });
    } else if (paymentMethod === 'kakaoPay') {
      // 카카오페이 결제창 호출
      axios
        .post("http://localhost:9000/payment/kakao/ready")
        .then((res) => {
          const { next_redirect_pc_url } = res.data; // 카카오페이 결제 URL
          window.location.href = next_redirect_pc_url; // 카카오페이 결제 페이지로 리디렉션
        })
        .catch((error) => {
          console.error("Error initiating payment:", error);
        });
    } 
  };

  const sample6_execDaumPostcode = () => {
    new window.daum.Postcode({
      oncomplete: function (data) {
        let addr = ''; // Address
        let extraAddr = ''; // Extra information

        if (data.userSelectedType === 'R') {
          addr = data.roadAddress;
        } else {
          addr = data.jibunAddress;
        }

        if (data.userSelectedType === 'R') {
          if (data.bname !== '' && /[동|로|가]$/g.test(data.bname)) {
            extraAddr += data.bname;
          }
          if (data.buildingName !== '' && data.apartment === 'Y') {
            extraAddr += (extraAddr !== '' ? ', ' + data.buildingName : data.buildingName);
          }
          if (extraAddr !== '') {
            extraAddr = ' (' + extraAddr + ')';
          }
        }

        setShippingInfo({
          ...shippingInfo,
          postalCode: data.zonecode,
          address: addr,
          extraAddress: extraAddr,
        });
      },
    }).open();
  };

  return (
    <div className="container">
      <div className="order-summary">
        <h2>프로젝트 이름</h2>
        <p>가격 (원): 30000 | 수량: 1</p>
      </div>

      <div className="form-section">
        <h3>주문자 정보 수정</h3>
        <input
          type="text"
          name="name"
          placeholder="마이페이지에 등록된 이름"
          value={orderInfo.name}
          onChange={handleOrderChange}
        />
        <input
          type="text"
          name="phoneNumber"
          placeholder="마이페이지에 등록된 전화번호"
          value={orderInfo.phoneNumber}
          onChange={handleOrderChange}
        />
        <input
          type="email"
          name="email"
          placeholder="마이페이지에 등록된 이메일"
          value={orderInfo.email}
          onChange={handleOrderChange}
        />
      </div>

      <div className="form-section">
        <h3>배송지 정보</h3>
        <input
          type="text"
          id="sample6_postcode"
          name="postalCode"
          placeholder="우편번호"
          value={shippingInfo.postalCode}
          readOnly
        />
        <button type="button" onClick={sample6_execDaumPostcode}>
          우편번호 찾기
        </button>
        <input
          type="text"
          id="sample6_address"
          name="address"
          placeholder="주소"
          value={shippingInfo.address}
          readOnly
        />
        <input
          type="text"
          id="sample6_detailAddress"
          name="detailAddress"
          placeholder="상세 주소"
          value={shippingInfo.detailAddress}
          onChange={handleShippingChange}
        />
        <input
          type="text"
          id="sample6_extraAddress"
          name="extraAddress"
          placeholder="참고항목"
          value={shippingInfo.extraAddress}
          readOnly
        />
        <div>
          <h4>Delivery Message</h4>
          <select value={shippingInfo.deliveryMessage} onChange={handleDeliveryMessageChange}>
            <option value="문앞에 놓아주세요">문앞에 놓아주세요</option>
            <option value="경비실에 맡겨주세요">경비실에 맡겨주세요</option>
            <option value="직접 받을 거예요">직접 받을 거예요</option>
            <option value="직접 입력">직접 입력</option>
          </select>
        </div>
        {showCustomMessageInput && (
          <div>
            <textarea
              value={customMessage}
              onChange={handleCustomMessageChange}
              maxLength={100}
              placeholder="직접 입력 (최대 100자)"
            />
          </div>
        )}
      </div>

      <div className="form-section">
        <h3>결제 수단</h3>
        <div>
          <input
            type="radio"
            value="naverPay"
            checked={paymentMethod === 'naverPay'}
            onChange={handlePaymentChange}
          />
          <label>네이버 페이</label>
        </div>
        <div>
          <input
            type="radio"
            value="kakaoPay"
            checked={paymentMethod === 'kakaoPay'}
            onChange={handlePaymentChange}
          />
          <label>카카오페이</label>
        </div>
        <div>
          <input
            type="radio"
            value="tossPay"
            checked={paymentMethod === 'tossPay'}
            onChange={handlePaymentChange}
          />
          <label>토스 페이</label>
        </div>
      </div>

      <div className="payment-summary">
        <h3>최종 펀딩 금액</h3>
        <p>상품 금액: 30000 원</p>
        <p>배송비: 3000 원</p>
        <p>최종 금액: 33000 원</p>

        <div className="agreement-section">
          <input type="checkbox" />
          <label>전체 동의</label>
          <input type="checkbox" />
          <label>구매조건, 결제 진행 및 결제 서비스 동의</label>
          <input type="checkbox" />
          <label>개인정보 제 3자 제공 동의</label>
        </div>

        <button onClick={handleSubmit}>간편 결제 하기</button>
      </div>
    </div>
  );
}
