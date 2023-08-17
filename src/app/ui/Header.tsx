import { Navigation } from "@/app/ui/Navigation";
import { NavLink } from "@/types";
import Link from "next/link";

const navLinks: NavLink[] = [
  {
    href: '/question',
    name: '質問に答える'
  },
  // {
  //   href: '/profile',
  //   name: 'マイプロフィール'
  // },
]

export default function Header() {
  return (
    <header>
      <h1>
        <Link href="/">プロフィールツリー 🌲</Link>
      </h1>
      {/* <Navigation navLinks={navLinks} /> */}
    </header>
  )
}
