import React, { useEffect, useState } from 'react'
import styles from './addImage.module.scss'
import Image from 'next/image';

import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { app } from "@/utils/firebase";


const storage = getStorage(app);



function AddImage({ file, fileError, media, setMedia,
    setFile, setFileError, fileLabel, setIsButtonDisabled }) {

    const [previewImage, setPreviewImage] = useState(null);
    const [uploadProgress, setUploadProgress] = useState(0);//!


    useEffect(() => {

        setIsButtonDisabled(true)

        const upload = () => {
            const name = new Date().getTime + file.name;
            const storageRef = ref(storage, name);

            const uploadTask = uploadBytesResumable(storageRef, file);

            uploadTask.on('state_changed',
                (snapshot) => {

                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log('Upload is ' + progress + '% done');
                    setUploadProgress(progress);
                    switch (snapshot.state) {
                        case 'paused':
                            console.log('Upload is paused');
                            break;
                        case 'running':
                            console.log('Upload is running');
                            break;
                    }
                },
                (error) => {
                    // Handle unsuccessful uploads
                },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                        setMedia(downloadURL);
                        !media && setIsButtonDisabled(false)
                    });
                }
            );
        }

        file && upload();
    }, [file])

    useEffect(() => {
        if (file) {
            setFileError(false);
            const reader = new FileReader();
            reader.onload = (e) => {
                setPreviewImage(e.target.result);
            };
            reader.readAsDataURL(file);

        } else {
            setPreviewImage(null);
            setMedia(null)
            setIsButtonDisabled(false)

            const fileInput = document.getElementById('image');
            if (fileInput) {
                fileInput.value = ''; // Саме цей рядок очистить інпут файлу
            }
        }
        console.log("FILE", file);

    }, [file]);

    return (
        <div className={styles.container}>
            <input type="file" style={{ display: 'none' }} placeholder='img' id="image" onChange={(e) => setFile(e.target.files[0])} />
            <label htmlFor="image" className={`${styles.label} button`}>
                <span>Chose your {fileLabel}</span>
                <Image src='/upload.svg' width={20} height={20} />
            </label>
            {previewImage &&
                <div className={styles.previewContainer}>
                    <Image src={previewImage} width={100} height={50} alt="image" />
                    <div className={styles.deleteBut} onClick={() => setFile(null)}>✖</div>
                    <p>Uploading: {uploadProgress.toFixed(2)}%</p>
                    <progress className={styles.progress} value={uploadProgress} max={100}></progress>
                </div>
            }
            {fileError && <div className={styles.err}>Add image, please</div>}
        </div>

    )
}

export default AddImage
