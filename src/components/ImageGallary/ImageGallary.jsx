// GallerySlider.jsx
import React from "react";
import { useSelector } from "react-redux";
import service from "../../appwrite/config";



export default function GallerySlider() {
  const {photos}=useSelector((state)=>state.gallery);
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
          {photos.map((photo, index) => (
            <div
              key={index}
              className="min-w-[14.1rem]  sm:min-w-[300px] h-64 rounded-xl overflow-hidden shadow-md"
            >
              <img
                src={service.getFilePreview(photo.galleryImage)}
                className="w-full h-full"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
