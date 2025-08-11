'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

import './nabar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const pathname = usePathname();

  return (
    <div className='px-4 py-5 bg-white mx-auto sm:max-w-full md:max-w-full lg:max-w-screen md:px-24 lg:px-14 sticky top-0 z-50 header-shadow'>
      <div className='relative flex items-center justify-between'>
        <Link href='/' className='inline-flex items-center'>
          <img className='w-48' src='/image/PNT-orginal-PNG.png' alt='logo' />
        </Link>
        <ul className='flex items-center hidden space-x-7 lg:flex'>
          <li>
            <Link
              href='/'
              aria-label='Home'
              className={`font-semibold tracking-wide text-[15px] transition-colors duration-200 ${
                pathname === '/'
                  ? 'text-primary font-bold'
                  : 'text-gray-700 hover:text-primary'
              }`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href='/about'
              aria-label='live'
              className={`font-semibold tracking-wide text-[15px] transition-colors duration-200 ${
                pathname === '/about'
                  ? 'text-primary font-bold'
                  : 'text-gray-700 hover:text-primary'
              }`}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              href='/course'
              className={`font-semibold tracking-wide text-[15px] transition-colors duration-200 ${
                pathname === '/course'
                  ? 'text-primary font-bold'
                  : 'text-gray-700 hover:text-primary'
              }`}
            >
              <p> Courses</p>
            </Link>
          </li>
          <li>
            <Link
              href='/upcoming-batches'
              className={`font-semibold tracking-wide text-[15px] transition-colors duration-200 ${
                pathname === '/upcoming-batches'
                  ? 'text-primary font-bold'
                  : 'text-gray-700 hover:text-primary'
              }`}
            >
              Upcoming Batch
            </Link>
          </li>
          <li>
            <Link
              href='/seminars'
              aria-label='Seminars'
              title=' Seminars '
              className={`font-semibold tracking-wide text-[15px] transition-colors duration-200 ${
                pathname === '/seminars'
                  ? 'text-primary font-bold'
                  : 'text-gray-700 hover:text-primary'
              }`}
            >
              Join Seminars
            </Link>
          </li>
          <li>
            <Link
              href='/contact'
              className={`font-semibold tracking-wide text-[15px] transition-colors duration-200 ${
                pathname === '/contact'
                  ? 'text-primary font-bold'
                  : 'text-gray-700 hover:text-primary'
              }`}
            >
              Contact
            </Link>
          </li>

          <li>
            <Link href='/login' className='btn-primary hover-up-2'>
              Sign Up
            </Link>
          </li>
        </ul>
        <div className='lg:hidden'>
          <button
            aria-label='Open Menu'
            title='Open Menu'
            className='p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50'
            onClick={() => setIsMenuOpen(true)}
          >
            <svg className='w-5 text-gray-600' viewBox='0 0 24 24'>
              <path
                fill='currentColor'
                d='M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z'
              />
              <path
                fill='currentColor'
                d='M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z'
              />
              <path
                fill='currentColor'
                d='M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z'
              />
            </svg>
          </button>
          {isMenuOpen && (
            <div className='absolute top-0 left-0 w-full z-10'>
              <div className='p-5 bg-white border rounded shadow-sm'>
                <div className='flex items-center justify-between mb-4'>
                  <div>
                    <Link
                      href='/'
                      aria-label=' iTesser-act'
                      title=' iTesser-act'
                      className='inline-flex items-center'
                    >
                      <img
                        className='w-48'
                        src='/image/PNT-orginal-PNG.png'
                        alt='logo'
                      />
                    </Link>
                  </div>
                  <div>
                    <button
                      aria-label='Close Menu'
                      title='Close Menu'
                      className='p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline'
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <svg className='w-5 text-gray-600' viewBox='0 0 24 24'>
                        <path
                          fill='currentColor'
                          d='M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z'
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <nav>
                  <ul className='space-y-4 text-center'>
                    <li>
                      <Link
                        href='/'
                        aria-label='Home'
                        className='font-semibold tracking-wide text-[15px]  transition-colors duration-200 text-gray-700 hover:text-primary'
                      >
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        href='/live'
                        aria-label='live'
                        className='font-semibold tracking-wide text-[15px]  transition-colors duration-200 text-gray-700 hover:text-primary'
                      >
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link
                        href='/course'
                        className='font-semibold tracking-wide text-[15px]  transition-colors duration-200 text-gray-700 hover:text-primary'
                      >
                        <p> Courses</p>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href='/team'
                        className='font-semibold tracking-wide text-[15px]  transition-colors duration-200 text-gray-700 hover:text-primary'
                      >
                        Upcoming Batch
                      </Link>
                    </li>
                    <li>
                      <Link
                        href='/blogs'
                        aria-label='Blog '
                        title=' ব্লগ '
                        className='font-semibold tracking-wide text-[15px]  transition-colors duration-200 text-gray-700 hover:text-primary'
                      >
                        Join Seminars
                      </Link>
                    </li>
                    <li>
                      <Link
                        href='/contact'
                        className='font-semibold tracking-wide text-[15px]  transition-colors duration-200 text-gray-700 hover:text-primary'
                      >
                        Contact
                      </Link>
                    </li>
                    <li>
                      <Link href='/login' className='btn-primary hover-up-2'>
                        Log In
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
