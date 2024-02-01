"use client"

import React, { Children, useState } from "react";
import SearchBar from "../SearchBar/index";
import styles from './header.module.css'
import NotificationDropdown from "../NotificationDropdown";
import FriendsDropdown from "../FriendsDropdown";
import UserProfile from "../UserProfile";

const Header = () => {

  const [isLogged, setIsLogged] = useState(true)

  return (
      <header className={styles.header}>
        <div className={styles.headerWrapper}>
            <div>
                <SearchBar/>
            </div>
            <nav className={styles.nav}>
                <a href="#">News</a>
                <a href="#">Features</a>
                <a href="#">Download</a>
                <a href="#">Roadmap</a>
                <a href="#">Community</a>

                {
                  isLogged &&
                  <>
                        <NotificationDropdown/>
                        <FriendsDropdown/>
                        <UserProfile/>
                  </>
                }
            </nav>
        </div>
    </header>

  )
}

export default Header;
