// importing styles
import "../styles/main.css";
// importing components
import Navbar from "../components/NavBar.jsx";
import Slider from "../components/SliderComponent.jsx";
import TopSelling from "../components/TopSelling.jsx";
import CommentsSection from "../components/CommentsSection.jsx";

function HomePage() {
  return (
    <>
      <div>
        <Slider />
        <TopSelling />
        <CommentsSection />
      </div>
    </>
  );
}
export default HomePage;
