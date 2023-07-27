import React from 'react'
import {
  getMenu,
  getContentById,
} from "../contentful";
import Layout from "../components/Layout";
import styles from "../styles/Junk.module.css"


function junk({ menu, neighborhoods, signup }) {
  return (
    <Layout
      menu={menu}
      signup={signup}
      neighborhoods={neighborhoods}
      show={[]}
      page={{}}
      slug={'Junk'}
      hasSideBar
    >
      <h1 className={styles.header}>
        <span className={styles.headerBold} >
          Waste
        </span>
        Collection
        Event
      </h1>

      <div className={styles.when}>
        <div>September 30th,  2023</div>
        <div>10:00am to 2:00pm</div>
      </div>

      <div>
        <h2>
          Where:
        </h2>
        <div>
          North Delaware Ave. Portland Oregon
        </div>

        <div className={styles.mapContainer}>
          <div className={styles.mapTitleSection}>
            <h2 className={styles.mapTitle}>
              Arbor Lodge Park
            </h2>
            <p className={styles.mapDonate}>
              $10 Donation per wast drop
            </p>
          </div>
          <p className={styles.mapSchool}>
            Chief Joseph
            Elementary School
          </p>
          <img className={styles.mapImg} src="arbor-lodge-park.jpg" alt="arbor lodge park map" />
        </div>

        <div>
          <p>
            Join us for this year's community waste collection event and drop off your unwanted household items.
          </p>
          <p>
            This event is a collaborative effort by the Arbor Lodge, Kenton, and Overlook Neighborhood Associations, made possible by generous donations from our sponsors.
          </p>
        </div>
      </div>

      <div>
        <h2>
          What We Will Accept:
        </h2>
        <p>
          House hold Junk
          Metal
          Electronics
          Microwaves
          Block Styrofoam [no peanuts or film]
          Clear #1 plastic clam shells
          Clear plastic bag [bread bags, zip locks]
        </p>
      </div>

      <div>
        <h2>Please support our sponsors</h2>
        <div>
          Sponsors
        </div>
      </div>

    </Layout>
  )
}

export default junk

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
