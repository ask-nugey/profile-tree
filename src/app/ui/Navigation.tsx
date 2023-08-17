'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { NavLink } from '@/types';

interface Props {
  navLinks: NavLink[];
}

export function Navigation({ navLinks }: Props) {
  const pathname = usePathname()

  return (
    <>
      {navLinks.map((link) => {
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
