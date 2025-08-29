'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Image1 from '@/images/1.jpg';
import Image2 from '@/images/2.jpg';
import Image3 from '@/images/3.jpg';
import Image4 from '@/images/4.jpg';
import Image5 from '@/images/5.jpg';
import Image6 from '@/images/6.jpg';
import Image7 from '@/images/7.jpg';

const images = [
  { src: Image1, alt: 'Imagem 1' },
  { src: Image2, alt: 'Imagem 2' },
  { src: Image3, alt: 'Imagem 3' },
  { src: Image4, alt: 'Imagem 4' },
  { src: Image5, alt: 'Imagem 5' },
  { src: Image6, alt: 'Imagem 6' },
  { src: Image7, alt: 'Imagem 7' },
];

export default function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);
  const maxIndex = Math.max(0, images.length - itemsPerView);

  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(1); // Mobile: 1 imagem
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2); // Tablet: 2 imagens
      } else {
        setItemsPerView(3); // Desktop: 3 imagens
      }
    };

    updateItemsPerView();
    window.addEventListener('resize', updateItemsPerView);
    return () => window.removeEventListener('resize', updateItemsPerView);
  }, []);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => prevIndex >= maxIndex ? 0 : prevIndex + 1);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => prevIndex >= maxIndex ? 0 : prevIndex + 1);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => prevIndex <= 0 ? maxIndex : prevIndex - 1);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-8 lg:px-12 py-12 lg:py-16">
      <div className="relative">
        <div className="overflow-hidden rounded-lg shadow-2xl">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            {images.map((image, index) => (
              <div key={index} className={`${
                itemsPerView === 1 ? 'w-full' : 
                itemsPerView === 2 ? 'w-1/2' : 'w-1/3'
              } flex-shrink-0 px-2`}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={246}
                  height={758}
                  className="w-full h-auto object-contain rounded-lg"
                  priority={index < 3}
                />
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 transition-all duration-200"
          aria-label="Imagem anterior"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 transition-all duration-200"
          aria-label="Próxima imagem"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        <div className="flex justify-center mt-6 space-x-2">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentIndex 
                  ? 'bg-[#8EF27E] scale-125' 
                  : 'bg-white bg-opacity-50 hover:bg-opacity-75'
              }`}
              aria-label={`Ir para grupo ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}