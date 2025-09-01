// import { API_BASE_URL } from '@/app/lib/config';
// import SectionTitle from '@/components/SectionTitle/SectionTitle';

// async function getDepartment() {
//   const res = await fetch(`${API_BASE_URL}/departments`, {
//     cache: 'no-store',
//   });
//   if (!res.ok) {
//     throw new Error('Failed to fetch Department');
//   }
//   const result = await res.json();
//   return result?.data || [];
// }

// const Department = async () => {
//   const departments = await getDepartment();
//   return (
//     <section className='pb-[100px] pt-[20px]'>
//       <div className='mx-auto px-4 sm:px-6 container lg:px-8'>
//         <SectionTitle title='Browse By Departments' subtitle='Our Department' />
//         <div className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4'>
//           {departments?.map((department) => (
//             <div
//               key={department.id}
//               className='bg-[#F2F4F7] rounded-[10px] p-2.5 transition-transform duration-300 hover:-translate-y-[10px]'
//             >
//               <div>
//                 <img
//                   className='w-full h-[200px] object-cover object-center rounded-[10px]'
//                   src={department?.image || '/image/Course/default.jpg'}
//                   alt={department?.name}
//                 />
//               </div>
//               <div className='mt-2.5'>
//                 <a
//                   className='py-[11px] px-[16px] bg-[#d3eaf6] block rounded-[10px] text-[17px] text-[#162726] font-semibold w-full transition duration-300 hover:bg-primary hover:text-white '
//                   href='#'
//                 >
//                   <span className='flex justify-center'>
//                     {department?.name || 'Department'}
//                   </span>
//                 </a>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Department;

import SectionTitle from '@/components/SectionTitle/SectionTitle';
import Link from 'next/link';

