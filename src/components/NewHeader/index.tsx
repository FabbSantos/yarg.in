import React from "react";
import SearchBar from "../SearchBar/index";
import styles from './header.module.css'

const Header = () => {
  return (
      <header className={styles.header}>
        <div className={styles.headerWrapper}>
            <div>
                <SearchBar/>
            </div>
            <nav>
                <a href="#">News</a>
                <a href="#">Features</a>
                <a href="#">Download</a>
                <a href="#">Roadmap</a>
                <a href="#">Community</a>
            </nav>
        </div>
    </header>
  )
}

export default Header;
