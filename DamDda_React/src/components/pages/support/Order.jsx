// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const CreateOrder = () => {
//   const [order, setOrder] = useState(null); // 처음엔 null로 설정

//   useEffect(() => {
//     axios
//     .get("http://localhost:9000/order/api/data")
//     .then((res) => {
//       setOrder(res.data); // 서버에서 받은 데이터 설정
//     })
//     .catch((error) => {
//       console.error("Error fetching data:", error);
//     });
  
//   }, []);

//   if (!order) return <div>Loading...</div>; // 데이터가 로딩 중일 때

//   return (
//     <div>
//       <h2>Order Details</h2>
//       <p>Delivery ID: {order.deliveryId}</p>
//       <p>Delivery Name: {order.deliveryName}</p>
//       <p>Delivery Phone: {order.deliveryPhoneNumber}</p>
//       <p>Delivery Email: {order.deliveryEmail}</p>
//       <p>Delivery Address: {order.deliveryAddress}</p>
//       <p>Package Name: {order.packageName}</p>
//       <p>Package Price: {order.packagePrice}</p>
//       <p>Payment Method: {order.paymentMethod}</p>
//       <p>Payment Status: {order.paymentStatus}</p>
//       {/* 나머지 필드들도 추가적으로 표시 */}
//     </div>
//   );
// };

// export default CreateOrder;

import React, { useState, useEffect } from "react";
import axios from "axios";

