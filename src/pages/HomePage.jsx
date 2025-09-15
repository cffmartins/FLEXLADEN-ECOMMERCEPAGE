import "../styles/main.css";
import Navbar from "../components/NavBar.jsx";
import Slider from "../components/SliderComponent.jsx";
import TopSelling from "../components/TopSelling.jsx";
import CommentsSection from "../components/CommentsSection.jsx";

function HomePage({ favoriteIds, toggleFavorite }) {
  return (
    <>
      <div>
        <Slider />
        <TopSelling />
      </div>
    </>
  );
}

export default HomePage;
