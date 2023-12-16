// SneakerPage.jsx
import React from "react";
import IdDetails from "../../components/idDetail/IdDetails";

const SneakerPage = ({ sneakerData }) => {
    return (
        <div>
            <h2>Sneaker Page for ID: {sneakerData.id}</h2>
            <IdDetails
                collection={sneakerData.collection}
                description={sneakerData.description}
                button={sneakerData.button}
                img={sneakerData.img}
            />
        </div>
    );
};

export default SneakerPage;
