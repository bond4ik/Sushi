function MenuItem({ imageSrc, title }) {
  return (
    <div className="menu-item border max-w-64 rounded-2xl shadow-2xl">
      <img src={imageSrc} alt={title} className="w-full h-auto rounded-t-2xl" />
      <p className="text-center py-2 text-gray-700 text-md">{title}</p>
    </div>
  );
}

function Menu() {
  const menuItems = [
    { imageSrc: './media/menu/2.webp', title: 'Фирменные роллы' },
    { imageSrc: './media/menu/2.webp', title: 'Запеченные роллы' },
    { imageSrc: './media/menu/3.webp', title: 'Классические роллы' },
    { imageSrc: './media/menu/4.webp', title: 'Суши' },
    { imageSrc: './media/menu/5.webp', title: 'АКЦИИ НАБОРЫ' },
  ];

  return (
    <div className="">
      <a className="text-[25px] font-Bold text-gray-700 pl-2">Меню</a>
      <div className="pt-4 flex justify-between space-x-4 pl-2">
        {menuItems.map((item, index) => (
          <MenuItem key={index} imageSrc={item.imageSrc} title={item.title} />
        ))}
      </div>
    </div>
  );
}

export default Menu;

