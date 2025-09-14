'use client';

import Link from 'next/link';
import { IoArrowForwardSharp } from 'react-icons/io5';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import './Banner.css';
const BannerTwo = () => {
  return (
    <section className='banner-background-color banner-two relative  flex items-center '>
      {/* <img
        className='img-fluid banner-bg-01'
        src='/image/background/bg-3.webp'
        alt='image'
      />
      <img
        className='img-fluid banner-bg-02'
        src='/image/background/bg-4.webp'
        alt='image'
      /> */}
      <div className='mx-auto px-4 sm:px-6 container lg:px-8'>
        <div className='grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 items-center'>
          <div>
            <div className='content-box'>
              <h2 className='hero-title-2'>
                Creating Skilled Manpower, Freelancer &{' '}
                <span className='text-[#0d84c4]'>Entrepreneur since 2005</span>
              </h2>
              <p className='hero1-content__desc-2 text-neutral-700'>
                Pioneering professional skill development with expert mentors,
                ensuring continuous success through strategic job placements in
                the tech sector. A proven pathway to thriving careers in the
                dynamic digital landscape
              </p>
              <div className='flex items-center gap-5'>
                <Link href='/course' className='primary-btn'>
                  Find The Course
                  <IoArrowForwardSharp className='ml-2' />
                </Link>
                <Link href='/seminars' className='primary-btn second-btn-2'>
                  Join Free Seminar <IoArrowForwardSharp className='ml-2' />
                </Link>
              </div>
            </div>
          </div>
          <div className='flex items-center'>
            <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={30}
              autoplay={{
                delay: 2000,
                pauseOnMouseEnter: true,
                disableOnInteraction: false,
              }}
              speed={400}
              loop={true}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                768: {
                  slidesPerView: 1,
                  spaceBetween: 15,
                },
                992: {
                  slidesPerView: 1,
                  spaceBetween: 15,
                },
                1200: {
                  slidesPerView: 1,
                  spaceBetween: 23,
                },
              }}
            >
              <SwiperSlide className=''>
                <div className='relative'>
                  <img
                    className='w-[600px] banner-img mx-auto img-fluid'
                    src='/image/background/hero-2.webp'
                    alt='banner'
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='relative'>
                  <img
                    className='w-[600px] banner-img mx-auto img-fluid'
                    src='/image/background/Hero-3.png'
                    alt='banner'
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='relative'>
                  <img
                    className='w-[600px] banner-img mx-auto img-fluid'
                    src='/image/background/Hero-4.png'
                    alt='banner'
                  />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerTwo;
