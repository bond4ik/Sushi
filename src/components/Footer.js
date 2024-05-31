import { FaTelegramPlane, FaYoutube, FaVk, FaWhatsapp } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-gray-800 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* Левый столбец с логотипом и информацией */}
        <div className="flex-1 flex flex-col border-r border-gray-400 px-4">
          <div className="h-14 w-[90px] flex items-center justify-center">
            <img src="./media/header/1.png" alt="Логотип" className="h-auto w-full" />
          </div>
          <div className="mt-4">
            <p className="text-[12px] mb-1 pl-2">© 2013-2024 Доставка японской еды для вас</p>
            <p className="text-[12px] mb-2 pt-[5px] pl-2">С приложением еще удобнее</p>
            <div className="flex items-center">
              <a href="https://www.apple.com/app-store/" className="">
                <img src="./media/footer/2.webp" alt="App Store" className="h-14" />
              </a>
              <a href="https://play.google.com/store" className="">
                <img src="./media/footer/1.svg" alt="Google Play" className="h-14" />
              </a>
            </div>
          </div>
        </div>

        {/* Средний столбец с навигацией */}
        <div className="flex-1 flex flex-wrap justify-center border-r border-gray-400 px-4">
          <div className="flex flex-col mr-8 mb-4"> 
            <a href="#" className="mb-2">Меню</a>
            <a href="#" className="mb-2">Акции</a>
            <a href="#" className="mb-2">О нас</a>
            <a href="#" className="mb-2">Блог</a>
            <a href="#" className="mb-2">Доставка</a>
          </div>
          <div className="flex flex-col">
            <a href="#" className="mb-2">Самовывоз</a>
            <a href="#" className="mb-2">Франшиза</a>
            <a href="#" className="mb-2">Вакансии</a>
            <a href="#" className="mb-2">Контакты</a>
            <a href="#" className="mb-2">Для новичков</a>
          </div>
        </div>

        {/* Правый столбец с социальными сетями */}
        <div className="flex-1 flex flex-col items-center px-4">
          <p className="text-base mb-2 text-center">Следите за новостями:</p>
          <div className="flex text-2xl mb-4">
            <a href="#" className="mx-2"><FaTelegramPlane /></a>
            <a href="#" className="mx-2"><FaYoutube /></a>
            <a href="#" className="mx-2"><FaVk /></a>
            <a href="#"><FaWhatsapp /></a>
          </div>
          <p className="text-xs mb-2 text-center">Не является публичной офертой</p>
          <p className="text-xs text-orange-500">Правовая информация</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
