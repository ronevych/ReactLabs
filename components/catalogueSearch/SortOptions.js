import React from 'react';

const SortOptions = ({ handleSortChange, sortType, additionalValues }) => {
    const sortOptions = [
        { value: 'price-low-to-high', label: 'Price (Low to High)' },
        { value: 'price-high-to-low', label: 'Price (High to Low)' },
        { value: 'size-low-to-high', label: 'Size (High to Low)' },
        { value: 'size-high-to-low', label: 'Size (Low to High)' },
    ];

    return (
        <select id="sort" onChange={handleSortChange} value={sortType}>
            {sortOptions.map((option, index) => (
                <option key={option.value} value={option.value}>
                    {option.label + additionalValues[index]}
                </option>
            ))}
        </select>
    );
};

export default SortOptions;
