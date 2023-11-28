'use client'

import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import styles from './navbar.module.scss'
import DarkModeToggle from '../DarkModeToggle/DarkModeToggle'
import { signOut, useSession } from 'next-auth/react'


function Navbar() {

    const session = useSession();
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const htmlBody = document.documentElement;

        const handleOutsideClick = (event) => {
            // Проверяем, произошел ли клик вне области navbar или menu
            if (open && !event.target.closest(`.${styles.container}`)) {
                setOpen(false);
            } else if (open && event.target.closest(`.${styles.link}`) || open && event.target.closest(`.${styles.logo}`)) {
                setOpen(false);
            }
        };

        // Добавляем обработчик события при монтировании компонента
        document.addEventListener('click', handleOutsideClick);

        // Очищаем обработчик при размонтировании компонента
        return () => {
            document.removeEventListener('click', handleOutsideClick);
            htmlBody.classList.remove('menuOpen');
        };
    }, [open]);

    const links = [
        {
            id: '1',
            title: 'Home',
            url: '/',
        },
        {
            id: '2',
            title: 'Portfolio',
            url: '/portfolio',
        },
        {
            id: '3',
            title: 'Blog',
            url: '/blog',
        },
        {
            id: '4',
            title: 'About',
            url: '/about',
        },
        {
            id: '5',
            title: 'Contacts',
            url: '/contacts',
        },
        {
            id: '6',
            title: 'Dashboard',
            url: '/dashboard',
        },
    ]

    return (
        <div className={styles.container} >
            <div className={styles.header} >

                <Link href='/' className={styles.logo}>Mainblog</Link>
                <div className={styles.links}>

                    <div className={styles.menu}
                        style={{ right: open ? '0px' : '-70vw' }}

                    >
                        {links.map(link => (
                            <Link key={link.id} href={link.url} className={styles.link}>
                                {link.title}
                            </Link>
                        ))}
                    </div>
                    <div className={styles.actions}>
                        {session.status === 'authenticated' &&
                            <button
                                className={`${styles.logout} button`}
                                onClick={signOut}
                            >
                                Logout
                            </button>
                        }
                        <DarkModeToggle />
                        <div type="button"
                            onClick={() => setOpen(!open)}
                            className={open ? `${styles.iconMenu} ${styles.menuOpen}` : styles.iconMenu}
                        >
                            <span></span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Navbar