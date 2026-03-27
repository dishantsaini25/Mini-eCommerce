import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Success() {
  const [order, setOrder] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const data = localStorage.getItem("lastOrder");

    if (!data) {
      navigate("/");
    } else {
      setOrder(JSON.parse(data));
    }

    const timer = setTimeout(() => {
      navigate("/");
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl text-green-600 font-bold">
        🎉 Order Placed Successfully!
      </h1>

      {order && <p className="mt-4">Total Paid: ₹{order.total}</p>}

      <p className="text-gray-500 mt-2">Redirecting to home...</p>
    </div>
  );
}
