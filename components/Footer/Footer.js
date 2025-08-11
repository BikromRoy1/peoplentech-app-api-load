import Image from 'next/image';
import Link from 'next/link';
import { BiHeadphone, BiSolidPhoneCall } from 'react-icons/bi';
import { FaFacebook, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { MdMail } from 'react-icons/md';
import { RiTwitterXLine } from 'react-icons/ri';
import './Footer.css';

const Footer = () => {
  return (
    <>
      <footer
        className=' py-20 border-y border-[#1C2134]'
        style={{
          background:
            "url('/image/background/footer-dark-bg.jpg') no-repeat center\n" +
            '                center/cover',
        }}
      >
        <div className='mx-auto px-4 sm:px-6 container lg:px-8'>
          <div className='grid md:grid-cols-12 divide-y md:divide-y-0 lg:divide-x divide-white divide-opacity-10 justify-between gap-10'>
            <div className='md:col-span-6 lg:col-span-4'>
              <Link href='/' className='block mb-7'>
                <Image
                  src='/image/PNT-white-png.png'
                  width={200}
                  height={200}
                  alt='logo'
                />
              </Link>
              <p className='text-white text-base'>
                Established with the goal of fostering success, PeopleNTech
                Institute of IT is a trusted institution. Over the past enduring
                nine years since its establishment, it has contributed to the
                development of Digital Bangladesh and achieved multifaceted
                success through trans-formative changes.
              </p>
              <div className='flex space-x-3 mt-7'>
                <a
                  href='https://www.facebook.com/peoplentechbd'
                  className='bg-[#1e2c46] text-[#9ca3af] hover:bg-[#38bdf8] hover:text-[#fff] transition-all text-lg w-10 h-10 rounded-full  inline-flex justify-center items-center'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <FaFacebook />
                </a>
                <a
                  href='https://x.com/peoplentech1?lang=en'
                  className='bg-[#1e2c46] text-[#9ca3af] hover:bg-[#38bdf8] hover:text-[#fff] transition-all text-lg w-10 h-10 rounded-full  inline-flex justify-center items-center'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <RiTwitterXLine />
                </a>
                <a
                  href='https://www.youtube.com/@PeopleNTechBangladesh'
                  className='bg-[#1e2c46] text-[#9ca3af] hover:bg-[#38bdf8] hover:text-[#fff] transition-all text-lg w-10 h-10 rounded-full  inline-flex justify-center items-center'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <FaYoutube />
                </a>
                <a
                  href='https://www.linkedin.com/company/peoplentech-institute/'
                  className='bg-[#1e2c46] text-[#9ca3af] hover:bg-[#38bdf8] hover:text-[#fff] transition-all text-lg w-10 h-10 rounded-full  inline-flex justify-center items-center'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>
            <div className='md:col-span-3 lg:col-span-2 pt-8 lg:pt-0 lg:pl-3'>
              <h4 className='mb-7 text-white text-2xl font-semibold'>
                About Us
              </h4>
              <nav>
                <ul className='space-y-4'>
                  <li>
                    <a href='#' className='font-medium text-base text-white'>
                      About Us
                    </a>
                  </li>
                  <li>
                    <Link
                      href='/team'
                      className='font-medium text-base text-white'
                    >
                      Our Team
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='/faculty'
                      className='font-medium text-base text-white'
                    >
                      Our Mentors
                    </Link>
                  </li>
                  <li>
                    <a href='#' className='font-medium text-base text-white'>
                      Apply for Trainer
                    </a>
                  </li>
                  <li>
                    <a href='#' className='font-medium text-base text-white'>
                      Join Our Team
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className='md:col-span-3 lg:col-span-2 pt-8 lg:pt-0 lg:pl-3'>
              <h4 className='mb-7 text-white text-2xl font-semibold'>
                Quick Links
              </h4>
              <nav>
                <ul className='space-y-4'>
                  <li>
                    <a href='#' className='font-medium text-base text-white'>
                      Join Free Seminars
                    </a>
                  </li>
                  <li>
                    <a href='#' className='font-medium text-base text-white'>
                      Success Story
                    </a>
                  </li>
                  <li>
                    <a href='#' className='font-medium text-base text-white'>
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href='#' className='font-medium text-base text-white'>
                      Refund Policy
                    </a>
                  </li>
                  <li>
                    <a href='#' className='font-medium text-base text-white'>
                      Terms and Conditions
                    </a>
                  </li>
                  <li>
                    <a href='#' className='font-medium text-base text-white'>
                      Blog
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className='md:col-span-6 lg:col-span-4 pt-8 lg:pt-0 lg:pl-3'>
              <h4 className='mb-7 text-white text-2xl font-semibold'>
                Official Info:
              </h4>
              <ul className='space-y-4'>
                <li className='flex space-x-2'>
                  <FaLocationDot className='w-6 h-6 text-[#38bdf8] leading-none' />
                  <p className='text-white'>
                    151/7, Good Luck Center (7th & 8th) Floor, Green Road, Dhaka
                    - 1205, Bangladesh
                  </p>
                </li>
                <li className='flex space-x-2'>
                  <BiSolidPhoneCall className='w-6 h-6 text-[#38bdf8] leading-none' />
                  <a href='tel:1-888-452-1505' className='text-white text-base'>
                    Regular: 01799-446655, 01762-002444
                  </a>
                </li>
                <li className='flex space-x-2'>
                  <BiHeadphone className='w-6 h-6 text-[#38bdf8] leading-none' />

                  <a href='tel:1-888-452-1505' className='text-white text-base'>
                    IP Phone: +880961-333-7448
                  </a>
                </li>
                <li className='flex space-x-2'>
                  <MdMail className='w-6 h-6 text-[#38bdf8] leading-none' />

                  <a href='tel:1-888-452-1505' className='text-white text-base'>
                    Email: info@peoplentech.com.bd
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

      <section className='px-4 bg-[#04091e] py-5'>
        <p className='text-base font-medium text-white text-center'>
          Copyright © 2025 – PeopleNTech Institute of IT. All Rights Reserved
        </p>
      </section>
    </>
  );
};

export default Footer;
