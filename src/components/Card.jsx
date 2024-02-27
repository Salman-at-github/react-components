import React from 'react';

const Card = ({ title, price, detail, imageUrl }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md p-4 w-full hover:scale-105 cursor-pointer transition-transform duration-200">
      <img className="h-52 object-contain mx-auto" src={imageUrl} alt={title}/>
      <div className="mt-2">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <p className=" font-bold mt-2">${price}</p>
        <p className="text-gray-700 mt-2">{detail}</p>
      </div>
    </div>
  );
};

export default Card;
