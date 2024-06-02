function MenuItem({ imageSrc, title, link }) {
  const smoothScroll = (e, id) => {
    e.preventDefault(); 
    document.querySelector(id).scrollIntoView({
      behavior: 'smooth'
    });
  };

  return (
    <div className="menu-item border max-w-64 rounded-2xl">
      <a onClick={(e) => smoothScroll(e, link)}>
        <img src={imageSrc} alt={title} className="w-full h-auto rounded-t-2xl" />
        <p className="text-center py-2 text-gray-700 text-md">{title}</p>
      </a>
    </div>
  );
}

function Menu() {
  const menuItems = [
    { imageSrc: './media/menu/2.webp', title: 'Фирменные роллы', link: '#branded-rolls' },
    { imageSrc: './media/menu/2.webp', title: 'Запеченные роллы', link: '#baked-rolls' },
    { imageSrc: './media/menu/3.webp', title: 'Классические роллы', link: '#classic-rolls' },
    { imageSrc: './media/menu/4.webp', title: 'Суши', link: '#sushi' },
    { imageSrc: './media/menu/5.webp', title: 'АКЦИИ НАБОРЫ', link: '#stocks' },
  ];

  return (
    <div className="">
      <a className="text-[25px] font-Bold text-gray-700 pl-5">Меню</a>
      <div className="pt-4 flex justify-between space-x-4 pl-4 pr-4">
        {menuItems.map((item, index) => (
          <MenuItem key={index} imageSrc={item.imageSrc} title={item.title} link={item.link} />
        ))}
      </div>
    </div>
  );
}

export default Menu;
