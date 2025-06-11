import React, { useRef, useEffect } from "react";

function Line() {
  const path = useRef(null);

  let progress = 0;
  let x = 0.5; // Center of the screen
  let reqId = null;
  let time = Math.PI / 2;

  useEffect(() => {
    setPath(progress);

    const handleResize = () => {
      setPath(progress);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(reqId);
    };
  });

  const setPath = (value) => {
    if (!path.current) return;

    const width = window.innerWidth - window.innerWidth * 0.1;
    const height = 100;
    const controlX = width * x; // Keep the control point in the center

    path.current.setAttributeNS(
      null,
      "d",
      `M 0 ${height / 2} Q ${controlX} ${height / 2 + value} ${width} ${height / 2}`
    );
  };

  const animateIn = () => {
    if (reqId) {
      cancelAnimationFrame(reqId);
      time = Math.PI / 2;
    }

    reqId = requestAnimationFrame(animateIn);
  };

  const manageMouseMove = (e) => {
    const { movementY } = e;

    progress += movementY / 2;
    setPath(progress);
  };

  const resetAnimation = () => {
    cancelAnimationFrame(reqId);
    animateOut();
  };

  const lerp = (x, y, a) => x * (1 - a) + y * a;

  const animateOut = () => {
    let newProgress = progress * Math.sin(time);
    setPath(newProgress);

    progress = lerp(progress, 0, 0.05);
    time += 0.5;

    if (Math.abs(progress) > 0.1) {
      reqId = requestAnimationFrame(animateOut);
    } else {
      time = Math.PI / 2;
      progress = 0;
    }
  };

  return (
    <div className="mobile:hidden tablet:hidden">
      <div className="string-line lineDraw">
        <span
          onMouseEnter={animateIn}
          onMouseLeave={resetAnimation}
          onMouseMove={manageMouseMove}
          className="box"
        ></span>
        <svg width="100%" height="100">
          <path ref={path} stroke="#111111" strokeWidth="2" fill="none"></path>
        </svg>
      </div>
    </div>
  );
}

export default Line;
