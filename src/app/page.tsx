import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'

export default function Page() {
  return (
    <main>
      <div className="c-block">
        <Link href="/question?index=0" className="c-btn">
          プロフィールを作成する
        </Link>
      </div>
    </main>
  );
}
