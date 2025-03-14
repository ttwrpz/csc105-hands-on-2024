import React from "react";
import Image from "../components/Image.jsx";

function Gallery() {
  return (
    <section className="flex flex-col gap-4" id="gallery">
      <h1 className="text-center text-3xl font-semibold">Gallery</h1>
      <div className="grid grid-cols-1 justify-between gap-4 sm:grid-cols-2 md:grid-cols-3">
        <Image
          src="/images/gallery/pexels-eberhardgross-1624438.jpg"
          alt="Eberhard Grossgasteiger"
        />
        {/* Photo by Eberhard Grossgasteiger: https://www.pexels.com/photo/scenic-view-of-rocky-mountain-during-evening-1624438/ */}
        <Image
          src="/images/gallery/pexels-philippedonn-1257860.jpg"
          alt="Philippe Donn"
        />
        {/* Photo by Philippe Donn: https://www.pexels.com/photo/stars-1257860/ */}
        <Image
          src="/images/gallery/pexels-arnie-chou-304906-927414.jpg"
          alt="Arnie Chou"
        />
        {/* Photo by Arnie Chou: https://www.pexels.com/photo/scenic-view-of-rainforest-927414/ */}
        <Image
          src="/images/gallery/pexels-valeriiamiller-2527559.jpg"
          alt="Valeriia Miller"
        />
        {/* Photo by Valeriia Miller: https://www.pexels.com/photo/photo-of-unpaved-pathway-surrounded-by-pine-trees-2527559/ */}
        <Image src="/images/gallery/pexels-pixabay-33537.jpg" alt="Pixabay" />
        {/* Photo by Pixabay: https://www.pexels.com/photo/gray-cat-33537/ */}
        <Image
          src="/images/gallery/pexels-d-ng-nhan-324384-2817430.jpg"
          alt="Dương Nhân"
        />
        {/* Photo by Dương Nhân: https://www.pexels.com/photo/photo-of-sleeping-tabby-cat-2817430/ */}
      </div>
    </section>
  );
}

export default Gallery;
