import { allPosts } from "contentlayer/generated"
import { format, parse, parseISO } from "date-fns"
import { useMDXComponent } from "next-contentlayer/hooks"

export const generateStaticParams = async () =>
  allPosts.map((post) => ({ slug: post._raw.flattenedPath }))

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find(
    (post) => post._raw.flattenedPath === `posts/${params.slug}`
  )
  if (!post) throw new Error(`Post not found for slug: posts/${params.slug}`)
  return { title: post.title }
}

const PostLayout = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find(
    (post) => post._raw.flattenedPath === `posts/${params.slug}`
  )
  if (!post) throw new Error(`Post not found for slug: posts/${params.slug}`)

  const Content = useMDXComponent(post.body.code)

  return (
    <article className="mx-auto max-w-xl py-8">
      <div className="mb-8 text-center">
        <time dateTime={post.createdAt} className="mb-1 text-xs text-gray-600">
          {format(parseISO(post.createdAt), "yyyy 년 MM 월 dd 일")}
        </time>
        <h1 className="text-3xl font-bold">{post.title}</h1>
      </div>
      <Content />
    </article>
  )
}

export default PostLayout
