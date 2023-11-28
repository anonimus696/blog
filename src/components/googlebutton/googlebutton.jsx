'use client'
import React from 'react'
import styles from './googlebutton.module.scss'
import Image from 'next/image'
import { signIn } from 'next-auth/react'



function Googlebutton() {
    return (
        <button className={`${styles.buttonred} button`} onClick={() => signIn('google')}>
            <Image src='/google.svg' width={20} height={20} />
            <span className={styles.text}>Login with Google</span>
        </button>

    )
}

export default Googlebutton