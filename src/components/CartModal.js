import React, { useEffect, useState } from 'react';
import { getCartItems, updateQuantity, addToCart, clearCart } from './cart';

function CartModal({ isOpen, onClose }) {
  const [cartItems, setCartItems] = useState([]);

useEffect(() => {
  const savedCartItems = getCartItems();
  if (savedCartItems) {
    setCartItems(savedCartItems);
  }

  const handleBeforeUnload = () => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  };

  window.addEventListener('beforeunload', handleBeforeUnload);

  return () => {
    window.removeEventListener('beforeunload', handleBeforeUnload);
  };
}, [cartItems]);

  const handleOutsideClick = (event) => {
    if (event.target.id === 'simple-modal') {
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
    <div id="simple-modal" className="fixed inset-0 bg-black bg-opacity-50 overflow-y-auto h-full w-full flex justify-center items-center">
      <div className="relative bg-white border shadow-lg rounded-2xl p-10 w-1/3">
        <button onClick={onClose} className="absolute top-0 right-0 mt-2 mr-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <h2 className="text-[25px] font-bold text-gray-700">В вашей корзине</h2>
        <div className="space-y-4 pt-5">
          {cartItems.map(item => (
            <div key={item.id} className="flex items-center justify-between space-x-4">
              <img src={item.image} alt={item.name} className="w-26 h-20 object-cover rounded-2xl" />
              <span className="text-gray-700 font-bold flex-1 text-[18px]">{item.name}</span>
              <div className="flex items-center space-x-3">
                <span className="text-[18px]">{item.price}</span>
                <div className="border-2 border-gray-300 rounded-full p-2 flex items-center space-x-3">
                  <button onClick={() => updateQuantity(item, -1)} className="border-2 border-orange-500 text-orange-500 rounded-full px-2">-</button>
                  <span className="mx-3">{item.quantity}</span>
                  <button onClick={() => addToCart(item)} className="border-2 border-orange-500 text-orange-500 rounded-full px-2">+</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-end">
          <button onClick={clearCart} className="text-gray-700 text-sm dotted border-b border-dotted border-gray-700">Очистить корзину</button>
        </div>
        <div className="flex justify-between items-center mt-4">
          <span className="text-gray-700 text-[20px]">Сумма товаров: </span>
          <span className="text-gray-700 text-[20px]">{cartItems.reduce((total, item) => {const price = parseFloat(item.price);const quantity = parseInt(item.quantity, 10);return total + (price * quantity);}, 0)} ₽</span>
        </div>
        <div className="mt-4 flex justify-end space-x-2">
          <button onClick={onClose} className="border-solid border border-gray-300 text-gray-700 px-7 py-2 rounded-full hover:bg-gray-700 transition-colors duration-500 hover:text-white">Вернуться в меню</button>
          <button onClick={() => {alert('Заказ оформлен');}}className="border-solid border-2 border-orange-500 bg-orange-500 text-white px-7 py-2 rounded-full transition-colors duration-500 hover:bg-gray-700 hover:border-gray-700">Оформить заказ</button>
        </div>
      </div>
    </div>
  );
}

export default CartModal;