import React, { useState } from 'react';

function Modal({
  closeModal,
  onSave,
  title
}) {
  const [newSchoolName, setNewSchoolName] = useState('');

  return (
    <>
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="fixed inset-0 flex items-center justify-center z-10">
        <div className="bg-white rounded-lg p-4 shadow-md">
          <p className="text-xl mb-4">Add {title}</p>
          <input
            type="text"
            value={newSchoolName}
            onChange={(e) => setNewSchoolName(e.target.value)}
            className="w-full px-3 py-2 mb-4 border rounded-lg focus:outline-none focus:border-blue-500"
            placeholder={`Enter ${title}`}
          />
          <div className="flex justify-end">
            <button
              onClick={() => onSave(newSchoolName)}
              className="bg-blue-500 text-white font-bold px-4 py-2 rounded-lg focus:outline-none focus:shadow-outline hover:bg-blue-600"
            >
              Save
            </button>
            <button
              onClick={closeModal}
              className="ml-2 bg-gray-300 text-gray-800 font-bold px-4 py-2 rounded-lg focus:outline-none focus:shadow-outline hover:bg-gray-400"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
