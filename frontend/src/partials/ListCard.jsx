import React, { useState } from 'react'
import Modal from '../components/Modal'
import FileUploadModal from '../components/FileUploadModal';
import Card from '../components/Card';

export default function ListCard({ list, setList, title }) {
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);

    const handleAddSchool = (url, name) => {
        if (name.trim() !== '') {
            setList((items) => [...items, { url, name }]);
            closeModal();
        }
    };
    return (
        <>
            {modalOpen && <FileUploadModal closeModal={closeModal} onSave={handleAddSchool} title={title} />}
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
                    {list.map((item, index) => (
                        <Card key={index} url={item.url} name={item.name} />
                    ))}
                </div>
            </div>
        </>
    )
}
