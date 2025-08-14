import EmptyState from '@/components/EmptyState/EmptyState';
import PageBanner from '@/components/PageBanner/PageBanner';
import seminarAnimation from '@/public/image/content.json';
import { FaStar, FaUsers } from 'react-icons/fa';
import { FaRegClone, FaRegFileLines } from 'react-icons/fa6';
import { RiTimerLine } from 'react-icons/ri';
import { API_BASE_URL } from '../lib/config';

export const metadata = {
  title: 'Upcoming Batches - PeopleNTech',
  description:
    'We PeopleNTech is offering professional IT training course &amp; job placement facility for students. We are affiliating with top notch IT company in Bangladesh..',
};

async function getCourses() {
  const res = await fetch(`${API_BASE_URL}/upcoming-courses`, {
    cache: 'no-store',
  });
  if (!res.ok) {
    throw new Error('Failed to fetch courses');
  }
  const result = await res.json();
  return result?.data?.data || [];
}

const UpcomingBatches = async () => {
  const courses = await getCourses();

  return (
    <div>
      <PageBanner title='Join Our Upcoming Batch' subtitle='Upcoming Batch' />
      <section className='pb-[80px] pt-[80px]'>
        <div className='mx-auto px-4 sm:px-6 container lg:px-8'>
          <div className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3'>
            {courses?.map((course) => (
              <div
                key={course.id}
                className='bg-white rounded-[10px] border border-[#E0E5EB] pt-[20px] transition-transform duration-300 hover:-translate-y-[8px]'
              >
                <div className='px-[20px]'>
                  <div className='w-full h-auto overflow-hidden rounded-[10px]'>
                    <img
                      className=' w-full h-full object-cover'
                      src={course.image || '/image/Course/default.jpg'}
                      alt={course?.name}
                    />
                  </div>
                </div>
                <div className='p-[20px] mb-[20px] border-b border-[#E0E5EB]'>
                  <div className='mb-[15px] flex items-center justify-between'>
                    <span className='bg-[#a607261a] text-course-red text-[14px] py-[5px] px-[15px] font-bold rounded-full'>
                      {course?.batch_code}
                    </span>
                    <span className='flex items-center gap-2 '>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='16'
                        height='15'
                        viewBox='0 0 19 18'
                        fill='none'
                      >
                        <path
                          d='M9.50067 8.04283C10.3543 8.04283 11.0463 7.35085 11.0463 6.49725C11.0463 5.64364 10.3543 4.95166 9.50067 4.95166C8.64706 4.95166 7.95508 5.64364 7.95508 6.49725C7.95508 7.35085 8.64706 8.04283 9.50067 8.04283Z'
                          stroke='#F72568'
                          strokeMiterlimit='10'
                        ></path>
                        <path
                          d='M5.68066 10.3165C5.17835 9.81446 4.77987 9.2184 4.508 8.56235C4.23612 7.90629 4.09619 7.2031 4.09619 6.49294C4.09619 5.78279 4.23612 5.07959 4.508 4.42354C4.77987 3.76748 5.17835 3.17143 5.68066 2.66943'
                          stroke='#2C394B'
                          strokeMiterlimit='10'
                        ></path>
                        <path
                          d='M13.3193 2.66943C13.8217 3.17143 14.2201 3.76748 14.492 4.42354C14.7639 5.07959 14.9038 5.78279 14.9038 6.49294C14.9038 7.2031 14.7639 7.90629 14.492 8.56235C14.2201 9.2184 13.8217 9.81446 13.3193 10.3165'
                          stroke='#2C394B'
                          strokeMiterlimit='10'
                        ></path>
                        <path
                          d='M3.49565 12.5016C2.70464 11.7137 2.07699 10.7773 1.64873 9.74626C1.22046 8.7152 1 7.60971 1 6.49323C1 5.37676 1.22046 4.27127 1.64873 3.2402C2.07699 2.20914 2.70464 1.27278 3.49565 0.484863'
                          stroke='#2C394B'
                          strokeMiterlimit='10'
                        ></path>
                        <path
                          d='M15.5039 0.484863C16.2949 1.27278 16.9226 2.20914 17.3508 3.2402C17.7791 4.27127 17.9996 5.37676 17.9996 6.49323C17.9996 7.60971 17.7791 8.7152 17.3508 9.74626C16.9226 10.7773 16.2949 11.7137 15.5039 12.5016'
                          stroke='#2C394B'
                          strokeMiterlimit='10'
                        ></path>
                        <path
                          d='M9.4994 8.01831C10.1132 8.01831 10.7019 8.26214 11.1359 8.69616C11.5699 9.13019 11.8137 9.71885 11.8137 10.3326C11.815 12.3631 11.3441 14.3661 10.4381 16.1832L10.2681 16.515H8.73065L8.56072 16.1832C7.65471 14.3661 7.18375 12.3631 7.18506 10.3326C7.18506 10.0287 7.24492 9.72778 7.36123 9.44699C7.47754 9.1662 7.64801 8.91107 7.86291 8.69616C8.07782 8.48126 8.33295 8.31079 8.61374 8.19448C8.89453 8.07817 9.19547 8.01831 9.4994 8.01831Z'
                          stroke='#F72568'
                          strokeMiterlimit='10'
                        ></path>
                      </svg>
                      <h5 className='text-[#162726] text-[14px] font-bold mb-0 pb-0'>
                        {course?.class_type || 'Offline'}
                      </h5>
                    </span>
                  </div>
                  <h4 className='text-[19px] leading-7 font-semibold mb-[15px] hover:text-primary transition-all duration-300 ease-in-out'>
                    <a href='#'>{course?.name}</a>
                  </h4>
                  <div className='flex items-center justify-between'>
                    <div>
                      <h3>
                        <span className='text-primary font-semibold text-[17px]'>
                          ৳ {course?.discount_price || course?.course_fee}
                        </span>
                        {course?.discount_price && (
                          <del className='ml-3 font-medium text-[15px] text-neutral-600'>
                            ৳ {course.course_fee}
                          </del>
                        )}
                      </h3>
                    </div>
                    <div className='flex items-center gap-1.5'>
                      <FaStar className='text-[#ffc000]' />
                      <span className='text-[#162726] text-[15px] font-medium'>
                        4.0(36)
                      </span>
                    </div>
                  </div>
                  <div className='flex items-center gap-3 mt-[15px] justify-between'>
                    <div className='flex items-center gap-1.5'>
                      <FaRegFileLines className='text-[#6C706F]' />

                      <span className='text-[#6C706F] text-[14px] font-medium'>
                        Class - {course?.total_class}
                      </span>
                    </div>
                    <div className='flex items-center gap-1.5 '>
                      <RiTimerLine className='text-[#6C706F]' />
                      <span className='text-[#6C706F] text-[14px] font-medium'>
                        Duration - {course?.duration}
                      </span>
                    </div>
                  </div>
                  <div className='flex items-center gap-3 mt-[10px] justify-between'>
                    <div className='flex items-center gap-1.5'>
                      <FaRegClone className='text-[#6C706F]' />

                      <span className='text-[#6C706F] text-[14px] font-medium'>
                        Projects - 08+
                      </span>
                    </div>
                    <div className='flex items-center gap-1.5 '>
                      <FaUsers className='text-[#6C706F]' />
                      <span className='text-[#6C706F] text-[14px] font-medium'>
                        Student Joined - 25
                      </span>
                    </div>
                  </div>
                </div>
                <div className='flex items-center justify-between px-[20px] pb-[20px]'>
                  <a
                    target='_blank'
                    href={course?.registration_link}
                    className='text-white bg-primary border border-primary font-semibold text-[15px] rounded-full py-[5px] px-[20px] hover:border-primary transition-all duration-300 ease-in-out'
                  >
                    Registration
                  </a>
                  <a
                    className='text-[#162726] border border-[#E0E5EB] font-semibold text-[15px] rounded-full py-[5px] px-[20px] hover:border-primary transition-all duration-300 ease-in-out'
                    href='#'
                  >
                    View Details{' '}
                  </a>
                </div>
              </div>
            ))}
          </div>
          {courses.length === 0 && (
            <div>
              <EmptyState
                animationData={seminarAnimation}
                message='No upcoming batches available at the moment.'
              />
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default UpcomingBatches;
