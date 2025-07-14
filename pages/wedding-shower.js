import Head from "next/head";
import styles from "../styles/Shower.module.scss";
import Image from "next/image";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCalendar, faClock, faLocationDot} from "@fortawesome/free-solid-svg-icons";

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Anna & Chris | Wedding Shower</title>
                <meta name="description" content="Celebrate Anna & Chris's Wedding Shower"/>
                <link rel="icon" href={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/wedding-shower/pinata.png`}/>
            </Head>

            <header className={styles.hero}>
                <Image
                    src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/wedding-shower/together.jpeg`}
                    alt="Anna & Chris"
                    fill
                    className={styles.heroImage}
                    priority
                    style={{
                        objectFit: 'cover',
                        objectPosition: 'center'
                    }}
                />
                <div className={styles.heroOverlay}></div>
                <div className={styles.heroContent}>
                    <h2 className={styles.inviteText}>You're Invited!</h2>
                    <h1 className={styles.heroTitle}>Anna & Chris</h1>
                    <p className={styles.heroSubtitle}>Wedding Shower Celebration</p>
                </div>
                <div className={styles.scrollIndicator}>↓</div>
            </header>

            <main className={styles.main}>
                <section className={styles.eventCard}>
                    <div className={styles.decorLine}></div>
                    <h2 className={styles.eventTitle}>Join Our Celebration</h2>

                    <div className={styles.detailsGrid}>
                        <div className={styles.detailItem}>
                            <FontAwesomeIcon icon={faCalendar} className={styles.detailIcon}/>
                            <p>Saturday, September 13th, 2025</p>
                        </div>
                        <div className={styles.detailItem}>
                            <FontAwesomeIcon icon={faClock} className={styles.detailIcon}/>
                            <p>11:30 AM - 1:30 PM</p>
                        </div>
                        <div className={styles.detailItem}>
                            <FontAwesomeIcon icon={faLocationDot} className={styles.detailIcon}/>
                            <p>Iowa Taproom - Joliet Room<br/>215 East 3rd Street, Des Moines, IA 50309</p>
                        </div>
                    </div>

                    <div className={styles.registrySection}>
                        <div className={styles.buttonContainer}>
                            <p className={styles.rsvpText}>Please RSVP by August 23rd</p>
                            <a
                                href="https://withjoy.com/chris-and-anna-sep-13/rsvp"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.registryButton}
                            >
                                RSVP
                            </a>
                            <a
                                href="https://www.zola.com/registry/chrisandannacabo2025"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.registryButton}
                            >
                                View Registry
                            </a>
                        </div>
                    </div>
                </section>
            </main>

            <footer className={styles.footer}>
                <p>
                    <Image
                        src={`${process.env.NEXT_PUBLIC_BASE_PATH}/champagne-glass.png`}
                        alt="Cheers Icon"
                        width={20}
                        height={20}
                        style={{marginRight: '16px'}}
                    />
                    Officially Each Other's Problem
                    <Image
                        src={`${process.env.NEXT_PUBLIC_BASE_PATH}/champagne-glass.png`}
                        alt="Cheers Icon"
                        width={20}
                        height={20}
                        style={{marginLeft: '16px'}}
                    />
                </p>
            </footer>
        </div>
    );
}