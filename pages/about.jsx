// import styles from '../styles/Home.module.css'
import styles from '../styles/About.module.css'
import Image from 'next/image'
export default function About() {
    return (
        <>
        <h1 className={styles.head}>About me...</h1>
        <p>Coding coding coding...</p>
        {/* loading an image locally */}
        {/* img tag would have worked just no SSR caching */}
        {/* <Image
            src='/vercel.svg'
            alt='the vercel logo'
            height={100}
            width={100}
        /> */}

        {/* loading an image from another  hosting domain */}
        <Image
            src='https://www.placecage.com/300/300'
            alt='cage'
            width={300}
            height={300}
        />
        </>
    )
}