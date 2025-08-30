'use client';

import { FaRegCirclePlay } from 'react-icons/fa6';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Autoplay, Pagination } from 'swiper/modules';
import './PolytechnicBanner.css';
const PolytechnicBanner = () => {
  return (
    <section className='pb-[60px] pt-[80px] poly-hero'>
      <div className='mx-auto px-4 sm:px-6 container lg:px-8'>
        <div className='grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 items-center'>
          <div className='poly-hero-content'>
            <h1 className='mb-6 font-siliguri'>
              পিপলএনটেক ইনস্টিটিউটের <br />
              <span className='text-primary'>পলিটেকনিক প্রোগ্রাম</span>
            </h1>
            <p className='mb-4 md:mb-6 font-siliguri text-[#4b5563]'>
              গত ০৮ বছর ধরে লক্ষ লক্ষ শিক্ষার্থীকে পড়ানোর অভিজ্ঞতা নিয়ে এবার
              আমরা সামনাসামনি পড়াবো। এখন, আপনি অত্যাধুনিক মাল্টিমিডিয়া ক্লাসরুমে
              বসে, দেশের সেরা শিক্ষকদের কাছ থেকে সরাসরি শিখতে পারবেন Graduate
              Diploma এবং নিতে পারবেন JOBS’র জন্য কমপ্লিট প্রস্তুতি।
            </p>
            <div className='hero-buttons'>
              <a
                href='#about'
                className='btn btn-primary-poly me-0 sm:me-2 mx-1 font-siliguri'
              >
                আমাদের কোর্স সমূহ
              </a>
              <a
                href='https://www.youtube.com/watch?v=VSU7YTi-5Mw'
                className='btn btn-link mt-2 sm:mt-0 glightbox'
              >
                <FaRegCirclePlay className='w-6 h-6' />
                Play Video
              </a>
            </div>
          </div>
          <div className='hero-image'>
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
              <SwiperSlide>
                <img
                  loading='lazy'
                  src='/image/polytechnic/slider-01.jpg'
                  alt='Hero Image'
                  className='img-fluid size-full'
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  loading='lazy'
                  src='/image/polytechnic/slider-02.jpg'
                  alt='Hero Image'
                  className='img-fluid size-full'
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  loading='lazy'
                  src='/image/polytechnic/slider-03.jpg'
                  alt='Hero Image'
                  className='img-fluid size-full'
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  loading='lazy'
                  src='/image/polytechnic/slider-04.jpg'
                  alt='Hero Image'
                  className='img-fluid size-full'
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PolytechnicBanner;