const Department = () => {
  return (
    <section className='pb-[100px] pt-[20px]'>
      <div className='mx-auto px-4 sm:px-6 container lg:px-8'>
        <SectionTitle title='Browse By Departments' subtitle='Our Department' />
        <div className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4'>
          <div className='bg-[#F2F4F7] rounded-[10px] p-2.5 transition-transform duration-300 hover:-translate-y-[10px]'>
            <div>
              <img
                className='w-full h-[200px] object-cover object-center rounded-[10px]'
                src='/image/Department/category-img-1.jpg'
                alt='Department'
              />
            </div>
            <div className='mt-2.5'>
              <Link
                className='py-[11px] px-[16px] bg-[#9bddff] block rounded-[10px] text-[17px] text-[#162726] font-semibold w-full transition duration-300 hover:bg-primary hover:text-white '
                href='/post-graduate-diploma'
              >
                <span className='flex justify-center'>
                  Post Graduate Diploma
                </span>
              </Link>
            </div>
          </div>
          <div className='bg-[#F2F4F7] rounded-[10px] p-2.5 transition-transform duration-300 hover:-translate-y-[10px]'>
            <div>
              <img
                className='w-full h-[200px] object-cover object-center rounded-[10px]'
                src='/image/Department/category-img-2.jpg'
                alt='Department'
              />
            </div>
            <div className='mt-2.5'>
              <a
                target='_blank'
                className='py-[11px] px-[16px] bg-[#9bddff] block rounded-[10px] text-[17px] text-[#162726] font-semibold w-full transition duration-300 hover:bg-primary hover:text-white '
                href='https://peoplentech.net/'
              >
                <span className='flex justify-center'>
                  Software Development
                </span>
              </a>
            </div>
          </div>
          <div className='bg-[#F2F4F7] rounded-[10px] p-2.5 transition-transform duration-300 hover:-translate-y-[10px]'>
            <div>
              <img
                className='w-full h-[200px] object-cover object-center rounded-[10px]'
                src='/image/Department/category-img-9.jpg'
                alt='Department'
              />
            </div>
            <div className='mt-2.5'>
              <Link
                className='py-[11px] px-[16px] bg-[#9bddff] block rounded-[10px] text-[17px] text-[#162726] font-semibold w-full transition duration-300 hover:bg-primary hover:text-white '
                href='/polytechnic'
              >
                <span className='flex justify-center'>Polytechnic Program</span>
              </Link>
            </div>
          </div>
          <div className='bg-[#F2F4F7] rounded-[10px] p-2.5 transition-transform duration-300 hover:-translate-y-[10px]'>
            <div>
              <img
                className='w-full h-[200px] object-cover object-center rounded-[10px]'
                src='/image/Department/category-img-4.jpg'
                alt='Department'
              />
            </div>
            <div className='mt-2.5'>
              <a
                target='_blank'
                className='py-[11px] px-[16px] bg-[#9bddff] block rounded-[10px] text-[17px] text-[#162726] font-semibold w-full transition duration-300 hover:bg-primary hover:text-white '
                href='https://www.wust.edu/'
              >
                <span className='flex justify-center'>WUST University </span>
              </a>
            </div>
          </div>
          <div className='bg-[#F2F4F7] rounded-[10px] p-2.5 transition-transform duration-300 hover:-translate-y-[10px]'>
            <div>
              <img
                className='w-full h-[200px] object-cover object-center rounded-[10px]'
                src='/image/Department/category-img-6.jpg'
                alt='Department'
              />
            </div>
            <div className='mt-2.5'>
              <a
                target='_blank'
                className='py-[11px] px-[16px] bg-[#9bddff] block rounded-[10px] text-[17px] text-[#162726] font-semibold w-full transition duration-300 hover:bg-primary hover:text-white '
                href='https://www.pntdns.com/'
              >
                <span className='flex justify-center'>Hosting Services</span>
              </a>
            </div>
          </div>
          <div className='bg-[#F2F4F7] rounded-[10px] p-2.5 transition-transform duration-300 hover:-translate-y-[10px]'>
            <div>
              <img
                className='w-full h-[200px] object-cover object-center rounded-[10px]'
                src='/image/Department/category-img-5.jpg'
                alt='Department'
              />
            </div>
            <div className='mt-2.5'>
              <Link
                className='py-[11px] px-[16px] bg-[#9bddff] block rounded-[10px] text-[17px] text-[#162726] font-semibold w-full transition duration-300 hover:bg-primary hover:text-white '
                href='/short-term-courses'
              >
                <span className='flex justify-center'>Freelancing Courses</span>
              </Link>
            </div>
          </div>
          <div className='bg-[#F2F4F7] rounded-[10px] p-2.5 transition-transform duration-300 hover:-translate-y-[10px]'>
            <div>
              <img
                className='w-full h-[200px] object-cover object-center rounded-[10px]'
                src='/image/Department/category-img-7.jpg'
                alt='Department'
              />
            </div>
            <div className='mt-2.5'>
              <a
                target='_blank'
                className='py-[11px] px-[16px] bg-[#9bddff] block rounded-[10px] text-[17px] text-[#162726] font-semibold w-full transition duration-300 hover:bg-primary hover:text-white '
                href='https://higherstudyusa.com/'
              >
                <span className='flex justify-center'>
                  Education Consultancy
                </span>
              </a>
            </div>
          </div>
          <div className='bg-[#F2F4F7] rounded-[10px] p-2.5 transition-transform duration-300 hover:-translate-y-[10px]'>
            <div>
              <img
                className='w-full h-[200px] object-cover object-center rounded-[10px]'
                src='/image/Department/category-img-8.jpg'
                alt='Department'
              />
            </div>
            <div className='mt-2.5'>
              <a
                target='_blank'
                className='py-[11px] px-[16px] bg-[#9bddff] block rounded-[10px] text-[17px] text-[#162726] font-semibold w-full transition duration-300 hover:bg-primary hover:text-white '
                href='https://www.itesseract.com.bd/'
              >
                <span className='flex justify-center'>
                  Robotics & Programming Training
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Department;
