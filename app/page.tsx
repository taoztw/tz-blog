// import { sortPosts, allCoreContent } from 'pliny/utils/contentlayer'
import { allBlogs } from 'contentlayer/generated'
import Main from './Main'
import { compareDesc } from 'date-fns'
import { allCoreContent } from 'lib/contentlayer'

export default async function Page() {
  const sortedPosts = allBlogs.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))
  const posts = allCoreContent(sortedPosts)

  return <Main posts={posts} />
}
