import React from "react";
import Image from "../components/Image.jsx";

function Gallery() {
  return (
    <section className="flex flex-col gap-4" id="gallery">
      <h1 className="text-center text-3xl font-semibold">Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 justify-between gap-4 md:grid-cols-3">
          <Image src="/images/image-01.jpg" />
          <Image src="/images/image-01.jpg" />
          <Image src="/images/image-01.jpg" />
          <Image src="/images/image-01.jpg" />
          <Image src="/images/image-01.jpg" />
          <Image src="/images/image-01.jpg" />
      </div>
    </section>
  );
}

export default Gallery;