const CreateOrder = () => {
  // 기본 상태값 설정
  const [order, setOrder] = useState({
    deliveryName: "",
    deliveryPhoneNumber: "",
    deliveryEmail: "",
    deliveryAddress: "",
    deliveryDetailedAddress: "",
    deliveryPostCode: "",
    deliveryMessage: "",
    packageName: "",
    packagePrice: "",
    paymentMethod: "Kakao Pay", // 기본값 설정
    paymentStatus: 0, // 0: 결제중, 1: 결제완료, -1: 결제취소
    title: "",
    rewardName: "",
  });

  const [customMessage, setCustomMessage] = useState(""); // 직접 입력할 메시지 저장
  const [showCustomMessageInput, setShowCustomMessageInput] = useState(false); // 직접 입력 필드 토글

  // 회원 정보, 이전 페이지 정보 가져오기 (세션 또는 토큰 기반으로 가정)
  useEffect(() => {
    // 세션 또는 토큰 기반으로 사용자 정보 및 이전 페이지 정보 가져오기
    const fetchSessionData = async () => {
      try {
        const response = await axios.get("/session/user-info"); // 서버에서 회원 정보를 가져옴
        const sessionData = response.data;

        // 서버에서 가져온 회원 정보를 상태에 설정
        setOrder({
          ...order,
          deliveryName: sessionData.deliveryName,
          deliveryPhoneNumber: sessionData.deliveryPhoneNumber,
          deliveryEmail: sessionData.deliveryEmail,
          deliveryAddress: sessionData.deliveryAddress,
          deliveryDetailedAddress: sessionData.deliveryDetailedAddress,
          deliveryPostCode: sessionData.deliveryPostCode,
          title: sessionData.title, // 이전 페이지의 프로젝트 타이틀 정보
          rewardName: sessionData.rewardName,
          packageName: sessionData.packageName,
          packagePrice: sessionData.packagePrice,
        });
      } catch (error) {
        console.error("Error fetching session data:", error);
      }
    };

    fetchSessionData();
  }, []);

  // 결제 방법 변경 처리
  const handlePaymentMethodChange = (e) => {
    setOrder({ ...order, paymentMethod: e.target.value });
  };

  // 배송 메시지 토글 선택 처리
  const handleDeliveryMessageChange = (e) => {
    const selectedValue = e.target.value;

    if (selectedValue === "직접 입력") {
      setShowCustomMessageInput(true); // 직접 입력 필드 보이기
      setOrder({ ...order, deliveryMessage: customMessage });
    } else {
      setShowCustomMessageInput(false); // 직접 입력 필드 숨기기
      setOrder({ ...order, deliveryMessage: selectedValue });
    }
  };

  // 추가 입력 메시지 변경 처리
  const handleCustomMessageChange = (e) => {
    const message = e.target.value;
    setCustomMessage(message);
    setOrder({ ...order, deliveryMessage: message });
  };

  // 결제 상태 설정 (여기서는 예시로 설정, 실제로는 결제 완료 후 서버에서 설정할 것)
  const handlePaymentStatusChange = (status) => {
    setOrder({ ...order, paymentStatus: status });
  };

  // 서버로 데이터를 POST 요청
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:9000/order/create", order)
      .then((res) => {
        console.log("Order saved successfully", res.data);
      })
      .catch((error) => {
        console.error("Error saving order:", error);
      });
  };

  //버튼 누르면 카카오 페이로
  const handlePayment = () => {
  axios
    .post("http://localhost:9000/payment/ready")
    .then((res) => {
      const { next_redirect_pc_url } = res.data; // 카카오 페이 결제 URL
      window.location.href = next_redirect_pc_url; // URL로 리디렉션
    })
    .catch((error) => {
      console.error("Error initiating payment:", error);
    });
  };


  return (
    <div>
      <h2>Create Order</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="deliveryName"
          value={order.deliveryName}
          onChange={(e) => setOrder({ ...order, deliveryName: e.target.value })}
          placeholder="Delivery Name"
        />
        <input
          type="text"
          name="deliveryPhoneNumber"
          value={order.deliveryPhoneNumber}
          onChange={(e) => setOrder({ ...order, deliveryPhoneNumber: e.target.value })}
          placeholder="Phone Number"
        />
        <input
          type="email"
          name="deliveryEmail"
          value={order.deliveryEmail}
          onChange={(e) => setOrder({ ...order, deliveryEmail: e.target.value })}
          placeholder="Email"
        />
        <input
          type="text"
          name="deliveryAddress"
          value={order.deliveryAddress}
          onChange={(e) => setOrder({ ...order, deliveryAddress: e.target.value })}
          placeholder="Address"
        />
        <input
          type="text"
          name="deliveryDetailedAddress"
          value={order.deliveryDetailedAddress}
          onChange={(e) => setOrder({ ...order, deliveryDetailedAddress: e.target.value })}
          placeholder="Detailed Address"
        />
        <input
          type="text"
          name="deliveryPostCode"
          value={order.deliveryPostCode}
          onChange={(e) => setOrder({ ...order, deliveryPostCode: e.target.value })}
          placeholder="Postcode"
        />

        {/* 결제 방법 */}
        <div>
          <h4>Payment Method</h4>
          <label>
            <input
              type="radio"
              value="Kakao Pay"
              checked={order.paymentMethod === "Kakao Pay"}
              onChange={handlePaymentMethodChange}
            />
            Kakao Pay
          </label>
          <label>
            <input
              type="radio"
              value="Naver Pay"
              checked={order.paymentMethod === "Naver Pay"}
              onChange={handlePaymentMethodChange}
            />
            Naver Pay
          </label>
          <label>
            <input
              type="radio"
              value="Toss"
              checked={order.paymentMethod === "Toss"}
              onChange={handlePaymentMethodChange}
            />
            Toss
          </label>
        </div>

        {/* 배송 메시지 선택 */}
        <div>
          <h4>Delivery Message</h4>
          <select value={order.deliveryMessage} onChange={handleDeliveryMessageChange}>
            <option value="문앞에 놓아주세요">문앞에 놓아주세요</option>
            <option value="경비실에 맡겨주세요">경비실에 맡겨주세요</option>
            <option value="직접 받을 거예요">직접 받을 거예요</option>
            <option value="직접 입력">직접 입력</option>
          </select>
        </div>

        {/* 직접 입력 선택 시 추가 입력 필드 */}
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

    <button onClick={handlePayment}>결제하기</button>
</form>
    </div>
  );
};

export default CreateOrder;
