'use client';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';

import { API_BASE_URL } from '@/app/lib/config';
import { useEffect, useState } from 'react';
import { Autoplay, Pagination } from 'swiper/modules';

const WorkingOrganization = () => {
  const [partners, setPartners] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPartners = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/our-partner`);
        const data = await res.json();
        setPartners(data?.data || []);
      } catch (error) {
        console.error('Failed to fetch partners:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPartners();
  }, []);

  return (
    <section className='pb-[40px] pt-[40px]'>
      <div className='mx-auto px-4 sm:px-6 container lg:px-8'>
        <div className='grid grid-cols-1 gap-4 md:grid-cols-6 md:items-center md:gap-8'>
          <div className='md:col-span-2'>
            <div>
              <h2 className='text-[17px] text-[#191919] sm:text-[18px] md:text-[20px] lg:text-[25px] xl:text-[30px] font-semibold leading-tight'>
                We Are Working with The Organizations
              </h2>
            </div>
          </div>
          <div className='md:col-span-4'>
            {loading ? (
              <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10'>
                <div className='relative successStudents-items animate-pulse'>
                  <div
                    className='w-full h-14 rounded-[10px]'
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
                    className='w-full h-14 rounded-[10px]'
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
                    className='w-full h-14 rounded-[10px]'
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
                    className='w-full h-14 rounded-[10px]'
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
                    className='w-full h-14 rounded-[10px]'
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
            ) : partners.length === 0 ? (
              <p className='text-center text-gray-500'>
                No partner organizations available
              </p>
            ) : (
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
                    slidesPerView: 2,
                    spaceBetween: 10,
                  },
                  768: {
                    slidesPerView: 3,
                    spaceBetween: 15,
                  },
                  992: {
                    slidesPerView: 4,
                    spaceBetween: 15,
                  },
                  1200: {
                    slidesPerView: 6,
                    spaceBetween: 23,
                  },
                }}
              >
                {partners?.map((partner) => (
                  <SwiperSlide key={partner?.id}>
                    <div className='w-full flex justify-center'>
                      <a target='_blank' href={partner?.web_url}>
                        <img
                          title={partner?.name || 'Partner'}
                          className='h-10 object-contain'
                          src={
                            partner?.logo ||
                            '/image/certificate/Organizations-1.png'
                          }
                          alt={partner?.name || 'Partner'}
                        />
                      </a>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkingOrganization;
