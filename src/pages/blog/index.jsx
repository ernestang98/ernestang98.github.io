// import { client } from '@/utils/contentful_client'
// import { PostCard } from '@/components/PostCard'

import { client } from "../../utils/contentful_client"
import PostCard from "../../components/PostCard"
import BlogCard from "../../components/BlogCard"
import Nav from "../../components/website/Nav"

const Posts = ({ posts }) => {
  return (
    <section className='section'>
      <Nav/>
      <div className='container'>
        <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:gap-10'>
          {posts.map((post, i) => (
            <BlogCard 
              key={post.sys.id}
              title={post.fields.title}
              tags={post.fields.tags}
              slug={post.fields.slug}
            />
          ))}
        </ul>
      </div>
    </section>
  )
}

export const getStaticProps = async () => {
  const response = await client.getEntries({ content_type: 'blogPost' })
  return {
    props: {
      posts: response.items,
      revalidate: 60
    }
  }
}

export default Posts
