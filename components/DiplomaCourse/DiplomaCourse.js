import { FaStar } from 'react-icons/fa';
import { IoArrowForwardSharp } from 'react-icons/io5';
import SectionTitle from '../SectionTitle/SectionTitle';
import './DiplomaCourse.css';

const DiplomaCourse = () => {
  return (
    <section className='pb-[100px] pt-[100px] bg-[#0f172a] relative'>
      <div
        className='absolute inset-0 z-0'
        style={{
          backgroundImage: `radial-gradient(circle 600px at 50% 50%, rgba(59,130,246,0.3), transparent)`,
        }}
      />
      <div className='mx-auto px-4 sm:px-6 container lg:px-8 relative z-10'>
        {/* <div className='section-heading mb-[50px]'>
          <h4 className='bg-white text-[#162726] text-[15px] font-medium inline-flex items-center gap-2.5 mb-4 relative border border-[#E0E5EB] rounded-full section-padding'>
            <span className='background-color-section text-primary text-[14px] w-7 h-7 rounded-full flex items-center justify-center'>
              <FaBolt />
            </span>
            Diploma Programs Courses
          </h4>
          <h2 className='text-[20px] sm:text-[22px] md:text-[25px] lg:text-[30px] xl:text-[35px] font-semibold leading-tight mb-4'>
            Post Graduate Diploma Courses
          </h2>
          <p className='text-[15px] text-[#D3C3E0] font-medium'>
            Our career placement department is ready to help you find a
            lucrative job. We ensure your <br /> resume gets into the hands of
            the right hiring manager.
          </p>
        </div> */}
        <SectionTitle
          title='Post Graduate Diploma Courses'
          subtitle='Diploma Programs Courses'
          className='css-3xrm4'
        />
        <div className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3'>
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
        <div className='mt-8 text-center'>
          <a href='#' className='primary-btn'>
            View all course
            <IoArrowForwardSharp className='ml-2' />
          </a>
        </div>
      </div>
    </section>
  );
};

export default DiplomaCourse;
