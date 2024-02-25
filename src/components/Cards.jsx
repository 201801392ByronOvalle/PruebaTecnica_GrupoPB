import React from 'react';
import './styles/Cards.css';

const pizzasList = [
    {
        id: 0,
        title: "pizza 1",
        url: "https://pruebaspaginas.s3.amazonaws.com/recursos-prueba-tecnica/pizza.jpg",
    },
    {
        id: 1,
        title: "pizza 2",
        url: "https://pruebaspaginas.s3.amazonaws.com/recursos-prueba-tecnica/pizza.jpg",
    },
    {
        id: 2,
        title: "pizza 3",
        url: "https://pruebaspaginas.s3.amazonaws.com/recursos-prueba-tecnica/pizza.jpg",
    },
    {
        id: 3,
        title: "pizza 4",
        url: "https://pruebaspaginas.s3.amazonaws.com/recursos-prueba-tecnica/pizza.jpg",
    },
];

const Cards = () => {
    return (
        <div>
            <hr className="divider-line" /> {/* Línea de división */}
            <div className="cards-container">
                {pizzasList.map(pizza => (
                    <div key={pizza.id} className="card">
                        <img src={pizza.url} alt={pizza.title} className="card-image" />
                        <h2 className="card-title">{pizza.title}</h2>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Cards;