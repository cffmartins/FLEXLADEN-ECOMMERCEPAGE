// importing styles
import "../styles/main.css";
// importing components
import Navbar from "../components/NavBar.jsx";
import Slider from "../components/SliderComponent.jsx";
import TopSelling from "../components/TopSelling.jsx";

function HomePage() {
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
