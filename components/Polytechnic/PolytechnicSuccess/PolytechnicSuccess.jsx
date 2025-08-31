'use client';

import DepartmentSectionTitle from '@/components/DepartmentSectionTitle/DepartmentSectionTitle';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import './PolytechnicSuccess.css';

const PolytechnicSuccess = () => {
  return (
    <section className='pb-[60px] pt-[60px]'>
      <div className='mx-auto px-4 sm:px-6 container lg:px-8'>
        <DepartmentSectionTitle
          title='আমাদের ইন্ডাস্ট্রিয়াল '
          subtitle='ট্রেনিং সাফল্য
'
          text='সারাদেশের হাজার হাজার শিক্ষার্থী এগিয়ে যাওয়ার পথে পাশে ছিলাম আমরা।'
        />

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
          <SwiperSlide>
            <div className='Placement'>
              <img
                className='w-full'
                src='/image/student/student-02.jpg'
                alt='image'
              />
              <div className='success-list'>
                <h5>Ayesha Rahman</h5>
                <h6>Junior Frontend Developer</h6>
                <p> Kishoreganj polytechnic institute</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='Placement'>
              <img
                className='w-full'
                src='/image/student/student-04.jpg'
                alt='jobs'
              />
              <div className='success-list'>
                <h5> Tanisha Dey</h5>
                <h6>Digital Marketer</h6>
                <p> Kishoreganj polytechnic institute</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='Placement'>
              <img
                className='w-full'
                src='/image/student/student-03.jpg'
                alt='jobs'
              />
              <div className='success-list'>
                <h5>Nusrat Jahan</h5>
                <h6>Junior Web Developer</h6>
                <p> Kishoreganj polytechnic institute</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='Placement'>
              <img
                className='w-full'
                src='/image/student/student-01.jpg'
                alt='jobs'
              />
              <div className='success-list'>
                <h5>Sadia Afrin</h5>
                <h6>Freelancer and UI/XI Designer</h6>
                <p> Kishoreganj polytechnic institute</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='Placement'>
              <img
                className='w-full'
                src='/image/student/student-05.jpg'
                alt='jobs'
              />
              <div className='success-list'>
                <h5>Tanvir Ahmed</h5>
                <h6>Graphic designer</h6>
                <p> Kishoreganj polytechnic institute</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='Placement'>
              <img
                className='w-full'
                src='/image/student/student-06.jpg'
                alt='jobs'
              />
              <div className='success-list'>
                <h5>Mohana Haque</h5>
                <h6>Digital Marketing Trainee</h6>
                <p> Kishoreganj polytechnic institute</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default PolytechnicSuccess;
