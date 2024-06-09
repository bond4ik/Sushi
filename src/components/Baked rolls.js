import React, { useState } from 'react';
import Modal from './Modal';
import CartModal from './CartModal';
import { addToCart } from './cart';


function Bakedrolls() {
  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cartItems, setCartItems] = useState([]);

  const products = [
    {
      id: 1,
      image: "./media/bakedrolls/1.webp",
      name: "Запеченный ролл Осака",
      weight: "350 г.",
      ingredients: "Лосось, снежный краб, огурец, яки соус, рис, нори",
      price: "649 ₽"
    },
    {
      id: 2,
      image: "./media/brolls/2.webp",
      name: "Запеченный ролл Киото",
      weight: "350 г.",
      ingredients: "Окунь, мидии салатные, сыр cremette, яки соус, рис, нори",
      price: "599 ₽"
    },
    {
      id: 3,
      image: "./media/brolls/3.webp",
      name: "Запеченный Ролл Аппетито",
      weight: "320 г.",
      ingredients: "Лосось, сыр cremette, снежный краб, икра тобико, яки соус, рис, нори",
      price: "699 ₽"
    },
    {
      id: 4,
      image: "./media/brolls/4.webp",
      name: "Запеченный ролл с лососем",
      weight: "350 г.",
      ingredients: "Лосось, икра тобико, сыр cremette, огурец, яки соус, унаги соус, рис, нори",
      price: "599 ₽"
    },
    {
      id: 5,
      image: "./media/brolls/5.webp",
      name: "Запеченный ролл Камчатка",
      weight: "350 г.",
      ingredients: "Угорь, огурец, икра тобико, сыр cremette, крабовые палочки, яки соус, унаги соус, кунжут, рис, нори",
      price: "629 ₽"
    },
    {
      id: 6,
      image: "./media/brolls/6.webp",
      name: "Запеченный ролл с креветкой",
      weight: "350 г.",
      ingredients: "Креветка, икра тобико, сыр cremette, огурец, яки соус, рис, нори",
      price: "699 ₽"
    },
    {
      id: 7,
      image: "./media/brolls/7.webp",
      name: "Запеченный ролл с угрем",
      weight: "350 г.",
      ingredients: "Угорь, сыр cremette, огурец, яки соус, кунжут, рис, нори",
      price: "599 ₽"
    },
    {
      id: 8,
      image: "./media/brolls/8.webp",
      name: "Запеченный мини ролл с лососем",
      weight: "125 г.",
      ingredients: "Спайси соус, лосось, рис, нори",
      price: "299 ₽"
    },
    {
      id: 9,
      image: "./media/brolls/9.webp",
      name: "Запеченный Ролл Окинава",
      weight: "350 г.",
      ingredients: "Креветка, икра тобико, снежный краб, сыр cremette, яки соус, рис, нори",
      price: "649 ₽"
    },
    {
      id: 10,
      image: "./media/brolls/10.webp",
      name: "Запеченная филадельфия",
      weight: "260 г.",
      ingredients: "Лосось, сыр сremetta, огурец, яки соус, рис, нори",
      price: "599 ₽"
    },
    {
      id: 11,
      image: "./media/brolls/11.webp",
      name: "Запечённый ролл с крабом",
      weight: "240 г.",
      ingredients: "Снежный краб, огурец, авокадо, унаги соус, яки соус, кунжут",
      price: "559 ₽"
    },
    {
      id: 12,
      image: "./media/brolls/12.webp",
      name: "Запеченный ролл с Тунцом",
      weight: "",
      ingredients: "Рис, Нори, Сыр Cremetta, Яблоко, Тунец, Тобико, Спайси соус (острый), Сыр Гауда.",
      price: "549 ₽"
    },
    {
      id: 13,
      image: "./media/brolls/13.webp",
      name: "Запеченная Филадельфия Гриль SW",
      weight: "300 г.",
      ingredients: "Лосось, краб, сыр cremette, огурец, унаги соус, рис, нори",
      price: "699 ₽"
    },
    {
      id: 14,
      image: "./media/brolls/14.webp",
      name: "Red Ролл",
      weight: "",
      ingredients: "Рис, Нори, Лосось, Снежный краб, Сливочный сыр, Спайси соус, Тобико.",
      price: "549 ₽"
    },
    {
      id: 15,
      image: "./media/brolls/15.webp",
      name: "Запеченный Ролл с Курой",
      weight: "Рис, Нори, Огурец, Сливочный Сыр, Паприка, Куриное филе, Тобико, Соус ВС, Масаго, Унаги Соус.",
      ingredients: "",
      price: "549 ₽"
    },
    {
      id: 16,
      image: "./media/brolls/16.webp",
      name: "Запеченный Ролл Пиканто",
      weight: "",
      ingredients: "Рис, Нори, Снежный краб, Сливочный сыр, Угорь, Лосось, Спайси соус, Масаго",
      price: "549 ₽"
    }
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
        <a id="baked-rolls" className="text-[25px] font-Bold text-gray-700 pl-3">Запеченные роллы</a>
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

export default Bakedrolls;