import PageBanner from '@/components/PageBanner/PageBanner';
import Link from 'next/link';
import { IoArrowForwardSharp } from 'react-icons/io5';
import { API_BASE_URL } from '../lib/config';

export const metadata = {
  title: ' Our Mentors - PeopleNTech',
  description:
    'We PeopleNTech is offering professional IT training course &amp; job placement facility for students. We are affiliating with top notch IT company in Bangladesh..',
};

async function getTeachers() {
  const res = await fetch(`${API_BASE_URL}/teachers`, { cache: 'no-store' }); // no-store = fresh data every request
  if (!res.ok) throw new Error('Failed to fetch teachers');
  return res.json();
}

const Faculty = async () => {
  const teachers = await getTeachers();

  return (
    <div>
      <PageBanner
        title='Start the course with the best mentor'
        subtitle='Our Mentors'
      />
      <div className='pt-[80px] pb-[80px]'>
        <div className='mx-auto px-4 sm:px-6 container lg:px-8'>
          <div className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4'>
            {teachers?.data?.data?.map((teacher) => {
              const imageUrl =
                teacher.image?.trim() || '/image/Teachers/default.jpg';
              return (
                <div
                  key={teacher.id}
                  className='bg-linear-to-l from-[#e4f8fe] to-[#ffeef3] rounded-[10px] border border-[#E0E5EB] pt-[20px] transition-transform duration-300 hover:-translate-y-[8px]'
                >
                  <div className='px-[20px]'>
                    <div className='w-full h-auto overflow-hidden rounded-[10px]'>
                      <img
                        className='w-full h-full object-cover'
                        src={imageUrl}
                        alt={teacher.name}
                      />
                    </div>
                  </div>
                  <div className='p-[20px] text-center'>
                    <h4 className='text-[19px] capitalize leading-7 font-semibold mb-[3px] hover:text-primary transition-all duration-300 ease-in-out'>
                      <Link href={`/faculty/${teacher.id}`}>
                        {teacher.name}
                      </Link>
                    </h4>
                    <p className='text-[15px] leading-6 text-[#162726] font-medium'>
                      {teacher.designation || 'Faculty Member'}
                    </p>
                  </div>
                  <div className='flex items-center justify-center px-[20px] pb-[20px]'>
                    <Link
                      className='text-white flex items-center justify-center w-full border bg-primary border-primary font-semibold text-[15px] rounded-lg py-[7px] px-[20px] hover:border-[#0B0A28] hover:bg-[#0B0A28] transition-all duration-300 ease-in-out'
                      href={`/faculty/${teacher.id}`}
                    >
                      View Details <IoArrowForwardSharp className='ml-2' />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faculty;
