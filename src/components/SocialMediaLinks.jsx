import { FaTwitter, FaTelegram } from "react-icons/fa"; // Import icons
import socialmedia from "../assets/socialmedia.png";

const SocialMediaLinks = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-center min-h-screen bg-gray-100 p-8">
      {/* Container */}
      <div className="max-w-2xl flex flex-col items-center md:items-start space-y-6 md:space-y-0 md:space-x-8 md:flex-row">
        {/* Left Section: Text & Links Card */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold tracking-[0.15em] font-cheeseburga text-orange-500 mb-6">
            SOCIAL MEDIA LINKS
          </h1>

          {/* Social Links Card */}
          <div className="bg-gradient-to-r from-blue-400 to-blue-600 p-6 rounded-xl shadow-lg w-64 mx-auto md:mx-0 text-white">
            <ul className="space-y-4">
              <li className="flex items-center space-x-4">
                <FaTwitter className="text-2xl" />
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-medium hover:underline"
                >
                  Twitter Link
                </a>
              </li>
              <li className="flex items-center space-x-4">
                <FaTelegram className="text-2xl" />
                <a
                  href="https://telegram.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-medium hover:underline"
                >
                  Telegram Link
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Section: Dog Image */}
        <div className="w-full md:w-auto">
          <img
            src={socialmedia} // Replace with your dog image path
            alt="Dog holding phone"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default SocialMediaLinks;
