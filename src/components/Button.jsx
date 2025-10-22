import React from "react";

export default function Button({ children, variant = "primary", size = "md", ...props }) {
  let base = "rounded-md font-semibold focus:outline-none transition-colors";
  let sizes = {
    sm: "px-2 py-1 text-sm",
    md: "px-4 py-2 text-md",
  };
  let variants = {
    primary: "bg-teal-500 text-white hover:bg-teal-600",
    secondary: "bg-gray-300 text-gray-800 hover:bg-gray-400",
    danger: "bg-red-500 text-white hover:bg-red-600",
  };

  return (
    <button className={`${base} ${sizes[size]} ${variants[variant]}`} {...props}>
      {children}
    </button>
  );
}
