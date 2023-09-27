import SampleCard from "~/components/SampleCard"
import PostCard from "components/PostCard"
import { allPosts, allSamples } from "contentlayer/generated"
import { compareDesc } from "date-fns"
import { select } from "utils/select"

const PostListPage = () => {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.createdAt), new Date(b.createdAt))
  )
  const samples = allSamples
    .map((sample) => select(sample, ["slug", "url", "title", "createdAt"]))
    .sort((a, b) => compareDesc(new Date(a.createdAt), new Date(b.createdAt)))

  console.log(samples)
  return (
    <>
      <div className="">
        <h1 className="mb-8 text-2xl font-black text-center">
          Next.js + Contentlayer Example
        </h1>
        {posts.map((post) => (
          <PostCard key={post._id} {...post} />
        ))}
        {samples.map((sample) => (
          <SampleCard key={sample._id} {...sample} />
        ))}
      </div>
    </>
  )
}

export default PostListPage
