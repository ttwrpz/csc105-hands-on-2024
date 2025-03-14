import React from "react";

/**
 * @param {{src: string, alt?: string}} props
 * @return React.ReactElement
 **/
function Image({ src, alt = "An Image" }) {
  return (
    <div className="flex flex-1 items-center justify-center overflow-hidden rounded bg-gray-50 transition hover:scale-105">
      <img src={src} alt={alt} className="h-full w-full object-cover" />
    </div>
  );
}

export default Image;
