'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

export function Navigation({ navLinks }: any) {
  const pathname = usePathname()

  return (
    <>
      {navLinks.map((link: any) => {
        const isActive = pathname === link.href

        return (
          <Link
            className={isActive ? 'is-active' : ''}
            // className={`${styles.link} ${pathname === '/' ? styles.active : ''}`}
            href={link.href}
            key={link.name}
          >
            {link.name}
          </Link>
        )
      })}
    </>
  )
}
