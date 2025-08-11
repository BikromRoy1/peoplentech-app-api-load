'use client';
import Image from 'next/image';
import Link from 'next/link';
import CountUp from 'react-countup';
import { FaBolt, FaPlay } from 'react-icons/fa';
import { FaPhoneVolume } from 'react-icons/fa6';
import { IoArrowForwardSharp } from 'react-icons/io5';
import './Numbers.css';

const Numbers = () => {
  return (
    <section className='pt-[100px] pb-[100px]'>
      <div className='mx-auto px-4 sm:px-6 container lg:px-8'>
        <div className='number-background py-16 rounded-[10px] px-10'>
          <div className='grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2'>
            <div>
              <div className='about-img-wrap wow fade-in-left'>
                <div className='about-img-1'>
                  <img
                    src='https://wp.rrdevs.net/edcare/wp-content/uploads/2024/12/about-img-1.jpg'
                    alt='icons'
                  />
                  <div className='video-btn'>
                    <a
                      className='video-popup venobox vbox-item'
                      data-autoplay='true'
                      data-vbtype='video'
                      href='https://www.youtube.com/watch?v=A_yeWONPhKE&t=8s'
                    >
                      <div className='play-btn'>
                        <FaPlay />
                      </div>
                    </a>
                  </div>
                </div>
                <div className='about-img-2'>
                  <img
                    src='https://wp.rrdevs.net/edcare/wp-content/uploads/2024/12/about-img-2.jpg'
                    alt='icons'
                  />
                </div>
                <div className='about-contact'>
                  <div className='icon'>
                    <FaPhoneVolume />
                  </div>
                  <div className='content'>
                    <span>Online Support</span>
                    <a href='tel:+09613337448'>+0961-333-7448</a>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <section className='section-heading'>
                <h4 className='bg-white text-[#162726] text-[15px] font-medium inline-flex items-center gap-2.5 mb-4 relative border border-[#E0E5EB] rounded-full section-padding'>
                  <span className='background-color-section text-primary text-[14px] w-7 h-7 rounded-full flex items-center justify-center'>
                    <FaBolt />
                  </span>
                  Get More About Us
                </h4>
                <h2 className='text-[20px] sm:text-[22px] md:text-[25px] lg:text-[30px] xl:text-[35px] font-semibold leading-tight mb-5'>
                  Shaping World-Class IT Experts
                </h2>
                <p className='text-[15px] text-[#6C706F] mb-6'>
                  PeopleNTech has been working with a vision to create IT
                  experts for the past 11 years. In a fast pacing world, where
                  every sector relies on technology, you need to develop IT
                  skills to secure a better future.
                </p>
              </section>
              <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2'>
                <div className='flex items-center gap-4'>
                  <div className='bg-[#ffffff] number-shadow border border-[#E0E5EB] rounded-[10px] w-[50px] h-[50px] flex items-center justify-center'>
                    <Image
                      width='35'
                      height='35'
                      className='object-cover'
                      src='/image/icons/about-1.svg'
                      alt='icons'
                    />
                  </div>
                  <div>
                    <h4 className='text-primary text-[24px] font-bold leading-normal'>
                      <CountUp end={5} duration={2.75} enableScrollSpy={true} />
                      +
                    </h4>
                    <p className='text-[#4E5055] font-medium text-[15px]'>
                      Countries Globally
                    </p>
                  </div>
                </div>
                <div className='flex items-center gap-4'>
                  <div className='bg-[#ffffff] number-shadow border border-[#E0E5EB] rounded-[10px] w-[50px] h-[50px] flex items-center justify-center'>
                    <Image
                      width='35'
                      height='35'
                      className='object-cover'
                      src='/image/icons/about-2.svg'
                      alt='icons'
                    />
                  </div>
                  <div>
                    <h4 className='text-primary text-[24px] font-bold leading-normal'>
                      <CountUp
                        end={200}
                        duration={2.75}
                        enableScrollSpy={true}
                      />
                      +
                    </h4>
                    <p className='text-[#4E5055] font-medium text-[15px]'>
                      Academic Institutions
                    </p>
                  </div>
                </div>
                <div className='flex items-center gap-4'>
                  <div className='bg-[#ffffff] number-shadow border border-[#E0E5EB] rounded-[10px] w-[50px] h-[50px] flex items-center justify-center'>
                    <Image
                      width='35'
                      height='35'
                      className='object-cover'
                      src='/image/icons/about-3.svg'
                      alt='icons'
                    />
                  </div>
                  <div>
                    <h4 className='text-primary text-[24px] font-bold leading-normal'>
                      <CountUp
                        end={26000}
                        duration={2.75}
                        enableScrollSpy={true}
                      />
                      +
                    </h4>
                    <p className='text-[#4E5055] font-medium text-[15px]'>
                      Learners & Professionals
                    </p>
                  </div>
                </div>
                <div className='flex items-center gap-4'>
                  <div className='bg-[#ffffff] number-shadow border border-[#E0E5EB] rounded-[10px] w-[50px] h-[50px] flex items-center justify-center'>
                    <Image
                      width='35'
                      height='35'
                      className='object-cover'
                      src='/image/icons/about-4.svg'
                      alt='icons'
                    />
                  </div>
                  <div>
                    <h4 className='text-primary text-[24px] font-bold leading-normal'>
                      <CountUp
                        end={300}
                        duration={2.75}
                        enableScrollSpy={true}
                      />
                      +
                    </h4>
                    <p className='text-[#4E5055] font-medium text-[15px]'>
                      Skill Courses
                    </p>
                  </div>
                </div>
                <div className='flex items-center gap-4'>
                  <div className='bg-[#ffffff] number-shadow border border-[#E0E5EB] rounded-[10px] w-[50px] h-[50px] flex items-center justify-center'>
                    <Image
                      width='35'
                      height='35'
                      className='object-cover'
                      src='/image/icons/about-5.svg'
                      alt='icons'
                    />
                  </div>
                  <div>
                    <h4 className='text-primary text-[24px] font-bold leading-normal'>
                      <CountUp
                        end={100}
                        duration={2.75}
                        enableScrollSpy={true}
                      />
                      +
                    </h4>
                    <p className='text-[#4E5055] font-medium text-[15px]'>
                      Experienced teachers
                    </p>
                  </div>
                </div>
                <div className='flex items-center gap-4'>
                  <div className='bg-[#ffffff] number-shadow border border-[#E0E5EB] rounded-[10px] w-[50px] h-[50px] flex items-center justify-center'>
                    <Image
                      width='35'
                      height='35'
                      className='object-cover'
                      src='/image/icons/about-6.svg'
                      alt='icons'
                    />
                  </div>
                  <div>
                    <h4 className='text-primary text-[24px] font-bold leading-normal'>
                      <CountUp
                        end={250}
                        duration={2.75}
                        enableScrollSpy={true}
                      />
                      +
                    </h4>
                    <p className='text-[#4E5055] font-medium text-[15px]'>
                      Industry Partners
                    </p>
                  </div>
                </div>
              </div>
              <div className='mt-7'>
                <Link href='/about' className='primary-btn'>
                  Read More
                  <IoArrowForwardSharp className='ml-2' />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Numbers;
