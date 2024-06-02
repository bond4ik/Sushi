import { PhoneIcon, ClockIcon, LocationMarkerIcon } from '@heroicons/react/outline';

function Header() {
  return (
    <header className="pl-4 pr-4">
      <div className="py-4 flex justify-between items-center">
        <img className="h-auto max-h-20" src="./media/header/1.png" alt="Логотип"></img> 
        <a className="flex items-center border-solid border-2 border-orange-500 bg-orange-500 text-white px-4 py-2 rounded-full hover:border-gray-700 hover:bg-gray-700  transition-colors" href="#address">
          <LocationMarkerIcon className="h-5 w-5 mr-2 text-white" /> 
          Укажите ваш адрес
        </a>
        <a className="flex items-center text-gray-700 hover:text-gray-900 transition-colors">
          <ClockIcon className="h-5 w-5 mr-2"/>
          11:00 - 23:00
        </a>
        <a className="flex items-center text-gray-700 hover:text-gray-900 transition-colors" href="tel:+79119745843">
          <PhoneIcon className="h-5 w-5 mr-2"/>
          +7 911 974-58-43
        </a>
        <a className="border-solid border bg-orange-500 text-white px-7 py-2 rounded-full hover:bg-gray-700 transition-colors " href="#login">Корзина</a>
        <a className="border-solid border border-gray-300 text-gray-700 px-7 py-2 rounded-full hover:bg-gray-700 transition-colors hover:text-white" href="#login">Войти</a>
      </div>
    </header>
  )
}

export default Header;