import React from "react";
import { Link } from "react-router-dom";
import defaultShoeImage from "../../img/images/sneaker__hero.jpg";

const DefaultShoe = ({
    id,
    name = "No name",
    color = "No color",
    price = 0,
    size = 0,
    imageSrc = defaultShoeImage,
}) => {
    return (
        <div className="custom-container">
            <div className="custom-shoe-item">
                {/* Використовуйте Link, якщо ви використовуєте react-router-dom */}
                <Link to={`/Catalog/${id}`}>
                    <img src={imageSrc} className="custom-shoe-image" alt="shoe" />
                </Link>
                {/* Або використовуйте a тег, якщо ви не використовуєте react-router-dom */}
                {/* <a href={`/catalog/${id}`}>
                    <img src={imageSrc} className="custom-shoe-image" alt="shoe" />
                </a> */}
                <h2 className="custom-shoe-name">{name}</h2>
                <h6 className="custom-shoe-text">Color: <text>{color} </text></h6>
                <h6 className="custom-shoe-text">Size: <text>{size}</text></h6>
                <h6 className="custom-shoe-text">Price: {price} $</h6>
            </div>
        </div>
    );
};

export default DefaultShoe;
