import React from 'react'
import styles from './button.module.scss'
import Link from 'next/link'

function Button({ url, text }) {
    return (

        <Link href={url}>
            <button className={`${styles.container} button`}>{text}</button>
        </Link>
    )
}

export default Button