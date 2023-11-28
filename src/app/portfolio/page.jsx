import React from 'react'
import styles from './page.module.scss'
import Link from 'next/link'
import Image from 'next/image'

const Portfolio = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.titleSelect}>Choose a gallery</h2>
            <div className={styles.items}>
                <Link href='/portfolio/illustration' className={styles.item}>
                    <Image
                        src='https://images.pexels.com/photos/450596/pexels-photo-450596.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                        fill={true}
                        alt='image'
                        className={styles.image}
                    />
                    <span className={styles.title}>Illustration</span>
                </Link>
                <Link href='/portfolio/websites' className={styles.item}>
                    <Image
                        src='https://images.pexels.com/photos/6476808/pexels-photo-6476808.jpeg'
                        fill={true}
                        alt='image'
                        className={styles.image}
                    />
                    <span className={styles.title}>Websites</span>
                </Link>
                <Link href='/portfolio/application' className={styles.item}>
                    <Image
                        src='https://images.pexels.com/photos/3585089/pexels-photo-3585089.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                        fill={true}
                        alt='image'
                        className={styles.image}
                    />
                    <span className={styles.title}>Application</span>
                </Link>
            </div>
        </div>
    )
}

export default Portfolio