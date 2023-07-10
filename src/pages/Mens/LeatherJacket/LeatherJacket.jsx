import { useState } from "react";
import menJacketsData from "./LeatherJacketData";
import Modal from "../../../components/Modal";



const MenJackets = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  // Pagination
  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const currentData = menJacketsData.slice(firstIndex, lastIndex);

  const handleDetails = (item) => {
    setSelectedItem(item);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Men Leather Jackets</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {currentData.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-lg shadow-md p-4 relative "
          >
            <img
              src={item.picture}
              alt={item.name}
              className="w-full h-48 md:h-60 lg:h-72 xl:h-80 object-fill rounded-md mb-4"
            />
            <div className="h-40">
              <h2 className="text-xl font-semibold mb-2">{item.name}</h2>
              <p className="text-gray-600 mb-4">${item.price}</p>
            </div>
            <button
              className="bg-[#493120] hover:bg-[#9E683E] text-white font-bold py-2 px-4 rounded absolute bottom-4 left-4"
              onClick={() => handleDetails(item)}
            >
              Details
            </button>
          </div>
        ))}
      </div>

      {showModal && <Modal item={selectedItem} closeModal={closeModal} />}

      <div className="flex justify-center mt-8">
        <nav className="flex items-center">
          <button
            className={`px-3 py-2 rounded-l ${
              currentPage === 1
                ? "bg-gray-300"
                : "bg-gray-500 text-white hover:bg-gray-600"
            }`}
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Prev
          </button>
          {Array.from({
            length: Math.ceil(menJacketsData.length / itemsPerPage),
          }).map((item, index) => (
            <button
              key={index}
              className={`px-3 py-2 ${
                currentPage === index + 1
                  ? "bg-blue-500 text-white"
                  : "bg-gray-300"
              } hover:bg-blue-600`}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </button>
          ))}
          <button
            className={`px-3 py-2 rounded-r ${
              currentPage ===
              Math.ceil(menJacketsData.length / itemsPerPage)
                ? "bg-gray-300"
                : "bg-gray-500 text-white hover:bg-gray-600"
            }`}
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={
              currentPage ===
              Math.ceil(menJacketsData.length / itemsPerPage)
            }
          >
            Next
          </button>
        </nav>
      </div>
    </div>
  );
};

export default MenJackets;
