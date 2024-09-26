

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/pages/mainpage/Main';  // 루트 경로에 해당하는 컴포넌트
import { Payment } from './components/pages/support/Payment';
import OrderPage from './components/pages/support/OrderPage';
import MySupport from './components/pages/support/Mysupport';
// import MySupport from './components/pages/support/Mysupport'; // Adjust path as needed
// import Contact from './components/Contact'; // /contact 경로에 해당하는 컴포넌트
import YourPage from './components/layout/YourPage';

import PaymentSuccess from "./components/pages/support/PaymentSuccess";
import MyOrders from './components/pages/support/MyOrders';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />  
        <Route path="/order" element={<OrderPage />} />
        <Route path="/user/myorders/:userId" element={<MyOrders />} />
        <Route path="/yourpage" element={<YourPage />} />

        <Route path="/payment" element={<Payment />} />
        <Route path="/payment/success" element={<PaymentSuccess />} />



        </Routes>
    </Router>
  );
}

export default App;
