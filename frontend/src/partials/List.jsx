import React, { useState } from 'react'
import Modal from '../components/Modal'

export default function List({ list, setList, title }) {
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);

    const handleAddSchool = (newSchoolName) => {
        if (newSchoolName.trim() !== '') {
            setList((prevSchools) => [...prevSchools, newSchoolName]);
            closeModal();
        }
    };
    return (
        <>
            {modalOpen && <Modal closeModal={closeModal} onSave={handleAddSchool} title={title} />}
            <div className="container mx-auto p-8">
                <div className="flex justify-between items-center mb-4">
                    <h1 className="text-xl font-bold">{title} List</h1>
                    <button
                        onClick={openModal}
                        className="bg-blue-500 text-white font-bold px-4 py-2 rounded-lg focus:outline-none focus:shadow-outline hover:bg-blue-600"
                    >
                        Add {title}
                    </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {list.map((school, index) => (
                        <div key={index} className="bg-white shadow-md rounded-lg p-4">
                            <h2 className="text-lg">{school}</h2>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
