import React from "react";

import { CaruselComponent } from "./_components/carusel";

type Props = {};

const Gallery = (props: Props) => {
  return (
    <div className="flex w-full h-full items-center justify-center">
      {/*       <div>
        <h1 className="text-2xl text-[rgb(48,65,88)]">Gallery</h1>
      </div>
      <div className="overflow-auto">
        <GridGallery images={images} />
      </div> */}
      <CaruselComponent />
    </div>
  );
};

export default Gallery;
