import { useEffect, useRef, useState } from "react";
import { loadTossPayments, ANONYMOUS } from "@tosspayments/tosspayments-sdk";


export default function TossCheckout() {
  const [ready, setReady] = useState(false);
  const [widgets, setWidgets] = useState(null);
  const [amount, setAmount] = useState({
    currency: "KRW",
    value: 50_000,
  });


  useEffect(() => {
    async function fetchPaymentWidgets() {
      const tossPayments = await loadTossPayments("test_gck_docs_Ovk5rk1EwkEbP0W43n07xlzm");
      const widgets = tossPayments.widgets({ customerKey: ANONYMOUS });
      setWidgets(widgets);
    }

    fetchPaymentWidgets();
  }, []);

  const handlePayment = async () => {
    try {
      const paymentKey = "generatedPaymentKey"; // 실제로는 Toss 결제 위젯에서 가져온 키
      const orderId = "generatedOrderId"; // 실제로 생성한 주문 ID
      const amount = 50000; // 결제 금액

      // Spring Boot 서버로 결제 승인 요청
      const response = await fetch("/toss/ready", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ paymentKey, orderId, amount }),
      });

      if (response.ok) {
        // 결제 성공 처리
        console.log("결제 성공");
      } else {
        // 결제 실패 처리
        console.log("결제 실패");
      }
    } catch (error) {
      console.error("결제 중 오류 발생:", error);
    }
  };


  return (
    <div className="wrapper w-100">
      <div className="max-w-540 w-100">
        <div id="payment-method" className="w-100" />
        <div id="agreement" className="w-100" />
        <div className="btn-wrapper w-100">
          <button
            className="btn primary w-100"
            onClick={async () => {
              try {
                /**
                 * 결제 요청
                 * 결제를 요청하기 전에 orderId, amount를 서버에 저장하세요.
                 * 결제 과정에서 악의적으로 결제 금액이 바뀌는 것을 확인하는 용도입니다.
                 * @docs https://docs.tosspayments.com/sdk/v2/js#widgetsrequestpayment
                 */
                await widgets?.requestPayment({
                  orderId: 1234,
                  orderName: "토스 티셔츠 외 2건",
                  customerName: "김토스",
                  customerEmail: "customer123@gmail.com",
                  successUrl: window.location.origin + "/tossSuccess", // 결제 성공 시 이동할 URL
                  failUrl: window.location.origin + "/tossFail",  // 결제 실패 시 이동할 URL                  failUrl: window.location.origin + "/sandbox/fail" + window.location.search
                });
              } catch (error) {
                // TODO: 에러 처리
              }
            }}
          >
            결제하기
          </button>
        </div>
      </div>
    </div>
  );
}