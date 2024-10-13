import homeImage from "../assets/home.png";
import CardContainer from "../components/CardContainer";
import Contents from "../components/Contents";
import Games from "../components/Games";
import GamesPreviews from "../components/GamesPreview";
import History from "../components/History";
import Merch from "../components/Merch";
import RoadMap from "../components/RoadMap";
import SocialMediaLinks from "../components/SocialMediaLinks";
import Tokenomics from "../components/Tokenomics";
import Vision from "../components/Vision";

const Home = () => {
  return (
    <>
      {/* Background container with the image */}
      <div
        style={{
          backgroundImage: `url(${homeImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed", // Fixed background
          height: "100vh", // Full viewport height
          width: "100vw", // Full width
          position: "fixed", // Fix the background to the screen
          top: 0,
          left: 0,
          zIndex: -1, // Position it behind other elements
        }}
      ></div>

      {/* Main content area with horizontal margin */}
      <div
        className="mx-12 pt-20 relative z-10 overflow-y-auto mt-[520px]"
        style={{ minHeight: "100vh" }}
      >
        <div className="bg-white p-5 shadow-lg rounded-lg max-w-[1350px] mx-auto">
          <History />
          <Contents />
          <Vision />
          <RoadMap />
          <CardContainer />
          <Tokenomics />
          <Merch />
          <Games />
          <GamesPreviews />
          <SocialMediaLinks />
        </div>
      </div>
    </>
  );
};

export default Home;
