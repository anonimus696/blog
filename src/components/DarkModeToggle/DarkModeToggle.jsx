import React, { useContext, useState } from 'react'
import styles from './page.module.scss'
import { ThemeContext } from '../../context/ThemeContext'


function DarkModeToggle() {
    const { toggle, mode } = useContext(ThemeContext);

    return (
        <div className={styles.container} onClick={toggle}>
            <div className={styles.icon}>☀️</div>
            <div className={styles.icon}>🌙</div>
            <div className={`${styles.ball}`} style={mode === 'light' ? { transform: 'translate(135%)' } : { transform: 'translate(10%)' }} />
        </div>
    )
}

export default DarkModeToggle