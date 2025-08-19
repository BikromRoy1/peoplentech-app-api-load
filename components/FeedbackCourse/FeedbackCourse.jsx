'use client';

import Image from 'next/image';
import { FaQuoteRight } from 'react-icons/fa';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Autoplay } from 'swiper/modules';

const FeedbackCourse = ({ course }) => {
  const reviews = course?.studentReviews || [];
  return (
    <div className='mt-10'>
      <div className='border border-[#dee2e6] rounded-xl p-6'>
        <h2 className='mb-5 text-2xl font-semibold capitalize leading-[30px] text-[#003384]'>
          Student Feedback
        </h2>

        {reviews.length > 0 ? (
          <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 2000,
              pauseOnMouseEnter: true,
              disableOnInteraction: false,
            }}
            speed={400}
            loop={true}
            breakpoints={{
              0: { slidesPerView: 1, spaceBetween: 10 },
              768: { slidesPerView: 1, spaceBetween: 15 },
              992: { slidesPerView: 1, spaceBetween: 15 },
              1200: { slidesPerView: 2, spaceBetween: 23 },
            }}
          >
            {reviews?.map((review, index) => (
              <SwiperSlide key={index}>
                <div className='rounded-[10px] p-[25px] relative border border-[#E0E5EB]'>
                  <div className='mb-5'>
                    <p className='text-neutral-700 font-siliguri text-base'>
                      &quot;{review?.review}&quot;
                    </p>
                  </div>
                  <div className='flex items-center gap-3'>
                    <Image
                      width={50}
                      height={50}
                      className='object-cover rounded-full'
                      src={review?.image || '/image/icons/user-06.webp'}
                      alt={review?.name}
                    />
                    <div>
                      <h4 className='text-[15px] leading-7 font-semibold text-[#162726]'>
                        {review?.name}
                      </h4>
                      <p className='text-[13px] text-primary font-medium'>
                        {review?.designation}
                      </p>
                    </div>
                  </div>
                  <div>
                    <FaQuoteRight className='text-[#2490eb] text-[54px] leading-[62px] absolute right-[30px] bottom-[30px] opacity-[0.1]' />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <p className='text-gray-500 text-base font-siliguri'>
            ❌ কোনো Student Feedback পাওয়া যায়নি।
          </p>
        )}
      </div>
    </div>
  );
};

export default FeedbackCourse;
