import React, { useState } from 'react';

const Notes = () => {
  const [isInputVisible, setIsInputVisible] = useState(false);

  const handleButtonClick = () => {
    setIsInputVisible(true);
  };
  const close=()=>{

  }

  return (
    <div>
      <button onClick={handleButtonClick}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
      </button>

      {isInputVisible && (
        <div className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-gray-800 bg-opacity-50">
          <input
            type="text"
            placeholder="Enter text..."
            className="p-4 bg-white"
            // You can add other input props as needed
          />
        </div>
      )}
    </div>
  );
};

export default Notes;
