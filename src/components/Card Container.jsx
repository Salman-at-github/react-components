// CardContainer.js

import React from 'react';
import Card from './Card';

const CardContainer = () => {
  // Sample data for each card
  const cardsData = [
    {
      title: 'Kitty Basket',
      price: 29.99,
      detail: 'Lorem ipsum dolor sit amet.',
      imageUrl: 'https://placekitten.com/400/300', // Replace with your image URL
    },
    {
      title: 'Product 1',
      price: 29.99,
      detail: 'Lorem ipsum dolor sit amet.',
      imageUrl: 'https://rukminim2.flixcart.com/image/612/612/k0y6cnk0/t-shirt/h/z/v/xl-10031529-here-now-original-imafkg5kdzwgwuqg.jpeg?q=70', // Replace with your image URL
    },
    {
      title: 'Product 1',
      price: 29.99,
      detail: 'Lorem ipsum dolor sit amet.',
      imageUrl: 'https://images.unsplash.com/photo-1709028942660-f8525396a90d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8', // Replace with your image URL
    },
    {
      title: 'Product 1',
      price: 29.99,
      detail: 'Lorem ipsum dolor sit amet.',
      imageUrl: 'https://placekitten.com/400/300', // Replace with your image URL
    },
    {
      title: 'Product 1',
      price: 29.99,
      detail: 'Lorem ipsum dolor sit amet.',
      imageUrl: 'https://placekitten.com/400/300', // Replace with your image URL
    },
    {
      title: 'Product 1',
      price: 29.99,
      detail: 'Lorem ipsum dolor sit amet.',
      imageUrl: 'https://placekitten.com/400/300', // Replace with your image URL
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 sm:gap-8 bg-gray-300 gap-1 sm:px-20 py-20">
      {cardsData.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
  );
};

export default CardContainer;
