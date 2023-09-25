import { allSamples } from "contentlayer/generated"
import { format, parse, parseISO } from "date-fns"
import { useMDXComponent } from "next-contentlayer/hooks"

export const generateStaticParams = async () =>
  allSamples.map((sample) => ({ slug: sample._raw.flattenedPath }))

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const sample = allSamples.find(
    (sample) => sample._raw.flattenedPath === `samples/${params.slug}`
  )
  if (!sample)
    throw new Error(`sample not found for slug: samples/${params.slug}`)
  return { title: sample.title }
}

const SampleLayout = ({ params }: { params: { slug: string } }) => {
  const sample = allSamples.find(
    (sample) => sample._raw.flattenedPath === `samples/${params.slug}`
  )
  if (!sample)
    throw new Error(`sample not found for slug: samples/${params.slug}`)

  const Content = useMDXComponent(sample.body.code)

  return (
    <article className="mx-auto max-w-xl py-8">
      <div className="mb-8 text-center">
        <time
          dateTime={sample.createdAt}
          className="mb-1 text-xs text-gray-600"
        >
          {format(parseISO(sample.createdAt), "yyyy 년 MM 월 dd 일")}
        </time>
        <h1 className="text-3xl font-bold">{sample.title}</h1>
      </div>
      <div className="prose">
        <Content />
      </div>
    </article>
  )
}

export default SampleLayout
