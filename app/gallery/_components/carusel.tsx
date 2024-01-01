"use client";

import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

export const CaruselComponent = () => {
  const images = [
    {
      src: "/images/gallery/7.webp",
    },
    {
      src: "/images/gallery/27170627.webp",
    },
    {
      src: "/images/gallery/background5-scaled.webp",
    },
    {
      src: "/images/gallery/dji_0035.webp",
    },
    {
      src: "/images/gallery/dji_0036.webp",
    },
    {
      src: "/images/gallery/dji_0037.webp",
    },
    {
      src: "/images/gallery/dji_0039.webp",
    },
  ];
  return (
    <Carousel className="w-full max-w-lg md:max-w-2xl 2xl:max-w-[80vh]">
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square relative items-center justify-center ">
                  <Image alt="Image" src={image.src} fill />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};
