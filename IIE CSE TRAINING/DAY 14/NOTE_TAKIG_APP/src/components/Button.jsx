// import React from "react";
// const Button = ({ text, onClick, className = "" }) => {
//   <button
//     onClick={onClick}
//     className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${className}`}
//   >
//     {text}
//   </button>;
// };
// export default Button;

import React from "react";

function Button({ text, onClick, className = "" }) {
  return (
    <button
      onClick={onClick}
      className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${className}`}
    >
      {text}
    </button>
  );
}

export default Button;
