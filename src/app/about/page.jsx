import React from 'react'
import styles from './page.module.scss'
import Image from 'next/image'
import Button from '@/components/buttion/Button'

const About = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <Image
                    src='https://images.pexels.com/photos/4974914/pexels-photo-4974914.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                    fill={true}
                    alt='image'
                    className={styles.image}
                />
                <div className={styles.imageText}>
                    <h2 className={styles.imageTitle}>Digital Storytellers</h2>
                    <h3 className={styles.imageDisc}>Handcrafting award winning digital experiences</h3>
                </div>
            </div>
            <div className={styles.textContainer}>
                <div className={styles.item}>
                    <h3 className={styles.title}>Who Are We?</h3>
                    <p className={styles.disc}>Lorem ipsum dolor sit amet consectetur,
                        adipisicing elit. Laboriosam laborum molestiae tenetur
                        sapiente itaque corporis ad dicta accusantium explicabo culpa!
                        Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Libero tempore doloremque,
                        quibusdam asperiores minima itaque. Nesciunt
                        ex sapiente modi ducimus!
                        <br />
                        <br />
                        Lorem ipsum dolor sit, amet consectetur
                        adipisicing elit. Impedit ducimus nostrum
                        exercitationem veritatis ad esse fugiat quos,
                        perferendis nam modi iure, libero enim excepturi
                        deserunt dolorem. Ipsa itaque repellendus adipisci!
                    </p>
                </div>
                <div className={styles.item}>
                    <h2 className={styles.title}>What we do?</h2>
                    <p className={styles.disc}>
                        Lorem ipsum dolor sit, amet consectetur
                        adipisicing elit. Impedit ducimus nostrum
                        exercitationem veritatis ad esse fugiat quos,
                        perferendis nam modi iure, libero enim excepturi
                        deserunt dolorem. Ipsa itaque repellendus adipisci!
                        <br />
                        <br /> -Dynamic Websites
                        <br />
                        <br /> -Fast and Handy
                        <br />
                        <br /> -Mobile Apps


                    </p>
                    <Button url={'/contacts'} text={"Contact"} />
                </div>
            </div>
        </div>
    )
}

export default About