import React, { useState } from 'react'
import { uploadToCloudinary } from '../utils/Utils';

export default function UploadImg({ title, closeModal, onSave }) {
    const [fileName, setFileName] = useState('');
    const [selectedFile, setSelectedFile] = useState(null);

    const handleNameChange = (e) => {
        setFileName(e.target.value);

    };

    const handleFileChange = async (e) => {
        const file = e.target.files[0];
        setSelectedFile(file);
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        // Handle form submission here, for example, you can use the 'fileName' and 'selectedFile' state values.
        console.log('File Name:', fileName);
        console.log('Selected File:', selectedFile);
        let url = await uploadToCloudinary(selectedFile)
        if (url) {
            onSave(url, fileName)
        }
        console.log(url)
    };

    return (
        <div className='p-2'>
            <h2 className="text-xl font-bold mb-4">Upload {title}</h2>
            <form onSubmit={handleFormSubmit} encType="multipart/form-data">
                <div className="mb-4">
                    <label htmlFor="fileName" className="block text-gray-700 font-bold mb-2">
                        {title} Name
                    </label>
                    <input
                        type="text"
                        id="fileName"
                        value={fileName}
                        onChange={handleNameChange}
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                        placeholder="Enter file name"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="imgFile" className="block text-gray-700 font-bold mb-2">
                        Image
                    </label>
                    <input
                        type="file"
                        id="imgFile"
                        accept="image/*"
                        onChange={handleFileChange}
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                    />
                </div>

                <button
                    type="submit"
                    className="btn-sm mb-4 bg-blue-500 text-white font-bold px-4 py-2 rounded-lg focus:outline-none focus:shadow-outline hover:bg-blue-600"
                >
                    Upload
                </button>
                <button
                    onClick={closeModal}
                    className="btn-xs mb-4 ml-2 bg-gray-300 text-gray-800 font-bold px-4 py-2 rounded-lg focus:outline-none focus:shadow-outline hover:bg-gray-400"
                >
                    Cancel
                </button>
            </form>
            {selectedFile &&
                <div>
                    <img className='rounded-t-lg w-full h-48 object-cover' src={URL.createObjectURL(selectedFile)} alt="nothing" />
                </div>
            }
        </div>
    );
}

