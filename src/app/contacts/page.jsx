'use client'
import React, { useState } from 'react'
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
    const [data, setData] = useState({
        name: '',
        email: '',
        message: '',
    })

    const sendMail = async (e) => {
        e.preventDefault();

        const res = await fetch('/api/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })

        if (res.status === 200) {
            setData({})
            router.push('/contacts/succsess')
        }
    };

    /*
    const router = useRouter();

    const sendForm = async (e) => {
        e.preventDefault();
        router.push('/contacts/succsess')
    };
    */
    return (
        <div className={styles.container} >
            <h2 className={styles.title}>Let&apos;s Keep in Touch</h2>
            <div className={styles.content}>
                <div className={styles.imageContainer}>
                    <Image
                        src='/contact.png'
                        fill={true}
                        alt='image'
                        className={styles.image}
                    />
                </div>
                <form className={styles.form} onSubmit={sendMail}>
                    <input type="text" placeholder='name*' className={styles.input} onChange={(e) => setData({ ...data, name: e.target.value })} required />
                    <input type="text" placeholder='email*' className={styles.input} onChange={(e) => setData({ ...data, email: e.target.value })} required />
                    <textarea
                        placeholder='message'
                        cols="30"
                        rows="10"
                        className={styles.textarea}
                        onChange={(e) => setData({ ...data, message: e.target.value })}
                    ></textarea>
                    <button className={`${styles.button} button`}> Send</button>
                </form>
            </div>
        </div >
    )
}

export default Contacts


{/* <Button url='#' text='Send' /> */ }
