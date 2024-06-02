import React, { useEffect } from 'react';


function Modal({ isOpen, onClose, product }) {
  
  const handleOutsideClick = (event) => {
    if (event.target.id === 'my-modal') {
      onClose();
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Escape') {
      onClose();
    }
  };

  useEffect(() => {
    window.addEventListener('click', handleOutsideClick);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('click', handleOutsideClick);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  if (!isOpen) return null;

  return (
    <div id="my-modal" className="fixed inset-0 bg-black bg-opacity-50 overflow-y-auto h-full w-full">
      <div className="relative top-96 mx-auto border w-2/5 shadow-lg rounded-2xl bg-white transform scale-90">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between">
          <div className="w-full md:w-3/5 p-10 transform scale-80">
            <img src={product?.image} alt={product?.name} className="w-full rounded-xl   " />
          </div>
          <div className="w-full md:w-2/5 bg-gray-100 p-3 rounded-r-xl h-full">
            <button onClick={onClose} className="absolute top-0 left-0 mt-2 ml-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="mb-64">
              <h2 className="font-bold text-xl">{product?.name}</h2>
              <p className="text-lg">{product?.weight}</p>
              <p className="text-lg">{product?.ingredients}</p>
            </div>
            <div className="mt-auto flex justify-center">
              <button className="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-gray-700 transition-colors mt-4 w-3/4">
                Добавить в корзину за {product?.price}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
