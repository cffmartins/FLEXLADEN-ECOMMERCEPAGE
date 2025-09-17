// importing styles
import "../styles/main.css";
// importing components
import Navbar from "../components/NavBar.jsx";
import Slider from "../components/SliderComponent.jsx";
import TopSelling from "../components/TopSelling.jsx";
import CommentsSection from "../components/CommentsSection.jsx";
import ProductCard from "../components/ProductCard";

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
