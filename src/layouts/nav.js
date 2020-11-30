import { Link } from "gatsby"
import React from 'react'
import styles from '../css/nav.module.css'

const Nav = ({ title }) => (
    <header className={styles.header}>
        <h1 className={styles["logo"]}>
            <Link to="/">
                <img src={'./logo.png'} alt="Logo" />
                <span>{title}</span>
            </Link>
        </h1>
        <input type="checkbox" id="nav-toggle" className={styles["navtoggle"]} />
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><a href="https://rycastaneda.github.io/cv.html">CV</a></li>
            </ul>
        </nav>
        <label htmlFor="nav-toggle" className={styles["navtogglelabel"]}>
            <span></span>
        </label>
    </header>
)

export default Nav
