import React, { useEffect, useState } from 'react'
import DropdownFilter from '../components/DropdownFilter'

export default function SendWp() {
    const [selectedSchools, setSelectedSchools] = useState([])
    const [selectedStds, setSelectedStds] = useState([])
    const [search, setSearch] = useState('')

    const data = [
        {
            id: '1',
            name: "ashis",
            std: "1st",
            school: "skn",
            mobile: "899345869"
        },
        {
            id: '2',
            name: "vishu",
            std: "2nd",
            school: "shinde",
            mobile: "899345869"
        },
    ]
    const [rows, setRows] = useState(data)
    const [selectedRows, setSelectedRows] = useState([])

    const handleSelected = (id) => {
        let row = rows.find(item => item.id == id)
        if (selectedRows.includes(row)) {
            setSelectedRows(selectedRows.filter(i => i != row))
        } else {
            setSelectedRows([...selectedRows, row])
        }
    }
    const handleSearch = (text) => {
        setSearch(text)
        let list = data.filter(item => item.name.toLowerCase().includes(text.toLowerCase()))
        setRows(list)

    }
    const handleCheckAll = () => {
        setSelectedRows(rows)
    }
    const onSend = () => {
        console.log("selectedRows=", selectedRows)
    }

    useEffect(() => {
        if (selectedSchools.length > 0 || selectedStds.length > 0) {
            setRows(data.filter(item => (selectedSchools.length > 0 ? selectedSchools.includes(item.school) : true) && (selectedStds.length > 0 ? selectedStds.includes(item.std) : true)))
        }
    }, [selectedSchools, selectedStds])

    return (
        <div className="flex flex-col">
            <div className="flex justify-between py-3 p-4">
                <div className="flex items-center space-x-2">
                    <div className="relative">
                        <DropdownFilter align="right"
                            selectedSchools={selectedSchools}
                            selectedStds={selectedStds}
                            setSelectedSchools={setSelectedSchools}
                            setSelectedStds={setSelectedStds}
                        />
                    </div>
                </div>
                <div className="relative max-w-xs">
                    <label htmlFor="hs-table-search" className="sr-only" >
                        Search
                    </label>
                    <input
                        type="text"
                        name="hs-table-search"
                        id="hs-table-search"
                        value={search}
                        onChange={(e) => handleSearch(e.target.value)}
                        className="block w-full p-2 pl-10 text-sm border-gray-200 rounded-md focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
                        placeholder="Search..."
                    />
                    <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                        <svg
                            className="h-3.5 w-3.5 text-gray-400"
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                        >
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                        </svg>
                    </div>
                </div>

            </div>

            <div className="px-4 w-full inline-block align-middle">
                <div className="overflow-auto border rounded-lg">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th scope="col" className="py-3 pl-4">
                                    <div className="flex items-center h-5">
                                        <input
                                            id="checkbox-all"
                                            type="checkbox"
                                            onChange={handleCheckAll}
                                            className="text-blue-600 border-gray-200 rounded focus:ring-blue-500"
                                        />
                                        <label
                                            htmlFor="checkbox"
                                            className="sr-only"
                                        >
                                            Checkbox
                                        </label>
                                    </div>
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                >
                                    Name
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                >
                                    STD
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                >
                                    School
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                >
                                    Mobile
                                </th>

                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 bg-gray-50">
                            {rows.map((item, index) =>
                                <tr key={index}>
                                    <td className="py-3 pl-4">
                                        <div className="flex items-center h-5">
                                            <input
                                                type="checkbox"
                                                value={item.id}
                                                onChange={(e) => handleSelected(e.target.value)}
                                                className="text-blue-600 border-gray-200 rounded focus:ring-blue-500"
                                            />
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                                        {item.name}
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                        {item.std}
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                        {item.school}
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                        {item.mobile}
                                    </td>

                                </tr>
                            )}

                        </tbody>
                    </table>
                </div>
                <button
                    type="button"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                    className="my-2 inline-block flex rounded px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
                    style={{ backgroundColor: "#128c7e" }}
                    onClick={onSend}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 mr-2"
                        fill="currentColor"
                        viewBox="0 0 24 24">
                        <path
                            d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                    </svg>
                    Send to whatsApp
                </button>
            </div>

        </div>
    )
}
