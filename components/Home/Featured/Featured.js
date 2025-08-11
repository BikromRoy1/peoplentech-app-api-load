import SectionTitle from '@/components/SectionTitle/SectionTitle';
import Link from 'next/link';
import { IoArrowForwardSharp } from 'react-icons/io5';
import './Featured.css';

const Featured = () => {
  return (
    <section className='pb-[100px] pt-[100px] featured-background'>
      <div className='shapes'>
        <div className='shape-1'>
          <img src='/image/background/feature-shape-3.png' alt='shape' />
        </div>
        <div className='shape-2'>
          <img src='/image/background/feature-shape-4.png' alt='shape' />
        </div>
        <div className='shape-3'>
          <img src='/image/background/feature-shape-5.png' alt='shape' />
        </div>
        <div className='shape-4'>
          <img src='/image/background/feature-shape-6.png' alt='shape' />
        </div>
      </div>
      <div className='mx-auto px-4 sm:px-6 container lg:px-8'>
        <SectionTitle
          title='Why Is PeopleNTech The Best Choice ?'
          subtitle='Special Services'
        />
        <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3'>
          <div className='bg-white rounded-[15px] p-[30px] border-2 border-transparent transition-all duration-300 ease-in-out hover:border-primary '>
            <div className='flex mb-[30px] items-center gap-4'>
              <div className='bg-[#F2F4F7] w-[70px] h-[70px] flex items-center justify-center rounded-[10px]'>
                <img
                  className='w-[45px] h-[45px] object-cover'
                  src='/image/icons/feature-1.svg'
                  alt='icons'
                />
              </div>
              <div>
                <h3 className='mb-0 text-[23px] leading-7 font-semibold text-[#162726] hover:text-primary transition-all duration-300 ease-in-out'>
                  Industry Focused Live Course
                </h3>
              </div>
            </div>
            <p className='text-[#6C706F] text-[15px] mb-0 font-medium'>
              Every piece of our content is developed in collaboration with
              leading industry experts, ensuring direct support, guidance, and
              feedback. By participating in industry-centric live courses, our
              goal is to cultivate professionalism and expertise among our
              students in their chosen field of study.
            </p>
          </div>
          <div className='bg-white rounded-[15px] p-[30px] border-2 border-transparent transition-all duration-300 ease-in-out hover:border-primary '>
            <div className='flex mb-[30px] items-center gap-4'>
              <div className='bg-[#F2F4F7] w-[70px] h-[70px] flex items-center justify-center rounded-[10px]'>
                <img
                  className='w-[45px] h-[45px] object-cover'
                  src='/image/icons/feature-2.svg'
                  alt='icons'
                />
              </div>
              <div>
                <h3 className='mb-0 text-[23px] leading-7 font-semibold text-[#162726] hover:text-primary transition-all duration-300 ease-in-out'>
                  Job and Internship Opportunities
                </h3>
              </div>
            </div>
            <p className='text-[#6C706F] text-[15px] mb-0 font-medium'>
              Over the past 14 years, our recruitment team has consistently
              achieved impressive job placement results for our students.
              Currently, the PeopleNTech job placement team in Bangladesh is
              actively assisting students in securing positions at major
              companies in the country.
            </p>
          </div>
          <div className='bg-white rounded-[15px] p-[30px] border-2 border-transparent transition-all duration-300 ease-in-out hover:border-primary '>
            <div className='flex mb-[30px] items-center gap-4'>
              <div className='bg-[#F2F4F7] w-[70px] h-[70px] flex items-center justify-center rounded-[10px]'>
                <img
                  className='w-[45px] h-[45px] object-cover'
                  src='/image/icons/feature-3.svg'
                  alt='icons'
                />
              </div>
              <div>
                <h3 className='mb-0 text-[23px] leading-7 font-semibold text-[#162726] hover:text-primary transition-all duration-300 ease-in-out'>
                  Lifetime Support
                </h3>
              </div>
            </div>
            <p className='text-[#6C706F] text-[15px] mb-0 font-medium'>
              At the conclusion of the course, we offer lifelong support to our
              trainees. They can engage in real-time chat with our online team
              or visit our institution for assistance whenever needed.
            </p>
          </div>
          <div className='bg-white rounded-[15px] p-[30px] border-2 border-transparent transition-all duration-300 ease-in-out hover:border-primary '>
            <div className='flex mb-[30px] items-center gap-4'>
              <div className='bg-[#F2F4F7] w-[70px] h-[70px] flex items-center justify-center rounded-[10px]'>
                <img
                  className='w-[45px] h-[45px] object-cover'
                  src='/image/icons/feature-4.svg'
                  alt='icons'
                />
              </div>
              <div>
                <h3 className='mb-0 text-[23px] leading-7 font-semibold text-[#162726] hover:text-primary transition-all duration-300 ease-in-out'>
                  Support For Freelance Work
                </h3>
              </div>
            </div>
            <p className='text-[#6C706F] text-[15px] mb-0 font-medium'>
              We offer comprehensive guidance and assistance to trainees
              interested in pursuing freelance opportunities post-course
              completion. Students can access support directly from the
              institution at any time for their needs.
            </p>
          </div>
          <div className='bg-white rounded-[15px] p-[30px] border-2 border-transparent transition-all duration-300 ease-in-out hover:border-primary '>
            <div className='flex mb-[30px] items-center gap-4'>
              <div className='bg-[#F2F4F7] w-[70px] h-[70px] flex items-center justify-center rounded-[10px]'>
                <img
                  className='w-[45px] h-[45px] object-cover'
                  src='/image/icons/feature-5.svg'
                  alt='icons'
                />
              </div>
              <div>
                <h3 className='mb-0 text-[23px] leading-7 font-semibold text-[#162726] hover:text-primary transition-all duration-300 ease-in-out'>
                  Career and Interview Preparation
                </h3>
              </div>
            </div>
            <p className='text-[#6C706F] text-[15px] mb-0 font-medium'>
              Our trainees will get direct support for your CV, LinkedIn
              profile, GitHub profile and job interview at the end of the
              course.
            </p>
          </div>
          <div className='bg-white rounded-[15px] p-[30px] border-2 border-transparent transition-all duration-300 ease-in-out hover:border-primary '>
            <div className='flex mb-[30px] items-center gap-4'>
              <div className='bg-[#F2F4F7] w-[70px] h-[70px] flex items-center justify-center rounded-[10px]'>
                <img
                  className='w-[45px] h-[45px] object-cover'
                  src='/image/icons/feature-6.svg'
                  alt='icons'
                />
              </div>
              <div>
                <h3 className='mb-0 text-[23px] leading-7 font-semibold text-[#162726] hover:text-primary transition-all duration-300 ease-in-out'>
                  Guidance Directly From Mentors
                </h3>
              </div>
            </div>
            <p className='text-[#6C706F] text-[15px] mb-0 font-medium'>
              If any issues arise during the course, solutions are available
              from our seasoned mentors solely during designated support hours.
            </p>
          </div>
        </div>
        <div className='mt-8 text-center'>
          <Link href='/facilities' className='primary-btn'>
            Show More
            <IoArrowForwardSharp className='ml-2' />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Featured;
