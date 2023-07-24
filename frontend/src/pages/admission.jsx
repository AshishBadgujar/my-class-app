import React, { useState } from 'react'

export default function Admission() {
    const [data, setData] = useState({

    })
    return (
        <div className="container mx-auto">
            <h1 className="text-2xl text-center font-bold mt-6">Admission Form</h1>
            <form className="px-8 py-6">
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
                    <input type="text" id="name" name="name" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500" />
                </div>
                <div className="mb-4">
                    <label htmlFor="standard" className="block text-gray-700 font-bold mb-2">Standard</label>
                    <select id="standard" name="standard" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500">
                        <option value="1">1st Standard</option>
                        <option value="2">2nd Standard</option>
                        <option value="3">3rd Standard</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label htmlFor="school" className="block text-gray-700 font-bold mb-2">School</label>
                    <select id="school" name="school" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500">
                        <option value="school1">School 1</option>
                        <option value="school2">School 2</option>
                        <option value="school3">School 3</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label htmlFor="mobile" className="block text-gray-700 font-bold mb-2">Mobile No</label>
                    <input type="text" id="mobile" name="mobile" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500" />
                </div>
                <div className="flex items-center justify-center">
                    <button type="submit" className="bg-blue-500 text-white font-bold px-4 py-2 rounded-lg focus:outline-none focus:shadow-outline hover:bg-blue-600">
                        Submit
                    </button>
                </div>
            </form>

        </div>
    )
}
