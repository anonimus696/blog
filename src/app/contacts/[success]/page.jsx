'use client'
import React from 'react'
import styles from './page.module.scss'
import Image from 'next/image'
import { useRouter } from 'next/navigation';

function Page() {

    const router = useRouter();

    const backHome = async (e) => {
        e.preventDefault();
        router.push('/')
    };
    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image
                    src='/check.svg'
                    fill={true}
                    alt='image'
                    className={styles.image}
                />
            </div>
            <div className={styles.title}>Success</div>
            <div className={styles.text}>
                We received your purchase request we&apos;ll be in touch shortly!
            </div>
            <button className={`${styles.button} button`} onClick={backHome}> Home</button>
        </div>

    )
}

export default Page