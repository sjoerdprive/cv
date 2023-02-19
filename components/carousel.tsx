'use client';
import { useState, useEffect } from 'react';
import classNames from 'classnames';

interface ICarouselProps {
  slides: React.ReactNode[];
  hideControls?: boolean;
  interval?: number;
  className?: string;
}

export default function Carousel({
  slides,
  hideControls,
  interval,
  className,
}: ICarouselProps) {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

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
  }, [interval]);

  const prevSlide = () => {
    setCurrentSlideIndex((prev) => (prev - 1 > 0 ? prev - 1 : lastSlideIndex));
  };
  const nextSlide = () => {
    setCurrentSlideIndex((prev) => (prev + 1 < lastSlideIndex ? prev + 1 : 0));
  };

  return (
    <div
      className={classNames(
        'carousel',
        hideControls ? 'hide-controls' : '',
        className
      )}
    >
      <button onClick={prevSlide} className="control prev">
        <div className="content">
          <i className="bi bi-chevron-left"></i>
          <span className="sr-only">Vorige slide</span>
        </div>
      </button>
      <div
        style={{
          left: `-${currentSlideIndex * 100}%`,
        }}
        className="wrapper"
      >
        {slides.map((slide, i) => (
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
      <button onClick={nextSlide} className="control next">
        <div className="content">
          <i className="bi bi-chevron-right"></i>
          <span className="sr-only">Volgende slide</span>
        </div>
      </button>
    </div>
  );
}
