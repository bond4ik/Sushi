import React, { useState } from 'react';
import Modal from './Modal';


function ClassicRolls() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    {
      id: 1,
      image: "./media/classicrolls/1.webp",
      name: "Ролл с такуаном",
      weight: "115 г.",
      ingredients: "Рис, Нори, Маринованный Дайкон",
      price: "169 ₽"
    },
    {
      id: 2,
      image: "./media/classicrolls/2.webp",
      name: "Ролл с авокадо",
      weight: "115 г.",
      ingredients: "Рис, Нори, Авокадо",
      price: "159 ₽"
    },
    {
      id: 3,
      image: "./media/classicrolls/3.webp",
      name: "Ролл с тунцом",
      weight: "115 г.",
      ingredients: "Рис, Нори, Тунец",
      price: "269 ₽"
    },
    {
      id: 4,
      image: "./media/classicrolls/4.webp",
      name: "Ролл с огурцом",
      weight: "105 г.",
      ingredients: "Рис, Нори, Огурец",
      price: "129 ₽"
    },
    {
      id: 5,
      image: "./media/classicrolls/5.webp",
      name: "Ролл с угрём",
      weight: "120 г.",
      ingredients: "Рис, Нори, Угорь, Соус Унаги",
      price: "299 ₽"
    },
    {
      id: 6,
      image: "./media/classicrolls/6.webp",
      name: "Ролл с креветкой",
      weight: "115 г.",
      ingredients: "Рис, Нори, Креветка",
      price: "279 ₽"
    },
    {
      id: 7,
      image: "./media/classicrolls/7.webp",
      name: "Ролл с лососем",
      weight: "115 г.",
      ingredients: "Рис,нори,лосось",
      price: "259 ₽"
    }
  ];

  const openModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  return (
    <>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} product={selectedProduct} />

      <div className="pt-10 pl-2">
        <a id="classic-rolls" className="text-[25px] font-Bold text-gray-700 pl-3">Классические роллы</a>
      </div>

      <div className="grid grid-cols-4 gap-4">
        {products.map((product) => (
          <div key={product.id} className="flex flex-col justify-between p-4 rounded-2xl">
            <img
              src={product.image}
              alt={product.name}
              className="w-full rounded-2xl mb-2 cursor-pointer"
              onClick={() => openModal(product)}
            />
            <div>
              <h3 className="text-lg font-bold text-gray-700">{product.name}</h3>
              <p className="text-gray-700">{product.weight}</p>
              <p className="text-sm text-gray-400">{product.ingredients}</p>
            </div>
            <div className="flex justify-between items-center mt-2">
              <button className="bg-orange-500 text-white px-4 py-2 rounded-full transition-colors duration-500 hover:bg-gray-700">
                Заказать
              </button>
              <span className="text-lg font-bold text-gray-700">{product.price}</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default ClassicRolls;
