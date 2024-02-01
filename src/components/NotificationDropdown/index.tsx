"use client"

import React, { useState } from 'react';

import { Bell } from 'lucide-react';
import styles from './dropdown.module.css'

const NotificationDropdown = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    let NotificationCount = 10;

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    return (
        <div className={styles.dropdown}>
            <button onClick={toggleDropdown} className={styles.Dropdownbutton}>
                <Bell size={22}/>
                {NotificationCount}
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

export default NotificationDropdown;
