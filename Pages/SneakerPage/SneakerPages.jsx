// SneakerPages.jsx
import React from "react";
import { Link } from "react-router-dom";
import SneakerPage from "./SneakerPage";
import sneakerData from "./SneakerData"; // Adjust the path

const SneakerPages = () => {
    return (
        <div>
            {sneakerData.map((sneaker) => (
                <Link key={sneaker.id} to={`/Catalog/${sneaker.id}`}>
                    <SneakerPage sneakerData={sneaker} />
                </Link>
            ))}
        </div>
    );
};

export default SneakerPages;
