/* eslint-disable react/prop-types */
const Card = ({ title, imageSrc, bgColor }) => {
  return (
    <div
      className={`relative flex flex-col items-center p-4 w-64 h-96 ${bgColor} rounded-lg shadow-lg`}
    >
      <h3 className="text-xl font-bold mb-2 text-center text-white">{title}</h3>
      <img src={imageSrc} alt={title} className="w-[600px] h-[800px] mb-4" />
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent rounded-b-lg" />
    </div>
  );
};

export default Card;
