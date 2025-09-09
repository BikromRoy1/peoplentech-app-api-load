import { API_BASE_URL } from '@/app/lib/config';
import DepartmentSectionTitle from '@/components/DepartmentSectionTitle/DepartmentSectionTitle';
import Link from 'next/link';
import { FaStar } from 'react-icons/fa';

async function getCourses() {
  const res = await fetch(`${API_BASE_URL}/diploma-courses`, {
    cache: 'no-store',
  });
  if (!res.ok) {
    throw new Error('Failed to fetch courses');
  }
  const result = await res.json();
  return result?.data?.data || [];
}

const PostGraduateCourses = async () => {
  const courses = await getCourses();

  return (
    <section className='pb-[60px] pt-[80px] bg-[#ffffff]'>
      <div className='mx-auto px-4 sm:px-6 container lg:px-8'>
        <DepartmentSectionTitle
          title='আমাদের স্নাতক ডিপ্লোমা'
          subtitle='ট্রেনিং কোর্সসমূহ'
          text='দক্ষতা বৃদ্ধি করে নিজের ক্যারিয়ার গড়তে বেঁছে নাও তোমার পছন্দের স্কিল অনলাইন এবং অফলাইন যেকোনো কোর্সে তোমার সুবিধামতো সময়ে ভর্তি হতে পারবে এখনই। চয়েস করো তোমার কোর্স ও ব্যাচের টাইম।'
        />
        <div className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3'>
          {courses?.map((course) => (
            <div
              key={course?.id}
              className='bg-white rounded-[10px] border border-[#E0E5EB] pt-[20px] transition-transform duration-300 hover:-translate-y-[8px]'
            >
              <div className='px-[20px]'>
                <div className='w-full h-auto overflow-hidden rounded-[10px]'>
                  <img
                    className=' w-full h-full object-cover'
                    src={course?.image || '/image/Course/default.jpg'}
                    alt={course?.name}
                  />
                </div>
              </div>
              <div className='p-[20px] mb-[20px] border-b border-[#E0E5EB]'>
                <h4 className='text-[19px] leading-7 font-semibold mb-[15px] hover:text-primary transition-all duration-300 ease-in-out'>
                  <Link href={`/course/${course.slug}`}>{course?.name}</Link>
                </h4>
                <div className='flex items-center justify-between'>
                  <div>
                    <h3>
                      <span className='text-primary font-semibold text-[17px]'>
                        ৳ {course.offline_discount_price?.toLocaleString() || 0}
                      </span>
                      {course.offline_discount_price && (
                        <del className='ml-3 font-medium text-[15px] text-neutral-600'>
                          ৳ {course?.offline_price?.toLocaleString()}
                        </del>
                      )}
                    </h3>
                  </div>
                  <div className='flex items-center gap-1.5'>
                    <FaStar className='text-[#ffc000]' />
                    <span className='text-[#162726] text-[15px] font-medium'>
                      5.0(60)
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
                <Link
                  className='text-[#162726] border border-[#E0E5EB] font-semibold text-[15px] rounded-full py-[5px] px-[20px] hover:border-primary transition-all duration-300 ease-in-out'
                  href={`/course/${course.slug}`}
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PostGraduateCourses;
