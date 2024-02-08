import React, { useEffect, useState } from "react";

const Spinner = () => {
  const [dotCount, setDotCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDotCount((dotCount) => (dotCount + 1) % 3);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
      }}
    >
      <div style={{ marginRight: "5px", fontSize: "24px" }}>Loading</div>
      <div>
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            style={{ marginRight: "5px", opacity: dotCount === i ? 1 : 0.3 }}
          >
            ⬤
          </span>
        ))}
      </div>
    </div>
  );
};

export default Spinner;
