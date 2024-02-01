"use client"

import React, { useState } from 'react';

import { Menu, CircleUser } from 'lucide-react';
import styles from './user.module.css'

const NotificationDropdown = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    const user = "User";

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    return (
        <div className={styles.dropdown}>
            <button onClick={toggleDropdown} className={styles.Dropdownbutton}>
                <Menu size={24}/>
                <p>Hey, <span className={styles.strong}>{user}</span></p> 
                <CircleUser size={24} />
            </button>



            {/* {showDropdown && (
                <div className={styles.dropdownMenu}>
                    <a href="#">1</a>
                    <a href="#">2</a>
                    <a href="#">3</a>
                </div>
            )} */}
        </div>
    );
};

export default NotificationDropdown;
