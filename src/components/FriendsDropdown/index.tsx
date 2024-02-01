"use client"

import React, { useState } from 'react';

import { Users } from 'lucide-react';
import styles from './friends.module.css'

const FriendsDropdown = () => {
    let activeFriends = 25; 

    const [showDropdown, setShowDropdown] = useState(false);
    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    return (
        <div className={styles.dropdown}>
            <button onClick={toggleDropdown} className={styles.Dropdownbutton}>
                <Users size={22}/>
                {activeFriends}
            </button>
            

            {showDropdown && (
                <div className={styles.dropdownMenu}>
                    <a href="#">1</a>
                    <a href="#">2</a>
                    <a href="#">3</a>
                </div>
            )}
        </div>
    );
};

export default FriendsDropdown;
