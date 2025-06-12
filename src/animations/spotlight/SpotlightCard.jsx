import React, { useRef, useState, useEffect } from 'react';
import './SpotlightCard.css';

export const SpotlightCard = ({ children, className = '' }) => {
  const ref = useRef();
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const move = (e) => {
      const rect = ref.current.getBoundingClientRect();
      setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };
    const node = ref.current;
    node.addEventListener('mousemove', move);
    return () => node.removeEventListener('mousemove', move);
  }, []);

  return (
    <div
      ref={ref}
      className={`spotlight-card ${hovered ? 'hover' : ''} ${className}`}
      style={{ '--mouse-x': pos.x + 'px', '--mouse-y': pos.y + 'px' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
    </div>
  );
};
