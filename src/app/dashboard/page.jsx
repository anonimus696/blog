"use client";
import React, { useEffect, useState } from "react";
import styles from "./page.module.scss";
import useSWR from "swr";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { useSession } from "next-auth/react";


import AddImage from "@/components/addImage/addImage";




const Dashboard = () => {

    /*
        const [data, setData] = useState([]);
        const [err, setErr] = useState(false);
        const [isLoading, setisLoading] = useState(false);
    
        useEffect(() => {
            const getData = async () => {
                setisLoading(true)
                const res = await fetch(`https://jsonplaceholder.typicode.com/posts`, {
                    cache: "no-store",
                });
    
                if (!res.ok) {
                    setErr(true);
                }
    
                const data = res.json();
    
                setData(data);
                setisLoading(false);
            }
            getData();
        }, [])
    */

    const [file, setFile] = useState(null);
    const [fileError, setFileError] = useState(false);
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);//!


    const [media, setMedia] = useState("");

    const [userAvatar, setuserAvatar] = useState('/blog.jpg');


    const urlRegex = /^(http(s)?):\/\/(www\.)?([a-zA-Z0-9.]+):?(\d{1,5})?(\/?.*)?$/;


    const session = useSession();
    const router = useRouter();


    const fetcher = (...args) => fetch(...args).then((res) => res.json());

    const { data, mutate, error, isLoading } = useSWR(`/api/posts?username=${session?.data?.user.name}`, fetcher);



    if (session.status === 'loading') {
        return <p>Loading...</p>
    }
    if (session.status === 'unauthenticated') {
        router?.push('/dashboard/login');
    }
    console.log(session);


    const handleSubmit = async (e) => {
        e.preventDefault();
        const title = e.target[0].value;
        const desc = e.target[1].value;
        const content = e.target[2].value;
        // const img = e.target[3].value;

        if (!file) {
            setFileError(true);
            return; // Вийдіть з функції, якщо файл не вибрано
        } else {
            setFileError(false);
        }

        console.log('USERNAME', session.data.user.name,);
        try {
            await fetch("/api/posts", {
                method: "POST",
                body: JSON.stringify({
                    title,
                    desc,
                    img: media,
                    content,
                    userphoto: userAvatar,
                    username: session.data.user.name,
                }),
            });
            mutate();

        } catch (err) {
            console.log(err);
        }
    };

    const handleDelete = async (id) => {

        try {
            await fetch(`/api/posts/${id}`, {
                method: "DELETE",
            });
            mutate();
        } catch (err) {
            console.log(err);
        }
    };


    if (session.status === 'authenticated') {


        console.log('USER.DATA', session.data.user);

        if (session.data.user.image && userAvatar === '/blog.jpg') {
            setuserAvatar(session.data.user.image);
        }

        return (
            <div className={styles.container}>
                <div className={styles.posts}>
                    {isLoading ? 'loading'
                        :
                        data?.map(post => (
                            <div className={styles.post} key={post._id}>
                                <div className={styles.imageContainer}>
                                    <Image src={urlRegex.test(post.img) ? post.img : '/blog.jpg'} fill={true} alt="image" />
                                </div>
                                <div className={styles.contentContainer}>
                                    <div className={styles.postTitle}>{post.title}</div>
                                    <span className={styles.delete} onClick={() => handleDelete(post._id)}>❌</span>
                                </div>
                            </div>
                        ))}
                </div>

                <form className={styles.new} onSubmit={handleSubmit}>
                    <div className={styles.author}>
                        <div className={styles.photoCont}>
                            <Image
                                className={styles.photo}
                                src={userAvatar}
                                fill={true}
                                alt='image'
                            />
                        </div>
                        <div className={styles.name}>{session.data.user.name}</div>
                    </div>
                    <h2>Add New Post</h2>
                    <input type="text" placeholder='Title' className={styles.input} required />
                    <input type="text" placeholder='Desc' className={styles.input} required />
                    <textarea name="text"
                        placeholder='Content'
                        className={styles.textarea}
                        cols="30"
                        rows="8"
                        required
                    >
                    </textarea>
                    <AddImage
                        file={file}
                        setFile={setFile}
                        fileError={fileError}
                        setFileError={setFileError}
                        media={media}
                        setMedia={setMedia}
                        setIsButtonDisabled={setIsButtonDisabled}
                        fileLabel={'image'}
                    />

                    <button className={isButtonDisabled
                        ?
                        `${styles.button} ${styles.disabled} button`
                        :
                        `${styles.button} button`
                    }
                        disabled={isButtonDisabled}>Add post</button>
                </form>
            </div>
        )
    }
}

export default Dashboard





// onDrop={(e) => setFile(e.dataTransfer.files[0])}


/*
async function getData(id) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
                        cache: "no-store",
    })

                    if (!res.ok) {
        return notFound()
    }

                    return res.json()
}
                    */

