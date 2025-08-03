// components/Checkbox.jsx
import React from "react";

const Checkbox = ({ label, name, value, onChange, className = "" }) => {
  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <input
        type="checkbox"
        id={name}
        name={name}
        checked={value}
        onChange={onChange}
        className="w-4 h-4"
      />
      <label htmlFor={name} className="text-sm font-medium">
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
