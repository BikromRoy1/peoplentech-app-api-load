'use client';
import { FaQuoteRight } from 'react-icons/fa';
import SectionTitle from '../SectionTitle/SectionTitle';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Autoplay, Pagination } from 'swiper/modules';

import { API_BASE_URL } from '@/app/lib/config';
import { useEffect, useState } from 'react';
import './SuccessStoryText.css';

const SuccessStoryText = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_BASE_URL}/reviews`)
      .then((res) => res.json())
      .then((data) => {
        setReviews(data.data || []);
      })
      .catch((err) => {
        console.error('Failed to fetch reviews:', err);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <section className='pb-[100px] pt-[100px]'>
      <div className='mx-auto px-4 sm:px-6 container lg:px-8'>
        <SectionTitle
          title='See What Our Learners Are  Saying'
          subtitle='Learner Reviews'
        />

        {loading ? (
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
            <div className='relative successStudents-items animate-pulse'>
              <div
                className='w-full h-48 rounded-[10px]'
                style={{ backgroundColor: '#04a9ff33' }}
              />
              <div className='mt-4'>
                <div
                  className='h-4 rounded w-3/4 mb-2'
                  style={{ backgroundColor: '#04a9ff33' }}
                />
                <div
                  className='h-3 rounded w-1/2'
                  style={{ backgroundColor: '#04a9ff33' }}
                />
              </div>
            </div>
            <div className='relative successStudents-items animate-pulse'>
              <div
                className='w-full h-48 rounded-[10px]'
                style={{ backgroundColor: '#04a9ff33' }}
              />
              <div className='mt-4'>
                <div
                  className='h-4 rounded w-3/4 mb-2'
                  style={{ backgroundColor: '#04a9ff33' }}
                />
                <div
                  className='h-3 rounded w-1/2'
                  style={{ backgroundColor: '#04a9ff33' }}
                />
              </div>
            </div>
            <div className='relative successStudents-items animate-pulse'>
              <div
                className='w-full h-48 rounded-[10px]'
                style={{ backgroundColor: '#04a9ff33' }}
              />
              <div className='mt-4'>
                <div
                  className='h-4 rounded w-3/4 mb-2'
                  style={{ backgroundColor: '#04a9ff33' }}
                />
                <div
                  className='h-3 rounded w-1/2'
                  style={{ backgroundColor: '#04a9ff33' }}
                />
              </div>
            </div>
          </div>
        ) : (
          <Swiper
            modules={[Pagination, Autoplay]}
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
              768: { slidesPerView: 2, spaceBetween: 15 },
              992: { slidesPerView: 2, spaceBetween: 15 },
              1200: { slidesPerView: 3, spaceBetween: 23 },
            }}
          >
            {reviews.slice(0, 4).map((review) => (
              <SwiperSlide key={review.id}>
                <div className='bg-gradient-to-br from-emerald-50 to-blue-50 rounded-[10px] p-[30px] relative border border-[#E0E5EB]'>
                  <div className='mb-5'>
                    <p
                      className='text-neutral-700 font-siliguri text-base'
                      style={{
                        display: '-webkit-box',
                        WebkitLineClamp: 5,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                      }}
                    >
                      &quot;{' '}
                      {review.review_content || 'No review text available.'}{' '}
                      &quot;
                    </p>
                  </div>
                  <div className='flex items-center gap-3'>
                    <img
                      className='w-[55px] h-[55px] object-cover rounded-full'
                      src={review.image || './image/icons/user-default.webp'}
                      alt={review.name || 'User'}
                    />
                    <div>
                      <h4 className='text-[17px] leading-7 font-semibold text-[#162726]'>
                        {review.name || 'Anonymous'}
                      </h4>
                      <p className='text-[14px] text-primary font-medium'>
                        {review.job_title || 'Student'}
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
        )}
      </div>
    </section>
  );
};

export default SuccessStoryText;
