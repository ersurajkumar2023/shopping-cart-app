import React from 'react'

const Spinner = () => {
  return (
    <div>
      <div
        style={{ borderTopColor: "transparent" }}
        className="w-32 h-32 border-4 border-red-400 border-double rounded-full animate-spin"
      ></div>
      <p className="text-xl text-gray-500 mt-5 text-center">Loading ..</p>
    </div>
  );
}

export default Spinner
