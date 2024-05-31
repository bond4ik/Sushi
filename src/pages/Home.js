import Header from "../components/Header";
import Menu from "../components/Menu";
import Footer from "../components/Footer"

function Home() {
  return (
    <div className="container mx-auto">
      <Header />
      <Menu />
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;