import React from "react";

import DefaultShoe from "./defaultShoe";


const ShoeItems = ({ data = [] }) => {
    return (
        <div className="wrapper">
            <div className="inner">
                {data.map(({ id, name, color, price, size, imageSrc }, idx) => (
                    <DefaultShoe
                        id={id}
                        name={name}
                        color={color}
                        price={price}
                        size={size}
                        imageSrc={imageSrc}
                    />
                ))}
            </div>
        </div>
    );
};

export default ShoeItems;