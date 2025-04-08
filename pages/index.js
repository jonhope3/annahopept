// import React from 'react';
// import Head from 'next/head';
// import Image from 'next/image';
// import styles from '../styles/Home.module.scss';
//
// export default function Home() {
//     return (
//         <div className={styles.container}>
//             <Head>
//                 <title>Anna Hope Physical Therapy</title>
//                 <meta name="description" content="Physical therapy services by Anna Hope" />
//                 <link rel="icon" href="/favicon.ico" />
//             </Head>
//
//             {/* Header */}
//             <header className={styles.header}>
//                 <nav className={styles.nav}>
//                     <div className={styles.logo}>Anna Hope PT</div>
//                     <ul className={styles.navLinks}>
//                         <li><a href="#services">Services</a></li>
//                         <li><a href="#about">About</a></li>
//                         <li><a href="#contact">Contact</a></li>
//                     </ul>
//                 </nav>
//             </header>
//
//             {/* Hero Section */}
//             <section className={styles.hero}>
//                 <div className={styles.heroImageWrapper}>
//                     <Image
//                         src={`${process.env.NEXT_PUBLIC_BASE_PATH}/landing-bg.jpg`}
//                         alt="Hero background"
//                         fill
//                         className={styles.heroImage}
//                     />
//                 </div>
//                 <div className={styles.heroContent}>
//                     <h1 className={styles.heroTitle}>Begin Your Healing Journey</h1>
//                     <p className={styles.heroSubtitle}>
//                         Expert physical therapy to help you move better and live pain-free
//                     </p>
//                     <button className={styles.ctaButton}>Get Started</button>
//                 </div>
//             </section>
//
//             {/* Services Section */}
//             <section id="services" className={styles.services}>
//                 <h2 className={styles.sectionTitle}>Services</h2>
//                 <div className={styles.grid}>
//                     <div className={styles.card}>
//                         <h3>Assessment</h3>
//                         <p>Comprehensive evaluation to understand your unique needs</p>
//                     </div>
//                     <div className={styles.card}>
//                         <h3>Treatment</h3>
//                         <p>Personalized therapy plans for optimal recovery</p>
//                     </div>
//                     <div className={styles.card}>
//                         <h3>Recovery</h3>
//                         <p>Guided support to get you back to your best self</p>
//                     </div>
//                 </div>
//             </section>
//
//             {/* About Section */}
//             <section id="about" className={styles.about}>
//                 <div className={styles.aboutContent}>
//                     <div className={styles.aboutImage}>
//                         <Image
//                             src={`${process.env.NEXT_PUBLIC_BASE_PATH}/anna-swing.jpg`}
//                             alt="Anna Hope"
//                             width={300}
//                             height={300}
//                             className={styles.profileImage}
//                         />
//                     </div>
//                     <div className={styles.aboutText}>
//                         <h2>Meet Anna Hope, DPT</h2>
//                         <div className={styles.description}>
//                             <p>
//                                 Hi! I'm Anna, thanks for stopping by! A bit about myself: I went to Iowa State University
//                                 (go Cyclones!), graduating in 2013, where I earned my B.S. in Kinesiology and Health Sciences. After
//                                 being excited by the medical field and my enthusiasm to help, I decided to pursue a doctoral degree
//                                 to practice Medicine full-time.
//                             </p>
//                             <p>
//                                 I attended Des Moines University from 2014-2017 where I earned my Doctorate of Physical Therapy. I
//                                 was able to study in Iowa, Nebraska, and Florida, with a wide variety of specializations and patient groups.
//                                 It was hard to turn down job offers in Florida, but I knew I needed to return to be closer to friends and
//                                 family!
//                             </p>
//                             <p>
//                                 I began in Chicago, at the Illinois Bone and Joint Institute, with a focus on treating orthopedic issues
//                                 arising from surgery recovery, sports injuries, chronic pain, and more. After treating at IBJI for more than 2 years,
//                                 I began my work at Core Physical Therapy. After studying women's health for several years, and becoming a Pelvic Health Specialist,
//                                 Core Physical Therapy has given me a chance to prove my ability and lead the company's Women's Health Program.
//                             </p>
//                             <p>
//                                 I am still excited to be doing the work that I'm doing and I am excited that you stopped by my website!
//                                 If there's anything that caught your attention or anything you have questions about, please send me a
//                                 message in the form below!
//                             </p>
//                             <p className={styles.signature}>- Anna -</p>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//
//             {/* Contact Section */}
//             <section id="contact" className={styles.contact}>
//                 <h2 className={styles.sectionTitle}>Get in Touch</h2>
//                 <form className={styles.contactForm}>
//                     <input type="text" placeholder="Your Name" className={styles.input} />
//                     <input type="email" placeholder="Your Email" className={styles.input} />
//                     <textarea placeholder="Your Message" className={styles.textarea}></textarea>
//                     <button type="submit" className={styles.submitButton}>Send Message</button>
//                 </form>
//             </section>
//
//             {/* Footer */}
//             <footer className={styles.footer}>
//                 <p>© 2025 Anna Hope Physical Therapy. All rights reserved.</p>
//             </footer>
//         </div>
//     );
// }

import React from 'react';
import Head from 'next/head';

