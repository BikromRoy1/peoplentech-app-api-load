import PageBanner from '@/components/PageBanner/PageBanner';
import Link from 'next/link';
import { BsFillAlarmFill } from 'react-icons/bs';
import { FaPersonWalkingArrowLoopLeft } from 'react-icons/fa6';
import { API_BASE_URL } from '../lib/config';

export const metadata = {
  title: 'Free Seminars - PeopleNTech',
  description:
    'Join our free seminars and enhance your skills with PeopleNTech experts.',
};

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

// Seminar fetch function
async function fetchSeminars() {
  const res = await fetch(`${API_BASE_URL}/seminars`, {
    cache: 'force-cache', // SSG caching
  });
  if (!res.ok) throw new Error('Failed to fetch seminars');
  const data = await res.json();
  return data.data; // assuming API returns { data: [...] }
}

const Seminars = async () => {
  const seminars = await fetchSeminars();

  const getDaysLeft = (seminarDate) => {
    const date = new Date(seminarDate);
    const today = new Date();
    const diffTime = date - today;
    const days = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return days > 0 ? days : 0;
  };

  return (
    <div>
      <PageBanner title='Schedule of free seminars' subtitle='Free Seminars' />
      <div className='pb-[80px] pt-[80px]'>
        <div className='mx-auto px-4 sm:px-6 container lg:px-8'>
          <div className='grid grid-cols-1 gap-5 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2'>
            {seminars.map((seminar) => (
              <div key={seminar.id} className='project'>
                <div className='group rounded-[20px] border-2 border-red-300 bg-white px-4 py-6 transition hover:border-primary hover:bg-primary/10 sm:p-[30px]'>
                  <div>
                    <h6 className='mb-4 text-base font-black uppercase text-secondary'>
                      {new Date(seminar.seminar_date).toLocaleDateString(
                        'en-GB',
                        {
                          day: 'numeric',
                          month: 'long',
                          year: 'numeric',
                        }
                      )}
                    </h6>
                    <h4 className='mb-8 text-xl font-extrabold capitalize text-black '>
                      <Link href={`/seminars/${seminar.slug}`}>
                        {seminar?.title}
                      </Link>
                    </h4>
                    <div className='flex items-center justify-between'>
                      <div className='flex items-center gap-5'>
                        <div className='flex items-center gap-2'>
                          <Zoom />
                          <div className='font-bold text-black capitalize sm:text-base'>
                            {seminar?.seminar_platform}
                          </div>
                        </div>
                        <div className='flex items-center gap-2'>
                          <BsFillAlarmFill className='text-primary' />
                          <div className='font-bold text-black capitalize sm:text-base'>
                            {seminar?.seminar_time}
                          </div>
                        </div>
                        <div className='flex items-center gap-2'>
                          <FaPersonWalkingArrowLoopLeft className='text-primary' />
                          <div className='font-bold text-black capitalize sm:text-base'>
                            {getDaysLeft(seminar.seminar_date)} Day
                            {getDaysLeft(seminar.seminar_date) > 1
                              ? 's'
                              : ''}{' '}
                            left
                          </div>
                        </div>
                      </div>
                      <Link
                        href={`/seminars/${seminar.slug}`}
                        className='flex h-[45px] w-[45px] items-center justify-center rounded-full bg-[#F3F4F6] text-black transition hover:bg-primary hover:text-white rtl:rotate-180'
                      >
                        <svg
                          width='20'
                          height='20'
                          viewBox='0 0 20 20'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M9.41083 14.4102L10.5892 15.5885L16.1783 9.99932L10.5892 4.41016L9.41083 5.58849L12.9883 9.16599H5V10.8327H12.9883L9.41083 14.4102Z'
                            fill='currentColor'
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {seminars.length === 0 && (
              <p className='text-center text-gray-500 col-span-full'>
                No seminars available at the moment.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Seminars;
