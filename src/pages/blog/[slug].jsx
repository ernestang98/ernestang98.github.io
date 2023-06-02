import PostBody from '../../components/PostBody'
import PostHeader from '../../components/PostHeader'
import { useRouter } from 'next/router'
import { client } from "../../utils/contentful_client"
import Nav from "../../components/Nav"

const Post = ({ post, preview }) => {
  const router = useRouter()

  return (
    <section className='section'>
      <Nav />
      <div className='container'>
        <article className='prose mx-auto'>
          {router.isFallback ? (
            <div/>
          ) : (
            <>
              <PostHeader post={post} />
              <PostBody post={post} />
            </>
          )}
        </article>
      </div>
    </section>
  )
}

export const getStaticProps = async ({ params, preview = false }) => {
  const cfClient = client
  const { slug } = params
  console.log(slug)
  const response = await cfClient.getEntries({
    content_type: 'blogPost',
    'fields.slug': slug
  })

  if (!response?.items?.length) {
    return {
      redirect: {
        destination: '/posts',
        permanent: false
      }
    }
  }

  return {
    props: {
      post: response?.items?.[0],
      preview,
      revalidate: 60
    }
  }
}

export const getStaticPaths = async () => {
  const response = await client.getEntries({ content_type: 'blogPost' })
  const paths = response.items.map(item => ({
    params: { slug: item.fields.slug }
  }))

  return {
    paths,
    fallback: true
  }
}

export default Post
