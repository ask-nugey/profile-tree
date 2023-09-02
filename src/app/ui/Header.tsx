import { Navigation } from "@/app/ui/Navigation";
import { navLinks } from "@/app/ui/navLinks";
import Link from "next/link";

export default function Header() {
  return (
    <header>
      <h1>
        <Link href="/">プロフィールツリー 🌲</Link>
      </h1>
      <Navigation navLinks={navLinks} />
    </header>
  )
}
