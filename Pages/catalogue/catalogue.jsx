import React, {useEffect} from "react";
import CatalogSearch from "../../components/catalogueSearch/catalogueSearch";
import ShoeItems from "../../components/shoeItems/shoeItems";
import '../../components/catalogueSearch/catalogueSearch.css';
import { useState } from "react";
import './../../components/shoeItems/defaultShoe.css';
import './../../styles/common.css'


// import shoe2 from './catalogPhotos/shoe2.jpg';
// import shoe4 from './catalogPhotos/shoe4.jpg';
// import shoe5 from './catalogPhotos/shoe5.jpg';
// import shoe6 from './catalogPhotos/shoe6.jpg';
// import shoe7 from './catalogPhotos/shoe7.jpg';


// const shoeData = [
//     {
//         id: 1,
//         name: 'PUMA',
//         color: 'black',
//         price: 160,
//         size: 39,
//         imageSrc: shoe4,
//     },
//     {
//         id: 2,
//         name: 'Nike',
//         color: 'red',
//         price: 110,
//         size: 41,
//         imageSrc: shoe2,
//     },
//     {
//         id: 3,
//         name: 'Nike',
//         color: 'white',
//         price: 160,
//         size: 45,
//         imageSrc: shoe6,
//     },
//     {
//         id: 4,
//         name: 'Nike',
//         color: 'grey',
//         price: 100,
//         size: 38,
//         imageSrc: shoe4,
//     },
//     {
//         id: 5,
//         name: 'Lacoste',
//         color: 'blue',
//         price: 132,
//         size: 42,
//         imageSrc: shoe5,
//     },
//     {
//         id: 6,
//         name: 'Lacoste',
//         color: 'olive',
//         price: 139,
//         size: 41,
//         imageSrc: shoe6,
//     },
//     {
//         id: 7,
//         name: 'Adidas',
//         color: 'yell',
//         price: 161,
//         size: 40,
//         imageSrc: shoe7,
//     },
// ];

function Catalog (){
    // const [data, setData] = useState(UserList);
    const [data, setData] = useState([]);

    useEffect(() => {
        // Fetch data from the API
        fetch('http://localhost:3001/api/sneakers', {
            method: 'get',
            headers: new Headers(
                {
                    "Origin" : "ori"
                }
            )
        })
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error('Error:', error));
    }, []);


    return(
        <div className="Home">
            <CatalogSearch data={data} setData={setData} />
            <ShoeItems data={data} />
        </div>
    )
}

export default Catalog;