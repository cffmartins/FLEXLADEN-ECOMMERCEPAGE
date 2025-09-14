// importing styles
import "../styles/main.css";
// importing components
import Navbar from "../components/NavBar.jsx";
import Slider from "../components/SliderComponent.jsx";

function HomePage() {
  return (
    <>
      <div>
        <Slider />
        <h1>Welcome to the Home Page</h1>
      </div>
    </>
  );
}
export default HomePage;
