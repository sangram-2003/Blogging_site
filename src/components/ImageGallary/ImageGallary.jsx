// GallerySlider.jsx
import React from "react";

const images = [
  "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg",
];

export default function GallerySlider() {
  return (
    <div className="w-full  px-4 py-6">
      <div
        className="flex gap-4 overflow-x-auto scroll-smooth"
        style={{
          scrollbarWidth: "none", // Firefox
          msOverflowStyle: "none", // IE 10+
        }}
      >
        {/* Hide scrollbar - Chrome, Safari */}
        <style>
          {`
            .hide-scrollbar::-webkit-scrollbar {
              display: none;
            }
          `}
        </style>

        <div className="hide-scrollbar  flex gap-4">
          {images.map((src, index) => (
            <div
              key={index}
              className="min-w-[14.1rem]  sm:min-w-[300px] h-64 rounded-xl overflow-hidden shadow-md"
            >
              <img
                src={src}
                alt={`Gallery ${index}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
