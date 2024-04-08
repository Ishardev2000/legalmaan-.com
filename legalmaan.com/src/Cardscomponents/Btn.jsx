import React from "react";

const Btn = ({btnText}) => {
  return (
    <>
      <button
        src="contect"
        type="button"
        className="text-white bg-black hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium mt-9 rounded-full text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-black dark:hover:bg-gray-400 hover:text-black dark:focus:ring-blue-800"
      >
        {btnText}
      </button>
    </>
  );
};

export default Btn;
