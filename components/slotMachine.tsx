'use client';
import { useState, useEffect } from 'react';
import classNames from 'classnames';

interface ISlotMachineProps {
  slides: React.ReactNode[];
  interval?: number;
  className?: string;
}

export default function SlotMachine({
  slides,
  interval,
  className,
}: ISlotMachineProps) {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(1);
  const [loopedSlides, setLoopedSlides] = useState([...slides, ...slides]);

  const lastSlideIndex = slides.length - 1;

  let timer: NodeJS.Timer | undefined;

  useEffect(() => {
    if (interval) {
      timer = setInterval(() => {
        nextSlide();
      }, interval);
    }
    return () => {
      clearInterval(timer);
    };
  }, [interval, currentSlideIndex]);

  const nextSlide = () => {
    setCurrentSlideIndex((prev) => (prev === slides.length ? 1 : prev + 1));
  };

  return (
    <div className={classNames('slot-machine', className)}>
      <div
        style={{ top: `-${(currentSlideIndex - 1) * 30}px` }}
        className="wrapper"
      >
        {loopedSlides.map((slide, i) => (
          <div
            className={classNames(
              'slide',
              i === currentSlideIndex ? 'current' : ''
            )}
            key={i}
          >
            {slide}
          </div>
        ))}
      </div>
    </div>
  );
}
