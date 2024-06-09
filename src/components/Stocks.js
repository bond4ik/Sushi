import React, { useState } from 'react';
import Modal from './Modal';
import CartModal from './CartModal';
import { addToCart } from './cart';


function Stocks() {
  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cartItems, setCartItems] = useState([]);

  const products = [
    {
      id: 1,
      image: "./media/stocks/1.webp",
      name: "Ассорти",
      weight: "650 г.",
      ingredients: "Запеченная ассорти (креветка, угорь,краб, лосось) Филадельфия ассорти (креветка,лосось ,тунец,угорь)",
      price: "1199 ₽"
    },
    {
      id: 2,
      image: "./media/stocks/2.webp",
      name: "Йоджи",
      weight: "1000 г.",
      ingredients: "Лосось терияки маки, филадельфия мини, запеченная лосось и авокадо, запеченный ролл с курицей.",
      price: "1499 ₽"
    },
    {
      id: 3,
      image: "./media/stocks/3.webp",
      name: "Гранд (Запеченный)",
      weight: "1150 г.",
      ingredients: "Запеченная калифорния, запеченный угорь, филадельфия гриль, запеченная бонита, унаги соус.",
      price: "1899 ₽"
    },  
  ];

  const addToCartHandler = (product) => {
    addToCart(product);
  };

  const openInfoModal = (product) => {
    setSelectedProduct(product);
    setIsInfoModalOpen(true);
  };

  return (
    <>
      <Modal isOpen={isInfoModalOpen} onClose={() => setIsInfoModalOpen(false)} product={selectedProduct} />
      <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} items={cartItems} />

      <div className="pt-10 pl-2">
        <a id="stocks" className="text-[25px] font-Bold text-gray-700 pl-3">Наборы и акции</a>
      </div>

      <div className="grid grid-cols-4 gap-4">
        {products.map((product) => (
          <div key={product.id} className="flex flex-col justify-between p-4 rounded-2xl">
            <img
              src={product.image}
              alt={product.name}
              className="w-full rounded-2xl mb-2 cursor-pointer"
              onClick={() => openInfoModal(product)}/>
            <div>
              <h3 className="text-lg font-bold text-gray-700">{product.name}</h3>
              <p className="text-gray-700">{product.weight}</p>
              <p className="text-sm text-gray-400">{product.ingredients}</p>
            </div>
            <div className="flex justify-between items-center mt-2">
              <button className="bg-orange-500 text-white px-4 py-2 rounded-full transition-colors duration-500 hover:bg-gray-700" onClick={() => addToCartHandler(product)}>Заказать</button>
              <span className="text-lg font-bold text-gray-700">{product.price}</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Stocks;