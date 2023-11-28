import Image from 'next/image'
import styles from './page.module.css'
import Hero from 'public/hero.png'
import Button from '@/components/buttion/Button'


export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>The best sites for your bussines</h1>
        <p className={styles.desc}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum suscipit sapiente quam excepturi iusto porro, odio incidunt nam quod distinctio deserunt molestias sequi iure doloribus! Placeat omnis repudiandae laboriosam nemo!
        </p>
        <Button url={'/portfolio'} text={"See our Works"} />
      </div>
      <div className={styles.item}>
        <Image src={Hero} alt='' className={styles.img} />
      </div>
    </div >
  )
}

/* <Image width={800} height={500} src='https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='' /> */