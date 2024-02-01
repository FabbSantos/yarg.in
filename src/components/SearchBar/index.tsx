"use client"
import React, { useState } from 'react';
import { Search } from 'lucide-react';
import styles from './searchBar.module.css'

const SearchBar = () => {
    const [searchInput, setSearchInput] = useState("");

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setSearchInput(e.target.value);
    };

    return (
        <div style={{ position: 'relative', display: 'inline-block' }}>
            <input
                type="search"
                placeholder="Search for a post, user, band, song..."
                onChange={handleChange}
                value={searchInput}
                className={styles.input}
                id='search'
            />
            <button className={styles.search} type='submit'>
                <Search size={24} />
            </button>
        </div>
    );
};

export default SearchBar;
