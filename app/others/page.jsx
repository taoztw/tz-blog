import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'About' })

export default function Page() {
  return <div className="h-screen w-screen bg-black"></div>
}
