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

export default function Home({
  menu,
  show = [],
  slug,
  page = {},
  updates = {},
  neighborhoods,
  signup,
}) {
  return (
    <>
      <Layout
        menu={menu}
        signup={signup}
        neighborhoods={neighborhoods}
        show={show}
        page={page}
        slug={slug}
        hasSideBar={slug !== "land-use"}
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

        {slug === "land-use" && (
          <div className={styles.landUseMargin}>
            <h2>Recent Land Use Updates</h2>
            <div className={styles.landUseLink}>
              <a href="https://docs.google.com/spreadsheets/d/1m4Xg_HA6kGrkcmClRkrmn1f9GZKLIFxQECQSE7fkicg/edit?usp=sharing">Land Use Google Sheet</a>
            </div>
            <br />
            <div className={styles.landUseTable}>
              <iframe width='100%' height='80%' src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTF2-aPnzD-ZUA3O7uV_aq2dZihItDpBoxeBipvJA91vllw7TX3m3RZW33_sxZB90WEbetenqVFmM2n/pubhtml?gid=0&amp;single=true&amp;widget=true&amp;headers=false"></iframe>
            </div>
          </div>
        )}

        {!page && ( // not found page, display 404
          <h1>Sorry, there doesn't seem to be anything at this URL.</h1>
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
