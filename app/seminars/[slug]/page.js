import { FaRegHourglassHalf } from 'react-icons/fa6';
import { RiTimerLine } from 'react-icons/ri';

import { IoMdArrowDroprightCircle } from 'react-icons/io';

import { API_BASE_URL } from '@/app/lib/config';
import Countdown from '@/components/Countdown/Countdown';
import SeminarRegistrationForm from '@/components/SeminarRegistrationForm/SeminarRegistrationForm';
import './SeminarDetails.css';

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const res = await fetch(`${API_BASE_URL}/seminar/${slug}`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) return { title: 'Seminar Not Found', description: '' };

  const seminar = await res.json();

  return {
    title: `${seminar.data.title} - PeopleNTech`,
    description:
      seminar.data.short_description ||
      'Join our free seminar and enhance your skills with PeopleNTech experts.',
  };
}

export const Zoom = (props) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='1em'
    height='1em'
    preserveAspectRatio='xMidYMid'
    viewBox='0 0 256 256'
    {...props}
  >
    <defs>
      <linearGradient
        id='zoom__a'
        x1='23.666%'
        x2='76.334%'
        y1='95.6118%'
        y2='4.3882%'
      >
        <stop offset='.00006%' stopColor='#0845BF' />
        <stop offset='19.11%' stopColor='#0950DE' />
        <stop offset='38.23%' stopColor='#0B59F6' />
        <stop offset='50%' stopColor='#0B5CFF' />
        <stop offset='67.32%' stopColor='#0E5EFE' />
        <stop offset='77.74%' stopColor='#1665FC' />
        <stop offset='86.33%' stopColor='#246FF9' />
        <stop offset='93.88%' stopColor='#387FF4' />
        <stop offset='100%' stopColor='#4F90EE' />
      </linearGradient>
    </defs>
    <path
      fill='url(#zoom__a)'
      d='M256 128c0 13.568-1.024 27.136-3.328 40.192-6.912 43.264-41.216 77.568-84.48 84.48C155.136 254.976 141.568 256 128 256c-13.568 0-27.136-1.024-40.192-3.328-43.264-6.912-77.568-41.216-84.48-84.48C1.024 155.136 0 141.568 0 128c0-13.568 1.024-27.136 3.328-40.192 6.912-43.264 41.216-77.568 84.48-84.48C100.864 1.024 114.432 0 128 0c13.568 0 27.136 1.024 40.192 3.328 43.264 6.912 77.568 41.216 84.48 84.48C254.976 100.864 256 114.432 256 128Z'
    />
    <path
      fill='#FFF'
      d='M204.032 207.872H75.008c-8.448 0-16.64-4.608-20.48-12.032-4.608-8.704-2.816-19.2 4.096-26.112l89.856-89.856H83.968c-17.664 0-32-14.336-32-32h118.784c8.448 0 16.64 4.608 20.48 12.032 4.608 8.704 2.816 19.2-4.096 26.112l-89.6 90.112h74.496c17.664 0 32 14.08 32 31.744Z'
    />
  </svg>
);

