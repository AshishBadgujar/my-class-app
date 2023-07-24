import React from 'react'

export default function CheckBoxes({ all, values, setValues }) {
    const handleCheckboxChange = (category) => {
        console.log("category=", category)
        if (values.includes(category)) {
            setValues(values.filter((cat) => cat !== category));
        } else {
            setValues([...values, category]);
        }
    };
    return (
        <ul className="mb-4">
            {all.map((item, index) =>
                <li className="py-1 px-3" key={index}>
                    <label className="flex items-center">
                        <input type="checkbox" className="form-checkbox"
                            value={item}
                            checked={values.includes(item)}
                            onChange={(e) => handleCheckboxChange(e.target.value)}

                        />
                        <span className="text-sm font-medium ml-2">{item}</span>
                    </label>
                </li>
            )}
        </ul>
    )
}