export default function UnderConstruction() {
    return (
        <div style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#f9f9ff',
            fontFamily: '"Poppins", "Roboto", sans-serif',
            padding: '0',
            margin: '0'
        }}>
            <Head>
                <title>Coming Soon | Anna Hope Physical Therapy</title>
                <meta name="description" content="Anna Hope Physical Therapy website is under construction" />
                <link rel="icon" href="/favicon.ico" />
                <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap" rel="stylesheet" />
            </Head>

            <main style={{
                padding: '2rem',
                flex: '1',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                maxWidth: '800px',
                textAlign: 'center'
            }}>
                <div style={{
                    backgroundColor: 'white',
                    borderRadius: '20px',
                    padding: '3rem 2rem',
                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    width: '100%'
                }}>

                    {/* Construction Icon */}
                    <div style={{
                        marginBottom: '2rem',
                        position: 'relative',
                        height: '80px',
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'flex-end'
                    }}>
                        {/* Hard Hat */}
                        <div style={{
                            width: '60px',
                            height: '30px',
                            backgroundColor: '#FFD700',
                            borderRadius: '30px 30px 0 0',
                            position: 'relative',
                            marginBottom: '10px',
                            boxShadow: '0 3px 6px rgba(0, 0, 0, 0.1)',
                            animation: 'float 3s ease-in-out infinite',
                            zIndex: '2'
                        }}>
                            {/* Hat Top */}
                            <div style={{
                                width: '20px',
                                height: '20px',
                                backgroundColor: '#FFD700',
                                borderRadius: '50%',
                                position: 'absolute',
                                top: '-10px',
                                left: '20px'
                            }}></div>
                        </div>

                        {/* Traffic Cones */}
                        <div style={{
                            display: 'flex',
                            position: 'absolute',
                            bottom: '0',
                            justifyContent: 'center',
                            width: '100%',
                            gap: '20px'
                        }}>
                            {[0, 1, 2].map((index) => (
                                <div key={index} style={{
                                    width: '20px',
                                    height: '30px',
                                    backgroundColor: '#FF6B6B',
                                    borderRadius: '2px',
                                    position: 'relative',
                                    animation: `bounce 3s ease-in-out ${index * 0.2}s infinite`
                                }}>
                                    <div style={{
                                        width: '30px',
                                        height: '10px',
                                        backgroundColor: '#FF6B6B',
                                        borderRadius: '3px',
                                        position: 'absolute',
                                        bottom: '0',
                                        left: '-5px'
                                    }}></div>
                                    <div style={{
                                        width: '16px',
                                        height: '6px',
                                        backgroundColor: 'white',
                                        position: 'absolute',
                                        top: '6px',
                                        left: '2px'
                                    }}></div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Title */}
                    <h1 style={{
                        fontSize: '3rem',
                        margin: '0 0 0.5rem 0',
                        fontWeight: '700',
                        color: '#333'
                    }}>
            <span style={{
                color: '#5b9bd5',
                position: 'relative',
                display: 'inline-block',
                animation: 'pulse 3s ease-in-out infinite',
                textShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
            }}>Anna Hope PT</span>
                    </h1>

                    {/* Subtitle */}
                    <div style={{
                        fontSize: '1.5rem',
                        fontWeight: '600',
                        color: '#FF6B6B',
                        marginBottom: '1.5rem',
                        letterSpacing: '1px'
                    }}>
                        Website Under Construction
                    </div>

                    {/* Message */}
                    <div style={{
                        fontSize: '1.1rem',
                        lineHeight: '1.6',
                        color: '#666',
                        marginBottom: '2rem',
                        maxWidth: '500px'
                    }}>
                        <p style={{ margin: '0.5rem 0' }}>The website is getting a little therapy of its own!</p>
                        <p style={{ margin: '0.5rem 0' }}>We're working hard to bring you a great experience.</p>
                        <p style={{ margin: '0.5rem 0' }}>Please check back soon!</p>
                    </div>

                    {/* Coming Soon */}
                    <div style={{
                        margin: '1rem 0 2rem',
                        padding: '0.5rem 1.5rem',
                        borderRadius: '30px',
                        backgroundColor: '#5b9bd5',
                        color: 'white',
                        fontWeight: '600',
                        display: 'flex',
                        alignItems: 'center'
                    }}>
                        Coming Soon
                        <span style={{
                            display: 'inline-flex',
                            marginLeft: '10px'
                        }}>
              {[0, 1, 2].map((index) => (
                  <span key={index} style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      backgroundColor: 'white',
                      margin: '0 3px',
                      display: 'inline-block',
                      animation: `blink 1.4s linear ${index * 0.2}s infinite`
                  }}></span>
              ))}
            </span>
                    </div>

                    {/* Contact Info */}
                    <div style={{
                        borderTop: '1px dashed #ddd',
                        paddingTop: '1.5rem',
                        width: '80%',
                        textAlign: 'center'
                    }}>
                        <p style={{
                            margin: '0 0 0.5rem 0',
                            color: '#666',
                            fontSize: '1rem'
                        }}>For appointments or inquiries:</p>
                        <a href="mailto:contact@annahopept.com" style={{
                            color: '#5b9bd5',
                            textDecoration: 'none',
                            fontWeight: '600',
                            fontSize: '1.1rem',
                            transition: 'color 0.3s ease'
                        }}
                           onMouseOver={(e) => e.target.style.color = '#3a7cb4'}
                           onMouseOut={(e) => e.target.style.color = '#5b9bd5'}>
                            contact@annahopept.com
                        </a>
                    </div>
                </div>
            </main>

            {/* CSS Keyframes */}
            <style jsx global>{`
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-20px); }
          60% { transform: translateY(-10px); }
        }
        
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
          100% { transform: translateY(0px); }
        }
        
        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.05); }
          100% { transform: scale(1); }
        }
        
        @keyframes blink {
          0%, 100% { opacity: 0; }
          50% { opacity: 1; }
        }
        
        body {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
      `}</style>
        </div>
    );
}