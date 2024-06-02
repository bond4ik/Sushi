import React, { useState } from 'react';
import Modal from './Modal';


function Brolls() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    {
      id: 1,
      image: "./media/brolls/1.webp",
      name: "ТОКИО SW",
      weight: "270 г.",
      ingredients: "Снежный краб, креветка, сливочный сыр, огурец, масаго",
      price: "549 ₽"
    },
    {
      id: 2,
      image: "./media/brolls/2.webp",
      name: "Филадельфия",
      weight: "300 г.",
      ingredients: "Лосось, сыр cremette, огурец, рис, нори",
      price: "599 ₽"
    },
    {
      id: 3,
      image: "./media/brolls/3.webp",
      name: "Green Ролл",
      weight: "250 г.",
      ingredients: "Лосось, угорь, огурец, сыр cremette, рис, нори",
      price: "599 ₽"
    },
    {
      id: 4,
      image: "./media/brolls/4.webp",
      name: "Ролл Флорида",
      weight: "300 г.",
      ingredients: "Креветка тигровая, огурец, сыр cremette, икра тобико, рис, нори",
      price: "749 ₽"
    },
    {
      id: 5,
      image: "./media/brolls/5.webp",
      name: "Ролл Сакура",
      weight: "350 г.",
      ingredients: "Угорь, снежный краб, сыр cremette, огурец, спайс соус, икра тобико, рис, нори",
      price: "479 ₽"
    },
    {
      id: 6,
      image: "./media/brolls/6.webp",
      name: "Спайси ролл с угрём ВС",
      weight: "340 г.",
      ingredients: "Угорь, огурец, кунжут, спайси соус, рис, нори",
      price: "549 ₽"
    },
    {
      id: 7,
      image: "./media/brolls/7.webp",
      name: "Калифорния тобико",
      weight: "250 г.",
      ingredients: "Снежный краб, авокадо, майонез hellmans, огурец, икра тобико, рис, нори",
      price: "499 ₽"
    },
    {
      id: 8,
      image: "./media/brolls/8.webp",
      name: "Ролл Канада ВС",
      weight: "340 г.",
      ingredients: "Угорь, маринованный дайкон, сыр cremette, спайс соус, кунжут, рис, нори",
      price: "479 ₽"
    },
    {
      id: 9,
      image: "./media/brolls/9.webp",
      name: "Калифорния с лососем",
      weight: "250 г.",
      ingredients: "Лосось, авокадо, майонез hellmans, огурец, икра тобико, рис, нори",
      price: "699 ₽"
    },
    {
      id: 10,
      image: "./media/brolls/10.webp",
      name: "Самурай",
      weight: "350 г.",
      ingredients: "Тигровая креветка, сыр cremette, огурец, икра тобико, спайси соус, рис, нори",
      price: "599 ₽"
    },
    {
      id: 11,
      image: "./media/brolls/11.webp",
      name: "Спайси ролл с тунцом",
      weight: "350 г.",
      ingredients: "Тунец, огурец, икра тобико, спайси соус, рис, нори",
      price: "559 ₽"
    },
    {
      id: 12,
      image: "./media/brolls/12.webp",
      name: "Ролл Нежный Лосось",
      weight: "350 г.",
      ingredients: "Лосось, снежный краб, сыр cremette, креветка, икра тобико, рис, нори",
      price: "799 ₽"
    },
    {
      id: 13,
      image: "./media/brolls/13.webp",
      name: "Яблочный лосось",
      weight: "300 г.",
      ingredients: "Лосось, сыр cremette, яблоко, рис, нори",
      price: "549 ₽"
    },
    {
      id: 14,
      image: "./media/brolls/14.webp",
      name: "Жемчужина",
      weight: "250 г.",
      ingredients: "Лосось, сыр cremette, икра тобико, рис, нори",
      price: "549 ₽"
    },
    {
      id: 15,
      image: "./media/brolls/15.webp",
      name: "Спайси ролл с лососем",
      weight: "350 г.",
      ingredients: "Лосось, огурец, икра тобико, спайси соус, рис, нори",
      price: "539 ₽"
    },
    {
      id: 16,
      image: "./media/brolls/16.webp",
      name: "Сливочный лосось",
      weight: "300 г.",
      ingredients: "Лосось, сыр cremette, икра тобико, авокадо, рис, нори",
      price: "659 ₽"
    },
    {
      id: 17,
      image: "./media/brolls/17.webp",
      name: "Филадельфия с копчёным лососем",
      weight: "300 г.",
      ingredients: "Копчённый лосось, сыр cremette, огурец, рис, нори",
      price: "659 ₽"
    },
    {
      id: 18,
      image: "./media/brolls/18.webp",
      name: "Аляска VS",
      weight: "250 г.",
      ingredients: "Лосось,огурец, сыр cremette, авокадо, икра тобико, рис, нори",
      price: "599 ₽"
    },
    {
      id: 19,
      image: "./media/brolls/19.webp",
      name: "Радуга",
      weight: "300 г.",
      ingredients: "Лосось, тунец, угорь, окунь, креветка, снежный краб, рис, огурец, кунжут",
      price: "629 ₽"
    },
    {
      id: 20,
      image: "./media/brolls/20.webp",
      name: "Филадельфия с угрём",
      weight: "300 г.",
      ingredients: "Угорь, сыр cremette, огурец, соус унаги, кунжут, рис, нори",
      price: "749 ₽"
    },
    {
      id: 21,
      image: "./media/brolls/21.webp",
      name: "Ассорти из Сливочных роллов",
      weight: "",
      ingredients: "Рис, Нори, Сыр Cremetta, Авокадо, Икра Масаго, Угорь, Лосось, Соус Унаги, Кунжут",
      price: "699 ₽"
    },
    {
      id: 22,
      image: "./media/brolls/22.webp",
      name: "Ассорти из Калифорний VS",
      weight: "250 г",
      ingredients: "Рис, Нори, Авокадо, Майонез, Огурец, Лосось, Креветка, Икра Масаго",
      price: "649 ₽"
    },
    {
      id: 23,
      image: "./media/brolls/23.webp",
      name: "Ассорти из Филадельфий",
      weight: "",
      ingredients: "Рис, Нори, Сыр Cremetta, Огурец, Угорь, Лосось, Соус Унаги, Кунжут",
      price: "649 ₽"
    },
    {
      id: 24,
      image: "./media/brolls/24.webp",
      name: "LOVE Ролл",
      weight: "",
      ingredients: "Рис, Нори, Сливочный сыр, Снежный краб, Лосось, Авокадо, Тобико",
      price: "499 ₽"
    },
    {
      id: 25,
      image: "./media/brolls/25.webp",
      name: "Калифорния с Креветкой",
      weight: "",
      ingredients: "Рис, Нори, Авокадо, Японский майонез, Огурец, Масаго (икра мойвы), Тигровая Креветка",
      price: "599 ₽"
    },
    {
      id: 26,
      image: "./media/brolls/26.webp",
      name: "Филадельфия LUX",
      weight: "",
      ingredients: "Рис, Нори, Лосось, Сливочный сыр, Огурец",
      price: "759 ₽"
    },
    {
      id: 27,
      image: "./media/brolls/27.webp",
      name: "Сливочный угорь",
      weight: "",
      ingredients: "Рис, нори, сливочный сыр, авокадо, икра масаго, угорь, соус унаги, кунжут",
      price: "769 ₽"
    },
    {
      id: 28,
      image: "./media/brolls/28.webp",
      name: "Сливочный Ролл с Креветкой",
      weight: "",
      ingredients: "Рис, Нори, Сливочный сыр, Огурец, Тигровая Креветка, Копченый Лосось, Кунжут",
      price: "669 ₽"
    },
    {
      id: 29,
      image: "./media/brolls/29.webp",
      name: "Rolls Ролл",
      weight: "",
      ingredients: "Рис, Нори, Огурец, Сливочный Сыр, Угорь, Лосось, Унаги Соус, Кунжут",
      price: "649 ₽"
    },
    {
      id: 30,
      image: "./media/brolls/30.webp",
      name: "Филармония",
      weight: "",
      ingredients: "Рис, Нори, Огурец, Сливочный Сыр, Угорь, Копченый Лосось, Унаги Соус",
      price: "749 ₽"
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
        <a id="branded-rolls" className="text-[25px] font-Bold text-gray-700 pl-3">Фирменные роллы</a>
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

export default Brolls;
