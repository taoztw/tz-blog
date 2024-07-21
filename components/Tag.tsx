import Link from 'next/link'
import { slug } from 'github-slugger'
interface Props {
  text: string
}

const Tag = ({ text }: Props) => {
  return (
    <Link
      href={`/tags/${slug(text)}`}
      className="mr-3 rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800 hover:bg-blue-600 hover:text-white dark:bg-green-900 dark:text-green-300 dark:hover:bg-green-600 dark:hover:text-white"
    >
      {text.split(' ').join('-')}
    </Link>
  )
}

export default Tag
