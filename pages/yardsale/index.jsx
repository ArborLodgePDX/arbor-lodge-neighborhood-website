import React from "react";
import Head from "next/head"; // Import Head
import { getMenu, getContentById } from "../../contentful";
import Layout from "../../components/Layout";
import styles from "../../styles/Junk.module.css";

export default function yardsale({ menu, neighborhoods, signup }) {
  return (
    <>
      <Head>
        <title>Arbor Lodge Neighborhood Yard Sale 2025 - Sign Up</title>
        <meta
          name="description"
          content="Register for the 4th Annual Arbor Lodge Neighborhood Yard Sale on June 14-15, 2025. Clear clutter, find treasures, and connect with your community!"
        />
      </Head>
      <Layout
        menu={menu}
        signup={signup}
        neighborhoods={neighborhoods}
        show={[]}
        page={{}}
        slug={"yardsale"}
        hasSideBar
      >
        <div className={styles.heading}>
          <h1>
            4th Annual Arbor Lodge
            <span className={styles.headerBold}>Neighborhood Yard Sale</span>
          </h1>

          <div className={styles.when}>
            <div>
              <div>June 14th and 15th, 2025</div>
              <div>Saturday and Sunday</div>
            </div>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSfshNVpRfBR8Fi35vM-bNmG4eabKTTHr9SPCabX49JAZc2fXA/viewform?pli=1">
              <button className={styles.volunteerBtn}>Signup Form</button>
            </a>
          </div>
        </div>
        <div>
          <h2>Details</h2>
          <p>
            Join your neighbors for the 4th Annual Arbor Lodge Neighborhood Yard
            Sale weekend! This collaborative event is a great way to clear out
            unwanted items, find new treasures, and connect with your community.
          </p>

          <p>To add your house to the yardsale map fill out the form below.</p>
          <div>
            <iframe
              width="100%"
              height="1900px"
              src="https://docs.google.com/forms/d/e/1FAIpQLSfshNVpRfBR8Fi35vM-bNmG4eabKTTHr9SPCabX49JAZc2fXA/viewform?pli=1"
            />
          </div>
        </div>
      </Layout>
    </>
  );
}

export const getServerSideProps = async ({ query, res }) => {
  var menu = await getMenu();
  var signup = await getContentById("kxAhXgspXuMhAeY5OqwDa");
  var neighborhoods = await getContentById("4ydMQwzKqYOJGLAeZqp9DG");

  return {
    props: {
      menu,
      neighborhoods,
      signup,
    },
  };
};
