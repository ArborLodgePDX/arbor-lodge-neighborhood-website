import React from 'react'
import {
  getMenu,
  getContentById,
} from "../contentful";
import Layout from "../components/Layout";
import styles from "../styles/Junk.module.css"

const logos = [
  { img: 'dwdc7ahmqkjmf8dpgbag', link: 'https://www.elburritoazteca.com', alt: 'El Burrito Azteca' },
  { img: 'fh0m4od7vjpn6walytql', link: 'https://www.originalsexycoffee.com', alt: 'Grind House Coffee' },
  { img: 'c6kueus00zmp3gwgvkay', link: 'https://www.ridwell.com', alt: 'Ridwell' },
  { img: 'dfdoylhblqm4gzmzfvwd', link: 'https://www.agilyx.com', alt: 'Agilyx' },
  { img: 'm0ea712r1zlvrp2olreh', link: 'https://www.oregonmetro.gov', alt: 'Metro' },
  { img: 'm3hmcnn78fctprwbvnqa', link: 'https://www.finopdx.com', alt: 'Pizza Fino' },
  { img: 'fmriqs1ymnw3qot0vljv', link: 'https://www.junkluggers.com', alt: 'The JunkLuggers' },
  { img: 'dn7yyqjnq0l9dx36nan4', link: 'https://www.posiescafe.com', alt: 'Posies cafe' }]

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
      <div className={styles.heading}>

        <h1 className={styles.header}>
          <span className={styles.headerBold} >
            Waste
          </span>
          Collection
          Event
        </h1>

        <div className={styles.when}>
          <div>
            <div>September 30th,  2023</div>
            <div>10:00am to 2:00pm</div>
          </div>
          <a href="https://www.signupgenius.com/go/10C084EAEAE2AA2FFC70-arbor" alt="sign up to volunteer">
            <button className={styles.volunteerBtn}>
              Volunteer Sign Up
            </button>
          </a>
        </div>

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
              $10 Donation per waste drop
            </p>
          </div>
          <p className={styles.mapSchool}>
            Chief Joseph
            Elementary School
          </p>
          <img className={styles.mapImg} src="https://res.cloudinary.com/dtqlulaog/image/upload/v1692332870/alna/ipl6jq6d57op9kmv8xar.png" alt="arbor lodge park map" />
        </div>

        <div>
          <p>
            Join us for this year's community waste collection event and drop off your unwanted household items.
          </p>
          <p>
            The event will be located on North Delaware ave. between North Saratoga Street and North Dekum Street.
          </p>
          <p>
            It will happen on September 30th between 10:00am and 2:00pm.
          </p>
          <p>
            This event is a collaborative effort by the Arbor Lodge, Kenton, and Overlook Neighborhood Associations, made possible by generous donations from our sponsors.
          </p>
        </div>
      </div>

      <div>
        <h2>
          What To Bring:
        </h2>
        <ul>
          <li>
            House hold Junk
          </li>
          <li>
            Metal
          </li>
          <li>
            Electronics
          </li>
          <li>
            Microwaves
          </li>
          <li>
            Block Styrofoam - <span className={styles.textBold}>no peanuts or film</span>
          </li>
          <li>
            Clear #1 plastic clam shells
          </li>
          <li>
            Clear plastic bag - <span className={styles.textBold}>bread bags, zip locks</span>
          </li>
        </ul>
      </div>
      <div>
        <h2>
          What <span className={styles.textBold}>Not</span> To Bring:
        </h2>
        <ul>

          <li>
            Painted Items
          </li>
          <li>
            Any construction/remodeling waste materials
          </li>
          <li>
            Yard Debris, Kitchen waste, dirt or stumps
          </li>
          <li>

            Commercial or hazardous waste
            Concrete, constrictors loads, any foam or asbestos
          </li>
          <li>
            Batteries
          </li>
          <li>
            Demolition debris
            <ol>
              <li>
                Tiles
              </li>
              <li>
                Plaster
              </li>
              <li>
                Shingles
              </li>
              <li>
                Ceiling
              </li>
              <li>
                Insulation
              </li>
              <li>
                Electrical wire
              </li>
              <li>
                Insulation
              </li>
              <li>
                Fireproofing
              </li>
            </ol>
          </li>
          <li>
            Starch or Styrofoam peanuts, PE, PP Foam
          </li>
          <li>
            Clothing, Shoes, or Fabrics
          </li>
        </ul>

      </div>

      <div>
        <h2>Please support our sponsors:</h2>
        <div className={styles.logoImg}>
          {logos.map(logo => (
            <div key={logo}>
              <a href={logo.link}>
                <img src={`https://res.cloudinary.com/dtqlulaog/image/upload/w_150,c_scale/v1690610434/alna/${logo.img}.png`} alt={logo.alt} />
              </a>
            </div>
          ))}
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
