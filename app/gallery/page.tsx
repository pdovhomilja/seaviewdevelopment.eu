import React from "react";
import GridGallery from "../../components/grid-gallery";

type Props = {};

const Gallery = (props: Props) => {
  const images = [
    "/images/gallery/7.webp",
    "/images/gallery/27170627.webp",
    "/images/gallery/background5-scaled.webp",
    "/images/gallery/dji_0035.webp",
    "/images/gallery/dji_0036.webp",
    "/images/gallery/dji_0037.webp",
    "/images/gallery/dji_0039.webp",
  ];

  return (
    <div className="flex flex-col items-center justify-center p-5 h-full">
      <div>
        <h1 className="text-2xl text-[rgb(48,65,88)]">Gallery</h1>
      </div>
      <div className="overflow-auto">
        <GridGallery images={images} />
      </div>
    </div>
  );
};

export default Gallery;
