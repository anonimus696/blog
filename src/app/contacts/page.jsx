'use client'
import React from 'react'
import styles from './page.module.scss'
import Image from 'next/image'
import Button from '@/components/buttion/Button'
import { useRouter } from 'next/navigation'
/*
export const metadata = {
    title: 'Contact page',
    description: 'Contact page desc',
}
*/
const Contacts = () => {
    const router = useRouter();

    const sendForm = async (e) => {
        e.preventDefault();
        router.push('/contacts/succsess')
    };
    return (
        <div className={styles.container} >
            <h2 className={styles.title}>Let's Keep in Touch</h2>
            <div className={styles.content}>
                <div className={styles.imageContainer}>
                    <Image
                        src='/contact.png'
                        fill={true}
                        alt='image'
                        className={styles.image}
                    />
                </div>
                <form className={styles.form} onSubmit={sendForm}>
                    <input type="text" placeholder='name*' className={styles.input} required />
                    <input type="text" placeholder='email*' className={styles.input} required />
                    <textarea
                        placeholder='message'
                        cols="30"
                        rows="10"
                        className={styles.textarea}
                    ></textarea>
                    <button className={`${styles.button} button`}> Send</button>
                </form>
            </div>
        </div >
    )
}

export default Contacts


{/* <Button url='#' text='Send' /> */ }
