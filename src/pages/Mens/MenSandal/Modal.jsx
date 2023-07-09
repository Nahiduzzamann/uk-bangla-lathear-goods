import { FaTimes, FaInfoCircle, FaRuler } from "react-icons/fa";
import Rating from "react-rating";

const Modal = ({ item, closeModal }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-10 bg-black bg-opacity-70">
      <div className="bg-white rounded-lg shadow-lg p-8 mx-4 max-w-3xl w-full">
        <button
          className="absolute top-10 right-10 text-white hover:text-gray-700"
          onClick={closeModal}
        >
          <FaTimes className="h-10 w-10" />
        </button>
        <div className="flex flex-wrap">
          <img
            src={item.picture}
            alt={item.name}
            className="w-48 h-48 object-fill rounded-md mr-8"
          />
          <div>
            <h2 className="text-2xl font-semibold mb-2">{item.name}</h2>
            <p className="text-gray-600 text-xl mb-4">
              ${item.price}
            </p>
            <Rating initialRating={item.ratings} readonly />
            <p className="mb-4">
              <span className="mr-2">
                <FaInfoCircle className="inline-block w-5 h-5 text-gray-500" />
              </span>
              {item.description}
            </p>
            <p className="mb-4">
              <span className="mr-2">
                <FaRuler className="inline-block w-5 h-5 text-gray-500" />
              </span>
              {item.measurement}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
