import { allSamples } from "contentlayer/generated"
import { format, parseISO } from "date-fns"
import { useMDXComponent } from "next-contentlayer/hooks"

export const generateStaticParams = async () =>
  allSamples.map((sample) => ({ slug: sample._raw.flattenedPath }))

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const selectedSample = allSamples.find(
    (sample) => sample._raw.flattenedPath === `samples/${params.slug}`
  )
  if (!selectedSample)
    throw new Error(`sample not found for slug: samples/${params.slug}`)
  return { title: selectedSample.title }
}

const SampleLayout = ({ params }: { params: { slug: string } }) => {
  const selectedSample = allSamples.find(
    (sample) => sample._raw.flattenedPath === `samples/${params.slug}`
  )
  if (!selectedSample)
    throw new Error(`sample not found for slug: samples/${params.slug}`)

  const Content = useMDXComponent(selectedSample.body.code)

  return (
    <article className="max-w-xl py-8 mx-auto">
      <div className="mb-8 text-center">
        <time
          dateTime={selectedSample.createdAt}
          className="mb-1 text-xs text-gray-600"
        >
          {format(parseISO(selectedSample.createdAt), "yyyy 년 MM 월 dd 일")}
        </time>
        <h1 className="text-3xl font-bold">{selectedSample.title}</h1>
      </div>
      <div className="prose">
        <Content />
      </div>
    </article>
  )
}

export default SampleLayout
