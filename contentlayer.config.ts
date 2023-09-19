import { defineDocumentType, makeSource } from "contentlayer/source-files"
import highlight from "rehype-highlight"
import rehypePrettyCode from "rehype-pretty-code"

export const Post = defineDocumentType(() => ({
  name: "Post",
  contentType: "mdx",
  filePathPattern: `**/*.mdx`,
  fields: {
    title: {
      type: "string",
      required: true
    },
    createdAt: {
      type: "date",
      required: true
    },
    tags: {
      type: "list",
      of: { type: "string" },
      required: false
    },
    thumbnail: {
      type: "string",
      required: false
    }
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (post) => `/posts/${post._raw.flattenedPath}`
    },
    slug: {
      type: "string",
      resolve: (doc) => doc._raw.sourceFileName.replace(".mdx", "")
    }
  }
}))

const contentSource = makeSource({
  contentDirPath: "posts", // 마크다운 파일이 저장되어 있는 루트 폴더
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [],
    rehypePlugins: []
  }
})

export default contentSource