const SeminarDetails = async ({ params }) => {
  const { slug } = await params;
  const res = await fetch(`${API_BASE_URL}/seminar/${slug}`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) return <div>Seminar not found</div>;

  const seminar = await res.json();
  const singleSeminar = seminar.data;

  return (
    <section>
      <section className='pb-[80px] pt-[80px] page-banner-bg bg-[#020617] relative'>
        <div
          className='absolute inset-0 z-0'
          style={{
            backgroundImage: `radial-gradient(circle 500px at 50% 300px, rgba(4,169,255,0.35), transparent)`,
          }}
        />
        <div className='mx-auto px-4 sm:px-6 container lg:px-8 relative'>
          <div className='grid grid-cols-1 gap-4 md:grid-cols-8 md:items-center md:gap-9'>
            <div className='md:col-span-5'>
              <div>
                <h4 className='text-2xl lg:text-3xl font-semibold capitalize text-white'>
                  {singleSeminar?.title}
                </h4>
                <p className='text-gray-300 mt-4 text-[17px] font-siliguri leading-7 font-medium'>
                  {singleSeminar?.short_description || 'No description'}
                </p>
                <div className='flex items-center gap-4 mt-6 flex-wrap'>
                  <div className='flex items-center gap-2 rounded-full bg-[#1f2838] px-6 py-2'>
                    <FaRegHourglassHalf className='text-primary' />
                    <span className='text-white font-semibold text-[15px]'>
                      {singleSeminar?.seminar_time}
                    </span>
                  </div>
                  <div className='flex items-center gap-2 rounded-full bg-[#1f2838] px-6 py-2'>
                    <RiTimerLine className='text-primary' />

                    <span className='text-white font-semibold capitalize text-[15px]'>
                      {new Date(singleSeminar?.seminar_date).toLocaleDateString(
                        'en-US',
                        {
                          day: 'numeric',
                          month: 'long',
                          year: 'numeric',
                        }
                      )}
                    </span>
                  </div>
                  <div className='flex items-center gap-2 rounded-full bg-[#1f2838] px-6 py-2'>
                    <Zoom />
                    <span className='text-white font-semibold text-[15px]'>
                      {singleSeminar?.seminar_platform === 'Online'
                        ? 'Online class (ZOOM)'
                        : singleSeminar?.seminar_platform === 'Offline'
                        ? 'Offline Office'
                        : singleSeminar?.seminar_platform === 'Hybrid'
                        ? 'Hybrid (Online + Offline)'
                        : 'Not specified'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className='md:col-span-3 text-white'>
              <div className='border-[7px] border-[#f3f4f6] rounded-[15px] overflow-hidden bg-white'>
                <img
                  className='w-full rounded-[10px]'
                  src={singleSeminar?.image || '/image/seminars.webp'}
                  alt='image'
                />
                <div className='p-4'>
                  <Countdown seminarDate={singleSeminar?.seminar_date} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className='pb-[60px] pt-[60px]'>
        <div className='mx-auto px-4 sm:px-6 container lg:px-8'>
          <div className='grid grid-cols-1 gap-4 md:grid-cols-8 md:gap-9'>
            <div className='md:col-span-5'>
              <div className=''>
                <div className='border border-[#dee2e6] rounded-xl p-6'>
                  <h2 className='mb-7 text-2xl font-semibold capitalize font-siliguri leading-[30px] text-[#003384]'>
                    এই ফ্রি সেমিনারে যা যা শিখবেন-
                  </h2>

                  <div>
                    <ul>
                      {singleSeminar?.description?.map((item, index) => (
                        <li
                          key={index}
                          className={
                            index === singleSeminar?.description.length - 1
                              ? 'pb-0'
                              : 'pb-4'
                          }
                        >
                          <div className='flex items-center gap-2'>
                            <div>
                              <IoMdArrowDroprightCircle className='w-[22px] h-[22px] text-primary' />
                            </div>
                            <p className='text-base font-siliguri'>{item}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className='md:col-span-3'>
              <div>
                <SeminarRegistrationForm
                  seminarId={singleSeminar.seminar_id}
                  courseId={singleSeminar.course_id}
                />
              </div>
              <div className='mt-6'>
                <div className='lg:px-6 p-8 bg-[#2D0B70] lg:pb-0 lg:p-12 relative rounded-xl h-full  bg-cover gap-3'>
                  <div className='max-w-full relative z-10'>
                    <h3 className='font-bold text-white leading-10 text-center text-xl md:text-3xl mb-4 font-siliguri'>
                      পেইড কোর্স বা যেকোনো প্রশ্ন বা সাজেশন প্রয়োজন হলে কল
                      করুন।
                    </h3>
                    <p className='text-base text-white/80 mb-6'>
                      <span className='flex items-center justify-center ml-2 cursor-pointer text-green'>
                        <svg
                          stroke='currentColor'
                          fill='currentColor'
                          strokeWidth='0'
                          viewBox='0 0 512 512'
                          height='1em'
                          width='1em'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path d='M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z'></path>
                        </svg>
                        <span className='ml-2 font-siliguri font-medium'>
                          ফোন করুন (0179-944-6655)
                        </span>
                      </span>
                    </p>
                  </div>
                  <div>
                    <img
                      src='/image/icons/bn-3.svg'
                      className='hidden lg:block relative z-10'
                      alt='benefit illustration'
                    />
                  </div>
                  <img
                    src='/image/icons/blur-shape.png'
                    alt='blur shape'
                    className='h-full w-full -z-0 absolute top-0 right-0'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeminarDetails;
