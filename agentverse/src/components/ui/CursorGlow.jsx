import React, { useEffect, useRef } from 'react';

export const CursorGlow = () => {
  const cursorRef = useRef(null);
  const isTouchDevice = typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0);

  useEffect(() => {
    if (isTouchDevice) return;

    const moveCursor = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${e.clientX - 150}px, ${e.clientY - 150}px, 0)`;
      }
    };

    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []); // Critical: empty deps

  if (isTouchDevice) return null;

  return (
    <div
      ref={cursorRef}
      className="pointer-events-none fixed top-0 left-0 z-[9999] h-[300px] w-[300px] rounded-full mix-blend-screen transition-opacity duration-300"
      style={{
        background: 'radial-gradient(circle, rgba(0,200,255,0.15) 0%, rgba(0,0,0,0) 70%)',
        willChange: 'transform'
      }}
    />
  );
};