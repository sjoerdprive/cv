'use client';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import classNames from 'classnames';
import { useRef } from 'react';

interface IProgressBarProps {
  value: number;
  hideValue?: boolean;
  max?: number;
}

export default function ProgressBar({
  value,
  hideValue,
  max = 100,
}: IProgressBarProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  const entry = useIntersectionObserver(ref, {});

  const isVisible = !!entry?.isIntersecting;

  return (
    <div
      ref={ref}
      className={classNames('progress-bar', hideValue && 'hide-value')}
    >
      <div className="bar">
        <div
          style={isVisible ? { width: `${(value / max) * 100}%` } : {}}
          className={classNames('fill')}
        >
          <span className="value">
            {value}/{max}
          </span>
        </div>
      </div>
    </div>
  );
}
