import PageBanner from '@/components/PageBanner/PageBanner';
import { API_BASE_URL } from '../lib/config';
import CoursePagination from './CoursePagination';

export const metadata = {
  title: 'Courses - PeopleNTech',
  description:
    'We PeopleNTech is offering professional IT training course &amp; job placement facility for students. We are affiliating with top notch IT company in Bangladesh..',
};

const fetchCourses = async () => {
  const res = await fetch(`${API_BASE_URL}/courses`, {
    cache: 'no-store',
  });
  const apiData = await res.json();
  return apiData.data?.data || [];
};

const AllCourse = async () => {
  const courses = await fetchCourses();
  return (
    <div>
      <PageBanner title='Our All Courses' subtitle='Courses' />
      <div className='pt-[100px] pb-[100px] bg-[#f8fafc]'>
        <div className='mx-auto px-4 sm:px-6 container lg:px-8'>
          <CoursePagination courses={courses} />
        </div>
      </div>
    </div>
  );
};

export default AllCourse;
