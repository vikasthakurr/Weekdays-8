import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../redux/cartSlice";

const CheckoutPage = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const totalAmount = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handlePayment = () => {
    alert("Payment Successful");
    navigate("/");
    dispatch(clearCart()); // Clear the cart after payment
  };

  return (
    <div className="p-8 ">
      <ul className="space-y-4 ">
        {cart.map((item) => (
          // Display each item in the cart

          <li key={item.id}>
            {item.title} - ${item.price} x {item.quantity}
          </li>
        ))}
      </ul>
      <p className="text-xl font-bold mt-4">
        Total: $
        {cart.reduce((acc, item) => acc + item.price * item.quantity, 0)}
      </p>
      <button
        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        onClick={() => dispatch(clearCart())}
      >
        ClearCart
      </button>
      <br></br> <br></br>
      <button
        className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
        onClick={() => navigate("/")}
      >
        Go Home
      </button>
      <br></br> <br></br>
      <button
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        onClick={handlePayment}
      >
        Pay ${totalAmount}
      </button>
    </div>
  );
};

export default CheckoutPage;
