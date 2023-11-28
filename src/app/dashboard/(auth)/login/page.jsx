'use client'
import { useSession, signIn } from 'next-auth/react'
import React from 'react'
import styles from '../register/page.module.scss'
import { useRouter } from 'next/navigation'
import Googlebutton from '@/components/googlebutton/googlebutton'
import Link from 'next/link'


function Login() {
    const session = useSession();
    const router = useRouter();


    if (session.status === 'loading') {
        return <p>Loading...</p>
    }
    if (session.status === 'authenticated') {
        router?.push('/dashboard')
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const email = e.target[0].value
        const password = e.target[1].value

        signIn("credentials", { email, password })
    }
    return (
        <div className={styles.container}>
            <div className={styles.buttonCont}>
                <form className={styles.form} onSubmit={handleSubmit}>
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
                    <button className={`${styles.button} button`}>Login</button>
                </form>
                <Googlebutton />
                <Link className={styles.link} href='/dashboard/register'>
                    <button className={`${styles.button} ${styles.buttonred} button blue`}>Register new account</button>
                </Link>
            </div >
        </div >
    )
}

export default Login