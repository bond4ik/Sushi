import Header from "../components/Header";
import Menu from "../components/Menu";
import Footer from "../components/Footer"
import Brolls from "../components/Branded rolls";
import Bakedrolls from "../components/Baked rolls";
import ClassicRolls from "../components/Classic rolls";
import Sushi from "../components/Sushi";
import Stocks from "../components/Stocks";
import SH from "../components/SecondHead"

function Home() {
  return (
    <div className="container mx-auto">
      <Header />
      <div className="sticky top-0 bg-white pt-4 pb-4">
        <SH />
      </div>
      <div className="pt-[20px]">
        <Menu />
      </div>
      <div>
        <Brolls />
      </div>
      <div>
        <Bakedrolls />
      </div>
      <div>
        <ClassicRolls />
      </div>
      <div>
        <Sushi />
      </div>
      <div>
        <Stocks />
      </div>
      <div className="pt-20">
        <Footer/>
      </div>
    </div>
  );
}

export default Home;