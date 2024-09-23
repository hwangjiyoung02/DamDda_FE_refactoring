import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CheckoutPage } from './TossCheckout.jsx';
import { SuccessPage } from './TossSuccess.jsx';
import { FailPage } from './TossFail.jsx';
import './Toss.css';

const router = createBrowserRouter([
  {
    path: "/payment/toss",
    element: <CheckoutPage />,
  },
  {
    path: "/payment/toss/success",
    element: <SuccessPage />,
  },
  {
    path: "/payment/toss/fail",
    element: <FailPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);