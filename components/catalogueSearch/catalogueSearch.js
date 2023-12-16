import React, { useState, useEffect } from 'react';
import SortOptions from './SortOptions';

function CatalogSearch({ setData }) {
    const [sortType, setSortType] = useState('price-low-to-high');
    const [searchTerm, setSearchTerm] = useState('');
    const [additionalValues, setAdditionalValues] = useState([]);

    useEffect(() => {
        fetchAdditionalValues();
    }, []);

    const fetchAdditionalValues = async () => {
        try {
            const response = await fetch('http://localhost:3001/api/additional-values');
            const data = await response.json();
            setAdditionalValues(data);
        } catch (error) {
            console.error('Error fetching additional values:', error);
        }
    };

    const handleSortChange = (event) => {
        setSortType(event.target.value);
        sortData();
    };

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
        sortData();
    };

    const sortData = async () => {
        try {
            const apiUrl = `http://localhost:3001/api/sneakers?sort=${sortType}&search=${searchTerm}`;
            const response = await fetch(apiUrl);
            const data = await response.json();
            setData(data);
        } catch (error) {
            console.error('Error fetching filtered data:', error);
        }
    };

    return (
        <div className="catalog-search">
            <label htmlFor="sort">Sort by:</label>
            <SortOptions
                handleSortChange={handleSortChange}
                sortType={sortType}
                additionalValues={additionalValues}
            />

            <label htmlFor="search">Search:</label>
            <input
                type="text"
                id="search"
                placeholder="Search by name"
                value={searchTerm}
                onChange={handleSearchChange}
            />
        </div>
    );
}

export default CatalogSearch;
