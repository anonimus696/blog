import React from 'react'
import styles from './page.module.scss'

function Layout({ children }) {
    return (
        <div>
            <div className={styles.mainTitle}>Our works</div>
            {children}
        </div>
    )
}

export default Layout