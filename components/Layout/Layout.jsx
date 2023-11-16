import React from "react";
import Head from 'next/head'
import { Menu } from '../Menu'
import { Slideshow } from '../Slideshow'
import { Footer } from '../Footer'
import { Submenu } from '../Submenu'
import { Search } from '../Search'
import { EmailSignup } from '../EmailSignup'
import { PageText } from '../PageText'
import styles from '../../styles/MainLayout.module.css'

function Layout({ children, menu, page, signup, neighborhoods, show, slug, hasSideBar }) {
  return (
    <div>
      <Head>
        <title>
          {page?.title ? `${page && page.title}` : "Arbor Lodge Neighborhood, Portland OR"}
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav>
        <Menu items={menu} />
      </nav>
      <Slideshow images={show} />
      <main className={`${styles.main} ${styles.container}`}>
        <section className={styles.left}>
          {/* /// Page Elements /// */}
          {children}
        </section>
        {hasSideBar && (
          <section className={styles.right}>
            <Search />
            {page && slug ? <Submenu menu={menu} page={page} /> : null}
            <EmailSignup content={signup} />

            <iframe
              src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FLos_Angeles&mode=AGENDA&showTz=0&showCalendars=0&showTabs=0&showNav=0&src=MDg4ZjQ2ZDk2YTk5YjUzZmIzYWJlZGVjNGJiZmE4ZjY0YTlkYmM5MGQ2ZjI0NTNiMWE2MWZlOTU5ZjZkNGY2ZEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%238E24AA"
              style={{ "border": "solid 1px #777" }}
              width="100%"
              height="350"
              frameBorder="0"
            />
            <br /><br />
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d22343.47670235109!2d-122.693268!3d45.571754!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5495a7a3b74d15c1%3A0xf60b1b34aa1f920b!2sArbor%20Lodge%2C%20Portland%2C%20OR%2097217!5e0!3m2!1sen!2sus!4v1645495845525!5m2!1sen!2sus"
              width="100%"
              height="350"
              style={{ border: 0 }}
              loading="lazy"
            />
            <br /><br />
            <PageText title={neighborhoods.title} content={neighborhoods.text} />
          </section>
        )}
      </main>


      <Footer items={menu} />
    </div>
  );
}

export default Layout;
