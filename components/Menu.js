import React, { useState } from "react";

import Image from "next/image";
import Link from "next/link";
import { Pages } from "./Pages";
import { Socials } from "../components/Socials";
import styles from "../styles/Menu.module.css";

export const Menu = ({ items }) => {
  const isDesktop = global.window ? global.window.innerWidth > 768 : false;

  const [isMenuExpanded, setMenuExpanded] = useState(isDesktop);

  const handleMenuClick = () => {
    if (!isDesktop) {
      setMenuExpanded(false);
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.top}>
        <Link href="/">
          <a className={styles.logo}>
            <Image
              src="/arbor_lodge_association_logo.png"
              alt="Logo"
              width={100}
              height={120}
            />
          </a>
        </Link>
        <div className={styles.flexExpander} />
        <div className={styles.headerButtons}>
          <div className={styles.headerButton}>
            <Link href="/waste-collection">
              <a>
                <span
                  className={`${styles.buttonIcon} ${styles.wastecollection}`}
                />
                <span className={styles.headerButtonText}>Collecton Event</span>
              </a>
            </Link>
          </div>
          <div className={styles.headerButton}>
            <Link href="/donations">
              <a>
                <span className={`${styles.buttonIcon} ${styles.donate}`} />
                <span className={styles.headerButtonText}>Donate</span>
              </a>
            </Link>
          </div>

          <div className={styles.headerButton}>
            <a
              href="https://arborlodgeneighborhood.us3.list-manage.com/subscribe/post?u=ebf29143f036362e0c576e6ed&amp;id=e786761a57"
              target="_blank"
              rel="noreferrer"
            >
              <span className={`${styles.buttonIcon} ${styles.envelope}`} />
              <span className={styles.headerButtonText}>Subscribe</span>
            </a>
          </div>
        </div>
        <Socials />
        <div
          className={styles.toggle}
          onClick={() => setMenuExpanded(!isMenuExpanded)}
        >
          <a className={!isMenuExpanded ? styles.hamburger : styles.close}>
            <span>Toggle Menu</span>
          </a>
        </div>
      </div>
      <div className={styles.bar}>
        <Pages
          items={items}
          ulStyle={styles.menu}
          display={isMenuExpanded}
          closeMenu={handleMenuClick}
          isDesktop={isDesktop}
        />
      </div>
    </div>
  );
};
