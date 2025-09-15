"use client"

import { useEffect, useState } from 'react';
// import mosqueImage from '@/assets/mosque-sunset.jpg';
import mosque1 from "../public/mosque-1.png";
import mosque2 from "../public/mosque-2.png";
import mosque3 from "../public/mosque-3.png";
import {Carousel, CarouselContent, CarouselItem,} from "./ui/carousel";
import Image from 'next/image';

const ImageCarousel = () => {
  const images = [
    mosque1,
    mosque2,
    mosque3,
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="w-full h-[35vh] mx-1 my-1 overflow-hidden rounded-2xl shadow-elegant">
      <Carousel className="w-full h-full">
        <CarouselContent className="h-full">
          {images.map((image, index) => (
            <CarouselItem key={index} className="h-full">
              <Image
                src={image}
                alt={`Islamic image ${index + 1}`}
                className="w-full h-full object-contain"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default ImageCarousel;