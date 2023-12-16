import React, { createContext, useContext } from "react";
import shoe2 from './catalogPhotos/shoe2.jpg';
import shoe4 from './catalogPhotos/shoe4.jpg';
import shoe5 from './catalogPhotos/shoe5.jpg';
import shoe6 from './catalogPhotos/shoe6.jpg';
import shoe7 from './catalogPhotos/shoe7.jpg';

const SneakerDataContext = createContext();

export const useSneakerData = () => {
    const context = useContext(SneakerDataContext);
    if (!context) {
        throw new Error('useSneakerData must be used within a SneakerDataProvider');
    }
    return context;
};

export const SneakerDataProvider = ({ children }) => {
    const sneakerData = [
        {
            id: "1",
            collection: "Cool Collection 1",
            description: "Introducing our Fantastic Collection 1 sneakers, a perfect fusion of style and comfort. Elevate your streetwear with these statement-making kicks featuring eye-catching designs and vibrant colors. Crafted with precision and luck. Price 160$",
            button: "Add to Cart",
            img: shoe4,
        },
        {
            id: "2",
            collection: "Cool Collection 2",
            description: "Introducing our Fantastic Collection 2 sneakers, a perfect fusion of style and comfort. Elevate your streetwear with these statement-making kicks featuring eye-catching designs and vibrant colors. Crafted with precision and luck. Price 110$",
            button: "Add to Cart",
            img: shoe2,
        },
        {
            id: "3",
            collection: "Cool Collection 3",
            description: "Introducing our Fantastic Collection 3 sneakers, a perfect fusion of style and comfort. Elevate your streetwear with these statement-making kicks featuring eye-catching designs and vibrant colors. Crafted with precision and luck. Price 160$",
            button: "Add to Cart",
            img: shoe6,
        },
        {
            id: "4",
            collection: "Cool Collection 4",
            description: "Introducing our Fantastic Collection 4 sneakers, a perfect fusion of style and comfort. Elevate your streetwear with these statement-making kicks featuring eye-catching designs and vibrant colors. Crafted with precision and luck. Price 100$",
            button: "Add to Cart",
            img: shoe4,
        },
        {
            id: "5",
            collection: "Cool Collection 5",
            description: "Introducing our Fantastic Collection 5 sneakers, a perfect fusion of style and comfort. Elevate your streetwear with these statement-making kicks featuring eye-catching designs and vibrant colors. Crafted with precision and luck. Price 132$",
            button: "Add to Cart",
            img: shoe5,
        },
        {
            id: "6",
            collection: "Cool Collection 6",
            description: "Introducing our Fantastic Collection 6 sneakers, a perfect fusion of style and comfort. Elevate your streetwear with these statement-making kicks featuring eye-catching designs and vibrant colors. Crafted with precision and luck. Price 139$",
            button: "Add to Cart",
            img: shoe6,
        },
        {
            id: "7",
            collection: "Cool Collection 7",
            description: "Introducing our Fantastic Collection 7 sneakers, a perfect fusion of style and comfort. Elevate your streetwear with these statement-making kicks featuring eye-catching designs and vibrant colors. Crafted with precision and luck. Price 161$",
            button: "Add to Cart",
            img: shoe7,
        }
    ];

    return (
        <SneakerDataContext.Provider value={sneakerData}>
            {children}
        </SneakerDataContext.Provider>
    );
};

export default SneakerDataProvider;
