import Categories from "./components/Categories";
import Navbar from "./components/Navbar";
import Recomended from "./components/Recomended";
import SpecialOffer from "./components/SpecialOffer";

function App() {
  return (
    <div className=" bg-[#1b2838]">
      {/* Navbar */}
      <Navbar />
      <div className="lg:max-w-[90vw] xl:max-w-[80vw] mx-auto">
        {/* Categories */}
        <Categories />
        {/* Recommended */}
        <Recomended />
        {/* SpecialOffers */}
        <SpecialOffer />
      </div>{" "}
      {/* Browse */}
      {/* Footer */}
    </div>
  );
}

export default App;
