import Head from "next/head";
import styles from '../styles/Layout.module.css'
import Image from "next/image";
import Link from "next/link";
import utilStyles from '../styles/utils.module.css'
const name ='bluuweb'
export default function Layout ({children,title,description,home } ){
    console.log(home)
    return(
    <div className={styles.container} >
        <Head>
    <title>{title} </title> 
    <meta
    name="description"
    content={description}
    />
 </Head>
 <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src="/img/imagen.jpeg"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt={name}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <Image
                  priority
                  src="/img/imagen.jpeg"
                  className={utilStyles.borderCircle}
                  height={108}
                  width={108}
                  alt={name}
                />
              </a>
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
        <nav>
        <Link href="/">
            <a>Inicio | </a>
          </Link>
          <Link href="/about">
            <a>Blog | </a>
          </Link>
          <Link href="/blog">
            <a>Contacto |</a>
          </Link>
          
        </nav>
        <main>
            {children}
        </main>
        <footer>
        {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
            
        </footer>


    </div>
    )
}
Layout.defaulProps={
    title: "Next.js | mi sitio web",
    description:"Descripcion de mi sitio web",
}