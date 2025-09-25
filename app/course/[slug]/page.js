import { API_BASE_URL } from '@/app/lib/config';
import CourseModules from '@/components/CourseModules/CourseModules';
import DetailsAbout from '@/components/DetailsAbout/DetailsAbout';
import FeedbackCourse from '@/components/FeedbackCourse/FeedbackCourse';
import VideosModal from '@/components/VideosModal/VideosModal';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF } from 'react-icons/fa';
import { FaLinkedinIn, FaRegClone, FaRegFileLines } from 'react-icons/fa6';
import { HiOutlineUserGroup } from 'react-icons/hi';
import { MdTimeline } from 'react-icons/md';
import { RiTimerLine } from 'react-icons/ri';
import { SiReaddotcv } from 'react-icons/si';
import './CourseDetails.css';

async function getCourse(slug) {
  const res = await fetch(`${API_BASE_URL}/course/${slug}`, {
    cache: 'no-store',
  });
  if (!res.ok) throw new Error('Failed to fetch course data');
  const data = await res.json();
  return data.data;
}

export async function generateStaticParams() {
  const res = await fetch(`${API_BASE_URL}/courses`);
  const data = await res.json();

  return data?.data?.data?.map((course) => ({
    slug: course.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const res = await fetch(`${API_BASE_URL}/course/${slug}`, {
    cache: 'no-store',
  });
  const data = await res.json();
  const course = data.data;

  return {
    title: course?.name || 'Course Details',
    description: course?.meta_description || 'Learn more about this course',
    openGraph: {
      title: course?.name,
      description: course?.meta_description,
      images: [course?.image || '/image/default.jpg'],
    },
  };
}

const CourseDetails = async ({ params }) => {
  const { slug } = await params;
  const course = await getCourse(slug);

  console.log(course?.video_url);

  return (
    <section>
      <section className='pb-[90px] pt-[90px] page-banner-bg bg-[#020617] relative'>
        <div
          className='absolute inset-0 z-0'
          style={{
            backgroundImage: `radial-gradient(circle 500px at 50% 300px, rgba(4,169,255,0.35), transparent)`,
          }}
        />
        <div className='mx-auto px-4 sm:px-6 container lg:px-8 relative'>
          <div className='grid grid-cols-1 gap-4 md:grid-cols-7 md:items-center md:gap-9'>
            <div className='md:col-span-5'>
              <div>
                <ul className='mx-auto text-gray-500 text-sm lg:text-sm'>
                  <li className='inline-flex items-center'>
                    <Link
                      className='hover:text-primary text-[#ced4df] font-medium'
                      href='/'
                    >
                      Home
                    </Link>
                    <svg
                      fill='currentColor'
                      viewBox='0 0 20 20'
                      className='h-5 w-auto text-gray-300'
                    >
                      <path
                        fillRule='evenodd'
                        d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                        clipRule='evenodd'
                      ></path>
                    </svg>
                  </li>
                  <li className='inline-flex items-center'>
                    <Link
                      className='hover:text-primary text-[#ced4df] font-medium'
                      href='/course'
                    >
                      Course
                    </Link>
                    <svg
                      fill='currentColor'
                      viewBox='0 0 20 20'
                      className='h-5 w-auto text-gray-300'
                    >
                      <path
                        fillRule='evenodd'
                        d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                        clipRule='evenodd'
                      ></path>
                    </svg>
                  </li>
                  <li className='inline-flex items-center text-gray-400'>
                    <span className='capitalize'>{course?.name}</span>
                  </li>
                </ul>
                <h4 className='text-2xl lg:text-4xl font-semibold mt-4 capitalize text-white'>
                  {course?.name || 'Course Name'}
                </h4>
                <p className='text-gray-300 mt-4 text-[16px] leading-7 font-medium'>
                  {course?.short_description || 'Not Available'}
                </p>
                <div className='flex items-center gap-4 mt-6 flex-wrap'>
                  <div className='flex items-center gap-2 rounded-full bg-[#1f2838] px-6 py-2'>
                    <FaRegFileLines className='text-primary' />
                    <span className='text-white font-semibold text-[15px]'>
                      Class - {course?.total_class || 0}
                    </span>
                  </div>
                  <div className='flex items-center gap-2 rounded-full bg-[#1f2838] px-6 py-2'>
                    <RiTimerLine className='text-primary' />
                    <span className='text-white font-semibold text-[15px]'>
                      Duration - {course?.duration || 0}
                    </span>
                  </div>
                  <div className='flex items-center gap-2 rounded-full bg-[#1f2838] px-6 py-2'>
                    <FaRegClone className='text-primary' />
                    <span className='text-white font-semibold text-[15px]'>
                      Projects - {course?.total_project || 0}
                    </span>
                  </div>
                  <div className='flex items-center gap-2 rounded-full bg-[#1f2838] px-6 py-2'>
                    <HiOutlineUserGroup className='text-primary' />
                    <span className='text-white font-semibold text-[15px]'>
                      Joined - {course?.student_joined || 0}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className='md:col-span-2 text-white'>
              <div className='border-[7px] border-[#f3f4f6] rounded-[15px] overflow-hidden bg-white'>
                <div className='relative'>
                  <img
                    className='w-full rounded-[10px]'
                    src={course?.image || '/image/default.jpg'}
                    alt={course?.name}
                  />
                  <div className='flex items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10'>
                    <label htmlFor='video_modal' className='cursor-pointer'>
                      <Image
                        width={60}
                        height={60}
                        className='w-[70px] h-[70px]'
                        src='/image/icons/play_icon_2 1.svg'
                        alt='play icon'
                      />
                    </label>
                  </div>
                </div>
                <div className='p-4'>
                  <h3 className='mt-1 mb-3'>
                    <span className='text-secondary font-bold text-[23px]'>
                      ৳ {course?.offline_discount_price || 0}
                    </span>
                    {course?.offline_discount_price && (
                      <del className='ml-3 font-semibold text-[17px] text-neutral-600'>
                        ৳ {course?.offline_price || 0}
                      </del>
                    )}
                  </h3>
                  {course?.upcomingBatch?.batch_code ? (
                    <a
                      href={course?.upcomingBatch?.enroll_link}
                      target='_blank'
                    >
                      <button className='bg-primary rounded-md cursor-pointer px-8 py-2 whitespace-nowrap md:w-full text-white flex items-center justify-center text-md font-semibold capitalize'>
                        Enroll Now
                      </button>
                    </a>
                  ) : (
                    <a href={course?.registration_link} target='_blank'>
                      <button className='bg-primary rounded-md cursor-pointer px-8 py-2 whitespace-nowrap md:w-full text-white flex items-center justify-center text-md font-semibold capitalize'>
                        Register for Discount
                      </button>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <VideosModal
        video_url={course?.video_url || ''}
        video_title={course?.name || ''}
      />

      {/* More details */}
      <div className='pb-[60px] pt-[60px]'>
        <div className='mx-auto px-4 sm:px-6 container lg:px-8'>
          <div className='grid grid-cols-1 gap-4 md:grid-cols-7 md:gap-9'>
            <div className='md:col-span-5'>
              <DetailsAbout course={course} />

              <CourseModules course={course} />
              <div className='mt-10'>
                <div className='border border-[#dee2e6] rounded-xl p-6'>
                  <h2 className='mb-5 text-2xl font-semibold capitalize leading-[30px] text-[#003384]'>
                    What you will learn
                  </h2>
                  {course?.tools?.length === 0 && (
                    <p className='text-gray-500 italic'>
                      No Working Tools available.
                    </p>
                  )}
                  <div className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4'>
                    {course?.tools.map((tool, index) => (
                      <div
                        key={index}
                        className='border border-[#d9ddef] rounded-lg px-5 py-3 text-center transition-shadow duration-300 hover:shadow-[0_10px_14px_rgba(0,0,0,0.05)]'
                      >
                        <div className='w-[50px] h-[50px] mx-auto flex items-center justify-center'>
                          <Image
                            width={40}
                            height={40}
                            className='object-cover'
                            src={tool?.icon || '/image/icons/chatGPT.png'}
                            alt={tool?.name}
                          />
                        </div>
                        <h4 className='font-semibold mt-2 pb-1 text-[15px]'>
                          {tool?.name}
                        </h4>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className='mt-10'>
                <div className='border border-[#dee2e6] rounded-xl p-6'>
                  <h2 className='mb-5 text-2xl font-semibold capitalize leading-[30px] text-[#003384]'>
                    Course Instructor
                  </h2>
                  {course?.courseTeachers?.length > 0 ? (
                    <div className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3'>
                      {course?.courseTeachers?.map((teacher) => (
                        <div key={teacher?.id}>
                          <div className='flex items-center gap-3'>
                            <div className='w-[70px] h-[70px] rounded-[10px] overflow-hidden'>
                              <Image
                                width={70}
                                height={70}
                                className='object-cover rounded-[10px] border border-[#d9ddef]'
                                src={teacher?.image || '/image/icons/pic4.jpg'}
                                alt={teacher?.name}
                              />
                            </div>
                            <div>
                              <h4 className='text-[17px] font-semibold text-[#162726] mb-1'>
                                {teacher?.name}
                              </h4>
                              <p className='text-[14px] text-primary font-medium'>
                                {teacher?.designation || 'Instructor'}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className='text-gray-500 italic text-base capitalize'>
                      No instructor found.
                    </p>
                  )}
                </div>
              </div>
              <FeedbackCourse course={course} />
              <div className='mt-10'>
                <div className='border border-[#dee2e6] rounded-xl p-6'>
                  <h2 className='mb-5 text-2xl font-semibold capitalize leading-[30px] text-[#003384]'>
                    Frequently Asked Questions
                  </h2>
                  <div className='space-y-4'>
                    {course?.faqs && course.faqs.length > 0 ? (
                      course.faqs.map((faq, index) => (
                        <div
                          key={index}
                          className='collapse collapse-plus bg-base-100 border border-[#e2e8ec] rounded-lg'
                        >
                          <input
                            type='radio'
                            name='course-faq'
                            defaultChecked={index === 0} // প্রথম টা খোলা থাকবে
                          />
                          <div className='collapse-title font-semibold font-siliguri'>
                            প্রশ্ন-{index + 1} : {faq.question}
                          </div>
                          <div className='collapse-content text-sm font-siliguri'>
                            {faq.answer}
                          </div>
                        </div>
                      ))
                    ) : (
                      <p className='text-gray-500 italic font-siliguri font-normal'>
                        ❌ কোনো FAQ পাওয়া যায়নি।
                      </p>
                    )}
                  </div>
                </div>
              </div>
              <div className='mt-10'>
                <div className='lg:px-12 p-8 certificate-bg lg:pb-8 lg:p-12 relative rounded-[20px] h-full lg:flex lg:flex-row justify-between bg-cover flex-col gap-5'>
                  <div className='max-w-sm relative z-10'>
                    <h3 className='font-bold text-white text-2xl md:text-3xl mb-3'>
                      Course Certificate
                    </h3>
                    <p className='text-base text-white/70 mb-7'>
                      Get Course Completion and Assessment Certificate at the
                      end of the course
                    </p>
                    <div>
                      <div className='flex items-center gap-3 mb-3'>
                        <div>
                          <div className='p-2 bg-[#4fc3ff] rounded-md shadow'>
                            <SiReaddotcv size={20} className='text-white' />
                          </div>
                        </div>
                        <h4 className='text-[15px] font-semibold text-[#fff]'>
                          Can add to your CV
                        </h4>
                      </div>
                      <div className='flex items-center gap-3 mb-3'>
                        <div>
                          <div className='p-2 bg-[#4fc3ff] rounded-md shadow'>
                            <FaLinkedinIn size={20} className='text-white' />
                          </div>
                        </div>
                        <h4 className='text-[15px] font-semibold text-[#fff]'>
                          You can share directly on your LinkedIn profile
                        </h4>
                      </div>
                      <div className='flex items-center gap-3'>
                        <div>
                          <div className='p-2 bg-[#4fc3ff] rounded-md shadow'>
                            <FaFacebookF size={20} className='text-white' />
                          </div>
                        </div>
                        <h4 className='text-[15px] font-semibold text-[#fff]'>
                          You can share on Facebook with one click
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className='border-[7px] border-[#f3f4f6] rounded-[15px] overflow-hidden bg-white hidden lg:block'>
                      <Image
                        width={400}
                        height={400}
                        src='/image/certificate/certification-demo.jpg'
                        className='hidden lg:block relative z-10 rounded-[10px]'
                        alt='certificate'
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className='mt-10'>
                <div className='border border-[#eeeeee] rounded-[20px] p-7 query-card bg-white relative w-full'>
                  <div className=' lg:flex lg:flex-row justify-between bg-cover items-center flex-col gap-5'>
                    <div className='max-w-lg relative z-10'>
                      <h3 className='font-bold text-white text-2xl md:text-2xl mb-3'>
                        Any more query?
                      </h3>
                      <p className='text-base text-white/70 mb-7 capitalize'>
                        Call For Any Information Regarding The Course. Our team
                        is always ready to assist you with guidance, support,
                        and detailed course information.
                      </p>
                      <div>
                        <div className='flex items-center gap-3 mb-3'>
                          <div>
                            <div className=''>
                              <svg
                                xmlns='http://www.w3.org/2000/svg'
                                width='28'
                                height='28'
                                fill='none'
                                viewBox='0 0 29 28'
                                className='w-[17px] h-[17px] md:w-6 md:h-6'
                              >
                                <path
                                  stroke='#fff'
                                  strokeLinecap='round'
                                  strokeLinejoin='round'
                                  strokeWidth='2.223'
                                  d='M17.246 2.917a9.298 9.298 0 018.213 8.204M17.246 7.05a5.164 5.164 0 014.083 4.083'
                                ></path>
                                <path
                                  stroke='#fff'
                                  strokeLinecap='round'
                                  strokeLinejoin='round'
                                  strokeWidth='2.223'
                                  d='M13.37 14.551c4.655 4.653 5.71-.73 8.673 2.231 2.857 2.856 4.5 3.428.88 7.047-.454.364-3.334 4.748-13.457-5.373C-.658 8.335 3.722 5.451 4.086 4.998c3.629-3.628 4.193-1.977 7.05.879 2.961 2.962-2.42 4.022 2.235 8.674z'
                                  clipRule='evenodd'
                                ></path>
                              </svg>
                            </div>
                          </div>
                          <h4 className='text-[15px] font-semibold text-[#fff]'>
                            +880179-944-6655
                          </h4>
                        </div>

                        <div className='flex items-center gap-3'>
                          <div>
                            <div className=''>
                              <MdTimeline size={24} className='text-white' />
                            </div>
                          </div>
                          <h4 className='text-[15px] font-semibold text-[#fff]'>
                            09 AM to 09 PM
                          </h4>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className=' overflow-hidden  hidden lg:block'>
                        <Image
                          width={280}
                          height={280}
                          src='/image/background/media-65.png'
                          className='hidden lg:block relative z-10 rounded-[10px]'
                          alt='certificate'
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='md:col-span-2'>
              <div className='relative p-[2px] rounded-xl bg-gradient-to-r from-[#04a9ff] to-[#f1581e]'>
                <div className='bg-white rounded-xl p-6'>
                  <h2 className='mb-4 text-xl font-semibold'>
                    Course Features
                  </h2>
                  {course?.features && course.features.length > 0 ? (
                    course.features.map((feature, index) => (
                      <div key={feature.id}>
                        <div
                          className={`flex items-center leading-5 ${
                            index === course.features.length - 1
                              ? 'mb-0'
                              : 'mb-3'
                          }`}
                        >
                          <div className='inline-block h-[20px] w-[20px]'>
                            <Image
                              width={20}
                              height={20}
                              src={feature.icon}
                              alt={feature.title}
                            />
                          </div>
                          <h4 className='mb-0 inline-block pl-3 text-[#334155] text-[15px] font-medium'>
                            {feature.title}
                          </h4>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p className='text-gray-500 text-[15px]'>
                      No features available for this course.
                    </p>
                  )}
                </div>
              </div>
              {course?.slug && course?.name && (
                <div className='mt-6'>
                  <div className='benefits-bg rounded-xl p-6 overflow-hidden'>
                    <div>
                      <img
                        className='w-full h-60 object-contain'
                        src='/image/icons/bn-2.svg'
                        alt='image'
                      />
                    </div>
                    <div className='mt-1'>
                      <h3 className='font-bold max-w-xs text-white text-xl md:text-2xl mb-4 text-center font-siliguri'>
                        আমাদের প্ল্যাটফর্মে রয়েছে বেশ কিছু ফ্রী কোর্স মডিউল!
                      </h3>
                      <Link
                        href={{
                          pathname: '/videosPlay',
                          query: {
                            slug: course.slug,
                            title: course.name,
                          },
                        }}
                      >
                        <button className='button-bg-2 rounded-md cursor-pointer px-8 py-2 whitespace-nowrap md:w-full text-white flex items-center justify-center text-md font-semibold capitalize'>
                          Watching Free Videos
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              )}
              <div className='mt-6'>
                <div className='benefits-bg rounded-xl p-6 overflow-hidden'>
                  <div>
                    <img
                      className='w-full h-60 object-contain'
                      src='/image/icons/bn-2.svg'
                      alt='image'
                    />
                  </div>
                  <div className='mt-1'>
                    <h3 className='font-bold max-w-xs text-white text-xl md:text-2xl mb-4'>
                      Download the Guidelines for FREE!
                    </h3>
                    <Link target='_blank' href={course?.module_download_link}>
                      <button className='button-bg rounded-md cursor-pointer px-8 py-2 whitespace-nowrap md:w-full text-white flex items-center justify-center text-md font-semibold capitalize'>
                        Download Course Module
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className='mt-6'>
                <div className='lg:px-6 p-8 bg-[#2D0B70] lg:pb-0 lg:p-12 relative rounded-xl h-full  bg-cover gap-3'>
                  <div className='max-w-sm relative z-10'>
                    <h3 className='font-bold text-white text-center text-xl md:text-3xl mb-4 font-siliguri'>
                      কোর্সটি সম্পর্কে বিস্তারিত জানতে
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

export default CourseDetails;
