import React from "react";
import { useEffect, useState } from "react";
import { CircleLoader } from "react-spinners";

const Success = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {loading ? (
        <CircleLoader className="text-lg" color="#0000A5" />
      ) : (
        <div>
          <h2 className="text-3xl font-semibold mb-4">order sucessful</h2>
          <p>your order has been successful !</p>
        </div>
      )}
    </div>
  );
};

export default Success;
