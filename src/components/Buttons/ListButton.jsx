import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
function ListButton({ icon: Icon, image, label,url, className = '', typeList = 'list', ...props }) {
const navigate = useNavigate();
    return (
        typeList !== 'card' ? (
            
             <button
             onClick={()=>navigate(url)}
                type="button"
                className={`relative col-span-1 sm:col-span-1 md:col-span-2 lg:col-span-1 inline-flex items-center  px-4 py-2 text-sm
                    font-medium bg-slate-200 rounded-sm hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700
                    focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white
                    ${className}`}
                {...props}
            >
                <span className="me-2.5">
                    <Icon size={20} />
                </span>
                {label}
            </button>
           
           
        ) : (
            
            <button
                type="button"
                onClick={()=>navigate(url)}
                className={`relative col-span-2 md:col-span-2 h-12 inline-flex items-center justify-center  px-4 py-2 text-sm
                    font-medium rounded-sm hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700
                    focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 text-center dark:hover:text-white object-cover object-center
                    ${className}`}
                style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                {...props}
            >
                {label}
            </button>
         
            
        )
    );
}

export default ListButton;
