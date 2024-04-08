import React from "react";

const Clientscard = ({clintName}) => {
  return (
    <>
      <div className="bg-white rounded-3xl h-72 w-80 shadow-lg p-14 transform transition duration-300 hover:scale-105">
        <p className="text-gray-700">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit harum
          eos quos soluta dignissimos unde. Eveniet sit nam quia quaerat
          consectetur dignissimos.
        </p>
        <h3 className="text-lg font-semibold text-gray-800 mt-4">
          {clintName}
        </h3>
      </div>
    </>
  );
};

export default Clientscard;
