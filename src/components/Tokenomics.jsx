import CharacterImage from "../assets/tokenomics.png"; // Update this with your image path

const Tokenomics = () => {
  return (
    <div className="relative flex items-center justify-center min-h-screen bg-white overflow-hidden px-4 py-12">
      {/* Top and Bottom Yellow Background */}
      <div className="absolute inset-0 h-full w-full bg-yellow-400 transform skew-y-12 origin-top z-0"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 md:gap-12 max-w-6xl mx-auto">
        {/* Text Section */}
        <div className="text-center md:text-left space-y-6 max-w-xs sm:max-w-sm">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold font-cheeseburga my-8 md:my-12 text-white">
            TOKENOMICS
          </h1>
          <div className="space-y-4">
            <div className="bg-gray-900 text-white px-4 py-2 rounded-lg shadow-md">
              <p className="text-sm">LIQUIDITY</p>
              <p className="text-lg font-bold">LOCKED</p>
            </div>
            <div className="bg-gray-900 text-white px-4 py-2 rounded-lg shadow-md">
              <p className="text-sm">CONTRACT</p>
              <p className="text-lg font-bold">RENOUNCED</p>
            </div>
            <div className="bg-gray-900 text-white px-4 py-2 rounded-lg shadow-md">
              <p className="text-sm">TAXES</p>
              <p className="text-lg font-bold">0%</p>
            </div>
          </div>
        </div>

        {/* Character Image */}
        <div className="flex-shrink-0 w-full max-w-xs sm:max-w-md md:max-w-lg">
          <img
            src={CharacterImage}
            alt="Character"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Tokenomics;
