import React from 'react';

const Card = ({ url, name }) => {
    return (
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <img className="rounded-t-lg w-full h-48 object-cover" src={url} alt="test" />
            </a>
            <div className="p-5">
                <a href="#">
                    <h5 className="text-xl tracking-tight text-gray-900 dark:text-white">{name}</h5>
                </a>
            </div>
        </div>

    );
};

export default Card;
