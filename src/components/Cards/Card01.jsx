import parse from "html-react-parser";
import React from "react";
import { Link } from "react-router-dom";
import service from "../../appwrite/config";

function Card01({
  image,
  alt = 'Image',
  category,
  title,
  para,
  userImage,
  userAlt = 'Image-User',
  UserName,
  date,
  className = '',
  link = '#',
  ...props
}) {

console.log(new Date(date).getMinutes())
  console.log("iiiii",date , link , image)
  return (
    <Link to={link}>
      <div
        className={`relative flex flex-col  bg-white shadow-sm border border-slate-200 rounded-lg w-full ${className}`}
        {...props}
      >
        <div className="relative sm:h-56 m-2.5 overflow-hidden text-white rounded-md">
          <img src={service.getFilePreview(image)} alt={alt} className="w-full h-full object-cover" />
        </div>
        <div className="p-4">
          <div className="mb-4 rounded-full bg-cyan-600 py-0.5 px-2.5 text-xs text-white shadow-sm w-20 text-center">
            {category}
          </div>
          <h6 className="mb-2 text-slate-800 text-xl font-semibold line-clamp-3">{title}</h6>
          <p className="text-slate-600 leading-normal  line-clamp-4 font-light"> {parse(para)}</p>
        </div>
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center">
            <img
              alt={userAlt}
              src={userImage}
              className="relative inline-block h-8 w-8 rounded-full"
            />
            <div className="flex flex-col ml-3 text-sm">
              <span className="text-slate-800 font-semibold">{UserName}</span>
              <span className="text-slate-600">{date}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Card01;
