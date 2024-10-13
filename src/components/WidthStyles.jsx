/* eslint-disable react/prop-types */

const WithStyles = ({ headline, image }) => {
  return (
    <div className="flex flex-col items-center p-4 border rounded-lg shadow-lg">
      <img
        src={image}
        alt={headline}
        className="w-full h-40 object-cover rounded-t-lg"
      />
    </div>
  );
};

export default WithStyles;
