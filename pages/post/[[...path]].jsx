import { getMenu, getContentById, getSlideshow } from '../../contentful'
import { UpdateText } from '../../components/UpdateText'
import Layout from '../../components/Layout'
export default function Home({
  menu,
  show = [],
  page = {},
  update,
  neighborhoods,
  signup
}) {
  return (<>

    <Layout menu={menu} page={page} signup={signup} neighborhoods={neighborhoods} show={show} >
      {update && <UpdateText key={update.title} {...update} />}
      {!update && // not found page, display 404
        <h1>Sorry, there doesn't seem to be anything at this URL.</h1>
      }
    </Layout>
  </>)
}

export const getServerSideProps = async ({ query, res }) => {
  var menu = await getMenu()
  var show = await getSlideshow()
  var neighborhoods = await getContentById('4ydMQwzKqYOJGLAeZqp9DG')
  var signup = await getContentById('kxAhXgspXuMhAeY5OqwDa')

  // dynamic post content created by path
  var postId = query.path ? query.path[0] : null
  var update = await getContentById(postId)

  // 404 if we dont get a page
  if (!update) {
    res.statusCode = 404
  }

  return {
    props: {
      menu,
      show,
      update,
      neighborhoods,
      signup
    },
  };
}
