'use client';

import { API_BASE_URL } from '@/app/lib/config';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { IoArrowForwardSharp } from 'react-icons/io5';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import './Banner.css';
const BannerTwo = () => {
  const [sliders, setSliders] = useState([]);

  useEffect(() => {
    const fetchSliders = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/sliders`);
        const data = await res.json();
        if (data.success) {
          setSliders(data.data);
        }
      } catch (error) {
        console.error('Error fetching sliders:', error);
      }
    };

    fetchSliders();
  }, []);

  return (
    <section className='banner-background-color banner-two relative  flex items-center '>
      <div className='mx-auto px-4 sm:px-6 container lg:px-8'>
        <div className='grid grid-cols-1 gap-16  lg:grid-cols-2 xl:grid-cols-2 items-center'>
          <div>
            <div className='content-box'>
              <h2 className='hero-title-2 leading-7'>
                Creating Skilled Manpower, Freelancer &{' '}
                <span className='md:text-primary text-secondary'>
                  Entrepreneur since 2005
                </span>
              </h2>
              <p className='hero1-content__desc-2 text-neutral-700'>
                Pioneering professional skill development with expert mentors,
                ensuring continuous success through strategic job placements in
                the tech sector. A proven pathway to thriving careers in the
                dynamic digital landscape
              </p>
              <div className='flex items-center gap-5'>
                <Link href='/courses' className='primary-btn'>
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
              {sliders.length > 0 ? (
                sliders.map((slide) => (
                  <SwiperSlide key={slide?.id}>
                    <div className='relative'>
                      <img
                        className='w-[600px] banner-img mx-auto img-fluid'
                        src={slide?.image || '/image/background/hero-2.webp'}
                        alt={slide?.title || 'slider'}
                      />
                    </div>
                  </SwiperSlide>
                ))
              ) : (
                <SwiperSlide>
                  <img
                    className='w-[600px] banner-img mx-auto img-fluid'
                    src='/image/background/hero-2.webp'
                    alt='Default banner'
                  />
                </SwiperSlide>
              )}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerTwo;
