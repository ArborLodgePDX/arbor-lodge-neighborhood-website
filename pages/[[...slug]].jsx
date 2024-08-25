import styles from "../styles/MainLayout.module.css";
import {
  getLatestUpdates,
  getMenu,
  getContentById,
  getPageBySlug,
  getSlideshow,
} from "../contentful";
import Layout from "../components/Layout";
import { UpdateText } from "../components/UpdateText";
import { PageText } from "../components/PageText";
import { Pagination } from "../components/Pagination";
import LandUse from "../components/LandUse/LandUse";
import Calendar from "../components/Calendar";

export default function Home({
  menu,
  show = [],
  slug,
  page = {},
  updates = {},
  neighborhoods,
  signup,
}) {
  const disableSideBar = slug === "land-use" || slug === "calendar";
  return (
    <>
      <Layout
        menu={menu}
        signup={signup}
        neighborhoods={neighborhoods}
        show={show}
        page={page}
        slug={slug}
        hasSideBar={!disableSideBar}
      >
        {page &&
          !slug && ( // homepage should just map updates
            <div>
              {updates.entries.map((update) => (
                <UpdateText key={update.title} {...update} />
              ))}
              <div className={styles.pagination}>
                <Pagination baseUrl="/" {...updates} />
              </div>
            </div>
          )}
        {page &&
          slug && ( // found page, display title and content
            <PageText title={page.title} content={page.pageContent} />
          )}

        {slug === "land-use" && <LandUse />}
        {slug === "calendar" && <Calendar />}

        {!page && ( // not found page, display 404
          <h1>Sorry, there doesn&apos;t seem to be anything at this URL.</h1>
        )}
      </Layout>
    </>
  );
}

export const getServerSideProps = async ({ query, res }) => {
  var menu = await getMenu();
  var show = await getSlideshow();
  var neighborhoods = await getContentById("4ydMQwzKqYOJGLAeZqp9DG");
  var signup = await getContentById("kxAhXgspXuMhAeY5OqwDa");

  // dynamic page created by slug
  var slug = query.slug ? query.slug[0] : null;
  var page = slug
    ? await getPageBySlug(slug)
    : await getContentById("6wKUqAuj95bWl80kpUreYN");

  // 404 if we dont get a page
  if (!page) {
    res.statusCode = 404;
  }

  var isLandUse = query.slug == "land-use";
  var updates = await getLatestUpdates(query.p, isLandUse);

  return {
    props: {
      menu,
      page: page ? page : null, // page undef is causing serialization error here.
      show,
      updates,
      slug,
      neighborhoods,
      signup,
    },
  };
};
