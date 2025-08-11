import { IoArrowForwardSharp } from 'react-icons/io5';
import './Banner.css';

const Banner = () => {
  return (
    <section className='hero-banner relative'>
      <div className='mx-auto px-4 sm:px-6 container lg:px-8'>
        <div className='relative'>
          <div className='w-full lg:w-1/2'>
            <div className='content-box'>
              <h2 className='hero-title'>
                Creating Skilled Manpower, Freelancer & Entrepreneur since 2005
              </h2>
              <p className='hero1-content__desc'>
                Pioneering professional skill development with expert mentors,
                ensuring continuous success through strategic job placements in
                the tech sector. A proven pathway to thriving careers in the
                dynamic digital landscape
              </p>
              <div className='flex items-center gap-5'>
                <a href='#' className='primary-btn'>
                  Find The Course
                  <IoArrowForwardSharp className='ml-2' />
                </a>
                <a href='#' className='primary-btn second-btn'>
                  Join Free Seminar <IoArrowForwardSharp className='ml-2' />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
