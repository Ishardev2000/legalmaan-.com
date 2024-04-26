import React from "react";

const Btn = ({ btnText }) => {
  const handleClick = () => {
    window.open("https://api.whatsapp.com/send/?phone=923180968295&text&type=phone_number&app_absent=0", "_blank");
  };

  return (
    <>
      <button
        onClick={handleClick}
        type="button"
        className="text-white bg-black hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium mt-9 rounded-full text-sm px-8 py-4 text-center mr-3 md:mr-0 dark:bg-black dark:hover:bg-gray-400 hover:text-black dark:focus:ring-blue-800"
      >
        {btnText}
      </button>
    </>
  );
};

export default Btn;
