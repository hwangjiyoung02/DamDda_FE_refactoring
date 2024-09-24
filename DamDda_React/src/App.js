

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/pages/mainpage/Main';  // 루트 경로에 해당하는 컴포넌트
import CreateOrder from './components/pages/support/Order';
import { Payment } from './components/pages/support/Payment';
import OrderPage from './components/pages/support/OrderPage';
import MySupport from './components/pages/support/Mysupport';
// import MySupport from './components/pages/support/Mysupport'; // Adjust path as needed
// import Contact from './components/Contact'; // /contact 경로에 해당하는 컴포넌트
import TossSuccess from "./components/pages/support/TossSuccess";
import TossFail from "./components/pages/support/TossFail";
import TossCheckout from "./components/pages/support/TossCheckout";
import PaymentSuccess from "./components/pages/support/PaymentSuccess";
import MyOrders from './components/pages/support/MyOrders';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />      {/* 루트 경로 */}
        {/* <Route path="/order/myOrders/:deliveryId" element={<MySupport />} /> */}
        <Route path="/order/create" element={<CreateOrder />} />
        {/* <Route path="/order/myOrders/:deliveryId" element={<MySupport />} /> */}
        <Route path="/order" element={<OrderPage />} />
        <Route path="/user/myorders/:userId" element={<MyOrders />} />

        <Route path="/payment" element={<Payment />} />
        <Route path="/payment/success" element={<PaymentSuccess />} />

        <Route path="/tossCheckout" element={<TossCheckout />} />

        <Route path="/tossSuccess" element={<TossSuccess />} />
        <Route path="/tossFail" element={<TossFail />} />

        </Routes>
    </Router>
  );
}

export default App;
