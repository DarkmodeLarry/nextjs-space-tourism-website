import Link from 'next/link'
import Logo from '../public/assets/shared/logo.svg'
import Image from 'next/image'

function Navbar() {
  return (
    <nav className='hidden w-full min-h-screen bg-opacity-50 md:fixed top-10 md:flex'>
      <div className='relative flex items-center justify-between w-full h-24 pl-12 pr-32 backdrop-blur-lg'>
        <div>
          <Image src={Logo} alt='logo' className='w-10 h-10 text-white' />
        </div>
        <ul className='relative pl-52 items-center text-[var(--bellefair)] hidden space-x-20 text-white md:flex '>
          <Link
            href='/'
            className='flex items-center justify-center h-24 border-b-2-transparent hover:border-b-2'
          >
            <li>
              <span className=''>00</span> HOME
            </li>
          </Link>
          <Link href='/planets'>
            <li>
              <span className=''>01</span> DESTINATIONS
            </li>
          </Link>
          <Link href=''>
            <li>
              <span className=''>02</span> CREW
            </li>
          </Link>
          <Link href=''>
            <li>
              <span className=''>03</span> TECHNOLOGY
            </li>
          </Link>
          <span className='absolute bottom-0 w-16 border-b-2 border-white'></span>
        </ul>
        <span className='border-b-2 border-white left-36 top-12 lg:absolute lg:w-[550px] z-20'></span>
      </div>
    </nav>
  )
}

export default Navbar
