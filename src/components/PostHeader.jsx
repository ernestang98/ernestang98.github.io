const PostHeader = ({ post }) => {
  const { title, coverImage, author, date } = post.fields

  return (
    <>
      <h2>{title}</h2>
    </>
  )
}

export default PostHeader
