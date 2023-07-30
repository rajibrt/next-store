import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function ProductDetailsCarousel({ images }) {
  return (
    <div className="text-white tex-[20px] w-full max-w-[1360] mx-auto sticky top-[50px]">
      <Carousel
        infiniteLoop={true}
        showIndicators={false}
        showStatus={false}
        thumbWidth={60}
        className="productCarousel"
      >
        {images?.map((img) => (
          <img
            key={img.id}
            src={img.attributes.url}
            alt={img.attributes.name}
          />
        ))}
        {/* <img src="/pd1.webp" />
        <img src="/pd2.webp" />
        <img src="/p2.png" />
        <img src="/p3.png" />
        <img src="/p4.png" />
        <img src="/p5.png" />
        <img src="/p6.png" />
        <img src="/p7.png" /> */}
      </Carousel>
    </div>
  );
}

export default ProductDetailsCarousel;
