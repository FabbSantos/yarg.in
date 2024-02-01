"use client"

import React, { useState } from 'react';

const SearchBar = () => {
    const [searchInput, setSearchInput] = useState("");

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setSearchInput(e.target.value);
    };

    return (
        <input
            type="search"
            placeholder="Search for a post, user, band, song..."
            onChange={handleChange}
            value={searchInput}
        />
    );
};

export default SearchBar;
