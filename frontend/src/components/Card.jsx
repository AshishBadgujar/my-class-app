import React from 'react';
import { Link } from 'react-router-dom'
const Card = ({ url, name }) => {
    return (
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <Link to={`/send-wp/${name}`}>
                <img className="rounded-t-lg w-full h-48 object-cover" src={url} alt="test" />
            </Link>
            <div className="p-5">
                <Link to={`/send-wp/${name}`}>
                    <h5 className="text-xl tracking-tight text-gray-900 dark:text-white">{name}</h5>
                </Link>
            </div>
        </div>

    );
};

export default Card;
