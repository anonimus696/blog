'use client'
import React from 'react';
import styles from './page.module.scss';
import Button from '@/components/buttion/Button';
import Image from 'next/image';
import Link from 'next/link';
import useSWR from "swr";

/*
async function getData() {

    try {
        const res = await fetch(`${process.env.NEXTAUTH_URL}/api/posts`, {
            cache: "no-store",
        })

        if (!res.ok) {
            throw new Error('Failed to fetch data')
        }

        return res.json()

    } catch (error) {
        console.log(error);
        return null
    }
}
*/
// const Blog = async () => {
const Blog = () => {

    // const data = await getData();

    const fetcher = (...args) => fetch(...args).then((res) => res.json());

    const { data, mutate, error, isLoading } = useSWR(`/api/posts`, fetcher);

    if (error) {
        return <div>Data error</div>;
    }

    if (!data) {
        return <div>Loading...</div>;
    }
    return (
        < div className={styles.container} >
            {
                data.map((item) => (
                    // <div className={styles.items} >
                    <Link href={`/blog/${item._id}`} className={styles.item} key={item.id}>
                        <div className={styles.imageContainer}>
                            <Image
                                className={styles.image}
                                src={item.img}
                                fill={true}
                                alt='image'
                            />
                        </div>
                        <div className={styles.content}>
                            <h2 className={styles.title}>{item.title}</h2>
                            <div className={styles.desc}>{item.desc}</div>
                        </div>
                    </Link>
                    // </div>
                ))}
        </div >
    );
}

export default Blog



// href='/blog/test1'
// Ps3C2D5ynThyDmxP