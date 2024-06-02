import React, { useState } from 'react';
import Modal from './Modal';


function ClassicRolls() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    {
      id: 1,
      image: "./media/sushi/1.webp",
      name: "Суши с лососем",
      weight: "40 г.",
      ingredients: "Лосось, рис",
      price: ""
    },
    {
      id: 2,
      image: "./media/sushi/2.webp",
      name: "Суши с копченым лососем",
      weight: "40 г.",
      ingredients: "Копченый лосось, рис",
      price: "149 ₽"
    },
    {
      id: 3,
      image: "./media/sushi/3.webp",
      name: "Суши с креветкой",
      weight: "35 г.",
      ingredients: "Креветка, рис",
      price: "149 ₽"
    },
    {
      id: 4,
      image: "./media/sushi/4.webp",
      name: "Суши c тунцом",
      weight: "40 г.",
      ingredients: "Тунец, рис",
      price: "149 ₽"
    },
    {
      id: 5,
      image: "./media/sushi/5.webp",
      name: "Суши с угрем",
      weight: "40 г.",
      ingredients: "Угорь, унаги соус, кунжут, рис",
      price: "159 ₽"
    },
    {
      id: 6,
      image: "./media/sushi/6.webp",
      name: "Суши с морским гребешком",
      weight: "40 г.",
      ingredients: "Гребешок, унаги соус, кунжут, рис",
      price: "149 ₽"
    },
    {
      id: 7,
      image: "./media/sushi/7.webp",
      name: "Суши авокадо",
      weight: "35 г.",
      ingredients: "Авокадо, рис",
      price: "149 ₽"
    },
    {
      id: 8,
      image: "./media/sushi/8.webp",
      name: "Суши масаго",
      weight: "40 г.",
      ingredients: "Икра тобико, рис",
      price: "149 ₽"
    },
    {
      id: 9,
      image: "./media/sushi/9.webp",
      name: "Суши с крабом",
      weight: "40 г.",
      ingredients: "Краб, рис",
      price: "149 ₽"
    },
    {
      id: 20,
      image: "./media/sushi/10.webp",
      name: "Суши чука",
      weight: "35 г.",
      ingredients: "Чука, ореховый соус, кунжут, рис",
      price: "139 ₽"
    },
    {
      id: 11,
      image: "./media/sushi/11.webp",
      name: "Суши филадельфия тунец",
      weight: "45 г.",
      ingredients: "Тунец, сливочный сыр, рис",
      price: "159 ₽"
    },
    {
      id: 12,
      image: "./media/sushi/12.webp",
      name: "Суши филадельфия краб",
      weight: "45 г.",
      ingredients: "Снежный краб, сливочный сыр, рис",
      price: "169 ₽"
    },
    {
      id: 13,
      image: "./media/sushi/13.webp",
      name: "Суши филадельфия угорь",
      weight: "45 г.",
      ingredients: "Угорь, сливочный сыр, рис",
      price: "169 ₽"
    },
    {
      id: 14,
      image: "./media/sushi/14.webp",
      name: "Суши филадельфия гребешок",
      weight: "45 г.",
      ingredients: "Гребешок, сливочный сыр, рис",
      price: "169 ₽"
    },
    {
      id: 15,
      image: "./media/sushi/15.webp",
      name: "Суши филадельфия креветка",
      weight: "45 г.",
      ingredients: "Креветка, сливочный сыр, рис",
      price: "169 ₽"
    },
    {
      id: 16,
      image: "./media/sushi/16.webp",
      name: "Суши филадельфия лосось",
      weight: "45 г.",
      ingredients: "Лосось, сливочный сыр, рис",
      price: "169 ₽"
    },
    {
      id: 17,
      image: "./media/sushi/17.webp",
      name: "Суши каппа угорь",
      weight: "50 г.",
      ingredients: "Угорь, спайси соус, огурец, рис",
      price: "169 ₽"
    },
    {
      id: 18,
      image: "./media/sushi/18.webp",
      name: "Суши каппа гребешок",
      weight: "50 г.",
      ingredients: "Гребешок, спайси соус, огурец, рис",
      price: "169 ₽"
    },
    {
      id: 19,
      image: "./media/sushi/19.webp",
      name: "Суши каппа тобико",
      weight: "50 г.",
      ingredients: "Икра тобико, огурец, рис",
      price: "169 ₽"
    },
    {
      id: 20,
      image: "./media/sushi/20.webp",
      name: "Суши каппа краб",
      weight: "50 г.",
      ingredients: "Снежный краб, спайси соус, огурец, рис",
      price: "169 ₽"
    },
    {
      id: 21,
      image: "./media/sushi/21.webp",
      name: "Суши каппа креветка",
      weight: "50 г.",
      ingredients: "Креветка, спайси соус, огурец, рис",
      price: "169 ₽"
    },
    {
      id: 22,
      image: "./media/sushi/22.webp",
      name: "Суши каппа курица",
      weight: "50 г.",
      ingredients: "Курица, спайси соус, огурец, рис",
      price: "169 ₽"
    },
    {
      id: 23,
      image: "./media/sushi/23.webp",
      name: "Суши каппа копченый лосось и сыр",
      weight: "50 г.",
      ingredients: "Копченый лосось, сыр cremettе, огурец, рис",
      price: "169 ₽"
    },
    {
      id: 24,
      image: "./media/sushi/24.webp",
      name: "Суши каппа лосось",
      weight: "50 г.",
      ingredients: "Лосось, спайси соус, огурец, рис",
      price: "169 ₽"
    },
    {
      id: 25,
      image: "./media/sushi/25.webp",
      name: "Суши каппа тунец",
      weight: "50 г.",
      ingredients: "Тунец, спайси соус, огурец, рис",
      price: "169 ₽"
    },
    {
      id: 26,
      image: "./media/sushi/26.webp",
      name: "Суши каппа чука",
      weight: "50 г.",
      ingredients: "Чука, ореховый соус, огурец, кунжут, рис",
      price: "159 ₽"
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
        <a id="sushi" className="text-[25px] font-Bold text-gray-700 pl-3">Суши</a>
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
              <button className="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-gray-700 transition-colors">
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