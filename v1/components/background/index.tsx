import React, { useEffect, useRef } from "react";

const Background = () => {
  const ref = useRef<HTMLDivElement>(null);

  // Soft spotlight that follows the cursor (mouse/trackpad only).
  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;

    let frame = 0;
    const onPointerMove = (event: PointerEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        ref.current?.style.setProperty("--mouse-x", `${event.clientX}px`);
        ref.current?.style.setProperty("--mouse-y", `${event.clientY}px`);
      });
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onPointerMove);
    };
  }, []);

  return (
    <div className="background" ref={ref} aria-hidden="true">
      <div className="background-blob background-blob-1" />
      <div className="background-blob background-blob-2" />
      <div className="background-blob background-blob-3" />
      <div className="background-grid" />
      <div className="background-spotlight" />
    </div>
  );
};

export default Background;
