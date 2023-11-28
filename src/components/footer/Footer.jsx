import React from 'react'
import styles from './footer.module.scss'
import Image from 'next/image'


function Footer() {
    return (
        <div className={styles.container}>
            <div>©2023 VictorApp. All rights reserved.</div>
            <div className={styles.social}>
                <a href="https://www.facebook.com/" className={styles.icon}>
                    <Image src='/1.png' width={15} height={15} alt='facebook_logo' />
                </a>
                <a href="https://www.instagram.com/" className={styles.icon}>
                    <Image src='/2.png' width={15} height={15} alt='instagram_logo' />
                </a>
                <a href="https://twitter.com/" className={styles.icon}>
                    <Image src='/3.png' width={15} height={15} alt='twiter_logo' />
                </a>
                <a href="https://www.youtube.com/" className={styles.icon}>
                    <Image src='/4.png' width={15} height={15} alt='youtube_logo' />
                </a>
            </div>
        </div>

    )
}

export default Footer