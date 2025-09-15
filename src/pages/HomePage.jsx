import "../styles/main.css";
import Navbar from "../components/NavBar.jsx";
import Slider from "../components/SliderComponent.jsx";
import TopSelling from "../components/TopSelling.jsx";

function HomePage({ favoriteIds, toggleFavorite }) {
  return (
    <>
      <div>
        <Slider /> {/* Sem favoritos */}
        <TopSelling
          favoriteIds={favoriteIds}
          toggleFavorite={toggleFavorite}
        />{" "}
        {/* Com favoritos */}
      </div>
    </>
  );
}

export default HomePage;
