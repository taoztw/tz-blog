'use client'
import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Link from './Link'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import SearchButton from './SearchButton'
import { cn } from 'lib/utils'
import Image from 'next/image'
import { useEffect, useState } from 'react'

const logoPath = '/static/logo.svg'

function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  useEffect(() => {
    const changeBackground = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    document.addEventListener('scroll', changeBackground)

    return () => document.removeEventListener('scroll', changeBackground)
  }, [])
  return (
    <header
      className={cn(
        `fixed inset-x-0 left-[calc(100vw-100%)] top-4 z-40 mx-8 flex h-[60px] items-center justify-between rounded-3xl border border-border bg-card px-4 shadow-sm saturate-100 backdrop-blur-[4px]  transition-all duration-200 header-md:mx-auto header-md:max-w-[768px] header-md:px-8 header-lg:max-w-[1168px] ${isScrolled && 'border-transparent bg-background/80'}`
      )}
    >
      <div className="mx-auto flex h-[60px] w-full items-center justify-between">
        <div>
          <Link href="/" aria-label={siteMetadata.headerTitle}>
            <div className="flex items-center justify-between">
              <div className="mr-3">
                <Image src={logoPath} alt="The Blog Logo" width={32} height={32} />
              </div>
              <div className="ml-0 inline-flex max-w-full items-center rounded-full border border-primary-500 bg-transparent px-2.5 py-0.5 text-xs font-semibold text-primary backdrop-blur-md transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-lime-400 focus:ring-offset-2 sm:ml-0 md:ml-0">
                <div className="mr-1 flex aspect-square h-[14px] w-[14px] animate-pulse rounded-full bg-green-500/50 dark:bg-green-400/50"></div>
                <span className="inline whitespace-nowrap">Innovating</span>
              </div>

              {typeof siteMetadata.headerTitle === 'string' ? (
                <div className="hidden h-6 text-2xl font-semibold sm:block">
                  {siteMetadata.headerTitle}
                </div>
              ) : (
                siteMetadata.headerTitle
              )}
            </div>
          </Link>
        </div>

        {/* 菜单项  */}
        <div className="group flex items-center justify-center space-x-3">
          {headerNavLinks
            .filter((link) => link.href !== '/')
            .map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className="group hidden w-max rounded-md px-4 py-2 font-body text-sm  font-bold text-gray-900 transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground  focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 dark:text-gray-100 dark:hover:text-lime-400 sm:block"
              >
                {link.title}
              </Link>
            ))}
          <SearchButton />
          <ThemeSwitch />
          <MobileNav />
        </div>
      </div>
    </header>
  )
}

export default Header
