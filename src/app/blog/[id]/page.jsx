import React from 'react'
import styles from './page.module.scss'
import Image from 'next/image'
import { notFound } from 'next/navigation'

async function getData(id) {
    const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
        cache: "no-store",
    })

    if (!res.ok) {
        return notFound()
    }

    return res.json()
}

export async function generateMetadata({ params }) {

    const post = await getData(params.id)
    return {
        title: post.title,
        description: post.desc,
    }
}

const BlogPost = async ({ params }) => {

    const data = await getData(params.id)

    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <div href='/blog/test1' className={styles.item}>
                    <div className={styles.content}>
                        <h2 className={styles.title}>{data.title}</h2>
                        <div className={styles.desc}>{data.desc}</div>
                        <div className={styles.author}>
                            <div className={styles.photoCont}>
                                <Image
                                    className={styles.photo}
                                    src={data.userphoto}
                                    fill={true}
                                    alt='image'
                                />
                            </div>
                            <div className={styles.name}>{data.username}</div>
                        </div>
                    </div>
                    <div className={styles.imageContainer}>
                        <Image
                            className={styles.image}
                            src={data.img}
                            fill={true}
                            alt='image'
                        />
                    </div>
                </div>
            </div>
            <div className={styles.bottom}>
                <p className={styles.desc}>
                    {data.content}
                </p>
            </div>
        </div>
    )
}

export default BlogPost