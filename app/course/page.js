import PageBanner from '@/components/PageBanner/PageBanner';
import Link from 'next/link';
import { FaStar } from 'react-icons/fa';

export const metadata = {
  title: 'Courses - PeopleNTech',
  description:
    'We PeopleNTech is offering professional IT training course &amp; job placement facility for students. We are affiliating with top notch IT company in Bangladesh..',
};

const AllCourse = () => {
  return (
    <div>
      <PageBanner title='Our All Courses' subtitle='Courses' />
      <div className='pt-[100px] pb-[100px]'>
        <div className='mx-auto px-4 sm:px-6 container lg:px-8'>
          <div className='grid grid-cols-1 gap-4 md:grid-cols-12 md:gap-6'>
            <div className='md:col-span-3'>
              <div className='bg-[#F5F7FC] rounded-[8px] p-5 border border-[#E0E5EB]'>
                <div className='mb-6'>
                  <h3 className='text-lg capitalize text-[#162726] font-semibold mb-2'>
                    course Categories
                  </h3>
                  <div className='flex items-center gap-2 p-1.5'>
                    <input
                      id='Basic_Computing'
                      type='checkbox'
                      className='checkbox checkbox-primary h-4 w-4 rounded border shadow border-primary text-white'
                    />

                    <label
                      className='text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer font-normal'
                      for='Basic_Computing'
                    >
                      Basic Computing
                    </label>
                  </div>
                  <div className='flex items-center gap-2 p-1.5'>
                    <input
                      id='Digital_Marketing'
                      type='checkbox'
                      className='checkbox checkbox-primary h-4 w-4 rounded border shadow border-primary text-white'
                    />
                    <label
                      className='text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer font-normal'
                      for='Digital_Marketing'
                    >
                      Digital_Marketing
                    </label>
                  </div>
                  <div className='flex items-center gap-2 p-1.5'>
                    <input
                      id='Graphic'
                      type='checkbox'
                      className='checkbox checkbox-primary h-4 w-4 rounded border shadow border-primary text-white'
                    />
                    <label
                      className='text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer font-normal'
                      for='Graphic'
                    >
                      Graphic & Multimedia
                    </label>
                  </div>
                  <div className='flex items-center gap-2 p-1.5'>
                    <input
                      id='Security'
                      type='checkbox'
                      className='checkbox checkbox-primary h-4 w-4 rounded border shadow border-primary text-white'
                    />
                    <label
                      className='text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer font-normal'
                      for='Security'
                    >
                      Security & Project Management
                    </label>
                  </div>
                  <div className='flex items-center gap-2 p-1.5'>
                    <input
                      id='Network'
                      type='checkbox'
                      className='checkbox checkbox-primary h-4 w-4 rounded border shadow border-primary text-white'
                    />
                    <label
                      className='text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer font-normal'
                      for='Network'
                    >
                      Network & Server Administration
                    </label>
                  </div>
                  <div className='flex items-center gap-2 p-1.5'>
                    <input
                      id='Software'
                      type='checkbox'
                      className='checkbox checkbox-primary h-4 w-4 rounded border shadow border-primary text-white'
                    />
                    <label
                      className='text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer font-normal'
                      for='Software'
                    >
                      Web & Software Development
                    </label>
                  </div>
                  <div className='flex items-center gap-2 p-1.5'>
                    <input
                      id='Database'
                      type='checkbox'
                      className='checkbox checkbox-primary h-4 w-4 rounded border shadow border-primary text-white'
                    />
                    <label
                      className='text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer font-normal'
                      for='Database'
                    >
                      Database Management & Testing
                    </label>
                  </div>
                  <div className='flex items-center gap-2 p-1.5'>
                    <input
                      id='Diploma'
                      type='checkbox'
                      className='checkbox checkbox-primary h-4 w-4 rounded border shadow border-primary text-white'
                    />
                    <label
                      className='text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer font-normal'
                      for='Diploma'
                    >
                      Post Graduate Diploma
                    </label>
                  </div>
                </div>
                <div className='mb-6'>
                  <h3 className='text-lg capitalize text-[#162726] font-semibold mb-2'>
                    course Types
                  </h3>
                  <div className='flex items-center gap-2 p-1.5'>
                    <input
                      id='LIVE'
                      type='checkbox'
                      className='checkbox checkbox-primary h-4 w-4 rounded border shadow border-primary text-white'
                    />

                    <label
                      className='text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer font-normal'
                      for='LIVE'
                    >
                      Live
                    </label>
                  </div>
                  <div className='flex items-center gap-2 p-1.5'>
                    <input
                      id='RECORDED'
                      type='checkbox'
                      className='checkbox checkbox-primary h-4 w-4 rounded border shadow border-primary text-white'
                    />
                    <label
                      className='text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer font-normal'
                      for='RECORDED'
                    >
                      Recorded
                    </label>
                  </div>
                  <div className='flex items-center gap-2 p-1.5'>
                    <input
                      id='Freelancing'
                      type='checkbox'
                      className='checkbox checkbox-primary h-4 w-4 rounded border shadow border-primary text-white'
                    />
                    <label
                      className='text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer font-normal'
                      for='Freelancing'
                    >
                      Freelancing
                    </label>
                  </div>
                </div>
                <div>
                  <h3 className='text-lg capitalize text-[#162726] font-semibold mb-2'>
                    course Level
                  </h3>
                  <div className='flex items-center gap-2 p-1.5'>
                    <input
                      id='Beginner'
                      type='checkbox'
                      className='checkbox checkbox-primary h-4 w-4 rounded border shadow border-primary text-white'
                    />

                    <label
                      className='text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer font-normal'
                      for='Beginner'
                    >
                      Beginner
                    </label>
                  </div>
                  <div className='flex items-center gap-2 p-1.5'>
                    <input
                      id='Intermediate'
                      type='checkbox'
                      className='checkbox checkbox-primary h-4 w-4 rounded border shadow border-primary text-white'
                    />
                    <label
                      className='text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer font-normal'
                      for='Intermediate'
                    >
                      Intermediate
                    </label>
                  </div>
                  <div className='flex items-center gap-2 p-1.5'>
                    <input
                      id='Advance'
                      type='checkbox'
                      className='checkbox checkbox-primary h-4 w-4 rounded border shadow border-primary text-white'
                    />
                    <label
                      className='text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer font-normal'
                      for='Advance'
                    >
                      Advance
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className='md:col-span-9'>
              <div className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3'>
                <div className='bg-white rounded-[10px] border border-[#E0E5EB] pt-[20px] transition-transform duration-300 hover:-translate-y-[8px]'>
                  <div className='px-[20px]'>
                    <div className='w-full h-auto overflow-hidden rounded-[10px]'>
                      <img
                        className=' w-full h-full object-cover'
                        src='/image/Course/course-1.jpg'
                        alt='icons'
                      />
                    </div>
                  </div>
                  <div className='p-[20px] mb-[20px] border-b border-[#E0E5EB]'>
                    <h4 className='text-[19px] leading-7 font-semibold mb-[15px] hover:text-primary transition-all duration-300 ease-in-out'>
                      <a href='#'>
                        Adobe Premiere Pro Masterclass: Video Editing{' '}
                      </a>
                    </h4>
                    <div className='flex items-center justify-between'>
                      <div>
                        <h3>
                          <span className='text-primary font-semibold text-[17px]'>
                            ৳ 70,000
                          </span>
                          <del className='ml-3 font-medium text-[15px] text-neutral-600'>
                            ৳ 90,000
                          </del>
                        </h3>
                      </div>
                      <div className='flex items-center gap-1.5'>
                        <FaStar className='text-[#ffc000]' />
                        <span className='text-[#162726] text-[15px] font-medium'>
                          4.5(50)
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className='flex items-center justify-between px-[20px] pb-[20px]'>
                    <a
                      href=''
                      className='text-white bg-primary border border-primary font-semibold text-[15px] rounded-full py-[5px] px-[20px] hover:border-primary transition-all duration-300 ease-in-out'
                    >
                      Registration
                    </a>
                    <Link
                      className='text-[#162726] border border-[#E0E5EB] font-semibold text-[15px] rounded-full py-[5px] px-[20px] hover:border-primary transition-all duration-300 ease-in-out'
                      href='/course/professional-video-editing'
                    >
                      View Details{' '}
                    </Link>
                  </div>
                </div>
                <div className='bg-white rounded-[10px] border border-[#E0E5EB] pt-[20px] transition-transform duration-300 hover:-translate-y-[8px]'>
                  <div className='px-[20px]'>
                    <div className='w-full h-auto overflow-hidden rounded-[10px]'>
                      <img
                        className=' w-full h-full object-cover'
                        src='/image/Course/course-2.jpg'
                        alt='icons'
                      />
                    </div>
                  </div>
                  <div className='p-[20px] mb-[20px] border-b border-[#E0E5EB]'>
                    <h4 className='text-[19px] leading-7 font-semibold mb-[15px] hover:text-primary transition-all duration-300 ease-in-out'>
                      <a href='#'>Front-End Development with React JS</a>
                    </h4>
                    <div className='flex items-center justify-between'>
                      <div>
                        <h3>
                          <span className='text-primary font-semibold text-[17px]'>
                            ৳ 30,000
                          </span>
                          <del className='ml-3 font-medium text-[15px] text-neutral-600'>
                            ৳ 40,000
                          </del>
                        </h3>
                      </div>
                      <div className='flex items-center gap-1.5'>
                        <FaStar className='text-[#ffc000]' />
                        <span className='text-[#162726] text-[15px] font-medium'>
                          4.9(30)
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className='flex items-center justify-between px-[20px] pb-[20px]'>
                    <a
                      href=''
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
                <div className='bg-white rounded-[10px] border border-[#E0E5EB] pt-[20px] transition-transform duration-300 hover:-translate-y-[8px]'>
                  <div className='px-[20px]'>
                    <div className='w-full h-auto overflow-hidden rounded-[10px]'>
                      <img
                        className=' w-full h-full object-cover'
                        src='/image/Course/course-3.jpg'
                        alt='icons'
                      />
                    </div>
                  </div>
                  <div className='p-[20px] mb-[20px] border-b border-[#E0E5EB]'>
                    <h4 className='text-[19px] leading-7 font-semibold mb-[15px] hover:text-primary transition-all duration-300 ease-in-out'>
                      <a href='#'>Diploma in Graphics & Animation</a>
                    </h4>
                    <div className='flex items-center justify-between'>
                      <div>
                        <h3>
                          <span className='text-primary font-semibold text-[17px]'>
                            ৳ 50,000
                          </span>
                          <del className='ml-3 font-medium text-[15px] text-neutral-600'>
                            ৳ 60,000
                          </del>
                        </h3>
                      </div>
                      <div className='flex items-center gap-1.5'>
                        <FaStar className='text-[#ffc000]' />
                        <span className='text-[#162726] text-[15px] font-medium'>
                          4.2(80)
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className='flex items-center justify-between px-[20px] pb-[20px]'>
                    <a
                      href=''
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
                <div className='bg-white rounded-[10px] border border-[#E0E5EB] pt-[20px] transition-transform duration-300 hover:-translate-y-[8px]'>
                  <div className='px-[20px]'>
                    <div className='w-full h-auto overflow-hidden rounded-[10px]'>
                      <img
                        className=' w-full h-full object-cover'
                        src='/image/Course/course-4.jpg'
                        alt='icons'
                      />
                    </div>
                  </div>
                  <div className='p-[20px] mb-[20px] border-b border-[#E0E5EB]'>
                    <h4 className='text-[19px] leading-7 font-semibold mb-[15px] hover:text-primary transition-all duration-300 ease-in-out'>
                      <a href='#'>IT Infrastructure & Cybersecurity Diploma</a>
                    </h4>
                    <div className='flex items-center justify-between'>
                      <div>
                        <h3>
                          <span className='text-primary font-semibold text-[17px]'>
                            ৳ 25,000
                          </span>
                          <del className='ml-3 font-medium text-[15px] text-neutral-600'>
                            ৳ 35,000
                          </del>
                        </h3>
                      </div>
                      <div className='flex items-center gap-1.5'>
                        <FaStar className='text-[#ffc000]' />
                        <span className='text-[#162726] text-[15px] font-medium'>
                          5.0(26)
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className='flex items-center justify-between px-[20px] pb-[20px]'>
                    <a
                      href=''
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
                <div className='bg-white rounded-[10px] border border-[#E0E5EB] pt-[20px] transition-transform duration-300 hover:-translate-y-[8px]'>
                  <div className='px-[20px]'>
                    <div className='w-full h-auto overflow-hidden rounded-[10px]'>
                      <img
                        className=' w-full h-full object-cover'
                        src='/image/Course/course-6.jpg'
                        alt='icons'
                      />
                    </div>
                  </div>
                  <div className='p-[20px] mb-[20px] border-b border-[#E0E5EB]'>
                    <h4 className='text-[19px] leading-7 font-semibold mb-[15px] hover:text-primary transition-all duration-300 ease-in-out'>
                      <a href='#'>Amazon Web Service</a>
                    </h4>
                    <div className='flex items-center justify-between'>
                      <div>
                        <h3>
                          <span className='text-primary font-semibold text-[17px]'>
                            ৳ 25,000
                          </span>
                          <del className='ml-3 font-medium text-[15px] text-neutral-600'>
                            ৳ 35,000
                          </del>
                        </h3>
                      </div>
                      <div className='flex items-center gap-1.5'>
                        <FaStar className='text-[#ffc000]' />
                        <span className='text-[#162726] text-[15px] font-medium'>
                          5.0(26)
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className='flex items-center justify-between px-[20px] pb-[20px]'>
                    <a
                      href=''
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
                <div className='bg-white rounded-[10px] border border-[#E0E5EB] pt-[20px] transition-transform duration-300 hover:-translate-y-[8px]'>
                  <div className='px-[20px]'>
                    <div className='w-full h-auto overflow-hidden rounded-[10px]'>
                      <img
                        className=' w-full h-full object-cover'
                        src='/image/Course/course-5.jpg'
                        alt='icons'
                      />
                    </div>
                  </div>
                  <div className='p-[20px] mb-[20px] border-b border-[#E0E5EB]'>
                    <h4 className='text-[19px] leading-7 font-semibold mb-[15px] hover:text-primary transition-all duration-300 ease-in-out'>
                      <a href='#'>Creative Graphic Design with Freelancing</a>
                    </h4>
                    <div className='flex items-center justify-between'>
                      <div>
                        <h3>
                          <span className='text-primary font-semibold text-[17px]'>
                            ৳ 25,000
                          </span>
                          <del className='ml-3 font-medium text-[15px] text-neutral-600'>
                            ৳ 35,000
                          </del>
                        </h3>
                      </div>
                      <div className='flex items-center gap-1.5'>
                        <FaStar className='text-[#ffc000]' />
                        <span className='text-[#162726] text-[15px] font-medium'>
                          5.0(26)
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className='flex items-center justify-between px-[20px] pb-[20px]'>
                    <a
                      href=''
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
                <div className='bg-white rounded-[10px] border border-[#E0E5EB] pt-[20px] transition-transform duration-300 hover:-translate-y-[8px]'>
                  <div className='px-[20px]'>
                    <div className='w-full h-auto overflow-hidden rounded-[10px]'>
                      <img
                        className=' w-full h-full object-cover'
                        src='/image/Course/course-7.jpg'
                        alt='icons'
                      />
                    </div>
                  </div>
                  <div className='p-[20px] mb-[20px] border-b border-[#E0E5EB]'>
                    <h4 className='text-[19px] leading-7 font-semibold mb-[15px] hover:text-primary transition-all duration-300 ease-in-out'>
                      <a href='#'>Backend Development With Node JS</a>
                    </h4>
                    <div className='flex items-center justify-between'>
                      <div>
                        <h3>
                          <span className='text-primary font-semibold text-[17px]'>
                            ৳ 95,000
                          </span>
                          <del className='ml-3 font-medium text-[15px] text-neutral-600'>
                            ৳ 75,000
                          </del>
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
                      href=''
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
                <div className='bg-white rounded-[10px] border border-[#E0E5EB] pt-[20px] transition-transform duration-300 hover:-translate-y-[8px]'>
                  <div className='px-[20px]'>
                    <div className='w-full h-auto overflow-hidden rounded-[10px]'>
                      <img
                        className=' w-full h-full object-cover'
                        src='/image/Course/course-8.jpg'
                        alt='icons'
                      />
                    </div>
                  </div>
                  <div className='p-[20px] mb-[20px] border-b border-[#E0E5EB]'>
                    <h4 className='text-[19px] leading-7 font-semibold mb-[15px] hover:text-primary transition-all duration-300 ease-in-out'>
                      <a href='#'>Professional Video Editing</a>
                    </h4>
                    <div className='flex items-center justify-between'>
                      <div>
                        <h3>
                          <span className='text-primary font-semibold text-[17px]'>
                            ৳ 85,000
                          </span>
                          <del className='ml-3 font-medium text-[15px] text-neutral-600'>
                            ৳ 80,000
                          </del>
                        </h3>
                      </div>
                      <div className='flex items-center gap-1.5'>
                        <FaStar className='text-[#ffc000]' />
                        <span className='text-[#162726] text-[15px] font-medium'>
                          5.0(26)
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className='flex items-center justify-between px-[20px] pb-[20px]'>
                    <a
                      href=''
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
                <div className='bg-white rounded-[10px] border border-[#E0E5EB] pt-[20px] transition-transform duration-300 hover:-translate-y-[8px]'>
                  <div className='px-[20px]'>
                    <div className='w-full h-auto overflow-hidden rounded-[10px]'>
                      <img
                        className=' w-full h-full object-cover'
                        src='/image/Course/course-9.jpg'
                        alt='icons'
                      />
                    </div>
                  </div>
                  <div className='p-[20px] mb-[20px] border-b border-[#E0E5EB]'>
                    <h4 className='text-[19px] leading-7 font-semibold mb-[15px] hover:text-primary transition-all duration-300 ease-in-out'>
                      <a href='#'>Diploma in Full Stack Development</a>
                    </h4>
                    <div className='flex items-center justify-between'>
                      <div>
                        <h3>
                          <span className='text-primary font-semibold text-[17px]'>
                            ৳ 50,000
                          </span>
                          <del className='ml-3 font-medium text-[15px] text-neutral-600'>
                            ৳ 45,000
                          </del>
                        </h3>
                      </div>
                      <div className='flex items-center gap-1.5'>
                        <FaStar className='text-[#ffc000]' />
                        <span className='text-[#162726] text-[15px] font-medium'>
                          5.0(26)
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className='flex items-center justify-between px-[20px] pb-[20px]'>
                    <a
                      href=''
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllCourse;
