import React from 'react';
import styles from './page.module.scss';
import Image from 'next/image';
import Button from '@/components/buttion/Button';
import { items } from './data';
import { notFound } from 'next/navigation';

const getData = (cat) => {
    const data = items[cat];

    if (data) {
        return data;
    }

    return notFound();
}


function Category({ params }) {

    const data = getData(params.category);

    return (
        <div className={styles.container}>
            <h2 className={styles.catTitle}>{params.category}</h2>
            <div className={styles.items}>
                {data.map((item) => (
                    <div className={styles.item} key={item.id}>
                        <div className={styles.content}>
                            <h2 className={styles.title}>{item.title}</h2>
                            <div className={styles.desc}>{item.desc}</div>
                            <Button url='#' text='See More' />
                        </div>
                        <div className={styles.imageContainer}>
                            <Image
                                className={styles.image}
                                src={item.image}
                                fill={true}
                                alt='image'
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Category