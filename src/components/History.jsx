import dogImage from "../assets/history.png"; // Update the path if needed

const History = () => {
  return (
    <div className="bg-yellow-400 p-8 flex flex-col-reverse lg:flex-row items-center justify-between rounded-lg shadow-lg mx-auto min-h-screen">
      {/* Text Content */}
      <div className="lg:mr-6 text-center lg:text-right mt-8 lg:mt-0 px-4">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-orange-400 leading-tight font-cheeseburga">
          History of
        </h1>
        <p className="text-white text-5xl sm:text-6xl lg:text-8xl mt-4 font-cheeseburga">
          ALABAY
        </p>
        <p className="text-black mt-6 text-lg sm:text-xl max-w-lg font-bold">
          The Central Asian Shepherd Dog, also known as Alabay, has been a
          guardian of livestock and property for centuries. Originating from
          Central Asia, these dogs are renowned for their courage, strength, and
          loyalty.
        </p>
      </div>

      {/* Dog Image */}
      <div className="flex-shrink-0">
        <img
          src={dogImage}
          alt="Alabay Dog"
          className="w-[300px] sm:w-[400px] lg:w-[500px] object-contain"
        />
      </div>
    </div>
  );
};

export default History;
