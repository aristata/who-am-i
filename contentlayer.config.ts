import { defineDocumentType, makeSource } from "contentlayer/source-files"
import rehypePrettyCode from "rehype-pretty-code"
import readingTime from "reading-time"

export const Sample = defineDocumentType(() => ({
  name: "Sample",
  contentType: "mdx",
  filePathPattern: "samples/*.mdx",
  fields: {
    title: {
      type: "string",
      required: true
    },
    createdAt: {
      type: "date",
      required: true
    }
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (sample) => `${sample._raw.flattenedPath}`
    },
    slug: {
      type: "string",
      resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, "")
    }
  }
}))

export const Post = defineDocumentType(() => ({
  name: "Post",
  contentType: "mdx",
  filePathPattern: `posts/**/*.mdx`,
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
      resolve: (post) => `${post._raw.flattenedPath}`
    },
    slug: {
      type: "string",
      resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, "")
    },
    readingTime: { type: "json", resolve: (doc) => readingTime(doc.body.raw) },
    wordCount: {
      type: "number",
      resolve: (doc) => doc.body.raw.split(/\s+/gu).length
    }
  }
}))

const prettyCodeOptions = {
  theme: "one-dark-pro",
  defaultLang: {
    block: "typescript",
    inline: "plaintext"
  },
  showLineNumbers: true
}

const contentSource = makeSource({
  contentDirPath: "datas", // 마크다운 파일이 저장되어 있는 루트 폴더
  documentTypes: [Post, Sample],
  mdx: {
    remarkPlugins: [],
    rehypePlugins: [[rehypePrettyCode, prettyCodeOptions]]
  }
})

export default contentSource
