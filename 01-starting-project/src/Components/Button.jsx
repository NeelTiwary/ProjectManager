import React from "react";

function Button({children , ...props}) {
  return (
    <button
      {...props}
      className="px-4 py-2 text-xs md:text-base text-stone-400 rounded-md hover:bg-stone-700 hover:text-stone-200"
    >
      {children}
    </button>
  );    
 
}

export default Button;
