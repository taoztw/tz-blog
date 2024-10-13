import { Authors, allAuthors } from 'contentlayer/generated'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import AuthorLayout from '@/layouts/AuthorLayout'
// import { coreContent } from 'pliny/utils/contentlayer'
import { coreContent } from 'lib/contentlayer'
import { genPageMetadata } from 'app/seo'
import Markdown from 'react-markdown'

export const metadata = genPageMetadata({ title: 'About' })

export default function Page() {
  const author = allAuthors.find((p) => p.slug === 'default') as Authors
  const mainContent = coreContent(author)

  return (
    <>
      <AuthorLayout content={mainContent}>
        {/* <MDXLayoutRenderer code={author.body.code} /> */}
        <Markdown>{author.body.raw}</Markdown>
      </AuthorLayout>
    </>
  )
}
