import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';

const Slider = ({ slides, autoPlay = false, indicators = true, ...props }) => {
  const [current, setCurrent] = useState(0);
  const [length] = useState(slides.length);

  const handleSlide = useCallback(
    (dir) => {
      dir === 'right'
        ? setCurrent((prev) => (prev === length - 1 ? 0 : prev + 1))
        : setCurrent((prev) => (prev === 0 ? length - 1 : prev - 1));
    },
    [length]
  );

  useEffect(() => {
    let interval;
    if (autoPlay) {
      console.log('autoplay');
      interval = setInterval(() => handleSlide('right'), 4000);
    }
    return () => clearInterval(interval);
  }, [autoPlay, handleSlide]);

  if (!Array.isArray(slides) || slides.length <= 0) return null;

  return (
    <div
      style={{
        position: 'relative',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: ' center',
        border: '1px solid red',
      }}
    >
      <FaArrowCircleLeft
        style={{
          position: 'absolute',
          left: '1rem',
          fontSize: '2rem',
          cursor: 'pointer',
          userSelect: 'none',
          zIndex: '10',
        }}
        onClick={() => handleSlide('left')}
      />
      <FaArrowCircleRight
        style={{
          position: 'absolute',
          right: '1rem',
          fontSize: '2rem',
          cursor: 'pointer',
          userSelect: 'none',
          zIndex: '10',
        }}
        onClick={() => handleSlide('right')}
      />
      {slides.map((slide, index) => {
        const isCurrent = index === current;
        return (
          <div
            key={`slide-${index}`}
            className={isCurrent ? 'slide slide-active' : 'slide'}
          >
            {isCurrent && <img src={slide.src} alt={slide.alt} />}
          </div>
        );
      })}
    </div>
  );
};

export default Slider;
