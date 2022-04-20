import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home () {
  return (
    <div className={styles.container}>
      <Head>
        <title>Portfolio</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Norman Teodoro</h1>

        <p className={styles.description}>
          Full Stack Web Developer{' '}
          {/* <code className={styles.code}>pages/index.js</code> */}
        </p>
        <a href="#nav"><span><h2>Projects</h2></span></a>
        <div className={styles.expandable} id='nav'>
          <a href='#' className={styles.card}>
            {/* <h2>Projects &rarr;</h2> */}
            <p>
              <a href='https://foosasugaome.github.io/candy_hunt/'>
                Arcade Game
              </a>
            </p>
            <p>
              <a href='https://expressfinance.herokuapp.com/'>
                Express Finance
              </a>
            </p>
            <p>
              <a href='https://preeminent-cobbler-237db0.netlify.app/'>
                KAT Inventory
              </a>
            </p>
            <p>
              <a href='https://boisterous-crostata-b66bd1.netlify.app/'>
                Looking for Group
              </a>
            </p>
          </a>
          </div>
          <a href="#nav2"><span><h2>Skills</h2></span></a>
          <div className={styles.expandable} id='nav2'>
          <a href='#' className={styles.card}>
            {/* <h2>Skills &rarr;</h2> */}
            <p align='left'>
              <a
                href='https://developer.mozilla.org/en-US/docs/Web/JavaScript'
                target='_blank'
                rel='noreferrer'
              >
                <Image
                  src='https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/javascript-colored.svg'
                  width='36'
                  height='36'
                  alt='Javascript'
                />
              </a>
              <a
                href='https://www.python.org/'
                target='_blank'
                rel='noreferrer'
              >
                <Image
                  src='https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/python-colored.svg'
                  width='36'
                  height='36'
                  alt='Python'
                />
              </a>
              <a
                href='https://developer.mozilla.org/en-US/docs/Glossary/HTML5'
                target='_blank'
                rel='noreferrer'
              >
                <Image
                  src='https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/html5-colored.svg'
                  width='36'
                  height='36'
                  alt='HTML5'
                />
              </a>
              <a href='https://reactjs.org/' target='_blank' rel='noreferrer'>
                <Image
                  src='https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg'
                  width='36'
                  height='36'
                  alt='React'
                />
              </a>
              <a
                href='https://nextjs.org/docs'
                target='_blank'
                rel='noreferrer'
              >
                <Image
                  src='https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nextjs-colored.svg'
                  width='36'
                  height='36'
                  alt='NextJs'
                />
              </a>
              <a
                href='https://www.w3.org/TR/CSS/#css'
                target='_blank'
                rel='noreferrer'
              >
                <Image
                  src='https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/css3-colored.svg'
                  width='36'
                  height='36'
                  alt='CSS3'
                />
              </a>
              <a
                href='https://getbootstrap.com/'
                target='_blank'
                rel='noreferrer'
              >
                <Image
                  src='https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/bootstrap-colored.svg'
                  width='36'
                  height='36'
                  alt='Bootstrap'
                />
              </a>
              <a href='https://nodejs.org/en/' target='_blank' rel='noreferrer'>
                <Image
                  src='https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nodejs-colored.svg'
                  width='36'
                  height='36'
                  alt='NodeJS'
                />
              </a>
              <a href='https://expressjs.com/' target='_blank' rel='noreferrer'>
                <Image
                  src='https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/express-colored.svg'
                  width='36'
                  height='36'
                  alt='Express'
                />
              </a>
              <a
                href='https://www.mongodb.com/'
                target='_blank'
                rel='noreferrer'
              >
                <Image
                  src='https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/mongodb-colored.svg'
                  width='36'
                  height='36'
                  alt='MongoDB'
                />
              </a>
              <a
                href='https://www.postgresql.org/'
                target='_blank'
                rel='noreferrer'
              >
                <Image
                  src='https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/postgresql-colored.svg'
                  width='36'
                  height='36'
                  alt='PostgreSQL'
                />
              </a>
              <a
                href='https://www.heroku.com/'
                target='_blank'
                rel='noreferrer'
              >
                <Image
                  src='https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/heroku-colored.svg'
                  width='36'
                  height='36'
                  alt='Heroku'
                />
              </a>
              <a
                href='https://dotnet.microsoft.com/en-us/'
                target='_blank'
                rel='noreferrer'
              >
                <Image
                  src='https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/dot-net-colored.svg'
                  width='36'
                  height='36'
                  alt='.NET'
                />
              </a>
              <a
                href='https://www.djangoproject.com/'
                target='_blank'
                rel='noreferrer'
              >
                <Image
                  src='https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/django-colored.svg'
                  width='36'
                  height='36'
                  alt='Django'
                />
              </a>
            </p>
          </a>
          </div>
          <a href="#nav3"><span><h2>Socials</h2></span></a>
          <div className={styles.expandable} id='nav3'>
          <a href='#' className={styles.card}>
            {/* <h2>Links &rarr;</h2> */}
            <p>
              <a href='https://github.com/foosasugaome'>Github</a> |{' '}
              <a href='https://www.linkedin.com/in/normanteodoro/'>LinkedIn</a>
            </p>
          </a>

          {/* <a
            href="#"
            className={styles.card}
          >
            <h2>Résumé &rarr;</h2>
            <p>
              Download my résumé
            </p>
          </a> */}
        </div>
      </main>

      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer> */}
    </div>
  )
}
