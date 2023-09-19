import PostCard from "components/PostCard"
import { allPosts } from "contentlayer/generated"
import { compareDesc } from "date-fns"

const PostListPage = () => {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.createdAt), new Date(b.createdAt))
  )

  return (
    <>
      <div className="">
        <h1 className="mb-8 text-center text-2xl font-black">
          Next.js + Contentlayer Example
        </h1>
        {posts.map((post) => (
          <PostCard key={post._id} {...post} />
        ))}
      </div>
    </>
  )
}

export default PostListPage
