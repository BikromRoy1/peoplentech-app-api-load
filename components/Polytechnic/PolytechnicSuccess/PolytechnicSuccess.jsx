'use client';

import { API_BASE_URL } from '@/app/lib/config';
import DepartmentSectionTitle from '@/components/DepartmentSectionTitle/DepartmentSectionTitle';
import { useEffect, useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import './PolytechnicSuccess.css';

const PolytechnicSuccess = () => {
  const [placements, setPlacements] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPlacements = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/polytechnic/job-placement`);
        const data = await res.json();
        setPlacements(data?.data || []);
      } catch (error) {
        console.error('Error fetching placements:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPlacements();
  }, []);

  return (
    <section className='pb-[60px] pt-[60px]'>
      <div className='mx-auto px-4 sm:px-6 container lg:px-8'>
        <DepartmentSectionTitle
          title='আমাদের ইন্ডাস্ট্রিয়াল '
          subtitle='ট্রেনিং সাফল্য
'
          text='সারাদেশের হাজার হাজার শিক্ষার্থী এগিয়ে যাওয়ার পথে পাশে ছিলাম আমরা।'
        />

        {loading ? (
          <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10'>
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
            autoplay={{
              delay: 1000,
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
                slidesPerView: 2,
                spaceBetween: 15,
              },
              992: {
                slidesPerView: 3,
                spaceBetween: 15,
              },
              1200: {
                slidesPerView: 4,
                spaceBetween: 23,
              },
            }}
          >
            {placements.map((placement, idx) => (
              <SwiperSlide key={idx}>
                <div className='Placement'>
                  <img
                    className='w-full'
                    src={placement?.image || '/image/student/default.jpg'}
                    alt={placement?.name || 'Placement'}
                  />
                  <div className='success-list'>
                    <h5>{placement?.name}</h5>
                    <h6>{placement?.company_name}</h6>
                    <p>{placement?.institute_name || 'No Institute'}</p>
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

export default PolytechnicSuccess;
