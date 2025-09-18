import "../styles/main.scss";
import Navbar from "../components/navbar/NavBar.jsx";
import Slider from "../components/slider/SliderComponent.jsx";
import TopSelling from "../components/topselling/TopSelling.jsx";
import CommentsSection from "../components/commentssection/CommentsSection.jsx";

function HomePage({ favoriteIds, toggleFavorite }) {
  return (
    <>
      <div>
        <Slider />
        <TopSelling favoriteIds={favoriteIds} toggleFavorite={toggleFavorite} />
      </div>
    </>
  );
}

export default HomePage;
