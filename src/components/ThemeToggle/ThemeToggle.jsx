'use client';
import React, { useContext } from 'react';
import styles from './themetoggle.module.css'
import Image from 'next/image';
import { ThemeContext } from '@/context/ThemeContex';
const ThemeToggle = () => {
    const {theme, toggle} = useContext(ThemeContext)
    return (
        <div className={styles.container} onClick={toggle} style={theme === "dark" ? {background: "white"} : {background: "#0f1721"}}>
            <Image src={'/mon.png'} alt='' width={14} height={14}/>
            <div className={styles.ball} style={theme === "dark" ? {left: 1, background: "#0f1721"} : {right: 1, background: "white"}}></div>
            <Image src={'/sun.png'} alt='' width={14} height={14}/>
        </div>
    );
};

export default ThemeToggle;