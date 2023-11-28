'use client'

import React, { useState } from 'react'
import styles from './page.module.scss'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import AddImage from '@/components/addImage/addImage'


function Register() {
    const [err, setErr] = useState(false);

    const [isButtonDisabled, setIsButtonDisabled] = useState(false);//!

    const router = useRouter();

    //////////////////////////////!

    const [file, setFile] = useState(null);
    const [media, setMedia] = useState("");
    const [fileError, setFileError] = useState(false);


    //////////////////////////////!


    const handleSubmit = async (e) => {
        e.preventDefault();
        const name = e.target[0].value
        const email = e.target[1].value
        const password = e.target[2].value
        // const image = e.target[3].value ////!


        try {

            const res = await fetch('/api/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name,
                    image: media,
                    email,
                    password
                })
            })

            res.status === 201 && router.push('/dashboard/login?success=Acount has been created');

        } catch (err) {
            console.log(err);
            setErr(true);
        }

    }

    return (
        <div className={styles.container}>
            <div className={styles.buttonCont}>
                <h2 className={styles.title}>Create new account</h2>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder='username'
                        className={styles.input}
                        required
                    />
                    <input
                        type="email"
                        placeholder='email'
                        className={styles.input}
                        required
                    />
                    <input
                        type="password"
                        placeholder='password'
                        className={styles.input}
                        required
                    />

                    <AddImage
                        file={file}
                        setFile={setFile}
                        fileError={fileError}
                        setFileError={setFileError}
                        media={media}
                        setMedia={setMedia}
                        setIsButtonDisabled={setIsButtonDisabled}
                        fileLabel={'avatar'}
                    />
                    <button className={isButtonDisabled
                        ?
                        `${styles.button} ${styles.disabled} button`
                        :
                        `${styles.button} button`
                    }
                        disabled={isButtonDisabled}>Register</button>
                </form>

                {err && 'Something went wrong!'}
                <Link className={styles.link} href='/dashboard/login'>
                    <button className={`${styles.button} ${styles.buttonred} button blue`}>Loggin with an existing account</button>
                </Link>
            </div>
        </div>
    )
}

export default Register


/*
                <input
                    type="text"
                    placeholder='avatar(url)'
                    className={styles.input}
                />
*/