import React, { useRef, useEffect } from "react";
import "./CurvedLoop.css";

const CurvedLoop = ({
  children,
  speed = 30, // kecepatan scroll
  gap = "2rem",
  className = "",
}) => {
  const containerRef = useRef(null);

  useEffect(() => {
    let start;
    let animationFrameId;

    const step = (timestamp) => {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;

      if (containerRef.current) {
        // Scroll otomatis
        const fullWidth = containerRef.current.scrollWidth / 2;
        containerRef.current.scrollLeft =
        (elapsed * (speed / 100)) % fullWidth;
      }

      animationFrameId = requestAnimationFrame(step);
    };

    animationFrameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrameId);
  }, [speed]);

  return (
    <div
      ref={containerRef}
      className={`curvedloop-container ${className}`}
      style={{
        display: "flex",
        overflow: "hidden",
        whiteSpace: "nowrap",
        gap: gap,
      }}
    >
      <div style={{ display: "flex", gap: gap }}>
        {children}
        {children}
      </div>
    </div>
  );
};

export default CurvedLoop;
