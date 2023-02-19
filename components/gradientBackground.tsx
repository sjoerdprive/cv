'use client';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';

interface IGradientBackgroundProps {
  children?: React.ReactNode;
}

export default function GradientBackground({
  children,
}: IGradientBackgroundProps) {
  const root = useRef();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    document.addEventListener('mousemove', (e) => {
      const { clientX, clientY } = e;
      setMousePos({ x: clientX, y: clientY });
    });
  }, []);

  return (
    <div className="gradient-background">
      <div
        className="bg"
        style={{
          backgroundPosition: `${mousePos.x / 50}% ${mousePos.y / 50}%`,
        }}
      >{children}</div>
    </div>
  );
}
