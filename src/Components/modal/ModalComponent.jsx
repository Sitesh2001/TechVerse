import React, { useState } from 'react';
import Mymodal from './Mymodal'; // Update the path as per your file structure

const ModalComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <button
        onClick={openModal}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Open Modal
      </button>
      <Mymodal isOpen={isModalOpen} onClose={closeModal}>
        {/* Content for your modal */}
        <div>
          <h1 className="text-lg font-bold mb-2">Cart is Empty</h1>
          <p>You have to log in for that</p>
        </div>
      </Mymodal>
    </div>
  );
};

export default ModalComponent;
