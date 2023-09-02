'use client'

import { useSelectedLayoutSegments } from 'next/navigation'
import Link from 'next/link'
import { NavLink } from '@/types';

interface Props {
  navLinks: NavLink[];
}

export function Navigation({ navLinks }: Props) {
  const segments = useSelectedLayoutSegments();

  return (
    <ul>
      {navLinks.map((link) => {
        const isActive = segments[0] === link.href[0]

        return (
          <Link
            className={isActive ? "is-active" : ""}
            href={`/${link.href.join("/")}`}
            key={link.name}
          >
            {link.name}
          </Link>
        );
      })}
    </ul>
  )
}
