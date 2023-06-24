import Image from 'next/image'
import { Nunito } from 'next/font/google';
import Link from 'next/link';

const navFont = Nunito()

export default function Navbar () {
    return (
        <header className={navFont.className}>
        <div className='header-container'>
          <Link href="/">
          <div className='branding'>
            <Image
              src={'/dipp-logo.png'}
              alt="Dipp Logo"
              width={35}
              height={35}
              priority
            />
            <h1>Dipp</h1>
          </div>
          </Link>
          <nav>
            <Link href='/news' >
              <span>News</span>
            </Link>
          </nav>
        </div>
      </header>
    );
};