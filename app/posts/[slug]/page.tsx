import { allPosts } from "contentlayer/generated"
import { format, parseISO } from "date-fns"
import { Metadata } from "next"
import { useMDXComponent } from "next-contentlayer/hooks"
import { notFound } from "next/navigation"

interface PostProps {
  params: {
    slug: string[]
  }
}

async function getPostFromParams(params: PostProps["params"]) {
  const slug = params?.slug?.join("/")
  const post = allPosts.find((post) => post.slugAsParams === slug)

  if (!post) {
    null
  }

  return post
}

export async function generateMetadata({
  params,
}: PostProps): Promise<Metadata> {
  const post = await getPostFromParams(params)

  if (!post) {
    return {}
  }

  return {
    title: post.title,
    description: post.description,
  }
}

export async function generateStaticParams(): Promise<PostProps["params"][]> {
  return allPosts.map((post) => ({
    slug: post.slugAsParams.split("/"),
  }))
}

const PostLayout = async ({ params }: PostProps) => {
  const post = await getPostFromParams(params)

  if (!post) {
    notFound()
  }

  const Content = useMDXComponent(post.body.code)

  return (
    <article className="max-w-xl py-8 mx-auto">
      <div className="mb-8 text-center">
        <time
          dateTime={post.createdAt}
          className="mb-1 text-xs text-gray-600"
        >
          {format(parseISO(post.createdAt), "yyyy 년 MM 월 dd 일")}
        </time>
        <h1 className="text-3xl font-bold">{post.title}</h1>
      </div>
      <Content />
    </article>
  )
}

export default PostLayout
