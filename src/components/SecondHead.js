import { FaTh } from 'react-icons/fa';

function SH() {

  return (
    <div className="container mx-auto bg-white pl-5 pr-5 flex justify-between items-center transition-all duration-300">
      <a href="#branded-rolls">Фирменные роллы</a>
      <a href="#baked-rolls">Запеченные роллы</a> 
      <a href="#classic-rolls">Классические роллы</a>
      <a href="#sushi">Суши</a> 
      <a href="#stocks">АКЦИИ НАБОРЫ</a>
      <a href="#baked-sushi">Запеченные суши</a>
      <FaTh className="text-lg" />
    </div>
  );
}

export default SH;
