import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.scss';

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Anna Hope Physical Therapy</title>
                <meta name="description" content="Physical therapy services by Anna Hope" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {/* Header */}
            <header className={styles.header}>
                <nav className={styles.nav}>
                    <div className={styles.logo}>Anna Hope PT</div>
                    <ul className={styles.navLinks}>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
            </header>

            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={styles.heroImageWrapper}>
                    <Image
                        src={`${process.env.NEXT_PUBLIC_BASE_PATH}/landing-bg.jpg`}
                        alt="Hero background"
                        fill
                        className={styles.heroImage}
                    />
                </div>
                <div className={styles.heroContent}>
                    <h1 className={styles.heroTitle}>Begin Your Healing Journey</h1>
                    <p className={styles.heroSubtitle}>
                        Expert physical therapy to help you move better and live pain-free
                    </p>
                    <button className={styles.ctaButton}>Get Started</button>
                </div>
            </section>

            {/* Services Section */}
            <section id="services" className={styles.services}>
                <h2 className={styles.sectionTitle}>Services</h2>
                <div className={styles.grid}>
                    <div className={styles.card}>
                        <h3>Assessment</h3>
                        <p>Comprehensive evaluation to understand your unique needs</p>
                    </div>
                    <div className={styles.card}>
                        <h3>Treatment</h3>
                        <p>Personalized therapy plans for optimal recovery</p>
                    </div>
                    <div className={styles.card}>
                        <h3>Recovery</h3>
                        <p>Guided support to get you back to your best self</p>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className={styles.about}>
                <div className={styles.aboutContent}>
                    <div className={styles.aboutImage}>
                        <Image
                            src={`${process.env.NEXT_PUBLIC_BASE_PATH}/anna-swing.jpg`}
                            alt="Anna Hope"
                            width={300}
                            height={300}
                            className={styles.profileImage}
                        />
                    </div>
                    <div className={styles.aboutText}>
                        <h2>Meet Anna Hope, DPT</h2>
                        <div className={styles.description}>
                            <p>
                                Hi! I'm Anna, thanks for stopping by! A bit about myself: I went to Iowa State University
                                (go Cyclones!), graduating in 2013, where I earned my B.S. in Kinesiology and Health Sciences. After
                                being excited by the medical field and my enthusiasm to help, I decided to pursue a doctoral degree
                                to practice Medicine full-time.
                            </p>
                            <p>
                                I attended Des Moines University from 2014-2017 where I earned my Doctorate of Physical Therapy. I
                                was able to study in Iowa, Nebraska, and Florida, with a wide variety of specializations and patient groups.
                                It was hard to turn down job offers in Florida, but I knew I needed to return to be closer to friends and
                                family!
                            </p>
                            <p>
                                I began in Chicago, at the Illinois Bone and Joint Institute, with a focus on treating orthopedic issues
                                arising from surgery recovery, sports injuries, chronic pain, and more. After treating at IBJI for more than 2 years,
                                I began my work at Core Physical Therapy. After studying women's health for several years, and becoming a Pelvic Health Specialist,
                                Core Physical Therapy has given me a chance to prove my ability and lead the company's Women's Health Program.
                            </p>
                            <p>
                                I am still excited to be doing the work that I'm doing and I am excited that you stopped by my website!
                                If there's anything that caught your attention or anything you have questions about, please send me a
                                message in the form below!
                            </p>
                            <p className={styles.signature}>- Anna -</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className={styles.contact}>
                <h2 className={styles.sectionTitle}>Get in Touch</h2>
                <form className={styles.contactForm}>
                    <input type="text" placeholder="Your Name" className={styles.input} />
                    <input type="email" placeholder="Your Email" className={styles.input} />
                    <textarea placeholder="Your Message" className={styles.textarea}></textarea>
                    <button type="submit" className={styles.submitButton}>Send Message</button>
                </form>
            </section>

            {/* Footer */}
            <footer className={styles.footer}>
                <p>© 2025 Anna Hope Physical Therapy. All rights reserved.</p>
            </footer>
        </div>
    );
}